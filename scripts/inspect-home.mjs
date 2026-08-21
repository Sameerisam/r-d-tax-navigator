import { readFileSync } from "node:fs";

const h = readFileSync("home.html", "utf8");
console.log("len", h.length);
console.log("style tags", (h.match(/<style/g) || []).length);
console.log("stylesheet links", (h.match(/rel="stylesheet"/g) || []).length);
console.log("font preloads", (h.match(/as="font"/g) || []).length);
console.log("modulepreload", (h.match(/modulepreload/g) || []).length);

const scripts = [...h.matchAll(/src="([^"]+\.js)"/g)].map((m) => m[1]);
console.log("scripts", scripts.slice(0, 20));

const css = [...h.matchAll(/href="([^"]+\.css)"/g)].map((m) => m[1]);
console.log("css", css);

const fonts = [...h.matchAll(/href="([^"]+\.woff2)"/g)].map((m) => m[1]);
console.log("fonts", fonts);

const i = h.indexOf("BLMC prepares audit-ready");
console.log("hero in html", i > 0);

// Rough: is CSS inlined?
const styleMatch = h.match(/<style[^>]*>([\s\S]*?)<\/style>/);
console.log("first style len", styleMatch?.[1]?.length ?? 0);
console.log("font-face in html", /@font-face/.test(h));
console.log("font-display", [...h.matchAll(/font-display:\s*([a-z]+)/g)].map((m) => m[1]));
