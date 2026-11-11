"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll, useSpring } from "motion/react";
import * as m from "motion/react-m";
import { useState } from "react";
import clsx from "clsx";
import { LogoMark, Wordmark } from "./logo";

const NAV = [
  { href: "/recettes", label: "Recettes" },
  { href: "/a-propos", label: "À propos" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.001 });
  const isRecipe = pathname.startsWith("/recettes/");

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
              const active = pathname === item.href || (item.href === "/recettes" && isRecipe);
              return (
                <li key={item.href}>
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
