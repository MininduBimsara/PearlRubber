import Hero from "@/components/HomePage/Hero";
import DigitalPortfolio from "@/components/HomePage/DigitalPortfolio";
import SmartMonitoring from "@/components/HomePage/SmartMonitoring";
import FarmerNetwork from "@/components/HomePage/FarmerNetwork";
import homepageData from "@/data/content/homepage-data.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Content */}
      <Hero data={homepageData.hero} />
      <DigitalPortfolio data={homepageData.digitalPortfolio} />
      <SmartMonitoring data={homepageData.smartMonitoring} />
      <FarmerNetwork data={homepageData.farmerNetwork} />
    </div>
  );
}
