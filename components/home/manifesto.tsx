import { Scribble } from "../scribble";

/** A small, opinionated paragraph, with a highlighter and a pen. */
export function Manifesto() {
  return (
    <section aria-label="Notre façon de faire" className="container-page py-[clamp(5rem,15vh,11rem)]">
      <div className="grid gap-10 md:grid-cols-12">
        <p className="text-eyebrow text-fg-3 md:col-span-3 md:pt-4">Le parti pris</p>
        <div className="md:col-span-9">
          <p className="font-display text-[clamp(1.85rem,3.9vw,3.5rem)] leading-[1.14] font-[380] tracking-[-0.02em] [font-variation-settings:'SOFT'_80]">
            Sur internet, une recette de carbonara commence souvent par trois paragraphes sur la Toscane. La carbonara
            est{" "}
            <span className="relative inline-block">
              romaine
              <Scribble variant="circle" className="absolute -inset-x-[0.35em] -inset-y-[0.3em] text-accent" />
            </span>{" "}
            <span className="inline-block -rotate-3 hand text-[0.72em] text-ink">(et sans crème)</span>. Chez nous, la
            recette <span className="marker">commence par les grammes</span>, et l’histoire vient après, pour ceux que
            ça intéresse.
          </p>
          <p className="mt-10 max-w-xl text-[1.0625rem] leading-relaxed text-fg-2">
            Chaque page suit le même ordre&#8239;: ce qu’il faut savoir en deux phrases, les ingrédients, les étapes
            avec leurs minuteurs, puis le pourquoi, les ratés possibles et les variantes.
          </p>
        </div>
      </div>
    </section>
  );
}
