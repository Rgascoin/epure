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
  /** Current time, refreshed 4×/s while a timer runs, so every consumer re-renders. */
  now: number;
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

/* -------------------------------------------------------------------------- */
/*  Sound                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Browsers only allow audio started from a user gesture. The context is
 * created (or resumed) when a timer is started, then reused when it rings.
 */
let audio: AudioContext | null = null;

function unlockAudio() {
  try {
    if (!audio) {
      const Ctx =
        window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audio = new Ctx();
    }
    if (audio.state === "suspended") void audio.resume();
  } catch {
    audio = null;
  }
}

/** Kitchen-timer ring: three soft notes, twice. Synthesised, no file to load. */
function ring() {
  if (audio) {
    const ctx = audio;
    [0, 1.1].forEach((offset) =>
      [880, 1108.73, 1318.51].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        const t = ctx.currentTime + offset + i * 0.16;
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.22, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);
        osc.connect(gain).connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.85);
      }),
    );
  }
  navigator.vibrate?.([250, 120, 250, 120, 500]);
}

/* -------------------------------------------------------------------------- */
/*  Provider                                                                   */
/* -------------------------------------------------------------------------- */

export function TimersProvider({ children }: { children: ReactNode }) {
  const [timers, setTimers] = useState<TimerState[]>([]);
  // 0 during prerender (no timers exist yet); set on start and by the ticking clock.
  const [now, setNow] = useState(0);
  const originalTitle = useRef<string | null>(null);

  const running = timers.some((t) => t.startedAt !== null && !t.done);
  const timersRef = useRef(timers);
  useEffect(() => {
    timersRef.current = timers;
  }, [timers]);

  // One shared clock, only while something runs. Time is always derived from
  // Date.now(), so a throttled background tab never drifts.
  useEffect(() => {
    if (!running) return;
    const tick = () => {
      const t = Date.now();
      setNow(t);
      const finished = timersRef.current.filter(
        (timer) => !timer.done && timer.startedAt !== null && timer.remainingMs - (t - timer.startedAt) <= 0,
      );
      if (!finished.length) return;
      ring();
      const ids = new Set(finished.map((f) => f.id));
      setTimers((list) =>
        list.map((timer) => (ids.has(timer.id) ? { ...timer, done: true, startedAt: null, remainingMs: 0 } : timer)),
      );
    };
    tick();
    const id = window.setInterval(tick, 250);
    return () => window.clearInterval(id);
  }, [running]);

  // Blink the tab title when a timer is done (handy when the tab is in the background).
  const finishedLabel = timers.find((t) => t.done)?.label ?? null;
  useEffect(() => {
    if (originalTitle.current === null) originalTitle.current = document.title;
    if (finishedLabel === null) return;
    const base = originalTitle.current;
    let on = false;
    const id = window.setInterval(() => {
      on = !on;
      document.title = on ? `⏰ ${finishedLabel} : c’est prêt` : base;
    }, 1000);
    return () => {
      window.clearInterval(id);
      document.title = base;
    };
  }, [finishedLabel]);

  const remaining = useCallback(
    (t: TimerState) => (t.startedAt === null ? t.remainingMs : Math.max(0, t.remainingMs - (now - t.startedAt))),
    [now],
  );

  const api = useMemo<TimersApi>(
    () => ({
      timers,
      now,
      remaining,
      get: (id) => timers.find((t) => t.id === id),
      start: (id, label, minutes) => {
        unlockAudio();
        const startedAt = Date.now();
        setNow(startedAt);
        setTimers((list) => {
          const totalMs = minutes * 60_000;
          const fresh: TimerState = { id, label, totalMs, remainingMs: totalMs, startedAt, done: false };
          return list.some((t) => t.id === id) ? list.map((t) => (t.id === id ? fresh : t)) : [...list, fresh];
        });
      },
      toggle: (id) => {
        unlockAudio();
        const t0 = Date.now();
        setNow(t0);
        setTimers((list) =>
          list.map((t) => {
            if (t.id !== id || t.done) return t;
            if (t.startedAt === null) return { ...t, startedAt: t0 };
            return { ...t, remainingMs: Math.max(0, t.remainingMs - (t0 - t.startedAt)), startedAt: null };
          }),
        );
      },
      remove: (id) => setTimers((list) => list.filter((t) => t.id !== id)),
    }),
    [timers, now, remaining],
  );

  return (
    <TimersContext.Provider value={api}>
      {children}
      <TimerTray variant="floating" />
    </TimersContext.Provider>
  );
}

export function formatClock(ms: number) {
  const s = Math.ceil(ms / 1000);
  const h = Math.floor(s / 3600);
  const min = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return h
    ? `${h}:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
    : `${min}:${String(sec).padStart(2, "0")}`;
}

function formatMinutes(minutes: number) {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${h} h ${String(rest).padStart(2, "0")}` : `${h} h`;
}

/* -------------------------------------------------------------------------- */
/*  Step button                                                                */
/* -------------------------------------------------------------------------- */

/** Start / pause / live countdown, shown on each step that involves waiting. */
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
  const left = t ? remaining(t) : minutes * 60_000;
  const isRunning = !!t && t.startedAt !== null && !t.done;
  const isPaused = !!t && t.startedAt === null && !t.done;
  const progress = t ? 1 - left / t.totalMs : 0;

  return (
    <button
      type="button"
      onClick={() => (t && !t.done ? toggle(id) : start(id, label, minutes))}
      className={clsx(
        "relative inline-flex items-center gap-2.5 overflow-hidden rounded-[10px] border-[1.5px] font-medium tabular transition-[transform,background-color,border-color] duration-300 active:scale-[0.97]",
        size === "lg" ? "h-14 px-6 text-[1.125rem]" : "h-10 px-3.5 text-[0.9375rem]",
        tone === "dark"
          ? clsx("text-[#F2EDE4]", t ? "border-[#F2EDE4]/60 bg-white/5" : "border-dashed border-[#F2EDE4]/40")
          : t?.done
            ? "border-accent bg-accent text-on-accent"
            : clsx("bg-tint text-ink", t ? "border-ink/50" : "border-dashed border-ink/40 hover:border-solid"),
      )}
    >
      {t && !t.done && (
        <span
          aria-hidden
          className={clsx(
            "absolute inset-y-0 left-0 transition-[width] duration-300 ease-linear",
            tone === "dark" ? "bg-accent/35" : "bg-[color-mix(in_srgb,var(--accent)_20%,transparent)]",
          )}
          style={{ width: `${progress * 100}%` }}
        />
      )}
      <span className="relative flex items-center gap-2">
        {isRunning ? <Pause size={15} /> : isPaused ? <Play size={14} /> : <TimerIcon size={17} />}
        <span>{t ? (t.done ? "C’est prêt !" : formatClock(left)) : formatMinutes(minutes)}</span>
        {!t && <span className="font-normal opacity-80">· lancer</span>}
        {isPaused && <span className="font-normal opacity-80">· en pause</span>}
        <span className="sr-only">
          {t && !t.done
            ? ` : ${isRunning ? "mettre en pause" : "reprendre"} le minuteur « ${label} »`
            : ` : minuteur « ${label} »`}
        </span>
      </span>
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tray of running timers                                                     */
/* -------------------------------------------------------------------------- */

/**
 * "floating": fixed at the bottom of the page.
 * "inline": rendered inside the cooking-mode dialog (the top layer would
 * otherwise hide the floating tray).
 */
export function TimerTray({ variant }: { variant: "floating" | "inline" }) {
  const { timers, remaining, toggle, remove } = useTimers();
  return (
    <div
      data-print="hide"
      aria-live="polite"
      className={clsx(
        "pointer-events-none flex flex-col gap-2",
        variant === "floating"
          ? "fixed inset-x-0 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] z-[60] items-center px-4 lg:bottom-6"
          : "items-stretch",
      )}
    >
      <AnimatePresence initial={false}>
        {timers.map((t) => {
          const left = remaining(t);
          const p = t.totalMs ? 1 - left / t.totalMs : 1;
          return (
            <m.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ type: "spring", stiffness: 420, damping: 32 }}
              className={clsx(
                "pointer-events-auto flex items-center gap-3 rounded-[12px] py-1.5 pr-1.5 pl-2",
                t.done
                  ? "bg-accent text-on-accent shadow-[3px_3px_0_#1B1712]"
                  : "bg-[#1B1712] text-[#F2EDE4] shadow-[3px_3px_0_var(--accent)]",
                t.done && "animate-[ticket-shake_0.9s_ease-in-out_infinite]",
              )}
            >
              <svg viewBox="0 0 36 36" className="size-9 shrink-0 -rotate-90" aria-hidden>
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
              <div className="min-w-0 flex-1 pr-1">
                <p className="text-[1.0625rem] leading-none font-semibold tabular">
                  {t.done ? "C’est prêt !" : formatClock(left)}
                  {!t.done && t.startedAt === null && <span className="ml-2 text-[0.75rem] font-normal">en pause</span>}
                </p>
                <p className="mt-1 max-w-[13rem] truncate text-[0.75rem] opacity-75">{t.label}</p>
              </div>
              {!t.done && (
                <button
                  type="button"
                  onClick={() => toggle(t.id)}
                  className="grid size-9 place-items-center rounded-[9px] bg-white/10 transition-colors hover:bg-white/20"
                  aria-label={t.startedAt === null ? `Reprendre ${t.label}` : `Mettre en pause ${t.label}`}
                >
                  {t.startedAt === null ? <Play size={14} /> : <Pause size={14} />}
                </button>
              )}
              <button
                type="button"
                onClick={() => remove(t.id)}
                className="grid size-9 place-items-center rounded-[9px] bg-white/10 transition-colors hover:bg-white/20"
                aria-label={t.done ? `Arrêter l’alarme ${t.label}` : `Supprimer le minuteur ${t.label}`}
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
