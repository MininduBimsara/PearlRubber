// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EcoRubber - Sustainable Rubber Tree Plantations",
  description:
    "Explore how rubber tree plantations support livelihoods and promote eco-friendly industries through sustainable farming practices.",
  keywords:
    "rubber trees, sustainable farming, eco-friendly, natural rubber, plantations",
  authors: [{ name: "EcoRubber Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
