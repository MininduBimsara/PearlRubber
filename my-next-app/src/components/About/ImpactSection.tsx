import React from 'react';

const metrics = [
  {
    value: "50,000+",
    label: "Active Users",
    description: "Rubber farmers, plantation managers, and industry stakeholders actively using our platform",
    growth: "+127% this year"
  },
  {
    value: "99.9%",
    label: "Accuracy Rate",
    description: "Precision in geo-mapping and land boundary identification across all monitored plantations",
    growth: "Industry leading"
  },
  {
    value: "226,000",
    label: "Data Points Processed",
    description: "Real-time agricultural and environmental data points processed monthly",
    growth: "+340% quarterly"
  },
  {
    value: "850,000",
    label: "Hectares Mapped",
    description: "Total rubber plantation area mapped and monitored across Sri Lanka",
    growth: "78% coverage"
  }
];

const achievements = [
  {
    title: "EUDR Compliance Excellence",
    description: "100% of our partner plantations now meet European Union Deforestation Regulation requirements through our comprehensive tracking system.",
    metric: "100% Compliance Rate"
  },
  {
    title: "Sustainable Practices Adoption",
    description: "Significant reduction in environmental impact through optimized resource usage and deforestation prevention across monitored areas.",
    metric: "35% Carbon Reduction"
  },
  {
    title: "Economic Impact",
    description: "Direct positive economic impact on rubber farming communities through improved yield management and market access.",
    metric: "$12.5M Generated"
  },
  {
    title: "Technology Innovation",
    description: "Pioneer in applying advanced geo-mapping technology to tropical agriculture, setting new industry standards.",
    metric: "3 Patents Pending"
  }
];

export default function ImpactSection() {
  return (
    <section className="py-24 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-8 leading-tight">
            Our Impact
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Measurable results that demonstrate our commitment to transforming Sri Lanka's rubber industry 
            through technology, sustainability, and innovation.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="bg-white rounded-2xl p-8 text-center shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="mb-4">
                <div className="text-4xl md:text-5xl font-black text-emerald-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-bold text-stone-900">
                  {metric.label}
                </div>
              </div>
              
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                {metric.description}
              </p>
              
              <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
                {metric.growth}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-stone-900 text-center mb-16">
            Key Achievements
          </h3>
          
          <div className="grid gap-8 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-2xl font-bold text-stone-900 flex-1">
                    {achievement.title}
                  </h4>
                  <span className="bg-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full ml-4 whitespace-nowrap">
                    {achievement.metric}
                  </span>
                </div>
                
                <p className="text-stone-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-800 via-emerald-900 to-stone-900 rounded-3xl p-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Building a Sustainable Future
            </h3>
            <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Our impact extends beyond numbers. We're creating lasting change in how Sri Lanka approaches 
              rubber cultivation, environmental stewardship, and global trade compliance.
            </p>
            
            <div className="grid gap-6 md:grid-cols-3 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">2019</div>
                <div className="text-emerald-200 text-sm">Platform Launch</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">2023</div>
                <div className="text-emerald-200 text-sm">EUDR Compliance Leader</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">2025</div>
                <div className="text-emerald-200 text-sm">Industry Standard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}