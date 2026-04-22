import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Data Center Installation Projects", description: "Data center installation and project execution services by SP Power Engineers." };

export default function DataCenterInstallationPage() {
  return (
    <ServicePageTemplate
      title="Data Center"
      subtitle="Testing & Commissioning Projects"
      overviewTitle="Data Center Project"
      overviewPoints={[
        "Execution of data center projects including engineering design, load assessment, and procurement of critical infrastructure such as UPS systems, PDUs, cooling units, and network equipment.",
        "Installation of server racks, structured cabling, power distribution systems, precision cooling (HVAC), and implementation of redundancy (N+1/2N) for high availability.",
        "Testing and commissioning including load bank testing, UPS/battery validation, thermal performance checks, and failover simulation to ensure uptime reliability.",
        "Ongoing support through preventive maintenance, real-time monitoring (BMS/DCIM), and performance optimization to maintain continuous and efficient operations.",
      ]}
      processSteps={[
        { title: "Procurement & Supply", desc: "Sourcing and supply of critical infrastructure such as servers, power systems (UPS), cooling units, and network equipment." },
        { title: "Installation", desc: "Setup of racks, power distribution, cooling systems, and network infrastructure with proper redundancy." },
        { title: "Testing & Commissioning", desc: "Validating power, cooling, and network systems to ensure reliability, backup functionality, and continuous uptime before operation." },
        { title: "Annual Maintenance", desc: "Regular monitoring, preventive maintenance, and system checks to ensure uninterrupted performance and high availability." },
      ]}
    />
  );
}
