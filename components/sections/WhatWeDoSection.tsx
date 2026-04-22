"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tabs = ["Electrical Services", "Installation", "Electrical Testing & Commissioning"];

const services = {
  "Electrical Services": [
    { title: "Transformer Services", href: "/services/transformer" },
    { title: "OLTC Service", href: "/services/oltc-service" },
    { title: "Relay Calibration Service", href: "/services/relay-calibration" },
    { title: "Thermography Services", href: "/services/thermography" },
    { title: "ACB Services", href: "/services/acb-service" },
    { title: "VCB Services", href: "/services/vcb-service" },
    { title: "Meter Calibration Service", href: "/services/meter-calibration" },
    { title: "Power Quality Analysis", href: "/services/power-quality-analysis" },
    { title: "Earth Pit Service", href: "/services/earth-pit" },
    { title: "Power Factor Correction", href: "/services/power-factor-correction" },
  ],
  "Installation": [
    { title: "Solar Plant Installation", href: "/services/solar-plant-installation" },
    { title: "Wind Plant Installation", href: "/services/wind-power-installation" },
    { title: "Mobility Installation", href: "/services/mobility-installation" },
    { title: "Switch Yard Installation", href: "/services/switch-yard-installation" },
    { title: "Data Center Installation", href: "/services/data-center-installation" },
    { title: "Commercial Installation", href: "/services/commercial-installation" },
  ],
  "Electrical Testing & Commissioning": [
    { title: "Solar Power Plant T&C", href: "/services/solar-plant-tc" },
    { title: "Wind Power Plant T&C", href: "/services/wind-power-tc" },
    { title: "Thermal Power Plant T&C", href: "/services/thermal-power-plant-tc" },
    { title: "Mobility T&C", href: "/services/mobility-tc" },
    { title: "Switch Yard T&C", href: "/services/switch-yard-tc" },
    { title: "Data Center T&C", href: "/services/data-center-tc" },
    { title: "Industrial T&C", href: "/services/industrial-tc" },
    { title: "Gas Insulator Substations T&C", href: "/services/gas-insulator-substations" },
  ],
};

export function WhatWeDoSection() {
  const [activeTab, setActiveTab] = useState("Electrical Services");
  const currentServices = services[activeTab as keyof typeof services];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-80 flex-shrink-0">
            <div className="text-[#9DEF06] font-bold text-sm tracking-widest uppercase mb-3">What we do</div>
            <h2 className="text-[#00286D] font-black text-3xl md:text-4xl leading-tight mb-4">
              Explore Our Range of Service Solutions
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Discover solutions designed to support your goals with precision, reliability, and a commitment to long-term performance.
            </p>
            <Link href="/what-we-do" className="bg-[#00286D] text-white font-bold px-6 py-3 rounded-full hover:bg-[#001a4a] transition-all duration-300 inline-flex items-center gap-2 text-sm">
              Explore Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-[#00286D] text-white"
                      : "bg-white text-gray-500 border border-gray-200 hover:border-[#00286D] hover:text-[#00286D]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentServices.map((service) => (
                <Link key={service.href} href={service.href} className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-[#00286D] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#00286D]/10 rounded-lg flex items-center justify-center group-hover:bg-[#9DEF06] transition-colors duration-300">
                      <div className="w-3 h-3 bg-[#00286D] rounded-full" />
                    </div>
                    <span className="text-gray-700 font-semibold text-sm group-hover:text-[#00286D] transition-colors">{service.title}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#00286D] transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
