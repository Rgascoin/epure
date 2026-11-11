import clsx from "clsx";
import type { ReactNode } from "react";

/**
 * Round rubber stamp with text running around the edge. Spins slowly (CSS).
 */
export function Stamp({
  text,
  children,
  className,
  tone = "accent",
}: {
  text: string;
  children?: ReactNode;
  className?: string;
  tone?: "accent" | "ink" | "paper";
}) {
  const colors = {
    accent: "bg-accent text-on-accent",
    ink: "bg-fg text-bg",
    paper: "bg-paper text-charcoal",
  }[tone];
  const id = `stamp-${text.length}-${text.charCodeAt(0)}`;
  return (
    <div className={clsx("relative grid aspect-square place-items-center rounded-full", colors, className)} aria-hidden>
      <svg viewBox="0 0 200 200" className="spin-slow absolute inset-0 size-full">
        <defs>
          <path id={id} d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
        </defs>
        <text className="fill-current font-mono text-[15.5px] font-medium tracking-[0.18em] uppercase">
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}
