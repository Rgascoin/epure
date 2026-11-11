import { categoryOf } from "@/lib/recipes";
import { recipeHaystack } from "@/lib/search";
import type { Recipe } from "@/lib/types";
import type { BrowsableRecipe } from "./recipe-browser";
import { RecipeCard } from "./recipe-card";

/** A recipe as the search/filter component needs it (shared by every listing). */
export function browsable(r: Recipe, group = categoryOf(r).slug): BrowsableRecipe {
  return {
    slug: r.slug,
    title: r.title,
    category: group,
    haystack: recipeHaystack(r, categoryOf(r).label),
    vegetarian: Boolean(r.diet?.includes("vegetarian") || r.diet?.includes("vegan")),
    quick: r.totalMinutes < 60,
    easy: r.difficulty === "Facile",
    shortcut: Boolean(r.easy),
    node: <RecipeCard recipe={r} />,
  };
}
