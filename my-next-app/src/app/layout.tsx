import type { Metadata } from "next";
import type { Viewport } from "next";
import Navbar from "@/components/Shared/NavBar";
import { Footer } from "@/components/Shared/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "EcoRubber - Sustainable Rubber Tree Plantations",
  description:
    "Explore how rubber tree plantations support livelihoods and promote eco-friendly industries through sustainable farming practices.",
  keywords:
    "rubber trees, sustainable farming, eco-friendly, natural rubber, plantations",
  authors: [{ name: "EcoRubber Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌳</text></svg>"
        />
      </head>
      <body>
      <Navbar />
      
      {children}
      
      <Footer />
      </body>
    </html>
  );
}
