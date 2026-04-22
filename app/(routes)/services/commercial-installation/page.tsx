import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Commercial Installation Projects", description: "Commercial electrical installation project services by SP Power Engineers." };

export default function CommercialInstallationPage() {
  return (
    <ServicePageTemplate
      title="Commercial"
      subtitle="Projects"
      overviewTitle="Commercial Project"
      overviewPoints={[
        "End-to-end execution of electrical installation projects with a focus on safety, reliability, and performance.",
        "Structured project planning and coordination to ensure timely execution and efficient resource utilization.",
        "Adherence to industry standards and best practices for quality installation and system integrity.",
        "Use of skilled manpower and proper tools for precise installation and minimal rework.",
        "Commitment to delivering optimized solutions that support long-term operational stability.",
      ]}
      processSteps={[
        { title: "Design", desc: "Electrical design including load calculation, SLD preparation, and cable sizing as per standards." },
        { title: "Procurement", desc: "Sourcing of panels, cables, and switchgear as per technical specifications." },
        { title: "Installation", desc: "Panel erection, cable laying, termination, and earthing for safe system integration." },
      ]}
    />
  );
}
