import React from "react";
import { MapPin, TrendingUp, Users } from "lucide-react";

const iconMap = {
  mapPin: MapPin,
  trendingUp: TrendingUp,
  users: Users,
};

interface StatsSectionProps {
  data: {
    badge: {
      text: string;
    };
    heading: {
      main: string;
      highlighted: string;
    };
    subtitle: string;
    mainStats: Array<{
      number: string;
      label: string;
      icon: string;
      description: string;
    }>;
    additionalMetrics: Array<{
      number: string;
      label: string;
    }>;
  };
}

export function StatsSection({ data }: StatsSectionProps) {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-green-800">
              {data.badge.text}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {data.heading.main}{" "}
            <span className="text-green-600">{data.heading.highlighted}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.mainStats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-white" size={24} />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-3">
                  {stat.label}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional metrics */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {data.additionalMetrics.map((metric, index) => (
              <div key={index}>
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {metric.number}
                </div>
                <div className="text-sm text-gray-500">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
