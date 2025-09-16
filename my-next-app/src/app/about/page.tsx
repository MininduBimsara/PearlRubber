import Hero from "@/components/About/Hero";
import RubberMission from "@/components/About/MissionSection";
import ComplianceImpact from "@/components/About/ImpactSection";
import TeamSection from "@/components/About/TeamSection";

// Import the JSON data
import aboutData from "@/data/content/about.json";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-cream-50 to-amber-50">
      <Hero data={aboutData.hero} />
      <div className="relative">
        <RubberMission data={aboutData.mission} />
        <ComplianceImpact data={aboutData.impact} />
        <TeamSection data={aboutData.team} />
      </div>
    </main>
  );
}
