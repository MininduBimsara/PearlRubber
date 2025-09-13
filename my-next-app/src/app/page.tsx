import Hero from "@/components/HomePage/Hero";
import DigitalPortfolio from "@/components/HomePage/DigitalPortfolio";
import SmartMonitoring from "@/components/HomePage/SmartMonitoring";
import FarmerNetwork from "@/components/HomePage/FarmerNetwork";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Content */}
      <Hero />
      <DigitalPortfolio />
      <SmartMonitoring />
      <FarmerNetwork />
    </div>
  );
}
