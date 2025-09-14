import React from "react";

export function CTASection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full mb-6">
          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-green-700">
            Get Started Today
          </span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Ready to Ensure{" "}
          <span className="text-green-600">EUDR Compliance</span>?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Start your journey to sustainable rubber farming with our
          comprehensive geo-mapping solution designed specifically for Sri
          Lankan plantations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">Start Free Trial</button>
          <button className="btn-secondary">Schedule Demo</button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            Trusted by leading rubber processing facilities
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-green-600">25+</div>
            <div className="text-sm text-gray-400">Processing Factories</div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-2xl font-bold text-green-600">5000+</div>
            <div className="text-sm text-gray-400">Farmers Connected</div>
          </div>
        </div>
      </div>
    </section>
  );
}
