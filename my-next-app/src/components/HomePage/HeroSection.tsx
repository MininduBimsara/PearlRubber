// Updated src/components/HomePage/HeroSection.tsx - Using JSON Data
"use client";

import { InfoMarker } from "./InfoMarker";
import homepageData from "@/data/content/homepage-data.json";

export function HeroSection() {
  const { hero, treeInfo } = homepageData;

  return (
    <section className="min-h-screen flex items-center pt-32 pb-16 px-5">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Hero Content */}
          <div className="glass-panel p-10 order-2 lg:order-1">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight mb-6">
              {hero.headline.line1} {hero.headline.line2}{" "}
              {hero.headline.subtitle}
            </h1>
            <p className="text-lg text-slate-700/80 leading-relaxed mb-10">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-8">
              <button className="btn-primary">
                {hero.buttons.primary.text}
              </button>
              <button className="btn-secondary">
                {hero.buttons.secondary.text}
              </button>
            </div>

            <p className="text-sm text-green-700 font-medium">
              Join thousands supporting sustainable rubber farming
            </p>
          </div>

          {/* Visual Element */}
          <div className="relative p-5 order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Rubber Tree Plantation"
                className="w-full h-80 lg:h-[500px] object-cover rounded-3xl"
              />

              {treeInfo.map((marker) => (
                <InfoMarker
                  key={marker.id}
                  position={marker.position}
                  text={marker.title}
                  side={marker.side as "left" | "right"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
