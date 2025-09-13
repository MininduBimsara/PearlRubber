// components/products/HeroSection.tsx
import React from "react";
import { Shield, Check, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                <Shield size={16} className="mr-2" />
                EUDR Compliance Solution
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Advanced
                <span className="block text-green-600">Geo-Mapping</span>
                for Sri Lankan Rubber
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                An all-in-one solution simplifying EUDR compliance for Sri
                Lankan rubber plantations with cutting-edge technology and local
                expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors font-semibold">
                Start Compliance Journey
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-green-600 hover:text-green-600 transition-colors font-semibold">
                Learn More
              </button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Check size={16} className="text-green-500" />
                <span>Real-time Monitoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check size={16} className="text-green-500" />
                <span>Offline Capable</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check size={16} className="text-green-500" />
                <span>Local Support</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 h-96 lg:h-[500px] overflow-hidden">
              {/* Geometric Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-6 gap-4 h-full">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-lg ${
                        i % 3 === 0
                          ? "bg-green-500"
                          : i % 3 === 1
                          ? "bg-blue-500"
                          : "bg-gray-400"
                      }`}
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        animation: "pulse 2s infinite",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Central Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <MapPin size={48} className="text-green-600" />
                </div>
              </div>

              {/* Floating Info Cards */}
              <div className="absolute top-8 left-8 bg-white rounded-lg shadow-lg p-3 max-w-xs">
                <div className="text-sm font-semibold text-gray-900">
                  Plantation Area
                </div>
                <div className="text-xs text-gray-500">
                  125.8 hectares mapped
                </div>
              </div>

              <div className="absolute bottom-8 right-8 bg-white rounded-lg shadow-lg p-3 max-w-xs">
                <div className="text-sm font-semibold text-gray-900">
                  Compliance Status
                </div>
                <div className="text-xs text-green-600 flex items-center">
                  <Check size={12} className="mr-1" />
                  EUDR Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
