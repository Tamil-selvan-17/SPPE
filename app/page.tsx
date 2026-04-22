import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { OurWorksSection } from "@/components/sections/OurWorksSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TrustedPartnersSection } from "@/components/sections/TrustedPartnersSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Where Power Meets Precision`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OurWorksSection />
      <WhyChooseUs />
      <TrustedPartnersSection />
      <WhatWeDoSection />
    </>
  );
}
