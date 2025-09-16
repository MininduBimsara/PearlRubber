import React from "react";
import { Smartphone, Monitor, Check } from "lucide-react";
import Image from "next/image";

const iconMap = {
  smartphone: Smartphone,
  monitor: Monitor,
};

interface ApplicationsSectionProps {
  data: {
    badge: {
      text: string;
    };
    heading: string;
    subtitle: string;
    applications: Array<{
      icon: string;
      title: string;
      subtitle: string;
      description: string;
      features: Array<{
        text: string;
        color: string;
      }>;
      gradient: string;
      iconColor: string;
      imageUrl: string;
    }>;
  };
}

export function ApplicationsSection({ data }: ApplicationsSectionProps) {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-green-700">
              {data.badge.text}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {data.heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {data.applications.map((app, index) => {
            const IconComponent = iconMap[app.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className={`${app.gradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-12 h-12 ${app.iconColor} rounded-xl flex items-center justify-center`}
                  >
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {app.title}
                    </h3>
                    <p className="text-gray-600">{app.subtitle}</p>
                  </div>
                </div>

                {/* Updated Image Section */}
                <div className="bg-white rounded-xl mb-2 shadow-sm">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={app.imageUrl}
                      alt={`${app.title} interface`}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {app.description}
                </p>

                <div className="space-y-3">
                  {app.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <Check size={16} className={feature.color} />
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
