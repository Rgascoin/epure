import Link from "next/link";
import type { Route } from "next";
import { cacheLife } from "next/cache";
import {
  activeCollections,
  collectionPath,
  MIN_RECIPES_FOR_PAGE,
  monthName,
  parisToday,
  recipesInCollection,
  type Collection,
} from "@/lib/collections";
import type { Recipe } from "@/lib/types";
import { RecipeCard } from "./recipe-card";
import { ArrowRight } from "./icons";

/*
 * What is in season today. These components read the date, so they are cached
 * for an hour (cacheLife "hours"): the pages stay static, and Vercel refreshes
 * them in the background as the calendar moves on. Nothing is ever hidden;
 * this only decides what is put forward.
 */

const picks = (c: Collection, count: number): Recipe[] => recipesInCollection(c).slice(0, count);

const hasPage = (c: Collection) => recipesInCollection(c).length >= MIN_RECIPES_FOR_PAGE;

/** Link to a collection page, or straight to the recipe when the collection is still too small. */
function hrefOf(c: Collection): Route {
  const list = recipesInCollection(c);
  return (hasPage(c) ? collectionPath(c) : `/recettes/${list[0].slug}`) as Route;
}

/** Home band: the collection of the moment, four recipes, and what else is in season. */
export async function InSeason() {
  "use cache";
  cacheLife("hours");
  const today = parisToday(new Date());
  const [main, ...others] = activeCollections(today);
  if (!main) return null;
  const list = picks(main, 4);
  const total = recipesInCollection(main).length;

  return (
    <section aria-labelledby="season-title" className="container-page py-[clamp(4rem,10vh,7rem)]">
      <div className="rounded-[calc(var(--radius-card)*1.4)] border-2 border-fg p-5 md:p-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-fg-3">
              En ce moment · <span className="tabular">{monthName(today)}</span>
            </p>
            <h2 id="season-title" className="mt-3 text-headline text-balance">
              {main.headline}
            </h2>
            <p className="mt-3 text-lede text-fg-2">{main.lede}</p>
          </div>
          {hasPage(main) && (
            <Link href={hrefOf(main)} className="link-arrow">
              {main.title} ({total}) <ArrowRight size={18} />
            </Link>
          )}
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((r) => (
            <li key={r.slug}>
              <RecipeCard recipe={r} morph={false} />
            </li>
          ))}
        </ul>
        {others.length > 0 && (
          <p className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.9375rem] text-fg-2">
            <span className="font-mono text-[0.8125rem] text-fg-3">Aussi de saison</span>
            {others.map((c) => (
              <Link key={c.slug} href={hrefOf(c)} className="font-medium underline underline-offset-4 hover:text-fg">
                {c.title}
              </Link>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}

/** A slim line for the recipe index: links to the collections of the moment. */
export async function InSeasonLinks() {
  "use cache";
  cacheLife("hours");
  const active = activeCollections(parisToday(new Date()));
  if (!active.length) return null;
  return (
    <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.9375rem]">
      <span className="font-mono text-[0.8125rem] text-fg-3">En ce moment</span>
      {active.map((c) => (
        <Link
          key={c.slug}
          href={hrefOf(c)}
          className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-line-strong px-3.5 py-1.5 font-medium text-fg-2 transition-colors hover:border-fg hover:text-fg"
        >
          {c.title}
          <ArrowRight size={14} />
        </Link>
      ))}
    </p>
  );
}
