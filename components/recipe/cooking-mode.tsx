"use client";

import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, type PanInfo } from "motion/react";
import * as m from "motion/react-m";
import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import type { IngredientGroup, Step } from "@/lib/types";
import { displayQty, fr, ingredientName, scaleQty } from "@/lib/format";
import { ArrowLeft, ArrowRight, Close, List } from "../icons";
import { TimerButton } from "./timers";

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
      aria-label={`Mode cuisine — ${title}`}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-black p-0 text-white backdrop:bg-black"
    >
      {open && (
        <div className="relative flex h-full flex-col">
          {/* Ambient accent glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-1/2 left-1/2 aspect-square w-[110vmax] -translate-x-1/2 rounded-full opacity-25 blur-[140px]"
            style={{ background: "var(--accent)" }}
          />

          {/* Top bar */}
          <div className="relative flex flex-col gap-4 px-5 pt-[max(1rem,env(safe-area-inset-top))] md:px-10 md:pt-8">
            <div
              className="flex gap-1"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={total}
              aria-valuenow={Math.min(index + 1, total)}
            >
              {steps.map((s, i) => (
                <button
                  key={s.n}
                  type="button"
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className="group h-6 flex-1 py-2.5"
                  aria-label={`Aller à l’étape ${s.n}`}
                >
                  <span className="block h-[3px] overflow-hidden rounded-full bg-white/20">
                    <m.span
                      className="block h-full origin-left bg-white"
                      initial={false}
                      animate={{ scaleX: i < index || finished ? 1 : i === index ? 0.5 : 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </span>
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="truncate text-[0.875rem] text-white/55">{title}</p>
                <p className="text-[0.9375rem] font-semibold text-accent-bright">
                  {finished ? "Terminé" : `Étape ${step.n} sur ${total} · ${step.section}`}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowIngredients((v) => !v)}
                  aria-expanded={showIngredients}
                  aria-controls="cm-ingredients"
                  aria-label="Ingrédients"
                  className={clsx(
                    "inline-flex h-11 items-center gap-2 rounded-full px-4 text-[0.9375rem] font-medium transition-colors",
                    showIngredients ? "bg-white text-black" : "bg-white/10 hover:bg-white/15",
                  )}
                >
                  <List size={17} /> <span className="hidden sm:inline">Ingrédients</span>
                </button>
                <button
                  type="button"
                  onClick={() => ref.current?.close()}
                  className="grid size-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/15"
                  aria-label="Quitter le mode cuisine"
                >
                  <Close size={18} />
                </button>
              </div>
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
                  <div className="relative aspect-square w-[min(56vw,300px)] overflow-hidden rounded-full shadow-[0_30px_120px_-20px_var(--accent)]">
                    <Image src={hero} alt={heroAlt} fill sizes="300px" className="object-cover" />
                  </div>
                  <p className="mt-10 text-display">
                    Bon <span className="serif-accent font-normal text-accent-bright">appétit</span>.
                  </p>
                  <p className="mt-3 text-white/60">{servingsText}</p>
                  <button type="button" onClick={() => ref.current?.close()} className="btn btn-accent mt-8">
                    Terminer
                  </button>
                </m.div>
              ) : (
                <m.article
                  key={`${slug}-${index}`}
                  custom={direction}
                  variants={{
                    enter: (d: number) => ({ opacity: 0, x: d * 80, filter: "blur(8px)" }),
                    center: { opacity: 1, x: 0, filter: "blur(0px)" },
                    exit: (d: number) => ({ opacity: 0, x: d * -80, filter: "blur(8px)" }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  onDragEnd={onDragEnd}
                  className="no-scrollbar flex w-full cursor-grab touch-pan-y flex-col overflow-y-auto px-6 py-6 active:cursor-grabbing md:px-[8vw]"
                  aria-live="polite"
                >
                  <div className="my-auto">
                    <p className="text-[clamp(3.5rem,11vw,8rem)] leading-none font-semibold tracking-[-0.06em] text-white/12 tabular">
                      {String(step.n).padStart(2, "0")}
                    </p>
                    <h2 className="mt-2 text-[clamp(1.25rem,2.4vw,1.75rem)] font-semibold tracking-[-0.02em] text-accent-bright">
                      {step.title}
                    </h2>
                    <p
                      className={clsx(
                        "mt-4 max-w-[40ch] leading-[1.14] font-semibold tracking-[-0.03em] text-balance",
                        step.text.length > 240
                          ? "text-[clamp(1.375rem,3.4vw,2.625rem)]"
                          : "text-[clamp(1.625rem,4.2vw,3.25rem)]",
                      )}
                    >
                      {fr(step.text)}
                    </p>
                    {step.tip && (
                      <p className="mt-6 max-w-[56ch] text-[clamp(1rem,1.5vw,1.1875rem)] leading-relaxed text-white/55">
                        <span className="font-semibold text-white/80">Astuce · </span>
                        {fr(step.tip)}
                      </p>
                    )}
                    {step.timer && (
                      <div className="mt-8">
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
                  className="absolute inset-y-0 right-0 z-10 w-full overflow-y-auto border-l border-white/10 bg-[#111]/95 px-6 py-6 backdrop-blur-xl sm:w-[380px]"
                  aria-label="Ingrédients"
                >
                  <p className="text-eyebrow text-white/50">{servingsText}</p>
                  {ingredients.map((g, gi) => (
                    <div key={gi} className="mt-5">
                      {g.title && <p className="mb-2 text-[0.8125rem] font-semibold text-accent-bright">{g.title}</p>}
                      <ul className="divide-y divide-white/10">
                        {g.items.map((ing, i) => {
                          const q = scaleQty(ing, factor);
                          return (
                            <li key={i} className="flex items-baseline justify-between gap-4 py-2.5 text-[1rem]">
                              <span className="text-white/85">{ingredientName(ing, q)}</span>
                              <span className="shrink-0 font-semibold tabular">
                                {q !== undefined &&
                                  `${displayQty(ing, q).num}${ing.unit ? ` ${displayQty(ing, q).unit}` : ""}`}
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

          {/* Bottom controls */}
          <div className="relative flex items-center justify-between gap-3 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] md:px-10 md:pb-8">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={index === 0}
              className="inline-flex h-14 items-center gap-2 rounded-full bg-white/10 px-5 text-[1rem] font-medium transition-[background-color,opacity] hover:bg-white/15 disabled:opacity-30"
            >
              <ArrowLeft size={20} /> <span className="sr-only sm:not-sr-only">Précédente</span>
            </button>
            <p className="hidden text-[0.8125rem] text-white/40 md:block">← → pour naviguer · Échap pour quitter</p>
            {!finished && (
              <button
                type="button"
                onClick={() => go(1)}
                className="inline-flex h-14 items-center gap-2 rounded-full bg-white px-6 text-[1rem] font-semibold text-black transition-transform active:scale-[0.97]"
              >
                {index === total - 1 ? "Terminer" : "Suivante"} <ArrowRight size={20} />
              </button>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
