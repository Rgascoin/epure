import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { categories, categoryBySlug, categoryPath, recipesIn } from "@/lib/recipes";
import { formatDuration, fr } from "@/lib/format";
import { breadcrumb, graph, organization, recipeList, webPage, website } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { PageTransition } from "@/components/page-transition";
import { RecipeCard } from "@/components/recipe-card";
import { RecipeIndex } from "@/components/home/recipe-index";
import { RecipeBrowser } from "@/components/recipe-browser";
import { PhotoStrip } from "@/components/photo-strip";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { recipeHaystack } from "@/lib/search";

const filled = categories.filter((c) => recipesIn(c).length > 0);

export function generateStaticParams() {
  return filled.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/categories/[category]">): Promise<Metadata> {
  const { category: slug } = await params;
  const c = categoryBySlug(slug);
  if (!c) return {};
  const list = recipesIn(c);
  const cover = list.find((r) => r.featured) ?? list[0];
  const path = categoryPath(c);
  return {
    title: c.seoTitle,
    description: c.description,
    alternates: { canonical: path },
    openGraph: {
      title: `${c.seoTitle} · Épure`,
      description: c.description,
      url: path,
      images: cover ? [{ url: cover.seoImages[2], width: 1600, height: 900, alt: cover.images.heroAlt }] : undefined,
    },
    twitter: { card: "summary_large_image", title: c.seoTitle, description: c.description },
  };
}

export default async function CategoryPage({ params }: PageProps<"/categories/[category]">) {
  const { category: slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) notFound();
  const list = recipesIn(category);
  if (!list.length) notFound();
  const path = categoryPath(category);
  const strip = [...list].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))).slice(0, 5);
  const fastest = Math.min(...list.map((r) => r.totalMinutes));
  const easy = list.filter((r) => r.difficulty === "Facile").length;

  const data = graph(
    website(),
    organization(),
    webPage({
      path,
      name: category.seoTitle,
      description: category.description,
      type: "CollectionPage",
      primaryImage: strip[0].seoImages[2],
      breadcrumbId: absoluteUrl(`${path}#breadcrumb`),
    }),
    breadcrumb(path, [
      { name: "Accueil", path: "/" },
      { name: "Recettes", path: "/recettes" },
      { name: category.label, path },
    ]),
    recipeList(path, list, category.label),
  );

  const others = filled.filter((c) => c.slug !== category.slug);

  return (
    <PageTransition>
      <JsonLd data={data} />
      <section className="container-page pt-[calc(var(--header-h)+clamp(2rem,6vh,4rem))]">
        <Breadcrumbs
          items={[
            { name: "Accueil", path: "/" },
            { name: "Recettes", path: "/recettes" },
            { name: category.label, path },
          ]}
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="intro-fade text-eyebrow text-fg-3" style={{ "--d": "60ms" } as CSSProperties}>
              Catégorie · {list.length} recette{list.length > 1 ? "s" : ""}
            </p>
            <h1 className="mt-5 text-display text-balance">
              {category.label.split(" ").map((word, i, words) => (
                <span key={i}>
                  <span
                    className={
                      i === words.length - 1 && words.length > 1 ? "intro-word serif-accent text-ink" : "intro-word"
                    }
                    style={{ "--i": i } as CSSProperties}
                  >
                    {word}
                  </span>{" "}
                </span>
              ))}
            </h1>
            <p className="intro-fade mt-6 max-w-2xl text-lede text-fg-2" style={{ "--d": "380ms" } as CSSProperties}>
              {fr(category.description)}
            </p>
          </div>
          <dl
            className="intro-fade grid grid-cols-3 border-y-2 border-dotted border-line-strong py-3 lg:col-span-5"
            style={{ "--d": "480ms" } as CSSProperties}
          >
            {[
              ["Recettes", String(list.length)],
              ["La plus rapide", formatDuration(fastest)],
              ["Faciles", `${easy} sur ${list.length}`],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[0.75rem] tracking-wider text-fg-3 uppercase">{k}</dt>
                <dd className="mt-1 font-semibold tabular">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <PhotoStrip recipes={strip} />
      </section>

      <section
        className="container-page pt-[clamp(3rem,8vh,5rem)] pb-[clamp(4rem,10vh,7rem)]"
        aria-labelledby="list-title"
      >
        <h2 id="list-title" className="sr-only">
          Les recettes de la catégorie
        </h2>
        <RecipeBrowser
          categories={[{ slug: category.slug, label: category.label, href: path }]}
          placeholder={`Chercher dans les ${category.label.toLowerCase()}…`}
          items={list.map((r) => ({
            slug: r.slug,
            title: r.title,
            category: category.slug,
            haystack: recipeHaystack(r, category.label),
            vegetarian: Boolean(r.diet?.includes("vegetarian") || r.diet?.includes("vegan")),
            quick: r.totalMinutes < 60,
            easy: r.difficulty === "Facile",
            node: <RecipeCard recipe={r} />,
          }))}
        />
      </section>

      <section className="container-page pb-[clamp(5rem,14vh,10rem)]" aria-labelledby="others-title">
        <p className="text-eyebrow text-fg-3">Ailleurs dans le carnet</p>
        <h2 id="others-title" className="mt-3 mb-10 text-headline">
          Les autres catégories.
        </h2>
        <RecipeIndex
          rows={others.map((c) => {
            const items = recipesIn(c);
            const cover = items.find((r) => r.featured) ?? items[0];
            return {
              slug: `categorie-${c.slug}`,
              href: categoryPath(c),
              title: c.label,
              category: `${items.length} recette${items.length > 1 ? "s" : ""}`,
              time: `dès ${formatDuration(Math.min(...items.map((r) => r.totalMinutes)))}`,
              image: cover.hero,
              alt: cover.images.heroAlt,
              focus: cover.theme.focus,
              accent: cover.theme.ink,
              accentRaw: cover.theme.accent,
            };
          })}
        />
      </section>
    </PageTransition>
  );
}
