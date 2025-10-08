"use client";

import dynamic from "next/dynamic";

// Dynamically import the Leaflet map component — disables SSR entirely
const SmartMonitoringClient = dynamic(() => import("./SmartMonitoringClient"), {
  ssr: false,
});

export default function SmartMonitoring(props: any) {
  return <SmartMonitoringClient {...props} />;
}
