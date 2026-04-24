import { Award, Shield, Zap, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const reasons = [
  {
    icon: Award,
    title: "A Decade of Proven Expertise",
    description: "With 10+ years in the industry, we deliver reliable electrical solutions backed by proven expertise.",
  },
  {
    icon: Shield,
    title: "EA Grade Licensed Contractors",
    description: "Certified EA Grade contractors ensuring full compliance, safety, and professional accountability.",
  },
  {
    icon: Zap,
    title: "Installation, Testing & Commissioning Experts",
    description: "Complete electrical installation with thorough testing and commissioning for optimal performance.",
  },
  {
    icon: CheckCircle,
    title: "Quality & Safety Focused",
    description: "Committed to strict quality standards and safety practices for dependable, compliant results.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-[#00286D] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <FadeIn direction="up" delay={0}>
          <div className="text-center mb-14">
            <div className="inline-block bg-[#9DEF06]/20 text-[#9DEF06] font-bold text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              A Community of Trusted Partners
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <FadeIn key={i} direction="up" delay={0.1 + i * 0.1}>
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 bg-[#9DEF06] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#00286D]" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-3 leading-tight">{reason.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
