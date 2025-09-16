"use client";

import { useState, useEffect } from "react";
import { ChevronRight, Play, MapPin, TrendingUp, Shield } from "lucide-react";

interface HeroData {
  badge: {
    text: string;
    bgColor: string;
    textColor: string;
    dotColor: string;
  };
  title: string;
  subtitle: string;
  cta: {
    primary: {
      text: string;
      icon: string;
    };
    secondary: {
      text: string;
      icon: string;
    };
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
  backgroundImage: string;
  dashboardImage: string;
  floatingCards: Array<{
    position: string;
    icon: string;
    title: string;
    subtitle?: string;
    status?: string;
    statusColor?: string;
    metrics?: Array<{
      value: string;
      label: string;
      color: string;
    }>;
  }>;
}

interface HeroProps {
  data: HeroData;
}

const iconMap = {
  ChevronRight,
  Play,
  MapPin,
  TrendingUp,
  Shield,
};

export default function Hero({ data }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const PrimaryIcon = iconMap[data.cta.primary.icon as keyof typeof iconMap];
  const SecondaryIcon =
    iconMap[data.cta.secondary.icon as keyof typeof iconMap];

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${data.backgroundImage}')`,
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
              <div
                className={`inline-flex items-center px-4 py-2 ${data.badge.bgColor} rounded-full`}
              >
                <div
                  className={`w-2 h-2 ${data.badge.dotColor} rounded-full mr-2`}
                ></div>
                <span className={`text-sm font-medium ${data.badge.textColor}`}>
                  {data.badge.text}
                </span>
              </div>

              {/* Main Heading */}
              <h1
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />

              {/* Subtitle */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                {data.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  {data.cta.primary.text}
                  <PrimaryIcon className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-gray-200 hover:border-green-500 text-gray-700 hover:text-green-600 font-semibold rounded-xl transition-all duration-300">
                  <SecondaryIcon className="mr-2 w-5 h-5" />
                  {data.cta.secondary.text}
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                {data.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-green-600">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
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
                  src={data.dashboardImage}
                  alt="Rubber plantation management dashboard"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />

                {/* Floating Info Cards */}
                {data.floatingCards.map((card, index) => {
                  const Icon = iconMap[card.icon as keyof typeof iconMap];
                  return (
                    <div
                      key={index}
                      className={`absolute ${card.position} bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 max-w-xs`}
                    >
                      <div className="flex items-center mb-2">
                        <Icon className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-sm font-semibold text-gray-900">
                          {card.title}
                        </span>
                      </div>
                      {card.subtitle && (
                        <div className="text-xs text-gray-600">
                          {card.subtitle}
                        </div>
                      )}
                      {card.status && (
                        <div className="flex items-center mt-2">
                          {card.statusColor?.includes("green") && (
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                          )}
                          <span
                            className={`text-xs font-medium ${card.statusColor}`}
                          >
                            {card.status}
                          </span>
                        </div>
                      )}
                      {card.metrics && (
                        <div className="grid grid-cols-2 gap-2 text-xs mt-2">
                          {card.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex}>
                              <div className={`font-bold ${metric.color}`}>
                                {metric.value}
                              </div>
                              <div className="text-gray-600">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
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
