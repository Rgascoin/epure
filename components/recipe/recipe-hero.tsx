"use client";

import Image, { type StaticImageData } from "next/image";
import { useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { useRef, ViewTransition, type ReactNode } from "react";

/**
 * Arched hero photo. Visible from the first paint (LCP-safe); scrolling
 * only pushes the photo gently inside its frame and turns the stamp.
 */
export function RecipeHeroArch({
  slug,
  image,
  alt,
  focus,
  stamp,
  note,
  pin,
}: {
  /** Pinterest: the vertical pin image and its text, picked by the browser extension. */
  pin?: { media: string; description: string };
  slug: string;
  image: StaticImageData;
  alt: string;
  focus?: string;
  stamp?: ReactNode;
  note?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <div ref={ref} className="relative">
      <ViewTransition name={`photo-${slug}`} share="morph" default="none">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[999px_999px_22px_22px] bg-fill shadow-[var(--shadow-float)] lg:aspect-auto lg:h-[min(78svh,760px)]">
          <m.div className="absolute inset-x-0 -inset-y-[6%]" style={{ y }}>
            <Image
              src={image}
              alt={alt}
              fill
              preload
              fetchPriority="high"
              quality={80}
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: focus }}
              data-pin-media={pin?.media}
              data-pin-description={pin?.description}
            />
          </m.div>
        </div>
      </ViewTransition>
      {stamp && (
        <m.div className="absolute -top-4 -left-3 w-28 md:-left-8 md:w-36" style={{ rotate }} data-print="hide">
          {stamp}
        </m.div>
      )}
      {note}
    </div>
  );
}

/** A print of the detail photo, pinned slightly crooked, drifting on scroll. */
export function Polaroid({ image, alt, caption }: { image: StaticImageData; alt: string; caption: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [3, -2]);

  return (
    <m.figure ref={ref} style={{ y, rotate }} className="relative mx-auto w-full max-w-[460px]">
      <span
        aria-hidden
        className="absolute -top-3 left-1/2 z-10 h-7 w-28 -translate-x-1/2 rotate-[-4deg] bg-[#e8dcc4]/80 shadow-sm"
      />
      <div className="bg-paper-card p-3 pb-16 shadow-[var(--shadow-float)]">
        <div className="relative aspect-[4/5] overflow-hidden bg-fill">
          <Image src={image} alt={alt} fill quality={80} placeholder="blur" sizes="460px" className="object-cover" />
        </div>
        <figcaption className="absolute inset-x-4 bottom-4 text-center hand text-[1.6rem] text-[#1b1712]">
          {caption}
        </figcaption>
      </div>
    </m.figure>
  );
}
