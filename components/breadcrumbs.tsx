import Link from "next/link";
import type { Route } from "next";
import type { CSSProperties } from "react";

/** Visible breadcrumb; the last item is the current page. Pair it with the JSON-LD BreadcrumbList. */
export function Breadcrumbs({ items }: { items: Array<{ name: string; path: string }> }) {
  return (
    <nav aria-label="Fil d’Ariane" className="intro-fade" style={{ "--d": "0ms" } as CSSProperties}>
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.8125rem] text-fg-3">
        {items.map((c, i) =>
          i < items.length - 1 ? (
            <li key={c.path} className="inline-flex items-center gap-2">
              <Link
                href={c.path as Route}
                className="underline-offset-2 transition-colors hover:text-fg hover:underline"
                transitionTypes={["nav-back"]}
              >
                {c.name}
              </Link>
              <span aria-hidden>/</span>
            </li>
          ) : (
            <li key={c.path}>
              <span aria-current="page" className="text-fg-2">
                {c.name}
              </span>
            </li>
          ),
        )}
      </ol>
    </nav>
  );
}
