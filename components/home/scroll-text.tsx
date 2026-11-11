import type { CSSProperties } from "react";

/**
 * Words light up one after another as the paragraph crosses the viewport.
 * Pure CSS scroll-driven animation (`view-timeline`): zero JavaScript, runs
 * off the main thread. Browsers without support simply show the text.
 * The full text is always in the DOM — crawlable, selectable, accessible.
 */
export function ScrollText({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <p className={`scroll-text ${className ?? ""}`} style={{ ["--n" as string]: words.length } as CSSProperties}>
      {words.map((word, i) => (
        <span key={i} style={{ ["--i" as string]: i } as CSSProperties}>
          {word}{" "}
        </span>
      ))}
    </p>
  );
}
