import Hero from "@/components/plantation/Hero";
import Navbar from "@/components/HomePage/NavBar";
import { Footer } from "@/components/HomePage/Footer";
import DigitalPortfolio from "@/components/plantation/DigitalPortfolio";
import SmartMonitoring from "@/components/plantation/SmartMonitoring";
import FarmerNetwork from "@/components/plantation/FarmerNetwork";
import Statistics from "@/components/plantation/Statistics";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Page Content */}
      <Hero />
      <DigitalPortfolio />
      <SmartMonitoring />
      <FarmerNetwork />
      <Footer />
    </div>
  );
}
