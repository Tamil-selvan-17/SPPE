import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Power Factor Correction Services", description: "Power factor correction and APFC panel installation services by SP Power Engineers." };

export default function PowerFactorPage() {
  return (
    <ServicePageTemplate
      title="Power Factor Corrections Services"
      overviewTitle="Power Factor Corrections Service overview"
      overviewPoints={[
        "Monitoring of electrical parameters using power quality analyzers to evaluate system power factor.",
        "Assessment and calculation of reactive power (kVAR) requirement for optimal correction.",
        "Installation of capacitor banks/APFC panels with proper protection and system integration.",
        "Testing and verification of improved power factor and stable system performance.",
      ]}
      processSteps={[
        { title: "Monitoring", desc: "Measurement of voltage, current, and power factor using power quality analyzers." },
        { title: "Assessment", desc: "Calculation of kVAR requirement and selection of suitable capacitor/APFC system." },
        { title: "Installation", desc: "Installation of capacitor banks/APFC panels with proper protection and system integration." },
        { title: "Testing", desc: "Verification of power factor improvement and system performance under load conditions." },
      ]}
    />
  );
}
