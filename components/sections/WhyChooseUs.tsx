import { Award, ShieldCheck, Wrench, Star } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const reasons = [
  { icon: Award,       title: "A Decade of Proven Expertise",                desc: "With 10+ years in the industry, we deliver reliable electrical solutions backed by proven expertise." },
  { icon: ShieldCheck, title: "EA Grade Licensed Contractors",                desc: "Certified EA Grade contractors ensuring full compliance, safety, and professional accountability." },
  { icon: Wrench,      title: "Installation, Testing & Commissioning Experts",desc: "Complete electrical installation with thorough testing and commissioning for optimal performance." },
  { icon: Star,        title: "Quality & Safety Focused",                     desc: "Committed to strict quality standards and safety practices for dependable, compliant results." },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="up" delay={0}>
          <div className="text-center mb-14">
            <div className="text-[#9DEF06] font-bold text-sm tracking-widest uppercase mb-3">Why Choose Us</div>
            <h2 className="text-[#00286D] font-black text-3xl md:text-4xl">A Community of Trusted Partners</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <FadeIn key={i} direction="up" delay={0.1 + i * 0.1}>
              <div className="group p-8 rounded-2xl border border-gray-100 hover:border-[#9DEF06] hover:shadow-lg transition-all duration-300 text-center h-full">
                <div className="w-16 h-16 bg-[#00286D]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#9DEF06] transition-colors duration-300">
                  <r.icon className="w-8 h-8 text-[#00286D] group-hover:text-[#00286D]" />
                </div>
                <h3 className="text-[#00286D] font-bold text-base mb-3">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
