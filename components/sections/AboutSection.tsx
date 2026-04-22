import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <img loading="lazy" src="/images/placeholder.png" alt="About SP Power Engineers" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#00286D] text-white rounded-2xl p-6 shadow-xl">
              <div className="font-black text-3xl text-[#9DEF06]">ISO</div>
              <div className="text-xs font-semibold mt-1">9001:2013 Certified</div>
            </div>
          </div>
          <div>
            <div className="text-[#9DEF06] font-bold text-sm tracking-widest uppercase mb-3">About us</div>
            <h2 className="text-[#00286D] font-black text-3xl md:text-4xl leading-tight mb-6">
              Trusted Partners in Power &amp; Performance
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              With over a decade of experience in electrical testing, commissioning, and contracting, we deliver tailored solutions that help your business operate with confidence and grow sustainably. By understanding your challenges, we work closely with you to ensure dependable execution and long-term success built on collaboration and trust.
            </p>
            <div className="space-y-3 mb-8">
              {["EA Grade Licensed Contractors","ISO 9001:2013 & ISO 45001:2014 Certified","10+ Years of Proven Expertise","Quality & Safety Focused"].map((item)=>(
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#9DEF06] flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8 py-6 border-y border-gray-100">
              {[{value:"10+",label:"State Served"},{value:"500+",label:"Trusted Clients"},{value:"50+",label:"Active Projects"},{value:"96%",label:"Clients Satisfied"}].map((s)=>(
                <div key={s.label} className="text-center">
                  <div className="text-[#00286D] font-black text-2xl">{s.value}</div>
                  <div className="text-gray-500 text-xs font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <Link href="/about" className="bg-[#00286D] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#001a4a] transition-all duration-300 inline-flex items-center gap-2 text-sm">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
