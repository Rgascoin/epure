import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { recipes } from "@/lib/recipes";
import { fr } from "@/lib/format";
import { breadcrumb, graph, organization, webPage, website } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { PageTransition } from "@/components/page-transition";
import { Scribble } from "@/components/scribble";
import { ArrowRight } from "@/components/icons";

const title = "À propos : pourquoi seulement cinq recettes ?";
const description =
  "Épure est un petit carnet de cinq recettes écrites au gramme près, avec le pourquoi de chaque geste. Pas de publicité, pas de compte, pas de pop-up.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/a-propos" },
  openGraph: { title: `${title} · Épure`, description, url: "/a-propos" },
};

const PRINCIPLES = [
  {
    title: "Des mesures plutôt que des impressions",
    text: "Des grammes, des degrés, des minutes. Quand un chiffre ne suffit pas, on décrit ce qu’il faut guetter : la couleur de la croûte, le bruit du guanciale, la sauce qui nappe la cuillère.",
  },
  {
    title: "Le pourquoi de chaque geste",
    text: "Pourquoi démarrer à froid, pourquoi sortir la poêle du feu, pourquoi ne pas tourner les blancs. Une fois qu’on a compris, on n’a plus besoin de la recette.",
  },
  {
    title: "La recette en premier",
    text: "Le résumé, avec les quantités, est en haut de la page ; les ingrédients suivent trois paragraphes courts. Les explications, les ratés possibles et les variantes viennent ensuite, pour ceux qui ont le temps.",
  },
  {
    title: "Un site qui sert en cuisine",
    text: "Des portions qui se recalculent, des minuteurs dans les étapes, un mode plein écran qui garde l’écran allumé, et une version qui s’imprime proprement.",
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
      { name: "À propos", path: "/a-propos" },
    ]),
  );

  return (
    <PageTransition>
      <JsonLd data={data} />

      <section className="container-page pt-[calc(var(--header-h)+clamp(3rem,10vh,7rem))]">
        <p className="intro-fade text-eyebrow text-fg-3" style={{ "--d": "0ms" } as CSSProperties}>
          À propos
        </p>
        <h1 className="mt-6 max-w-[13ch] text-hero">
          {["Pourquoi", "seulement"].map((word, i) => (
            <span key={word}>
              <span className="intro-word" style={{ "--i": i } as CSSProperties}>
                {word}
              </span>{" "}
            </span>
          ))}
          <span className="relative inline-block">
            <span className="intro-word serif-accent text-ink" style={{ "--i": 2 } as CSSProperties}>
              cinq
            </span>
            <Scribble
              variant="circle"
              animate={false}
              className="intro-fade absolute -inset-x-[0.2em] -inset-y-[0.12em] text-accent"
            />
          </span>
          <span className="intro-word" style={{ "--i": 3 } as CSSProperties}>
            &#8239;?
          </span>
        </h1>
      </section>

      <section
        className="container-page grid gap-10 py-[clamp(4rem,12vh,8rem)] md:grid-cols-12"
        aria-label="Notre histoire"
      >
        <div className="space-y-6 text-[1.1875rem] leading-[1.7] text-fg-2 md:col-span-7 md:col-start-4">
          <p className="dropcap font-display text-[clamp(1.35rem,2.2vw,1.75rem)] leading-[1.5] [font-weight:calc(380+var(--dw))] text-fg [font-variation-settings:'SOFT'_80]">
            {fr(
              "Parce qu’on préfère expliquer une recette à fond plutôt qu’en survoler cent. Il existe des milliers de versions de la carbonara en ligne ; on en a écrit une, en prenant le temps de dire pourquoi elle marche.",
            )}
          </p>
          <p>
            {fr(
              "Les cinq recettes ont été choisies parce que chacune apprend un geste qui servira ailleurs : lier une sauce aux œufs sans la cuire, mijoter longtemps sans dessécher, confire des légumes, foncer une pâte, monter des blancs. Si vous maîtrisez ces cinq-là, vous avez fait une bonne partie du chemin.",
            )}
          </p>
          <p>
            {fr(
              "On reprend les recettes quand on trouve une meilleure façon de faire, et la date de mise à jour est indiquée en bas de chaque page.",
            )}
          </p>
        </div>
      </section>

      <section className="container-page pb-[clamp(4rem,12vh,8rem)]" aria-labelledby="method-title">
        <h2 id="method-title" className="text-headline">
          Comment on écrit une recette.
        </h2>
        <ol className="mt-12 grid gap-x-10 gap-y-12 border-t-2 border-fg pt-10 md:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <li key={p.title} className="reveal-on-scroll grid grid-cols-[3rem_1fr] gap-4">
              <span className="serif-accent text-[2.75rem] leading-[0.9] text-ink">{i + 1}.</span>
              <div>
                <h3 className="text-[1.3125rem] leading-tight font-semibold">{p.title}</h3>
                <p className="mt-2 text-[1.0625rem] leading-relaxed text-fg-2">{fr(p.text)}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="grain bg-charcoal py-[clamp(5rem,14vh,9rem)] text-paper" aria-labelledby="machines-title">
        <div className="container-page grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-eyebrow text-paper/60">Pour les moteurs et les assistants</p>
            <h2 id="machines-title" className="mt-4 text-headline">
              Lisible par les gens, <span className="serif-accent text-[#E2765C]">et par les robots</span>.
            </h2>
          </div>
          <div className="space-y-5 text-[1.0625rem] leading-relaxed text-paper/75 md:col-span-6 md:col-start-7">
            <p>
              {fr(
                "Chaque recette est décrite en données structurées (schema.org) : temps, ingrédients, étapes, valeurs nutritionnelles. C’est ce qui permet aux moteurs de recherche de l’afficher avec sa photo et son temps de préparation.",
              )}
            </p>
            <p>
              {fr("Pour les assistants comme ChatGPT, Claude ou Perplexity, il y a un index ")}
              <a href="/llms.txt" className="text-paper underline underline-offset-4">
                llms.txt
              </a>
              {fr(" et une version texte de chaque recette : il suffit d’ajouter « .md » à l’adresse, par exemple ")}
              <a href={`/recettes/${recipes[0].slug}.md`} className="text-paper underline underline-offset-4">
                /recettes/{recipes[0].slug}.md
              </a>
              .
            </p>
            <p>
              {fr(
                "Pas de publicité, pas de cookie, pas de traceur publicitaire. Les animations se coupent si votre appareil demande à réduire les mouvements.",
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-[clamp(4rem,12vh,8rem)]" aria-labelledby="credits-title">
        <h2 id="credits-title" className="text-title">
          Merci à eux
        </h2>
        <p className="mt-3 max-w-2xl text-fg-2">
          {fr(
            "Les photos viennent de Pexels et sont utilisées selon leur licence. Les caractères sont Fraunces, Instrument Sans, IBM Plex Mono et Caveat, tous sous licence libre.",
          )}
        </p>
        <ul className="mt-8 grid gap-x-10 border-t border-line-strong text-[0.9375rem] sm:grid-cols-2 lg:grid-cols-3">
          {recipes.flatMap((r) =>
            (["hero", "detail"] as const).map((k) => (
              <li key={`${r.slug}-${k}`} className="flex items-baseline border-b border-line py-3">
                <span className="text-fg-2">
                  {r.title}
                  {k === "detail" ? " (détail)" : ""}
                </span>
                <span className="leader" />
                <a
                  href={r.images.credits[k].url}
                  rel="noopener"
                  className="font-medium underline-offset-4 hover:underline"
                >
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
