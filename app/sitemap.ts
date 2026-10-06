import type { MetadataRoute } from "next";

const baseUrl = "https://dtgcleaning.nl";

const steden = [
  "nijkerk",
  "putten",
  "harderwijk",
  "barneveld",
  "ermelo",
  "voorthuizen",
];

interface RouteConfig {
  route: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}

export default function sitemap(): MetadataRoute.Sitemap {
  /* ✅ Elke route eindigt nu met een trailing slash
     om te matchen met de canonical URLs van elke pagina */
  const staticRoutes: RouteConfig[] = [
    { route: "/", priority: 1, changeFrequency: "weekly" },
    { route: "/schoonmaakdiensten/", priority: 0.9, changeFrequency: "monthly" },
    { route: "/werkgebied/", priority: 0.8, changeFrequency: "monthly" },
    { route: "/over-mij/", priority: 0.7, changeFrequency: "monthly" },
    { route: "/contact/", priority: 0.7, changeFrequency: "monthly" },
  ];

  const cityRoutes: RouteConfig[] = steden.map((stad) => ({
    route: `/werkgebied/${stad}/`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const allRoutes = [...staticRoutes, ...cityRoutes];

  const currentDate = new Date();

  return allRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }));
}
