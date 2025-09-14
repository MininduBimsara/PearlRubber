import React from "react";

export default function ComplianceImpact() {
  const metrics = [
    {
      value: "30K+",
      label: "Rubber Farms Compliant",
      description:
        "Small and medium rubber plantations now meeting EUDR standards",
      icon: "🏭",
    },
    {
      value: "5",
      label: "Tire Manufacturers",
      description: "Major tire companies served with compliant rubber supply",
      icon: "🚗",
    },
    {
      value: "95%",
      label: "Traceability Rate",
      description: "Complete supply chain visibility from tree to tire",
      icon: "🔍",
    },
    {
      value: "100%",
      label: "EUDR Success Rate",
      description: "Perfect compliance record for all partner plantations",
      icon: "✅",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-green-800">
              Our Impact
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Measurable <span className="text-green-600">Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming Sri Lanka's rubber industry compliance with real,
            measurable outcomes that benefit farmers and the environment.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Icon Background */}
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">{metric.icon}</span>
              </div>

              {/* Metric Value */}
              <div className="text-4xl font-bold text-green-600 mb-2">
                {metric.value}
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {metric.label}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Success Highlights
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Story 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🌱</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Smallholder Success
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Over 25,000 small-scale rubber farmers now have direct
                    access to European markets through our EUDR compliance
                    platform, increasing their income by an average of 35%.
                  </p>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black text-xl">🏭</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Industry Transformation
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Major tire manufacturers now have complete supply chain
                    transparency, ensuring their products meet the highest
                    environmental and ethical standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-12 text-white shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">
                Leading Sri Lanka's Green Future
              </h3>
              <p className="text-xl text-green-100 leading-relaxed mb-8">
                Together, we're building a sustainable rubber industry that
                protects our environment while ensuring economic prosperity for
                all stakeholders in the supply chain.
              </p>

              <div className="flex justify-center gap-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold">2024</div>
                  <div className="text-green-200">EUDR Launch</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2025</div>
                  <div className="text-green-200">Full Compliance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2026</div>
                  <div className="text-green-200">Global Standard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
