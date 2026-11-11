import { getRecipe, recipes } from "@/lib/recipes";
import { recipeToMarkdown } from "@/lib/markdown";
import { absoluteUrl } from "@/lib/site";

/** Internal target of the `/recettes/:slug.md` rewrite (see next.config.ts). */
export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export async function GET(_req: Request, { params }: RouteContext<"/markdown/[slug]">) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) return new Response("Not found", { status: 404 });
  return new Response(recipeToMarkdown(recipe), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Link: `<${absoluteUrl(`/recettes/${slug}`)}>; rel="canonical"`,
      "X-Robots-Tag": "noindex, follow",
      Vary: "Accept",
    },
  });
}
