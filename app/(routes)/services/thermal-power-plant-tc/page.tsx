import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Thermal Power Plant Testing & Commissioning", description: "Thermal power plant testing and commissioning services by SP Power Engineers." };

export default function ThermalPowerPlantTCPage() {
  return (
    <ServicePageTemplate
      title="Thermal Power Plant"
      subtitle="Testing & Commissioning"
      overviewTitle="Thermal Power Plant Testing & Commissioning"
      overviewPoints={[
        "Delivering end-to-end execution with a strong focus on safety, system reliability, and operational performance.",
        "Coordinating across multiple plant systems to ensure seamless integration between electrical, control, and auxiliary units.",
        "Applying engineering precision to minimize risks, reduce downtime, and enhance long-term system stability.",
        "Ensuring every project meets performance expectations through disciplined execution and real-time problem solving.",
      ]}
      processSteps={[
        { title: "Pre-Commissioning & SAT Test", desc: "Verification of installation, wiring, insulation checks, and equipment testing to ensure readiness and compliance with design." },
        { title: "Scheme & Functional Check", desc: "Validation of control schemes, interlocks, protections, and sequence operations across electrical and auxiliary systems." },
        { title: "Protection Relay Testing", desc: "Configuration verification and secondary injection testing to ensure accurate fault detection and proper tripping coordination." },
        { title: "Programming, Configuration & Testing", desc: "PLC/DCS/SCADA logic verification, I/O checks, and signal validation for proper automation and plant control." },
        { title: "Commissioning", desc: "Gradual system energization, synchronization (if applicable), load monitoring, and stable operation before handover." },
      ]}
    />
  );
}
