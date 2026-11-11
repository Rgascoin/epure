/**
 * Épure mark: a plate seen from above, a single yolk.
 * Pure geometry — no font dependency, crisp at every size.
 */
export function LogoMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <circle cx="32" cy="32" r="31" fill="currentColor" />
      <circle cx="32" cy="32" r="19" fill="none" style={{ stroke: "var(--bg)" }} strokeWidth="2.6" />
      <circle cx="35" cy="30" r="8" fill="#F0B323" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`font-display-tuned [font-weight:calc(450+var(--dw))] tracking-[-0.03em] ${className ?? ""}`}>
      Ép<span className="serif-accent">ure</span>
    </span>
  );
}
