// components/HomePage/NavBar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  const isActivePage = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
        <div className="glass-panel px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Link to home */}
            <Link
              href="/"
              className="flex items-center text-2xl font-bold text-green-700 hover:text-green-800 transition-colors"
            >
              <span className="mr-2 text-3xl">🌳</span>
              EcoRubber
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative font-medium transition-colors duration-300 group ${
                      isActivePage(link.href)
                        ? "text-green-700"
                        : "text-slate-800 hover:text-green-700"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-green-700 transition-all duration-300 ${
                        isActivePage(link.href)
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="glass-button p-2 text-green-700 hover:bg-green-100/20">
                <Search size={20} />
              </button>
              <button className="glass-button p-2 text-green-700 hover:bg-green-100/20">
                <User size={20} />
              </button>
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden glass-button p-2 text-green-700 hover:bg-green-100/20"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 glass-panel p-6 animate-slide-down">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-lg font-medium py-3 border-b border-green-100/20 transition-colors ${
                      isActivePage(link.href)
                        ? "text-green-700"
                        : "text-slate-800 hover:text-green-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
