"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRight } from "../icons";
import { Scribble } from "../scribble";

export interface CarnetPage {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  image: StaticImageData;
  alt: string;
  focus?: string;
  note: string;
  basket: string[];
  accent: string;
  time: string;
  difficulty: string;
  servings: string;
}

/**
 * "Le carnet": on desktop the section pins and the pages slide sideways as
 * you scroll down, like leafing through a notebook on the kitchen table.
 * On touch screens it's a plain horizontal swipe with snapping.
 */
export function Carnet({ pages }: { pages: CarnetPage[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [pinned, setPinned] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const measure = () => {
      setPinned(mq.matches);
      const track = trackRef.current;
      if (track) setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    mq.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, (p) => (pinned ? -p * distance : 0));
  const bar = useTransform(scrollYProgress, [0, 1], [0.08, 1]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.min(pages.length, Math.max(1, Math.round(p * (pages.length - 1)) + 1));
    setPage((prev) => (prev === next ? prev : next));
  });

  return (
    <section
      id="carnet"
      ref={sectionRef}
      aria-labelledby="carnet-title"
      className="grain relative bg-charcoal text-paper md:h-[var(--carnet-h)]"
      style={{ "--carnet-h": pinned ? `calc(100svh + ${distance}px)` : "auto" } as CSSProperties}
    >
      <div className="md:sticky md:top-0 md:flex md:h-svh md:flex-col md:overflow-hidden">
        <div className="container-page flex items-end justify-between gap-6 pt-20 pb-8 md:pt-[calc(var(--header-h)+2rem)] md:pb-6">
          <div>
            <p className="text-eyebrow text-paper/60">Le carnet</p>
            <h2 id="carnet-title" className="mt-3 text-headline">
              Les cinq <span className="serif-accent text-[#E2765C]">pages</span>.
            </h2>
          </div>
          <p className="hidden items-center gap-3 font-mono text-[0.8125rem] text-paper/60 tabular md:flex" aria-hidden>
            <span>
              {String(page).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
            </span>
            <span className="relative h-px w-28 bg-paper/20">
              <m.span className="absolute inset-0 origin-left bg-paper" style={{ scaleX: bar }} />
            </span>
          </p>
        </div>

        <m.div
          ref={trackRef}
          style={{ x }}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-[var(--gutter)] pb-14 md:flex-1 md:snap-none md:items-center md:gap-10 md:overflow-visible md:pb-10"
        >
          {pages.map((p, i) => (
            <Page key={p.slug} page={p} index={i} />
          ))}
          <div className="w-px shrink-0 md:w-[8vw]" aria-hidden />
        </m.div>
      </div>
    </section>
  );
}

function Page({ page, index }: { page: CarnetPage; index: number }) {
  const tilt = index % 2 ? 1.1 : -0.9;
  return (
    <article
      className="relative w-[86vw] shrink-0 snap-center md:h-[min(70svh,640px)] md:w-[min(78vw,1100px)]"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="grid h-full overflow-hidden rounded-[18px] bg-[#faf6ef] text-charcoal shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] md:grid-cols-12">
        <div className="order-2 flex flex-col justify-between gap-8 p-6 md:order-1 md:col-span-5 md:p-10">
          <div>
            <p className="text-eyebrow text-[#6b6155]">
              N°&nbsp;0{index + 1} · {page.category}
            </p>
            <h3 className="mt-4 font-display text-[clamp(2rem,3.8vw,3.6rem)] leading-[0.98] font-[420] tracking-[-0.025em] [font-variation-settings:'SOFT'_60]">
              {page.title}
            </h3>
            <p className="mt-3 serif-accent text-[clamp(1.2rem,1.8vw,1.6rem)] leading-snug text-[#4f473e]">
              {page.tagline}
            </p>
            <p className="mt-6 hidden max-w-[22rem] text-[0.9375rem] leading-relaxed text-[#4f473e] md:block">
              <span className="font-mono text-[0.6875rem] tracking-wider text-[#6b6155] uppercase">
                Dans le panier ·{" "}
              </span>
              {page.basket.join(", ")}…
            </p>
          </div>
          <div>
            <dl className="grid grid-cols-3 border-y-2 border-dotted border-[#1b1712]/25 py-3 text-[0.875rem]">
              {[
                ["Temps", page.time],
                ["Niveau", page.difficulty],
                ["Pour", page.servings],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-[0.6875rem] tracking-wider text-[#6b6155] uppercase">{k}</dt>
                  <dd className="mt-1 font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            <Link
              href={`/recettes/${page.slug}`}
              transitionTypes={["nav-forward"]}
              className="group mt-6 inline-flex items-center gap-2 font-semibold underline decoration-[#1b1712]/30 decoration-[1.5px] underline-offset-[0.3em] transition-colors hover:decoration-current"
              style={{ color: "#1b1712" }}
            >
              Ouvrir la recette
              <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="relative order-1 h-[52vw] md:order-2 md:col-span-7 md:h-auto">
          <div className="absolute inset-3 overflow-hidden rounded-[999px_999px_14px_14px] md:inset-5">
            <Image
              src={page.image}
              alt={page.alt}
              fill
              sizes="(max-width: 768px) 86vw, 640px"
              quality={75}
              placeholder="blur"
              className="object-cover"
              style={{ objectPosition: page.focus }}
            />
          </div>
          <p
            className="absolute bottom-6 left-6 max-w-[14rem] -rotate-[5deg] rounded-md bg-[#faf6ef] px-3 py-1.5 hand text-[1.45rem] shadow-md md:bottom-10 md:-left-6 md:text-[1.8rem]"
            style={{ color: page.accent }}
          >
            {page.note}
          </p>
          <span
            aria-hidden
            className="absolute top-4 right-6 font-display text-[clamp(4rem,9vw,8.5rem)] leading-none font-[500] text-outline md:top-8"
            style={{ color: page.accent }}
          >
            {index + 1}
          </span>
          <Scribble
            variant="arrow-right"
            className="absolute bottom-[4.2rem] left-[10.5rem] hidden h-10 w-20 rotate-[-18deg] md:block"
          />
        </div>
      </div>
    </article>
  );
}
