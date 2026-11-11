import { recipes } from "@/lib/recipes";
import { recipeToMarkdown } from "@/lib/markdown";
import { site } from "@/lib/site";

/** Every recipe, in full, in one Markdown document — the llms-full.txt convention. */
export function GET() {
  const body = [
    `# ${site.name} : toutes les recettes`,
    "",
    `> ${site.description}`,
    "",
    ...recipes.map((r) => recipeToMarkdown(r)),
  ].join("\n\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
