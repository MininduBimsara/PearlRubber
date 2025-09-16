// hooks/useContentLoader.ts
"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// Import your content directly (this is more reliable than fetching)
import homepageDataEn from "@/data/content/homepage-data.json";
import aboutDataEn from "@/data/content/about.json";
import contactDataEn from "@/data/content/contact.json";
import productDataEn from "@/data/content/product.json";

// Import Sinhala content (you'll need to place these files in the correct location)
import homepageDataSi from "@/data/content/homepage-data-si.json";
import aboutDataSi from "@/data/content/about-si.json";
import contactDataSi from "@/data/content/contact-si.json";
import productDataSi from "@/data/content/product-si.json";

type ContentType = "homepage" | "about" | "contact" | "product";

const contentMap = {
  en: {
    homepage: homepageDataEn,
    about: aboutDataEn,
    contact: contactDataEn,
    product: productDataEn,
  },
  si: {
    homepage: homepageDataSi,
    about: aboutDataSi,
    contact: contactDataSi,
    product: productDataSi,
  },
};

export function useContentLoader(contentType: ContentType) {
  const { language } = useLanguage();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = () => {
      try {
        setLoading(true);
        setError(null);

        const selectedContent = contentMap[language]?.[contentType];

        if (selectedContent) {
          setContent(selectedContent);
        } else {
          // Fallback to English if content not found
          const fallbackContent = contentMap.en[contentType];
          if (fallbackContent) {
            setContent(fallbackContent);
            console.warn(`Falling back to English content for ${contentType}`);
          } else {
            throw new Error(`Content not found for ${contentType}`);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load content");
        console.error(`Error loading ${contentType} content:`, err);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [contentType, language]);

  return { content, loading, error };
}

// Alternative hook that fetches from public folder (if you prefer this approach)
export function useContentFetcher(contentType: ContentType) {
  const { language } = useLanguage();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);

        const suffix = language === "si" ? "-si" : "";
        const contentPath = `/data/content/${contentType}${suffix}.json`;

        const response = await fetch(contentPath);
        if (!response.ok) {
          throw new Error(`Failed to load ${contentType} content`);
        }

        const data = await response.json();
        setContent(data);
      } catch (err) {
        console.error(`Error loading ${contentType} content:`, err);

        // Fallback to English if Sinhala content fails to load
        if (language === "si") {
          try {
            const fallbackResponse = await fetch(
              `/data/content/${contentType}.json`
            );
            if (fallbackResponse.ok) {
              const fallbackData = await fallbackResponse.json();
              setContent(fallbackData);
              console.warn(
                `Falling back to English content for ${contentType}`
              );
            }
          } catch (fallbackError) {
            setError("Failed to load content");
            console.error("Fallback content also failed:", fallbackError);
          }
        } else {
          setError(
            err instanceof Error ? err.message : "Failed to load content"
          );
        }
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [contentType, language]);

  return { content, loading, error };
}
