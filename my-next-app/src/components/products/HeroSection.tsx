// components/products/HeroSection.tsx
import React from "react";
import {
  Shield,
  Check,
  MapPin,
  Satellite,
  Users,
  BarChart3,
} from "lucide-react";

const iconMap = {
  satellite: Satellite,
  barChart3: BarChart3,
  shield: Shield,
  users: Users,
  mapPin: MapPin,
};

const colorMap = {
  green: "bg-green-600",
  blue: "bg-blue-600",
  yellow: "bg-yellow-500",
  emerald: "bg-emerald-600",
};

interface HeroSectionProps {
  data: {
    badge: {
      text: string;
    };
    heading: {
      main: string;
      highlighted: string;
      continuation: string;
    };
    subtitle: string;
    backgroundImage: string;
    featureCards: Array<{
      title: string;
      description: string;
      icon: string;
      color: string;
    }>;
    stats: Array<{
      number: string;
      label: string;
    }>;
    cta: {
      primary: string;
      secondary: string;
    };
  };
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-green-700">
              {data.badge.text}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {data.heading.main}{" "}
            <span className="text-green-600">{data.heading.highlighted}</span>
            <br />
            {data.heading.continuation}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Interactive Visual Dashboard */}
        <div className="relative bg-gradient-to-br from-green-50 to-gray-50 rounded-3xl p-12 mb-16 shadow-xl overflow-hidden">
          {/* Background Image Pattern */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${data.backgroundImage}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-gray-50/80"></div>
          </div>

          {/* Central Hub */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            {/* Main Center Circle */}
            <div className="relative z-10">
              <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-green-100">
                <MapPin size={48} className="text-green-600" />
              </div>

              {/* Connecting Lines */}
              <div className="absolute top-1/2 left-1/2 w-64 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent transform -translate-y-px -translate-x-1/2"></div>
              <div className="absolute top-1/2 left-1/2 w-px h-64 bg-gradient-to-b from-transparent via-green-300 to-transparent transform -translate-x-px -translate-y-1/2"></div>
            </div>

            {/* Product Feature Circles */}
            {data.featureCards.map((feature, index) => {
              const IconComponent =
                iconMap[feature.icon as keyof typeof iconMap];
              const positions = [
                "top-8 left-1/2 transform -translate-x-1/2",
                "right-8 top-1/2 transform -translate-y-1/2",
                "bottom-8 left-1/2 transform -translate-x-1/2",
                "left-8 top-1/2 transform -translate-y-1/2",
              ];

              return (
                <div key={index} className={`absolute ${positions[index]}`}>
                  <div
                    className={`w-20 h-20 ${
                      colorMap[feature.color as keyof typeof colorMap]
                    } rounded-full shadow-lg flex items-center justify-center`}
                  >
                    <IconComponent
                      size={32}
                      className={
                        feature.color === "yellow" ? "text-black" : "text-white"
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feature Cards */}
          {data.featureCards.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            const positions = [
              "top-6 left-6",
              "top-6 right-6",
              "bottom-6 left-6",
              "bottom-6 right-6",
            ];
            const colorClasses = {
              green: "text-green-600",
              blue: "text-blue-600",
              yellow: "text-yellow-600",
              emerald: "text-emerald-600",
            };

            return (
              <div
                key={index}
                className={`absolute ${positions[index]} bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 max-w-xs`}
              >
                <div className="flex items-center mb-2">
                  <IconComponent
                    size={16}
                    className={`${
                      colorClasses[feature.color as keyof typeof colorClasses]
                    } mr-2`}
                  />
                  <span className="text-sm font-semibold text-gray-900">
                    {feature.title}
                  </span>
                </div>
                <div className="text-xs text-gray-600">
                  {feature.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Product Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
          {data.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">{data.cta.primary}</button>
            <button className="btn-secondary">{data.cta.secondary}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
