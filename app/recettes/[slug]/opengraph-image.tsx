import { ImageResponse } from "next/og";
import { getRecipe, recipes } from "@/lib/recipes";
import { formatDuration, plural } from "@/lib/format";
import { OG_COLORS, OG_SIZE, OgMark, ogFonts, ogPhotos } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Recette Épure";

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getRecipe(slug);
  if (!r) return new Response("Not found", { status: 404 });
  const n = recipes.findIndex((x) => x.slug === r.slug) + 1;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: OG_COLORS.paper,
        color: OG_COLORS.ink,
        fontFamily: "Instrument Sans",
        padding: "48px 56px",
        gap: 48,
      }}
    >
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <OgMark size={38} />
          <div style={{ fontFamily: "Fraunces", fontSize: 30, letterSpacing: -1 }}>Épure</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 18, letterSpacing: 2, color: r.theme.ink }}>
            {`N° 0${n} · ${r.category.toUpperCase()} · CUISINE ${r.cuisine.toUpperCase()}`}
          </div>
          <div style={{ fontFamily: "Fraunces", fontSize: 76, lineHeight: 1, letterSpacing: -2.5, marginTop: 16 }}>
            {r.title}
          </div>
          <div
            style={{ fontFamily: "Fraunces", fontStyle: "italic", fontSize: 38, color: OG_COLORS.ink2, marginTop: 16 }}
          >
            {r.tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 36,
            fontSize: 22,
            borderTop: `2px dashed ${OG_COLORS.ink2}`,
            paddingTop: 16,
          }}
        >
          <span>{formatDuration(r.totalMinutes)}</span>
          <span>{r.difficulty}</span>
          <span>{`${r.servings} ${plural(r.servings, r.servingsLabel)}`}</span>
        </div>
      </div>
      <img
        src={ogPhotos[r.slug].landscape}
        alt=""
        width={420}
        height={534}
        style={{ width: 420, height: 534, objectFit: "cover", borderRadius: "210px 210px 18px 18px" }}
      />
    </div>,
    { ...size, fonts: ogFonts },
  );
}
