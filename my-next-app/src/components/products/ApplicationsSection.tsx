import React from "react";
import { Smartphone, Monitor, Check } from "lucide-react";

interface AppFeature {
  text: string;
  color: string;
}

interface AppConfig {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  features: AppFeature[];
  gradient: string;
  iconColor: string;
  imageUrl: string; // Added image URL
}

const applications: AppConfig[] = [
  {
    icon: Smartphone,
    title: "Mobile Application",
    subtitle: "Field data collection made simple",
    description:
      "Our mobile application revolutionizes data collection for natural rubber processing factories in Sri Lanka. Designed with an intuitive interface, the application enables straightforward information gathering directly from farmers. Recognizing the challenges of working in remote plantation areas, we have engineered the application to function seamlessly offline.",
    features: [
      { text: "Offline data collection capability", color: "text-green-500" },
      { text: "GPS-enabled boundary mapping", color: "text-green-500" },
      { text: "Multi-language support", color: "text-green-500" },
    ],
    gradient: "bg-gradient-to-br from-green-50 to-blue-50",
    iconColor: "bg-gradient-to-br from-green-500 to-green-600",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop", // Mobile app mockup
  },
  {
    icon: Monitor,
    title: "Web Dashboard",
    subtitle: "Comprehensive data management",
    description:
      "The RubberWay web dashboard serves as a powerful data management and compliance tool specifically designed for Sri Lankan rubber processing facilities. It aggregates all required information, providing a centralized platform for comprehensive data oversight. Compliance checks run seamlessly, allowing users to quickly identify and address potential issues.",
    features: [
      { text: "Real-time compliance monitoring", color: "text-blue-500" },
      { text: "Advanced analytics and reporting", color: "text-blue-500" },
      { text: "Multi-user access control", color: "text-blue-500" },
    ],
    gradient: "bg-gradient-to-br from-blue-50 to-purple-50",
    iconColor: "bg-gradient-to-br from-blue-500 to-blue-600",
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop", // Desktop dashboard mockup
  },
];

export function ApplicationsSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-green-700">
              Applications Suite
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Applications Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete ecosystem of mobile and web applications designed
            specifically for Sri Lankan rubber processing facilities and
            farmers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {applications.map((app, index) => {
            const IconComponent = app.icon;
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
                <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={app.imageUrl}
                      alt={`${app.title} interface`}
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
