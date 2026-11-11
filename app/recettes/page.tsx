import type { Metadata } from "next";
import { categories, categoryPath, recipes, recipesIn } from "@/lib/recipes";
import { fr } from "@/lib/format";
import { breadcrumb, graph, organization, recipeList, webPage, website } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { PageTransition } from "@/components/page-transition";
import { RecipeBrowser } from "@/components/recipe-browser";
import { browsable } from "@/components/browsable";
import { InSeasonLinks } from "@/components/in-season";

const title = "Toutes les recettes du carnet";
const description = `Les ${recipes.length} recettes d’Épure, des crêpes au bœuf bourguignon : à chercher par plat, par ingrédient ou par catégorie, toutes au gramme près.`;

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
        <h1 className="mt-5 max-w-[16ch] text-display">
          {["Toutes", "les", "recettes", "du"].map((word, i) => (
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
            `${recipes.length} recettes pour l’instant, rangées en ${categories.filter((c) => recipesIn(c).length).length} catégories. Tapez un plat ou ce qui traîne dans le frigo : la recherche fouille aussi les ingrédients.`,
          )}
        </p>

        <div className="intro-fade mt-8" style={{ ["--d" as string]: "440ms" }}>
          <InSeasonLinks />
        </div>

        <div className="intro-fade mt-10" style={{ ["--d" as string]: "500ms" }}>
          <RecipeBrowser
            categories={categories
              .filter((c) => recipesIn(c).length)
              .map((c) => ({ slug: c.slug, label: c.label, href: categoryPath(c) }))}
            items={recipes.map((r) => browsable(r))}
          />
        </div>
      </section>
    </PageTransition>
  );
}
