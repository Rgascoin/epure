import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { recipes } from "./recipes";

/*
 * Assets are read once at module scope: they don't depend on the request,
 * which lets Next.js prerender every OG image at build time.
 */
const fontDir = join(process.cwd(), "assets/fonts");
const [medium, semibold, serif] = await Promise.all([
  readFile(join(fontDir, "inter-latin-500-normal.woff")),
  readFile(join(fontDir, "inter-latin-600-normal.woff")),
  readFile(join(fontDir, "instrument-serif-latin-400-italic.woff")),
]);

/** Fonts for Open Graph images (OFL-licensed, vendored in /assets/fonts). */
export const ogFonts = [
  { name: "Inter", data: medium, weight: 500 as const, style: "normal" as const },
  { name: "Inter", data: semibold, weight: 600 as const, style: "normal" as const },
  { name: "Instrument Serif", data: serif, weight: 400 as const, style: "italic" as const },
];

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
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.28,
        background: dark ? "#f5f5f7" : "#1d1d1f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: size * 0.53,
          height: size * 0.53,
          borderRadius: 999,
          border: `${size * 0.05}px solid ${dark ? "#000" : "#fbfbfd"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: size * 0.23, height: size * 0.23, borderRadius: 999, background: "#F0B323" }} />
      </div>
    </div>
  );
}
