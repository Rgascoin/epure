import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { allRecipes, draftsIncluded } from "@/content/recipes";
import { auditRecipe } from "@/lib/recipe-rules";

/**
 * Editorial guide compliance (docs/guide-redaction-recettes.md).
 * Filter one recipe: pnpm recipes:check -t <slug>
 */
const root = process.cwd();
const slugs = new Set<string>();

describe.each(allRecipes.map((r) => [r.slug, r] as const))("%s", (slug, recipe) => {
  it("respecte les règles obligatoires du guide", () => {
    const { errors, warnings } = auditRecipe(recipe);
    if (errors.length) process.stdout.write(`\n✗ ${slug} (${errors.length})\n  - ${errors.join("\n  - ")}\n`);
    if (warnings.length) process.stdout.write(`\n⚠ ${slug}\n  - ${warnings.join("\n  - ")}\n`);
    expect(errors.length, `${errors.length} erreur(s), liste ci-dessus`).toBe(0);
  });

  it("a un slug unique, identique à son dossier", () => {
    expect(slugs.has(slug)).toBe(false);
    slugs.add(slug);
    expect(existsSync(join(root, "content/recipes", slug, "index.ts"))).toBe(true);
  });

  it("a ses photos et leurs recadrages", () => {
    for (const f of ["hero.jpg", "detail.jpg"])
      expect(existsSync(join(root, "content/recipes", slug, f)), f).toBe(true);
    for (const ratio of ["1x1", "4x3", "16x9"]) {
      const p = join(root, "public/images/recipes", slug, `${ratio}.jpg`);
      expect(existsSync(p), `${ratio}.jpg`).toBe(true);
      expect(statSync(p).size).toBeLessThan(450_000);
    }
  });
});

it("chaque dossier de recette est référencé dans l’index", () => {
  const folders = readdirSync(join(root, "content/recipes"), { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    // A draft being started may not have its index.ts yet; drafts are left out of production indexes.
    .filter((name) => {
      const isDraft = existsSync(join(root, "content/recipes", name, ".draft"));
      return !isDraft || (draftsIncluded && existsSync(join(root, "content/recipes", name, "index.ts")));
    });
  expect(new Set(folders)).toEqual(new Set(allRecipes.map((r) => r.slug)));
});
