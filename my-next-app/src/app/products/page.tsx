// app/products/geo-mapping/page.tsx
import  Navbar  from "@/components/HomePage/NavBar";
import { HeroSection } from "@/components/products/HeroSection";
import { ComplianceSection } from "@/components/products/ComplianceSection";
import { ApplicationsSection } from "@/components/products/ApplicationsSection";
import { StatsSection } from "@/components/products/StatsSection";
import { CTASection } from "@/components/products/CTASection";
import { Footer } from "@/components/HomePage/Footer";

export default function GeoMappingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ComplianceSection />
      <ApplicationsSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
