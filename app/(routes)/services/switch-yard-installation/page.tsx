import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Switch Yard Installation Projects", description: "Switchyard installation and project execution services by SP Power Engineers." };

export default function SwitchYardInstallationPage() {
  return (
    <ServicePageTemplate
      title="Switch Yard"
      subtitle="Testing & Commissioning Projects"
      overviewTitle="Switch Yard Project"
      overviewPoints={[
        "Execution of switchyard projects covering engineering, procurement, and supply of equipment as per design specifications.",
        "Erection of structures, installation of switchyard components, and integration of electrical systems with proper alignment and earthing.",
        "Comprehensive testing and commissioning including IR, HV, and functional checks to ensure safe energization and reliability.",
        "Ongoing support through preventive maintenance, system monitoring, and performance evaluation for long-term operation.",
      ]}
      processSteps={[
        { title: "Procurement & Supply", desc: "Sourcing and Supply of switchyard components such as structures, insulators, conductors, and equipment." },
        { title: "Installation", desc: "Erection of structures, equipment mounting, and laying of conductors as per design specifications." },
        { title: "Retrofitting", desc: "Upgrading or modifying existing switchyard systems to improve performance and meet updated standards." },
        { title: "Testing & Commissioning", desc: "Conducting electrical and functional tests to ensure all systems operate correctly before energization." },
        { title: "Annual Maintenance", desc: "Regular inspection, testing, and maintenance to ensure long-term reliability and safe operation." },
      ]}
    />
  );
}
