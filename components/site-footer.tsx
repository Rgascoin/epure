import Link from "next/link";
import { recipes } from "@/lib/recipes";
import { LogoMark } from "./logo";
import { Scribble } from "./scribble";

const year = new Date(
  recipes.reduce((max, r) => (r.dateModified > max ? r.dateModified : max), "2026-01-01"),
).getFullYear();

export function SiteFooter() {
  return (
    <footer data-site-footer className="relative overflow-hidden bg-charcoal text-paper">
      <div className="container-page pt-20 pb-10 md:pt-28">
        <p className="text-eyebrow text-paper/60">Fin du carnet</p>
        <p className="relative mt-4 inline-block font-display text-[clamp(4rem,15vw,13rem)] leading-[0.85] [font-weight:calc(350+var(--dw))] tracking-[-0.045em] [font-variation-settings:'SOFT'_100]">
          À <span className="serif-accent text-[#E2765C]">table</span>.
          <Scribble
            variant="underline"
            animate={false}
            className="absolute -bottom-[0.04em] left-[0.74em] h-[0.12em] w-[1.75em] text-[#E2765C]"
          />
        </p>

        <div className="mt-16 grid gap-12 border-t border-paper/15 pt-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <LogoMark className="size-10 text-paper [--bg:#1b1712]" />
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-paper/70">
              Épure est un petit carnet en ligne. Cinq recettes, mises à jour quand on trouve mieux, sans publicité ni
              compte à créer.
            </p>
          </div>

          <nav aria-label="Recettes" className="md:col-span-3">
            <h2 className="text-eyebrow text-paper/60">Les recettes</h2>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              {recipes.map((r, i) => (
                <li key={r.slug}>
                  <Link href={`/recettes/${r.slug}`} className="group inline-flex gap-3 text-paper/80 hover:text-paper">
                    <span className="font-mono text-[0.8125rem] text-paper/60 tabular">0{i + 1}</span>
                    <span className="underline-offset-4 group-hover:underline">{r.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Le site" className="md:col-span-2">
            <h2 className="text-eyebrow text-paper/60">Le site</h2>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              <li>
                <Link href="/a-propos" className="text-paper/80 underline-offset-4 hover:text-paper hover:underline">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/recettes" className="text-paper/80 underline-offset-4 hover:text-paper hover:underline">
                  Toutes les recettes
                </Link>
              </li>
              <li>
                <a href="/feed.xml" className="text-paper/80 underline-offset-4 hover:text-paper hover:underline">
                  Flux RSS
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Pour les robots" className="md:col-span-2">
            <h2 className="text-eyebrow text-paper/60">Pour les robots</h2>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              <li>
                <a href="/llms.txt" className="text-paper/80 underline-offset-4 hover:text-paper hover:underline">
                  llms.txt
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="text-paper/80 underline-offset-4 hover:text-paper hover:underline">
                  Plan du site
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/15 pt-6 font-mono text-[0.8125rem] text-paper/60 md:flex-row md:justify-between">
          <p>© {year} Épure</p>
          <p>
            Composé en Fraunces, Instrument Sans, IBM Plex Mono et Caveat · photos{" "}
            <a href="https://www.pexels.com" rel="noopener" className="underline underline-offset-2 hover:text-paper">
              Pexels
            </a>{" "}
            · aucun cookie
          </p>
        </div>
      </div>
    </footer>
  );
}
