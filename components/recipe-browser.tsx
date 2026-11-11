"use client";

import Link from "next/link";
import type { Route } from "next";
import { AnimatePresence, LayoutGroup } from "motion/react";
import * as m from "motion/react-m";
import { useDeferredValue, useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react";
import clsx from "clsx";
import { ArrowRight, Close, Search } from "./icons";
import { normalize, searchTokens } from "@/lib/search";

export interface BrowsableRecipe {
  slug: string;
  title: string;
  /** Category slug. */
  category: string;
  /** Lower-case, accent-free text the search runs on (title first). */
  haystack: string;
  vegetarian: boolean;
  quick: boolean;
  easy: boolean;
  node: ReactNode;
}

export interface BrowsableCategory {
  slug: string;
  label: string;
  href: string;
}

const TOGGLES = [
  { id: "vegetarian", label: "Végétarien" },
  { id: "quick", label: "Moins d’une heure" },
  { id: "easy", label: "Facile" },
] as const;
type Toggle = (typeof TOGGLES)[number]["id"];

/**
 * The recipe index: instant search (title, ingredients, keywords), one
 * category at a time, and combinable toggles. With nothing selected the
 * recipes are shown grouped by category, which is also the server render
 * (every recipe link is in the HTML for crawlers).
 */
export function RecipeBrowser({
  items,
  categories,
  placeholder = "Poulet, chocolat, courgette…",
}: {
  items: BrowsableRecipe[];
  /** Categories to filter by; pass one (or none) on a category page to hide the chips. */
  categories: BrowsableCategory[];
  placeholder?: string;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [toggles, setToggles] = useState<Toggle[]>([]);
  const deferredQuery = useDeferredValue(query);
  const input = useRef<HTMLInputElement>(null);
  const searchId = useId();

  // Shareable state: ?q=chocolat&categorie=desserts
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    const c = params.get("categorie");
    // One-time read of an external source (the address bar), after hydration.
    /* eslint-disable react-hooks/set-state-in-effect */
    if (q) setQuery(q);
    if (c && categories.some((x) => x.slug === c)) setCategory(c);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [categories]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (deferredQuery.trim()) params.set("q", deferredQuery.trim());
    if (category !== "all") params.set("categorie", category);
    const search = params.toString();
    const url = `${window.location.pathname}${search ? `?${search}` : ""}`;
    if (url !== `${window.location.pathname}${window.location.search}`) window.history.replaceState(null, "", url);
  }, [deferredQuery, category]);

  // « / » jumps to the search field, like on most indexes.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (e.key !== "/" || e.metaKey || e.ctrlKey || target.closest("input, textarea, [contenteditable]")) return;
      e.preventDefault();
      input.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const words = useMemo(() => searchTokens(deferredQuery), [deferredQuery]);

  /** Recipes matching the query and toggles, best title matches first. */
  const matching = useMemo(() => {
    const scored = items
      .filter((i) => toggles.every((t) => i[t]))
      .map((item, order) => {
        if (!words.length) return { item, order, score: 0 };
        const title = normalize(item.title);
        if (!words.every((w) => item.haystack.includes(w))) return null;
        const score = words.filter((w) => title.includes(w)).length;
        return { item, order, score };
      })
      .filter((x): x is { item: BrowsableRecipe; order: number; score: number } => x !== null);
    return scored.sort((a, b) => b.score - a.score || a.order - b.order).map((x) => x.item);
  }, [items, toggles, words]);

  const visible = category === "all" ? matching : matching.filter((i) => i.category === category);
  const single = categories.length <= 1;
  const filtering = category !== "all" || words.length > 0 || toggles.length > 0;
  const grouped = !single && !filtering;

  const reset = () => {
    setQuery("");
    setCategory("all");
    setToggles([]);
    input.current?.focus();
  };

  return (
    <LayoutGroup>
      <div className="space-y-6">
        {/* Search */}
        <div className="group relative max-w-2xl">
          <label htmlFor={searchId} className="sr-only">
            Chercher une recette, un ingrédient
          </label>
          <Search
            size={22}
            className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 text-fg-3 transition-colors group-focus-within:text-fg"
          />
          <input
            ref={input}
            id={searchId}
            type="search"
            inputMode="search"
            enterKeyHint="search"
            autoComplete="off"
            spellCheck={false}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape" && query) {
                e.preventDefault();
                setQuery("");
              }
            }}
            placeholder={placeholder}
            className="h-16 w-full border-b-2 border-line-strong bg-transparent pr-12 pl-9 font-display text-[1.625rem] [font-weight:calc(400+var(--dw))] tracking-[-0.01em] text-fg transition-colors outline-none placeholder:text-fg-3 focus:border-fg md:text-[2rem] [&::-webkit-search-cancel-button]:hidden"
          />
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                input.current?.focus();
              }}
              aria-label="Effacer la recherche"
              className="absolute top-1/2 right-0 grid size-11 -translate-y-1/2 place-items-center rounded-full text-fg-2 transition-colors hover:bg-fill hover:text-fg"
            >
              <Close size={18} />
            </button>
          ) : (
            <kbd
              aria-hidden
              className="absolute top-1/2 right-1 hidden -translate-y-1/2 rounded-md border border-line-strong px-2 py-0.5 font-mono text-[0.8125rem] text-fg-3 md:block"
            >
              /
            </kbd>
          )}
        </div>

        {/* Categories (one at a time) */}
        {!single && (
          <div
            role="group"
            aria-label="Catégories"
            className="-mx-[var(--gutter)] no-scrollbar flex gap-2 overflow-x-auto px-[var(--gutter)] pb-1"
          >
            {[{ slug: "all", label: "Tout" }, ...categories].map((c) => {
              const count = c.slug === "all" ? matching.length : matching.filter((i) => i.category === c.slug).length;
              const on = category === c.slug;
              return (
                <button
                  key={c.slug}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setCategory(c.slug)}
                  className={clsx(
                    "relative inline-flex h-11 shrink-0 items-center gap-2 rounded-[11px] border-[1.5px] px-4 text-[0.9375rem] font-medium transition-colors duration-300",
                    on ? "border-fg text-bg" : "border-line-strong text-fg-2 hover:border-fg hover:text-fg",
                    !on && count === 0 && "opacity-50",
                  )}
                >
                  {on && (
                    <m.span
                      layoutId="category-pill"
                      className="absolute -inset-[1.5px] rounded-[11px] bg-fg"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative">{c.label}</span>
                  <span className={clsx("relative text-[0.8125rem] tabular", on ? "text-bg/70" : "text-fg-3")}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Toggles (combinable) */}
        <div role="group" aria-label="Affiner" className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {TOGGLES.map((t) => {
            const on = toggles.includes(t.id);
            return (
              <button
                key={t.id}
                type="button"
                aria-pressed={on}
                onClick={() => setToggles((list) => (on ? list.filter((x) => x !== t.id) : [...list, t.id]))}
                className="group/t inline-flex min-h-11 items-center gap-2.5 text-[0.9375rem] font-medium text-fg-2 transition-colors hover:text-fg aria-pressed:text-fg"
              >
                <span
                  aria-hidden
                  className={clsx(
                    "grid size-5 place-items-center rounded-[6px] border-[1.5px] transition-colors duration-200",
                    on ? "border-fg bg-fg text-bg" : "border-line-strong group-hover/t:border-fg",
                  )}
                >
                  <svg
                    viewBox="0 0 12 12"
                    className={clsx("size-3 transition-opacity", on ? "opacity-100" : "opacity-0")}
                  >
                    <path
                      d="M2.5 6.2 5 8.5l4.5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {t.label}
              </button>
            );
          })}
          {filtering && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex min-h-11 items-center gap-1.5 font-mono text-[0.8125rem] text-fg-3 underline underline-offset-4 transition-colors hover:text-fg"
            >
              Tout effacer
            </button>
          )}
        </div>
      </div>

      <p aria-live="polite" className="mt-10 font-mono text-[0.8125rem] text-fg-3">
        {filtering
          ? visible.length
            ? `${visible.length} recette${visible.length > 1 ? "s" : ""}${deferredQuery.trim() ? ` pour « ${deferredQuery.trim()} »` : ""}`
            : ""
          : single
            ? `${items.length} recettes`
            : `${items.length} recettes, rangées par catégorie`}
      </p>

      {grouped ? (
        <div className="mt-6 space-y-[clamp(4rem,10vh,6rem)]">
          {categories.map((c) => {
            const list = items.filter((i) => i.category === c.slug);
            if (!list.length) return null;
            return (
              <section key={c.slug} aria-labelledby={`cat-${c.slug}`}>
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b-2 border-fg pb-4">
                  <h2 id={`cat-${c.slug}`} className="text-title">
                    {c.label}{" "}
                    <span className="font-mono text-[0.9375rem] font-normal text-fg-3 tabular">{list.length}</span>
                  </h2>
                  <Link href={c.href as Route} className="link-arrow text-[0.9375rem]">
                    La page {c.label.toLowerCase()} <ArrowRight size={16} />
                  </Link>
                </div>
                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                  {list.map((item) => (
                    <li key={item.slug}>{item.node}</li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      ) : visible.length ? (
        <section aria-label={filtering ? "Résultats" : "Les recettes"} className="mt-6">
          <m.ul layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((item) => (
                <m.li
                  key={item.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.94, filter: "blur(6px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.94, filter: "blur(6px)" }}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                >
                  {item.node}
                </m.li>
              ))}
            </AnimatePresence>
          </m.ul>
        </section>
      ) : (
        <div className="mt-6 max-w-xl rounded-[var(--radius-card)] border-2 border-dashed border-line-strong p-8">
          <p className="font-display text-[1.75rem] leading-tight [font-weight:calc(400+var(--dw))]">
            Rien de ce côté-là.
          </p>
          <p className="mt-3 text-fg-2">
            {deferredQuery.trim()
              ? `Aucune recette ne parle de « ${deferredQuery.trim()} » avec ces filtres. Essayez un ingrédient plus courant, ou retirez un filtre.`
              : "Aucune recette ne coche toutes ces cases pour l’instant. Retirez un filtre."}
          </p>
          <button type="button" onClick={reset} className="btn btn-primary mt-6">
            Tout afficher
          </button>
        </div>
      )}
    </LayoutGroup>
  );
}
