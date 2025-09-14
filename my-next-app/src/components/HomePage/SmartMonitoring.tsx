import { Brain, Satellite, AlertTriangle, BarChart3 } from "lucide-react";

export default function SmartMonitoring() {
  const features = [
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "IoT & Satellite Integration",
      description:
        "Advanced sensor networks and satellite data integration providing real-time environmental and plantation health data.",
      image:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
      metrics: ["24/7 Monitoring", "Real-time Data", "Environmental Sensors"],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analytics",
      description:
        "Machine learning algorithms for yield forecasting, health monitoring, and predictive maintenance of plantation assets.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      metrics: ["95% Accuracy", "Predictive Models", "Smart Insights"],
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Risk Management",
      description:
        "Comprehensive risk assessment and early warning systems for weather, diseases, and market fluctuations.",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop",
      metrics: ["Early Warnings", "Risk Assessment", "Preventive Care"],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-green-700">
              Smart Technology
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Advanced Monitoring &
            <span className="text-green-600"> Analytics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging IoT sensors, satellite integration, and AI-powered
            analytics for optimal plantation management and predictive insights.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Icon */}
              <div className="bg-white/90 w-16 h-16 rounded-2xl flex items-center justify-center text-green-600 mb-6 ">
                {feature.icon}
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
          ))}
        </div>

        {/* Analytics Dashboard Preview */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Real-time Analytics Dashboard
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Monitor plantation health, track yield predictions, and manage
                risks with our comprehensive analytics platform.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    98.5%
                  </div>
                  <div className="text-sm text-gray-300">System Uptime</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    30+
                  </div>
                  <div className="text-sm text-gray-300">Data Points</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
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
