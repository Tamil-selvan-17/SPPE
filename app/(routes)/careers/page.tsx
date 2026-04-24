import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import CareersPageClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers | Join Our Team \u2014 SP Power Engineers",
  description:
    "Join the SP Power Engineers team. We are always looking for passionate electrical engineers, technicians, and professionals to grow with us. Apply today.",
  keywords: [
    "electrical engineering jobs",
    "careers SP Power Engineers",
    "electrical technician jobs Chennai",
    "power engineering careers India",
    "EA grade contractor jobs",
    "electrical contractor employment",
  ],
  openGraph: {
    title: "Careers at SP Power Engineers | Join Our Team",
    description:
      "Looking for electrical engineering roles in India? Apply to join SP Power Engineers — EA Grade licensed, ISO certified, growing team.",
    url: `${siteConfig.url}/careers`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Careers at SP Power Engineers" }],
  },
  alternates: { canonical: `${siteConfig.url}/careers` },
};

export default function CareersPage() {
  return <CareersPageClient />;
}
