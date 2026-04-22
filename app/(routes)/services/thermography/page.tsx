import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Thermography Services", description: "Thermal imaging and thermography services to detect hotspots and electrical faults by SP Power Engineers." };

export default function ThermographyPage() {
  return (
    <ServicePageTemplate
      title="Thermography Services"
      overviewTitle="Thermography Service overview"
      overviewPoints={[
        "Planning of inspection scope and identification of critical equipment under operating conditions.",
        "Thermal scanning using infrared cameras to detect hotspots and abnormal temperature variations.",
        "Analysis of thermal data to identify faults such as loose connections, overloads, and insulation issues.",
        "Reporting with thermograms, temperature details, and corrective recommendations.",
      ]}
      processSteps={[
        { title: "Planning", desc: "Define scope and identify equipment for inspection under load conditions." },
        { title: "Thermal Scanning", desc: "Capture infrared images to detect hotspots and abnormal temperature variations." },
        { title: "Reporting", desc: "Analyze data and provide reports with findings and corrective recommendations." },
      ]}
    />
  );
}
