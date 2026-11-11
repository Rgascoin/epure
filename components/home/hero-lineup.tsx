"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import * as m from "motion/react-m";
import { useRef } from "react";

export interface LineupItem {
  slug: string;
  title: string;
  image: StaticImageData;
  alt: string;
  focus?: string;
}

/**
 * The five dishes, fanned like a product lineup. As you scroll, the fan
 * straightens and opens up — the "keynote reveal" of the collection.
 */
export function HeroLineup({ items }: { items: LineupItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.25"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.6 });
  const center = (items.length - 1) / 2;

  return (
    <div ref={ref} className="relative mx-auto flex h-[clamp(250px,40vw,470px)] w-full items-center justify-center">
      {items.map((item, i) => (
        <LineupCard key={item.slug} item={item} offset={i - center} index={i} progress={progress} />
      ))}
    </div>
  );
}

function LineupCard({
  item,
  offset,
  index,
  progress,
}: {
  item: LineupItem;
  offset: number;
  index: number;
  progress: MotionValue<number>;
}) {
  const abs = Math.abs(offset);
  // Fanned → open line. Units are percentages of the card's own width.
  const x = useTransform(progress, [0, 1], [`${offset * 62}%`, `${offset * 108}%`]);
  const y = useTransform(progress, [0, 1], [`${abs * abs * 4}%`, "0%"]);
  const rotate = useTransform(progress, [0, 1], [offset * 6, 0]);
  const scale = useTransform(progress, [0, 1], [1 - abs * 0.07, 1 - abs * 0.035]);

  return (
    <m.div className="absolute w-[clamp(120px,18vw,260px)]" style={{ x, y, rotate, scale, zIndex: 10 - abs }}>
      <div className="intro-rise" style={{ ["--d" as string]: `${380 + abs * 110}ms` }}>
        <Link
          href={`/recettes/${item.slug}`}
          transitionTypes={["nav-forward"]}
          className="group relative block aspect-[3/4] overflow-hidden rounded-[clamp(18px,2.2vw,30px)] bg-fill shadow-[var(--shadow-float)] outline-offset-4"
          aria-label={item.title}
          tabIndex={-1}
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 34vw, 300px"
            quality={80}
            placeholder="blur"
            preload={index === Math.floor((5 - 1) / 2)}
            className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out)] group-hover:scale-[1.06]"
            style={{ objectPosition: item.focus }}
          />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-[clamp(10px,1.4vw,18px)] pt-10 text-[clamp(0.75rem,1.1vw,1rem)] font-semibold tracking-[-0.01em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {item.title}
          </span>
        </Link>
      </div>
    </m.div>
  );
}
