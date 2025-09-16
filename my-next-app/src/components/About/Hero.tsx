import React from "react";

interface HeroData {
  badge: {
    text: string;
    bgColor: string;
    textColor: string;
    dotColor: string;
  };
  title: string;
  subtitle: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
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

        {/* Main Heading */}
        <h1
          className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          {data.subtitle}
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
          {data.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
