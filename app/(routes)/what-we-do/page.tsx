import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import WhatWeDoContent from "./WhatWeDoClient";

export const metadata: Metadata = {
  title: "What We Do | Electrical Services, T&C & Installation \u2014 SP Power Engineers",
  description:
    "Explore SP Power Engineers' full range of services — transformer, OLTC, relay calibration, thermography, solar/wind plant testing & commissioning, switchyard, data center, mobility, and industrial installations across India.",
  keywords: [
    "electrical services India",
    "transformer services",
    "relay calibration",
    "solar plant testing commissioning",
    "wind power T&C",
    "switchyard commissioning",
    "data center installation",
    "industrial electrical installation",
    "what we do SP Power Engineers",
  ],
  openGraph: {
    title: "What We Do | SP Power Engineers Services",
    description:
      "Comprehensive electrical engineering services — testing, commissioning & installation for solar, wind, switchyard, data center, industrial plants.",
    url: `${siteConfig.url}/what-we-do`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "SP Power Engineers Services" }],
  },
  alternates: { canonical: `${siteConfig.url}/what-we-do` },
};

export default function WhatWeDoPage() {
  return <WhatWeDoContent />;
}
