import React from "react";

export default function RubberMission() {
  return (
    <section className="py-20 px-5 bg-cream-50/10">
      <div className="max-w-6xl mx-auto">
        {/* Main Mission Statement */}
        <div className="text-center mb-16">
          <div className="glass-panel bg-white/70 border border-green-100/40 p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-green-700 font-medium leading-relaxed">
              Empowering Sri Lanka's rubber industry with EUDR compliance
              solutions
            </p>
          </div>
        </div>

        {/* Mission Pillars - Floating Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Pillar 1 - Compliance */}
          <div className="relative">
            <div className="glass-panel bg-gradient-to-br from-green-100/30 to-green-200/20 border border-green-200/40 p-8 hover:transform hover:-translate-y-3 transition-all duration-500">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <div className="text-white text-2xl">🛡️</div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 text-center mb-4">
                EUDR Compliance
              </h3>
              <p className="text-slate-700/80 text-center leading-relaxed">
                Ensuring every rubber plantation meets European Union
                Deforestation Regulation standards through advanced tracking and
                verification.
              </p>
            </div>
            {/* Floating accent */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400/60 rounded-full blur-sm"></div>
          </div>

          {/* Pillar 2 - Technology */}
          <div className="relative">
            <div className="glass-panel bg-gradient-to-br from-amber-100/30 to-amber-200/20 border border-amber-200/40 p-8 hover:transform hover:-translate-y-3 transition-all duration-500">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <div className="text-white text-2xl">🛰️</div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 text-center mb-4">
                Smart Technology
              </h3>
              <p className="text-slate-700/80 text-center leading-relaxed">
                Satellite monitoring, AI-powered analytics, and blockchain
                verification to provide transparent supply chain tracking.
              </p>
            </div>
            {/* Floating accent */}
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-amber-400/60 rounded-full blur-sm"></div>
          </div>

          {/* Pillar 3 - Community */}
          <div className="relative">
            <div className="glass-panel bg-gradient-to-br from-blue-100/30 to-blue-200/20 border border-blue-200/40 p-8 hover:transform hover:-translate-y-3 transition-all duration-500">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <div className="text-white text-2xl">👥</div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 text-center mb-4">
                Farmer Support
              </h3>
              <p className="text-slate-700/80 text-center leading-relaxed">
                Empowering smallholder farmers with education, tools, and
                resources needed for sustainable rubber cultivation practices.
              </p>
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-400/60 rounded-full blur-sm"></div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-16 text-center">
          <div className="glass-panel bg-gradient-to-r from-green-600/90 to-slate-700/90 backdrop-blur-lg p-10 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Building a Sustainable Future
            </h3>
            <p className="text-green-100 leading-relaxed text-lg">
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
