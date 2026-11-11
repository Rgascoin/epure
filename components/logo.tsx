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
      <rect width="64" height="64" rx="18" fill="currentColor" />
      <circle cx="32" cy="32" r="17" fill="none" style={{ stroke: "var(--bg)" }} strokeWidth="3.2" />
      <circle cx="32" cy="32" r="7.5" fill="#F0B323" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={className}>
      Épure<span className="text-[#F0B323]">.</span>
    </span>
  );
}
