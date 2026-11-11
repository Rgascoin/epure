import Image, { type StaticImageData } from "next/image";
import { Fragment } from "react";
import clsx from "clsx";

/**
 * Two bands of ingredients sliding in opposite directions. Decorative, so
 * hidden from assistive tech; the list itself is a pure CSS animation.
 */
export function Marquee({
  rows,
  thumbs,
}: {
  rows: [string[], string[]];
  thumbs: Array<{ image: StaticImageData; focus?: string }>;
}) {
  return (
    <div aria-hidden className="loop-anim relative overflow-hidden border-y border-line py-6 select-none md:py-9">
      {rows.map((words, r) => (
        <div
          key={r}
          className="flex w-max"
          style={{ animation: `marquee ${r ? 70 : 55}s linear infinite ${r ? "reverse" : "normal"}` }}
        >
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {words.map((word, i) => (
                <Fragment key={`${copy}-${i}`}>
                  <span
                    className={clsx(
                      "px-[0.35em] font-display text-[clamp(2.2rem,5.5vw,4.75rem)] leading-[1.15] whitespace-nowrap",
                      r ? "font-[500] text-fg-3 text-outline" : "serif-accent text-fg",
                    )}
                  >
                    {word}
                  </span>
                  {r === 0 ? (
                    <span className="relative mx-[0.4em] inline-block h-[clamp(2rem,4.6vw,3.9rem)] w-[clamp(2rem,4.6vw,3.9rem)] shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={thumbs[i % thumbs.length].image}
                        alt=""
                        fill
                        sizes="64px"
                        quality={60}
                        className="object-cover"
                        style={{ objectPosition: thumbs[i % thumbs.length].focus }}
                      />
                    </span>
                  ) : (
                    <span className="mx-[0.4em] text-[clamp(1.4rem,3vw,2.4rem)] text-accent">✻</span>
                  )}
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
