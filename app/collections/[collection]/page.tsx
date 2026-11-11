import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import {
  collectionBySlug,
  collectionPath,
  MIN_RECIPES_FOR_PAGE,
  publishedCollections,
  recipesInCollection,
} from "@/lib/collections";
import { categoryOf } from "@/lib/recipes";
import { formatDuration, fr } from "@/lib/format";
import { breadcrumb, graph, organization, recipeList, webPage, website } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { PageTransition } from "@/components/page-transition";
import { RecipeBrowser } from "@/components/recipe-browser";
import { browsable } from "@/components/browsable";
import { PhotoStrip } from "@/components/photo-strip";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowRight } from "@/components/icons";

export function generateStaticParams() {
  return publishedCollections().map((c) => ({ collection: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/collections/[collection]">): Promise<Metadata> {
  const { collection: slug } = await params;
  const c = collectionBySlug(slug);
  if (!c) return {};
  const cover = recipesInCollection(c)[0];
  const path = collectionPath(c);
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

export default async function CollectionPage({ params }: PageProps<"/collections/[collection]">) {
  const { collection: slug } = await params;
  const collection = collectionBySlug(slug);
  if (!collection) notFound();
  const all = recipesInCollection(collection);
  if (all.length < MIN_RECIPES_FOR_PAGE) notFound();
  const list = all;
  const path = collectionPath(collection);
  const fastest = Math.min(...list.map((r) => r.totalMinutes));
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: collection.title, path },
  ];

  const data = graph(
    website(),
    organization(),
    webPage({
      path,
      name: collection.seoTitle,
      description: collection.description,
      type: "CollectionPage",
      primaryImage: list[0].seoImages[2],
      breadcrumbId: absoluteUrl(`${path}#breadcrumb`),
    }),
    breadcrumb(path, crumbs),
    recipeList(path, list, collection.title),
  );

  const others = publishedCollections().filter((c) => c.slug !== collection.slug);
  const categories = [...new Map(list.map((r) => [categoryOf(r).slug, categoryOf(r)])).values()];

  return (
    <PageTransition>
      <JsonLd data={data} />
      <section className="container-page pt-[calc(var(--header-h)+clamp(2rem,6vh,4rem))]">
        <Breadcrumbs items={crumbs} />

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="intro-fade text-eyebrow text-fg-3" style={{ "--d": "60ms" } as CSSProperties}>
              Collection · mise en avant {collection.period}
            </p>
            <h1 className="mt-5 text-display text-balance">
              {collection.title.split(" ").map((word, i, words) => (
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
              {fr(collection.description)}
            </p>
          </div>
          <dl
            className="intro-fade grid grid-cols-3 border-y-2 border-dotted border-line-strong py-3 lg:col-span-5"
            style={{ "--d": "480ms" } as CSSProperties}
          >
            {[
              ["Recettes", String(list.length)],
              ["La plus rapide", formatDuration(fastest)],
              ["Catégories", String(categories.length)],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[0.75rem] tracking-wider text-fg-3 uppercase">{k}</dt>
                <dd className="mt-1 font-semibold tabular">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <PhotoStrip recipes={list} />
      </section>

      <section
        className="container-page pt-[clamp(3rem,8vh,5rem)] pb-[clamp(4rem,10vh,7rem)]"
        aria-labelledby="list-title"
      >
        <h2 id="list-title" className="sr-only">
          Les recettes de la collection
        </h2>
        <RecipeBrowser
          categories={[{ slug: "collection", label: collection.title, href: path }]}
          placeholder={`Chercher dans « ${collection.title} »…`}
          items={list.map((r) => browsable(r, "collection"))}
        />
      </section>

      <section className="container-page pb-[clamp(5rem,14vh,10rem)]" aria-labelledby="others-title">
        <p className="text-eyebrow text-fg-3">Au fil de l’année</p>
        <h2 id="others-title" className="mt-3 mb-8 text-headline">
          Les autres collections.
        </h2>
        <ul className="flex flex-wrap gap-2">
          {others.map((c) => (
            <li key={c.slug}>
              <Link
                href={collectionPath(c)}
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-line-strong px-4 py-2 font-medium text-fg-2 transition-colors hover:border-fg hover:text-fg"
              >
                {c.title}
                <span className="font-mono text-[0.8125rem] text-fg-3 tabular">{recipesInCollection(c).length}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link href="/collections" className="link-arrow ml-2 inline-flex min-h-10 items-center">
              Toutes les collections <ArrowRight size={16} />
            </Link>
          </li>
        </ul>
      </section>
    </PageTransition>
  );
}
