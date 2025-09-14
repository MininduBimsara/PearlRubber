import React from "react";

const companyValues = [
  {
    title: "Data-Driven Excellence",
    description:
      "Every decision is backed by comprehensive data analysis and real-world testing to ensure optimal outcomes for our users and the environment.",
    icon: "📊",
  },
  {
    title: "Environmental Stewardship",
    description:
      "We prioritize sustainable practices and environmental protection in everything we do, contributing to Sri Lanka's green future.",
    icon: "🌍",
  },
  {
    title: "Community Partnership",
    description:
      "Working closely with local farming communities to understand their needs and develop solutions that truly make a difference.",
    icon: "🤝",
  },
  {
    title: "Technological Innovation",
    description:
      "Continuously pushing the boundaries of what's possible with geo-mapping and agricultural technology.",
    icon: "🚀",
  },
  {
    title: "Transparency & Trust",
    description:
      "Building lasting relationships through honest communication, reliable data, and consistent delivery of our promises.",
    icon: "💎",
  },
  {
    title: "Global Standards",
    description:
      "Meeting and exceeding international compliance requirements while maintaining local relevance and accessibility.",
    icon: "🏆",
  },
];

const teamStats = [
  {
    category: "Engineering",
    count: "12",
    description: "Software engineers, data scientists, and GIS specialists",
  },
  {
    category: "Agriculture Experts",
    count: "8",
    description: "Agronomists and rubber cultivation specialists",
  },
  {
    category: "Operations",
    count: "6",
    description: "Customer success, partnerships, and business operations",
  },
  {
    category: "Research",
    count: "4",
    description: "Environmental scientists and sustainability researchers",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-green-800">Our Team</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Expert Team & <span className="text-green-600">Core Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A diverse team of experts united by a shared commitment to
            transforming Sri Lanka's rubber industry through technology,
            sustainability, and innovation.
          </p>
        </div>

        {/* Team Statistics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {teamStats.map((stat, index) => (
            <div
              key={stat.category}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.count}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {stat.category}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Drives Us
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {companyValues.map((value, index) => (
              <div
                key={value.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">{value.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div className="bg-gradient-to-br from-gray-800 to-green-900 rounded-3xl p-12 mb-16 shadow-2xl">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-3xl font-bold mb-6">
              Our Leadership Philosophy
            </h3>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              We believe in empowering every team member to contribute their
              unique expertise while maintaining a shared focus on sustainable
              innovation and measurable impact.
            </p>

            <div className="grid gap-8 md:grid-cols-3 mt-12">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-4">
                  Collaborative
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Cross-functional teams working together to solve complex
                  agricultural challenges
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-4">
                  Innovative
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Encouraging creative solutions and continuous learning in
                  emerging technologies
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-4">
                  Impact-Focused
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Every initiative measured by its positive impact on farmers
                  and the environment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-green-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Join Our Mission
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              We're always looking for passionate individuals who share our
              vision of sustainable agriculture and technological innovation.
              Whether you're an engineer, agriculturalist, or sustainability
              expert, there's a place for you on our team.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="text-green-600 font-bold text-lg mb-2">
                  Remote Friendly
                </div>
                <div className="text-gray-600">Flexible work arrangements</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="text-green-600 font-bold text-lg mb-2">
                  Learning Focus
                </div>
                <div className="text-gray-600">
                  Continuous skill development
                </div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="text-green-600 font-bold text-lg mb-2">
                  Impact Work
                </div>
                <div className="text-gray-600">
                  Meaningful environmental projects
                </div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="text-green-600 font-bold text-lg mb-2">
                  Growth
                </div>
                <div className="text-gray-600">
                  Career advancement opportunities
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="btn-primary">View Open Positions</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
