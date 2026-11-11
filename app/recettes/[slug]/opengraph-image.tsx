import { ImageResponse } from "next/og";
import { getRecipe, recipes } from "@/lib/recipes";
import { formatDuration, plural } from "@/lib/format";
import { OG_SIZE, OgMark, ogFonts, ogPhotos } from "@/lib/og";

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
  const photo = ogPhotos[r.slug].landscape;

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: r.theme.deep, fontFamily: "Inter" }}>
      <img src={photo} alt="" width={560} height={630} style={{ width: 560, height: 630, objectFit: "cover" }} />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 60px",
          color: "white",
          backgroundImage: `radial-gradient(circle at 100% 0%, ${r.theme.accent}55, transparent 60%)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <OgMark size={40} dark />
          <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.8 }}>Épure</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, fontWeight: 500, color: "rgba(255,255,255,0.6)" }}>
            {`${r.category} · Cuisine ${r.cuisine.toLowerCase()}`}
          </div>
          <div style={{ fontSize: 68, fontWeight: 600, lineHeight: 1, letterSpacing: -3, marginTop: 14 }}>
            {r.title}
          </div>
          <div
            style={{
              fontFamily: "Instrument Serif",
              fontStyle: "italic",
              fontSize: 42,
              color: r.theme.accent,
              marginTop: 14,
            }}
          >
            {r.tagline}
          </div>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 22, fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>
          <span>{formatDuration(r.totalMinutes)}</span>
          <span>{r.difficulty}</span>
          <span>{`${r.servings} ${plural(r.servings, r.servingsLabel)}`}</span>
        </div>
      </div>
    </div>,
    { ...size, fonts: ogFonts },
  );
}
