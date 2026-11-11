import { ImageResponse } from "next/og";
import { recipes } from "@/lib/recipes";
import { OG_SIZE, OgMark, ogFonts, ogPhotos } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Épure — Cinq recettes, à l’essentiel";

export default function Image() {
  const thumbs = recipes.map((r) => ogPhotos[r.slug].square);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#000",
        backgroundImage: "radial-gradient(circle at 50% 120%, #F0B32355, transparent 55%)",
        color: "white",
        fontFamily: "Inter",
        padding: "54px 60px 60px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <OgMark size={40} dark />
        <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.8 }}>Épure</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ fontSize: 96, fontWeight: 600, letterSpacing: -4.5, lineHeight: 1 }}>La cuisine,</div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 96,
            fontWeight: 600,
            letterSpacing: -4.5,
            lineHeight: 1.05,
          }}
        >
          à l’
          <span
            style={{
              fontFamily: "Instrument Serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#F0B323",
              letterSpacing: -2,
            }}
          >
            essentiel
          </span>
          .
        </div>
      </div>
      <div style={{ display: "flex", gap: 18 }}>
        {thumbs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            width={118}
            height={118}
            style={{
              width: 118,
              height: 118,
              borderRadius: 999,
              objectFit: "cover",
              border: "3px solid rgba(255,255,255,0.12)",
            }}
          />
        ))}
      </div>
    </div>,
    { ...size, fonts: ogFonts },
  );
}
