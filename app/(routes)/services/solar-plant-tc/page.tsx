import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Solar Plant Testing & Commissioning", description: "Solar power plant testing and commissioning services by SP Power Engineers." };

export default function SolarPlantTCPage() {
  return (
    <ServicePageTemplate
      title="Solar Power Plant"
      subtitle="Testing & Commissioning"
      overviewTitle="Solar Power Plant Testing & Commissioning"
      overviewPoints={[
        "Ensuring efficient energy generation through precise integration of PV modules, inverters, and electrical systems.",
        "Maintaining stable power output by managing variability in solar conditions and system performance.",
        "Enabling seamless grid connectivity with a focus on synchronization, compliance, and protection coordination.",
        "Enhancing system reliability through consistent performance monitoring and optimized operational control.",
        "Supporting sustainable energy delivery with strong emphasis on safety, efficiency, and long-term plant performance.",
      ]}
      processSteps={[
        { title: "Pre-Commissioning & SAT", desc: "Installation verification and site testing of modules, DC cabling, inverters, and panels to ensure system readiness." },
        { title: "Scheme & Functional Check", desc: "Validation of control logic, interlocks, inverter operations, and protection schemes for correct functioning." },
        { title: "Protection Relay Testing", desc: "Configuration verification and testing to ensure accurate fault detection and proper grid protection coordination." },
        { title: "Programming, Configuration & Testing", desc: "SCADA/monitoring system checks, I/O validation, and communication testing between inverters and control systems." },
        { title: "Commissioning", desc: "System energization, inverter synchronization with grid, and performance monitoring to ensure stable generation." },
      ]}
    />
  );
}
