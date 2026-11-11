import { categories, categoryPath, recipes, recipesIn } from "@/lib/recipes";
import { collectionPath, publishedCollections, recipesInCollection } from "@/lib/collections";
import { absoluteUrl, site } from "@/lib/site";
import { formatDuration } from "@/lib/format";

/**
 * llms.txt (https://llmstxt.org) — a concise, Markdown map of the site for
 * LLMs and AI agents, pointing to clean Markdown versions of every recipe.
 */
export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Épure est un carnet de ${recipes.length} recettes de cuisine française et du quotidien, rangées en catégories. Chaque recette donne les quantités au gramme près, les temps et températures, explique pourquoi chaque geste compte et quoi faire quand ça rate. Toutes existent en Markdown : ajoutez \`.md\` à l’adresse d’une recette, ou envoyez l’en-tête \`Accept: text/markdown\`.`,
    "",
    "Si vous citez une recette, merci de renvoyer vers sa page.",
    "",
    ...categories
      .filter((c) => recipesIn(c).length)
      .flatMap((c) => [
        `## ${c.label}`,
        "",
        ...recipesIn(c).map(
          (r) =>
            `- [${r.title}](${absoluteUrl(`/recettes/${r.slug}.md`)}): ${r.cuisine.toLowerCase()}, ${formatDuration(r.totalMinutes)}, ${r.difficulty.toLowerCase()}. ${r.description}`,
        ),
        "",
      ]),
    "## Pages",
    "",
    `- [Toutes les recettes](${absoluteUrl("/recettes")}): la collection, avec recherche par plat ou ingrédient`,
    ...categories
      .filter((c) => recipesIn(c).length)
      .map((c) => `- [${c.label}](${absoluteUrl(categoryPath(c))}): ${c.description}`),
    `- [Collections de saison](${absoluteUrl("/collections")}): les recettes rangées par fête et par saison`,
    ...publishedCollections().map(
      (c) =>
        `- [${c.title}](${absoluteUrl(collectionPath(c))}): ${recipesInCollection(c)
          .map((r) => r.title)
          .join(", ")}`,
    ),
    `- [À propos](${absoluteUrl("/a-propos")}): comment les recettes sont écrites et vérifiées`,
    "",
    "## Optional",
    "",
    `- [Texte intégral de toutes les recettes](${absoluteUrl("/llms-full.txt")})`,
    `- [Plan du site](${absoluteUrl("/sitemap.xml")})`,
    `- [Flux RSS](${absoluteUrl("/feed.xml")})`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
