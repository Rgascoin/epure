import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import type { Recipe } from "@/lib/types";
import { durationParts, formatDateFr, formatDuration, fr, isoDuration } from "@/lib/format";
import { ArrowRight, Check, Plus, Warning } from "../icons";

/* -------------------------------------------------------------------------- */
/*  Key facts — an editorial table                                             */
/* -------------------------------------------------------------------------- */

export function KeyFacts({ recipe }: { recipe: Recipe }) {
  const facts: Array<{ label: string; value: string; unit?: string; dateTime?: string }> = [
    { label: "Préparation", ...durationParts(recipe.times.prep), dateTime: isoDuration(recipe.times.prep) },
    { label: "Cuisson", ...durationParts(recipe.times.cook), dateTime: isoDuration(recipe.times.cook) },
    ...(recipe.times.rest
      ? [{ label: "Repos", ...durationParts(recipe.times.rest), dateTime: isoDuration(recipe.times.rest) }]
      : []),
    { label: "En tout", ...durationParts(recipe.totalMinutes), dateTime: isoDuration(recipe.totalMinutes) },
    { label: "Niveau", value: recipe.difficulty },
    { label: "Budget", value: recipe.cost },
  ];
  return (
    <dl className="flex flex-wrap border-y-2 border-fg">
      {facts.map((f, i) => (
        <div
          key={f.label}
          className={`grow basis-[9rem] px-1 py-5 md:basis-[10rem] md:px-5 md:py-6 ${i ? "md:border-l-2 md:border-dotted md:border-line-strong" : "md:pl-0"}`}
        >
          <dt className="text-eyebrow text-fg-3">{f.label}</dt>
          <dd className="mt-2 font-display text-[clamp(1.6rem,2.5vw,2.25rem)] leading-none [font-weight:calc(420+var(--dw))] tabular [font-variation-settings:'SOFT'_60]">
            {f.dateTime ? (
              <time dateTime={f.dateTime}>
                {f.value}
                {f.unit && <span className="ml-1 font-sans text-[0.5em] font-medium text-fg-2">{f.unit}</span>}
              </time>
            ) : (
              f.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* -------------------------------------------------------------------------- */
/*  "En bref" — answer-first summary on a taped note (also the speakable part) */
/* -------------------------------------------------------------------------- */

export function Essentials({ recipe }: { recipe: Recipe }) {
  return (
    <section
      id="en-bref"
      aria-labelledby="en-bref-title"
      className="relative rotate-[-0.6deg] rounded-[4px] bg-tint px-6 pt-8 pb-6 shadow-[var(--shadow-card)] md:px-8"
    >
      <span
        aria-hidden
        className="absolute -top-3 left-8 h-6 w-24 rotate-[-3deg] bg-[#e8dcc4]/85 shadow-sm dark:bg-[#4a4034]/85"
      />
      <h2 id="en-bref-title" className="hand text-[1.75rem] text-ink">
        En bref
      </h2>
      <p className="mt-2 text-[1.0625rem] leading-[1.6] text-fg">{fr(recipe.summary)}</p>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Intro                                                                      */
/* -------------------------------------------------------------------------- */

export function Intro({ recipe }: { recipe: Recipe }) {
  const [first, ...rest] = recipe.intro;
  return (
    <section aria-label="Avant de commencer" className="container-page grid gap-8 md:grid-cols-12">
      <p className="text-eyebrow text-fg-3 md:col-span-3 md:pt-2">Avant de commencer</p>
      <div className="prose-recipe max-w-[42rem] md:col-span-8">
        <p className="dropcap font-display text-[clamp(1.3rem,2vw,1.6rem)] leading-[1.5] [font-weight:calc(380+var(--dw))] [font-variation-settings:'SOFT'_80]">
          {fr(first)}
        </p>
        {rest.map((p, i) => (
          <p key={i} className="mt-5 text-[1.125rem] leading-[1.7] text-fg-2">
            {fr(p)}
          </p>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Science                                                                    */
/* -------------------------------------------------------------------------- */

export function Science({ recipe }: { recipe: Recipe }) {
  return (
    <section
      aria-labelledby="science-title"
      data-print="plain"
      className="grain relative overflow-hidden py-[clamp(5rem,14vh,9rem)] text-paper"
      style={{ backgroundColor: recipe.theme.deep }}
    >
      <div className="relative container-page">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <p className="text-eyebrow text-paper/60 md:col-span-3">Pourquoi ça marche</p>
          <h2 id="science-title" className="text-headline md:col-span-9">
            Ce qui se passe <span className="serif-accent text-accent-bright">vraiment</span>.
          </h2>
        </div>
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {recipe.science.map((s, i) => (
            <li key={s.title} className="reveal-on-scroll border-t border-paper/20 pt-6">
              <span className="serif-accent text-[3.5rem] leading-none text-accent-bright">{i + 1}.</span>
              <h3 className="mt-4 text-[1.3125rem] leading-tight font-semibold">{s.title}</h3>
              <p className="mt-3 text-[1rem] leading-relaxed text-paper/75">{fr(s.text)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tips & mistakes                                                            */
/* -------------------------------------------------------------------------- */

export function TipsAndMistakes({ recipe }: { recipe: Recipe }) {
  return (
    <div className="space-y-12">
      <section aria-labelledby="tips-title">
        <h2 id="tips-title" className="text-title">
          Ce qui aide
        </h2>
        <ul className="mt-5 divide-y divide-line border-y border-line">
          {recipe.tips.map((t) => (
            <li key={t} className="flex gap-4 py-4 text-[1.0625rem] leading-relaxed text-fg-2">
              <Check size={20} strokeWidth={2.4} className="mt-1 shrink-0 text-ink" />
              <span>{fr(t)}</span>
            </li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="mistakes-title">
        <h2 id="mistakes-title" className="text-title">
          Ce qui fait rater
        </h2>
        <ul className="mt-5 divide-y divide-line border-y border-line">
          {recipe.mistakes.map((t) => (
            <li key={t} className="flex gap-4 py-4 text-[1.0625rem] leading-relaxed text-fg-2">
              <Warning size={19} strokeWidth={2} className="mt-1 shrink-0 text-fg-3" />
              <span>{fr(t)}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Variations — French "fiches bristol"                                       */
/* -------------------------------------------------------------------------- */

export function Variations({ recipe }: { recipe: Recipe }) {
  return (
    <section aria-labelledby="variations-title" className="container-page">
      <p className="text-eyebrow text-fg-3">Variantes</p>
      <h2 id="variations-title" className="mt-3 text-headline">
        Si vous voulez changer un peu.
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-7">
        {recipe.variations.map((v, i) => (
          <article
            key={v.title}
            className="bristol reveal-on-scroll rounded-[3px] px-6 pt-4 pb-7 shadow-[var(--shadow-card)]"
            style={{ rotate: `${[-1.2, 0.8, -0.4][i % 3]}deg` }}
          >
            <h3 className="flex h-[2.4rem] items-center justify-between font-display text-[1.375rem] [font-weight:calc(460+var(--dw))]">
              {v.title}
              <span className="font-mono text-[0.8125rem] text-[#6b6155]">0{i + 1}</span>
            </h3>
            <p className="mt-[0.85rem] text-[0.9875rem] leading-[1.75rem] text-[#3c352d]">{fr(v.text)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Practical info + nutrition label                                           */
/* -------------------------------------------------------------------------- */

const RI = { calories: 2000, fat: 70, saturatedFat: 20, carbs: 260, sugar: 90, protein: 50, salt: 6 } as const;

export function Pantry({ recipe }: { recipe: Recipe }) {
  const n = recipe.nutrition;
  const salt = Math.round((n.sodium * 2.5) / 100) / 10;
  const rows: Array<{ label: string; value: string; pct?: number; sub?: boolean }> = [
    { label: "Matières grasses", value: `${n.fat} g`, pct: n.fat / RI.fat },
    {
      label: "dont acides gras saturés",
      value: `${n.saturatedFat} g`,
      pct: n.saturatedFat / RI.saturatedFat,
      sub: true,
    },
    { label: "Glucides", value: `${n.carbs} g`, pct: n.carbs / RI.carbs },
    { label: "dont sucres", value: `${n.sugar} g`, pct: n.sugar / RI.sugar, sub: true },
    { label: "Fibres", value: `${n.fiber} g` },
    { label: "Protéines", value: `${n.protein} g`, pct: n.protein / RI.protein },
    { label: "Sel", value: `${salt.toLocaleString("fr-FR")} g`, pct: salt / RI.salt },
  ];
  const info = [
    { title: "Conservation", text: recipe.storage },
    ...(recipe.pairing ? [{ title: "À boire avec", text: recipe.pairing }] : []),
    { title: "Saison", text: recipe.season.join(", ") },
  ];

  return (
    <section aria-label="Informations pratiques" className="container-page grid gap-12 md:grid-cols-12">
      <div className="space-y-5 md:col-span-7">
        {info.map((it) => (
          <div key={it.title} className="rounded-[14px] border-[1.5px] border-dashed border-line-strong p-6">
            <h2 className="text-eyebrow text-ink">{it.title}</h2>
            <p className="mt-2 text-[1.0625rem] leading-relaxed text-fg-2">{fr(it.text)}</p>
          </div>
        ))}
      </div>

      <section aria-labelledby="nutrition-title" className="md:col-span-5">
        <div className="border-[2.5px] border-fg bg-elevated p-5 font-sans">
          <h2 id="nutrition-title" className="text-[1.6rem] leading-none font-bold tracking-[-0.02em]">
            Valeurs nutritionnelles
          </h2>
          <p className="mt-1.5 text-[0.875rem] text-fg-2">
            Pour 1 {recipe.servingsLabel.one}, estimation calculée sur les ingrédients
          </p>
          <div className="mt-3 flex items-baseline justify-between border-y-[6px] border-fg py-2">
            <span className="text-[1.0625rem] font-bold">Énergie</span>
            <span className="text-[1.75rem] font-bold tabular">{n.calories} kcal</span>
          </div>
          <p className="border-b border-fg py-1 text-right text-[0.75rem] font-semibold">% des apports de référence</p>
          <dl>
            {rows.map((r) => (
              <div
                key={r.label}
                className="flex items-baseline justify-between gap-4 border-b border-fg/40 py-1.5 text-[0.9375rem]"
              >
                <dt className={r.sub ? "pl-4 text-fg-2" : "font-semibold"}>
                  {r.label} <span className="font-normal tabular">{r.value}</span>
                </dt>
                <dd className="font-semibold tabular">{r.pct !== undefined ? `${Math.round(r.pct * 100)} %` : ""}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-2 text-[0.8125rem] leading-snug text-fg-2">
            Apport de référence d’un adulte type&#8239;: 8&#8239;400&nbsp;kJ / 2&#8239;000&nbsp;kcal.
          </p>
        </div>
      </section>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQ — native <details>, fully crawlable                                    */
/* -------------------------------------------------------------------------- */

export function Faq({ recipe }: { recipe: Recipe }) {
  return (
    <section aria-labelledby="faq-title" className="container-page grid gap-10 md:grid-cols-12">
      <div className="md:col-span-4">
        <p className="text-eyebrow text-fg-3">Questions fréquentes</p>
        <h2 id="faq-title" className="mt-3 text-headline">
          Les doutes classiques.
        </h2>
      </div>
      <div className="border-t-2 border-fg md:col-span-8">
        {recipe.faq.map((f, i) => (
          <details key={f.q} className="faq group border-b border-line-strong" open={i === 0}>
            <summary className="flex cursor-pointer items-start justify-between gap-6 py-6">
              <h3 className="font-display text-[1.375rem] leading-snug [font-weight:calc(440+var(--dw))] tracking-[-0.01em] transition-colors group-hover:text-ink">
                {f.q}
              </h3>
              <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full border-[1.5px] border-fg transition-transform duration-500 ease-[var(--ease-out)] group-open:rotate-45">
                <Plus size={16} strokeWidth={2.2} />
              </span>
            </summary>
            <p className="max-w-[44rem] pr-12 pb-7 text-[1.0625rem] leading-relaxed text-fg-2">{fr(f.a)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Next recipe                                                                */
/* -------------------------------------------------------------------------- */

export function NextRecipe({ next }: { next: Recipe }) {
  return (
    <section aria-label="Recette suivante" className="container-page" data-print="hide">
      <Link
        href={`/recettes/${next.slug}`}
        transitionTypes={["nav-forward"]}
        className="group grid items-center gap-8 border-y-2 border-fg py-10 md:grid-cols-12 md:py-14"
      >
        <div className="md:col-span-8">
          <p className="text-eyebrow text-fg-3">Page suivante du carnet</p>
          <p className="mt-4 font-display text-[clamp(2.6rem,6.5vw,6rem)] leading-[0.95] [font-weight:calc(400+var(--dw))] tracking-[-0.03em] transition-transform duration-700 ease-[var(--ease-out)] [font-variation-settings:'SOFT'_70] group-hover:translate-x-3">
            {next.title}
          </p>
          <p className="mt-3 serif-accent text-[clamp(1.25rem,2vw,1.6rem)] text-fg-2">{next.tagline}</p>
          <p className="mt-6 inline-flex items-center gap-3 font-mono text-[0.875rem]">
            {formatDuration(next.totalMinutes)}
            <span className="grid size-10 place-items-center rounded-full bg-fg text-bg transition-transform duration-500 group-hover:-rotate-45">
              <ArrowRight size={18} />
            </span>
          </p>
        </div>
        <div className="md:col-span-4">
          <ViewTransition name={`photo-${next.slug}`} share="morph" default="none">
            <div className="relative mx-auto aspect-[4/5] w-2/3 overflow-hidden rounded-[999px_999px_16px_16px] transition-[width] duration-700 ease-[var(--ease-out)] group-hover:w-3/4 md:w-4/5 md:group-hover:w-full">
              <Image
                src={next.hero}
                alt={next.images.heroAlt}
                fill
                quality={75}
                placeholder="blur"
                sizes="(max-width: 768px) 70vw, 400px"
                className="object-cover"
                style={{ objectPosition: next.theme.focus }}
              />
            </div>
          </ViewTransition>
        </div>
      </Link>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Byline / credits                                                           */
/* -------------------------------------------------------------------------- */

export function Byline({ recipe }: { recipe: Recipe }) {
  const { hero, detail } = recipe.images.credits;
  return (
    <div className="container-page flex flex-col gap-2 font-mono text-[0.8125rem] text-fg-3 md:flex-row md:justify-between">
      <p>
        Rédigé par{" "}
        <Link href="/a-propos" className="text-fg-2 underline underline-offset-2">
          la rédaction d’Épure
        </Link>{" "}
        · publié le <time dateTime={recipe.datePublished}>{formatDateFr(recipe.datePublished)}</time> · revu le{" "}
        <time dateTime={recipe.dateModified}>{formatDateFr(recipe.dateModified)}</time>
      </p>
      <p>
        Photos&#8239;:{" "}
        <a href={hero.url} rel="noopener" className="underline underline-offset-2">
          {hero.photographer}
        </a>
        {detail.photographer !== hero.photographer && (
          <>
            ,{" "}
            <a href={detail.url} rel="noopener" className="underline underline-offset-2">
              {detail.photographer}
            </a>
          </>
        )}{" "}
        (Pexels)
      </p>
    </div>
  );
}
