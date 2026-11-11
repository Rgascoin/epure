"use client";

import { AnimatePresence, useInView } from "motion/react";
import * as m from "motion/react-m";
import { useEffect, useRef, useState } from "react";

const BASE = 4;
const SEQUENCE = [4, 2, 6, 8];
const ITEMS = [
  { qty: 400, unit: "g", name: "spaghetti" },
  { qty: 4, unit: "", name: "jaunes d’œufs" },
  { qty: 150, unit: "g", name: "guanciale" },
];

/** Auto-playing demo of the servings scaler. Pauses off-screen. */
export function ServingsDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % SEQUENCE.length), 2200);
    return () => window.clearInterval(id);
  }, [inView]);

  const servings = SEQUENCE[i];
  const factor = servings / BASE;

  return (
    <div ref={ref} className="mt-7 grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10" aria-hidden>
      <div className="inline-flex items-center gap-4 self-start rounded-full bg-fill p-1.5">
        <span className="grid size-10 place-items-center rounded-full bg-elevated text-xl text-fg-2 shadow-sm">−</span>
        <span className="flex min-w-[7.5rem] items-baseline justify-center gap-1.5">
          <Roll value={servings} className="text-[1.75rem] font-semibold tracking-[-0.03em]" />
          <span className="text-fg-2">personnes</span>
        </span>
        <span className="grid size-10 place-items-center rounded-full bg-elevated text-xl text-fg-2 shadow-sm">+</span>
      </div>
      <ul className="divide-y divide-line">
        {ITEMS.map((it) => (
          <li key={it.name} className="flex items-baseline justify-between gap-4 py-2.5">
            <span className="text-fg-2">{it.name}</span>
            <span className="flex items-baseline gap-1 font-semibold">
              <Roll value={Math.round(it.qty * factor)} />
              {it.unit && <span>{it.unit}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Roll({ value, className }: { value: number; className?: string }) {
  return (
    <span className={`relative inline-flex overflow-hidden tabular ${className ?? ""}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <m.span
          key={value}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {value}
        </m.span>
      </AnimatePresence>
    </span>
  );
}
