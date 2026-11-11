"use client";

import Image, { type StaticImageData } from "next/image";
import { useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { useRef, ViewTransition } from "react";

/**
 * The recipe photo starts inset with rounded corners and expands to the
 * full viewport width as it scrolls into place — the classic keynote
 * "product grows to fill the screen" move. Server-rendered visible, so the
 * image is LCP-safe; only the clip and scale are driven by scroll.
 */
export function RecipeHeroImage({
  slug,
  image,
  alt,
  focus,
}: {
  slug: string;
  image: StaticImageData;
  alt: string;
  focus?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.12"] });
  const inset = useTransform(scrollYProgress, [0.35, 1], [5, 0], { clamp: true });
  const radius = useTransform(scrollYProgress, [0.35, 1], [32, 0], { clamp: true });
  const clipPath = useTransform(
    [inset, radius],
    ([i, r]) => `inset(0% ${i as number}% 0% ${i as number}% round ${r as number}px)`,
  );
  const scale = useTransform(scrollYProgress, [0.2, 1], [1.12, 1]);

  return (
    <div ref={ref} className="relative">
      <ViewTransition name={`photo-${slug}`} share="morph" default="none">
        <m.div
          className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:h-[min(86svh,62vw)]"
          style={{ clipPath }}
        >
          <m.div className="absolute inset-0" style={{ scale }}>
            <Image
              src={image}
              alt={alt}
              fill
              preload
              fetchPriority="high"
              quality={80}
              placeholder="blur"
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: focus }}
            />
          </m.div>
        </m.div>
      </ViewTransition>
    </div>
  );
}

/** Slow parallax for the secondary photograph. */
export function ParallaxImage({
  image,
  alt,
  caption,
}: {
  image: StaticImageData;
  alt: string;
  caption?: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1.1, 1.18]);

  return (
    <figure ref={ref} className="container-page">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-fill sm:aspect-[16/9]">
        <m.div className="absolute inset-0" style={{ y, scale }}>
          <Image
            src={image}
            alt={alt}
            fill
            quality={80}
            placeholder="blur"
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
        </m.div>
      </div>
      {caption && <figcaption className="mt-3 text-[0.8125rem] text-fg-3">{caption}</figcaption>}
    </figure>
  );
}
