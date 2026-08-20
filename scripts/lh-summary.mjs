/**
 * Prints category scores plus every failing/imperfect audit from a Lighthouse
 * JSON report, so the remaining work is explicit rather than inferred.
 *
 * Run with: node scripts/lh-summary.mjs [path-to-report.json]
 */
import { readFile } from "node:fs/promises";

const path = process.argv[2] ?? "lh.json";
const report = JSON.parse(await readFile(path, "utf8"));

for (const [id, category] of Object.entries(report.categories)) {
  console.log(`${String(Math.round((category.score ?? 0) * 100)).padStart(3)}  ${category.title}`);
}

console.log("\nKey metrics");
for (const key of [
  "first-contentful-paint",
  "largest-contentful-paint",
  "total-blocking-time",
  "cumulative-layout-shift",
  "speed-index",
]) {
  const audit = report.audits[key];
  if (audit) console.log(`  ${audit.title}: ${audit.displayValue}`);
}

console.log("\nImperfect audits");
for (const [id, category] of Object.entries(report.categories)) {
  const rows = category.auditRefs
    .map((ref) => report.audits[ref.id])
    .filter((audit) => audit && audit.score !== null && audit.score < 1);
  if (!rows.length) continue;
  console.log(`\n  [${category.title}]`);
  for (const audit of rows) {
    const detail = audit.displayValue ? ` — ${audit.displayValue}` : "";
    console.log(`    ${audit.score === 0 ? "FAIL" : "warn"}  ${audit.id}: ${audit.title}${detail}`);
  }
}
