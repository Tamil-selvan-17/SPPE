"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#00286D] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#9DEF06]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left – text content */}
          <div>
            <FadeIn direction="left" delay={0}>
              <div className="inline-flex items-center gap-2 bg-[#9DEF06]/20 border border-[#9DEF06]/30 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-[#9DEF06] rounded-full animate-pulse" />
                <span className="text-[#9DEF06] text-xs font-semibold tracking-wider uppercase">EA Grade Licensed Contractors</span>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.1}>
              <h1 className="text-white font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Where Power<br /><span className="text-[#9DEF06]">Meets Precision.</span>
              </h1>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Advanced electrical engineering solutions designed to test, verify, and commission systems with accuracy and accountability.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-[#9DEF06] text-[#00286D] font-bold px-8 py-3.5 rounded-full hover:bg-[#8ae000] transition-all duration-300 inline-flex items-center gap-2 text-sm">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/about" className="border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2 text-sm">
                  About Us
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.45}>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { value: "10+", label: "State Served" },
                  { value: "500+", label: "Trusted Clients" },
                  { value: "50+", label: "Active Projects" },
                  { value: "96%", label: "Clients Satisfied" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-[#9DEF06] font-black text-2xl md:text-3xl">{s.value}</div>
                    <div className="text-white/60 text-xs font-medium mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right – image */}
          <FadeIn direction="right" delay={0.2} className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              <div className="w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 bg-white/5">
                <img loading="lazy" src="/images/placeholder.png" alt="SP Power Engineers — Electrical Engineering" className="w-full h-full object-cover opacity-60" />
              </div>
              <div className="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-2xl p-4 max-w-[180px]">
                <div className="text-[#00286D] font-black text-2xl">500+</div>
                <div className="text-gray-500 text-xs font-medium">Trusted Clients</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#9DEF06] text-[#00286D] rounded-2xl shadow-xl p-4">
                <div className="font-black text-xl">10+</div>
                <div className="text-xs font-bold leading-tight">Years<br />Experience</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 0C480 0 240 60 0 30L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
