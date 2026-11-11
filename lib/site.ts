/**
 * Single source of truth for site-wide identity.
 *
 * The canonical origin resolves, in order:
 * 1. NEXT_PUBLIC_SITE_URL (set this once you own a custom domain)
 * 2. VERCEL_PROJECT_PRODUCTION_URL (injected automatically by Vercel at build)
 * 3. localhost for development
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const site = {
  name: "Épure",
  legalName: "Épure — cuisine essentielle",
  url: resolveSiteUrl(),
  locale: "fr_FR",
  lang: "fr",
  title: "Épure — Cinq recettes, à l’essentiel",
  tagline: "La cuisine, à l’essentiel.",
  description:
    "Cinq grands classiques de la cuisine française et italienne, réécrits avec précision : grammes exacts, temps justes, science expliquée et mode cuisine mains libres.",
  keywords: [
    "recettes de cuisine",
    "recette facile",
    "recette traditionnelle",
    "cuisine française",
    "carbonara",
    "bœuf bourguignon",
    "tian provençal",
    "tarte aux pommes",
    "mousse au chocolat",
  ],
  author: {
    name: "La rédaction d’Épure",
    url: "/a-propos",
  },
  themeColor: { light: "#fbfbfd", dark: "#000000" },
  /** Set to true only on the production deployment. */
  indexable: process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true,
} as const;

export const absoluteUrl = (path = "/") => `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
