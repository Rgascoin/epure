import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import type { Recipe } from "@/lib/types";
import { formatDuration } from "@/lib/format";

/**
 * A recipe as a sheet of paper: arched photo, number, title. The photo shares
 * a view-transition name with the recipe hero, so it morphs into the page.
 */
export function RecipeCard({
  recipe,
  index,
  headingLevel = 3,
}: {
  recipe: Recipe;
  index: number;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className="group relative h-full">
      <Link
        href={`/recettes/${recipe.slug}`}
        transitionTypes={["nav-forward"]}
        className="flex h-full flex-col rounded-[var(--radius-card)] bg-elevated p-3 shadow-[var(--shadow-card)] ring-1 ring-line transition-[transform,box-shadow] duration-500 ease-[var(--ease-out)] hover:-translate-y-1 hover:-rotate-[0.6deg] hover:shadow-[6px_6px_0_var(--accent)]"
      >
        <ViewTransition name={`photo-${recipe.slug}`} share="morph" default="none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[999px_999px_14px_14px] bg-fill">
            <Image
              src={recipe.hero}
              alt={recipe.images.heroAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={75}
              placeholder="blur"
              className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-out)] group-hover:scale-[1.05]"
              style={{ objectPosition: recipe.theme.focus }}
            />
          </div>
        </ViewTransition>
        <div className="flex flex-1 flex-col px-3 pt-5 pb-3">
          <p className="flex justify-between text-eyebrow text-fg-3">
            <span>
              N°&nbsp;0{index + 1} · {recipe.category}
            </span>
            <span className="tabular">{formatDuration(recipe.totalMinutes)}</span>
          </p>
          <Heading className="mt-3 font-display text-[1.875rem] leading-[1.02] font-[430] tracking-[-0.02em] [font-variation-settings:'SOFT'_60]">
            {recipe.title}
          </Heading>
          <p className="mt-2 serif-accent text-[1.1875rem] leading-snug text-fg-2">{recipe.tagline}</p>
        </div>
      </Link>
    </article>
  );
}
