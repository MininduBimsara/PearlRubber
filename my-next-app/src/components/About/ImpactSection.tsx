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
      icon: "📍",
    },
    {
      value: "100%",
      label: "EUDR Success Rate",
      description: "Perfect compliance record for all partner plantations",
      icon: "✅",
    },
  ];

  return (
    <section className="py-20 px-5 bg-gradient-to-b from-green-50/30 to-cream-50/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Our Impact
          </h2>
          <p className="text-lg text-slate-700/80 max-w-3xl mx-auto leading-relaxed">
            Measurable results in transforming Sri Lanka's rubber industry
            compliance
          </p>
        </div>

        {/* Metrics Grid - Floating Dashboard Style */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="relative group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Main Card */}
              <div className="glass-panel bg-white/70 border border-green-100/40 p-8 text-center hover:transform hover:-translate-y-4 transition-all duration-500 relative z-10">
                {/* Icon Background */}
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-3xl">{metric.icon}</span>
                </div>

                {/* Metric Value */}
                <div className="text-4xl font-black text-slate-800 mb-2">
                  {metric.value}
                </div>

                {/* Label */}
                <h3 className="text-lg font-bold text-slate-800 mb-3">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-700/80 leading-relaxed">
                  {metric.description}
                </p>
              </div>

              {/* Floating Background Element */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-amber-200/20 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Success Highlights
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Story 1 */}
            <div className="glass-panel bg-gradient-to-br from-blue-100/30 to-white/50 border border-blue-200/30 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🌱</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Smallholder Success
                  </h4>
                  <p className="text-slate-700/80 leading-relaxed">
                    Over 25,000 small-scale rubber farmers now have direct
                    access to European markets through our EUDR compliance
                    platform, increasing their income by an average of 35%.
                  </p>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="glass-panel bg-gradient-to-br from-amber-100/30 to-white/50 border border-amber-200/30 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🏭</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Industry Transformation
                  </h4>
                  <p className="text-slate-700/80 leading-relaxed">
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
          <div className="glass-panel bg-gradient-to-r from-green-600/90 via-green-500/90 to-blue-600/90 backdrop-blur-lg p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-32 h-32 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/20 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">
                Leading Sri Lanka's Green Future
              </h3>
              <p className="text-lg text-green-100 leading-relaxed mb-8">
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
