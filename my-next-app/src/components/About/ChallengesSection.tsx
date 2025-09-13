import React from 'react';

const challenges = [
  {
    title: "Legacy Systems",
    description: "Outdated mapping infrastructure and manual record-keeping processes that limit accuracy and real-time data access across rubber plantations.",
    category: "Infrastructure",
    priority: "Critical",
    solution: "Modern cloud-based geo-mapping platform with automated data collection and real-time synchronization capabilities."
  },
  {
    title: "Limited Data Access",
    description: "Fragmented information systems that prevent stakeholders from accessing comprehensive plantation data and compliance metrics.",
    category: "Accessibility",
    priority: "High",
    solution: "Centralized dashboard providing 24/7 access to all stakeholders with role-based permissions and mobile compatibility."
  },
  {
    title: "Data Inconsistency",
    description: "Inconsistent data formats and collection methods across different regions leading to unreliable reporting and decision-making.",
    category: "Quality",
    priority: "High",
    solution: "Standardized data collection protocols with automated validation and quality control mechanisms."
  },
  {
    title: "Scalability Issues",
    description: "Existing systems unable to handle the growing demands of Sri Lanka's expanding rubber industry and increasing regulatory requirements.",
    category: "Performance",
    priority: "Medium",
    solution: "Scalable cloud infrastructure designed to grow with industry needs and accommodate increasing data volumes."
  },
  {
    title: "EUDR Compliance Gaps",
    description: "Difficulty in meeting European Union Deforestation Regulation requirements due to inadequate traceability and documentation systems.",
    category: "Compliance",
    priority: "Critical",
    solution: "Comprehensive traceability system with blockchain-verified supply chain documentation and automated compliance reporting."
  },
  {
    title: "Environmental Monitoring",
    description: "Limited capability to monitor environmental impact and implement sustainable practices across rubber cultivation areas.",
    category: "Sustainability",
    priority: "High",
    solution: "Integrated environmental monitoring with satellite imagery, soil analysis, and carbon footprint tracking capabilities."
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'Critical':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'High':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Infrastructure':
      return 'bg-blue-50 text-blue-700';
    case 'Accessibility':
      return 'bg-green-50 text-green-700';
    case 'Quality':
      return 'bg-purple-50 text-purple-700';
    case 'Performance':
      return 'bg-indigo-50 text-indigo-700';
    case 'Compliance':
      return 'bg-emerald-50 text-emerald-700';
    case 'Sustainability':
      return 'bg-teal-50 text-teal-700';
    default:
      return 'bg-gray-50 text-gray-700';
  }
};

export default function ChallengesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-8 leading-tight">
            Challenges We Address
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Sri Lanka's rubber industry faces complex challenges that require innovative solutions. 
            Our platform addresses these critical issues with modern technology and data-driven approaches.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {challenges.map((challenge, index) => (
            <div
              key={challenge.title}
              className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Header with Category and Priority */}
              <div className="flex justify-between items-start mb-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(challenge.category)}`}>
                  {challenge.category}
                </span>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(challenge.priority)}`}>
                  {challenge.priority}
                </span>
              </div>

              {/* Challenge Title */}
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                {challenge.title}
              </h3>

              {/* Challenge Description */}
              <p className="text-stone-600 leading-relaxed mb-6">
                {challenge.description}
              </p>

              {/* Solution */}
              <div className="border-t border-stone-200 pt-6">
                <h4 className="text-sm font-semibold text-emerald-800 mb-2 uppercase tracking-wide">
                  Our Solution
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {challenge.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-stone-800 rounded-3xl p-12 text-center text-white">
          <h3 className="text-4xl font-bold mb-6">
            Transforming Challenges into Opportunities
          </h3>
          <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            By addressing these fundamental challenges, we're not just solving problems – we're creating 
            opportunities for Sri Lankan rubber producers to thrive in the global market while maintaining 
            the highest standards of sustainability and compliance.
          </p>
        </div>
      </div>
    </section>
  );
}