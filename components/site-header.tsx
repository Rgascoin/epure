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
  { href: "/a-propos", label: "Manifeste" },
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
    // Hide on scroll down, reveal on scroll up — keeps the content immersive.
    if (y > 320 && y > prev + 4) setHidden(true);
    else if (y < prev - 4 || y < 320) setHidden(false);
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
        scrolled ? "border-b border-line glass" : "border-b border-transparent",
      )}
    >
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Aller au contenu
      </a>
      <div className="container-page flex h-[var(--header-h)] items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-fg"
          aria-label="Épure — accueil"
          transitionTypes={["nav-back"]}
        >
          <LogoMark className="size-7 transition-transform duration-500 ease-[var(--ease-out)] group-hover:rotate-[-8deg]" />
          <Wordmark className="text-[1.1875rem] font-semibold tracking-[-0.03em]" />
        </Link>
        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-1 text-[0.9375rem]">
            {NAV.map((item) => {
              const active = pathname === item.href || (item.href === "/recettes" && isRecipe);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "relative rounded-full px-3.5 py-1.5 transition-colors duration-300",
                      active ? "text-fg" : "text-fg-2 hover:text-fg",
                    )}
                  >
                    {active && (
                      <m.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-fill"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {item.label}
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
