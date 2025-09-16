"use client";

import ContactHeader from "@/components/Contact/ContactHeader";
import ContactForm from "@/components/Contact/ContactForm";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContentLoader } from "@/hooks/useContentLoader";

export default function ContactPage() {
  const { content, loading, error } = useContentLoader("contact");
  const { language } = useLanguage();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white mt-20">
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
      <div className="flex items-center justify-center min-h-screen bg-white mt-20">
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
    <div className="min-h-screen bg-white relative mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 filter blur-sm opacity-60">
        <Image
          src={content.page.backgroundImage}
          alt={content.page.backgroundImageAlt || ""}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Glassmorphism overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div
          className={`w-full max-w-3xl ${content.page.glassmorphism.backdropBlur} ${content.page.glassmorphism.backgroundColor} border ${content.page.glassmorphism.borderColor} ${content.page.glassmorphism.borderRadius} shadow-2xl p-6 md:p-8`}
          style={{ fontFamily: content.page.fontFamily }}
        >
          <main className="container mx-auto max-w-4xl">
            <ContactHeader data={content.header} />
            <ContactForm data={content.form} />
          </main>
        </div>
      </div>
    </div>
  );
}
