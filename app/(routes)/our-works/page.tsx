import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Works | Project Portfolio — SP Power Engineers",
  description:
    "Explore SP Power Engineers' project portfolio — solar plant installations, wind power T&C, switchyard commissioning, data center projects, and industrial electrical works across India.",
  keywords: [
    "electrical project portfolio",
    "solar plant installation India",
    "wind power commissioning",
    "switchyard installation",
    "data center electrical",
    "industrial electrical projects",
    "SP Power Engineers works",
  ],
  openGraph: {
    title: "Our Works | SP Power Engineers Project Portfolio",
    description:
      "Real projects across solar, wind, switchyard, data center, industrial, and mobility — SP Power Engineers delivers results.",
    url: `${siteConfig.url}/our-works`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "SP Power Engineers Projects" }],
  },
  alternates: { canonical: `${siteConfig.url}/our-works` },
};

const projects = [
  { title: "Solar Power Plant Installation", category: "Solar", location: "Tamil Nadu", type: "Installation" },
  { title: "Wind Power Plant T&C", category: "Wind", location: "Rajasthan", type: "T&C" },
  { title: "Data Center Commissioning", category: "Data Center", location: "Chennai", type: "T&C" },
  { title: "Switchyard Installation", category: "Switchyard", location: "Maharashtra", type: "Installation" },
  { title: "Industrial Plant T&C", category: "Industrial", location: "Gujarat", type: "T&C" },
  { title: "Mobility EV Infrastructure", category: "Mobility", location: "Bangalore", type: "Installation" },
  { title: "Thermal Power Plant T&C", category: "Thermal", location: "Andhra Pradesh", type: "T&C" },
  { title: "GIS Substation", category: "GIS", location: "Karnataka", type: "T&C" },
  { title: "Commercial Electrical Installation", category: "Commercial", location: "Chennai", type: "Installation" },
];

export default function OurWorksPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 px-4 md:px-8 lg:px-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            loading="lazy" 
            src="/images/placeholder.png" 
            alt="Our Works — SP Power Engineers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#00286D]/80" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-block bg-[#9DEF06]/20 backdrop-blur-sm border border-[#9DEF06]/30 text-[#9DEF06] font-bold text-xs px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              Our Works
            </div>
          </FadeIn>
          
          <div className="max-w-3xl mx-auto">
            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-white font-black text-4xl md:text-6xl leading-tight mb-6 drop-shadow-lg">
                Projects That Speak for Themselves
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3}>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed font-medium">
                Our track record is built on delivering real results — strengthening operations, improving reliability, and meeting expectations every time across India.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <FadeIn delay={0.2}>
        <section className="py-20 px-4 md:px-8 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <div key={i} className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                    <img loading="lazy" src="/images/placeholder.png" alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#9DEF06] bg-[#00286D] px-3 py-1 rounded-full">{project.type}</span>
                      <span className="text-xs text-gray-400 font-medium">{project.location}</span>
                    </div>
                    <h3 className="text-[#00286D] font-bold text-base mb-1">{project.title}</h3>
                    <p className="text-gray-400 text-xs">{project.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>


    </>
  );
}
