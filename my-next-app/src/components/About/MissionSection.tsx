import React from "react";

export default function RubberMission() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Mission Statement */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-green-700">
              Our Mission
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Empowering Sri Lanka's{" "}
            <span className="text-green-600">Rubber Industry</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide comprehensive EUDR compliance solutions that enable
            sustainable rubber cultivation while supporting farmer livelihoods
            and environmental protection.
          </p>
        </div>

        {/* Mission Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Pillar 1 - Compliance */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border-2 border-green-100 hover:border-green-300">
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <div className="text-white text-2xl">🛡️</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
              EUDR Compliance
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Ensuring every rubber plantation meets European Union
              Deforestation Regulation standards through advanced tracking and
              verification systems.
            </p>
          </div>

          {/* Pillar 2 - Technology */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border-2 border-yellow-100 hover:border-yellow-300">
            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <div className="text-black text-2xl">🛰️</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
              Smart Technology
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Satellite monitoring, AI-powered analytics, and blockchain
              verification to provide transparent supply chain tracking and
              monitoring.
            </p>
          </div>

          {/* Pillar 3 - Community */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border-2 border-blue-100 hover:border-blue-300">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <div className="text-white text-2xl">👥</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
              Farmer Support
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Empowering smallholder farmers with education, tools, and
              resources needed for sustainable rubber cultivation practices.
            </p>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-600 to-gray-800 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">
              Building a Sustainable Future
            </h3>
            <p className="text-xl text-green-100 leading-relaxed max-w-4xl mx-auto">
              We envision a Sri Lankan rubber industry that leads the world in
              sustainable practices, where every farmer prospers while
              protecting our natural heritage for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
