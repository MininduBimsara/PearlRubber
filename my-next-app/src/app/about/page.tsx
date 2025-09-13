import React from 'react';
import Hero from '@/components/About/Hero';
import MissionSection from '@/components/About/MissionSection';
import ChallengesSection from '@/components/About/ChallengesSection';
import ImpactSection from '@/components/About/ImpactSection';
import TeamSection from '@/components/About/TeamSection';

// Import the JSON data
import aboutData from '@/data/content/about.json';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Hero data={aboutData.hero} />
      <div className="relative">
        <MissionSection data={aboutData.mission} />
        <ChallengesSection data={aboutData.challenges} />
        <ImpactSection data={aboutData.impact} />
        <TeamSection data={aboutData.team} />
      </div>
    </main>
  );
}