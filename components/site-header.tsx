"use client";

import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll, useSpring } from "motion/react";
import * as m from "motion/react-m";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { LogoMark, Wordmark } from "./logo";
import { ArrowRight, ChevronDown } from "./icons";

export interface NavCategory {
  label: string;
  href: string;
  count: number;
}

const NAV = [
  { href: "/recettes", label: "Recettes" },
  { href: "/a-propos", label: "À propos" },
] as const;

export function SiteHeader({ categories, total }: { categories: NavCategory[]; total: number }) {
  const pathname = usePathname();
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.001 });
  const isRecipe = pathname.startsWith("/recettes/");
  const inRecipes =
    pathname.startsWith("/recettes") || pathname.startsWith("/categories/") || pathname.startsWith("/collections");

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 8);
    // Out of the way while reading down, back as soon as you scroll up.
    if (y > 360 && y > prev + 4) setHidden(true);
    else if (y < prev - 4 || y < 360) setHidden(false);
  });

  return (
    <m.header
      data-site-header
      style={{ viewTransitionName: "site-header" }}
      initial={false}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500",
        scrolled ? "border-b border-line bg-bg/95" : "border-b border-transparent",
      )}
    >
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:rounded-lg focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Aller au contenu
      </a>
      <div className="container-page grid h-[var(--header-h)] grid-cols-[1fr_auto] items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="group flex items-center gap-2.5 justify-self-start text-fg"
          aria-label="Épure, retour à l’accueil"
          transitionTypes={["nav-back"]}
        >
          <LogoMark className="size-8 transition-transform duration-700 ease-[var(--ease-spring)] group-hover:rotate-[200deg]" />
          <Wordmark className="text-[1.5rem] leading-none" />
        </Link>

        <p className="hidden text-eyebrow text-fg-3 md:block" aria-hidden>
          Carnet de cuisine · N°&nbsp;1
        </p>

        <nav aria-label="Navigation principale" className="justify-self-end">
          <ul className="flex items-center gap-1 text-[0.9375rem] font-medium">
            {NAV.map((item) => {
              const active = pathname === item.href || (item.href === "/recettes" && inRecipes);
              return (
                <li key={item.href} className={item.href === "/recettes" ? "relative flex items-center" : undefined}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "relative px-3 py-2 transition-colors duration-300",
                      active ? "text-fg" : "text-fg-2 hover:text-fg",
                    )}
                  >
                    {item.label}
                    {active && (
                      <m.svg
                        layoutId="nav-scribble"
                        aria-hidden
                        viewBox="0 0 100 12"
                        preserveAspectRatio="none"
                        className="absolute inset-x-2 -bottom-0.5 h-2 text-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      >
                        <path
                          d="M2 7 C 20 3, 35 10, 52 6 S 85 3, 98 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                        />
                      </m.svg>
                    )}
                  </Link>
                  {item.href === "/recettes" && <CategoryMenu categories={categories} total={total} />}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {isRecipe && (
        <m.div
          aria-hidden
          className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-fg"
          style={{ scaleX: progress }}
        />
      )}
    </m.header>
  );
}

/**
 * Categories under « Recettes » (desktop): opens on hover, or with the
 * chevron button for keyboard and touch. Phones go straight to /recettes,
 * where the same categories are filters.
 */
function CategoryMenu({ categories, total }: { categories: NavCategory[]; total: number }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number>(undefined);

  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        root.current?.querySelector<HTMLButtonElement>("button")?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      if (!root.current?.parentElement?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  // Hovering the whole « Recettes » item (link + chevron) opens the menu.
  useEffect(() => {
    const item = root.current?.parentElement;
    if (!item) return;
    const enter = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      window.clearTimeout(closeTimer.current);
      setOpen(true);
    };
    const leave = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      closeTimer.current = window.setTimeout(() => setOpen(false), 180);
    };
    item.addEventListener("pointerenter", enter);
    item.addEventListener("pointerleave", leave);
    return () => {
      item.removeEventListener("pointerenter", enter);
      item.removeEventListener("pointerleave", leave);
      window.clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <div
      ref={root}
      className="hidden md:block"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="menu-categories"
        aria-label="Catégories de recettes"
        onClick={() => setOpen((o) => !o)}
        className="-ml-2 grid size-8 place-items-center rounded-full text-fg-2 transition-colors hover:bg-fill hover:text-fg aria-expanded:text-fg"
      >
        <ChevronDown size={16} className={clsx("transition-transform duration-300", open && "rotate-180")} />
      </button>
      <m.div
        id="menu-categories"
        initial={false}
        animate={
          open
            ? { opacity: 1, y: 0, rotate: -0.6, visibility: "visible" }
            : { opacity: 0, y: -8, rotate: 0, transitionEnd: { visibility: "hidden" } }
        }
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        style={{ visibility: "hidden" }}
        className={clsx(
          "absolute top-[calc(100%+0.75rem)] right-0 w-[19rem] origin-top-right",
          !open && "pointer-events-none",
        )}
      >
        <div className="rounded-[var(--radius-card)] bg-elevated p-2 shadow-[var(--shadow-float)] ring-1 ring-line">
          <p className="px-3 pt-2 pb-1 text-eyebrow text-fg-3">Catégories</p>
          <ul>
            {categories.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href as Route}
                  aria-current={pathname === c.href ? "page" : undefined}
                  className="flex items-baseline justify-between gap-4 rounded-[10px] px-3 py-2.5 text-[1rem] text-fg transition-colors hover:bg-fill aria-[current=page]:bg-fill"
                >
                  <span className="font-display text-[1.125rem] [font-weight:calc(420+var(--dw))]">{c.label}</span>
                  <span className="font-mono text-[0.8125rem] text-fg-3 tabular">{c.count}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/recettes"
            className="mt-1 flex items-center justify-between rounded-[10px] border-t border-line px-3 pt-3 pb-2.5 text-[0.9375rem] font-semibold transition-colors hover:bg-fill"
          >
            Toutes les recettes ({total})
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/collections"
            className="flex items-center justify-between rounded-[10px] px-3 pt-1.5 pb-2.5 text-[0.9375rem] font-semibold transition-colors hover:bg-fill"
          >
            Collections de saison
            <ArrowRight size={16} />
          </Link>
        </div>
      </m.div>
    </div>
  );
}
