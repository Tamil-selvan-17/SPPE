import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Wind Power Installation Projects", description: "Wind power plant installation and project execution services by SP Power Engineers." };

export default function WindPowerInstallationPage() {
  return (
    <ServicePageTemplate
      title="Wind Power Plant"
      subtitle="Testing & Commissioning Projects"
      overviewTitle="Wind Power Plant Project"
      overviewPoints={[
        "Execution of wind power projects covering engineering, procurement, and supply of turbines, electrical systems, and associated equipment.",
        "Installation of wind turbine generators (WTG), tower erection, cable laying, and integration with evacuation systems and grid interface.",
        "Testing and commissioning including mechanical checks, insulation resistance (IR), protection system validation, and synchronization with the grid.",
        "Ongoing support through preventive maintenance, performance monitoring, and system optimization to ensure reliable power generation.",
      ]}
      processSteps={[
        { title: "Procurement & Supply", desc: "Sourcing and Supply of switchyard components such as structures, insulators, conductors, and equipment." },
        { title: "Installation", desc: "Erection of wind turbines, electrical systems, and associated infrastructure for power generation." },
        { title: "Testing & Commissioning", desc: "Conducting mechanical and electrical tests to ensure proper operation before connecting to the grid." },
        { title: "Annual Maintenance", desc: "Ongoing inspection, servicing, and performance monitoring to ensure efficient and reliable operation." },
      ]}
    />
  );
}
