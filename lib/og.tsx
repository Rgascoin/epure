import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { recipes } from "./recipes";

/*
 * Assets are read once at module scope: they don't depend on the request,
 * which lets Next.js prerender every OG image at build time.
 */
const fontDir = join(process.cwd(), "assets/fonts");
const [serif, serifItalic, sans, sansBold] = await Promise.all([
  readFile(join(fontDir, "fraunces-latin-400-normal.woff")),
  readFile(join(fontDir, "fraunces-latin-400-italic.woff")),
  readFile(join(fontDir, "instrument-sans-latin-500-normal.woff")),
  readFile(join(fontDir, "instrument-sans-latin-600-normal.woff")),
]);

/** Fonts for Open Graph images (OFL-licensed, vendored in /assets/fonts). */
export const ogFonts = [
  { name: "Fraunces", data: serif, weight: 400 as const, style: "normal" as const },
  { name: "Fraunces", data: serifItalic, weight: 400 as const, style: "italic" as const },
  { name: "Instrument Sans", data: sans, weight: 500 as const, style: "normal" as const },
  { name: "Instrument Sans", data: sansBold, weight: 600 as const, style: "normal" as const },
];

export const OG_COLORS = { paper: "#F2EDE4", ink: "#1B1712", ink2: "#4F473E", tomato: "#C6462B" };

const toDataUri = async (path: string) =>
  `data:image/jpeg;base64,${await readFile(join(process.cwd(), "public", path), "base64")}`;

/** Pre-encoded recipe photos: 4:3 for the recipe cards, 1:1 for the home thumbnails. */
export const ogPhotos = Object.fromEntries(
  await Promise.all(
    recipes.map(async (r) => [
      r.slug,
      {
        landscape: await toDataUri(`images/recipes/${r.slug}/4x3.jpg`),
        square: await toDataUri(`images/recipes/${r.slug}/1x1.jpg`),
      },
    ]),
  ),
) as Record<string, { landscape: string; square: string }>;

export const OG_SIZE = { width: 1200, height: 630 };

/** The Épure mark, drawn with plain divs (Satori-friendly). */
export function OgMark({ size = 44, dark = false }: { size?: number; dark?: boolean }) {
  const disc = dark ? OG_COLORS.paper : OG_COLORS.ink;
  const ring = dark ? OG_COLORS.ink : OG_COLORS.paper;
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        background: disc,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          width: size * 0.6,
          height: size * 0.6,
          borderRadius: 999,
          border: `${Math.max(2, size * 0.04)}px solid ${ring}`,
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: size * 0.42,
          top: size * 0.34,
          width: size * 0.25,
          height: size * 0.25,
          borderRadius: 999,
          background: "#F0B323",
        }}
      />
    </div>
  );
}
