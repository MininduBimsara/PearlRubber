import React from "react";

interface ImpactData {
  badge: {
    text: string;
    bgColor: string;
    textColor: string;
    dotColor: string;
  };
  title: string;
  subtitle: string;
  metrics: Array<{
    value: string;
    label: string;
    description: string;
    icon: string;
  }>;
  successStories: {
    title: string;
    stories: Array<{
      icon: string;
      iconBg: string;
      title: string;
      description: string;
    }>;
  };
  futureVision: {
    title: string;
    description: string;
    timeline: Array<{
      year: string;
      label: string;
    }>;
  };
}

interface ImpactProps {
  data: ImpactData;
}

export default function ComplianceImpact({ data }: ImpactProps) {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
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

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {data.metrics.map((metric, index) => (
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
            {data.successStories.title}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {data.successStories.stories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-12 h-12 ${story.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <span
                      className={`text-xl ${
                        story.iconBg.includes("yellow")
                          ? "text-black"
                          : "text-white"
                      }`}
                    >
                      {story.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {story.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {story.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-12 text-white shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">
                {data.futureVision.title}
              </h3>
              <p className="text-xl text-green-100 leading-relaxed mb-8">
                {data.futureVision.description}
              </p>

              <div className="flex justify-center gap-8 text-sm">
                {data.futureVision.timeline.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold">{item.year}</div>
                    <div className="text-green-200">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
