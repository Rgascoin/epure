import { recipes } from "@/lib/recipes";
import { absoluteUrl, site } from "@/lib/site";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** RSS 2.0 feed with Media RSS thumbnails — picked up by aggregators and Google Discover. */
export function GET() {
  const sorted = [...recipes].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
  const lastBuild = sorted.reduce((max, r) => (r.dateModified > max ? r.dateModified : max), sorted[0].dateModified);

  const items = sorted
    .map((r) => {
      const url = absoluteUrl(`/recettes/${r.slug}`);
      return `    <item>
      <title>${esc(r.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${esc(r.description)}</description>
      <category>${esc(r.category)}</category>
      <pubDate>${new Date(r.datePublished).toUTCString()}</pubDate>
      <media:content url="${absoluteUrl(r.seoImages[2])}" medium="image" type="image/jpeg" width="1600" height="900" />
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${esc(site.title)}</title>
    <link>${absoluteUrl("/")}</link>
    <description>${esc(site.description)}</description>
    <language>fr-FR</language>
    <lastBuildDate>${new Date(lastBuild).toUTCString()}</lastBuildDate>
    <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
