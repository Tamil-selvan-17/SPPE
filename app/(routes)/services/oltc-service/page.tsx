import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "OLTC Services", description: "On-Load Tap Changer services including overhauling, repairing, oil filtration and testing by SP Power Engineers." };

export default function OLTCServicePage() {
  return (
    <ServicePageTemplate
      title="OLTC Services"
      overviewTitle="OLTC Service overview"
      overviewPoints={[
        "Dismantling and inspection of OLTC components such as diverter switch and selector mechanism, followed by contact refurbishment and reassembly to OEM standards.",
        "Rectification of issues like contact erosion, carbonization, insulation degradation, and mechanical misalignment.",
        "Vacuum dehydration and filtration to remove moisture, gases, and carbon particles, improving dielectric strength and arc-quenching performance.",
        "Performance checks using dynamic resistance measurement (DRM), contact resistance, and timing analysis to verify switching operation.",
      ]}
      processSteps={[
        { title: "Spare Supply", desc: "Provision of genuine OLTC spare parts to support maintenance, repairs, and minimize downtime." },
        { title: "Overhauling", desc: "Complete dismantling, inspection, cleaning, and reassembly of OLTC components to restore optimal performance." },
        { title: "Repairing", desc: "Fixing or replacing faulty parts such as contacts, drive mechanisms, or insulation components." },
        { title: "Oil Filtration", desc: "Purification of insulating oil to remove moisture, gases, and contaminants—improving insulation strength and reliability." },
        { title: "Testing", desc: "Conducting electrical and mechanical tests to verify proper operation, contact integrity, and overall performance." },
      ]}
    />
  );
}
