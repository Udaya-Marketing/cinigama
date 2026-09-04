import { MetadataRoute } from "next";
import { STORIES } from "@/data/stories";
import { JOURNAL_ARTICLES } from "@/data/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cinigama.com";

  const staticRoutes = [
    "",
    "/stories",
    "/services",
    "/about",
    "/journal",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const storyRoutes = STORIES.map((s) => ({
    url: `${baseUrl}/stories/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const journalRoutes = JOURNAL_ARTICLES.map((j) => ({
    url: `${baseUrl}/journal/${j.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...storyRoutes, ...journalRoutes];
}
