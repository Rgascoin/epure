"use client";

import type { StaticImageData } from "next/image";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import type { EasyVersion, IngredientGroup, MethodSection } from "@/lib/types";
import {
  capitalize,
  displayQty,
  formatDuration,
  fr,
  ingredientName,
  ingredientPhrase,
  plural,
  scaleQty,
} from "@/lib/format";
import { Check, ChefHat, Copy, Minus, Plus, Reset } from "../icons";
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

type Version = "maison" | "facile";
const VERSION_EVENT = "epure:version";

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

/**
 * Ingredients, steps and cooking mode. When the recipe has a « version
 * facile » (a ready-made shortcut), a switch swaps the ingredients, the steps
 * and the timers. The choice is shareable: ?version=facile.
 */
export function RecipeInteractive({
  easy,
  totalMinutes,
  ...props
}: Props & { easy?: EasyVersion; totalMinutes: number }) {
  const [version, setVersion] = useState<Version>("maison");

  useEffect(() => {
    if (!easy) return;
    // One-time read of an external source (the address bar), after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (new URLSearchParams(window.location.search).get("version") === "facile") setVersion("facile");
    const onEvent = (e: Event) => setVersion((e as CustomEvent<Version>).detail);
    window.addEventListener(VERSION_EVENT, onEvent);
    return () => window.removeEventListener(VERSION_EVENT, onEvent);
  }, [easy]);

  // Keep the address shareable, whichever control changed the version.
  useEffect(() => {
    if (!easy) return;
    const url = new URL(window.location.href);
    if (version === "facile") url.searchParams.set("version", "facile");
    else url.searchParams.delete("version");
    if (url.href !== window.location.href) window.history.replaceState(null, "", url);
  }, [version, easy]);

  const isEasy = Boolean(easy && version === "facile");
  return (
    <TimersProvider>
      <div id="recette" className="scroll-mt-[calc(var(--header-h)+1rem)]">
        {easy && <VersionSwitch version={version} onChange={setVersion} easy={easy} fullMinutes={totalMinutes} />}
        <RecipeInteractiveInner
          key={version}
          {...props}
          slug={isEasy ? `${props.slug}-facile` : props.slug}
          ingredients={isEasy ? easy!.ingredients : props.ingredients}
          method={isEasy ? easy!.method : props.method}
        />
      </div>
    </TimersProvider>
  );
}

const easyMinutes = (e: EasyVersion) => e.times.prep + e.times.cook + (e.times.rest ?? 0);

function VersionSwitch({
  version,
  onChange,
  easy,
  fullMinutes,
}: {
  version: Version;
  onChange: (v: Version) => void;
  easy: EasyVersion;
  fullMinutes: number;
}) {
  const options: Array<[Version, string, number]> = [
    ["maison", "Fait maison", fullMinutes],
    ["facile", "Version facile", easyMinutes(easy)],
  ];
  return (
    <div className="container-page mb-14" data-print="hide">
      <div
        role="group"
        aria-label="Version de la recette"
        className="grid w-full grid-cols-2 rounded-[14px] border-[1.5px] border-fg p-1 sm:inline-grid sm:w-auto"
      >
        {options.map(([v, label, minutes]) => {
          const on = version === v;
          return (
            <button
              key={v}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(v)}
              className={clsx(
                "relative flex min-h-11 flex-col items-start gap-0.5 rounded-[10px] px-4 py-2 text-left text-[0.9375rem] font-semibold whitespace-nowrap transition-colors duration-300 sm:flex-row sm:items-baseline sm:gap-2",
                on ? "text-bg" : "text-fg-2 hover:text-fg",
              )}
            >
              {on && (
                <m.span
                  layoutId="version-pill"
                  className="absolute inset-0 rounded-[10px] bg-fg"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative">{label}</span>
              <span
                className={clsx("relative font-mono text-[0.8125rem] font-normal", on ? "text-bg/75" : "text-fg-3")}
              >
                {formatDuration(minutes)}
              </span>
            </button>
          );
        })}
      </div>
      <AnimatePresence initial={false}>
        {version === "facile" && (
          <m.p
            key="note"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="mt-5 max-w-2xl rounded-[var(--radius-card)] bg-tint px-5 py-4 text-[1.0625rem] leading-relaxed text-fg"
          >
            <span className="font-semibold">On achète&#8239;: {easy.shortcut}.</span> {fr(easy.note)}
          </m.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/** « Version facile » shortcut for the top of the page: switches and scrolls to the recipe. */
export function EasyVersionLink({ minutes }: { minutes: number }) {
  return (
    <button
      type="button"
      onClick={() => {
        window.dispatchEvent(new CustomEvent<Version>(VERSION_EVENT, { detail: "facile" }));
        document.getElementById("recette")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className="btn btn-ghost h-11 px-4 text-[0.9375rem]"
    >
      Version facile <span className="font-mono text-[0.8125rem] text-fg-3">{formatDuration(minutes)}</span>
    </button>
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
      `${title} (${servingsText.toLowerCase()})`,
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

  // Measure the ingredients panel so its sticky offset can adapt to its height.
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => el.style.setProperty("--panel-h", `${el.offsetHeight}px`));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const minServings = 1;
  const maxServings = Math.max(12, baseServings * 3);

  return (
    <>
      <div className="container-page grid gap-x-20 gap-y-16 lg:grid-cols-12">
        {/* ---------------------------------------------------------------- */}
        {/* Ingredients, set like a bistro menu                              */}
        {/* ---------------------------------------------------------------- */}
        <aside className="lg:col-span-5 xl:col-span-4" aria-labelledby="ingredients-title">
          {/*
            Sticky, but never taller than the screen can show: if the list is
            long, it scrolls with the page until its end is visible, then sticks.
          */}
          <div
            ref={panelRef}
            className="lg:sticky lg:top-[min(calc(var(--header-h)+1.5rem),calc(100svh-var(--panel-h,0px)-1.5rem))]"
          >
            <h2 id="ingredients-title" className="text-headline">
              Ingrédients
            </h2>
            <div
              className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[1.0625rem]"
              role="group"
              aria-label="Nombre de portions"
            >
              <span className="text-fg-2">Pour</span>
              <span className="inline-flex items-center rounded-[12px] border-[1.5px] border-fg" data-print="hide">
                <button
                  type="button"
                  onClick={() => setServings((s) => Math.max(minServings, s - 1))}
                  disabled={servings <= minServings}
                  className="grid size-10 place-items-center transition-opacity active:scale-90 disabled:opacity-30"
                  aria-label="Retirer une portion"
                >
                  <Minus size={16} strokeWidth={2.2} />
                </button>
                <output aria-live="polite" className="min-w-[2.5rem] border-x-[1.5px] border-fg text-center">
                  <RollingNumber value={servings} className="font-display text-[1.5rem] leading-[2.5rem] font-[500]" />
                </output>
                <button
                  type="button"
                  onClick={() => setServings((s) => Math.min(maxServings, s + 1))}
                  disabled={servings >= maxServings}
                  className="grid size-10 place-items-center transition-opacity active:scale-90 disabled:opacity-30"
                  aria-label="Ajouter une portion"
                >
                  <Plus size={16} strokeWidth={2.2} />
                </button>
              </span>
              <span className="hidden font-semibold print:inline">{servings}</span>
              <span className="text-fg-2">{plural(servings, servingsLabel)}</span>
            </div>

            {servings !== baseServings && (
              <p className="mt-3 -rotate-1 hand text-[1.35rem] text-ink">
                quantités recalculées (la recette d’origine est pour {baseServings}){" · "}
                <button
                  type="button"
                  onClick={() => setServings(baseServings)}
                  className="underline underline-offset-4"
                >
                  revenir à {baseServings}
                </button>
              </p>
            )}

            <div className="mt-8 space-y-8">
              {ingredients.map((group, gi) => (
                <div key={gi}>
                  {group.title && <h3 className="mb-1 text-eyebrow text-ink">{group.title}</h3>}
                  <ul>
                    {group.items.map((ing, ii) => {
                      const id = `${gi}-${ii}`;
                      const isChecked = checked.has(id);
                      const q = scaleQty(ing, factor);
                      const d = q !== undefined ? displayQty(ing, q) : null;
                      return (
                        <li key={id}>
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked={isChecked}
                            onClick={() => updateChecked((s) => (s.has(id) ? s.delete(id) : s.add(id)))}
                            className="group block w-full py-2.5 text-left"
                          >
                            <span className="relative flex items-baseline">
                              <span
                                className={clsx(
                                  "text-[1.0625rem] leading-snug transition-colors duration-300",
                                  isChecked ? "text-fg-3" : "text-fg",
                                )}
                              >
                                <span className="first-letter:uppercase">{ingredientName(ing, q)}</span>
                                {ing.optional && <span className="text-fg-3"> (facultatif)</span>}
                              </span>
                              <span className="leader" />
                              <span
                                className={clsx(
                                  "shrink-0 font-display text-[1.1875rem] font-[500] whitespace-nowrap tabular transition-colors duration-300",
                                  isChecked ? "text-fg-3" : "text-fg",
                                )}
                              >
                                {d ? (
                                  <>
                                    <AnimatedQty value={d.num} />
                                    {d.unit && ` ${d.unit}`}
                                  </>
                                ) : (
                                  <span className="hand text-[1.25rem]">au goût</span>
                                )}
                              </span>
                              {/* Hand-drawn strike-through when checked */}
                              <svg
                                aria-hidden
                                viewBox="0 0 300 12"
                                preserveAspectRatio="none"
                                className="pointer-events-none absolute top-1/2 left-0 h-3 w-full -translate-y-1/2 text-accent"
                              >
                                <m.path
                                  d="M2 7 C 70 3, 150 10, 220 5 S 290 6, 298 6"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.2"
                                  strokeLinecap="round"
                                  vectorEffect="non-scaling-stroke"
                                  initial={false}
                                  animate={{ pathLength: isChecked ? 1 : 0, opacity: isChecked ? 1 : 0 }}
                                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                />
                              </svg>
                            </span>
                            {ing.note && (
                              <span
                                className={clsx(
                                  "mt-0.5 block text-[0.9375rem]",
                                  isChecked ? "text-fg-3/70" : "text-fg-3",
                                )}
                              >
                                {fr(ing.note)}
                              </span>
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[0.9375rem] text-fg-3" data-print="hide">
              Touchez une ligne pour la barrer pendant les courses ou la mise en place.
            </p>

            <div className="mt-5 flex flex-wrap gap-2" data-print="hide">
              <button type="button" onClick={copyList} className="btn btn-ghost h-10 px-4 text-[0.9375rem]">
                {copied ? <Check size={17} /> : <Copy size={17} />}
                {copied ? "C’est copié" : "Copier la liste de courses"}
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
                  <Reset size={17} /> Tout remettre à zéro
                </button>
              )}
            </div>

            {equipment.length > 0 && (
              <div className="mt-10">
                <h3 className="text-eyebrow text-fg-3">Ustensiles</h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-fg-2">{capitalize(equipment.join(", "))}.</p>
              </div>
            )}

            <button
              type="button"
              onClick={() => openCooking(0)}
              className="btn btn-primary mt-10 hidden w-full lg:inline-flex"
              data-print="hide"
            >
              <ChefHat size={20} /> Passer en mode cuisine
            </button>
          </div>
        </aside>

        {/* ---------------------------------------------------------------- */}
        {/* Method                                                           */}
        {/* ---------------------------------------------------------------- */}
        <section className="lg:col-span-7 xl:col-span-8" aria-labelledby="method-title">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="method-title" className="text-headline">
              La recette
            </h2>
            <p className="font-mono text-[0.8125rem] text-fg-3">
              {flatSteps.length} étapes
              {done.size > 0 ? ` · ${done.size} faite${done.size > 1 ? "s" : ""}` : ""}
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
        className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 flex items-center gap-2 rounded-[16px] bg-charcoal p-1.5 shadow-[4px_4px_0_var(--accent)] ring-1 ring-white/10 lg:hidden"
      >
        <a
          href="#ingredients-title"
          className="grid h-12 flex-1 place-items-center rounded-[11px] text-[0.9375rem] font-semibold text-paper/85"
        >
          Ingrédients
        </a>
        <button
          type="button"
          onClick={() => openCooking(0)}
          className="inline-flex h-12 flex-[1.4] items-center justify-center gap-2 rounded-[11px] bg-paper text-[0.9375rem] font-semibold text-charcoal"
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
  const StepHeading = method.length > 1 ? "h4" : "h3";
  // Global step number = steps in previous sections + index within section.
  const offsets = method.map((_, i) => method.slice(0, i).reduce((sum, sec) => sum + sec.steps.length, 0));

  return (
    <div className="mt-10">
      {method.map((section, si) => (
        <div key={section.title}>
          {method.length > 1 && (
            <h3 className="mb-2 flex items-center gap-4 pt-4">
              <span className="text-eyebrow text-ink">{section.title}</span>
              <span className="h-px flex-1 bg-line-strong" />
            </h3>
          )}
          <ol className="pb-6">
            {section.steps.map((step, idx) => {
              const num = offsets[si] + idx + 1;
              const id = `step-${num}`;
              const isDone = done.has(id);
              return (
                <li
                  key={id}
                  id={`etape-${num}`}
                  className="group/step grid grid-cols-[3.25rem_1fr] gap-3 border-b border-line py-8 md:grid-cols-[5rem_1fr] md:gap-6"
                >
                  <button
                    type="button"
                    onClick={() => onToggle(id)}
                    aria-pressed={isDone}
                    aria-label={`${num}. marquer l’étape ${num} comme ${isDone ? "à faire" : "faite"}`}
                    className="relative self-start text-left"
                  >
                    <span
                      className={clsx(
                        "block serif-accent text-[clamp(2.5rem,4.5vw,3.75rem)] leading-[0.85] transition-colors duration-300",
                        isDone ? "text-fg-3" : "text-ink",
                      )}
                    >
                      {num}.
                    </span>
                    {/* Hand-drawn circle when done */}
                    <svg
                      aria-hidden
                      viewBox="0 0 100 100"
                      className="pointer-events-none absolute -inset-3 size-[calc(100%+1.5rem)] text-accent"
                    >
                      <m.path
                        d="M52 6 C 22 4, 6 26, 8 52 C 10 80, 34 96, 58 92 C 84 88, 96 66, 92 42 C 88 18, 66 6, 40 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={false}
                        animate={{ pathLength: isDone ? 1 : 0, opacity: isDone ? 1 : 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </svg>
                  </button>
                  <div className={clsx("min-w-0 transition-opacity duration-500", isDone && "opacity-50")}>
                    <StepHeading className="text-[1.25rem] leading-tight font-semibold tracking-[-0.01em]">
                      {step.title}
                    </StepHeading>
                    <p className="mt-2 text-body text-fg-2">{fr(step.text)}</p>
                    {step.tip && (
                      <p className="mt-4 border-l-2 border-accent pl-4 text-[1rem] leading-relaxed text-fg-2">
                        <span className="mr-1.5 hand text-[1.35rem] text-ink">psst.</span>
                        {fr(step.tip)}
                      </p>
                    )}
                    <div className="mt-5 flex flex-wrap items-center gap-2" data-print="hide">
                      {step.timer && (
                        <TimerButton id={`${slug}-step-${num}`} label={step.timer.label} minutes={step.timer.minutes} />
                      )}
                      <button
                        type="button"
                        onClick={() => onCookFrom(num)}
                        className="h-10 px-2 text-[0.875rem] text-fg-3 underline decoration-line-strong underline-offset-4 transition-[color,opacity] duration-300 hover:text-fg focus-visible:opacity-100 lg:opacity-0 lg:group-hover/step:opacity-100"
                      >
                        Reprendre ici en mode cuisine
                      </button>
                    </div>
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
