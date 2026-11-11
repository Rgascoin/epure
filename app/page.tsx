import type { Metadata } from "next";
import Link from "next/link";
import { categories, categoryPath, featuredRecipes, latestRecipes, recipes, recipesIn } from "@/lib/recipes";
import { site } from "@/lib/site";
import { formatDuration, plural } from "@/lib/format";
import { graph, organization, recipeList, webPage, website } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { PageTransition } from "@/components/page-transition";
import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { Manifesto } from "@/components/home/manifesto";
import { Carnet } from "@/components/home/carnet";
import { Ticket } from "@/components/home/ticket";
import { RecipeIndex } from "@/components/home/recipe-index";
import { RecipeCard } from "@/components/recipe-card";
import { InSeason } from "@/components/in-season";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: "/" },
};

const byslug = Object.fromEntries(recipes.map((r) => [r.slug, r]));

export default function HomePage() {
  const data = graph(
    website(),
    organization(),
    webPage({
      path: "/",
      name: site.title,
      description: site.description,
      type: "CollectionPage",
      primaryImage: recipes[0].seoImages[2],
    }),
    recipeList("/", recipes),
  );

  const pill = (slug: string) => ({ image: byslug[slug].hero, focus: byslug[slug].theme.focus });

  return (
    <PageTransition>
      <JsonLd data={data} />

      <Hero
        pills={[pill("spaghetti-carbonara"), pill("tian-provencal"), pill("tarte-aux-pommes")]}
        count={recipes.length}
      />

      <Marquee
        rows={[
          [
            "guanciale",
            "pecorino romano",
            "pinot noir",
            "paleron",
            "courgettes",
            "thym frais",
            "reinettes",
            "chocolat noir",
          ],
          [
            "poivre concassé",
            "oignons grelots",
            "huile d’olive",
            "compote maison",
            "blancs en neige",
            "bouquet garni",
            "beurre doux",
          ],
        ]}
        thumbs={featuredRecipes.map((r) => ({ image: r.hero, focus: r.theme.focus }))}
      />

      <InSeason />

      <Manifesto />

      <Carnet
        pages={featuredRecipes.map((r) => ({
          slug: r.slug,
          title: r.title,
          tagline: r.tagline,
          category: `${r.category} · ${r.cuisine.toLowerCase()}`,
          image: r.hero,
          alt: r.images.heroAlt,
          focus: r.theme.focus,
          note: r.annotations.hero,
          basket: r.ingredients.flatMap((g) => g.items.map((i) => i.plural ?? i.name)).slice(0, 5),
          accent: r.theme.ink,
          time: formatDuration(r.totalMinutes),
          difficulty: r.difficulty,
          servings: `${r.servings} ${plural(r.servings, r.servingsLabel)}`,
        }))}
      />

      <Ticket count={recipes.length} />

      <section id="recettes" className="container-page pb-[clamp(4rem,10vh,7rem)]" aria-labelledby="index-title">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
          <div>
            <p className="text-eyebrow text-fg-3">Sommaire</p>
            <h2 id="index-title" className="mt-3 text-headline">
              Par où commencer&#8239;?
            </h2>
          </div>
          <Link href="/recettes" className="link-arrow">
            Toutes les recettes <ArrowRight size={18} />
          </Link>
        </div>
        <RecipeIndex
          rows={categories
            .filter((c) => recipesIn(c).length > 0)
            .map((c) => {
              const list = recipesIn(c);
              const cover = list.find((r) => r.featured) ?? list[0];
              return {
                slug: `categorie-${c.slug}`,
                href: categoryPath(c),
                title: c.label,
                category: `${list.length} recette${list.length > 1 ? "s" : ""}`,
                time: `dès ${formatDuration(Math.min(...list.map((r) => r.totalMinutes)))}`,
                image: cover.hero,
                alt: cover.images.heroAlt,
                focus: cover.theme.focus,
                accent: cover.theme.ink,
                accentRaw: cover.theme.accent,
              };
            })}
        />
      </section>

      <section className="container-page pb-[clamp(5rem,14vh,10rem)]" aria-labelledby="latest-title">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-eyebrow text-fg-3">Derniers ajouts</p>
            <h2 id="latest-title" className="mt-3 text-headline">
              Tout juste écrites.
            </h2>
          </div>
          <Link href="/recettes" className="link-arrow">
            Voir les {recipes.length} recettes <ArrowRight size={18} />
          </Link>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {latestRecipes.slice(0, 6).map((r) => (
            <li key={r.slug}>
              <RecipeCard recipe={r} />
            </li>
          ))}
        </ul>
        <p className="mt-10 -rotate-1 hand text-[1.6rem] text-ink">
          Si vous hésitez, la carbonara&#8239;: vingt-cinq minutes, et si la sauce graine, on vous dit comment la
          rattraper.
        </p>
      </section>
    </PageTransition>
  );
}
