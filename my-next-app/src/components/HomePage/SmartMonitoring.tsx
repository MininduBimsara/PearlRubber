import { Brain, Satellite, AlertTriangle, BarChart3 } from "lucide-react";

interface SmartMonitoringData {
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
    metrics: string[];
  }>;
  dashboard: {
    title: string;
    description: string;
    image: string;
    stats: Array<{
      value: string;
      label: string;
      color: string;
    }>;
  };
}

interface SmartMonitoringProps {
  data: SmartMonitoringData;
}

const iconMap = {
  Brain,
  Satellite,
  AlertTriangle,
  BarChart3,
};

export default function SmartMonitoring({ data }: SmartMonitoringProps) {
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

        {/* Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {data.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Icon */}
                <div className="bg-white/90 w-16 h-16 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Metrics */}
                <div className="space-y-2">
                  {feature.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm text-green-600"
                    >
                      <BarChart3 className="w-4 h-4 mr-2" />
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Analytics Dashboard Preview */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                {data.dashboard.title}
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                {data.dashboard.description}
              </p>

              <div className="grid grid-cols-2 gap-6">
                {data.dashboard.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4"
                  >
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={data.dashboard.image}
                alt="Analytics dashboard"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl"></div>

              {/* Floating Stats */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900">
                    Live Analytics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
