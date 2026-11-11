import { Scribble } from "../scribble";

const LINES: Array<[string, string]> = [
  ["Portions ajustables", "oui"],
  ["Arrondis de cuisinier", "oui"],
  ["Minuteurs dans les étapes", "oui"],
  ["Mode cuisine plein écran", "oui"],
  ["Écran qui reste allumé", "oui"],
  ["Version imprimable", "oui"],
];
const NOPE: Array<[string, string]> = [
  ["Publicités", "0"],
  ["Pop-up", "0"],
  ["Cookies", "0"],
];

/** What the site does, printed on a kitchen order ticket. */
export function Ticket() {
  return (
    <section aria-labelledby="ticket-title" className="container-page py-[clamp(5rem,14vh,10rem)]">
      <div className="grid items-center gap-14 md:grid-cols-12">
        <div className="md:col-span-6 lg:col-span-5">
          <p className="text-eyebrow text-fg-3">Ce qu’il y a dedans</p>
          <h2 id="ticket-title" className="mt-4 text-headline">
            Pensé pour s’en servir les mains{" "}
            <span className="relative inline-block whitespace-nowrap">
              dans la farine
              <Scribble variant="underline" className="absolute -bottom-[0.1em] left-0 h-[0.2em] w-full text-accent" />
            </span>
            .
          </h2>
          <div className="mt-8 space-y-4 text-[1.0625rem] leading-relaxed text-fg-2">
            <p>
              On a ajouté ce qui sert vraiment au moment de cuisiner&#8239;: des portions qui se recalculent (et
              s’arrondissent comme on le ferait à la main, personne ne casse 2,67 œufs), des minuteurs directement dans
              les étapes, et un mode plein écran qui empêche le téléphone de se mettre en veille.
            </p>
            <p>Le reste, on l’a laissé dehors.</p>
          </div>
        </div>

        <div className="relative flex justify-center md:col-span-6 lg:col-span-6 lg:col-start-7">
          {/* The slot the ticket comes out of */}
          <div aria-hidden className="absolute top-0 h-3 w-[min(92%,400px)] rounded-full bg-fg/85 shadow-inner" />
          <div className="ticket-print w-[min(86%,360px)] pt-1.5">
            <div className="ticket -rotate-[1.5deg] px-5 pt-9 pb-10 font-mono text-[0.75rem] leading-[1.9] shadow-[var(--shadow-float)] sm:px-7 sm:text-[0.8125rem]">
              <p className="text-center text-[0.9375rem] font-medium tracking-[0.2em]">ÉPURE</p>
              <p className="text-center text-[0.75rem] text-[#6b6155]">carnet de cuisine · table 5</p>
              <p className="mt-4 border-t border-dashed border-[#1b1712]/40 pt-3 text-[0.75rem] text-[#6b6155]">
                COUVERTS · AU CHOIX
              </p>
              <ul className="mt-1">
                {LINES.map(([k, v]) => (
                  <li key={k} className="flex items-baseline">
                    <span>{k}</span>
                    <span className="leader border-[#1b1712]/35" />
                    <span className="font-medium">{v}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-3 border-t border-dashed border-[#1b1712]/40 pt-3">
                {NOPE.map(([k, v]) => (
                  <li key={k} className="flex items-baseline">
                    <span>{k}</span>
                    <span className="leader border-[#1b1712]/35" />
                    <span className="font-medium">{v}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 flex justify-between border-t-2 border-[#1b1712] pt-3 text-[0.9375rem] font-medium">
                <span>TOTAL</span>
                <span>5 recettes</span>
              </p>
              <p className="mt-6 -rotate-2 text-center hand text-[1.75rem] text-[#c6462b]">merci, et bon appétit !</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
