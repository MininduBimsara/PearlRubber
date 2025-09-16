"use client";

import { HeroSection } from "@/components/products/HeroSection";
import { ComplianceSection } from "@/components/products/ComplianceSection";
import { ApplicationsSection } from "@/components/products/ApplicationsSection";
import { StatsSection } from "@/components/products/StatsSection";
import { CTASection } from "@/components/products/CTASection";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContentLoader } from "@/hooks/useContentLoader";

export default function GeoMappingPage() {
  const { content, loading, error } = useContentLoader("product");
  const { language } = useLanguage();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-slate-600">
            {language === "si" ? "පූරණය වෙමින්..." : "Loading..."}
          </p>
        </div>
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <p className="text-red-500 mb-4">
            {error ||
              (language === "si"
                ? "අන්තර්ගතය පූරණය කිරීමට අසමත් විය"
                : "Failed to load content")}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            {language === "si" ? "නැවත උත්සාහ කරන්න" : "Retry"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <HeroSection data={content.heroSection} />
      <ComplianceSection data={content.complianceSection} />
      <ApplicationsSection data={content.applicationsSection} />
      <StatsSection data={content.statsSection} />
      <CTASection data={content.ctaSection} />
    </main>
  );
}
