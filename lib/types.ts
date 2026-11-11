import type { StaticImageData } from "next/image";

/**
 * Units are keys, not display strings: it keeps quantities scalable,
 * lets us pluralise properly in French and generate clean structured data.
 */
export type UnitKey =
  | "g"
  | "kg"
  | "ml"
  | "cl"
  | "l"
  | "cas" // cuillère à soupe
  | "cac" // cuillère à café
  | "pincee"
  | "gousse"
  | "brin"
  | "feuille"
  | "tranche"
  | "botte"
  | "branche"
  | "bouteille"
  | "rouleau"
  | "sachet"
  | "noix"
  | "tour"; // tour de moulin

export interface Ingredient {
  /** Base quantity for `recipe.servings`. Omit for "to taste" items. */
  qty?: number;
  unit?: UnitKey;
  /** Singular / base name, lowercase unless proper noun. e.g. "jaune d’œuf". */
  name: string;
  /** Plural name when it differs, used for counted items. e.g. "jaunes d’œufs". */
  plural?: string;
  /** Secondary info: cut, variety, temperature… e.g. "coupé en lardons de 5 mm". */
  note?: string;
  /** Rounding granularity once scaled (1 = whole items, 0.5 = halves, 5 = 5 g). */
  step?: number;
  /** Don’t scale with servings (e.g. salt for pasta water). */
  fixed?: boolean;
  optional?: boolean;
}

export interface IngredientGroup {
  title?: string;
  items: Ingredient[];
}

export interface Step {
  /** Short imperative title, e.g. "Saisir la viande". */
  title: string;
  /** Full instruction, 1–4 sentences. */
  text: string;
  /** Optional timer surfaced in the UI and cooking mode. */
  timer?: { minutes: number; label: string };
  /** Optional pro tip shown under the step. */
  tip?: string;
}

export interface MethodSection {
  title: string;
  steps: Step[];
}

export interface Nutrition {
  /** Per serving, estimated. */
  calories: number;
  protein: number;
  fat: number;
  saturatedFat: number;
  carbs: number;
  sugar: number;
  fiber: number;
  /** milligrams */
  sodium: number;
}

export interface Credit {
  photographer: string;
  url: string;
}

export interface RecipeTheme {
  /** Vivid brand colour of the dish (backgrounds, large shapes). */
  accent: string;
  /** Text colour that sits on `accent`. */
  onAccent: string;
  /** Accent readable as text on the light background. */
  ink: string;
  /** Very light tint for surfaces. */
  tint: string;
  /** Very dark shade for immersive sections. */
  deep: string;
  /** CSS object-position of the hero photo (focal point). */
  focus?: string;
}

export interface RecipeContent {
  slug: string;
  /** Display title, e.g. "Spaghetti alla carbonara". */
  title: string;
  /** <title> optimised for search (≤ 60 chars, primary keyword first). */
  seoTitle: string;
  /** Keynote style one-liner, ≤ 6 words. e.g. "Cinq ingrédients. Zéro crème." */
  tagline: string;
  /** Meta description, 140–160 chars, answer-first. */
  description: string;
  /** "L’essentiel": 2–3 sentence direct answer, written for humans and LLMs. */
  summary: string;
  /** Editorial intro, 2–3 short paragraphs. */
  intro: string[];
  category: "Entrée" | "Plat" | "Dessert";
  cuisine: string;
  keywords: string[];
  diet?: Array<"vegetarian" | "vegan" | "glutenFree" | "lowLactose">;
  servings: number;
  servingsLabel: { one: string; other: string };
  times: { prep: number; cook: number; rest?: number };
  difficulty: "Facile" | "Intermédiaire" | "Exigeant";
  cost: "€" | "€€" | "€€€";
  season: string[];
  equipment: string[];
  ingredients: IngredientGroup[];
  method: MethodSection[];
  /** "Pourquoi ça marche" — the food science behind the recipe. */
  science: { title: string; text: string }[];
  tips: string[];
  mistakes: string[];
  variations: { title: string; text: string }[];
  storage: string;
  pairing?: string;
  faq: { q: string; a: string }[];
  nutrition: Nutrition;
  /**
   * Short handwritten margin notes (≤ 6 words each), shown in a script font
   * next to the photos, e.g. "le guanciale, pas des lardons".
   */
  annotations: { hero: string; detail: string };
  images: {
    heroAlt: string;
    detailAlt: string;
    credits: { hero: Credit; detail: Credit };
  };
  datePublished: string;
  dateModified: string;
}

export interface Recipe extends RecipeContent {
  theme: RecipeTheme;
  hero: StaticImageData;
  detail: StaticImageData;
  /** Absolute-path images in 1:1, 4:3, 16:9 for structured data. */
  seoImages: string[];
  totalMinutes: number;
}
