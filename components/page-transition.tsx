import { ViewTransition, type ReactNode } from "react";

/**
 * Wraps a page so that forward/back navigations crossfade-and-rise,
 * while shared elements (recipe photos) morph independently.
 * Browser back/forward carries no type and simply swaps.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      enter={{ "nav-forward": "page-in", "nav-back": "page-in", default: "none" }}
      exit={{ "nav-forward": "page-out", "nav-back": "page-out", default: "none" }}
      default="none"
    >
      <div>{children}</div>
    </ViewTransition>
  );
}
