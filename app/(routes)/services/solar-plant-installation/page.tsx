import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Solar Plant Installation Projects", description: "Solar power plant installation and project execution services by SP Power Engineers." };

export default function SolarPlantInstallationPage() {
  return (
    <ServicePageTemplate
      title="Solar Power Plant"
      subtitle="Testing & Commissioning Projects"
      overviewTitle="Solar Power Plant Project"
      overviewPoints={[
        "Execution of solar projects including engineering design, load estimation, and procurement of modules, inverters, mounting structures, and BOS (Balance of System) components.",
        "Installation of PV modules with proper tilt and orientation, structure erection, DC cabling, inverter integration, and AC distribution system setup.",
        "Testing and commissioning including insulation resistance (IR), string testing, inverter performance checks, and grid synchronization for safe energization.",
        "Ongoing support through preventive maintenance, module cleaning, performance monitoring (PR analysis), and fault diagnostics to ensure optimal energy generation.",
      ]}
      processSteps={[
        { title: "Procurement & Supply", desc: "Sourcing and supply of solar panels, inverters, mounting structures, and electrical components." },
        { title: "Installation", desc: "Mounting of solar panels, inverter setup, wiring, and system integration for power generation." },
        { title: "Testing & Commissioning", desc: "Verifying system performance, electrical connections, and safety before connecting to the grid." },
        { title: "Annual Maintenance", desc: "Regular cleaning, inspection, and performance checks to ensure optimal energy output." },
      ]}
    />
  );
}
