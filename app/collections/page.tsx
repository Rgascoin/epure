import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { collectionPath, publishedCollections, recipesInCollection } from "@/lib/collections";
import { fr } from "@/lib/format";
import { breadcrumb, graph, organization, webPage, website } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { PageTransition } from "@/components/page-transition";
import { RecipeIndex } from "@/components/home/recipe-index";
import { InSeasonLinks } from "@/components/in-season";

const title = "Collections de saison et de fêtes";
const description =
  "Les recettes d’Épure rangées au fil de l’année : Noël, Nouvel An, Chandeleur, plats d’hiver, cuisine d’été. Toutes restent en ligne, la saison les met en avant.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/collections" },
  openGraph: { title: `${title} · Épure`, description, url: "/collections" },
};

/** Calendar order, from January: the order people live the year in. */
const byCalendar = (list: ReturnType<typeof publishedCollections>) =>
  [...list].sort((a, b) => a.window(2027)[0].slice(5).localeCompare(b.window(2027)[0].slice(5)));

export default function CollectionsPage() {
  const list = byCalendar(publishedCollections());
  const data = graph(
    website(),
    organization(),
    webPage({
      path: "/collections",
      name: title,
      description,
      type: "CollectionPage",
      breadcrumbId: absoluteUrl("/collections#breadcrumb"),
    }),
    breadcrumb("/collections", [
      { name: "Accueil", path: "/" },
      { name: "Collections", path: "/collections" },
    ]),
  );

  return (
    <PageTransition>
      <JsonLd data={data} />
      <section className="container-page pt-[calc(var(--header-h)+clamp(3rem,10vh,7rem))] pb-[clamp(5rem,14vh,10rem)]">
        <p className="intro-fade text-eyebrow text-fg-3" style={{ "--d": "0ms" } as CSSProperties}>
          Collections
        </p>
        <h1 className="mt-5 max-w-[16ch] text-display">
          {["Au", "fil", "de", "l’"].map((word, i) => (
            <span key={i}>
              <span className="intro-word" style={{ "--i": i } as CSSProperties}>
                {word}
              </span>
              {i < 3 ? " " : ""}
            </span>
          ))}
          <span className="intro-word serif-accent text-ink" style={{ "--i": 4 } as CSSProperties}>
            année
          </span>
          <span className="intro-word" style={{ "--i": 5 } as CSSProperties}>
            .
          </span>
        </h1>
        <p className="intro-fade mt-6 max-w-2xl text-lede text-fg-2" style={{ "--d": "380ms" } as CSSProperties}>
          {fr(
            "Les fêtes et les saisons, chacune avec ses recettes. Rien ne disparaît hors saison : le calendrier décide seulement de ce qu’on met en avant sur l’accueil.",
          )}
        </p>
        <div className="intro-fade mt-8" style={{ "--d": "460ms" } as CSSProperties}>
          <InSeasonLinks />
        </div>

        <div className="mt-14">
          <RecipeIndex
            rows={list.map((c) => {
              const items = recipesInCollection(c);
              const cover = items[0];
              return {
                slug: `collection-${c.slug}`,
                href: collectionPath(c),
                title: c.title,
                category: `${items.length} recettes`,
                time: c.period,
                image: cover.hero,
                alt: cover.images.heroAlt,
                focus: cover.theme.focus,
                accent: cover.theme.ink,
                accentRaw: cover.theme.accent,
              };
            })}
          />
        </div>
      </section>
    </PageTransition>
  );
}
