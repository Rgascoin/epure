#!/usr/bin/env node
/**
 * Keeps docs/a-ajouter.md in step with the site, then shows what comes next.
 *
 *   pnpm recipes:todo [--next 10]
 *
 * - dish lines (`- [ ] \`slug\` …`) are ticked when content/recipes/<slug>/index.ts exists;
 * - in « Versions faciles », when that recipe has an `easy:` block;
 * - « Photos à remplacer » and other lines without a slug stay manual.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const file = join(root, "docs/a-ajouter.md");
const args = process.argv.slice(2);
const next = Number(args[args.indexOf("--next") + 1]) || 10;

const recipeFile = (slug) => join(root, "content/recipes", slug, "index.ts");
let section = "";
const stats = new Map();
const todo = [];

const lines = readFileSync(file, "utf8")
  .split("\n")
  .map((line) => {
    const heading = line.match(/^## (.+)$/);
    if (heading) section = heading[1];
    const item = line.match(/^- \[( |x)\] `([a-z0-9-]+)`(.*)$/);
    if (!item || section.startsWith("Photos")) return line;
    const [, mark, slug, rest] = item;
    const done = section.startsWith("Versions faciles")
      ? existsSync(recipeFile(slug)) && /\n\s*easy: \{/.test(readFileSync(recipeFile(slug), "utf8"))
      : existsSync(recipeFile(slug));
    const s = stats.get(section) ?? { done: 0, total: 0 };
    s.total += 1;
    s.done += done ? 1 : 0;
    stats.set(section, s);
    if (!done && !section.startsWith("Versions faciles")) todo.push(`${slug}${rest}`);
    return mark === (done ? "x" : " ") ? line : `- [${done ? "x" : " "}] \`${slug}\`${rest}`;
  });

const updated = lines.join("\n");
if (updated !== readFileSync(file, "utf8")) writeFileSync(file, updated);

for (const [name, s] of stats) console.log(`${String(s.done).padStart(3)} / ${String(s.total).padEnd(3)} ${name}`);
console.log(`\nProchains plats :`);
for (const t of todo.slice(0, next)) console.log(`  - ${t.replace(/\*\*/g, "")}`);
