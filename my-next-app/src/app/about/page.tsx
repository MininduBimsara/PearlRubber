// app/about/page.tsx - Final implementation
"use client";

import Hero from "@/components/About/Hero";
import RubberMission from "@/components/About/MissionSection";
import ComplianceImpact from "@/components/About/ImpactSection";
import TeamSection from "@/components/About/TeamSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContentLoader } from "@/hooks/useContentLoader";

export default function AboutPage() {
  const { content, loading, error } = useContentLoader("about");
  const { language } = useLanguage();

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-cream-50 to-amber-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-slate-600">
            {language === "si" ? "පූරණය වෙමින්..." : "Loading..."}
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !content) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-cream-50 to-amber-50">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 text-red-500">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            {language === "si"
              ? "අන්තර්ගතය පූරණය කිරීමේදී දෝෂයක්"
              : "Content Loading Error"}
          </h2>
          <p className="text-slate-600 mb-6">
            {error ||
              (language === "si"
                ? "අන්තර්ගතය පූරණය කිරීමට අසමත් විය"
                : "Failed to load content")}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            {language === "si" ? "නැවත උත්සාහ කරන්න" : "Try Again"}
          </button>
        </div>
      </div>
    );
  }

  // Main content
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-cream-50 to-amber-50">
      <Hero data={content.hero} />
      <div className="relative">
        <RubberMission data={content.mission} />
        <ComplianceImpact data={content.impact} />
        <TeamSection data={content.team} />
      </div>
    </main>
  );
}

// Alternative implementation using instant content (no loading state)
// Use this if you want immediate rendering without loading states:

/*
"use client";

import Hero from "@/components/About/Hero";
import RubberMission from "@/components/About/MissionSection";
import ComplianceImpact from "@/components/About/ImpactSection";
import TeamSection from "@/components/About/TeamSection";
import { useInstantContent } from "@/hooks/useContentLoader";

export default function AboutPage() {
  const { content, error } = useInstantContent("about");

  if (error || !content) {
    return <div>Error loading content</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-cream-50 to-amber-50">
      <Hero data={content.hero} />
      <div className="relative">
        <RubberMission data={content.mission} />
        <ComplianceImpact data={content.impact} />
        <TeamSection data={content.team} />
      </div>
    </main>
  );
}
*/
