"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function TrustedPartnersSection() {
  const logos = Array.from({ length: 10 }).map((_, i) => `/images/placeholder.png`);
  
  // Duplicate for seamless infinite scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-20 bg-[#00286D] overflow-hidden">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 mb-16 text-center">
          <h2 className="text-white font-black text-3xl md:text-4xl">
            A Community of <span className="text-[#9DEF06]">Trusted Partners</span>
          </h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="relative w-full flex overflow-hidden group">
          <div className="flex w-max animate-marquee space-x-6 px-3">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="w-48 h-24 bg-white rounded-xl flex-shrink-0 flex items-center justify-center p-4 border-2 border-transparent transition-all duration-300 hover:border-[#9DEF06]"
              >
                <img src={logo} alt="Partner Logo" className="max-w-full max-h-full object-contain opacity-50 hover:opacity-100 transition-opacity" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative w-full flex overflow-hidden mt-6 group">
          <div className="flex w-max animate-marquee space-x-6 px-3" style={{ animationDirection: "reverse", animationDuration: "35s" }}>
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="w-48 h-24 bg-white rounded-xl flex-shrink-0 flex items-center justify-center p-4 border-2 border-transparent transition-all duration-300 hover:border-[#9DEF06]"
              >
                <img src={logo} alt="Partner Logo" className="max-w-full max-h-full object-contain opacity-50 hover:opacity-100 transition-opacity" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
