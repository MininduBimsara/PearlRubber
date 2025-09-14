"use client";

import { useState, useEffect } from "react";
import { ChevronRight, Play, MapPin, TrendingUp, Shield } from "lucide-react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=1920&h=1080&fit=crop')`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="pt-20 pb-16 lg:pt-32 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-green-700">
                  Next Generation Agriculture
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Complete <span className="text-green-600">Plantation</span>{" "}
                Management System
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                We partner with enterprises, startups, and governments worldwide
                to develop cutting-edge technology products and Artificial
                Intelligence solutions for sustainable rubber plantation
                management in Sri Lanka.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Explore Dashboard
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-gray-200 hover:border-green-500 text-gray-700 hover:text-green-600 font-semibold rounded-xl transition-all duration-300">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">30K+</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Registered Farms
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500K</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Hectares Monitored
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">95%</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Accuracy Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Dashboard Preview with Image */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Main Image Container */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop"
                  alt="Rubber plantation management dashboard"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />

                {/* Floating Info Cards */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 max-w-xs">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm font-semibold text-gray-900">
                      Live Monitoring
                    </span>
                  </div>
                  <div className="text-xs text-gray-600">
                    247.8 hectares tracked
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">
                      Active
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 max-w-xs">
                  <div className="flex items-center mb-2">
                    <Shield className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm font-semibold text-gray-900">
                      EUDR Status
                    </span>
                  </div>
                  <div className="text-xs text-green-600 font-medium">
                    100% Compliant
                  </div>
                  <div className="text-xs text-gray-600">
                    Last verified: 2 hours ago
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 max-w-xs">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-gray-900">
                      Analytics
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="font-bold text-green-600">95%</div>
                      <div className="text-gray-600">Accuracy</div>
                    </div>
                    <div>
                      <div className="font-bold text-blue-600">24/7</div>
                      <div className="text-gray-600">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute -z-10 top-8 right-8 w-32 h-32 bg-green-100 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-8 left-8 w-24 h-24 bg-yellow-100 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
