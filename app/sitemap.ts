import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://synchub.studio";
  const currentDate = new Date();

  // Active pages shown in UI navigation (menu & footer)
  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never";
  }> = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/about-us", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/works-simple", priority: 0.8, changeFrequency: "weekly" },
    { path: "/works-masonry", priority: 0.7, changeFrequency: "weekly" },
    { path: "/project-details", priority: 0.7, changeFrequency: "monthly" },
    // Inactive pages commented out (not shown on UI):
    // { path: "/pricing", priority: 0.7, changeFrequency: "monthly" },
    // { path: "/team", priority: 0.6, changeFrequency: "monthly" },
    // { path: "/about-me", priority: 0.6, changeFrequency: "monthly" },
    { path: "/blog-standard", priority: 0.7, changeFrequency: "weekly" },
    { path: "/blog-creative", priority: 0.7, changeFrequency: "weekly" },
    { path: "/blog-article", priority: 0.6, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
