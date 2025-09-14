import React from "react";

interface HeroData {
  title: string;
  subtitle: string;
  location: string;
  backgroundImage: string;
}

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full mb-6">
          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-green-700">
            About EcoRubber
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Pioneering <span className="text-green-600">Sustainable</span> Rubber
          <br />
          Industry Solutions
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          We combine cutting-edge technology with deep agricultural expertise to
          help Sri Lankan rubber plantations achieve EUDR compliance while
          supporting farmer communities and environmental conservation.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">2019</div>
            <div className="text-sm text-gray-500">Founded</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">30+</div>
            <div className="text-sm text-gray-500">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">500K+</div>
            <div className="text-sm text-gray-500">Hectares Mapped</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
            <div className="text-sm text-gray-500">EUDR Compliant</div>
          </div>
        </div>
      </div>
    </section>
  );
}
