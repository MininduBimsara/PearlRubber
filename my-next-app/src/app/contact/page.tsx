import ContactHero from "@/components/Contact/ContactHero";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import SocialLinks from "@/components/Contact/SocialLinks";

export default function ContactPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`,
        }}
      />

      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
          {/* Left Panel */}
          <div className="space-y-8">
            <ContactInfo />
            <SocialLinks />
          </div>

          {/* Right Panel */}
          <div className="flex items-center justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
