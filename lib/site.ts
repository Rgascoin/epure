/** The production origin. Vercel redirects the bare domain to www. */
export const PRODUCTION_URL = "https://www.epure-cuisine.fr";

/**
 * Single source of truth for site-wide identity.
 *
 * The canonical origin resolves, in order:
 * 1. NEXT_PUBLIC_SITE_URL (explicit override)
 * 2. PRODUCTION_URL for production deployments on Vercel
 * 3. the deployment's own URL (previews), then localhost for development
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_ENV === "production") return PRODUCTION_URL;
  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const site = {
  name: "Épure",
  legalName: "Épure, carnet de cuisine",
  url: resolveSiteUrl(),
  locale: "fr_FR",
  lang: "fr",
  title: "Épure · Recettes de cuisine au gramme près, expliquées",
  tagline: "Un carnet de recettes, écrites au gramme près.",
  description:
    "Les grands classiques de la cuisine, écrits au gramme près : temps exacts, gestes expliqués, ce qu’il faut faire quand ça rate, et un mode cuisine.",
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
  themeColor: { light: "#f2ede4", dark: "#14110e" },
  /** Only the production deployment is indexable. */
  indexable: process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true,
} as const;

export const absoluteUrl = (path = "/") => `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
