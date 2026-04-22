import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Earth Pit Services", description: "Earthing system design, installation, testing, and maintenance services by SP Power Engineers." };

export default function EarthPitPage() {
  return (
    <ServicePageTemplate
      title="Earth Pit Services"
      overviewTitle="Earth Pit Service overview"
      overviewPoints={[
        "Supply of earthing materials such as GI/Cu electrodes, conductors, and accessories as per design specifications.",
        "Engineering of earthing system based on soil resistivity analysis and fault current requirements to achieve optimal grounding.",
        "Installation of earth electrodes, conductors, and pit chambers with proper bonding and termination.",
        "Measurement of earth resistance using earth testers (e.g., fall-of-potential method) and basic servicing to ensure effectiveness.",
        "Periodic inspection, resistance testing, and upkeep to maintain consistent grounding performance.",
        "Reduction of earth resistance using chemical treatment, backfill compounds, or additional electrodes.",
      ]}
      processSteps={[
        { title: "Procurement", desc: "Supply of quality earthing materials such as electrodes, conductors, and accessories." },
        { title: "Design", desc: "Planning the earthing system based on soil conditions, load requirements, and safety standards." },
        { title: "Installation", desc: "Proper installation of earth pits, electrodes, and connections to ensure effective grounding." },
        { title: "Testing & Service", desc: "Measuring earth resistance and verifying system performance, along with basic servicing." },
        { title: "AMC Maintenance", desc: "Periodic inspection, testing, and upkeep to maintain optimal earthing performance over time." },
        { title: "Resistance Improvement", desc: "Enhancing earthing efficiency by reducing resistance using methods like soil treatment, additional electrodes, or chemical compounds." },
      ]}
    />
  );
}
