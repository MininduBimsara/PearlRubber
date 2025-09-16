import React from "react";
import content from "@/data/content/product.json";

export function CTASection() {
  const { ctaSection } = content;

  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full mb-6">
          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-green-700">
            {ctaSection.badge.text}
          </span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {ctaSection.heading.main}{" "}
          <span className="text-green-600">
            {ctaSection.heading.highlighted}
          </span>
          {ctaSection.heading.continuation}
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          {ctaSection.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">{ctaSection.buttons.primary}</button>
          <button className="btn-secondary">
            {ctaSection.buttons.secondary}
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            {ctaSection.trustIndicators.text}
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {ctaSection.trustIndicators.metrics.map((metric, index) => (
              <React.Fragment key={index}>
                <div className="text-2xl font-bold text-green-600">
                  {metric.number}
                </div>
                <div className="text-sm text-gray-400">{metric.label}</div>
                {index < ctaSection.trustIndicators.metrics.length - 1 && (
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
