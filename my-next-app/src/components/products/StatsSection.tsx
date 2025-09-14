import React from "react";
import { MapPin, TrendingUp, Users, LucideIcon } from "lucide-react";

interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
  description: string;
}

const stats: Stat[] = [
  {
    number: "25+",
    label: "Processing Factories",
    icon: MapPin,
    description: "Sri Lankan rubber processing facilities using our platform",
  },
  {
    number: "1000+",
    label: "Rubber Plots Mapped",
    icon: TrendingUp,
    description: "Hectares of plantation land accurately mapped and monitored",
  },
  {
    number: "5000+",
    label: "Farmers Connected",
    icon: Users,
    description: "Smallholder farmers integrated into the digital ecosystem",
  },
];

export function StatsSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-green-800">
              Our Impact
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-green-600">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of farmers and processing facilities across Sri Lanka
            who trust RubberWay for their EUDR compliance needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
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
            <div>
              <div className="text-2xl font-bold text-green-600 mb-1">
                99.9%
              </div>
              <div className="text-sm text-gray-500">System Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
              <div className="text-sm text-gray-500">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 mb-1">24/7</div>
              <div className="text-sm text-gray-500">Support Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-sm text-gray-500">EUDR Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
