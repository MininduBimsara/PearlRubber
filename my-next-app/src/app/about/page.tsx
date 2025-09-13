import Navbar from "@/components/HomePage/NavBar";
import Hero from "@/components/About/Hero";
import RubberMission from "@/components/About/MissionSection";
import RubberChallenges from "@/components/About/ChallengesSection";
import ComplianceImpact from "@/components/About/ImpactSection";
import { Footer } from "@/components/HomePage/Footer";

// Import the JSON data
import aboutData from "@/data/content/about.json";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-cream-50 to-amber-50">
      <Navbar />
      <Hero data={aboutData.hero} />
      <div className="relative">
        <RubberMission />
        <RubberChallenges />
        <ComplianceImpact />
      </div>
      <Footer />
    </main>
  );
}
