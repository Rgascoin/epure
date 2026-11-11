import type { Recipe } from "./types";
import { TAGS } from "./tags";

/** Lower-case, no accents, ligatures unfolded: « Bœuf » → « boeuf ». */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[’']/g, " ");
}

/** Search words, with a light French singular so « pommes » finds « pomme ». */
export function searchTokens(query: string): string[] {
  return normalize(query)
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 1)
    .map((w) => (w.length > 3 ? w.replace(/(s|x)$/, "") : w));
}

/** Everything a reader might type to find a recipe, title first. */
export function recipeHaystack(r: Recipe, categoryLabel: string): string {
  return normalize(
    [
      r.title,
      r.seoTitle,
      r.tagline,
      r.cuisine,
      categoryLabel,
      ...r.keywords,
      ...(r.tags ?? []).map((t) => TAGS[t]),
      ...(r.easy ? ["version facile", "rapide", r.easy.shortcut] : []),
      ...r.ingredients.flatMap((g) => g.items.flatMap((i) => [i.name, i.plural ?? ""])),
    ].join(" · "),
  );
}
