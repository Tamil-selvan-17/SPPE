import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ContactPageClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Get a Quote \u2014 SP Power Engineers",
  description:
    "Contact SP Power Engineers for electrical engineering consultations, project quotes, transformer services, solar/wind plant commissioning, and switchyard installation. Based in Chennai, serving all of India.",
  keywords: [
    "contact SP Power Engineers",
    "electrical engineering quote",
    "electrical contractor Chennai contact",
    "get quote electrical services",
    "power engineering consultation",
  ],
  openGraph: {
    title: "Contact SP Power Engineers | Discuss Your Project",
    description:
      "Reach out to our engineering team for consultation and technical guidance. Get a quote for electrical testing, commissioning, or installation.",
    url: `${siteConfig.url}/contact`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Contact SP Power Engineers" }],
  },
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
