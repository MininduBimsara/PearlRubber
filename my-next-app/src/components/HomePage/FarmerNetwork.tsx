import { Users, BookOpen, Smartphone, Award } from "lucide-react";

interface FarmerNetworkData {
  badge: {
    text: string;
    bgColor: string;
    textColor: string;
    dotColor: string;
  };
  title: string;
  subtitle: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
    image: string;
    benefits: string[];
  }>;
  mobileApp: {
    title: string;
    description: string;
    image: string;
    stats: Array<{
      value: string;
      label: string;
      bgColor: string;
      valueColor: string;
      labelColor: string;
    }>;
    cta: {
      text: string;
      icon: string;
    };
    uiElement: {
      title: string;
      value: string;
    };
  };
}

interface FarmerNetworkProps {
  data: FarmerNetworkData;
}

const iconMap = {
  Users,
  BookOpen,
  Smartphone,
  Award,
};

export default function FarmerNetwork({ data }: FarmerNetworkProps) {
  const CtaIcon = iconMap[data.mobileApp.cta.icon as keyof typeof iconMap];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center px-4 py-2 ${data.badge.bgColor} rounded-full mb-6`}
          >
            <div
              className={`w-2 h-2 ${data.badge.dotColor} rounded-full mr-2`}
            ></div>
            <span className={`text-sm font-medium ${data.badge.textColor}`}>
              {data.badge.text}
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {data.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 text-green-600">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-center text-sm text-green-700"
                      >
                        <Award className="w-4 h-4 mr-3 text-green-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile App Showcase */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {data.mobileApp.title}
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {data.mobileApp.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {data.mobileApp.stats.map((stat, index) => (
                  <div key={index} className={`${stat.bgColor} rounded-xl p-4`}>
                    <div
                      className={`text-2xl font-bold ${stat.valueColor} mb-2`}
                    >
                      {stat.value}
                    </div>
                    <div className={`text-sm ${stat.labelColor}`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <button className="inline-flex items-center px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <CtaIcon className="mr-2 w-5 h-5" />
                {data.mobileApp.cta.text}
              </button>
            </div>

            <div className="relative">
              <img
                src={data.mobileApp.image}
                alt="Mobile app interface"
                className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-amber-500/10 rounded-3xl"></div>

              {/* App UI Elements */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
                <div className="text-xs text-gray-500 mb-1">
                  {data.mobileApp.uiElement.title}
                </div>
                <div className="text-lg font-bold text-green-600">
                  {data.mobileApp.uiElement.value}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
