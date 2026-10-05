import type { MetadataRoute } from "next";

const baseUrl = "https://dtgcleaning.nl";

interface RouteConfig {
  route: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: RouteConfig[] = [
    { route: "/", priority: 1.0, changeFrequency: "weekly" },
    { route: "/schoonmaakdiensten", priority: 0.9, changeFrequency: "monthly" },
    { route: "/werkgebied", priority: 0.8, changeFrequency: "monthly" },
    { route: "/over-mij", priority: 0.7, changeFrequency: "monthly" },
    { route: "/contact", priority: 0.7, changeFrequency: "monthly" },
  ];

  const currentDate = new Date();

  return routes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }));
}
