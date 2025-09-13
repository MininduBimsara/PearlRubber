// Updated src/components/HomePage/FeaturesSection.tsx - Using JSON Data
import homepageData from "@/data/content/homepage-data.json";

export function FeaturesSection() {
  const { features } = homepageData;

  return (
    <section className="py-20 px-5 bg-cream-50/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="glass-panel p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-700/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
