// components/products/ComplianceSection.tsx
import React from "react";
import { Check } from "lucide-react";

interface ComplianceSectionProps {
  data: {
    heading: string;
    subtitle: string;
    features: Array<{
      title: string;
      description: string;
      color: string;
    }>;
    verificationProcess: {
      title: string;
      description: string;
      points: Array<{
        title: string;
        description: string;
      }>;
    };
  };
}

export function ComplianceSection({ data }: ComplianceSectionProps) {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {data.heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Representation */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-4">
                {data.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className={`w-4 h-4 rounded-full ${feature.color}`} />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        {feature.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                  <Check size={24} className="text-green-600" />
                </div>
                <div className="mt-2 text-sm font-semibold text-green-600">
                  Verification Complete
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {data.verificationProcess.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {data.verificationProcess.description}
            </p>
            <div className="space-y-4">
              {data.verificationProcess.points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check
                    size={20}
                    className="text-green-500 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {point.title}
                    </div>
                    <div className="text-gray-600">{point.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
