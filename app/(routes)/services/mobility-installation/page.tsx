import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Mobility Installation Projects", description: "EV charging infrastructure installation services by SP Power Engineers." };

export default function MobilityInstallationPage() {
  return (
    <ServicePageTemplate
      title="Mobility"
      subtitle="Testing & Commissioning Projects"
      overviewTitle="Mobility Project"
      overviewPoints={[
        "Execution of mobility infrastructure projects including engineering design, load assessment, and procurement of EV chargers, distribution systems, and associated electrical equipment.",
        "Installation of charging stations, LT/HT panels, cabling, earthing, and integration with network connectivity and energy management systems.",
        "Testing and commissioning including insulation resistance (IR), protection system validation, charger functionality checks, and load testing for safe operation.",
        "Ongoing support through preventive maintenance, remote monitoring (OCPP-based systems), fault diagnostics, and performance optimization to ensure reliable service.",
      ]}
      processSteps={[
        { title: "Installation", desc: "Setup of mobility infrastructure such as equipment, electrical systems, and supporting components as per project requirements." },
        { title: "Testing & Commissioning", desc: "Verifying system functionality, safety, and performance before putting it into operation." },
        { title: "Annual Maintenance", desc: "Regular inspection, servicing, and maintenance to ensure reliable and uninterrupted operation." },
      ]}
    />
  );
}
