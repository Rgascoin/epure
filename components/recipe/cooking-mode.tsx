"use client";

import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, type PanInfo } from "motion/react";
import * as m from "motion/react-m";
import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import type { IngredientGroup, Step } from "@/lib/types";
import { displayQty, fr, ingredientName, scaleQty } from "@/lib/format";
import { ArrowLeft, ArrowRight, Close, List } from "../icons";
import { TimerButton, TimerTray } from "./timers";

export interface FlatStep extends Step {
  n: number;
  section: string;
}

/**
 * Full-screen, one-step-at-a-time cooking mode.
 * - Native <dialog>: focus trap, Esc to close, background made inert.
 * - Screen Wake Lock keeps the display on while you cook.
 * - Swipe, arrow keys or buttons to move between steps.
 */
export function CookingMode({
  open,
  onClose,
  title,
  steps,
  ingredients,
  factor,
  servingsText,
  hero,
  heroAlt,
  slug,
  startAt = 0,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  steps: FlatStep[];
  ingredients: IngredientGroup[];
  factor: number;
  servingsText: string;
  hero: StaticImageData;
  heroAlt: string;
  slug: string;
  startAt?: number;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(startAt);
  const [direction, setDirection] = useState(1);
  const [showIngredients, setShowIngredients] = useState(false);
  const total = steps.length;
  const finished = index >= total;

  // Open / close the native dialog.
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      setIndex(startAt);
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open, startAt]);

  // Keep the screen awake while cooking.
  useEffect(() => {
    if (!open || !("wakeLock" in navigator)) return;
    let sentinel: WakeLockSentinel | null = null;
    const request = async () => {
      try {
        sentinel = await navigator.wakeLock.request("screen");
      } catch {
        /* denied (low battery, etc.) — not critical */
      }
    };
    const onVisible = () => document.visibilityState === "visible" && void request();
    void request();
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      document.removeEventListener("visibilitychange", onVisible);
      void sentinel?.release();
    };
  }, [open]);

  const go = useCallback(
    (delta: number) => {
      setDirection(delta);
      setIndex((i) => Math.min(total, Math.max(0, i + delta)));
    },
    [total],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") go(1);
      if (e.key === "ArrowLeft" || e.key === "PageUp") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -70 || info.velocity.x < -400) go(1);
    else if (info.offset.x > 70 || info.velocity.x > 400) go(-1);
  };

  const step = steps[Math.min(index, total - 1)];

  return (
    <dialog
      ref={ref}
      onClose={() => {
        document.documentElement.style.overflow = "";
        onClose();
      }}
      aria-label={`Mode cuisine : ${title}`}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-[#15120f] p-0 text-[#f2ede4] backdrop:bg-[#15120f]"
    >
      {open && (
        <div className="grain relative flex h-full flex-col">
          {/* Top bar */}
          <div className="relative flex items-start justify-between gap-4 px-5 pt-[max(1rem,env(safe-area-inset-top))] md:px-10 md:pt-8">
            <div className="min-w-0">
              <p className="truncate font-mono text-[0.75rem] tracking-wider text-[#f2ede4]/65 uppercase">{title}</p>
              <ol className="mt-3 flex flex-wrap gap-1.5" aria-label="Étapes">
                {steps.map((s, i) => (
                  <li key={s.n}>
                    <button
                      type="button"
                      onClick={() => {
                        setDirection(i > index ? 1 : -1);
                        setIndex(i);
                      }}
                      aria-label={`Aller à l’étape ${s.n}`}
                      aria-current={i === index ? "step" : undefined}
                      className={clsx(
                        "grid size-9 place-items-center rounded-full font-mono text-[0.8125rem] transition-colors duration-300",
                        i === index && !finished
                          ? "bg-accent text-on-accent"
                          : i < index || finished
                            ? "bg-[#f2ede4]/15 text-[#f2ede4]/70 line-through"
                            : "border border-[#f2ede4]/25 text-[#f2ede4]/70",
                      )}
                    >
                      {s.n}
                    </button>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => setShowIngredients((v) => !v)}
                aria-expanded={showIngredients}
                aria-controls="cm-ingredients"
                aria-label="Ingrédients"
                className={clsx(
                  "inline-flex h-11 items-center gap-2 rounded-[12px] border-[1.5px] px-4 text-[0.9375rem] font-medium transition-colors",
                  showIngredients
                    ? "border-[#f2ede4] bg-[#f2ede4] text-[#15120f]"
                    : "border-[#f2ede4]/30 hover:border-[#f2ede4]",
                )}
              >
                <List size={17} /> <span className="hidden sm:inline">Ingrédients</span>
              </button>
              <button
                type="button"
                onClick={() => ref.current?.close()}
                className="grid size-11 place-items-center rounded-[12px] border-[1.5px] border-[#f2ede4]/30 transition-colors hover:border-[#f2ede4]"
                aria-label="Quitter le mode cuisine"
              >
                <Close size={18} />
              </button>
            </div>
          </div>

          {/* Step stage */}
          <div className="relative flex min-h-0 flex-1 overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              {finished ? (
                <m.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex w-full flex-col items-center justify-center px-6 text-center"
                >
                  <div className="relative aspect-[4/5] w-[min(52vw,260px)] overflow-hidden rounded-[999px_999px_16px_16px] shadow-[6px_6px_0_var(--accent)]">
                    <Image src={hero} alt={heroAlt} fill sizes="260px" className="object-cover" />
                  </div>
                  <p className="mt-10 font-display text-[clamp(3rem,8vw,6rem)] leading-none [font-weight:calc(380+var(--dw))] [font-variation-settings:'SOFT'_100]">
                    Bon <span className="serif-accent text-accent-bright">appétit</span>.
                  </p>
                  <p className="mt-4 hand text-[1.6rem] text-[#f2ede4]/70">
                    {servingsText.toLowerCase()}. S’il en reste, la conservation est expliquée sur la page.
                  </p>
                  <button type="button" onClick={() => ref.current?.close()} className="btn btn-accent mt-8">
                    Fermer le mode cuisine
                  </button>
                </m.div>
              ) : (
                <m.article
                  key={`${slug}-${index}`}
                  custom={direction}
                  variants={{
                    enter: (d: number) => ({ opacity: 0, x: d * 90, rotate: d * 1.5 }),
                    center: { opacity: 1, x: 0, rotate: 0 },
                    exit: (d: number) => ({ opacity: 0, x: d * -90, rotate: d * -1.5 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  onDragEnd={onDragEnd}
                  className="no-scrollbar flex w-full cursor-grab touch-pan-y flex-col overflow-y-auto px-6 py-6 active:cursor-grabbing md:px-[8vw]"
                  aria-live="polite"
                >
                  <div className="my-auto">
                    <p className="text-eyebrow text-[#f2ede4]/65">
                      Étape {step.n} sur {total} · {step.section}
                    </p>
                    <div className="mt-4 flex items-baseline gap-4">
                      <span className="serif-accent text-[clamp(3.5rem,9vw,7rem)] leading-[0.8] text-accent-bright">
                        {step.n}.
                      </span>
                      <h2 className="text-[clamp(1.25rem,2.4vw,1.75rem)] font-semibold">{step.title}</h2>
                    </div>
                    <p
                      className={clsx(
                        "mt-6 max-w-[38ch] font-display leading-[1.18] [font-weight:calc(380+var(--dw))] text-balance [font-variation-settings:'SOFT'_80]",
                        step.text.length > 240
                          ? "text-[clamp(1.5rem,3.4vw,2.75rem)]"
                          : "text-[clamp(1.75rem,4.2vw,3.4rem)]",
                      )}
                    >
                      {fr(step.text)}
                    </p>
                    {step.tip && (
                      <p className="mt-7 max-w-[56ch] border-l-2 border-accent pl-4 text-[clamp(1rem,1.5vw,1.1875rem)] leading-relaxed text-[#f2ede4]/70">
                        <span className="mr-2 hand text-[1.5rem] text-accent-bright">psst.</span>
                        {fr(step.tip)}
                      </p>
                    )}
                    {step.timer && (
                      <div className="mt-9">
                        <TimerButton
                          id={`${slug}-step-${step.n}`}
                          label={step.timer.label}
                          minutes={step.timer.minutes}
                          tone="dark"
                          size="lg"
                        />
                      </div>
                    )}
                  </div>
                </m.article>
              )}
            </AnimatePresence>

            {/* Ingredients drawer */}
            <AnimatePresence>
              {showIngredients && (
                <m.aside
                  id="cm-ingredients"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 320, damping: 36 }}
                  className="absolute inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#f2ede4] px-6 py-6 text-[#1b1712] shadow-[-20px_0_60px_rgba(0,0,0,0.5)] sm:w-[400px]"
                  aria-label="Ingrédients"
                >
                  <p className="font-display text-[1.75rem] [font-weight:calc(450+var(--dw))]">Ingrédients</p>
                  <p className="hand text-[1.35rem] text-[#b23d24]">{servingsText.toLowerCase()}</p>
                  {ingredients.map((g, gi) => (
                    <div key={gi} className="mt-5">
                      {g.title && <p className="mb-1 text-eyebrow text-[#6b6155]">{g.title}</p>}
                      <ul>
                        {g.items.map((ing, i) => {
                          const q = scaleQty(ing, factor);
                          return (
                            <li key={i} className="flex items-baseline py-2 text-[1rem]">
                              <span className="first-letter:uppercase">{ingredientName(ing, q)}</span>
                              <span className="leader" />
                              <span className="shrink-0 font-display font-[500] whitespace-nowrap tabular">
                                {q !== undefined
                                  ? `${displayQty(ing, q).num}${ing.unit ? ` ${displayQty(ing, q).unit}` : ""}`
                                  : "au goût"}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </m.aside>
              )}
            </AnimatePresence>
          </div>

          {/* Running timers stay visible here: the dialog sits above the page's own tray. */}
          <div className="relative px-5 md:px-10">
            <div className="mx-auto max-w-md">
              <TimerTray variant="inline" />
            </div>
          </div>

          {/* Bottom controls */}
          <div className="relative flex items-center justify-between gap-3 px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] md:px-10 md:pb-8">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={index === 0}
              className="inline-flex h-14 items-center gap-2 rounded-[14px] border-[1.5px] border-[#f2ede4]/30 px-5 text-[1rem] font-medium transition-[border-color,opacity] hover:border-[#f2ede4] disabled:opacity-30"
            >
              <ArrowLeft size={20} /> <span className="sr-only sm:not-sr-only">Étape précédente</span>
            </button>
            <p className="hidden font-mono text-[0.75rem] text-[#f2ede4]/65 md:block">
              flèches ← → pour tourner les pages · Échap pour sortir
            </p>
            {!finished && (
              <button
                type="button"
                onClick={() => go(1)}
                className="inline-flex h-14 items-center gap-2 rounded-[14px] bg-[#f2ede4] px-6 text-[1rem] font-semibold text-[#15120f] shadow-[3px_3px_0_var(--accent)] transition-transform active:translate-x-[2px] active:translate-y-[2px]"
              >
                {index === total - 1 ? "J’ai fini" : "Étape suivante"} <ArrowRight size={20} />
              </button>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
