// components/ClientLayout.tsx
"use client";

import { ReactNode } from "react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Shared/NavBar";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <LanguageProvider>
      <LayoutContent>{children}</LayoutContent>
    </LanguageProvider>
  );
}

// Separate component to use the language context
function LayoutContent({ children }: ClientLayoutProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <>
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main>{children}</main>
    </>
  );
}
