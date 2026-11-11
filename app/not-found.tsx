import type { Metadata } from "next";
import Link from "next/link";
import { recipes } from "@/lib/recipes";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[80svh] flex-col items-center justify-center pt-[var(--header-h)] text-center">
      <p className="intro-fade text-eyebrow text-fg-3">Erreur 404</p>
      <h1 className="mt-4 text-display">
        Pas au <span className="serif-accent text-ink">menu</span>.
      </h1>
      <p className="intro-fade mt-5 max-w-md text-lede text-fg-2" style={{ ["--d" as string]: "300ms" }}>
        Cette page n’existe pas (ou plus). Les cinq recettes, elles, sont toujours là.
      </p>
      <ul className="intro-fade mt-10 flex flex-wrap justify-center gap-2" style={{ ["--d" as string]: "450ms" }}>
        {recipes.map((r) => (
          <li key={r.slug}>
            <Link href={`/recettes/${r.slug}`} className="btn btn-ghost h-10 px-4 text-[0.9375rem]">
              {r.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" className="link-arrow mt-10">
        Retour à l’accueil <ArrowRight size={18} />
      </Link>
    </section>
  );
}
