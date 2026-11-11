import type { Recipe, RecipeSource } from "./types";

/**
 * Declares a recipe. Used by every content/recipes/<slug>/index.ts file:
 * typed authoring + derived fields computed in one place.
 */
export function defineRecipe(source: RecipeSource): Recipe {
  return {
    ...source,
    seoImages: ["1x1", "4x3", "16x9"].map((ratio) => `/images/recipes/${source.slug}/${ratio}.jpg`),
    totalMinutes: source.times.prep + source.times.cook + (source.times.rest ?? 0),
  };
}
