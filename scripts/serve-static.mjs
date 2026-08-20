/**
 * Serves a prerendered page plus the built client assets with production-like
 * compression and cache headers, so a local Lighthouse run measures the same
 * thing the CDN would serve.
 *
 * The SSR server is deliberately not used here: it needs far more memory than
 * an audit run leaves free on this machine, and the HTML it produces for a
 * given route is identical to the snapshot passed in.
 *
 * Run with: node scripts/serve-static.mjs <snapshot.html> [port]
 */
import { createReadStream } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createGzip } from "node:zlib";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = resolve(root, ".output/public");

const snapshotPath = resolve(root, process.argv[2] ?? "home.html");
const port = Number(process.argv[3] ?? 4174);
const snapshot = await readFile(snapshotPath);

const TYPES = {
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".html": "text/html; charset=utf-8",
};

const COMPRESSIBLE = /^(text\/|application\/(javascript|json|xml)|image\/svg)/;

const wantsGzip = (req) => (req.headers["accept-encoding"] ?? "").includes("gzip");

function send(req, res, status, type, cacheControl, body, filePath) {
  const headers = { "content-type": type, "cache-control": cacheControl };
  const compress = COMPRESSIBLE.test(type) && wantsGzip(req);

  if (compress) {
    headers["content-encoding"] = "gzip";
    headers.vary = "Accept-Encoding";
  }

  res.writeHead(status, headers);
  if (req.method === "HEAD") return res.end();

  const source = filePath ? createReadStream(filePath) : null;
  if (compress) {
    const gzip = createGzip();
    gzip.pipe(res);
    if (source) source.pipe(gzip);
    else gzip.end(body);
    return;
  }

  if (source) source.pipe(res);
  else res.end(body);
}

createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url ?? "/", "http://localhost").pathname);

  if (path === "/") {
    return send(req, res, 200, TYPES[".html"], "no-cache", snapshot);
  }

  // Hashed build output can be cached forever; anything copied verbatim from
  // public/ keeps a short lifetime because its name never changes.
  const safe = normalize(path).replace(/^(\.\.[/\\])+/, "");
  const file = join(publicDir, safe);
  if (!file.startsWith(publicDir)) return res.writeHead(403).end();

  try {
    const info = await stat(file);
    if (!info.isFile()) throw new Error("not a file");
    const type = TYPES[extname(file)] ?? "application/octet-stream";
    const cache = safe.startsWith("/assets/") || safe.startsWith("\\assets\\")
      ? "public, max-age=31536000, immutable"
      : "public, max-age=3600";
    send(req, res, 200, type, cache, null, file);
  } catch {
    res.writeHead(404, { "content-type": "text/plain" }).end("Not found");
  }
}).listen(port, () => {
  console.log(`static server: http://localhost:${port} (snapshot: ${snapshotPath})`);
});
