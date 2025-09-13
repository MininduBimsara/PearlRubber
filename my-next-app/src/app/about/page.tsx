import Hero from "@/components/About/Hero";
import RubberMission from "@/components/About/MissionSection";
import RubberChallenges from "@/components/About/ChallengesSection";
import ComplianceImpact from "@/components/About/ImpactSection";

// Import the JSON data
import aboutData from "@/data/content/about.json";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-cream-50 to-amber-50">
      <Hero data={aboutData.hero} />
      <div className="relative">
        <RubberMission />
        <RubberChallenges />
        <ComplianceImpact />
      </div>
    </main>
  );
}
