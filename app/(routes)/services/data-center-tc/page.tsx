import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Data Center Testing & Commissioning", description: "Data center testing and commissioning services by SP Power Engineers." };

export default function DataCenterTCPage() {
  return (
    <ServicePageTemplate
      title="Data Center"
      subtitle="Testing & Commissioning Projects"
      overviewTitle="Data Center Testing & Commissioning"
      overviewPoints={[
        "Ensuring uninterrupted power delivery through robust system design and high-reliability execution for critical loads.",
        "Maintaining operational continuity by supporting redundancy strategies and seamless power transfer across systems.",
        "Enhancing system resilience through precise coordination of electrical, backup, and monitoring infrastructures.",
        "Supporting 24/7 performance with a strong focus on uptime, safety, and long-term operational stability.",
      ]}
      processSteps={[
        { title: "Pre-Commissioning & SAT", desc: "Installation verification and site testing of UPS, DG, panels, cabling, and critical systems to ensure readiness." },
        { title: "Scheme & Functional Check", desc: "Validation of control logic, interlocks, redundancy schemes, and power transfer sequences for reliable operation." },
        { title: "Protection Relay Testing", desc: "Configuration verification and testing to ensure accurate fault detection and selective tripping coordination." },
        { title: "Programming, Configuration & Testing", desc: "BMS/SCADA/PLC checks, I/O validation, and communication testing across electrical and monitoring systems." },
        { title: "Commissioning", desc: "System energization, load transfer testing, and performance validation to ensure continuous and stable operation." },
      ]}
    />
  );
}
