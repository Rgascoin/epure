import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  typedRoutes: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 80, 90],
    deviceSizes: [640, 828, 1080, 1280, 1600, 1920, 2400],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async redirects() {
    return [{ source: "/categories", destination: "/recettes", permanent: true }];
  },
  async rewrites() {
    return {
      beforeFiles: [
        // Markdown twins of every recipe, for AI agents and LLM crawlers:
        // /recettes/spaghetti-carbonara.md
        {
          source: "/recettes/:slug.md",
          destination: "/markdown/:slug",
        },
        // Content negotiation: `Accept: text/markdown` gets Markdown too.
        {
          source: "/recettes/:slug",
          destination: "/markdown/:slug",
          has: [{ type: "header", key: "accept", value: "(.*)text/markdown(.*)" }],
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
