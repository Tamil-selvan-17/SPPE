import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Switch Yard Testing & Commissioning", description: "Switchyard testing and commissioning services by SP Power Engineers." };

export default function SwitchYardTCPage() {
  return (
    <ServicePageTemplate
      title="Switch Yard"
      subtitle="Testing & Commissioning Projects"
      overviewTitle="Switch Yard overview Testing & Commissioning"
      overviewPoints={[
        "Ensuring reliable power transfer through precise handling of high-voltage outdoor equipment and systems.",
        "Maintaining system stability by coordinating protection, control, and switching operations under real-time conditions.",
        "Minimizing operational risks through disciplined execution in high-voltage and open-environment settings.",
        "Supporting continuous grid performance with a strong focus on safety, reliability, and operational readiness.",
      ]}
      processSteps={[
        { title: "Pre-Commissioning & SAT", desc: "Installation verification and site testing of equipment (breakers, isolators, CT/PTs) to ensure readiness." },
        { title: "Scheme & Functional Check", desc: "Validation of control schemes, interlocks, indications, and tripping logic for correct operation." },
        { title: "Protection Relay Testing", desc: "Relay configuration check and secondary injection testing to ensure accurate fault detection and coordination." },
        { title: "Programming, Configuration & Testing", desc: "Control panel/SCADA signal checks, I/O verification, and logic validation for proper monitoring and control." },
        { title: "Commissioning", desc: "System energization, operational checks, and performance monitoring to ensure stable and safe operation." },
      ]}
    />
  );
}
