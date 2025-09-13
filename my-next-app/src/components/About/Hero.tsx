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
    <section className="min-h-screen flex items-center pt-32 pb-16 px-5">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          {/* Location Badge */}
          <div className="mb-8">
            <div className="inline-block bg-green-100/20 backdrop-blur-sm border border-green-100/30 rounded-full px-4 py-2">
              <span className="text-green-700 text-sm font-medium tracking-wider">
                {data.location}
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight mb-6">
            Hi EcoRubber, Ready to
            <br />
            Transform Sri Lanka's Agriculture?
          </h1>

          {/* Chat Assistant Element */}
          <div className="flex justify-end mb-12 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="glass-panel bg-white/90 border border-green-100/30 p-4 rounded-2xl max-w-sm">
                <p className="text-slate-800 font-medium mb-1">Hey there! 👋</p>
                <p className="text-slate-700/80 text-sm">
                  Ready to revolutionize rubber farming?
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                🌱
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 - Geo Mapping */}
          <div className="glass-panel p-8 text-center bg-white/60 border border-green-100/30 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center">
              <div className="text-2xl">🗺️</div>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Advanced Geo-Mapping
            </h3>
            <p className="text-slate-700/80 leading-relaxed mb-4">
              Precise land boundary mapping and real-time plantation monitoring
              with satellite imagery and AI-powered analytics.
            </p>
            <div className="text-sm text-green-700 font-medium">
              Precision Mapping
            </div>
          </div>

          {/* Card 2 - EUDR Compliance */}
          <div className="glass-panel p-8 text-center bg-white/60 border border-green-100/30 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center">
              <div className="text-2xl">✅</div>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              EUDR Compliance Made Easy
            </h3>
            <p className="text-slate-700/80 leading-relaxed mb-4">
              Streamlined compliance tracking and automated reporting to meet
              European Union Deforestation Regulation requirements.
            </p>
            <div className="text-sm text-green-700 font-medium">
              100% Compliance
            </div>
          </div>

          {/* Card 3 - Sustainability */}
          <div className="glass-panel p-8 text-center bg-white/60 border border-green-100/30 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center">
              <div className="text-2xl">🌿</div>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Sustainable Farming Practices
            </h3>
            <p className="text-slate-700/80 leading-relaxed mb-4">
              Environmental monitoring, carbon tracking, and sustainable
              resource management for eco-friendly rubber cultivation.
            </p>
            <div className="text-sm text-green-700 font-medium">
              Eco-Friendly
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="btn-primary">Start Mapping Now</button>
            <button className="btn-secondary">View Demo</button>
          </div>
          <p className="text-sm text-slate-600">
            Unlock more features with Pro Plan • Powered by EcoRubber v2.0
          </p>
        </div>
      </div>
    </section>
  );
}
