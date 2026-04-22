import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Mobility Testing & Commissioning", description: "EV charging infrastructure testing and commissioning services by SP Power Engineers." };

export default function MobilityTCPage() {
  return (
    <ServicePageTemplate
      title="Mobility"
      subtitle="Testing & Commissioning Projects"
      overviewTitle="Mobility Testing & Commissioning"
      overviewPoints={[
        "Enabling efficient and reliable charging infrastructure through seamless integration of electrical and communication systems.",
        "Ensuring consistent performance by managing load distribution and system behavior under varying demand conditions.",
        "Enhancing operational reliability through precise coordination of power, control, and network connectivity.",
        "Supporting scalable and future-ready mobility solutions with a strong focus on safety, efficiency, and uptime.",
      ]}
      processSteps={[
        { title: "Pre-Commissioning & SAT", desc: "Installation verification and site testing of chargers, panels, cabling, and associated systems to ensure readiness." },
        { title: "Scheme & Functional Check", desc: "Validation of control logic, interlocks, and charging sequences for safe and correct operation." },
        { title: "Protection Relay Testing", desc: "Configuration verification and testing to ensure proper fault detection and protection coordination." },
        { title: "Programming, Configuration & Testing", desc: "SCADA/EMS/charger communication checks, I/O validation, and network testing for seamless system integration." },
        { title: "Commissioning", desc: "System energization, charging performance testing, and monitoring to ensure stable and efficient operation." },
      ]}
    />
  );
}
