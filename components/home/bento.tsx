import type { ReactNode } from "react";
import clsx from "clsx";
import { ServingsDemo } from "./servings-demo";
import { Check } from "../icons";

/**
 * Feature bento — the "what makes it different" slide of the keynote.
 * Each tile carries a tiny, looping, CSS-driven demo.
 */
export function Bento() {
  return (
    <div className="grid gap-3 md:gap-4 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto]">
      <Tile className="lg:col-span-2" eyebrow="Portions ajustables" title="Pour deux ce soir, pour huit dimanche.">
        <p className="mt-2 max-w-md text-fg-2">
          Chaque quantité se recalcule à la volée, arrondie comme le ferait un cuisinier — pas de « 2,67 œufs ».
        </p>
        <ServingsDemo />
      </Tile>

      <Tile dark eyebrow="La science, expliquée" title="">
        <p className="bg-gradient-to-br from-[#FFD66B] via-[#F0B323] to-[#E0662B] bg-clip-text text-[clamp(4.5rem,9vw,7.5rem)] leading-none font-semibold tracking-[-0.06em] text-transparent tabular">
          65&nbsp;°C
        </p>
        <p className="mt-3 text-[1.0625rem] leading-snug text-white/70">
          Le seuil où le jaune d’œuf épaissit sans tourner. C’est tout le secret d’une carbonara soyeuse — et on vous
          dit pourquoi, à chaque recette.
        </p>
      </Tile>

      <Tile className="lg:row-span-2" eyebrow="Mode cuisine" title="Mains dans la farine, écran allumé.">
        <p className="mt-2 text-fg-2">
          Une étape à la fois, en très grand. Glissez pour avancer, l’écran ne se met jamais en veille.
        </p>
        <PhoneDemo />
      </Tile>

      <Tile eyebrow="Minuteurs intégrés" title="Le temps, au bon endroit.">
        <TimerDemo />
      </Tile>

      <Tile eyebrow="Liste de courses" title="Cochez en faisant les courses.">
        <ChecklistDemo />
      </Tile>

      <Tile className="lg:col-span-2" eyebrow="Sans détour" title="">
        <p className="text-[clamp(1.9rem,3.6vw,3.25rem)] leading-[1.02] font-semibold tracking-[-0.04em]">
          Pas de pop-up. Pas de roman.
          <br />
          <span className="text-fg-3">La recette, tout de suite.</span>
        </p>
        <p className="mt-4 max-w-lg text-fg-2">
          L’essentiel est en haut de chaque page : temps, quantités, gestes. L’histoire et la science viennent après,
          pour qui veut aller plus loin.
        </p>
      </Tile>
    </div>
  );
}

function Tile({
  eyebrow,
  title,
  children,
  className,
  dark,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <article
      className={clsx(
        "reveal-on-scroll relative flex flex-col overflow-hidden rounded-[var(--radius-card)] p-7 md:p-9",
        dark ? "bg-[#0b0b0c] text-white" : "bg-elevated shadow-[var(--shadow-card)] ring-1 ring-line",
        className,
      )}
    >
      <p className={clsx("text-eyebrow", dark ? "text-white/50" : "text-fg-3")}>{eyebrow}</p>
      {title && <h3 className="mt-2 text-title">{title}</h3>}
      <div className="flex flex-1 flex-col">{children}</div>
    </article>
  );
}

function TimerDemo() {
  const r = 52;
  const circ = 2 * Math.PI * r;
  return (
    <div className="loop-anim mt-6 flex flex-1 items-center gap-6">
      <svg viewBox="0 0 120 120" className="size-32 shrink-0 -rotate-90" aria-hidden>
        <circle cx="60" cy="60" r={r} fill="none" stroke="var(--fill-strong)" strokeWidth="8" />
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="#F0B323"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circ}
          style={{
            ["--circ" as string]: `${circ}`,
            animation: "ring-countdown 9s linear infinite",
          }}
        />
      </svg>
      <div>
        <p className="text-[2.5rem] leading-none font-semibold tracking-[-0.04em] tabular">9:00</p>
        <p className="mt-2 text-[0.9375rem] text-fg-2">Cuisson des pâtes</p>
        <p className="mt-1 text-[0.8125rem] text-fg-3">Une alerte douce à la fin.</p>
      </div>
    </div>
  );
}

const LIST = ["400 g de spaghetti", "150 g de guanciale", "4 jaunes d’œufs", "80 g de pecorino romano"];

function ChecklistDemo() {
  return (
    <ul className="loop-anim mt-6 space-y-3">
      {LIST.map((item, i) => (
        <li key={item} className="flex items-center gap-3 text-[1rem]">
          <span className="relative grid size-6 shrink-0 place-items-center rounded-full border-[1.5px] border-line-strong">
            <span
              className="absolute inset-[-1.5px] grid place-items-center rounded-full bg-[#5C8A2E] text-white"
              style={{ animation: `check-in 7s ${i * 0.7}s var(--ease-out) infinite both` }}
            >
              <Check size={14} strokeWidth={3} />
            </span>
          </span>
          <span className="relative">
            {item}
            <span
              className="absolute inset-x-0 top-1/2 h-px origin-left bg-fg-3"
              style={{ animation: `strike 7s ${i * 0.7 + 0.1}s var(--ease-out) infinite both` }}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

function PhoneDemo() {
  return (
    <div className="loop-anim mt-8 flex flex-1 items-end justify-center">
      <div className="relative w-[230px] rounded-[44px] bg-[#1d1d1f] p-[9px] shadow-[var(--shadow-float)]">
        <div className="relative flex h-[440px] flex-col overflow-hidden rounded-[36px] bg-black px-5 pt-12 pb-6 text-white">
          <div className="absolute top-3 left-1/2 h-[22px] w-[76px] -translate-x-1/2 rounded-full bg-[#1d1d1f]" />
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <span key={i} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/20">
                <span
                  className="block h-full origin-left bg-white"
                  style={
                    i < 7
                      ? { transform: "scaleX(1)" }
                      : i === 7
                        ? { animation: "segment-fill 6s linear infinite" }
                        : { transform: "scaleX(0)" }
                  }
                />
              </span>
            ))}
          </div>
          <p className="mt-6 text-[0.75rem] font-semibold text-[#F0B323]">Étape 8 sur 9</p>
          <p className="mt-2 text-[1.5rem] leading-[1.12] font-semibold tracking-[-0.03em]">
            Hors du feu, versez la crème d’œufs et mélangez vivement.
          </p>
          <div className="mt-auto flex items-center justify-between">
            <span className="grid size-11 place-items-center rounded-full bg-white/10 text-white/70">‹</span>
            <span className="rounded-full bg-[#F0B323] px-4 py-2.5 text-[0.8125rem] font-semibold text-black">
              Minuteur · 0:30
            </span>
            <span className="grid size-11 place-items-center rounded-full bg-white text-black">›</span>
          </div>
        </div>
      </div>
    </div>
  );
}
