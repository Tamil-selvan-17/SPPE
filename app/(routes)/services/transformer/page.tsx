import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Transformer Services", description: "Comprehensive transformer services including installation, oil filtration, testing & commissioning, and annual maintenance by SP Power Engineers." };

export default function TransformerPage() {
  return (
    <ServicePageTemplate
      title="Transformer Services"
      overviewTitle="Transformer Service overview"
      overviewPoints={[
        "Precision installation including positioning, alignment, termination of HV/LV connections, earthing, and pre-commissioning checks to ensure safe and compliant operation.",
        "Vacuum dehydration and filtration process to remove moisture, dissolved gases, and particulate contaminants, enhancing dielectric strength and insulation reliability.",
        "Comprehensive electrical testing such as insulation resistance (IR), winding resistance, ratio (TTR), and functional checks to validate performance before energization.",
        "Periodic inspection, diagnostic testing, and preventive maintenance to monitor insulation health, detect early faults, and ensure long-term operational stability.",
      ]}
      processSteps={[
        { title: "Installation", desc: "Proper setup, alignment, and commissioning preparation of transformers to ensure safe and reliable operation." },
        { title: "Oil Filtration", desc: "Purification of transformer oil to remove moisture and contaminants, improving insulation and performance." },
        { title: "Testing & Commissioning", desc: "Conducting electrical tests and system checks to verify performance before energizing the transformer." },
        { title: "Annual Maintenance", desc: "Routine inspection, testing, and servicing to ensure long-term reliability and prevent unexpected failures." },
      ]}
    />
  );
}
