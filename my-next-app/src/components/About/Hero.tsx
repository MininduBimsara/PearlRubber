import React from 'react';

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
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-emerald-800/70 to-stone-900/80 z-10"></div>
        <img
          src={data.backgroundImage || "/api/placeholder/1920/1080"}
          alt="Sri Lankan rubber plantation landscape"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        {/* Location Badge */}
        <div className="mb-8 inline-block">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2">
            <span className="text-white/90 text-sm font-medium tracking-wider">
              {data.location}
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-white tracking-tight leading-none mb-6">
          {data.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-light">
          {data.subtitle}
        </p>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent z-20"></div>
    </section>
  );
}