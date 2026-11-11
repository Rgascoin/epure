import type { Metadata, Viewport } from "next";
import { Caveat, Fraunces, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Providers } from "@/components/providers";
import { site } from "@/lib/site";
import "./globals.css";

// Display: Fraunces, a soft "old style" serif with optical sizes.
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

// Its italic, for accents only: loaded on demand rather than preloaded.
const frauncesItalic = Fraunces({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-fraunces-italic",
  display: "swap",
  preload: false,
});

// Text & UI.
const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

// Handwritten margin notes (below the fold: not preloaded).
const caveat = Caveat({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-caveat",
  display: "swap",
  preload: false,
});

// Catalogue labels and the kitchen ticket.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s · Épure" },
  description: site.description,
  applicationName: site.name,
  keywords: [...site.keywords],
  authors: [{ name: site.author.name, url: site.author.url }],
  creator: site.name,
  publisher: site.name,
  category: "food",
  formatDetection: { telephone: false, address: false, email: false },
  alternates: {
    types: { "application/rss+xml": [{ url: "/feed.xml", title: "Épure, les nouvelles recettes" }] },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  robots: {
    index: site.indexable,
    follow: site.indexable,
    googleBot: {
      index: site.indexable,
      follow: site.indexable,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  appleWebApp: { title: site.name, statusBarStyle: "black-translucent", capable: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: site.themeColor.light },
    { media: "(prefers-color-scheme: dark)", color: site.themeColor.dark },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      dir="ltr"
      className={`${fraunces.variable} ${frauncesItalic.variable} ${instrument.variable} ${caveat.variable} ${plexMono.variable}`}
    >
      <body className="min-h-dvh">
        <Providers>
          <SiteHeader />
          <main id="contenu">{children}</main>
          <SiteFooter />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
