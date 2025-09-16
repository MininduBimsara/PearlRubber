// components/Shared/NavBar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Menu, X, Globe } from "lucide-react";

interface NavBarProps {
  language?: "en" | "si";
  onLanguageChange?: (lang: "en" | "si") => void;
}

export default function Navbar({
  language = "en",
  onLanguageChange,
}: NavBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleLanguageDropdown = () =>
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);

  const translations = {
    en: {
      home: "Home",
      about: "About",
      products: "Products",
      contact: "Contact",
    },
    si: {
      home: "මුල් පිටුව",
      about: "අප ගැන",
      products: "නිෂ්පාදන",
      contact: "සම්බන්ධතා",
    },
  };

  const languages = {
    en: { code: "en", name: "English", flag: "🇺🇸" },
    si: { code: "si", name: "සිංහල", flag: "🇱🇰" },
  };

  const navLinks = [
    { href: "/", label: translations[language].home },
    { href: "/about", label: translations[language].about },
    { href: "/products", label: translations[language].products },
    { href: "/contact", label: translations[language].contact },
  ];

  const isActivePage = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const handleLanguageChange = (lang: "en" | "si") => {
    setIsLanguageDropdownOpen(false);
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
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

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={toggleLanguageDropdown}
                  className="glass-button p-2 text-green-700 hover:bg-green-100/20 flex items-center space-x-1"
                  aria-label="Change language"
                >
                  <Globe size={16} />
                  <span className="text-sm font-medium">
                    {languages[language].flag}
                  </span>
                </button>

                {/* Language Dropdown */}
                {isLanguageDropdownOpen && (
                  <>
                    {/* Backdrop */}
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsLanguageDropdownOpen(false)}
                    />

                    {/* Dropdown Menu */}
                    <div className="absolute right-0 top-full mt-2 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-white/20 py-2 min-w-[120px] z-20">
                      {Object.entries(languages).map(([code, lang]) => (
                        <button
                          key={code}
                          onClick={() =>
                            handleLanguageChange(code as "en" | "si")
                          }
                          className={`w-full px-4 py-2 text-left hover:bg-green-50/50 transition-colors flex items-center space-x-2 ${
                            language === code
                              ? "bg-green-50/50 text-green-700"
                              : "text-slate-700"
                          }`}
                        >
                          <span className="text-sm">{lang.flag}</span>
                          <span className="text-sm font-medium">
                            {lang.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <button
                onClick={toggleMobileMenu}
                className="lg:hidden glass-button p-2 text-green-700 hover:bg-green-100/20"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Mobile Menu Backdrop */}
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Content */}
            <div className="relative lg:hidden mt-2 glass-panel p-6 animate-slide-down z-20">
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

              {/* Mobile Language Switcher */}
              <div className="mt-6 pt-4 border-t border-green-100/20">
                <div className="text-sm font-medium text-slate-600 mb-3 flex items-center">
                  <Globe size={16} className="mr-2" />
                  {language === "en" ? "Language" : "භාෂාව"}
                </div>
                <div className="flex space-x-2">
                  {Object.entries(languages).map(([code, lang]) => (
                    <button
                      key={code}
                      onClick={() => {
                        handleLanguageChange(code as "en" | "si");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1 ${
                        language === code
                          ? "bg-green-100/50 text-green-700 border border-green-200/50"
                          : "bg-white/30 text-slate-700 hover:bg-green-50/30"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
