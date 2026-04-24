import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const BASE = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                              lastModified: now, changeFrequency: "weekly",  priority: 1.0  },
    { url: `${BASE}/about`,                   lastModified: now, changeFrequency: "monthly", priority: 0.9  },
    { url: `${BASE}/what-we-do`,              lastModified: now, changeFrequency: "weekly",  priority: 0.9  },
    { url: `${BASE}/our-works`,               lastModified: now, changeFrequency: "monthly", priority: 0.8  },
    { url: `${BASE}/contact`,                 lastModified: now, changeFrequency: "yearly",  priority: 0.8  },
    { url: `${BASE}/careers`,                 lastModified: now, changeFrequency: "monthly", priority: 0.7  },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = [
    "transformer",
    "oltc-service",
    "relay-calibration",
    "thermography",
    "acb-service",
    "vcb-service",
    "meter-calibration",
    "power-quality-analysis",
    "earth-pit",
    "power-factor-correction",
    "solar-plant-tc",
    "wind-power-tc",
    "thermal-power-plant-tc",
    "mobility-tc",
    "switch-yard-tc",
    "data-center-tc",
    "industrial-tc",
    "gas-insulator-substations",
    "solar-plant-installation",
    "wind-power-installation",
    "mobility-installation",
    "switch-yard-installation",
    "data-center-installation",
    "commercial-installation",
  ].map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
