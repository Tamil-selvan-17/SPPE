import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "ACB Services", description: "Air Circuit Breaker services including procurement, servicing, repairing, testing and troubleshooting by SP Power Engineers." };

export default function ACBServicePage() {
  return (
    <ServicePageTemplate
      title="ACB Services"
      overviewTitle="ACB Service overview"
      overviewPoints={[
        "Sourcing of ACBs and OEM spare parts including contacts, arc chutes, and trip units as per system requirements.",
        "Inspection, cleaning, lubrication, and mechanical adjustments of operating mechanisms to ensure smooth operation.",
        "Rectification of faults such as contact wear, arc chute damage, and trip unit malfunction.",
        "Verification of tripping characteristics and protection functions using a micro relay test kit, including primary / secondary injection tests.",
        "Diagnosis of issues like nuisance tripping, failure to trip/close, and operational faults through root cause analysis.",
      ]}
      processSteps={[
        { title: "Procurement", desc: "Sourcing and supply of ACBs and genuine spare parts based on system requirements." },
        { title: "Service", desc: "Routine inspection, cleaning, lubrication, and adjustment to maintain reliable breaker performance." },
        { title: "Repairing", desc: "Fixing or replacing faulty components such as contacts, trip units, or mechanical parts." },
        { title: "Testing", desc: "Verifying breaker performance, tripping characteristics, and protection accuracy using a micro relay kit." },
        { title: "Troubleshooting", desc: "Diagnosing faults, trip issues, or operational failures and identifying the root cause for quick resolution." },
      ]}
    />
  );
}
