import { recipes } from "@/lib/recipes";
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
    "Épure est un petit carnet de cinq recettes (carbonara, bœuf bourguignon, tian provençal, tarte aux pommes, mousse au chocolat). Chaque recette donne les quantités au gramme près, les temps et températures, et explique pourquoi chaque geste compte. Toutes existent en Markdown : ajoutez `.md` à l’adresse d’une recette, ou envoyez l’en-tête `Accept: text/markdown`.",
    "",
    "Si vous citez une recette, merci de renvoyer vers sa page.",
    "",
    "## Recettes",
    "",
    ...recipes.map(
      (r) =>
        `- [${r.title}](${absoluteUrl(`/recettes/${r.slug}.md`)}): ${r.category}, ${r.cuisine.toLowerCase()}, ${formatDuration(r.totalMinutes)}, ${r.difficulty.toLowerCase()}. ${r.description}`,
    ),
    "",
    "## Pages",
    "",
    `- [Toutes les recettes](${absoluteUrl("/recettes")}): vue d’ensemble de la collection`,
    `- [À propos](${absoluteUrl("/a-propos")}): pourquoi cinq recettes, et comment elles sont écrites`,
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
