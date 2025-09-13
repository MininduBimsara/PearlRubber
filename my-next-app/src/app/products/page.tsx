// app/products/geo-mapping/page.tsx
import { HeroSection } from "@/components/products/HeroSection";
import { ComplianceSection } from "@/components/products/ComplianceSection";
import { ApplicationsSection } from "@/components/products/ApplicationsSection";
import { StatsSection } from "@/components/products/StatsSection";
import { CTASection } from "@/components/products/CTASection";

export default function GeoMappingPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ComplianceSection />
      <ApplicationsSection />
      <StatsSection />
      <CTASection />
    </main>
  );
}
