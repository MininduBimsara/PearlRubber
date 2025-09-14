// components/products/ComplianceSection.tsx
import React from "react";
import { Check } from "lucide-react";

interface ComplianceFeature {
  title: string;
  description: string;
  color: string;
}

const complianceFeatures: ComplianceFeature[] = [
  {
    title: "Polygon Quality",
    description: "Precise boundary verification for accurate mapping",
    color: "bg-blue-500",
  },
  {
    title: "Historical Material Presence",
    description: "Track historical deforestation and land use changes",
    color: "bg-green-500",
  },
  {
    title: "Protected Areas Overlap",
    description: "Identify conflicts with conservation zones",
    color: "bg-orange-500",
  },
  {
    title: "Local Regulations",
    description: "Ensure compliance with Sri Lankan forestry laws",
    color: "bg-purple-500",
  },
];

const verificationPoints = [
  {
    title: "Automated Detection",
    description: "AI-powered analysis of historical satellite imagery",
  },
  {
    title: "Real-time Monitoring",
    description: "Continuous compliance tracking and alerts",
  },
  {
    title: "Local Expertise",
    description: "Sri Lankan regulatory knowledge built-in",
  },
];

export function ComplianceSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive EUDR Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RubberWay Geo-Mapping minimizes non-compliance with EUDR through a
            robust verification process tailored for Sri Lankan rubber
            plantations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Representation */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-4">
                {complianceFeatures.map((feature, index) => (
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
              Advanced Verification Process
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our platform meticulously collects and checks all required
              information, going beyond simple data gathering. We conduct
              detailed assessments including detection of historical
              deforestation, verification of polygon quality, identification of
              overlaps with Protected Areas, and comprehensive checks on
              compliance with local regulations for both farmers and plots.
            </p>
            <div className="space-y-4">
              {verificationPoints.map((point, index) => (
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
