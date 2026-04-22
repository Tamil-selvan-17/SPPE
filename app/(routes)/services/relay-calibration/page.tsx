import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Relay Calibration Services", description: "Protection relay calibration, testing and commissioning services by SP Power Engineers." };

export default function RelayCalibrationPage() {
  return (
    <ServicePageTemplate
      title="Relay Calibration Services"
      overviewTitle="Relay Calibration Service overview"
      overviewPoints={[
        "Development of protection settings to ensure selective tripping and proper coordination between relays, minimizing fault impact on the system.",
        "Programming of relay parameters including pickup values, time delays, and logic schemes as per system design and protection requirements.",
        "Secondary injection and functional testing to verify relay operation, tripping accuracy, and response characteristics under simulated fault conditions.",
        "Periodic calibration and verification of relay accuracy to ensure consistent performance, compliance with standards, and reliable fault protection.",
      ]}
      processSteps={[
        { title: "Setting Coordination", desc: "Define protection settings to ensure relays operate in the correct sequence and isolate faults selectively." },
        { title: "Relay Configuration", desc: "Program relay parameters (thresholds, timing, logic) based on system design and protection scheme." },
        { title: "Testing & Commissioning", desc: "Verify relay performance through functional and injection tests before putting it into service." },
        { title: "Retrofitting", desc: "Upgrade or replace outdated relays with modern systems while maintaining compatibility with existing infrastructure." },
        { title: "Maintenance Calibration", desc: "Periodically test and recalibrate relays to ensure accuracy, reliability, and compliance with standards." },
      ]}
    />
  );
}
