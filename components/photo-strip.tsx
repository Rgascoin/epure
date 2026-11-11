import Image from "next/image";
import type { CSSProperties } from "react";
import type { Recipe } from "@/lib/types";

/** A row of arched photos, like pages fanned out on the table. Decorative. */
export function PhotoStrip({ recipes }: { recipes: Recipe[] }) {
  return (
    <div aria-hidden className="mt-14 flex items-end gap-3 overflow-hidden pb-10 md:gap-5">
      {recipes.slice(0, 5).map((r, i) => (
        <div
          key={r.slug}
          className="intro-fade relative aspect-[3/4] w-[clamp(6.5rem,17vw,15rem)] flex-none overflow-hidden rounded-[999px_999px_14px_14px] bg-fill shadow-[var(--shadow-card)] max-sm:[&:nth-child(n+4)]:hidden"
          style={
            {
              "--d": `${200 + i * 90}ms`,
              transform: `translateY(${[0, 28, 8, 36, 14][i]}px) rotate(${[-2, 1.5, -1, 2, -1.5][i]}deg)`,
            } as CSSProperties
          }
        >
          <Image
            src={r.hero}
            alt=""
            fill
            sizes="(max-width: 640px) 30vw, 240px"
            quality={70}
            priority={i < 3}
            placeholder="blur"
            className="object-cover"
            style={{ objectPosition: r.theme.focus }}
          />
        </div>
      ))}
    </div>
  );
}
