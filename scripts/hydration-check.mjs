/**
 * Loads a page in headless Chrome, records everything React logs while
 * hydrating, and diffs the server-rendered <head> against the DOM once
 * hydration has settled. That diff is what actually proves whether a
 * server/client divergence rewrote anything.
 *
 * Run with: node scripts/hydration-check.mjs <url>
 */
import { spawn } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const url = process.argv[2] ?? "http://localhost:4173/";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9333;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForDevtools() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (res.ok) return (await res.json()).webSocketDebuggerUrl;
    } catch {}
    await sleep(500);
  }
  throw new Error("Chrome DevTools endpoint never came up");
}

const profile = await mkdtemp(join(tmpdir(), "hydration-"));
const chrome = spawn(
  CHROME,
  [
    "--headless=new",
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${profile}`,
    "--no-first-run",
    "--no-default-browser-check",
    "--disable-extensions",
    "--disable-gpu",
    "about:blank",
  ],
  { stdio: "ignore" },
);

let ws;
try {
  await waitForDevtools();

  const targets = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
  const page = targets.find((t) => t.type === "page");
  ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });

  let nextId = 1;
  const pending = new Map();
  const logs = [];

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg.result);
      pending.delete(msg.id);
      return;
    }
    if (msg.method === "Runtime.consoleAPICalled") {
      const text = msg.params.args
        .map((a) => a.value ?? a.description ?? a.unserializableValue ?? "")
        .join(" ");
      logs.push({ level: msg.params.type, text });
    }
    if (msg.method === "Runtime.exceptionThrown") {
      const d = msg.params.exceptionDetails;
      logs.push({ level: "exception", text: d.exception?.description ?? d.text });
    }
    // Failed subresources are reported here, not through Runtime. Without this
    // the harness happily reports "no errors" on a page whose scripts 500'd.
    if (msg.method === "Log.entryAdded") {
      logs.push({ level: msg.params.entry.level, text: msg.params.entry.text });
    }
  };

  const send = (method, params = {}) =>
    new Promise((resolve) => {
      const id = nextId++;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });

  await send("Runtime.enable");
  await send("Page.enable");
  await send("Log.enable");

  // The served markup, before any client JavaScript has touched it.
  const served = await (await fetch(url)).text();
  const servedStyle = served.match(/<style>([\s\S]*?)<\/style>/)?.[1] ?? "";

  await send("Page.navigate", { url });
  await sleep(6000);

  const evaluate = async (expression) => {
    const res = await send("Runtime.evaluate", { expression, returnByValue: true });
    if (res.exceptionDetails) {
      throw new Error(
        res.exceptionDetails.exception?.description ?? res.exceptionDetails.text,
      );
    }
    return res.result?.value;
  };

  const after = await evaluate(`JSON.stringify({
    styleTags: document.querySelectorAll('style').length,
    styles: [...document.querySelectorAll('style')].map(s => ({
      len: s.textContent.length,
      attrs: [...s.attributes].map(a => a.name + '=' + a.value).join(' '),
      head: s.parentElement.tagName,
      start: s.textContent.slice(0, 90).replace(/\\s+/g, ' '),
    })),
    linkedStylesheets: [...document.querySelectorAll('link[rel="stylesheet"]')].map(l => l.href),
    hydrated: [...document.querySelectorAll('body *')].some(
      el => Object.keys(el).some(k => k.startsWith('__react')),
    ),
    scripts: performance.getEntriesByType('resource')
      .filter(e => e.name.endsWith('.js'))
      .map(e => e.name.split('/').pop() + ' [' + e.responseStatus + ']'),
    bodyBg: getComputedStyle(document.body).backgroundColor,
    heroFont: getComputedStyle(document.querySelector('h1')).fontFamily,
    h1Color: getComputedStyle(document.querySelector('h1')).color,
    elements: document.querySelectorAll('*').length,
  })`);

  console.log("=== served HTML ===");
  console.log("  inline <style> length:", servedStyle.length);

  console.log("\n=== after hydration ===");
  const parsed = JSON.parse(after);
  for (const style of parsed.styles ?? []) {
    console.log(`  <style> in ${style.head}, ${style.len} chars, attrs[${style.attrs}]`);
    console.log(`      ${style.start}`);
  }
  delete parsed.styles;
  for (const [k, v] of Object.entries(parsed)) {
    console.log(`  ${k}:`, Array.isArray(v) ? JSON.stringify(v) : v);
  }

  if (process.argv.includes("--submit")) {
    // React ignores a plain `.value =` assignment, so drive the native setter
    // and fire the event the way a real keystroke would.
    await evaluate(`(() => {
      const type = (selector, value) => {
        const el = document.querySelector(selector);
        const proto = el instanceof HTMLTextAreaElement
          ? HTMLTextAreaElement.prototype
          : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, value);
        el.dispatchEvent(new Event('input', { bubbles: true }));
      };
      document.querySelector('#contact').scrollIntoView();
      type('#name', 'Test Person');
      type('#email', 'test@example.com');
      type('#message', 'Checking that the deferred toast still appears on submit.');
    })()`);

    const typed = await evaluate(`JSON.stringify({
      name: document.querySelector('#name').value,
      email: document.querySelector('#email').value,
      message: document.querySelector('#message').value,
    })`);
    console.log("\n=== field values after typing ===");
    for (const [k, v] of Object.entries(JSON.parse(typed))) console.log(`  ${k}:`, JSON.stringify(v));

    const attached = await evaluate(`JSON.stringify({
      reactPropsOnInput: Object.keys(document.querySelector('#name')).filter(k => k.startsWith('__react')),
      reactPropsOnForm: Object.keys(document.querySelector('#name').form).filter(k => k.startsWith('__react')),
      href: location.href,
    })`);
    console.log("  react attachment:", attached);

    await evaluate(`document.querySelector('#name').form.requestSubmit()`);
    await sleep(4000);

    console.log("  href after submit:", await evaluate("location.href"));
    console.log(
      "  navigations:",
      await evaluate("performance.getEntriesByType('navigation').length"),
    );

    const validation = await evaluate(
      `JSON.stringify([...document.querySelectorAll('#contact .text-destructive')].map(p => p.textContent))`,
    );
    console.log("  validation errors:", validation);

    const result = await evaluate(`JSON.stringify({
      formStillPresent: !!document.querySelector('#name'),
      toasterMounted: !!document.querySelector('[data-sonner-toaster]'),
      toastText: document.querySelector('[data-sonner-toast]')?.textContent?.replace(/\\s+/g, ' ') ?? null,
      styleTags: document.querySelectorAll('style').length,
      successPanel: document.querySelector('#contact')?.textContent.includes('Send another message') ?? false,
      sonnerRequests: performance.getEntriesByType('resource')
        .map(e => e.name.split('/').pop())
        .filter(n => /sonner|dist-/.test(n)),
    })`);

    console.log("\n=== after submitting the contact form ===");
    for (const [k, v] of Object.entries(JSON.parse(result))) {
      console.log(`  ${k}:`, Array.isArray(v) ? JSON.stringify(v) : v);
    }
  }

  console.log("\n=== console output ===");
  if (!logs.length) console.log("  (nothing logged)");
  for (const l of logs) console.log(`  [${l.level}] ${l.text.replace(/\s+/g, " ").slice(0, 600)}`);
} finally {
  ws?.close();
  chrome.kill();
  await rm(profile, { recursive: true, force: true }).catch(() => {});
}
