"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import clsx from "clsx";
import { Close, Pause, Play, Timer as TimerIcon } from "../icons";

interface TimerState {
  id: string;
  label: string;
  totalMs: number;
  /** Remaining time when paused, or at the moment `startedAt` was set. */
  remainingMs: number;
  startedAt: number | null;
  done: boolean;
}

interface TimersApi {
  timers: TimerState[];
  start: (id: string, label: string, minutes: number) => void;
  toggle: (id: string) => void;
  remove: (id: string) => void;
  remaining: (t: TimerState) => number;
  get: (id: string) => TimerState | undefined;
}

const TimersContext = createContext<TimersApi | null>(null);

export function useTimers() {
  const ctx = useContext(TimersContext);
  if (!ctx) throw new Error("useTimers must be used inside <TimersProvider>");
  return ctx;
}

/** A soft three-note chime synthesised with Web Audio — no asset to load. */
function chime() {
  try {
    const Ctx =
      window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();
    [880, 1108.73, 1318.51].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.18;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 1);
    });
    window.setTimeout(() => void ctx.close(), 1600);
  } catch {
    /* audio unavailable — the visual + vibration cues remain */
  }
  navigator.vibrate?.([200, 100, 200, 100, 400]);
}

export function TimersProvider({ children }: { children: ReactNode }) {
  const [timers, setTimers] = useState<TimerState[]>([]);
  const [, setTick] = useState(0);
  const originalTitle = useRef<string | null>(null);

  const remaining = useCallback(
    (t: TimerState) => (t.startedAt === null ? t.remainingMs : Math.max(0, t.remainingMs - (Date.now() - t.startedAt))),
    [],
  );

  const running = timers.some((t) => t.startedAt !== null && !t.done);

  // Single ticking loop, only while something runs.
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setTick((n) => n + 1);
      setTimers((list) => {
        let changed = false;
        const next = list.map((t) => {
          if (!t.done && t.startedAt !== null && t.remainingMs - (Date.now() - t.startedAt) <= 0) {
            changed = true;
            chime();
            return { ...t, done: true, startedAt: null, remainingMs: 0 };
          }
          return t;
        });
        return changed ? next : list;
      });
    }, 250);
    return () => window.clearInterval(id);
  }, [running]);

  // Flash the tab title when a timer is done (useful when cooking with the tab in background).
  const finishedLabel = timers.find((t) => t.done)?.label ?? null;
  useEffect(() => {
    if (originalTitle.current === null) originalTitle.current = document.title;
    if (finishedLabel === null) return;
    const base = originalTitle.current;
    let on = false;
    const id = window.setInterval(() => {
      on = !on;
      document.title = on ? `⏰ ${finishedLabel} — terminé` : base;
    }, 1000);
    return () => {
      window.clearInterval(id);
      document.title = base;
    };
  }, [finishedLabel]);

  const api = useMemo<TimersApi>(
    () => ({
      timers,
      remaining,
      get: (id) => timers.find((t) => t.id === id),
      start: (id, label, minutes) =>
        setTimers((list) => {
          const totalMs = minutes * 60_000;
          const fresh: TimerState = { id, label, totalMs, remainingMs: totalMs, startedAt: Date.now(), done: false };
          return list.some((t) => t.id === id) ? list.map((t) => (t.id === id ? fresh : t)) : [...list, fresh];
        }),
      toggle: (id) =>
        setTimers((list) =>
          list.map((t) => {
            if (t.id !== id || t.done) return t;
            if (t.startedAt === null) return { ...t, startedAt: Date.now() };
            return { ...t, remainingMs: remaining(t), startedAt: null };
          }),
        ),
      remove: (id) => setTimers((list) => list.filter((t) => t.id !== id)),
    }),
    [timers, remaining],
  );

  return (
    <TimersContext.Provider value={api}>
      {children}
      <TimerDock />
    </TimersContext.Provider>
  );
}

export function formatClock(ms: number) {
  const s = Math.ceil(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return h
    ? `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
    : `${m}:${String(sec).padStart(2, "0")}`;
}

/** Inline pill on each step: start / pause / shows live countdown. */
export function TimerButton({
  id,
  label,
  minutes,
  tone = "light",
  size = "md",
}: {
  id: string;
  label: string;
  minutes: number;
  tone?: "light" | "dark";
  size?: "md" | "lg";
}) {
  const { get, start, toggle, remaining } = useTimers();
  const t = get(id);
  const isRunning = t && t.startedAt !== null && !t.done;
  const progress = t ? 1 - remaining(t) / t.totalMs : 0;

  return (
    <button
      type="button"
      onClick={() => (t && !t.done ? toggle(id) : start(id, label, minutes))}
      className={clsx(
        "relative inline-flex items-center gap-2 overflow-hidden rounded-full font-medium tabular transition-[transform,background-color] duration-300 active:scale-[0.97]",
        size === "lg" ? "h-14 px-6 text-[1.0625rem]" : "h-10 px-4 text-[0.9375rem]",
        tone === "dark"
          ? "bg-white/10 text-white hover:bg-white/15"
          : t?.done
            ? "bg-accent text-on-accent"
            : "bg-tint text-ink ring-1 ring-[color-mix(in_srgb,var(--accent)_22%,transparent)] hover:bg-[color-mix(in_srgb,var(--accent)_16%,var(--bg))]",
      )}
    >
      {t && !t.done && (
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 bg-[color-mix(in_srgb,var(--accent)_22%,transparent)]"
          style={{ width: `${progress * 100}%` }}
        />
      )}
      <span className="relative flex items-center gap-2">
        {isRunning ? <Pause size={16} /> : t && !t.done ? <Play size={15} /> : <TimerIcon size={17} />}
        {t
          ? t.done
            ? "Terminé !"
            : formatClock(remaining(t))
          : `${minutes >= 60 ? formatHours(minutes) : `${minutes} min`}`}
        {!t && <span className="font-normal">· Lancer</span>}
        <span className="sr-only">
          {t && !t.done
            ? ` — ${isRunning ? "mettre en pause" : "reprendre"} le minuteur « ${label} »`
            : ` le minuteur « ${label} »`}
        </span>
      </span>
    </button>
  );
}

function formatHours(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h} h ${String(m).padStart(2, "0")}` : `${h} h`;
}

/** Floating stack of running timers, always reachable while scrolling. */
function TimerDock() {
  const { timers, remaining, toggle, remove } = useTimers();
  return (
    <div
      data-print="hide"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-[calc(5.25rem+env(safe-area-inset-bottom))] z-[60] flex flex-col items-center gap-2 px-4 lg:bottom-6"
    >
      <AnimatePresence initial={false}>
        {timers.map((t) => {
          const left = remaining(t);
          const p = 1 - left / t.totalMs;
          return (
            <m.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.92 }}
              transition={{ type: "spring", stiffness: 420, damping: 34 }}
              className={clsx(
                "pointer-events-auto flex items-center gap-3 rounded-full py-1.5 pr-1.5 pl-2 text-white shadow-[var(--shadow-float)]",
                t.done ? "bg-accent text-on-accent" : "bg-[#1d1d1f]/92 backdrop-blur-xl",
              )}
            >
              <svg viewBox="0 0 36 36" className="size-9 -rotate-90" aria-hidden>
                <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="3" />
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  stroke={t.done ? "currentColor" : "var(--accent)"}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 15}
                  strokeDashoffset={2 * Math.PI * 15 * (1 - p)}
                  style={{ transition: "stroke-dashoffset 0.25s linear" }}
                />
              </svg>
              <div className="min-w-0 pr-1">
                <p className="text-[1.0625rem] leading-none font-semibold tabular">
                  {t.done ? "Terminé" : formatClock(left)}
                </p>
                <p className="mt-0.5 max-w-[11rem] truncate text-[0.75rem] opacity-70">{t.label}</p>
              </div>
              {!t.done && (
                <button
                  type="button"
                  onClick={() => toggle(t.id)}
                  className="grid size-9 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                  aria-label={t.startedAt === null ? `Reprendre ${t.label}` : `Mettre en pause ${t.label}`}
                >
                  {t.startedAt === null ? <Play size={14} /> : <Pause size={14} />}
                </button>
              )}
              <button
                type="button"
                onClick={() => remove(t.id)}
                className="grid size-9 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label={`Supprimer le minuteur ${t.label}`}
              >
                <Close size={15} />
              </button>
            </m.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
