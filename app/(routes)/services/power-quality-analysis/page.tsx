import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Power Quality Analysis Services", description: "Power quality monitoring, analysis, and optimization services by SP Power Engineers." };

export default function PowerQualityPage() {
  return (
    <ServicePageTemplate
      title="Power Quality Analysis Services"
      overviewTitle="Power Quality Analysis Service overview"
      overviewPoints={[
        "Planning and identification of critical feeders and measurement points for accurate analysis.",
        "Monitoring of electrical parameters including voltage, current, harmonics (THD), and disturbances.",
        "Assessment of power quality issues such as voltage variations, unbalance, and harmonic distortion.",
        "Optimization through solutions like harmonic filters, capacitor banks, and load balancing.",
        "Reporting and support with detailed analysis, recommendations, and follow-up to maintain power quality.",
      ]}
      processSteps={[
        { title: "Planning", desc: "Define scope and select critical measurement points." },
        { title: "Monitoring", desc: "Record voltage, current, harmonics (THD), and disturbances using analyzers." },
        { title: "Assessment", desc: "Analyze data to identify issues like harmonics, voltage variations, and unbalance." },
        { title: "Optimization", desc: "Implement solutions such as filters, capacitor banks, or load balancing." },
        { title: "Reporting", desc: "Provide reports with data, analysis, and corrective recommendations." },
        { title: "Support", desc: "Offer follow-up monitoring and maintenance to sustain power quality." },
      ]}
    />
  );
}
