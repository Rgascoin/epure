import type { Metadata } from "next";
import { recipes } from "@/lib/recipes";
import { fr } from "@/lib/format";
import { breadcrumb, graph, organization, recipeList, webPage, website } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { PageTransition } from "@/components/page-transition";
import { RecipeCard } from "@/components/recipe-card";
import { RecipeFilter } from "@/components/recipe-filter";

const title = "Toutes les recettes du carnet";
const description =
  "Carbonara, bœuf bourguignon, tian provençal, tarte aux pommes et mousse au chocolat : les cinq recettes d’Épure, expliquées pas à pas et au gramme près.";

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
          Sommaire
        </p>
        <h1 className="mt-5 max-w-[14ch] text-display">
          {["Les", "cinq", "recettes", "du"].map((word, i) => (
            <span key={i}>
              <span className="intro-word" style={{ ["--i" as string]: i }}>
                {word}
              </span>{" "}
            </span>
          ))}
          <span className="intro-word serif-accent text-ink" style={{ ["--i" as string]: 4 }}>
            carnet
          </span>
          <span className="intro-word" style={{ ["--i" as string]: 5 }}>
            .
          </span>
        </h1>
        <p className="intro-fade mt-6 max-w-2xl text-lede text-fg-2" style={{ ["--d" as string]: "380ms" }}>
          {fr(
            "Trois plats, deux desserts. Chacune apprend un geste qui resservira ailleurs : lier une sauce aux œufs, mijoter, confire des légumes, foncer une pâte, monter des blancs.",
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
