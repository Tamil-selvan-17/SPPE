import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Wind Power Testing & Commissioning", description: "Wind power plant testing and commissioning services by SP Power Engineers." };

export default function WindPowerTCPage() {
  return (
    <ServicePageTemplate
      title="Wind Power Plant"
      subtitle="Testing & Commissioning Projects"
      overviewTitle="Wind Power Plant Testing & Commissioning"
      overviewPoints={[
        "Enabling efficient power generation through precise coordination of turbines and electrical systems.",
        "Ensuring smooth integration with the grid by maintaining stability, synchronization, and control across varying wind conditions.",
        "Enhancing system reliability by focusing on performance consistency and reduced operational interruptions.",
        "Supporting sustainable energy delivery with a strong emphasis on safety, efficiency, and long-term operational performance.",
      ]}
      processSteps={[
        { title: "Pre-Commissioning & SAT", desc: "Installation verification and site testing of turbines, cabling, and electrical systems to ensure readiness." },
        { title: "Scheme & Functional Check", desc: "Validation of control logic, interlocks, and turbine operation sequences for safe and correct functioning." },
        { title: "Protection Relay Testing", desc: "Configuration verification and testing to ensure accurate fault detection and proper grid protection coordination." },
        { title: "Programming, Configuration & Testing", desc: "SCADA/PLC system checks, I/O validation, and communication testing between turbines and control systems." },
        { title: "Commissioning", desc: "System energization, turbine synchronization with grid, and performance monitoring for stable operation." },
      ]}
    />
  );
}
