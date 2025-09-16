// app/contact/page.tsx
import ContactHeader from "@/components/Contact/ContactHeader";
import ContactForm from "@/components/Contact/ContactForm";
import Image from "next/image";
import contactData from "@/data/contact-page-data.json";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white relative mt-20">
      {/* Original background content - slightly blurred */}
      <div className="absolute inset-0 filter blur-sm opacity-60">
        <main className="container mx-auto px-6 py-16 max-w-6xl">
          <Image
            src={contactData.page.backgroundImage}
            alt={contactData.page.backgroundImageAlt}
            fill // makes the image cover the parent div
            style={{ objectFit: "cover" }}
          />
        </main>
      </div>

      {/* Glassmorphism overlay - reduced size */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div
          className={`w-full max-w-3xl ${contactData.page.glassmorphism.backdropBlur} ${contactData.page.glassmorphism.backgroundColor} border ${contactData.page.glassmorphism.borderColor} ${contactData.page.glassmorphism.borderRadius} shadow-2xl p-6 md:p-8`}
          style={{
            fontFamily: contactData.page.fontFamily,
          }}
        >
          <main className="container mx-auto max-w-4xl">
            <ContactHeader data={contactData.header} />
            <ContactForm data={contactData.form} />
          </main>
        </div>
      </div>
    </div>
  );
}
