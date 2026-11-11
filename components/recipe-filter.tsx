"use client";

import { AnimatePresence, LayoutGroup } from "motion/react";
import * as m from "motion/react-m";
import { useState, type ReactNode } from "react";
import clsx from "clsx";

export interface FilterableItem {
  slug: string;
  tags: string[];
  node: ReactNode;
}

const FILTERS = [
  { id: "all", label: "Tout" },
  { id: "plat", label: "Plats" },
  { id: "dessert", label: "Desserts" },
  { id: "vegetarien", label: "Végétarien" },
  { id: "rapide", label: "Moins d’une heure" },
] as const;

export function RecipeFilter({ items }: { items: FilterableItem[] }) {
  const [active, setActive] = useState<(typeof FILTERS)[number]["id"]>("all");
  const visible = items.filter((i) => active === "all" || i.tags.includes(active));

  return (
    <LayoutGroup>
      <div
        role="toolbar"
        aria-label="Filtrer les recettes"
        className="-mx-[var(--gutter)] no-scrollbar flex gap-2 overflow-x-auto px-[var(--gutter)] pb-1"
      >
        {FILTERS.map((f) => {
          const count = f.id === "all" ? items.length : items.filter((i) => i.tags.includes(f.id)).length;
          const on = active === f.id;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(f.id)}
              className={clsx(
                "relative inline-flex h-10 shrink-0 items-center gap-2 rounded-full px-4 text-[0.9375rem] font-medium transition-colors duration-300",
                on ? "text-bg" : "bg-fill text-fg-2 hover:text-fg",
              )}
            >
              {on && (
                <m.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-0 rounded-full bg-fg"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative">{f.label}</span>
              <span className={clsx("relative text-[0.8125rem] tabular", on ? "text-bg/60" : "text-fg-3")}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <m.ul layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
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
    </LayoutGroup>
  );
}
