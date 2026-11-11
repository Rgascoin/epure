import clsx from "clsx";

/**
 * Hand-drawn strokes (underline, circle, arrows). They draw themselves when
 * they scroll into view (CSS scroll timeline, no JS); otherwise they're just there.
 */
const PATHS = {
  underline: { viewBox: "0 0 300 20", d: "M4 13 C 60 5, 120 17, 170 10 S 260 4, 296 11" },
  circle: {
    viewBox: "0 0 300 120",
    d: "M150 8 C 70 6, 10 30, 12 62 C 14 98, 90 114, 160 110 C 240 106, 292 84, 288 54 C 284 22, 220 8, 128 14",
  },
  "arrow-down": { viewBox: "0 0 80 120", d: "M40 6 C 22 40, 58 66, 38 108 M22 90 L38 110 L56 92" },
  "arrow-left": { viewBox: "0 0 140 70", d: "M134 14 C 100 6, 60 18, 14 48 M30 30 L12 50 L36 60" },
  "arrow-right": { viewBox: "0 0 140 70", d: "M6 14 C 40 6, 80 18, 126 48 M110 30 L128 50 L104 60" },
} as const;

export function Scribble({
  variant,
  className,
  strokeWidth = 3,
  animate = true,
}: {
  variant: keyof typeof PATHS;
  className?: string;
  strokeWidth?: number;
  animate?: boolean;
}) {
  const p = PATHS[variant];
  return (
    <svg
      aria-hidden
      viewBox={p.viewBox}
      preserveAspectRatio="none"
      className={clsx("pointer-events-none overflow-visible", animate && "draw-on-scroll", className)}
      fill="none"
    >
      <path
        d={p.d}
        pathLength={1}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
