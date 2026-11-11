import type { Metadata, Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { getNeighbours, getRecipe, recipes } from "@/lib/recipes";
import { absoluteUrl } from "@/lib/site";
import { formatDuration, fr, plural } from "@/lib/format";
import { breadcrumb, faqSchema, graph, organization, recipeSchema, webPage, website } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { PageTransition } from "@/components/page-transition";
import { RecipeHeroImage, ParallaxImage } from "@/components/recipe/recipe-hero";
import { RecipeInteractive } from "@/components/recipe/recipe-interactive";
import { ShareActions } from "@/components/recipe/share-actions";
import {
  Byline,
  Essentials,
  Faq,
  Intro,
  KeyFacts,
  NextRecipe,
  Nutrition,
  PracticalInfo,
  Science,
  TipsAndMistakes,
  Variations,
} from "@/components/recipe/sections";
import { Clock, Gauge, Users } from "@/components/icons";

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
      speakable: ["#essentiel"],
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
        {/* Header                                                           */}
        {/* ---------------------------------------------------------------- */}
        <header className="container-page pt-[calc(var(--header-h)+clamp(1.5rem,5vh,3.5rem))] text-center">
          <nav aria-label="Fil d’Ariane" className="intro-fade" style={{ ["--d" as string]: "0ms" }}>
            <ol className="inline-flex flex-wrap items-center justify-center gap-1.5 text-[0.8125rem] text-fg-3">
              {crumbs.map((c, i) => (
                <li key={c.path} className="inline-flex items-center gap-1.5">
                  {i < crumbs.length - 1 ? (
                    <Link
                      href={c.path as Route}
                      className="transition-colors hover:text-fg"
                      transitionTypes={["nav-back"]}
                    >
                      {c.name}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-fg-2">
                      {c.name}
                    </span>
                  )}
                  {i < crumbs.length - 1 && <span aria-hidden>›</span>}
                </li>
              ))}
            </ol>
          </nav>

          <p className="intro-fade mt-8 text-eyebrow text-ink" style={{ ["--d" as string]: "80ms" }}>
            {recipe.category} · Cuisine {recipe.cuisine.toLowerCase()}
            {recipe.diet?.slice(0, 2).map((d) => (
              <span key={d}> · {dietLabels[d]}</span>
            ))}
          </p>
          <h1 className="mx-auto mt-4 max-w-[14ch] text-display text-balance">
            <span className="intro-line" style={{ ["--i" as string]: 0 }}>
              <span>{recipe.title}</span>
            </span>
          </h1>
          <p
            className="intro-fade mt-4 serif-accent text-[clamp(1.5rem,3vw,2.5rem)] leading-tight text-fg-2"
            style={{ ["--d" as string]: "300ms" }}
          >
            {recipe.tagline}
          </p>

          <div
            className="intro-fade mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[0.9375rem] text-fg-2"
            style={{ ["--d" as string]: "420ms" }}
          >
            <span className="inline-flex items-center gap-2">
              <Clock size={18} className="text-ink" /> {formatDuration(recipe.totalMinutes)}
            </span>
            <span className="inline-flex items-center gap-2">
              <Gauge size={18} className="text-ink" /> {recipe.difficulty}
            </span>
            <span className="inline-flex items-center gap-2">
              <Users size={18} className="text-ink" /> {recipe.servings} {plural(recipe.servings, recipe.servingsLabel)}
            </span>
          </div>
          <div
            className="intro-fade mt-7 flex flex-wrap items-center justify-center gap-2"
            style={{ ["--d" as string]: "520ms" }}
            data-print="hide"
          >
            <a href="#recette" className="btn btn-accent">
              Aller à la recette
            </a>
            <ShareActions title={recipe.seoTitle} text={recipe.description} />
          </div>
        </header>

        <div className="mt-[clamp(2.5rem,7vh,5rem)]">
          <RecipeHeroImage slug={recipe.slug} image={recipe.hero} alt={recipe.images.heroAlt} focus={t.focus} />
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Summary + facts                                                  */}
        {/* ---------------------------------------------------------------- */}
        <div className="container-page mt-[clamp(3rem,8vh,6rem)] grid gap-4 md:gap-5">
          <Essentials recipe={recipe} />
          <KeyFacts recipe={recipe} />
        </div>

        <div className="mt-[clamp(4rem,12vh,8rem)]">
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

        <div className="mt-[clamp(4rem,12vh,8rem)]" data-print="hide">
          <ParallaxImage
            image={recipe.detail}
            alt={recipe.images.detailAlt}
            caption={
              <>
                {fr(recipe.images.detailAlt)}. Photo :{" "}
                <a href={recipe.images.credits.detail.url} rel="noopener" className="underline underline-offset-2">
                  {recipe.images.credits.detail.photographer}
                </a>
              </>
            }
          />
        </div>

        <div className="mt-[clamp(4rem,12vh,8rem)] space-y-[clamp(4rem,12vh,8rem)]">
          <TipsAndMistakes recipe={recipe} />
          <Variations recipe={recipe} />
          <PracticalInfo recipe={recipe} />
          <Nutrition recipe={recipe} />
          <Faq recipe={recipe} />
          <Byline recipe={recipe} />
          <NextRecipe next={next} />
        </div>
        <div className="h-[clamp(4rem,12vh,8rem)]" />
      </article>
    </PageTransition>
  );
}
