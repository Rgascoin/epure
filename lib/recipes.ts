import type { Recipe, RecipeContent, RecipeTheme } from "./types";
import type { StaticImageData } from "next/image";

import { content as carbonara } from "@/content/recipes/spaghetti-carbonara";
import { content as bourguignon } from "@/content/recipes/boeuf-bourguignon";
import { content as tian } from "@/content/recipes/tian-provencal";
import { content as tarte } from "@/content/recipes/tarte-aux-pommes";
import { content as mousse } from "@/content/recipes/mousse-au-chocolat";

import carbonaraHero from "@/content/recipes/images/spaghetti-carbonara.jpg";
import carbonaraDetail from "@/content/recipes/images/spaghetti-carbonara-detail.jpg";
import bourguignonHero from "@/content/recipes/images/boeuf-bourguignon.jpg";
import bourguignonDetail from "@/content/recipes/images/boeuf-bourguignon-detail.jpg";
import tianHero from "@/content/recipes/images/tian-provencal.jpg";
import tianDetail from "@/content/recipes/images/tian-provencal-detail.jpg";
import tarteHero from "@/content/recipes/images/tarte-aux-pommes.jpg";
import tarteDetail from "@/content/recipes/images/tarte-aux-pommes-detail.jpg";
import mousseHero from "@/content/recipes/images/mousse-au-chocolat.jpg";
import mousseDetail from "@/content/recipes/images/mousse-au-chocolat-detail.jpg";

const themes: Record<string, RecipeTheme> = {
  "spaghetti-carbonara": {
    accent: "#F0B323",
    onAccent: "#1d1d1f",
    ink: "#885A00",
    tint: "#FBF4E2",
    deep: "#14161B",
    focus: "50% 42%",
  },
  "boeuf-bourguignon": {
    accent: "#8E1F2F",
    onAccent: "#ffffff",
    ink: "#8E1F2F",
    tint: "#F8ECEC",
    deep: "#1C090C",
    focus: "50% 46%",
  },
  "tian-provencal": {
    accent: "#4A7524",
    onAccent: "#ffffff",
    ink: "#41691F",
    tint: "#EFF4E8",
    deep: "#0D1608",
    focus: "50% 48%",
  },
  "tarte-aux-pommes": {
    accent: "#C27A32",
    onAccent: "#1d1d1f",
    ink: "#8F5512",
    tint: "#F9F0E6",
    deep: "#130D09",
    focus: "50% 50%",
  },
  "mousse-au-chocolat": {
    accent: "#C9976A",
    onAccent: "#0d0907",
    ink: "#7A4A2A",
    tint: "#F4EDE7",
    deep: "#050403",
    focus: "50% 38%",
  },
};

const images: Record<string, { hero: StaticImageData; detail: StaticImageData }> = {
  "spaghetti-carbonara": { hero: carbonaraHero, detail: carbonaraDetail },
  "boeuf-bourguignon": { hero: bourguignonHero, detail: bourguignonDetail },
  "tian-provencal": { hero: tianHero, detail: tianDetail },
  "tarte-aux-pommes": { hero: tarteHero, detail: tarteDetail },
  "mousse-au-chocolat": { hero: mousseHero, detail: mousseDetail },
};

function build(c: RecipeContent): Recipe {
  const img = images[c.slug];
  const theme = themes[c.slug];
  if (!img || !theme) throw new Error(`Missing image or theme for recipe "${c.slug}"`);
  return {
    ...c,
    theme,
    hero: img.hero,
    detail: img.detail,
    seoImages: ["1x1", "4x3", "16x9"].map((r) => `/images/recipes/${c.slug}/${r}.jpg`),
    totalMinutes: c.times.prep + c.times.cook + (c.times.rest ?? 0),
  };
}

/** Editorial order — the order of the keynote. */
export const recipes: Recipe[] = [carbonara, bourguignon, tian, tarte, mousse].map(build);

export function getRecipe(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}

export function getNeighbours(slug: string): { prev: Recipe; next: Recipe } {
  const i = recipes.findIndex((r) => r.slug === slug);
  const n = recipes.length;
  return { prev: recipes[(i - 1 + n) % n], next: recipes[(i + 1) % n] };
}

export const recipePath = (slug: string) => `/recettes/${slug}` as const;
