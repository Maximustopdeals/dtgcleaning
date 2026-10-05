import type { MetadataRoute } from "next";

const baseUrl = "https://dtgcleaning.nl";

// Lijst met alle steden in het werkgebied
// Als je een stad toevoegt of verwijdert, pas je het hier aan.
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
  // 1. De vaste pagina's
  const staticRoutes: RouteConfig[] = [
    { route: "/", priority: 1.0, changeFrequency: "weekly" },
    { route: "/schoonmaakdiensten", priority: 0.9, changeFrequency: "monthly" },
    { route: "/werkgebied", priority: 0.8, changeFrequency: "monthly" },
    { route: "/over-mij", priority: 0.7, changeFrequency: "monthly" },
    { route: "/contact", priority: 0.7, changeFrequency: "monthly" },
  ];

  // 2. De dynamische werkgebied-pagina's per stad
  const cityRoutes: RouteConfig[] = steden.map((stad) => ({
    route: `/werkgebied/${stad}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  // 3. Combineer alles tot één lijst
  const allRoutes = [...staticRoutes, ...cityRoutes];

  const currentDate = new Date();

  return allRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }));
}
