// app/page.tsx
import  Navbar  from "@/components/HomePage/NavBar";
import { HeroSection } from "@/components/HomePage/HeroSection";
import { FeaturesSection } from "@/components/HomePage/FeaturesSection";
import { Footer } from "@/components/HomePage/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-green-600/40 via-transparent to-amber-400/30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1574263867128-a5d60b2f9019?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
