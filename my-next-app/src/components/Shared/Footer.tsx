// components/Footer.tsx
import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="glass-panel p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="glass-button p-2 text-green-700 hover:bg-green-100/20"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="glass-button p-2 text-green-700 hover:bg-green-100/20"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="glass-button p-2 text-green-700 hover:bg-green-100/20"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* Brand Logo */}
            <div className="flex items-center text-lg font-semibold text-slate-800">
              <span className="mr-2">♻️</span>
              Down to Earth
            </div>

            {/* Copyright */}
            <div className="text-sm text-slate-600">
              © 2025 EcoRubber. Sustainably grown.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
