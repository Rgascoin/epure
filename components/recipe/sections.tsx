import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import type { Recipe } from "@/lib/types";
import { durationParts, formatDateFr, formatDuration, fr, isoDuration } from "@/lib/format";
import { ArrowRight, Check, ChevronDown, Glass, Leaf, Snowflake, Sparkle, Warning } from "../icons";

/* -------------------------------------------------------------------------- */
/*  Key facts                                                                  */
/* -------------------------------------------------------------------------- */

export function KeyFacts({ recipe }: { recipe: Recipe }) {
  const facts: Array<{ label: string; value: string; unit?: string; dateTime?: string }> = [
    { label: "Préparation", ...durationParts(recipe.times.prep), dateTime: isoDuration(recipe.times.prep) },
    { label: "Cuisson", ...durationParts(recipe.times.cook), dateTime: isoDuration(recipe.times.cook) },
    ...(recipe.times.rest
      ? [{ label: "Repos", ...durationParts(recipe.times.rest), dateTime: isoDuration(recipe.times.rest) }]
      : []),
    { label: "Total", ...durationParts(recipe.totalMinutes), dateTime: isoDuration(recipe.totalMinutes) },
    { label: "Difficulté", value: recipe.difficulty },
    { label: "Budget", value: recipe.cost },
  ];
  return (
    <dl className="flex flex-wrap gap-px overflow-hidden rounded-[var(--radius-card)] bg-line ring-1 ring-line">
      {facts.map((f) => (
        <div key={f.label} className="grow basis-[9.5rem] bg-elevated px-5 py-5 md:basis-[11rem] md:px-6 md:py-6">
          <dt className="text-eyebrow text-fg-3">{f.label}</dt>
          <dd
            className={`mt-1.5 leading-none font-semibold tracking-[-0.04em] tabular ${f.dateTime ? "text-[clamp(1.6rem,2.6vw,2.1rem)]" : "pt-1 text-[clamp(1.25rem,1.8vw,1.5rem)] tracking-[-0.025em]"}`}
          >
            {f.dateTime ? (
              <time dateTime={f.dateTime}>
                {f.value}
                {f.unit && <span className="ml-1 text-[0.55em] font-medium tracking-normal text-fg-2">{f.unit}</span>}
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
/*  "L’essentiel" — answer-first summary (also the speakable section)          */
/* -------------------------------------------------------------------------- */

export function Essentials({ recipe }: { recipe: Recipe }) {
  return (
    <section
      id="essentiel"
      aria-labelledby="essentiel-title"
      className="relative overflow-hidden rounded-[var(--radius-card)] bg-tint p-7 md:p-10"
    >
      <div aria-hidden className="absolute top-0 left-0 h-full w-1.5 bg-accent" />
      <h2 id="essentiel-title" className="flex items-center gap-2 text-eyebrow text-ink">
        <Sparkle size={16} /> L’essentiel
      </h2>
      <p className="mt-3 text-[clamp(1.1875rem,1.8vw,1.4375rem)] leading-[1.45] font-medium tracking-[-0.015em] text-fg">
        {fr(recipe.summary)}
      </p>
      <a href="#recette" className="link-arrow mt-5 text-[0.9375rem]" data-print="hide">
        Aller à la recette <ArrowRight size={16} />
      </a>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Intro                                                                      */
/* -------------------------------------------------------------------------- */

export function Intro({ recipe }: { recipe: Recipe }) {
  const [first, ...rest] = recipe.intro;
  return (
    <div className="prose-recipe mx-auto max-w-[44rem]">
      <p className="text-lede text-fg">{fr(first)}</p>
      {rest.map((p, i) => (
        <p key={i} className="mt-5 text-body text-[1.1875rem] leading-[1.65] text-fg-2">
          {fr(p)}
        </p>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Science                                                                    */
/* -------------------------------------------------------------------------- */

export function Science({ recipe }: { recipe: Recipe }) {
  return (
    <section
      aria-labelledby="science-title"
      className="grain relative overflow-hidden py-[clamp(5rem,14vh,9rem)] text-white"
      style={{ background: recipe.theme.deep }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(50%_70%_at_85%_0%,black,transparent)] opacity-[0.22]"
        style={{ background: recipe.theme.accent }}
      />
      <div className="relative container-page">
        <p className="text-eyebrow text-white/50">Pourquoi ça marche</p>
        <h2 id="science-title" className="mt-3 max-w-3xl text-headline">
          La science, <span className="serif-accent font-normal text-accent-bright">sans jargon</span>.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
          {recipe.science.map((s, i) => (
            <article
              key={s.title}
              className="reveal-on-scroll rounded-[var(--radius-card)] bg-white/[0.06] p-7 ring-1 ring-white/10 backdrop-blur-sm md:p-8"
            >
              <p className="text-[0.8125rem] font-semibold text-white/40 tabular">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-[1.375rem] leading-tight font-semibold tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-3 text-[1rem] leading-relaxed text-white/70">{fr(s.text)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tips & mistakes                                                            */
/* -------------------------------------------------------------------------- */

export function TipsAndMistakes({ recipe }: { recipe: Recipe }) {
  return (
    <div className="container-page grid gap-4 md:grid-cols-2 md:gap-5">
      <section
        aria-labelledby="tips-title"
        className="rounded-[var(--radius-card)] bg-elevated p-7 ring-1 ring-line md:p-10"
      >
        <h2 id="tips-title" className="text-title">
          Les secrets
        </h2>
        <ul className="mt-6 space-y-4">
          {recipe.tips.map((t) => (
            <li key={t} className="flex gap-3.5 text-[1.0625rem] leading-relaxed text-fg-2">
              <span className="mt-1 grid size-[22px] shrink-0 place-items-center rounded-full bg-accent text-on-accent">
                <Check size={13} strokeWidth={3} />
              </span>
              <span>{fr(t)}</span>
            </li>
          ))}
        </ul>
      </section>
      <section
        aria-labelledby="mistakes-title"
        className="rounded-[var(--radius-card)] bg-elevated p-7 ring-1 ring-line md:p-10"
      >
        <h2 id="mistakes-title" className="text-title">
          Les erreurs à éviter
        </h2>
        <ul className="mt-6 space-y-4">
          {recipe.mistakes.map((t) => (
            <li key={t} className="flex gap-3.5 text-[1.0625rem] leading-relaxed text-fg-2">
              <span className="mt-1 grid size-[22px] shrink-0 place-items-center rounded-full bg-fill-strong text-fg">
                <Warning size={13} strokeWidth={2.4} />
              </span>
              <span>{fr(t)}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Variations + practical info                                                */
/* -------------------------------------------------------------------------- */

export function Variations({ recipe }: { recipe: Recipe }) {
  return (
    <section aria-labelledby="variations-title" className="container-page">
      <h2 id="variations-title" className="text-headline">
        Variations.
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
        {recipe.variations.map((v, i) => (
          <article key={v.title} className="reveal-on-scroll rounded-[var(--radius-card)] bg-fill p-7 md:p-8">
            <p className="text-[0.8125rem] font-semibold text-ink tabular">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 text-[1.3125rem] font-semibold tracking-[-0.02em]">{v.title}</h3>
            <p className="mt-2 text-[1rem] leading-relaxed text-fg-2">{fr(v.text)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PracticalInfo({ recipe }: { recipe: Recipe }) {
  const items = [
    { icon: Snowflake, title: "Conservation", text: recipe.storage },
    ...(recipe.pairing ? [{ icon: Glass, title: "Accord", text: recipe.pairing }] : []),
    { icon: Leaf, title: "Saison", text: recipe.season.join(", ") },
  ];
  return (
    <section aria-label="Informations pratiques" className="container-page grid gap-4 md:grid-cols-3 md:gap-5">
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title} className="rounded-[var(--radius-card)] bg-elevated p-7 ring-1 ring-line">
          <Icon size={22} className="text-ink" />
          <h2 className="mt-4 text-[1.125rem] font-semibold tracking-[-0.015em]">{title}</h2>
          <p className="mt-2 text-[0.9875rem] leading-relaxed text-fg-2">{fr(text)}</p>
        </div>
      ))}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Nutrition — per serving, against EU reference intakes                      */
/* -------------------------------------------------------------------------- */

const RI = { calories: 2000, fat: 70, saturatedFat: 20, carbs: 260, sugar: 90, protein: 50, salt: 6 } as const;

export function Nutrition({ recipe }: { recipe: Recipe }) {
  const n = recipe.nutrition;
  const salt = Math.round((n.sodium * 2.5) / 100) / 10;
  const rows: Array<{ label: string; value: string; pct?: number }> = [
    { label: "Lipides", value: `${n.fat} g`, pct: n.fat / RI.fat },
    { label: "dont saturés", value: `${n.saturatedFat} g`, pct: n.saturatedFat / RI.saturatedFat },
    { label: "Glucides", value: `${n.carbs} g`, pct: n.carbs / RI.carbs },
    { label: "dont sucres", value: `${n.sugar} g`, pct: n.sugar / RI.sugar },
    { label: "Fibres", value: `${n.fiber} g` },
    { label: "Protéines", value: `${n.protein} g`, pct: n.protein / RI.protein },
    { label: "Sel", value: `${salt.toLocaleString("fr-FR")} g`, pct: salt / RI.salt },
  ];
  return (
    <section aria-labelledby="nutrition-title" className="container-page">
      <div className="grid gap-10 rounded-[var(--radius-card)] bg-elevated p-7 ring-1 ring-line md:grid-cols-12 md:p-10">
        <div className="md:col-span-4">
          <h2 id="nutrition-title" className="text-title">
            Valeurs nutritionnelles
          </h2>
          <p className="mt-2 text-[0.9375rem] text-fg-3">Par {recipe.servingsLabel.one}, estimations.</p>
          <p className="mt-8 text-[clamp(3.5rem,6vw,5rem)] leading-none font-semibold tracking-[-0.05em] tabular">
            {n.calories}
            <span className="ml-2 text-[0.3em] font-medium tracking-normal text-fg-2">kcal</span>
          </p>
          <p className="mt-2 text-[0.875rem] text-fg-3">
            {Math.round((n.calories / RI.calories) * 100)}&nbsp;% de l’apport de référence (2&nbsp;000&nbsp;kcal)
          </p>
        </div>
        <dl className="divide-y divide-line md:col-span-8">
          {rows.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 py-3 sm:grid-cols-[9rem_1fr_6.5rem]"
            >
              <dt className={r.label.startsWith("dont") ? "pl-4 text-fg-3" : "font-medium"}>{r.label}</dt>
              <dd className="order-3 col-span-2 sm:order-none sm:col-span-1">
                {r.pct !== undefined && (
                  <span className="block h-1.5 overflow-hidden rounded-full bg-fill">
                    <span
                      className="block h-full rounded-full bg-accent"
                      style={{ width: `${Math.min(100, r.pct * 100)}%` }}
                    />
                  </span>
                )}
              </dd>
              <dd className="text-right font-semibold whitespace-nowrap tabular">
                {r.value}
                {r.pct !== undefined && (
                  <span className="ml-2 hidden text-[0.8125rem] font-normal text-fg-3 lg:inline">
                    {Math.round(r.pct * 100)}&nbsp;%
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
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
        <h2 id="faq-title" className="text-headline">
          Vos questions.
        </h2>
        <p className="mt-4 text-fg-2">Les réponses aux questions qu’on se pose vraiment, devant les fourneaux.</p>
      </div>
      <div className="divide-y divide-line border-y border-line md:col-span-8">
        {recipe.faq.map((f, i) => (
          <details key={f.q} className="faq group" open={i === 0}>
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-[1.1875rem] font-semibold tracking-[-0.015em] transition-colors hover:text-ink">
              <h3>{f.q}</h3>
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-fill transition-transform duration-500 ease-[var(--ease-out)] group-open:rotate-180">
                <ChevronDown size={18} />
              </span>
            </summary>
            <p className="pr-12 pb-6 text-[1.0625rem] leading-relaxed text-fg-2">{fr(f.a)}</p>
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
        className="group relative block overflow-hidden rounded-[var(--radius-card)]"
      >
        <ViewTransition name={`photo-${next.slug}`} share="morph" default="none">
          <div className="relative aspect-[4/5] sm:aspect-[21/9]">
            <Image
              src={next.hero}
              alt={next.images.heroAlt}
              fill
              quality={80}
              placeholder="blur"
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-out)] group-hover:scale-[1.04]"
              style={{ objectPosition: next.theme.focus }}
            />
          </div>
        </ViewTransition>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-7 text-white md:p-12">
          <div>
            <p className="text-eyebrow text-white/70">Recette suivante</p>
            <p className="mt-2 text-[clamp(2rem,5vw,4.25rem)] leading-[0.98] font-semibold tracking-[-0.045em]">
              {next.title}
            </p>
            <p className="mt-2 serif-accent text-[clamp(1.2rem,2vw,1.6rem)] text-white/85">{next.tagline}</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[0.9375rem] font-semibold text-black transition-transform duration-500 group-hover:translate-x-1">
            {formatDuration(next.totalMinutes)} <ArrowRight size={18} />
          </span>
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
    <div className="container-page flex flex-col gap-2 text-[0.8125rem] text-fg-3 md:flex-row md:justify-between">
      <p>
        Par{" "}
        <Link href="/a-propos" className="text-fg-2 underline underline-offset-2">
          la rédaction d’Épure
        </Link>{" "}
        · Publiée le <time dateTime={recipe.datePublished}>{formatDateFr(recipe.datePublished)}</time> · Mise à jour le{" "}
        <time dateTime={recipe.dateModified}>{formatDateFr(recipe.dateModified)}</time>
      </p>
      <p>
        Photos :{" "}
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
        / Pexels
      </p>
    </div>
  );
}
