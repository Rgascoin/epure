#!/usr/bin/env node
/**
 * Accessibility audit (axe-core) of a few pages, in the two contexts that
 * catch most regressions: dark theme on a phone, light theme on a desktop.
 *
 *   pnpm a11y http://localhost:3311 /recettes/crepes /recettes/tiramisu
 *
 * Exits with code 1 when a page has a violation. Needs Playwright with its
 * Chromium (preinstalled in the cloud environment; locally: npx playwright install chromium).
 */
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";

const [base, ...paths] = process.argv.slice(2);
if (!base || !paths.length) {
  console.error("Usage : pnpm a11y <url de base> <chemin>...");
  process.exit(2);
}

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  console.error("Playwright est introuvable : installez-le (npx playwright install chromium).");
  process.exit(2);
}
const axe = readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");

const contexts = [
  { name: "sombre, mobile", options: { viewport: { width: 390, height: 844 }, colorScheme: "dark" } },
  { name: "clair, ordinateur", options: { viewport: { width: 1440, height: 900 }, colorScheme: "light" } },
];

const browser = await chromium.launch();
let failures = 0;
for (const { name, options } of contexts) {
  const context = await browser.newContext({ ...options, reducedMotion: "reduce" });
  for (const path of paths) {
    const page = await context.newPage();
    const res = await page.goto(base + path, { waitUntil: "networkidle" });
    if (!res || res.status() !== 200) {
      console.log(`✗ ${name} ${path} : HTTP ${res?.status()}`);
      failures += 1;
      await page.close();
      continue;
    }
    // Scroll once so that lazy and scroll-revealed content is rendered.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 30));
      }
      window.scrollTo(0, 0);
    });
    await page.addScriptTag({ content: axe });
    const violations = await page.evaluate(async () => {
      const r = await window.axe.run(document, { resultTypes: ["violations"] });
      return r.violations.map((v) => `${v.id} (${v.nodes.length}) : ${v.help}`);
    });
    if (violations.length) {
      failures += 1;
      console.log(`✗ ${name} ${path}\n  - ${violations.join("\n  - ")}`);
    } else console.log(`✓ ${name} ${path}`);
    await page.close();
  }
  await context.close();
}
await browser.close();
process.exit(failures ? 1 : 0);
