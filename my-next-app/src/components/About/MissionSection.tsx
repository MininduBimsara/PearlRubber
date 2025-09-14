import React from "react";
import Image from "next/image";

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

        {/* Rubber Plantation Image Section */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/rubber2.jpg"
              width={1200}
              height={700}
              alt="Sri Lankan rubber plantation with workers collecting latex"
              className="w-full h-64 lg:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                Sustainable Rubber Cultivation
              </h3>
              <p className="text-lg opacity-90">
                Supporting 30,000+ farmers across Sri Lanka
              </p>
            </div>
          </div>
        </div>

        {/* Mission Pillars - Simplified */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Pillar 1 - Compliance */}
          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group border-2 border-green-100 hover:border-green-300">
            <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <div className="text-white text-xl">🛡️</div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 text-center mb-3">
              EUDR Compliance
            </h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Advanced tracking and verification systems ensuring every
              plantation meets European Union Deforestation Regulation
              standards.
            </p>
          </div>

          {/* Pillar 2 - Technology */}
          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group border-2 border-yellow-100 hover:border-yellow-300">
            <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <div className="text-black text-xl">🛰️</div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 text-center mb-3">
              Smart Technology
            </h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Satellite monitoring, AI analytics, and blockchain verification
              for transparent supply chain tracking.
            </p>
          </div>

          {/* Pillar 3 - Community */}
          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group border-2 border-blue-100 hover:border-blue-300">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <div className="text-white text-xl">👥</div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 text-center mb-3">
              Farmer Support
            </h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Education, tools, and resources empowering smallholder farmers for
              sustainable cultivation practices.
            </p>
          </div>
        </div>

        {/* Vision Statement - Simplified */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-600 to-gray-800 rounded-3xl p-10 text-white shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Building a Sustainable Future
            </h3>
            <p className="text-lg text-green-100 leading-relaxed max-w-3xl mx-auto">
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
