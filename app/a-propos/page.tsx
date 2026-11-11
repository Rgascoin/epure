import type { Metadata } from "next";
import Link from "next/link";
import { recipes } from "@/lib/recipes";
import { fr } from "@/lib/format";
import { breadcrumb, graph, organization, webPage, website } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { PageTransition } from "@/components/page-transition";
import { ScrollText } from "@/components/home/scroll-text";
import { ArrowRight } from "@/components/icons";

const title = "Manifeste — pourquoi cinq recettes";
const description =
  "Épure publie peu, mais précisément : cinq recettes classiques écrites au gramme près, avec la science de chaque geste, sans publicité ni détour.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/a-propos" },
  openGraph: { title: `${title} · Épure`, description, url: "/a-propos" },
};

const PRINCIPLES = [
  {
    n: "01",
    title: "Des mesures, pas des impressions",
    text: "Grammes, millilitres, degrés, minutes. Quand une approximation est inévitable, on décrit le signe à guetter : la couleur, la texture, le son.",
  },
  {
    n: "02",
    title: "La raison de chaque geste",
    text: "Démarrer le guanciale à froid, mélanger hors du feu, monter des blancs fermes mais pas secs : chaque recette explique la science qui rend le geste juste.",
  },
  {
    n: "03",
    title: "La recette d’abord",
    text: "L’essentiel tient en quelques lignes, en haut de chaque page. Le contexte, les variantes et les questions viennent ensuite, pour qui veut aller plus loin.",
  },
  {
    n: "04",
    title: "Pensé pour la cuisine",
    text: "Portions ajustables, minuteurs intégrés, liste cochable, mode cuisine plein écran qui garde l’écran allumé. Même imprimée, la recette reste lisible.",
  },
];

export default function AboutPage() {
  const data = graph(
    website(),
    organization(),
    webPage({
      path: "/a-propos",
      name: title,
      description,
      type: "AboutPage",
      breadcrumbId: absoluteUrl("/a-propos#breadcrumb"),
    }),
    breadcrumb("/a-propos", [
      { name: "Accueil", path: "/" },
      { name: "Manifeste", path: "/a-propos" },
    ]),
  );

  return (
    <PageTransition>
      <JsonLd data={data} />

      <section className="container-page pt-[calc(var(--header-h)+clamp(3rem,10vh,7rem))]">
        <p className="intro-fade text-eyebrow text-fg-3" style={{ ["--d" as string]: "0ms" }}>
          Manifeste
        </p>
        <h1 className="mt-5 text-hero">
          <span className="intro-line" style={{ ["--i" as string]: 0 }}>
            <span>Moins.</span>
          </span>
          <span className="intro-line" style={{ ["--i" as string]: 1 }}>
            <span>
              <span className="serif-accent font-normal">Mieux</span>.
            </span>
          </span>
        </h1>
      </section>

      <section className="container-page py-[clamp(4rem,12vh,9rem)]" aria-label="Pourquoi cinq">
        <ScrollText
          className="max-w-[60rem] text-[clamp(1.75rem,3.8vw,3.25rem)] leading-[1.1] font-semibold tracking-[-0.035em]"
          text={fr(
            "Il existe des millions de recettes en ligne. La plupart se ressemblent, beaucoup se contredisent, peu expliquent. Épure fait le pari inverse : cinq recettes seulement, choisies parce que chacune enseigne un geste fondamental, et écrites avec assez de précision pour réussir du premier coup.",
          )}
        />
      </section>

      <section className="container-page pb-[clamp(4rem,12vh,9rem)]" aria-labelledby="method-title">
        <h2 id="method-title" className="text-headline">
          La méthode.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
          {PRINCIPLES.map((p) => (
            <article
              key={p.n}
              className="reveal-on-scroll rounded-[var(--radius-card)] bg-elevated p-8 ring-1 ring-line md:p-10"
            >
              <p className="text-[0.8125rem] font-semibold text-fg-3 tabular">{p.n}</p>
              <h3 className="mt-4 text-title">{p.title}</h3>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-fg-2">{fr(p.text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-black py-[clamp(5rem,14vh,10rem)] text-white" aria-labelledby="machines-title">
        <div className="container-page grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-eyebrow text-white/50">Ouvert aux machines</p>
            <h2 id="machines-title" className="mt-3 text-headline">
              Lisible par tous.
              <br />
              <span className="text-white/40">Même par les IA.</span>
            </h2>
          </div>
          <div className="space-y-5 text-[1.0625rem] leading-relaxed text-white/70 md:col-span-7">
            <p>
              {fr(
                "Chaque recette est décrite en données structurées schema.org (Recipe, FAQ, fil d’Ariane) pour apparaître enrichie dans les moteurs de recherche, avec ses temps, ses ingrédients et sa photo.",
              )}
            </p>
            <p>
              {fr("Les assistants et agents d’IA disposent d’un index dédié, ")}
              <a href="/llms.txt" className="text-white underline underline-offset-4">
                llms.txt
              </a>
              {fr(
                ", et d’une version Markdown propre de chaque recette : ajoutez simplement « .md » à l’adresse, par exemple ",
              )}
              <a href={`/recettes/${recipes[0].slug}.md`} className="text-white underline underline-offset-4">
                /recettes/{recipes[0].slug}.md
              </a>
              .
            </p>
            <p>
              {fr(
                "Sans publicité, sans traceur publicitaire, sans pop-up : des pages légères, rapides, et qui respectent le réglage « réduire les animations » de votre appareil.",
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-[clamp(4rem,12vh,9rem)]" aria-labelledby="credits-title">
        <h2 id="credits-title" className="text-title">
          Crédits
        </h2>
        <p className="mt-3 max-w-2xl text-fg-2">
          {fr(
            "Photographies issues de Pexels, utilisées selon la licence Pexels. Merci à leurs auteurs. Typographies : Inter (Rasmus Andersson) et Instrument Serif, sous licence SIL Open Font License.",
          )}
        </p>
        <ul className="mt-8 grid gap-x-10 gap-y-3 text-[0.9375rem] sm:grid-cols-2 lg:grid-cols-3">
          {recipes.flatMap((r) =>
            (["hero", "detail"] as const).map((k) => (
              <li key={`${r.slug}-${k}`} className="flex justify-between gap-4 border-b border-line py-2.5">
                <span className="text-fg-2">
                  {r.title}
                  {k === "detail" ? " (détail)" : ""}
                </span>
                <a href={r.images.credits[k].url} rel="noopener" className="font-medium hover:underline">
                  {r.images.credits[k].photographer}
                </a>
              </li>
            )),
          )}
        </ul>

        <Link href="/recettes" className="btn btn-primary mt-14" transitionTypes={["nav-forward"]}>
          Voir les recettes <ArrowRight size={18} />
        </Link>
      </section>
    </PageTransition>
  );
}
