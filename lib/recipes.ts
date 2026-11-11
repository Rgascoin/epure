import type { Category, Recipe } from "./types";
import { allRecipes } from "@/content/recipes";
import { auditRecipe } from "./recipe-rules";

/* -------------------------------------------------------------------------- */
/*  Categories                                                                 */
/* -------------------------------------------------------------------------- */

export interface CategoryInfo {
  name: Category;
  slug: string;
  /** Plural label used in navigation and titles. */
  label: string;
  /** <title> of the category page (≤ 52 characters, the site name is appended). */
  seoTitle: string;
  /** One sentence for the category page and its meta description. */
  description: string;
}

export const categories: CategoryInfo[] = [
  {
    name: "Entrée",
    slug: "entrees",
    label: "Entrées & soupes",
    seoTitle: "Recettes de soupes, veloutés et entrées",
    description:
      "Soupes, veloutés et entrées de saison, écrits au gramme près : ce qu’il faut acheter, combien de temps, et comment ne pas les rater.",
  },
  {
    name: "Plat",
    slug: "plats",
    label: "Plats",
    seoTitle: "Recettes de plats, du quotidien au dimanche",
    description:
      "Les grands plats du quotidien et du dimanche, des pâtes du soir aux mijotés qui prennent leur temps, avec chaque geste expliqué.",
  },
  {
    name: "Accompagnement",
    slug: "accompagnements",
    label: "Accompagnements",
    seoTitle: "Recettes d’accompagnements et de gratins",
    description:
      "Gratins, légumes et garnitures qui tiennent la route à côté d’un rôti ou toute seule avec une salade.",
  },
  {
    name: "Dessert",
    slug: "desserts",
    label: "Desserts",
    seoTitle: "Recettes de desserts classiques, pas à pas",
    description:
      "Tartes, crèmes, gâteaux et mousses : les desserts classiques, avec les températures et les repères qui évitent les mauvaises surprises.",
  },
  {
    name: "Goûter",
    slug: "gouters",
    label: "Goûters & petits-déjeuners",
    seoTitle: "Recettes de goûter : crêpes, gâteaux, gaufres",
    description:
      "Crêpes, gaufres, pancakes, gâteaux de goûter : les recettes qu’on refait le week-end, en version précise.",
  },
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const categoryOf = (recipe: Recipe) => categories.find((c) => c.name === recipe.category)!;
export const categoryPath = (category: CategoryInfo) => `/categories/${category.slug}` as const;

/* -------------------------------------------------------------------------- */
/*  Recipes                                                                    */
/* -------------------------------------------------------------------------- */

const categoryRank = (c: Category) => categories.findIndex((x) => x.name === c);
const collator = new Intl.Collator("fr", { sensitivity: "base" });

/*
 * Every recipe is checked against the editorial guide (docs/guide-redaction-recettes.md).
 * A production build refuses to ship a recipe that breaks a mandatory rule.
 */
for (const recipe of allRecipes) {
  const { errors } = auditRecipe(recipe);
  if (errors.length && process.env.NODE_ENV === "production") {
    throw new Error(`La recette « ${recipe.slug} » ne respecte pas le guide :\n- ${errors.join("\n- ")}`);
  }
}

/** All recipes, ordered by category then title. */
export const recipes: Recipe[] = [...allRecipes].sort(
  (a, b) => categoryRank(a.category) - categoryRank(b.category) || collator.compare(a.title, b.title),
);

/** Hand-picked recipes for the home page notebook, in a stable order. */
export const featuredRecipes: Recipe[] = recipes.filter((r) => r.featured);

/** Most recently published first. */
export const latestRecipes: Recipe[] = [...recipes].sort((a, b) => b.datePublished.localeCompare(a.datePublished));

export function getRecipe(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}

export function recipesIn(category: CategoryInfo): Recipe[] {
  return recipes.filter((r) => r.category === category.name);
}

/** Previous / next recipe inside the same category (wraps around). */
export function getNeighbours(slug: string): { prev: Recipe; next: Recipe } {
  const recipe = getRecipe(slug)!;
  const list = recipes.filter((r) => r.category === recipe.category);
  const pool = list.length > 1 ? list : recipes;
  const i = pool.findIndex((r) => r.slug === slug);
  const n = pool.length;
  return { prev: pool[(i - 1 + n) % n], next: pool[(i + 1) % n] };
}

/** Recipes to suggest at the bottom of a page: same category first, then shared keywords. */
export function relatedRecipes(slug: string, count = 3): Recipe[] {
  const recipe = getRecipe(slug)!;
  const { next } = getNeighbours(slug);
  const words = new Set(recipe.keywords.flatMap((k) => k.split(" ")));
  return recipes
    .filter((r) => r.slug !== slug && r.slug !== next.slug)
    .map((r) => ({
      r,
      score:
        (r.category === recipe.category ? 10 : 0) +
        r.keywords.flatMap((k) => k.split(" ")).filter((w) => w.length > 3 && words.has(w)).length +
        (r.cuisine === recipe.cuisine ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score || collator.compare(a.r.title, b.r.title))
    .slice(0, count)
    .map((x) => x.r);
}

export const recipePath = (slug: string) => `/recettes/${slug}` as const;
