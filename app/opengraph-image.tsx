import { ImageResponse } from "next/og";
import { recipes } from "@/lib/recipes";
import { OG_COLORS, OG_SIZE, OgMark, ogFonts, ogPhotos } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Épure, un carnet de cinq recettes au gramme près";

export default function Image() {
  const thumbs = recipes.slice(0, 3).map((r) => ogPhotos[r.slug].square);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: OG_COLORS.paper,
        color: OG_COLORS.ink,
        fontFamily: "Instrument Sans",
        padding: "56px 64px",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <OgMark size={44} />
          <div style={{ fontFamily: "Fraunces", fontSize: 34, letterSpacing: -1 }}>Épure</div>
        </div>
        <div style={{ fontSize: 18, letterSpacing: 2, color: OG_COLORS.ink2 }}>CARNET DE CUISINE · N° 1</div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Fraunces",
          fontSize: 92,
          lineHeight: 1,
          letterSpacing: -3,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          Cinq
          <img
            src={thumbs[0]}
            alt=""
            width={150}
            height={72}
            style={{ width: 150, height: 72, borderRadius: 999, objectFit: "cover" }}
          />
          recettes qu’on
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 22, marginTop: 8 }}>
          a pris
          <img
            src={thumbs[1]}
            alt=""
            width={150}
            height={72}
            style={{ width: 150, height: 72, borderRadius: 999, objectFit: "cover" }}
          />
          le temps
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 22, marginTop: 8 }}>
          <span style={{ fontStyle: "italic", color: OG_COLORS.tomato }}>d’écrire.</span>
          <img
            src={thumbs[2]}
            alt=""
            width={150}
            height={72}
            style={{ width: 150, height: 72, borderRadius: 999, objectFit: "cover" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", fontSize: 22, color: OG_COLORS.ink2, gap: 26 }}>
        <span>carbonara</span>
        <span>bœuf bourguignon</span>
        <span>tian provençal</span>
        <span>tarte aux pommes</span>
        <span>mousse au chocolat</span>
      </div>
    </div>,
    { ...size, fonts: ogFonts },
  );
}
