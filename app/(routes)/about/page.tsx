import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Award, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About SP Power Engineers | EA Grade Electrical Contractors Chennai",
  description:
    "Learn about SP Power Engineers — EA Grade licensed electrical contractors with 10+ years of expertise in electrical testing, commissioning, solar, wind, switchyard, and industrial projects across India. ISO 9001:2013 & ISO 45001:2014 certified.",
  keywords: [
    "about SP Power Engineers",
    "electrical contractors Chennai",
    "EA grade contractors India",
    "ISO 9001 electrical company",
    "electrical testing company",
    "commissioning experts India",
    "10 years electrical experience",
  ],
  openGraph: {
    title: "About SP Power Engineers | Trusted Electrical Contractors",
    description:
      "10+ years of proven expertise in electrical testing, commissioning, and contracting. EA Grade licensed, ISO certified, serving clients across India.",
    url: `${siteConfig.url}/about`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "About SP Power Engineers" }],
  },
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 px-4 md:px-8 lg:px-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            loading="lazy" 
            src="/images/placeholder.png" 
            alt="About SP Power Engineers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00286D] via-[#00286D]/80 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <FadeIn direction="left" delay={0.1}>
            <div className="inline-block bg-[#9DEF06]/20 backdrop-blur-sm border border-[#9DEF06]/30 text-[#9DEF06] font-bold text-xs px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              About SP Power
            </div>
          </FadeIn>
          
          <div className="max-w-3xl">
            <FadeIn direction="left" delay={0.2}>
              <h1 className="text-white font-black text-4xl md:text-6xl leading-tight mb-6 drop-shadow-lg">
                Trusted Partners in Power & Performance
              </h1>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.3}>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-medium">
                Professional electrical contractors committed to quality execution and long-term reliability across every project we undertake.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.4}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#9DEF06] text-[#00286D] font-bold px-8 py-4 rounded-full hover:bg-[#8ae000] transition-all duration-300 text-sm shadow-[0_0_20px_rgba(157,239,6,0.3)]"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 md:px-8 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up" delay={0}>
            <div className="text-center mb-12">
              <div className="text-[#9DEF06] font-bold text-sm tracking-widest uppercase mb-3">Why Choose Us</div>
              <h2 className="text-[#00286D] font-black text-3xl md:text-4xl">What Sets Us Apart</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "A Decade of Proven Expertise",                      desc: "With 10+ years in the industry, we deliver reliable electrical solutions backed by proven expertise." },
              { title: "EA Grade Licensed Contractors",                      desc: "Certified EA Grade contractors ensuring full compliance, safety, and professional accountability." },
              { title: "Installation, Testing & Commissioning Experts",      desc: "Complete electrical installation with thorough testing and commissioning for optimal performance." },
              { title: "Quality & Safety Focused",                           desc: "Committed to strict quality standards and safety practices for dependable, compliant results." },
            ].map((item, i) => (
              <FadeIn key={i} direction="up" delay={0.1 + i * 0.1}>
                <div className="flex gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#9DEF06] hover:shadow-md transition-all duration-300 h-full">
                  <CheckCircle2 className="w-6 h-6 text-[#9DEF06] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-[#00286D] font-bold text-base mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 md:px-8 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Certs */}
            <FadeIn direction="left" delay={0}>
              <div>
                <div className="text-[#9DEF06] font-bold text-sm tracking-widest uppercase mb-3">Certified Standards</div>
                <h2 className="text-[#00286D] font-black text-3xl md:text-4xl mb-4">Proven Excellence</h2>
                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  We operate under globally recognized certifications, ensuring compliance, safety, and superior execution at every stage.
                </p>
                <div className="flex gap-4">
                  {[
                    { code: "ISO 9001:2013",  title: "Quality Management System" },
                    { code: "ISO 45001:2014", title: "Occupational Health & Safety" },
                  ].map((cert) => (
                    <div key={cert.code} className="flex-1 bg-[#00286D] text-white rounded-2xl p-6 text-center">
                      <Award className="w-8 h-8 text-[#9DEF06] mx-auto mb-3" />
                      <div className="font-black text-lg text-[#9DEF06]">{cert.code}</div>
                      <div className="text-white/70 text-xs mt-1">{cert.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Mission & Vision */}
            <FadeIn direction="right" delay={0.2}>
              <div>
                <div className="text-[#9DEF06] font-bold text-sm tracking-widest uppercase mb-3">Mission &amp; Vision</div>
                <h2 className="text-[#00286D] font-black text-3xl md:text-4xl mb-6">Defining Who We Are and Where We&apos;re Headed.</h2>
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl border border-gray-100 bg-white">
                    <div className="text-[#00286D] font-bold text-base mb-2">Vision</div>
                    <p className="text-gray-500 text-sm leading-relaxed">To be the leading provider of innovative and reliable electrical solutions, ensuring safety, efficiency, and sustainability in every project.</p>
                  </div>
                  <div className="p-6 rounded-2xl border border-gray-100 bg-white">
                    <div className="text-[#00286D] font-bold text-base mb-2">Mission</div>
                    <p className="text-gray-500 text-sm leading-relaxed">We are committed to supporting our clients with reliable solutions, skilled expertise, and timely execution while upholding the highest standards.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 md:px-8 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-[#00286D] font-black text-3xl md:text-4xl">A Community of Trusted Partners</h2>
              <p className="text-gray-500 mt-4 text-sm max-w-xl mx-auto">With over a decade of experience, we deliver tailored solutions that empower your business to grow.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "10+",  label: "State Served" },
              { value: "500+", label: "Trusted Clients" },
              { value: "50+",  label: "Active Projects" },
              { value: "96%",  label: "Clients Satisfied" },
            ].map((s, i) => (
              <FadeIn key={s.label} direction="up" delay={0.1 + i * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-[#00286D]">
                  <div className="text-[#9DEF06] font-black text-4xl mb-2">{s.value}</div>
                  <div className="text-white/70 text-sm font-medium">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
