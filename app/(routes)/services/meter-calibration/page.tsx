import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = { title: "Meter Calibration Services", description: "Online and offline meter calibration and retrofitting services by SP Power Engineers." };

export default function MeterCalibrationPage() {
  return (
    <ServicePageTemplate
      title="Meter Calibration Services"
      overviewTitle="Meter Calibration Service overview"
      overviewPoints={[
        "Upgrade or replacement of existing meters with advanced digital meters, ensuring compatibility with system architecture.",
        "In-situ calibration under live conditions using standard reference equipment to verify accuracy without interrupting operation.",
        "Calibration under isolated conditions using calibrated test benches to ensure high-precision measurement and compliance with standards.",
      ]}
      processSteps={[
        { title: "Retrofitting", desc: "Upgrading or replacing existing meters with modern, more accurate systems while ensuring compatibility." },
        { title: "Online Calibration", desc: "Calibrating the meter without interrupting operation, allowing continuous monitoring and minimal downtime." },
        { title: "Offline Calibration", desc: "Calibrating the meter by isolating it from the system to perform precise testing under controlled conditions." },
      ]}
    />
  );
}
