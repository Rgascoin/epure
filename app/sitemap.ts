import type { MetadataRoute } from "next";
import { categories, categoryPath, recipes, recipesIn } from "@/lib/recipes";
import { collectionPath, publishedCollections, recipesInCollection } from "@/lib/collections";
import { absoluteUrl } from "@/lib/site";

/** XML sitemap with image extensions (Google Images is a major entry point for recipes). */
export default function sitemap(): MetadataRoute.Sitemap {
  const latest = recipes.reduce((max, r) => (r.dateModified > max ? r.dateModified : max), recipes[0].dateModified);

  return [
    {
      url: absoluteUrl("/"),
      lastModified: latest,
      changeFrequency: "weekly",
      priority: 1,
      images: recipes.map((r) => absoluteUrl(r.seoImages[2])),
    },
    {
      url: absoluteUrl("/recettes"),
      lastModified: latest,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...categories
      .filter((c) => recipesIn(c).length)
      .map((c) => ({
        url: absoluteUrl(categoryPath(c)),
        lastModified: recipesIn(c).reduce((max, r) => (r.dateModified > max ? r.dateModified : max), "2000-01-01"),
        changeFrequency: "weekly" as const,
        priority: 0.85,
      })),
    {
      url: absoluteUrl("/collections"),
      lastModified: latest,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...publishedCollections().map((c) => ({
      url: absoluteUrl(collectionPath(c)),
      lastModified: recipesInCollection(c).reduce(
        (max, r) => (r.dateModified > max ? r.dateModified : max),
        "2000-01-01",
      ),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...recipes.map((r) => ({
      url: absoluteUrl(`/recettes/${r.slug}`),
      lastModified: r.dateModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: r.seoImages.map((p) => absoluteUrl(p)),
    })),
    {
      url: absoluteUrl("/a-propos"),
      lastModified: latest,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
