import type { Metadata, Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { getNeighbours, getRecipe, recipes } from "@/lib/recipes";
import { absoluteUrl } from "@/lib/site";
import { formatDuration, plural } from "@/lib/format";
import { breadcrumb, faqSchema, graph, organization, recipeSchema, webPage, website } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { PageTransition } from "@/components/page-transition";
import { Polaroid, RecipeHeroArch } from "@/components/recipe/recipe-hero";
import { RecipeInteractive } from "@/components/recipe/recipe-interactive";
import { ShareActions } from "@/components/recipe/share-actions";
import {
  Byline,
  Essentials,
  Faq,
  Intro,
  KeyFacts,
  NextRecipe,
  Pantry,
  Science,
  TipsAndMistakes,
  Variations,
} from "@/components/recipe/sections";
import { Stamp } from "@/components/stamp";
import { Scribble } from "@/components/scribble";

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps<"/recettes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const r = getRecipe(slug);
  if (!r) return {};
  const path = `/recettes/${r.slug}`;
  return {
    title: r.seoTitle.length <= 52 ? r.seoTitle : { absolute: r.seoTitle },
    description: r.description,
    keywords: r.keywords,
    alternates: {
      canonical: path,
      types: { "text/markdown": `${path}.md` },
    },
    openGraph: {
      type: "article",
      url: path,
      title: r.seoTitle,
      description: r.description,
      publishedTime: r.datePublished,
      modifiedTime: r.dateModified,
      section: r.category,
      tags: r.keywords,
    },
    twitter: { card: "summary_large_image", title: r.seoTitle, description: r.description },
  };
}

export default async function RecipePage({ params }: PageProps<"/recettes/[slug]">) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) notFound();
  const { next } = getNeighbours(recipe.slug);
  const number = recipes.findIndex((r) => r.slug === recipe.slug) + 1;
  const path = `/recettes/${recipe.slug}`;
  const t = recipe.theme;

  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Recettes", path: "/recettes" },
    { name: recipe.title, path },
  ];
  const crumbsLd = breadcrumb(path, crumbs);
  const data = graph(
    website(),
    organization(),
    webPage({
      path,
      name: recipe.seoTitle,
      description: recipe.description,
      primaryImage: recipe.seoImages[2],
      breadcrumbId: absoluteUrl(`${path}#breadcrumb`),
      speakable: ["#en-bref"],
      datePublished: recipe.datePublished,
      dateModified: recipe.dateModified,
    }),
    crumbsLd,
    recipeSchema(recipe),
    faqSchema(path, recipe.faq),
  );

  const dietLabels: Record<string, string> = {
    vegetarian: "Végétarien",
    vegan: "Végan",
    glutenFree: "Sans gluten",
    lowLactose: "Pauvre en lactose",
  };

  return (
    <PageTransition>
      <JsonLd data={data} />

      {/*
        Dish colours are scoped to the page (not :root): Next.js keeps recently
        visited pages mounted in the background, so global styles would leak.
      */}
      <article
        className="recipe-theme pb-28 lg:pb-0"
        style={
          {
            "--accent": t.accent,
            "--on-accent": t.onAccent,
            "--ink-light": t.ink,
            "--tint-light": t.tint,
            "--deep": t.deep,
          } as CSSProperties
        }
      >
        {/* ---------------------------------------------------------------- */}
        {/* Header: text on the left, arched photo on the right              */}
        {/* ---------------------------------------------------------------- */}
        <header className="container-page grid gap-12 pt-[calc(var(--header-h)+clamp(1.5rem,5vh,3.5rem))] lg:grid-cols-12 lg:gap-x-16 lg:gap-y-12">
          <div className="flex flex-col lg:col-span-6 lg:row-start-1 lg:pt-6">
            <nav aria-label="Fil d’Ariane" className="intro-fade" style={{ "--d": "0ms" } as CSSProperties}>
              <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.8125rem] text-fg-3">
                {crumbs.map((c, i) => (
                  <li key={c.path} className="inline-flex items-center gap-2">
                    {i < crumbs.length - 1 ? (
                      <Link
                        href={c.path as Route}
                        className="underline-offset-2 transition-colors hover:text-fg hover:underline"
                        transitionTypes={["nav-back"]}
                      >
                        {c.name}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-fg-2">
                        {c.name}
                      </span>
                    )}
                    {i < crumbs.length - 1 && <span aria-hidden>/</span>}
                  </li>
                ))}
              </ol>
            </nav>

            <p className="intro-fade mt-10 text-eyebrow text-ink" style={{ "--d": "60ms" } as CSSProperties}>
              {recipe.category} · cuisine {recipe.cuisine.toLowerCase()}
              {recipe.diet
                ?.filter((d) => !(d === "vegetarian" && recipe.diet?.includes("vegan")))
                .slice(0, 2)
                .map((d) => (
                <span key={d}> · {dietLabels[d]}</span>
              ))}
            </p>
            <h1 className="mt-5 text-display text-balance">
              {recipe.title.split(" ").map((word, i) => (
                <span key={i}>
                  <span className="intro-word" style={{ "--i": i } as CSSProperties}>
                    {word}
                  </span>{" "}
                </span>
              ))}
            </h1>
            <p
              className="intro-fade mt-4 serif-accent text-[clamp(1.5rem,2.6vw,2.25rem)] leading-tight text-fg-2"
              style={{ "--d": "380ms" } as CSSProperties}
            >
              {recipe.tagline}
            </p>

            <dl
              className="intro-fade mt-9 grid max-w-md grid-cols-3 border-y-2 border-dotted border-line-strong py-3"
              style={{ "--d": "480ms" } as CSSProperties}
            >
              {[
                ["En tout", formatDuration(recipe.totalMinutes)],
                ["Niveau", recipe.difficulty],
                ["Pour", `${recipe.servings} ${plural(recipe.servings, recipe.servingsLabel)}`],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-[0.75rem] tracking-wider text-fg-3 uppercase">{k}</dt>
                  <dd className="mt-1 font-semibold">{v}</dd>
                </div>
              ))}
            </dl>

            <div
              className="intro-fade mt-8 flex flex-wrap items-center gap-3"
              style={{ "--d": "580ms" } as CSSProperties}
              data-print="hide"
            >
              <a href="#recette" className="btn btn-accent">
                Aller à la recette
              </a>
              <ShareActions title={recipe.seoTitle} text={recipe.description} />
            </div>
          </div>

          <div
            className="intro-fade relative lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1"
            style={{ "--d": "120ms" } as CSSProperties}
          >
            <RecipeHeroArch
              slug={recipe.slug}
              image={recipe.hero}
              alt={recipe.images.heroAlt}
              focus={t.focus}
              stamp={
                <Stamp text={`prêt en ${formatDuration(recipe.totalMinutes)} · ${recipe.difficulty} · `}>
                  <span className="flex flex-col items-center leading-none">
                    <span className="font-mono text-[0.625rem] tracking-widest">N°</span>
                    <span className="serif-accent text-[2rem]">0{number}</span>
                  </span>
                </Stamp>
              }
              note={
                <div className="absolute right-2 -bottom-6 flex items-end gap-1 md:-right-4" aria-hidden>
                  <Scribble variant="arrow-left" className="mb-6 h-8 w-16 -rotate-12 text-ink" />
                  <p className="max-w-[12rem] rotate-[-4deg] rounded-md bg-bg px-3 py-1.5 hand text-[1.6rem] text-ink shadow-[var(--shadow-card)]">
                    {recipe.annotations.hero}
                  </p>
                </div>
              }
            />
          </div>
          {/* On phones the summary comes after the photo; on desktop it sits under the title. */}
          <div
            className="intro-fade mt-2 lg:col-span-6 lg:row-start-2 lg:self-end"
            style={{ "--d": "700ms" } as CSSProperties}
          >
            <Essentials recipe={recipe} />
          </div>
        </header>

        {/* ---------------------------------------------------------------- */}
        {/* Facts + intro                                                     */}
        {/* ---------------------------------------------------------------- */}
        <div className="container-page mt-[clamp(4rem,10vh,7rem)]">
          <KeyFacts recipe={recipe} />
        </div>

        <div className="mt-[clamp(4rem,10vh,7rem)]">
          <Intro recipe={recipe} />
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* The recipe                                                       */}
        {/* ---------------------------------------------------------------- */}
        <div className="mt-[clamp(4rem,12vh,8rem)] scroll-mt-[calc(var(--header-h)+1rem)]">
          <RecipeInteractive
            slug={recipe.slug}
            title={recipe.title}
            servings={recipe.servings}
            servingsLabel={recipe.servingsLabel}
            ingredients={recipe.ingredients}
            method={recipe.method}
            equipment={recipe.equipment}
            hero={recipe.hero}
            heroAlt={recipe.images.heroAlt}
          />
        </div>

        <div className="mt-[clamp(4rem,12vh,8rem)]">
          <Science recipe={recipe} />
        </div>

        <div className="container-page mt-[clamp(4rem,12vh,8rem)] grid gap-16 md:grid-cols-12 md:items-start">
          <div className="md:sticky md:top-[calc(var(--header-h)+3rem)] md:col-span-5" data-print="hide">
            <Polaroid image={recipe.detail} alt={recipe.images.detailAlt} caption={recipe.annotations.detail} />
          </div>
          <div className="md:col-span-7">
            <TipsAndMistakes recipe={recipe} />
          </div>
        </div>

        <div className="mt-[clamp(4rem,12vh,8rem)] space-y-[clamp(4rem,12vh,8rem)]">
          <Variations recipe={recipe} />
          <Pantry recipe={recipe} />
          <Faq recipe={recipe} />
          <Byline recipe={recipe} />
          <NextRecipe next={next} />
        </div>
        <div className="h-[clamp(4rem,12vh,8rem)]" />
      </article>
    </PageTransition>
  );
}
