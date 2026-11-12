#!/usr/bin/env node
/**
 * Regenerates content/recipes/index.ts from the folders in content/recipes.
 * Every folder containing an index.ts is a recipe. Runs before dev/build.
 *
 *   pnpm recipes:index                 every recipe, drafts included (dev, checks)
 *   pnpm recipes:index --skip-drafts   what ships (production build)
 *
 * A recipe with a `.draft` file in its folder is a draft: it is written and
 * checked like any other, but stays off the production site until the file
 * is deleted.
 */
import { readdirSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = join(process.cwd(), "content/recipes");
const skipDrafts = process.argv.includes("--skip-drafts");
const folders = readdirSync(dir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(dir, d.name, "index.ts")))
  .map((d) => d.name)
  .sort();
const drafts = folders.filter((s) => existsSync(join(dir, s, ".draft")));
const slugs = skipDrafts ? folders.filter((s) => !drafts.includes(s)) : folders;

const id = (slug) => slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase()).replace(/^[0-9]/, "_$&");

const out = `// Généré par scripts/generate-recipe-index.mjs. Ne pas modifier à la main.
// Pour ajouter une recette : créez content/recipes/<slug>/index.ts (voir docs/guide-redaction-recettes.md).
${slugs.map((s) => `import ${id(s)} from "./${s}";`).join("\n")}

export const allRecipes = [${slugs.map(id).join(", ")}];

/** Drafts (folders with a .draft file) are left out of production builds. */
export const draftsIncluded = ${!skipDrafts};
`;

writeFileSync(join(dir, "index.ts"), out);
const note = drafts.length
  ? ` (${drafts.length} brouillon${drafts.length > 1 ? "s" : ""} ${skipDrafts ? "écartés" : "inclus"})`
  : "";
console.log(`content/recipes/index.ts : ${slugs.length} recettes${note}`);
