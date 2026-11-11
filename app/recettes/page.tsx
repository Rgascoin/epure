import type { Metadata } from "next";
import { recipes } from "@/lib/recipes";
import { fr } from "@/lib/format";
import { breadcrumb, graph, organization, recipeList, webPage, website } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { PageTransition } from "@/components/page-transition";
import { RecipeCard } from "@/components/recipe-card";
import { RecipeFilter } from "@/components/recipe-filter";

const title = "Toutes les recettes";
const description =
  "Carbonara, bœuf bourguignon, tian provençal, tarte aux pommes, mousse au chocolat : cinq recettes de référence, expliquées pas à pas, au gramme près.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/recettes" },
  openGraph: { title: `${title} · Épure`, description, url: "/recettes" },
};

export default function RecipesPage() {
  const data = graph(
    website(),
    organization(),
    webPage({
      path: "/recettes",
      name: title,
      description,
      type: "CollectionPage",
      breadcrumbId: absoluteUrl("/recettes#breadcrumb"),
    }),
    breadcrumb("/recettes", [
      { name: "Accueil", path: "/" },
      { name: "Recettes", path: "/recettes" },
    ]),
    recipeList("/recettes", recipes),
  );

  return (
    <PageTransition>
      <JsonLd data={data} />
      <section className="container-page pt-[calc(var(--header-h)+clamp(3rem,10vh,7rem))] pb-[clamp(5rem,14vh,10rem)]">
        <p className="intro-fade text-eyebrow text-fg-3" style={{ ["--d" as string]: "0ms" }}>
          La collection
        </p>
        <h1 className="mt-4 max-w-[12ch] text-display">
          <span className="intro-line" style={{ ["--i" as string]: 0 }}>
            <span>Cinq recettes.</span>
          </span>
          <span className="intro-line" style={{ ["--i" as string]: 1 }}>
            <span className="text-fg-3">Toutes essentielles.</span>
          </span>
        </h1>
        <p className="intro-fade mt-6 max-w-2xl text-lede text-fg-2" style={{ ["--d" as string]: "380ms" }}>
          {fr(
            "Trois plats, deux desserts. Chacune a été choisie parce qu’elle enseigne un geste qui servira partout ailleurs : émulsionner, mijoter, confire, foncer, monter.",
          )}
        </p>

        <div className="intro-fade mt-12" style={{ ["--d" as string]: "500ms" }}>
          <RecipeFilter
            items={recipes.map((r, i) => ({
              slug: r.slug,
              tags: [
                r.category === "Plat" ? "plat" : r.category === "Dessert" ? "dessert" : "entree",
                ...(r.diet?.includes("vegetarian") ? ["vegetarien"] : []),
                ...(r.totalMinutes <= 60 ? ["rapide"] : []),
              ],
              node: <RecipeCard recipe={r} index={i} headingLevel={2} />,
            }))}
          />
        </div>
      </section>
    </PageTransition>
  );
}
