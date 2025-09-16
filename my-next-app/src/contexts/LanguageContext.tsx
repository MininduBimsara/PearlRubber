// contexts/LanguageContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "si";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

// Common translations used across components
const commonTranslations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.contact": "Contact",

    // Common buttons
    "button.learnMore": "Learn More",
    "button.getStarted": "Get Started",
    "button.contactUs": "Contact Us",
    "button.readMore": "Read More",
    "button.download": "Download",
    "button.viewMore": "View More",

    // Common labels
    "label.phone": "Phone",
    "label.email": "Email",
    "label.website": "Website",
    "label.address": "Address",
    "label.language": "Language",

    // Status
    "status.active": "Active",
    "status.inactive": "Inactive",
    "status.pending": "Pending",
    "status.completed": "Completed",

    // Time
    "time.today": "Today",
    "time.yesterday": "Yesterday",
    "time.thisWeek": "This Week",
    "time.lastWeek": "Last Week",
    "time.thisMonth": "This Month",

    // Units
    "unit.hectares": "hectares",
    "unit.farmers": "farmers",
    "unit.plantations": "plantations",
    "unit.tons": "tons",
  },
  si: {
    // Navigation
    "nav.home": "මුල් පිටුව",
    "nav.about": "අප ගැන",
    "nav.products": "නිෂ්පාදන",
    "nav.contact": "සම්බන්ධතා",

    // Common buttons
    "button.learnMore": "තව දැනගන්න",
    "button.getStarted": "ආරම්භ කරන්න",
    "button.contactUs": "අප හමුවන්න",
    "button.readMore": "තව කියවන්න",
    "button.download": "බාගන්න",
    "button.viewMore": "තව බලන්න",

    // Common labels
    "label.phone": "දුරකථනය",
    "label.email": "ඊමේල්",
    "label.website": "වෙබ් අඩවිය",
    "label.address": "ලිපිනය",
    "label.language": "භාෂාව",

    // Status
    "status.active": "ක්‍රියාශීලී",
    "status.inactive": "අක්‍රීය",
    "status.pending": "බලා සිටින",
    "status.completed": "සම්පූර්ණ",

    // Time
    "time.today": "අද",
    "time.yesterday": "ඊයේ",
    "time.thisWeek": "මේ සතියේ",
    "time.lastWeek": "පසුගිය සතියේ",
    "time.thisMonth": "මේ මාසයේ",

    // Units
    "unit.hectares": "හෙක්ටර්",
    "unit.farmers": "ගොවීන්",
    "unit.plantations": "වතුකරණ",
    "unit.tons": "ටොන්",
  },
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("en");

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      "preferred-language"
    ) as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "si")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Save language to localStorage when changed
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred-language", lang);
  };

  // Translation function for common strings
  const t = (key: string): string => {
    return (
      commonTranslations[language][
        key as keyof (typeof commonTranslations)["en"]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Utility hook for loading content files
export const useContent = (
  contentType: "homepage" | "about" | "contact" | "product"
) => {
  const { language } = useLanguage();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        const suffix = language === "si" ? "-si" : "";
        const contentPath = `/data/content/${contentType}${suffix}.json`;

        const response = await fetch(contentPath);
        if (!response.ok) {
          throw new Error(`Failed to load ${contentType} content`);
        }

        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error(`Error loading ${contentType} content:`, error);
        // Fallback to English if Sinhala content fails to load
        if (language === "si") {
          try {
            const fallbackResponse = await fetch(
              `/data/content/${contentType}.json`
            );
            const fallbackData = await fallbackResponse.json();
            setContent(fallbackData);
          } catch (fallbackError) {
            console.error("Fallback content also failed:", fallbackError);
          }
        }
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [contentType, language]);

  return { content, loading };
};

export default LanguageContext;
