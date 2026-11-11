"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useMotionValue, useSpring } from "motion/react";
import * as m from "motion/react-m";
import { useEffect, useState, ViewTransition, type CSSProperties } from "react";
import clsx from "clsx";
import { ArrowRight } from "../icons";

export interface IndexRow {
  slug: string;
  title: string;
  category: string;
  time: string;
  image: StaticImageData;
  alt: string;
  focus?: string;
  /** Readable on paper (light theme). */
  accent: string;
  /** Raw dish colour, lightened for the dark theme in CSS. */
  accentRaw: string;
}

/**
 * Table of contents. On desktop the photo of the hovered recipe follows the
 * cursor; everywhere, the small arched thumbnail morphs into the recipe's
 * hero photo when you open it (view transition).
 */
export function RecipeIndex({ rows }: { rows: IndexRow[] }) {
  const [active, setActive] = useState<string | null>(null);
  const [armed, setArmed] = useState(false);
  const [finePointer, setFinePointer] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 28, mass: 0.6 });
  const y = useSpring(my, { stiffness: 260, damping: 28, mass: 0.6 });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFinePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div
      className="relative"
      onPointerMove={(e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
      onPointerLeave={() => setActive(null)}
    >
      <ol className="border-t border-fg">
        {rows.map((r, i) => (
          <li key={r.slug} className="border-b border-line-strong">
            <Link
              href={`/recettes/${r.slug}`}
              transitionTypes={["nav-forward"]}
              onPointerEnter={() => {
                setArmed(true);
                setActive(r.slug);
              }}
              onFocus={() => setActive(r.slug)}
              onBlur={() => setActive(null)}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 md:grid-cols-[4rem_auto_1fr_auto_auto] md:gap-8 md:py-7"
            >
              <span className="hidden font-mono text-[0.8125rem] text-fg-3 tabular md:block">0{i + 1}</span>
              <ViewTransition name={`photo-${r.slug}`} share="morph" default="none">
                <span className="relative block h-16 w-12 overflow-hidden rounded-[999px_999px_8px_8px] md:h-20 md:w-16">
                  <Image
                    src={r.image}
                    alt=""
                    fill
                    sizes="64px"
                    quality={70}
                    className="object-cover"
                    style={{ objectPosition: r.focus }}
                  />
                </span>
              </ViewTransition>
              <span className="min-w-0">
                <span
                  className={clsx(
                    "row-title block font-display text-[clamp(1.75rem,4.6vw,4rem)] leading-[1.02] [font-weight:calc(400+var(--dw))] tracking-[-0.025em] transition-[transform,color] duration-500 ease-[var(--ease-out)] [font-variation-settings:'SOFT'_60] md:group-hover:translate-x-3",
                  )}
                  data-active={active === r.slug}
                  style={{ "--row": r.accentRaw, "--row-ink-light": r.accent } as CSSProperties}
                >
                  {r.title}
                </span>
                <span className="mt-1 block text-[0.875rem] text-fg-3 md:hidden">
                  {r.category} · {r.time}
                </span>
              </span>
              <span className="hidden text-eyebrow text-fg-3 md:block">{r.category}</span>
              <span className="flex items-center gap-4">
                <span className="hidden font-mono text-[0.875rem] tabular md:inline">{r.time}</span>
                <span className="grid size-10 place-items-center rounded-full border-[1.5px] border-line-strong transition-[background-color,border-color,color,transform] duration-500 group-hover:-rotate-45 group-hover:border-fg group-hover:bg-fg group-hover:text-bg">
                  <ArrowRight size={18} />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>

      {finePointer && armed && (
        <m.div
          aria-hidden
          className="pointer-events-none fixed top-0 left-0 z-40 h-[300px] w-[240px]"
          style={{ x, y, translateX: "-50%", translateY: "-115%" }}
          initial={false}
          animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.85, rotate: active ? -3 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {rows.map((r) => (
            <div
              key={r.slug}
              className="absolute inset-0 overflow-hidden rounded-[999px_999px_14px_14px] shadow-[var(--shadow-float)] transition-opacity duration-300"
              style={{ opacity: active === r.slug ? 1 : 0 }}
            >
              <Image
                src={r.image}
                alt=""
                fill
                sizes="240px"
                quality={70}
                className="object-cover"
                style={{ objectPosition: r.focus }}
              />
            </div>
          ))}
        </m.div>
      )}
    </div>
  );
}
