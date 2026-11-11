import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import type { Recipe } from "@/lib/types";
import { formatDuration } from "@/lib/format";
import { recipes } from "@/lib/recipes";

/**
 * A recipe as a sheet of paper: arched photo, number, title. The photo shares
 * a view-transition name with the recipe hero, so it morphs into the page.
 */
export function RecipeCard({ recipe, headingLevel = 3 }: { recipe: Recipe; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const number = String(recipes.indexOf(recipe) + 1).padStart(2, "0");
  return (
    <article className="group relative h-full">
      <Link
        href={`/recettes/${recipe.slug}`}
        transitionTypes={["nav-forward"]}
        className="flex h-full items-center gap-1 rounded-[var(--radius-card)] bg-elevated p-2.5 shadow-[var(--shadow-card)] ring-1 ring-line transition-[transform,box-shadow] duration-500 ease-[var(--ease-out)] hover:-translate-y-1 hover:-rotate-[0.6deg] hover:shadow-[6px_6px_0_var(--accent)] sm:flex-col sm:items-stretch sm:gap-0 sm:p-3"
      >
        <ViewTransition name={`photo-${recipe.slug}`} share="morph" default="none">
          <div className="relative aspect-[4/5] w-[6.5rem] shrink-0 overflow-hidden rounded-[999px_999px_10px_10px] bg-fill sm:w-auto sm:rounded-[999px_999px_14px_14px]">
            <Image
              src={recipe.hero}
              alt={recipe.images.heroAlt}
              fill
              sizes="(max-width: 640px) 104px, (max-width: 1024px) 50vw, 33vw"
              quality={70}
              placeholder="blur"
              className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-out)] group-hover:scale-[1.05]"
              style={{ objectPosition: recipe.theme.focus }}
            />
          </div>
        </ViewTransition>
        <div className="flex min-w-0 flex-1 flex-col px-3 py-2 sm:pt-5 sm:pb-3">
          <p className="flex flex-wrap justify-between gap-x-3 text-eyebrow text-fg-3">
            <span>
              N°&nbsp;{number} · {recipe.category}
            </span>
            <span className="tabular">{formatDuration(recipe.totalMinutes)}</span>
          </p>
          <Heading className="mt-2 font-display text-[1.5rem] leading-[1.02] [font-weight:calc(430+var(--dw))] tracking-[-0.02em] text-balance [font-variation-settings:'SOFT'_60] sm:mt-3 sm:text-[1.875rem]">
            {recipe.title}
          </Heading>
          <p className="mt-1.5 serif-accent text-[1.0625rem] leading-snug text-fg-2 sm:mt-2 sm:text-[1.1875rem]">
            {recipe.tagline}
          </p>
        </div>
      </Link>
    </article>
  );
}
