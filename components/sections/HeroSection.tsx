"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          loading="lazy" 
          src="/images/placeholder.png" 
          alt="SP Power Engineers — High Voltage Engineering" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00286D] via-[#00286D]/85 to-[#00286D]/30" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-20 w-full">
        <div className="max-w-3xl py-20">
          <FadeIn direction="left" delay={0}>
            <div className="inline-flex items-center gap-2 bg-[#9DEF06]/20 backdrop-blur-md border border-[#9DEF06]/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#9DEF06] rounded-full animate-pulse" />
              <span className="text-[#9DEF06] text-xs font-bold tracking-widest uppercase">EA Grade Licensed Contractors</span>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.1}>
            <h1 className="text-white font-black text-5xl md:text-6xl lg:text-8xl leading-tight mb-8 drop-shadow-2xl">
              Where Power<br /><span className="text-[#9DEF06] drop-shadow-none">Meets Precision.</span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-medium">
              Advanced electrical engineering solutions designed to test, verify, and commission systems with accuracy and accountability across India.
            </p>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.3}>
            <div className="flex flex-wrap gap-5">
              <Link href="/contact" className="bg-[#9DEF06] text-[#00286D] font-black px-10 py-4 rounded-full hover:bg-[#8ae000] transition-all duration-300 inline-flex items-center gap-3 text-sm shadow-[0_0_30px_rgba(157,239,6,0.4)]">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/about" className="backdrop-blur-md border-2 border-white/30 text-white font-bold px-10 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2 text-sm">
                Learn More
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10">
              {[
                { value: "10+", label: "State Served" },
                { value: "500+", label: "Trusted Clients" },
                { value: "50+", label: "Active Projects" },
                { value: "96%", label: "Clients Satisfied" },
              ].map((s) => (
                <div key={s.label} className="border-l-2 border-[#9DEF06]/30 pl-4">
                  <div className="text-[#9DEF06] font-black text-3xl md:text-4xl">{s.value}</div>
                  <div className="text-white/60 text-[10px] font-bold tracking-widest uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 0C480 0 240 60 0 30L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
