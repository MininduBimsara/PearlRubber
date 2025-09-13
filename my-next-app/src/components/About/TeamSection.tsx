import React from "react";

const companyValues = [
  {
    title: "Data-Driven Excellence",
    description:
      "Every decision is backed by comprehensive data analysis and real-world testing to ensure optimal outcomes for our users and the environment.",
  },
  {
    title: "Environmental Stewardship",
    description:
      "We prioritize sustainable practices and environmental protection in everything we do, contributing to Sri Lanka's green future.",
  },
  {
    title: "Community Partnership",
    description:
      "Working closely with local farming communities to understand their needs and develop solutions that truly make a difference.",
  },
  {
    title: "Technological Innovation",
    description:
      "Continuously pushing the boundaries of what's possible with geo-mapping and agricultural technology.",
  },
  {
    title: "Transparency & Trust",
    description:
      "Building lasting relationships through honest communication, reliable data, and consistent delivery of our promises.",
  },
  {
    title: "Global Standards",
    description:
      "Meeting and exceeding international compliance requirements while maintaining local relevance and accessibility.",
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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-8 leading-tight">
            Our Team & Values
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
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
              className="bg-stone-50 rounded-2xl p-6 text-center border border-stone-200 hover:shadow-lg transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-4xl font-black text-emerald-600 mb-2">
                {stat.count}
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                {stat.category}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-stone-900 text-center mb-16">
            What Drives Us
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {companyValues.map((value, index) => (
              <div
                key={value.title}
                className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <h4 className="text-xl font-bold text-stone-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-stone-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div className="bg-gradient-to-r from-stone-800 via-stone-900 to-emerald-900 rounded-3xl p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-4xl font-bold mb-8">
              Our Leadership Philosophy
            </h3>
            <p className="text-xl text-stone-200 leading-relaxed mb-8">
              We believe in empowering every team member to contribute their
              unique expertise while maintaining a shared focus on sustainable
              innovation and measurable impact.
            </p>

            <div className="grid gap-8 md:grid-cols-3 mt-12">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-4">
                  Collaborative
                </h4>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Cross-functional teams working together to solve complex
                  agricultural challenges
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-4">
                  Innovative
                </h4>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Encouraging creative solutions and continuous learning in
                  emerging technologies
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-4">
                  Impact-Focused
                </h4>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Every initiative measured by its positive impact on farmers
                  and the environment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-emerald-50 rounded-3xl p-12 border-2 border-emerald-100">
            <h3 className="text-3xl font-bold text-stone-900 mb-6">
              Join Our Mission
            </h3>
            <p className="text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed mb-8">
              We're always looking for passionate individuals who share our
              vision of sustainable agriculture and technological innovation.
              Whether you're an engineer, agriculturalist, or sustainability
              expert, there's a place for you on our team.
            </p>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
              <div className="bg-white rounded-xl p-4 border border-emerald-200">
                <div className="text-emerald-600 font-bold text-lg">
                  Remote Friendly
                </div>
                <div className="text-stone-600 text-sm">
                  Flexible work arrangements
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-emerald-200">
                <div className="text-emerald-600 font-bold text-lg">
                  Learning Focus
                </div>
                <div className="text-stone-600 text-sm">
                  Continuous skill development
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-emerald-200">
                <div className="text-emerald-600 font-bold text-lg">
                  Impact Work
                </div>
                <div className="text-stone-600 text-sm">
                  Meaningful environmental projects
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-emerald-200">
                <div className="text-emerald-600 font-bold text-lg">Growth</div>
                <div className="text-stone-600 text-sm">
                  Career advancement opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
