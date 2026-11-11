#!/usr/bin/env node
/**
 * Regenerates content/recipes/index.ts from the folders in content/recipes.
 * Every folder containing an index.ts is a recipe. Runs before dev/build.
 *
 *   pnpm recipes:index
 */
import { readdirSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = join(process.cwd(), "content/recipes");
const slugs = readdirSync(dir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(dir, d.name, "index.ts")))
  .map((d) => d.name)
  .sort();

const id = (slug) => slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase()).replace(/^[0-9]/, "_$&");

const out = `// Généré par scripts/generate-recipe-index.mjs. Ne pas modifier à la main.
// Pour ajouter une recette : créez content/recipes/<slug>/index.ts (voir docs/guide-redaction-recettes.md).
${slugs.map((s) => `import ${id(s)} from "./${s}";`).join("\n")}

export const allRecipes = [${slugs.map(id).join(", ")}];
`;

writeFileSync(join(dir, "index.ts"), out);
console.log(`content/recipes/index.ts : ${slugs.length} recettes`);
