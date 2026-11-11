"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { AnimatePresence, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "motion/react";
import * as m from "motion/react-m";
import { useRef, useState } from "react";
import { ArrowRight } from "../icons";

export interface ShowcaseItem {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  image: StaticImageData;
  alt: string;
  focus?: string;
  deep: string;
  accent: string;
  time: string;
  difficulty: string;
}

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
/** Each transition happens in the middle of its scroll segment; both ends hold still. */
const reveal = (p: number, i: number, n: number) => easeInOut(clamp01((p * (n - 1) - (i - 1) - 0.22) / 0.56));

/**
 * Pinned, scroll-driven presentation of the five recipes.
 * One dish per "slide": the photo wipes upward, the stage recolours,
 * the copy re-sets itself. Pure native scroll — no hijacking.
 */
export function Showcase({ items }: { items: ShowcaseItem[] }) {
  const ref = useRef<HTMLElement>(null);
  const n = items.length;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.min(n - 1, Math.max(0, Math.round(p * (n - 1))));
    setActive((prev) => (prev === next ? prev : next));
  });

  const item = items[active];

  return (
    <section ref={ref} aria-labelledby="showcase-title" className="relative" style={{ height: `${n * 100 + 20}svh` }}>
      <h2 id="showcase-title" className="sr-only">
        Les cinq recettes, une à une
      </h2>
      <ol className="sr-only">
        {items.map((it) => (
          <li key={it.slug}>
            <Link href={`/recettes/${it.slug}`}>
              {it.title} — {it.tagline}
            </Link>
          </li>
        ))}
      </ol>

      <m.div
        aria-hidden
        className="grain sticky top-0 flex h-svh flex-col overflow-hidden text-white"
        initial={false}
        animate={{ backgroundColor: item.deep }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Ambient glow in the dish colour */}
        <m.div
          className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(55%_60%_at_68%_42%,black,transparent)] opacity-[0.26] max-md:[mask-image:radial-gradient(90%_45%_at_50%_30%,black,transparent)]"
          initial={false}
          animate={{ backgroundColor: item.accent }}
          transition={{ duration: 1.2 }}
        />

        <div className="relative container-page grid h-full grid-rows-[1fr_auto] gap-6 pt-[calc(var(--header-h)+1rem)] pb-6 md:grid-cols-12 md:grid-rows-1 md:items-center md:gap-10 md:pb-0">
          {/* Stage: stacked photos that wipe up */}
          <div className="relative order-1 h-full min-h-0 overflow-hidden rounded-[28px] md:order-2 md:col-span-7 md:h-[74svh]">
            {items.map((it, i) => (
              <Layer key={it.slug} item={it} i={i} n={n} progress={scrollYProgress} />
            ))}
          </div>

          {/* Copy */}
          <div className="relative order-2 min-h-[13.5rem] md:order-1 md:col-span-5 md:min-h-[24rem]">
            <AnimatePresence mode="popLayout" initial={false}>
              <m.div
                key={item.slug}
                initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(6px)", transition: { duration: 0.25 } }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start"
              >
                <p className="text-eyebrow text-white/60 tabular">
                  {String(active + 1).padStart(2, "0")}{" "}
                  <span className="text-white/30">/ {String(n).padStart(2, "0")}</span>
                  <span className="mx-2 text-white/30">·</span>
                  {item.category}
                </p>
                <p className="mt-3 text-[clamp(2.4rem,6.2vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.045em]">
                  {item.title}
                </p>
                <p className="mt-3 serif-accent text-[clamp(1.35rem,2.6vw,2.25rem)] leading-tight text-white/80">
                  {item.tagline}
                </p>
                <p className="mt-5 flex items-center gap-3 text-[0.9375rem] text-white/60">
                  <span>{item.time}</span>
                  <span className="size-1 rounded-full bg-white/40" />
                  <span>{item.difficulty}</span>
                </p>
                <Link
                  href={`/recettes/${item.slug}`}
                  transitionTypes={["nav-forward"]}
                  tabIndex={-1}
                  className="btn mt-6 bg-white text-black hover:bg-white/90"
                >
                  Voir la recette <ArrowRight size={18} />
                </Link>
              </m.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Segmented progress */}
        <div className="relative container-page pb-[max(1.25rem,env(safe-area-inset-bottom))] md:absolute md:inset-x-0 md:bottom-8">
          <div className="flex gap-1.5 md:max-w-[calc(5/12*100%)]">
            {items.map((it, i) => (
              <Segment key={it.slug} i={i} n={n} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </m.div>
    </section>
  );
}

function Layer({ item, i, n, progress }: { item: ShowcaseItem; i: number; n: number; progress: MotionValue<number> }) {
  const clipPath = useTransform(progress, (p) =>
    i === 0 ? "inset(0% 0% 0% 0%)" : `inset(${(1 - reveal(p, i, n)) * 100}% 0% 0% 0%)`,
  );
  const scale = useTransform(progress, (p) =>
    i === 0 ? 1 + clamp01(p * (n - 1)) * 0.04 : 1.22 - reveal(p, i, n) * 0.22,
  );
  return (
    <m.div className="absolute inset-0" style={{ clipPath, zIndex: i }}>
      <m.div className="absolute inset-0" style={{ scale }}>
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          quality={80}
          placeholder="blur"
          className="object-cover"
          style={{ objectPosition: item.focus }}
        />
      </m.div>
    </m.div>
  );
}

function Segment({ i, n, progress }: { i: number; n: number; progress: MotionValue<number> }) {
  const scaleX = useTransform(progress, (p) => clamp01(p * n - i));
  return (
    <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/20">
      <m.div className="h-full origin-left rounded-full bg-white" style={{ scaleX }} />
    </div>
  );
}
