import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Stamp } from "../stamp";
import { Scribble } from "../scribble";
import { LogoMark } from "../logo";

interface Pill {
  image: StaticImageData;
  focus?: string;
}

/**
 * Editorial hero: the headline carries little photos of the dishes between
 * its words. Everything animates in CSS, from the first paint.
 */
export function Hero({ pills, count }: { pills: [Pill, Pill, Pill]; count: number }) {
  let i = 0;
  const w = (text: string) => (
    <span className="intro-word" style={{ "--i": i++ } as CSSProperties}>
      {text}
    </span>
  );

  return (
    <section className="relative overflow-hidden pt-[calc(var(--header-h)+clamp(2.5rem,8vh,6rem))] pb-[clamp(4rem,10vh,7rem)]">
      <div className="relative container-page">
        <p className="intro-fade text-eyebrow text-fg-3" style={{ "--d": "0ms" } as CSSProperties}>
          {count} recettes, et ça continue
        </p>

        <h1 className="mt-6 max-w-[14ch] text-hero text-balance md:max-w-[15ch]">
          {w("Des")} <PhotoPill pill={pills[0]} delay={450} /> {w("recettes")} {w("qu’on")} {w("a")} {w("pris")}{" "}
          <PhotoPill pill={pills[1]} delay={600} /> {w("le")} {w("temps")}{" "}
          <span className="relative inline-block">
            {w("d’écrire")}
            <Scribble
              variant="underline"
              animate={false}
              className="intro-fade absolute -bottom-[0.06em] left-0 h-[0.18em] w-full text-accent"
            />
          </span>
          {w(".")} <PhotoPill pill={pills[2]} delay={750} />
        </h1>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:items-end">
          <p
            className="intro-fade max-w-[34rem] text-lede text-fg-2 md:col-span-6"
            style={{ "--d": "650ms" } as CSSProperties}
          >
            Les grands classiques, du bœuf bourguignon aux crêpes du dimanche. Pour chacun&#8239;: les grammes, les
            temps, les gestes, et quoi faire quand ça tourne mal.
          </p>
          <div
            className="intro-fade flex flex-wrap items-center gap-x-6 gap-y-4 md:col-span-6 md:justify-end"
            style={{ "--d": "800ms" } as CSSProperties}
          >
            <Link href="/recettes" className="btn btn-primary">
              Voir toutes les recettes
            </Link>
            <Link href="/a-propos" className="link-arrow">
              Comment on les écrit
            </Link>
          </div>
        </div>

        <div
          className="intro-fade absolute top-0 right-[var(--gutter)] hidden w-36 lg:block xl:w-40"
          style={{ "--d": "900ms" } as CSSProperties}
        >
          <Stamp text="au gramme près · pas de pub · pas de pop-up · ">
            <LogoMark className="size-11 text-on-accent [--bg:var(--accent)]" />
          </Stamp>
        </div>
      </div>
    </section>
  );
}

function PhotoPill({ pill, delay }: { pill: Pill; delay: number }): ReactNode {
  return (
    <span
      aria-hidden
      className="pill-open relative inline-block h-[0.74em] w-[1.55em] translate-y-[0.06em] overflow-hidden rounded-full align-baseline shadow-[var(--shadow-card)] ring-[3px] ring-bg"
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      <Image
        src={pill.image}
        alt=""
        fill
        sizes="(max-width: 768px) 90px, 220px"
        quality={70}
        className="object-cover transition-transform duration-700 ease-[var(--ease-out)] hover:scale-110"
        style={{ objectPosition: pill.focus }}
      />
    </span>
  );
}
