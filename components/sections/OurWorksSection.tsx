import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const projects = [
  { title: "Solar Power Plant", category: "Installation", location: "Tamil Nadu" },
  { title: "Wind Power Project", category: "T&C", location: "Rajasthan" },
  { title: "Data Center", category: "T&C", location: "Chennai" },
  { title: "Switchyard", category: "Installation", location: "Maharashtra" },
  { title: "Industrial Plant", category: "T&C", location: "Gujarat" },
  { title: "Mobility EV", category: "Installation", location: "Bangalore" },
];

export function OurWorksSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="up" delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-[#9DEF06] font-bold text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
                <div className="w-6 h-0.5 bg-[#9DEF06]" />Our Works
              </div>
              <h2 className="text-[#00286D] font-black text-3xl md:text-4xl leading-tight">
                Projects That Speak<br />for Themselves
              </h2>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed max-w-lg">
                Our track record is built on delivering real results — strengthening operations, improving reliability, and meeting expectations every time.
              </p>
            </div>
            <Link href="/our-works" className="bg-[#00286D] text-white font-bold px-6 py-3 rounded-full hover:bg-[#001a4a] transition-all duration-300 inline-flex items-center gap-2 text-sm flex-shrink-0">
              View Case Study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={i} direction="up" delay={0.1 + i * 0.07}>
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    loading="lazy"
                    src="/images/placeholder.png"
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#9DEF06] bg-[#00286D] px-3 py-1 rounded-full">{project.category}</span>
                    <span className="text-xs text-gray-400 font-medium">{project.location}</span>
                  </div>
                  <h3 className="text-[#00286D] font-bold text-base">{project.title}</h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
