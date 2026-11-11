import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import clsx from "clsx";
import type { Recipe } from "@/lib/types";
import { formatDuration } from "@/lib/format";
import { Clock } from "./icons";

/**
 * Recipe card. Its photo shares a view-transition name with the recipe
 * hero, so opening a recipe morphs the card into the page.
 */
export function RecipeCard({
  recipe,
  index,
  size = "default",
  headingLevel = 3,
}: {
  recipe: Recipe;
  index: number;
  size?: "default" | "large";
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className="group relative">
      <Link
        href={`/recettes/${recipe.slug}`}
        transitionTypes={["nav-forward"]}
        className="block rounded-[var(--radius-card)] outline-offset-4"
      >
        <ViewTransition name={`photo-${recipe.slug}`} share="morph" default="none">
          <div
            className={clsx(
              "relative overflow-hidden rounded-[var(--radius-card)] bg-fill",
              size === "large" ? "aspect-[4/5] md:aspect-[16/11]" : "aspect-[4/5]",
            )}
          >
            <Image
              src={recipe.hero}
              alt={recipe.images.heroAlt}
              fill
              sizes={
                size === "large"
                  ? "(max-width: 768px) 100vw, 66vw"
                  : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              }
              quality={80}
              placeholder="blur"
              className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-out)] group-hover:scale-[1.045]"
              style={{ objectPosition: recipe.theme.focus }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
            <span className="absolute top-4 left-4 rounded-full bg-black/35 px-3 py-1 text-[0.75rem] font-semibold text-white tabular backdrop-blur-md">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/35 px-3 py-1 text-[0.75rem] font-medium text-white backdrop-blur-md">
              <Clock size={13} strokeWidth={2.2} />
              {formatDuration(recipe.totalMinutes)}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
              <p className="text-eyebrow text-white/75">
                {recipe.category} · {recipe.cuisine}
              </p>
              <Heading
                className={clsx(
                  "mt-1.5 font-semibold tracking-[-0.03em]",
                  size === "large"
                    ? "text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.02]"
                    : "text-[1.625rem] leading-[1.05]",
                )}
              >
                {recipe.title}
              </Heading>
              <p className="mt-1 serif-accent text-[1.1875rem] text-white/85">{recipe.tagline}</p>
            </div>
          </div>
        </ViewTransition>
      </Link>
    </article>
  );
}
