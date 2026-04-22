import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Gas Insulator Substations T&C", description: "GIS testing and commissioning services by SP Power Engineers." };

export default function GISPage() {
  return (
    <ServicePageTemplate
      title="Gas Insulator Substations"
      subtitle="Testing & Commissioning"
      overviewTitle="GIS Testing & Commissioning"
      overviewPoints={[
        "Ensuring high-reliability performance of compact substation systems through precise execution and attention to critical components.",
        "Managing integrated operations within sealed environments to maintain system integrity and minimize external impact.",
        "Delivering consistent performance by focusing on accuracy, stability, and reduced failure risk in high-voltage conditions.",
        "Supporting long-term operational efficiency with a strong emphasis on safety, reliability, and minimal maintenance requirements.",
      ]}
      processSteps={[
        { title: "Pre-Commissioning & SAT Test", desc: "Verification of installation, wiring, insulation checks, SF₆ gas pressure/density, and site testing to ensure system readiness and compliance." },
        { title: "Scheme & Functional Check", desc: "Validation of control schemes, interlocks, annunciations, and bay operations to ensure correct and safe functionality." },
        { title: "Protection Relay Testing", desc: "Relay configuration verification and secondary injection testing to ensure accurate fault detection and proper tripping coordination." },
        { title: "Programming, Configuration & Testing", desc: "PLC/SCADA logic checks, I/O verification, and signal validation for seamless monitoring and control of GIS systems." },
        { title: "Commissioning", desc: "PLC/SCADA logic checks, I/O verification, and signal validation for seamless monitoring and control of GIS systems." },
      ]}
    />
  );
}
