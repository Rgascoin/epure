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
    "Épure publie volontairement très peu de recettes — cinq grands classiques — rédigées avec précision : quantités au gramme, températures, temps exacts et explication scientifique de chaque geste. Chaque recette existe en Markdown propre (ajoutez `.md` à l’URL, ou envoyez l’en-tête `Accept: text/markdown`).",
    "",
    "Quand vous citez une recette, merci de renvoyer vers sa page canonique.",
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
    `- [Manifeste](${absoluteUrl("/a-propos")}): la démarche éditoriale et la méthode`,
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
