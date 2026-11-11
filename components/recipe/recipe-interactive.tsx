"use client";

import type { StaticImageData } from "next/image";
import { AnimatePresence, useScroll, useSpring } from "motion/react";
import * as m from "motion/react-m";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import type { IngredientGroup, MethodSection } from "@/lib/types";
import { displayQty, fr, ingredientName, ingredientPhrase, plural, scaleQty } from "@/lib/format";
import { Bulb, Check, ChefHat, Copy, Minus, Plus, Reset } from "../icons";
import { CookingMode, type FlatStep } from "./cooking-mode";
import { TimerButton, TimersProvider } from "./timers";

interface Props {
  slug: string;
  title: string;
  servings: number;
  servingsLabel: { one: string; other: string };
  ingredients: IngredientGroup[];
  method: MethodSection[];
  equipment: string[];
  hero: StaticImageData;
  heroAlt: string;
}

/* Persist checked ingredients/steps per recipe, without hydration mismatch. */
function usePersistentSet(key: string) {
  const [set, setSet] = useState<Set<string>>(() => new Set());
  // Effects only run on the client, after hydration: no SSR mismatch.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-shot hydration from storage
      if (raw) setSet(new Set(JSON.parse(raw) as string[]));
    } catch {
      /* storage unavailable */
    }
  }, [key]);
  const update = useCallback(
    (fn: (s: Set<string>) => void) =>
      setSet((prev) => {
        const next = new Set(prev);
        fn(next);
        try {
          window.localStorage.setItem(key, JSON.stringify([...next]));
        } catch {
          /* ignore */
        }
        return next;
      }),
    [key],
  );
  return [set, update] as const;
}

export function RecipeInteractive(props: Props) {
  return (
    <TimersProvider>
      <RecipeInteractiveInner {...props} />
    </TimersProvider>
  );
}

function RecipeInteractiveInner({
  slug,
  title,
  servings: baseServings,
  servingsLabel,
  ingredients,
  method,
  equipment,
  hero,
  heroAlt,
}: Props) {
  const [servings, setServings] = useState(baseServings);
  const [checked, updateChecked] = usePersistentSet(`epure:${slug}:ingredients`);
  const [done, updateDone] = usePersistentSet(`epure:${slug}:steps`);
  const [cooking, setCooking] = useState(false);
  const [startAt, setStartAt] = useState(0);
  const [copied, setCopied] = useState(false);
  const factor = servings / baseServings;
  const servingsText = `Pour ${servings} ${plural(servings, servingsLabel)}`;

  const flatSteps = useMemo<FlatStep[]>(() => {
    let n = 0;
    return method.flatMap((section) => section.steps.map((s) => ({ ...s, n: ++n, section: section.title })));
  }, [method]);

  const openCooking = (at = 0) => {
    setStartAt(at);
    setCooking(true);
  };

  // Deep link: /recettes/x#cuisiner opens cooking mode.
  useEffect(() => {
    const onHash = () => window.location.hash === "#cuisiner" && openCooking(0);
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const copyList = async () => {
    const lines = [
      `${title} — ${servingsText.toLowerCase()}`,
      "",
      ...ingredients.flatMap((g) => [
        ...(g.title ? [`${g.title}`] : []),
        ...g.items.map((i) => `• ${ingredientPhrase(i, factor)}${i.note ? ` (${i.note})` : ""}`),
        "",
      ]),
      window.location.href.split("#")[0],
    ];
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard denied */
    }
  };

  const minServings = 1;
  const maxServings = Math.max(12, baseServings * 3);

  return (
    <>
      <div id="recette" className="container-page grid gap-x-16 gap-y-16 lg:grid-cols-12">
        {/* ---------------------------------------------------------------- */}
        {/* Ingredients                                                      */}
        {/* ---------------------------------------------------------------- */}
        <aside className="lg:col-span-4" aria-labelledby="ingredients-title">
          <div className="no-scrollbar lg:sticky lg:top-[calc(var(--header-h)+1.5rem)] lg:max-h-[calc(100svh-var(--header-h)-3rem)] lg:overflow-y-auto lg:overscroll-contain lg:pb-2">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 id="ingredients-title" className="text-title">
                Ingrédients
              </h2>
              <div
                className="inline-flex items-center gap-1 rounded-full bg-fill p-1"
                role="group"
                aria-label="Nombre de portions"
                data-print="hide"
              >
                <button
                  type="button"
                  onClick={() => setServings((s) => Math.max(minServings, s - 1))}
                  disabled={servings <= minServings}
                  className="grid size-9 place-items-center rounded-full bg-elevated text-fg shadow-sm transition-[transform,opacity] active:scale-90 disabled:opacity-40"
                  aria-label="Retirer une portion"
                >
                  <Minus size={16} />
                </button>
                <output
                  aria-live="polite"
                  className="flex min-w-[7.25rem] items-baseline justify-center gap-1.5 px-1 text-[0.9375rem]"
                >
                  <RollingNumber value={servings} className="text-[1.125rem] font-semibold" />
                  <span className="text-fg-2">{plural(servings, servingsLabel)}</span>
                </output>
                <button
                  type="button"
                  onClick={() => setServings((s) => Math.min(maxServings, s + 1))}
                  disabled={servings >= maxServings}
                  className="grid size-9 place-items-center rounded-full bg-elevated text-fg shadow-sm transition-[transform,opacity] active:scale-90 disabled:opacity-40"
                  aria-label="Ajouter une portion"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {servings !== baseServings && (
              <p className="mt-3 text-[0.8125rem] text-fg-3">
                Quantités recalculées depuis la recette pour {baseServings}.{" "}
                <button
                  type="button"
                  onClick={() => setServings(baseServings)}
                  className="font-medium text-ink underline-offset-2 hover:underline"
                >
                  Revenir à {baseServings}
                </button>
              </p>
            )}

            <div className="mt-6 space-y-7">
              {ingredients.map((group, gi) => (
                <div key={gi}>
                  {group.title && <h3 className="mb-2 text-eyebrow text-ink">{group.title}</h3>}
                  <ul className="divide-y divide-line border-y border-line">
                    {group.items.map((ing, ii) => {
                      const id = `${gi}-${ii}`;
                      const isChecked = checked.has(id);
                      const q = scaleQty(ing, factor);
                      return (
                        <li key={id}>
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked={isChecked}
                            onClick={() => updateChecked((s) => (s.has(id) ? s.delete(id) : s.add(id)))}
                            className="group flex w-full items-start gap-3.5 py-3.5 text-left"
                          >
                            <span
                              className={clsx(
                                "mt-0.5 grid size-[22px] shrink-0 place-items-center rounded-full border-[1.5px] transition-all duration-300",
                                isChecked
                                  ? "border-accent bg-accent text-on-accent"
                                  : "border-line-strong group-hover:border-fg-3",
                              )}
                              data-print="hide"
                            >
                              <m.span
                                initial={false}
                                animate={{ scale: isChecked ? 1 : 0, opacity: isChecked ? 1 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 28 }}
                              >
                                <Check size={13} strokeWidth={3} />
                              </m.span>
                            </span>
                            <span
                              className={clsx(
                                "flex-1 text-[1.0625rem] leading-snug transition-opacity duration-300",
                                isChecked && "opacity-40",
                              )}
                            >
                              {q !== undefined && (
                                <span className="font-semibold tabular">
                                  <AnimatedQty value={displayQty(ing, q).num} />
                                  {ing.unit && ` ${displayQty(ing, q).unit}`}{" "}
                                </span>
                              )}
                              <span className={clsx(q === undefined && "first-letter:uppercase")}>
                                {ingredientName(ing, q)}
                              </span>
                              {ing.optional && <span className="text-fg-3"> (facultatif)</span>}
                              {ing.note && <span className="block text-[0.875rem] text-fg-3">{fr(ing.note)}</span>}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2" data-print="hide">
              <button type="button" onClick={copyList} className="btn btn-ghost h-10 px-4 text-[0.9375rem]">
                {copied ? <Check size={17} /> : <Copy size={17} />}
                {copied ? "Liste copiée" : "Copier la liste"}
              </button>
              {(checked.size > 0 || done.size > 0) && (
                <button
                  type="button"
                  onClick={() => {
                    updateChecked((s) => s.clear());
                    updateDone((s) => s.clear());
                  }}
                  className="btn btn-ghost h-10 px-4 text-[0.9375rem]"
                >
                  <Reset size={17} /> Tout décocher
                </button>
              )}
            </div>

            {equipment.length > 0 && (
              <div className="mt-10">
                <h3 className="text-eyebrow text-fg-3">Ustensiles</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {equipment.map((e) => (
                    <li key={e} className="rounded-full bg-fill px-3.5 py-1.5 text-[0.875rem] text-fg-2">
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              type="button"
              onClick={() => openCooking(0)}
              className="btn btn-accent mt-10 hidden w-full lg:inline-flex"
              data-print="hide"
            >
              <ChefHat size={20} /> Lancer le mode cuisine
            </button>
          </div>
        </aside>

        {/* ---------------------------------------------------------------- */}
        {/* Method                                                           */}
        {/* ---------------------------------------------------------------- */}
        <section className="lg:col-span-8" aria-labelledby="method-title">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="method-title" className="text-title">
              Préparation
            </h2>
            <p className="text-[0.9375rem] text-fg-3">
              {flatSteps.length} étapes ·{" "}
              {done.size > 0 ? `${done.size} faite${done.size > 1 ? "s" : ""}` : "touchez un numéro pour cocher"}
            </p>
          </div>
          <MethodList
            method={method}
            slug={slug}
            done={done}
            onToggle={(id) => updateDone((s) => (s.has(id) ? s.delete(id) : s.add(id)))}
            onCookFrom={(n) => openCooking(n - 1)}
          />
        </section>
      </div>

      {/* Mobile action bar */}
      <div
        data-print="hide"
        className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 flex items-center gap-2 rounded-full border border-line p-1.5 shadow-[var(--shadow-float)] glass lg:hidden"
      >
        <a href="#ingredients-title" className="btn btn-ghost h-12 flex-1 px-4 text-[0.9375rem]">
          Ingrédients
        </a>
        <button
          type="button"
          onClick={() => openCooking(0)}
          className="btn btn-accent h-12 flex-[1.4] px-4 text-[0.9375rem]"
        >
          <ChefHat size={19} /> Mode cuisine
        </button>
      </div>

      <CookingMode
        open={cooking}
        onClose={() => {
          setCooking(false);
          if (window.location.hash === "#cuisiner") history.replaceState(null, "", window.location.pathname);
        }}
        title={title}
        steps={flatSteps}
        ingredients={ingredients}
        factor={factor}
        servingsText={servingsText}
        hero={hero}
        heroAlt={heroAlt}
        slug={slug}
        startAt={startAt}
      />
    </>
  );
}

function MethodList({
  method,
  slug,
  done,
  onToggle,
  onCookFrom,
}: {
  method: MethodSection[];
  slug: string;
  done: Set<string>;
  onToggle: (id: string) => void;
  onCookFrom: (n: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.6", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });
  const StepHeading = method.length > 1 ? "h4" : "h3";
  // Global step number = steps in previous sections + index within section.
  const offsets = method.map((_, i) => method.slice(0, i).reduce((sum, sec) => sum + sec.steps.length, 0));

  return (
    <div ref={ref} className="relative mt-8">
      {/* Progress rail */}
      <div aria-hidden className="absolute top-2 bottom-2 left-[21px] w-px bg-line md:left-[27px]" data-print="hide">
        <m.div className="h-full w-full origin-top bg-accent" style={{ scaleY }} />
      </div>

      {method.map((section, si) => (
        <div key={section.title} className="relative">
          {method.length > 1 && (
            <h3 className="mb-6 ml-[60px] pt-2 text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink md:ml-[76px]">
              {section.title}
            </h3>
          )}
          <ol className="space-y-10 pb-10 md:space-y-12">
            {section.steps.map((step, idx) => {
              const num = offsets[si] + idx + 1;
              const id = `step-${num}`;
              const isDone = done.has(id);
              return (
                <li
                  key={id}
                  id={`etape-${num}`}
                  className="relative grid grid-cols-[44px_1fr] gap-4 md:grid-cols-[56px_1fr] md:gap-5"
                >
                  <button
                    type="button"
                    onClick={() => onToggle(id)}
                    aria-pressed={isDone}
                    aria-label={`${String(num).padStart(2, "0")} — marquer l’étape ${num} comme ${isDone ? "à faire" : "faite"}`}
                    className={clsx(
                      "relative z-10 grid size-11 place-items-center rounded-full text-[0.9375rem] font-semibold tabular ring-4 ring-bg transition-colors duration-300 md:size-14 md:text-[1.0625rem]",
                      isDone ? "bg-accent text-on-accent" : "bg-elevated text-fg shadow-[var(--shadow-card)]",
                    )}
                  >
                    <AnimatePresence mode="popLayout" initial={false}>
                      <m.span
                        key={isDone ? "done" : "num"}
                        initial={{ scale: 0.4, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.4, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      >
                        {isDone ? <Check size={18} strokeWidth={2.6} /> : String(num).padStart(2, "0")}
                      </m.span>
                    </AnimatePresence>
                  </button>
                  <div
                    className={clsx("min-w-0 pt-1.5 transition-opacity duration-500 md:pt-3", isDone && "opacity-45")}
                  >
                    <StepHeading className="text-[1.25rem] leading-tight font-semibold tracking-[-0.02em]">
                      {step.title}
                    </StepHeading>
                    <p className="mt-2 text-body text-fg-2">{fr(step.text)}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-2" data-print="hide">
                      {step.timer && (
                        <TimerButton id={`${slug}-step-${num}`} label={step.timer.label} minutes={step.timer.minutes} />
                      )}
                      <button
                        type="button"
                        onClick={() => onCookFrom(num)}
                        className="h-10 rounded-full px-3 text-[0.875rem] text-fg-3 transition-colors hover:bg-fill hover:text-fg"
                      >
                        Cuisiner d’ici
                      </button>
                    </div>
                    {step.tip && (
                      <p className="mt-4 flex gap-3 rounded-2xl bg-tint p-4 text-[0.9375rem] leading-relaxed text-fg-2">
                        <Bulb size={19} className="mt-0.5 shrink-0 text-ink" />
                        <span>
                          <span className="font-semibold text-fg">Astuce. </span>
                          {fr(step.tip)}
                        </span>
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      ))}
    </div>
  );
}

function RollingNumber({ value, className }: { value: number; className?: string }) {
  return (
    <span className={clsx("relative inline-flex overflow-hidden tabular", className)}>
      <AnimatePresence mode="popLayout" initial={false}>
        <m.span
          key={value}
          initial={{ y: "90%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-90%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 420, damping: 32 }}
        >
          {value}
        </m.span>
      </AnimatePresence>
    </span>
  );
}

function AnimatedQty({ value }: { value: string }) {
  return (
    <span className="relative inline-flex overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <m.span
          key={value}
          initial={{ y: "70%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-70%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
        >
          {value}
        </m.span>
      </AnimatePresence>
    </span>
  );
}
