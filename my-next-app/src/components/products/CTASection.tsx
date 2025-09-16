import React from "react";

interface CTASectionProps {
  data: {
    badge: {
      text: string;
    };
    heading: {
      main: string;
      highlighted: string;
      continuation: string;
    };
    subtitle: string;
    buttons: {
      primary: string;
      secondary: string;
    };
    trustIndicators: {
      text: string;
      metrics: Array<{
        number: string;
        label: string;
      }>;
    };
  };
}

export function CTASection({ data }: CTASectionProps) {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full mb-6">
          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-green-700">
            {data.badge.text}
          </span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {data.heading.main}{" "}
          <span className="text-green-600">{data.heading.highlighted}</span>
          {data.heading.continuation}
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          {data.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">{data.buttons.primary}</button>
          <button className="btn-secondary">{data.buttons.secondary}</button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            {data.trustIndicators.text}
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {data.trustIndicators.metrics.map((metric, index) => (
              <React.Fragment key={index}>
                <div className="text-2xl font-bold text-green-600">
                  {metric.number}
                </div>
                <div className="text-sm text-gray-400">{metric.label}</div>
                {index < data.trustIndicators.metrics.length - 1 && (
                  <div className="w-px h-8 bg-gray-300"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
