import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

interface ProcessStep {
  title: string;
  desc: string;
}

interface ServicePageProps {
  title: string;
  subtitle?: string;
  overviewTitle: string;
  overviewPoints: string[];
  processSteps: ProcessStep[];
  breadcrumb?: string;
}

export function ServicePageTemplate({
  title,
  subtitle,
  overviewTitle,
  overviewPoints,
  processSteps,
  breadcrumb = "Services",
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <FadeIn direction="down" delay={0}>
        <section className="bg-[#00286D] pt-32 pb-16 px-4 md:px-8 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-white/50 text-xs font-medium mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/what-we-do" className="hover:text-white transition-colors">{breadcrumb}</Link>
              <span>/</span>
              <span className="text-white">{title}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left" delay={0.1}>
                <div>
                  <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-4">{title}</h1>
                  {subtitle && <p className="text-[#9DEF06] font-bold text-lg">{subtitle}</p>}
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div className="relative">
                  <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                    <img loading="lazy" src="/images/placeholder.png" alt={title} className="w-full h-full object-cover opacity-60" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Overview */}
      <section className="py-16 px-4 md:px-8 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeIn direction="left" delay={0}>
              <div>
                <div className="text-[#9DEF06] font-bold text-sm tracking-widest uppercase mb-3">Overview</div>
                <h2 className="text-[#00286D] font-black text-2xl md:text-3xl mb-6">{overviewTitle}</h2>
                <div className="space-y-4">
                  {overviewPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#9DEF06] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/contact" className="bg-[#9DEF06] text-[#00286D] font-bold px-8 py-3.5 rounded-full hover:bg-[#8ae000] transition-all duration-300 inline-flex items-center gap-2 text-sm">
                    Get Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                  <img loading="lazy" src="/images/placeholder.png" alt={overviewTitle} className="w-full h-full object-cover" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 md:px-8 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up" delay={0}>
            <div className="text-center mb-12">
              <div className="text-[#9DEF06] font-bold text-sm tracking-widest uppercase mb-3">Our Process</div>
              <h2 className="text-[#00286D] font-black text-2xl md:text-3xl">How We Work</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
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
                    {step.desc}
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

    </>
  );
}
