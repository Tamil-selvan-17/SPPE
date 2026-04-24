import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServicePageProps {
  badge: string;
  title: string;
  subtitle?: string;
  overview: string[];
  overviewTitle: string;
  process: ProcessStep[];
}

export function ServiceDetailPage({
  badge,
  title,
  subtitle,
  overview,
  overviewTitle,
  process,
}: ServicePageProps) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#00286D] py-20 px-4 md:px-8 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-white" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full border border-white" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left" delay={0}>
              <div>
                <div className="inline-block bg-[#9DEF06]/20 text-[#9DEF06] font-bold text-xs px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
                  {badge}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">{title}</h1>
                {subtitle && <p className="text-[#9DEF06] font-bold text-lg md:text-xl mb-6">{subtitle}</p>}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#9DEF06] text-[#00286D] font-bold px-8 py-4 rounded-full hover:bg-[#8ae000] transition-all duration-300 text-sm"
                >
                  Get Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2} className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white/10 border border-white/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" src="/images/placeholder.png" alt={title} className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4 md:px-8 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left" delay={0}>
              <div>
                <div className="inline-block bg-[#9DEF06]/20 text-[#00286D] font-bold text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
                  Overview
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#00286D] mb-8 leading-tight">{overviewTitle}</h2>
                <div className="space-y-5">
                  {overview.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#9DEF06] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.15} className="lg:block">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 block lg:hidden mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" src="/images/placeholder.png" alt={title} className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 md:px-8 lg:px-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up" delay={0}>
            <div className="text-center mb-14">
              <div className="inline-block bg-[#9DEF06]/20 text-[#00286D] font-bold text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
                Our Process
              </div>
              <h2 className="text-3xl font-black text-[#00286D]">How We Work</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, i) => (
              <FadeIn key={i} direction="up" delay={0.1 + i * 0.1}>
                <div className="group relative bg-[#00286D] rounded-3xl p-8 border border-white/10 hover:border-[#9DEF06]/50 transition-all duration-500 h-full flex flex-col">
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 bg-[#9DEF06] rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_20px_rgba(157,239,6,0.3)]">
                      <span className="text-[#00286D] font-black text-xl">{i + 1}</span>
                    </div>
                    <div className="h-px flex-1 bg-white/10 ml-4 group-hover:bg-[#9DEF06]/20 transition-colors duration-500" />
                  </div>

                  <h3 className="text-white font-black text-xl mb-4 group-hover:text-[#9DEF06] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                    {step.description}
                  </p>

                  {/* Decorative element */}
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-0 group-hover:w-full h-full bg-[#9DEF06] transition-all duration-700 ease-out" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
