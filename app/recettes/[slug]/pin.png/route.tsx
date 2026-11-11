import { ImageResponse } from "next/og";
import { getRecipe, recipes } from "@/lib/recipes";
import { formatDuration, plural } from "@/lib/format";
import { PRODUCTION_URL } from "@/lib/site";
import { OG_COLORS, OgMark, ogFonts, ogPhotos } from "@/lib/og";

/**
 * Pinterest pin (1000 × 1500, the 2:3 format Pinterest favours): the photo in
 * its arch, the title and the key facts. Prerendered for every recipe.
 * /recettes/<slug>/pin.png
 */
export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

const domain = PRODUCTION_URL.replace(/^https:\/\/(www\.)?/, "");

export async function GET(_request: Request, { params }: RouteContext<"/recettes/[slug]/pin.png">) {
  const { slug } = await params;
  const r = getRecipe(slug);
  if (!r) return new Response("Not found", { status: 404 });

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: OG_COLORS.paper,
        color: OG_COLORS.ink,
        fontFamily: "Instrument Sans",
        padding: "56px 64px 48px",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img> */}
      <img
        src={ogPhotos[r.slug].square}
        alt=""
        width={872}
        height={920}
        style={{ width: 872, height: 920, objectFit: "cover", borderRadius: "436px 436px 22px 22px" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginTop: 40,
          flex: 1,
          width: "100%",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 3, color: r.theme.ink }}>
          {`RECETTE · ${r.category.toUpperCase()}`}
        </div>
        <div
          style={{
            fontFamily: "Fraunces",
            fontSize: r.title.length > 22 ? 76 : 92,
            lineHeight: 1,
            letterSpacing: -2.5,
            marginTop: 18,
            maxWidth: 860,
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {r.title}
        </div>
        <div
          style={{ fontFamily: "Fraunces", fontStyle: "italic", fontSize: 38, color: OG_COLORS.ink2, marginTop: 18 }}
        >
          {r.tagline}
        </div>
        <div style={{ display: "flex", gap: 30, fontSize: 26, marginTop: 30, color: OG_COLORS.ink }}>
          <span>{formatDuration(r.totalMinutes)}</span>
          <span>·</span>
          <span>{r.difficulty}</span>
          <span>·</span>
          <span>{`${r.servings} ${plural(r.servings, r.servingsLabel)}`}</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          borderTop: `2px dashed ${OG_COLORS.ink2}`,
          paddingTop: 22,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <OgMark size={34} />
        <div style={{ fontFamily: "Fraunces", fontSize: 30, letterSpacing: -1 }}>Épure</div>
        <div style={{ fontSize: 24, color: OG_COLORS.ink2, marginLeft: 8 }}>{`· ${domain}`}</div>
      </div>
    </div>,
    { width: 1000, height: 1500, fonts: ogFonts },
  );
}
