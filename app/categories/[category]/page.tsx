import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
        <nav aria-label="Fil d’Ariane" className="intro-fade" style={{ "--d": "0ms" } as CSSProperties}>
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.8125rem] text-fg-3">
            <li className="inline-flex items-center gap-2">
              <Link href="/" className="underline-offset-2 transition-colors hover:text-fg hover:underline">
                Accueil
              </Link>
              <span aria-hidden>/</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <Link href="/recettes" className="underline-offset-2 transition-colors hover:text-fg hover:underline">
                Recettes
              </Link>
              <span aria-hidden>/</span>
            </li>
            <li>
              <span aria-current="page" className="text-fg-2">
                {category.label}
              </span>
            </li>
          </ol>
        </nav>

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

        {/* A row of arched photos, like pages fanned out on the table. */}
        <div aria-hidden className="mt-14 flex items-end gap-3 overflow-hidden pb-10 md:gap-5">
          {strip.map((r, i) => (
            <div
              key={r.slug}
              className="intro-fade relative aspect-[3/4] w-[clamp(6.5rem,17vw,15rem)] flex-none overflow-hidden rounded-[999px_999px_14px_14px] bg-fill shadow-[var(--shadow-card)] max-sm:[&:nth-child(n+4)]:hidden"
              style={
                {
                  "--d": `${200 + i * 90}ms`,
                  transform: `translateY(${[0, 28, 8, 36, 14][i]}px) rotate(${[-2, 1.5, -1, 2, -1.5][i]}deg)`,
                } as CSSProperties
              }
            >
              <Image
                src={r.hero}
                alt=""
                fill
                sizes="(max-width: 640px) 30vw, 240px"
                quality={70}
                priority={i < 3}
                placeholder="blur"
                className="object-cover"
                style={{ objectPosition: r.theme.focus }}
              />
            </div>
          ))}
        </div>
      </section>

      <section
        className="container-page pt-[clamp(5rem,12vh,8rem)] pb-[clamp(4rem,10vh,7rem)]"
        aria-labelledby="list-title"
      >
        <h2 id="list-title" className="sr-only">
          Les recettes
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {list.map((r) => (
            <li key={r.slug}>
              <RecipeCard recipe={r} />
            </li>
          ))}
        </ul>
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
