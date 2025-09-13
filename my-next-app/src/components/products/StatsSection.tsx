// components/products/StatsSection.tsx
import React from "react";
import { MapPin, TrendingUp, Users, LucideIcon } from "lucide-react";

interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
}

const stats: Stat[] = [
  { number: "25+", label: "Processing Factories", icon: MapPin },
  { number: "1000+", label: "Rubber Plots Mapped", icon: TrendingUp },
  { number: "5000+", label: "Farmers Connected", icon: Users },
];

export function StatsSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of farmers and processing facilities across Sri Lanka
            who trust RubberWay for their EUDR compliance needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                  <IconComponent className="text-white" size={24} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
