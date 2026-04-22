import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Industrial Testing & Commissioning", description: "Industrial electrical testing and commissioning services by SP Power Engineers." };

export default function IndustrialTCPage() {
  return (
    <ServicePageTemplate
      title="Industrial"
      subtitle="Testing & Commissioning"
      overviewTitle="Industrial Testing & Commissioning"
      overviewPoints={[
        "Delivering reliable electrical solutions that support continuous industrial operations and minimize unplanned downtime.",
        "Ensuring seamless coordination between electrical systems, automation, and process requirements for efficient plant performance.",
        "Focusing on precision and consistency to enhance system stability and reduce operational risks.",
        "Enabling long-term productivity through robust execution, safety-driven practices, and dependable system performance.",
      ]}
      processSteps={[
        { title: "Pre-Commissioning & SAT Test", desc: "Installation verification, wiring checks, and site testing to confirm system readiness and compliance." },
        { title: "Scheme & Functional Check", desc: "Validation of control logic, interlocks, annunciations, and tripping schemes as per drawings for correct system behavior." },
        { title: "Protection Relay Testing", desc: "Configuration check and secondary injection testing to ensure accurate fault detection and proper tripping coordination." },
        { title: "Programming, Configuration & Testing", desc: "PLC/SCADA logic verification, I/O checks, and signal validation to confirm proper automation and control functions." },
        { title: "Commissioning", desc: "System energization under controlled conditions, performance monitoring, and stable operation before handover." },
      ]}
    />
  );
}
