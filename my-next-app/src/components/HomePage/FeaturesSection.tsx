// components/FeaturesSection.tsx
interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "🌳",
    title: "Sustainability in Farming",
    description:
      "Advanced eco-friendly farming techniques that preserve biodiversity while maximizing yield.",
  },
  {
    icon: "🛠️",
    title: "Eco-Friendly Products",
    description:
      "Natural rubber products that reduce environmental impact across multiple industries.",
  },
  {
    icon: "🤝",
    title: "Community Impact",
    description:
      "Supporting local communities through fair trade practices and sustainable employment.",
  },
  {
    icon: "🌍",
    title: "Global Reach",
    description:
      "Connecting sustainable rubber farming with international markets and standards.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-5 bg-cream-50/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
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
