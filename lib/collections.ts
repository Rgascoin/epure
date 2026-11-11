import type { Recipe } from "./types";
import type { Tag } from "./tags";
import { recipes } from "./recipes";

/**
 * Seasonal collections. Nothing is ever hidden: every collection with enough
 * recipes has its own page all year round (/collections/<slug>). The calendar
 * only decides what is *highlighted*: the home page, the index and the menu
 * put forward the collections whose window contains today's date (Paris time).
 *
 * To feature a recipe in a collection, tag it (lib/tags.ts). Moving feasts
 * (Easter, Mardi gras, Mother's Day…) are computed for each year.
 */

/** A calendar day as "YYYY-MM-DD" (lexicographic order = chronological order). */
type Day = string;

export interface Collection {
  slug: string;
  /** H1 and menu label. */
  title: string;
  /** <title> (≤ 52 characters, the site name is appended). */
  seoTitle: string;
  /** Meta description, 120–160 characters. */
  description: string;
  /** Home band headline while the collection is in season. */
  headline: string;
  /** One sentence under the headline. */
  lede: string;
  /** When it is highlighted, in words (« de début novembre à Noël »). */
  period: string;
  /** Recipes with any of these tags belong to the collection… */
  tags?: Tag[];
  /** …or recipes matching this rule. */
  match?: (r: Recipe) => boolean;
  /** Highlight window for a given year, inclusive. May start the year before. */
  window: (year: number) => [Day, Day];
  /** Higher wins when several collections are in season. */
  priority: number;
  /** Slugs to show first (the dishes that best carry the occasion). */
  lead?: string[];
}

/* ------------------------------------------------------------------------ */
/*  Dates                                                                    */
/* ------------------------------------------------------------------------ */

const pad = (n: number) => String(n).padStart(2, "0");
const day = (y: number, m: number, d: number): Day => {
  const date = new Date(Date.UTC(y, m - 1, d));
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
};
const shift = (iso: Day, days: number): Day => {
  const [y, m, d] = iso.split("-").map(Number);
  return day(y, m, d + days);
};
const weekday = (iso: Day) => new Date(`${iso}T12:00:00Z`).getUTCDay(); // 0 = Sunday

/** Easter Sunday (Gregorian, anonymous algorithm). */
export function easter(y: number): Day {
  const a = y % 19;
  const b = Math.floor(y / 100);
  const c = y % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const dayOfMonth = ((h + l - 7 * m + 114) % 31) + 1;
  return day(y, month, dayOfMonth);
}

/** Fête des mères: last Sunday of May, or the first Sunday of June when it falls on Whit Sunday. */
export function mothersDay(y: number): Day {
  let d = day(y, 5, 31);
  while (weekday(d) !== 0) d = shift(d, -1);
  return d === shift(easter(y), 49) ? shift(d, 7) : d;
}

/** Fête des pères: third Sunday of June. */
export function fathersDay(y: number): Day {
  let d = day(y, 6, 1);
  while (weekday(d) !== 0) d = shift(d, 1);
  return shift(d, 14);
}

/** Today in Paris, as "YYYY-MM-DD". */
export function parisToday(now: Date): Day {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/* ------------------------------------------------------------------------ */
/*  The calendar                                                             */
/* ------------------------------------------------------------------------ */

export const collections: Collection[] = [
  {
    slug: "noel",
    title: "Recettes de Noël",
    seoTitle: "Recettes de Noël : du foie gras à la bûche",
    description:
      "Le menu de Noël au gramme près : foie gras mi-cuit, volaille rôtie, gratin, bûche et biscuits, avec un rétroplanning pour ne pas tout faire le 24.",
    headline: "Noël approche.",
    lede: "Ce qui se prépare la veille, ce qui se fait le jour même, et de quoi finir sur une bûche.",
    period: "de début novembre à Noël",
    tags: ["noel"],
    window: (y) => [day(y, 11, 1), day(y, 12, 25)],
    priority: 90,
    lead: ["buche-de-noel", "chapon-roti", "sables-de-noel", "foie-gras-mi-cuit"],
  },
  {
    slug: "nouvel-an",
    title: "Réveillon du Nouvel An",
    seoTitle: "Recettes du Nouvel An : réveillon et lendemain",
    description:
      "Pour le réveillon de la Saint-Sylvestre : des entrées qui se préparent à l’avance, un plat à partager, et la soupe à l’oignon du petit matin.",
    headline: "Le réveillon, sans y passer la soirée.",
    lede: "Des recettes qui se préparent avant que les invités arrivent.",
    period: "entre Noël et le jour de l’An",
    tags: ["nouvel-an"],
    window: (y) => [day(y - 1, 12, 26), day(y, 1, 1)],
    priority: 95,
  },
  {
    slug: "galette-des-rois",
    title: "Galette des rois",
    seoTitle: "Galette des rois maison : frangipane et feuilletage",
    description:
      "La galette des rois maison pour l’Épiphanie : frangipane, dorure, rayures et cuisson, avec les repères pour un feuilletage qui monte bien droit.",
    headline: "C’est le mois de la galette.",
    lede: "Frangipane, fève et feuilletage : de quoi tirer les rois tout le mois de janvier.",
    period: "tout le mois de janvier",
    tags: ["epiphanie"],
    window: (y) => [day(y, 1, 2), day(y, 1, 31)],
    priority: 90,
  },
  {
    slug: "chandeleur",
    title: "Recettes de la Chandeleur",
    seoTitle: "Chandeleur : crêpes, gaufres et pancakes",
    description:
      "Pour la Chandeleur le 2 février : la pâte à crêpes au gramme près, les gaufres et les pancakes, avec ce qu’il faut faire quand la pâte fait des grumeaux.",
    headline: "La Chandeleur arrive.",
    lede: "Le 2 février, on sort la poêle : crêpes, gaufres et pancakes.",
    period: "les deux semaines avant le 2 février",
    tags: ["chandeleur"],
    window: (y) => [day(y, 1, 20), day(y, 2, 2)],
    priority: 92,
  },
  {
    slug: "saint-valentin",
    title: "Desserts de la Saint-Valentin",
    seoTitle: "Desserts de la Saint-Valentin, au chocolat surtout",
    description:
      "Pour la Saint-Valentin : fondant, mousse et crème brûlée, des desserts qui se préparent à l’avance pour passer la soirée à table, pas en cuisine.",
    headline: "Un dessert pour deux.",
    lede: "Du chocolat, surtout, et des recettes qui se préparent la veille.",
    period: "début février, jusqu’au 14",
    tags: ["saint-valentin"],
    window: (y) => [day(y, 2, 3), day(y, 2, 14)],
    priority: 92,
  },
  {
    slug: "mardi-gras",
    title: "Recettes de Mardi gras",
    seoTitle: "Mardi gras : crêpes, gaufres et douceurs frites",
    description:
      "Pour Mardi gras : crêpes, gaufres et douceurs du carnaval, les recettes de fête qu’on fait avant le carême, avec les quantités au gramme près.",
    headline: "C’est bientôt Mardi gras.",
    lede: "Le jour où l’on a toutes les excuses pour sortir le gaufrier.",
    period: "les dix jours avant Mardi gras",
    tags: ["mardi-gras"],
    window: (y) => [shift(easter(y), -57), shift(easter(y), -47)],
    priority: 93,
  },
  {
    slug: "paques",
    title: "Recettes de Pâques",
    seoTitle: "Recettes de Pâques : agneau, chocolat et brioche",
    description:
      "Le repas de Pâques au gramme près : l’agneau, les desserts au chocolat et les recettes de printemps, avec ce qui se prépare la veille.",
    headline: "Pâques approche.",
    lede: "L’agneau, le chocolat et les premiers légumes de printemps.",
    period: "les trois semaines avant Pâques",
    tags: ["paques"],
    window: (y) => [shift(easter(y), -21), shift(easter(y), 1)],
    priority: 90,
  },
  {
    slug: "fete-des-meres",
    title: "Fête des mères",
    seoTitle: "Fête des mères : desserts et menus à faire soi-même",
    description:
      "Pour la fête des mères : des desserts et des plats qui font plaisir sans stress, tarte au citron, tiramisu, madeleines, expliqués pas à pas.",
    headline: "Pour la fête des mères.",
    lede: "Un dessert fait maison vaut tous les bouquets.",
    period: "les deux semaines avant la fête des mères",
    tags: ["fete-des-meres"],
    window: (y) => [shift(mothersDay(y), -12), mothersDay(y)],
    priority: 91,
  },
  {
    slug: "fete-des-peres",
    title: "Fête des pères",
    seoTitle: "Fête des pères : plats et desserts à faire soi-même",
    description:
      "Pour la fête des pères : des plats généreux et des desserts à faire soi-même, expliqués au gramme près pour réussir du premier coup.",
    headline: "Pour la fête des pères.",
    lede: "Un plat généreux, un dessert, et personne à la vaisselle.",
    period: "les dix jours avant la fête des pères",
    tags: ["fete-des-peres"],
    window: (y) => [shift(fathersDay(y), -10), fathersDay(y)],
    priority: 91,
  },
  {
    slug: "halloween",
    title: "Recettes d’Halloween",
    seoTitle: "Recettes d’Halloween : courge, potiron et goûters",
    description:
      "Pour Halloween : velouté de potimarron, courges rôties et goûters de saison, des recettes d’octobre simples et expliquées au gramme près.",
    headline: "Saison des courges.",
    lede: "Potimarron, potiron et goûters d’octobre.",
    period: "la seconde quinzaine d’octobre",
    tags: ["halloween"],
    window: (y) => [day(y, 10, 15), day(y, 10, 31)],
    priority: 85,
  },
  {
    slug: "rentree",
    title: "Plats rapides de la rentrée",
    seoTitle: "Plats rapides du soir, prêts en 45 minutes",
    description:
      "Des plats complets prêts en 45 minutes ou moins, pour les soirs de semaine de la rentrée, avec les quantités exactes et les gestes qui vont vite.",
    headline: "C’est la rentrée.",
    lede: "Des plats complets en 45 minutes ou moins, pour les soirs de semaine.",
    period: "de fin août à fin septembre",
    match: (r) => r.category === "Plat" && r.totalMinutes <= 45,
    window: (y) => [day(y, 8, 25), day(y, 9, 30)],
    priority: 60,
  },
  {
    slug: "printemps",
    title: "Cuisine de printemps",
    seoTitle: "Recettes de printemps : légumes nouveaux, agrumes",
    description:
      "Les recettes de printemps : asperges, petits pois, agneau, citron et premières fraises, au gramme près et au moment où les produits sont bons.",
    headline: "Le printemps arrive au marché.",
    lede: "Légumes nouveaux, agrumes et premières fraises.",
    period: "de mi-mars à fin mai",
    tags: ["printemps", "paques"],
    window: (y) => [day(y, 3, 15), day(y, 5, 31)],
    priority: 40,
  },
  {
    slug: "ete",
    title: "Cuisine d’été",
    seoTitle: "Recettes d’été : légumes du soleil et pique-nique",
    description:
      "Les recettes d’été : ratatouille, tian, paella, clafoutis et plats de pique-nique, quand tomates, courgettes et cerises sont au meilleur.",
    headline: "L’été est dans l’assiette.",
    lede: "Tomates, courgettes, cerises : les recettes du soleil et du pique-nique.",
    period: "de juin à fin août",
    tags: ["ete", "pique-nique", "barbecue"],
    window: (y) => [day(y, 6, 1), day(y, 8, 31)],
    priority: 50,
  },
  {
    slug: "automne",
    title: "Cuisine d’automne",
    seoTitle: "Recettes d’automne : courges, champignons, pommes",
    description:
      "Les recettes d’automne : velouté de potimarron, risotto aux champignons, tarte aux pommes et premiers mijotés, au gramme près.",
    headline: "C’est l’automne.",
    lede: "Courges, champignons, pommes et premiers mijotés.",
    period: "de mi-septembre à fin novembre",
    tags: ["automne"],
    window: (y) => [day(y, 9, 15), day(y, 11, 30)],
    priority: 40,
  },
  {
    slug: "hiver",
    title: "Plats d’hiver",
    seoTitle: "Plats d’hiver qui réchauffent : mijotés et gratins",
    description:
      "Les plats d’hiver qui réchauffent : bœuf bourguignon, blanquette, pot-au-feu, tartiflette et gratins, avec les temps exacts et les bons morceaux.",
    headline: "Il fait froid, on mijote.",
    lede: "Mijotés, gratins et soupes qui tiennent au corps.",
    period: "de mi-novembre à mi-mars",
    tags: ["hiver"],
    window: (y) => [day(y - 1, 11, 15), day(y, 3, 15)],
    priority: 45,
  },
];

/** A collection gets its own page from this many recipes on. */
export const MIN_RECIPES_FOR_PAGE = 3;

export const collectionBySlug = (slug: string) => collections.find((c) => c.slug === slug);
export const collectionPath = (c: Collection) => `/collections/${c.slug}` as const;

/**
 * Recipes of a collection, in display order: the `lead` dishes, then those
 * tagged for this very occasion, then the newest.
 */
export function recipesInCollection(c: Collection): Recipe[] {
  const main = c.tags?.[0];
  const lead = (slug: string) => {
    const i = c.lead?.indexOf(slug) ?? -1;
    return i < 0 ? Infinity : i;
  };
  return recipes
    .filter((r) => c.match?.(r) || (c.tags ?? []).some((t) => r.tags?.includes(t)))
    .sort(
      (a, b) =>
        lead(a.slug) - lead(b.slug) ||
        Number(Boolean(main && b.tags?.includes(main))) - Number(Boolean(main && a.tags?.includes(main))) ||
        b.datePublished.localeCompare(a.datePublished),
    );
}

/** Collections that have a page (enough recipes). */
export const publishedCollections = (): Collection[] =>
  collections.filter((c) => recipesInCollection(c).length >= MIN_RECIPES_FOR_PAGE);

/** Collections of a recipe that have a page, most specific first. */
export function collectionsOf(recipe: Recipe): Collection[] {
  return publishedCollections()
    .filter((c) => recipesInCollection(c).some((r) => r.slug === recipe.slug))
    .sort((a, b) => b.priority - a.priority);
}

/** Is `today` inside the collection's window (this year's or one that started last year)? */
function inWindow(c: Collection, today: Day): boolean {
  const y = Number(today.slice(0, 4));
  return [y, y + 1].some((year) => {
    const [start, end] = c.window(year);
    return start <= today && today <= end;
  });
}

/** The next window that has not ended yet, for display and ordering. */
export function nextWindow(c: Collection, today: Day): [Day, Day] {
  const y = Number(today.slice(0, 4));
  for (const year of [y, y + 1, y + 2]) {
    const w = c.window(year);
    if (w[1] >= today) return w;
  }
  return c.window(y + 1);
}

/**
 * Collections in season on `today`, most important first, each with at least
 * one recipe. The first one is the headline of the moment.
 */
export function activeCollections(today: Day): Collection[] {
  return collections
    .filter((c) => inWindow(c, today) && recipesInCollection(c).length > 0)
    .sort((a, b) => b.priority - a.priority);
}

const MONTHS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

/** « du 1er novembre au 25 décembre » */
export function formatWindow([start, end]: [Day, Day]): string {
  const f = (d: Day) => {
    const [, m, dd] = d.split("-").map(Number);
    return `${dd === 1 ? "1er" : dd} ${MONTHS[m - 1]}`;
  };
  return `du ${f(start)} au ${f(end)}`;
}

/** « novembre » for the eyebrow of the home band. */
export const monthName = (today: Day) => MONTHS[Number(today.slice(5, 7)) - 1];
