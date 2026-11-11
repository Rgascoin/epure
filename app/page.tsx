import type { Metadata } from "next";
import Link from "next/link";
import { recipes } from "@/lib/recipes";
import { site } from "@/lib/site";
import { fr, formatDuration } from "@/lib/format";
import { graph, organization, recipeList, webPage, website } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { PageTransition } from "@/components/page-transition";
import { HeroLineup } from "@/components/home/hero-lineup";
import { Showcase } from "@/components/home/showcase";
import { ScrollText } from "@/components/home/scroll-text";
import { Bento } from "@/components/home/bento";
import { RecipeCard } from "@/components/recipe-card";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: "/" },
};

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

  return (
    <PageTransition>
      <JsonLd data={data} />

      {/* ------------------------------------------------------------------ */}
      {/* 1. Hero                                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden pt-[calc(var(--header-h)+clamp(2.25rem,7vh,5.5rem))]">
        <div className="container-page text-center">
          <p className="intro-fade text-eyebrow text-fg-2" style={{ ["--d" as string]: "60ms" }}>
            Cinq recettes. Pas une de plus.
          </p>
          <h1 className="mt-5 text-hero">
            <span className="intro-line" style={{ ["--i" as string]: 0 }}>
              <span>La cuisine,</span>
            </span>
            <span className="intro-line" style={{ ["--i" as string]: 1 }}>
              <span>
                à l’<span className="pr-[0.04em] serif-accent font-normal tracking-[-0.03em]">essentiel</span>.
              </span>
            </span>
          </h1>
          <p
            className="intro-fade mx-auto mt-6 max-w-[34rem] text-lede text-fg-2"
            style={{ ["--d" as string]: "520ms" }}
          >
            {fr(
              "Cinq grands classiques, réécrits au gramme près. Des gestes clairs, des temps justes, et la raison de chaque étape.",
            )}
          </p>
          <div
            className="intro-fade mt-8 flex flex-wrap items-center justify-center gap-3"
            style={{ ["--d" as string]: "640ms" }}
          >
            <Link href="#recettes" className="btn btn-primary">
              Voir les recettes
            </Link>
            <Link href="/a-propos" className="btn btn-ghost">
              Pourquoi cinq&nbsp;?
            </Link>
          </div>
        </div>

        <div className="mt-[clamp(2.5rem,6vh,4.5rem)] pb-[clamp(3rem,8vh,6rem)]" aria-hidden>
          <HeroLineup
            items={recipes.map((r) => ({
              slug: r.slug,
              title: r.title,
              image: r.hero,
              alt: r.images.heroAlt,
              focus: r.theme.focus,
            }))}
          />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. Manifesto — words light up with scroll                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-page py-[clamp(5rem,16vh,12rem)]" aria-label="Notre parti pris">
        <ScrollText
          className="mx-auto max-w-[62rem] text-[clamp(1.9rem,4.4vw,3.9rem)] leading-[1.08] font-semibold tracking-[-0.038em]"
          text={fr(
            "La plupart des recettes en ligne vous racontent une histoire avant de vous dire quoi faire. Ici, c’est l’inverse. Des grammes plutôt que « un peu ». Des degrés plutôt que « feu moyen ». Et pour chaque geste, la raison qui le rend juste.",
          )}
        />
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. Showcase — pinned, scroll-driven presentation                    */}
      {/* ------------------------------------------------------------------ */}
      <Showcase
        items={recipes.map((r) => ({
          slug: r.slug,
          title: r.title,
          tagline: r.tagline,
          category: `${r.category} · ${r.cuisine}`,
          image: r.hero,
          alt: r.images.heroAlt,
          focus: r.theme.focus,
          deep: r.theme.deep,
          accent: r.theme.accent,
          time: formatDuration(r.totalMinutes),
          difficulty: r.difficulty,
        }))}
      />

      {/* ------------------------------------------------------------------ */}
      {/* 4. Features bento                                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-page py-[clamp(5rem,14vh,10rem)]" aria-labelledby="features-title">
        <div className="mb-10 max-w-3xl md:mb-14">
          <p className="text-eyebrow text-fg-3">Conçu pour la cuisine</p>
          <h2 id="features-title" className="mt-3 text-headline">
            Tout ce qu’il faut.
            <br />
            <span className="text-fg-3">Rien de ce qui gêne.</span>
          </h2>
        </div>
        <Bento />
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. All recipes                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section id="recettes" className="container-page pb-[clamp(5rem,14vh,10rem)]" aria-labelledby="recipes-title">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
          <div>
            <p className="text-eyebrow text-fg-3">La collection</p>
            <h2 id="recipes-title" className="mt-3 text-headline">
              Les cinq recettes.
            </h2>
          </div>
          <Link href="/recettes" className="link-arrow text-[1.0625rem]">
            Vue d’ensemble <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {recipes.map((r, i) => (
            <div key={r.slug} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
              <RecipeCard recipe={r} index={i} size={i < 2 ? "large" : "default"} />
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 6. Closing                                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="grain relative overflow-hidden bg-black py-[clamp(6rem,18vh,13rem)] text-center text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[#F0B323] [mask-image:radial-gradient(45%_55%_at_50%_55%,black,transparent)] opacity-[0.22]"
        />
        <div className="relative container-page">
          <h2 className="text-display">
            Cinq recettes.
            <br />
            <span className="serif-accent font-normal text-[#F0B323]">Mille dîners.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lede text-white/65">
            {fr(
              "Commencez par la plus rapide : vingt-cinq minutes, cinq ingrédients, et un geste à comprendre une fois pour toutes.",
            )}
          </p>
          <Link
            href={`/recettes/${recipes[0].slug}`}
            transitionTypes={["nav-forward"]}
            className="btn mt-9 bg-white text-black hover:bg-white/90"
          >
            Commencer par la carbonara <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
