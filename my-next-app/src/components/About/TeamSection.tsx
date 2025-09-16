import React from "react";

interface TeamData {
  badge: {
    text: string;
    bgColor: string;
    textColor: string;
    dotColor: string;
  };
  title: string;
  subtitle: string;
  teamStats: Array<{
    category: string;
    count: string;
    description: string;
  }>;
  values: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  leadership: {
    title: string;
    description: string;
    principles: Array<{
      title: string;
      description: string;
    }>;
  };
  careers: {
    title: string;
    description: string;
    benefits: Array<{
      title: string;
      description: string;
    }>;
    cta: string;
  };
}

interface TeamProps {
  data: TeamData;
}

export default function TeamSection({ data }: TeamProps) {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center px-4 py-2 ${data.badge.bgColor} rounded-full mb-6`}
          >
            <div
              className={`w-2 h-2 ${data.badge.dotColor} rounded-full mr-2`}
            ></div>
            <span className={`text-sm font-medium ${data.badge.textColor}`}>
              {data.badge.text}
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Team Statistics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {data.teamStats.map((stat, index) => (
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
            {data.values.title}
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.values.items.map((value, index) => (
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
            <h3 className="text-3xl font-bold mb-6">{data.leadership.title}</h3>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              {data.leadership.description}
            </p>

            <div className="grid gap-8 md:grid-cols-3 mt-12">
              {data.leadership.principles.map((principle, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-2xl font-bold text-white mb-4">
                    {principle.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-green-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {data.careers.title}
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {data.careers.description}
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
              {data.careers.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-green-50 rounded-xl p-6 border border-green-200"
                >
                  <div className="text-green-600 font-bold text-lg mb-2">
                    {benefit.title}
                  </div>
                  <div className="text-gray-600">{benefit.description}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button className="btn-primary">{data.careers.cta}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
