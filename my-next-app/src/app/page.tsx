"use client";

import Hero from "@/components/HomePage/Hero";
import DigitalPortfolio from "@/components/HomePage/DigitalPortfolio";
import SmartMonitoring from "@/components/HomePage/SmartMonitoring";
import FarmerNetwork from "@/components/HomePage/FarmerNetwork";
import { useContentLoader } from "@/hooks/useContentLoader";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { content, loading, error } = useContentLoader("homepage");
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
    <div className="min-h-screen bg-white">
      <Hero data={content.hero} />
      <DigitalPortfolio data={content.digitalPortfolio} />
      <SmartMonitoring data={content.smartMonitoring} />
      <FarmerNetwork data={content.farmerNetwork} />
    </div>
  );
}
