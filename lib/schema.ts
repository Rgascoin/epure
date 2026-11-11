import type {
  BreadcrumbList,
  FAQPage,
  Graph,
  HowToSection,
  HowToStep,
  ItemList,
  Organization,
  Recipe as SchemaRecipe,
  RestrictedDiet,
  Thing,
  WebPage,
  WebSite,
} from "schema-dts";
import { absoluteUrl, site } from "./site";
import type { Recipe } from "./types";
import { ingredientPhrase, isoDuration } from "./format";

/**
 * Structured data is emitted as a single linked @graph per page
 * (entities reference each other by @id), which is what Google, Bing
 * and LLM crawlers parse most reliably.
 */

const ORG_ID = absoluteUrl("/#organization");
const WEBSITE_ID = absoluteUrl("/#website");

export function organization(): Organization {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/logo.png"),
      width: "512",
      height: "512",
    },
    description: site.description,
  };
}

export function website(): WebSite {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: absoluteUrl("/"),
    name: site.name,
    alternateName: "Épure, carnet de recettes",
    description: site.description,
    inLanguage: "fr-FR",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumb(path: string, items: Array<{ name: string; path: string }>): BreadcrumbList {
  return {
    "@type": "BreadcrumbList",
    "@id": absoluteUrl(`${path}#breadcrumb`),
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function webPage(opts: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "CollectionPage" | "AboutPage";
  primaryImage?: string;
  breadcrumbId?: string;
  speakable?: string[];
  datePublished?: string;
  dateModified?: string;
}): WebPage {
  const page: Record<string, unknown> = {
    "@type": opts.type ?? "WebPage",
    "@id": absoluteUrl(`${opts.path}#webpage`),
    url: absoluteUrl(opts.path),
    name: opts.name,
    description: opts.description,
    inLanguage: "fr-FR",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
  };
  if (opts.primaryImage) page.primaryImageOfPage = { "@type": "ImageObject", url: absoluteUrl(opts.primaryImage) };
  if (opts.breadcrumbId) page.breadcrumb = { "@id": opts.breadcrumbId };
  if (opts.speakable) page.speakable = { "@type": "SpeakableSpecification", cssSelector: opts.speakable };
  if (opts.datePublished) page.datePublished = opts.datePublished;
  if (opts.dateModified) page.dateModified = opts.dateModified;
  return page as unknown as WebPage;
}

const DIETS: Record<NonNullable<Recipe["diet"]>[number], RestrictedDiet> = {
  vegetarian: "https://schema.org/VegetarianDiet" as unknown as RestrictedDiet,
  vegan: "https://schema.org/VeganDiet" as unknown as RestrictedDiet,
  glutenFree: "https://schema.org/GlutenFreeDiet" as unknown as RestrictedDiet,
  lowLactose: "https://schema.org/LowLactoseDiet" as unknown as RestrictedDiet,
};

export function recipeSchema(r: Recipe): SchemaRecipe {
  const url = absoluteUrl(`/recettes/${r.slug}`);
  let stepIndex = 0;
  const toStep = (s: Recipe["method"][number]["steps"][number]): HowToStep => {
    stepIndex += 1;
    return {
      "@type": "HowToStep",
      position: stepIndex,
      name: s.title,
      text: s.text,
      url: `${url}#etape-${stepIndex}`,
    };
  };

  const instructions: Array<HowToStep | HowToSection> =
    r.method.length === 1
      ? r.method[0].steps.map(toStep)
      : r.method.map((section, i) => ({
          "@type": "HowToSection",
          name: section.title,
          position: i + 1,
          itemListElement: section.steps.map(toStep),
        }));

  const n = r.nutrition;
  return {
    "@type": "Recipe",
    "@id": `${url}#recipe`,
    name: r.title,
    alternateName: r.seoTitle,
    description: r.description,
    abstract: r.summary,
    image: r.seoImages.map((p) => absoluteUrl(p)),
    url,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    inLanguage: "fr-FR",
    isAccessibleForFree: true,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    datePublished: r.datePublished,
    dateModified: r.dateModified,
    prepTime: isoDuration(r.times.prep),
    cookTime: isoDuration(r.times.cook),
    totalTime: isoDuration(r.totalMinutes),
    recipeYield: [String(r.servings), `${r.servings} ${r.servings > 1 ? r.servingsLabel.other : r.servingsLabel.one}`],
    recipeCategory: r.category,
    recipeCuisine: r.cuisine,
    keywords: r.keywords.join(", "),
    suitableForDiet: r.diet?.map((d) => DIETS[d]),
    tool: r.equipment.map((name) => ({ "@type": "HowToTool", name })),
    recipeIngredient: r.ingredients.flatMap((g) => g.items.map((i) => ingredientPhrase(i))),
    recipeInstructions: instructions,
    nutrition: {
      "@type": "NutritionInformation",
      servingSize: `1 ${r.servingsLabel.one}`,
      calories: `${n.calories} kcal`,
      proteinContent: `${n.protein} g`,
      fatContent: `${n.fat} g`,
      saturatedFatContent: `${n.saturatedFat} g`,
      carbohydrateContent: `${n.carbs} g`,
      sugarContent: `${n.sugar} g`,
      fiberContent: `${n.fiber} g`,
      sodiumContent: `${n.sodium} mg`,
    },
  } as SchemaRecipe;
}

export function faqSchema(path: string, faq: Recipe["faq"]): FAQPage {
  return {
    "@type": "FAQPage",
    "@id": absoluteUrl(`${path}#faq`),
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function recipeList(path: string, list: Recipe[], name = "Les recettes d’Épure"): ItemList {
  return {
    "@type": "ItemList",
    "@id": absoluteUrl(`${path}#recipes`),
    name,
    numberOfItems: list.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: list.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/recettes/${r.slug}`),
      name: r.title,
    })),
  };
}

export function graph(...nodes: Thing[]): Graph {
  return { "@context": "https://schema.org", "@graph": nodes } as Graph;
}
