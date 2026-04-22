import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "VCB Services", description: "Vacuum Circuit Breaker services including procurement, servicing, repairing, testing and troubleshooting by SP Power Engineers." };

export default function VCBServicePage() {
  return (
    <ServicePageTemplate
      title="VCB Services"
      overviewTitle="VCB Service overview"
      overviewPoints={[
        "Sourcing of VCBs and OEM spare parts including vacuum interrupters, contacts, and operating mechanisms.",
        "Inspection, cleaning, lubrication, and mechanical checks of breaker mechanism to ensure smooth operation.",
        "Rectification of faults such as vacuum interrupter failure, contact wear, insulation issues, and mechanism defects.",
        "Verification through insulation resistance (IR), contact resistance (CRM), high-voltage withstand, and timing tests to ensure proper operation.",
        "Diagnosis of faults like failure to trip/close, abnormal operation, and performance issues through detailed analysis.",
      ]}
      processSteps={[
        { title: "Procurement", desc: "Sourcing and supply of VCBs and genuine spare parts as per system requirements." },
        { title: "Service", desc: "Routine inspection, cleaning, lubrication, and mechanical checks to ensure reliable operation." },
        { title: "Repairing", desc: "Repairing or replacing faulty components such as vacuum interrupters, contacts, and operating mechanisms." },
        { title: "Testing", desc: "Verifying insulation strength, contact performance, and tripping operation through electrical and functional tests." },
        { title: "Troubleshooting", desc: "Diagnosing faults, failure to trip/close issues, and performance irregularities to identify root causes." },
      ]}
    />
  );
}
