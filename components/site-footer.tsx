import Link from "next/link";
import { recipes } from "@/lib/recipes";
import { LogoMark } from "./logo";

const year = new Date(
  recipes.reduce((max, r) => (r.dateModified > max ? r.dateModified : max), "2026-01-01"),
).getFullYear();

export function SiteFooter() {
  return (
    <footer data-site-footer className="relative overflow-hidden border-t border-line bg-bg">
      <div className="container-page grid gap-12 pt-16 pb-10 md:grid-cols-12 md:pt-24">
        <div className="md:col-span-5">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Épure — accueil">
            <LogoMark className="size-9 text-fg" />
          </Link>
          <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-fg-2">
            Cinq recettes. Des grammes, des degrés, des minutes — et la raison de chaque geste. Rien de plus, rien de
            moins.
          </p>
        </div>

        <nav aria-label="Recettes" className="md:col-span-3">
          <h2 className="text-eyebrow text-fg-3">Les recettes</h2>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            {recipes.map((r) => (
              <li key={r.slug}>
                <Link href={`/recettes/${r.slug}`} className="text-fg-2 transition-colors hover:text-fg">
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Le site" className="md:col-span-2">
          <h2 className="text-eyebrow text-fg-3">Le site</h2>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            <li>
              <Link href="/a-propos" className="text-fg-2 transition-colors hover:text-fg">
                Manifeste
              </Link>
            </li>
            <li>
              <Link href="/recettes" className="text-fg-2 transition-colors hover:text-fg">
                Toutes les recettes
              </Link>
            </li>
            <li>
              <a href="/feed.xml" className="text-fg-2 transition-colors hover:text-fg">
                Flux RSS
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Pour les machines" className="md:col-span-2">
          <h2 className="text-eyebrow text-fg-3">Pour les machines</h2>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            <li>
              <a href="/llms.txt" className="text-fg-2 transition-colors hover:text-fg">
                llms.txt
              </a>
            </li>
            <li>
              <a href="/sitemap.xml" className="text-fg-2 transition-colors hover:text-fg">
                Plan du site
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container-page">
        <p
          aria-hidden
          className="pointer-events-none -mb-[0.12em] bg-gradient-to-b from-fg/[0.14] to-transparent bg-clip-text pt-[0.08em] text-center text-[clamp(6rem,27vw,24rem)] leading-[0.95] font-semibold tracking-[-0.07em] text-transparent select-none"
        >
          Épure
        </p>
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-line py-6 text-[0.8125rem] text-fg-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Épure. La cuisine, à l’essentiel.</p>
        <p>
          Photographies :{" "}
          <a href="https://www.pexels.com" className="underline-offset-2 hover:underline" rel="noopener">
            Pexels
          </a>{" "}
          — crédits sur chaque recette.
        </p>
      </div>
    </footer>
  );
}
