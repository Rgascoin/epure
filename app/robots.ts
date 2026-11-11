import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/lib/site";

/**
 * Search engines AND AI crawlers are explicitly welcome: being cited by
 * ChatGPT, Claude, Perplexity, Gemini or Copilot is a discovery channel in
 * itself. Preview deployments are fully disallowed to avoid duplicate content.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "DuckAssistBot",
  "MistralAI-User",
  "CCBot",
  "Meta-ExternalAgent",
  "Amazonbot",
];

export default function robots(): MetadataRoute.Robots {
  if (!site.indexable) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/markdown/"] },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: ["/markdown/"] },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
