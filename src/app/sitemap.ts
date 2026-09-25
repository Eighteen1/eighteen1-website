import type { MetadataRoute } from "next";
import { getAllPostsForSitemap, unlistedPosts } from "@/lib/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eighteen1.com";
  const unlistedSlugs = new Set(unlistedPosts.map((post) => post.slug));

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/projects",
    "/car-cult",
    "/contact",
    "/blog",
    "/privacy-policy",
    "/terms",
    "/delete-data",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/blog" || path === "/projects" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/projects" || path === "/blog" ? 0.9 : 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPostsForSitemap().map(
    (post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: unlistedSlugs.has(post.slug) ? 0.5 : 0.8,
    }),
  );

  return [...staticRoutes, ...blogRoutes];
}
