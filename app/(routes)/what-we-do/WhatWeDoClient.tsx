"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { FadeIn } from "@/components/ui/FadeIn";

const tabs = ["Services", "Testing & Commissioning", "Installation"];

const serviceGroups = {
  "Services": [
    { title: "Transformer Services",       desc: "Description", href: "/services/transformer" },
    { title: "OLTC Service",               desc: "Description", href: "/services/oltc-service" },
    { title: "Relay Calibration Service",  desc: "Description", href: "/services/relay-calibration" },
    { title: "Thermography Services",      desc: "Description", href: "/services/thermography" },
    { title: "ACB Services",               desc: "Description", href: "/services/acb-service" },
    { title: "VCB Services",               desc: "Description", href: "/services/vcb-service" },
    { title: "Meter Calibration Service",  desc: "Description", href: "/services/meter-calibration" },
    { title: "Power Quality Analysis",     desc: "Description", href: "/services/power-quality-analysis" },
    { title: "Earth Pit Service",          desc: "Description", href: "/services/earth-pit" },
    { title: "Power Factor Correction",    desc: "Description", href: "/services/power-factor-correction" },
    { title: "Harmonic Studies",           desc: "Description", href: "/services/harmonic-studies" },
  ],
  "Testing & Commissioning": [
    { title: "Solar Power Plant",          desc: "Description", href: "/services/solar-plant-tc" },
    { title: "Wind Power Plant",           desc: "Description", href: "/services/wind-power-tc" },
    { title: "Thermal Power Plant",        desc: "Description", href: "/services/thermal-power-plant-tc" },
    { title: "Mobility",                   desc: "Description", href: "/services/mobility-tc" },
    { title: "Switch Yard",               desc: "Description", href: "/services/switch-yard-tc" },
    { title: "Data Center",               desc: "Description", href: "/services/data-center-tc" },
    { title: "Industrial",                desc: "Description", href: "/services/industrial-tc" },
    { title: "Gas Insulator Substations", desc: "Description", href: "/services/gas-insulator-substations" },
  ],
  "Installation": [
    { title: "Solar Plant Installation",  desc: "Description", href: "/services/solar-plant-installation" },
    { title: "Wind Plant Installation",   desc: "Description", href: "/services/wind-power-installation" },
    { title: "Mobility Installation",     desc: "Description", href: "/services/mobility-installation" },
    { title: "Industrial Installation",   desc: "Description", href: "/services/industrial-tc" },
    { title: "Switch Yard Installation",  desc: "Description", href: "/services/switch-yard-installation" },
    { title: "Data Center Installation",  desc: "Description", href: "/services/data-center-installation" },
  ],
};

function WhatWeDoContent() {
  const [activeTab, setActiveTab] = useState("Services");
  const searchParams = useSearchParams();

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (tabParam === "services")     setActiveTab("Services");
    else if (tabParam === "tc")      setActiveTab("Testing & Commissioning");
    else if (tabParam === "installation") setActiveTab("Installation");
  }, [searchParams]);

  const currentServices = serviceGroups[activeTab as keyof typeof serviceGroups] || serviceGroups["Services"];

  return (
    <>
      {/* Hero */}
      <FadeIn>
        <section className="bg-[#00286D] pt-32 pb-20 px-4 md:px-8 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <FadeIn direction="left" delay={0.05}>
                  <div className="text-[#9DEF06] font-bold text-sm tracking-widest uppercase mb-4">What We do</div>
                  <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-6">
                    Our Case study<br /><span className="text-[#9DEF06]">Where ideas turn into proven results</span>
                  </h1>
                </FadeIn>
                <FadeIn direction="left" delay={0.2}>
                  <p className="text-white/70 text-base leading-relaxed mb-8">Explore how we transform ideas into measurable results.</p>
                  <Link href="/our-works" className="bg-[#9DEF06] text-[#00286D] font-bold px-8 py-3.5 rounded-full hover:bg-[#8ae000] transition-all duration-300 inline-flex items-center gap-2 text-sm">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </FadeIn>
              </div>
              <FadeIn direction="right" delay={0.2} className="relative hidden lg:block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                  <img loading="lazy" src="/images/placeholder.png" alt="What We Do — SP Power Engineers Services" className="w-full h-full object-cover opacity-60" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Services Tabs */}
      <FadeIn delay={0.2}>
        <section className="py-20 px-4 md:px-8 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <div className="text-[#9DEF06] font-bold text-sm tracking-widest uppercase mb-3">What we do</div>
              <h2 className="text-[#00286D] font-black text-3xl md:text-4xl mb-3">Explore Our Range of Service Solutions</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">Discover solutions designed to support your goals with precision, reliability, and a commitment to long-term performance.</p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-[#00286D] text-white"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {currentServices.map((service, i) => (
                <FadeIn key={service.href} direction="up" delay={i * 0.06}>
                  <div className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="aspect-[16/9] bg-gray-100">
                      <img loading="lazy" src="/images/placeholder.png" alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-[#00286D] font-bold text-base mb-1">{service.title}</h3>
                      <p className="text-gray-400 text-xs mb-4">Professional electrical engineering services</p>
                      <Link href={service.href} className="bg-[#9DEF06] text-[#00286D] font-bold px-4 py-2 rounded-full text-xs inline-flex items-center gap-1 hover:bg-[#8ae000] transition-colors">
                        Get Quote <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Clients */}
            <FadeIn direction="up" delay={0.3}>
              <div className="mt-16 text-center">
                <div className="text-[#9DEF06] font-bold text-sm tracking-widest uppercase mb-6">Our Reliable Clients</div>
                <div className="flex flex-wrap justify-center gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="w-28 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                      <img loading="lazy" src="/images/placeholder.png" alt={`Client ${i}`} className="w-full h-full object-cover rounded-xl opacity-40" />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </FadeIn>
    </>
  );
}

export default function WhatWeDoClientPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <WhatWeDoContent />
    </Suspense>
  );
}
