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
      >
        
      </div>

      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-green-300 transform rotate-45"></div>
        <div className="absolute top-40 right-40 w-24 h-24 border-2 border-amber-300 transform rotate-12"></div>
        <div className="absolute bottom-40 right-60 w-40 h-40 border-2 border-green-200 transform -rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-amber-200 transform rotate-45"></div>
      </div>

      {/* Hexagonal Pattern */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <svg
          className="w-full h-full opacity-5"
          viewBox="0 0 400 400"
          fill="none"
        >
          {[...Array(6)].map((_, row) =>
            [...Array(4)].map((_, col) => {
              const x = col * 80 + (row % 2) * 40;
              const y = row * 70;
              return (
                <polygon
                  key={`${row}-${col}`}
                  points="30,0 70,22 70,66 30,88 -10,66 -10,22"
                  transform={`translate(${x}, ${y})`}
                  stroke="#318162"
                  strokeWidth="1"
                  fill="none"
                />
              );
            })
          )}
        </svg>
      </div>

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

            {/* Visual Dashboard Preview */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
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
