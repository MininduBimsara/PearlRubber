// components/products/CTASection.tsx
import React from "react";

export function CTASection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-600 to-green-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Ensure EUDR Compliance?
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Start your journey to sustainable rubber farming with our
          comprehensive geo-mapping solution designed specifically for Sri
          Lankan plantations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-600 transition-colors font-semibold">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}
