import { MapPin, Satellite, Shield, TrendingUp } from "lucide-react";

export default function DigitalPortfolio() {
  const features = [
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "Real-time Monitoring",
      description:
        "Advanced plantation monitoring and management system providing comprehensive oversight from planting to harvest.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      stats: ["GPS Boundaries", "Live Updates", "Yield Tracking"],
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Interactive Mapping",
      description:
        "Individual farm profiles with detailed GPS boundaries, compliance status, and comprehensive yield data analytics.",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      stats: ["Farm Profiles", "GPS Mapping", "Compliance Status"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "EUDR Compliance",
      description:
        "Automated EUDR compliance tracking and documentation system ensuring adherence to international deforestation regulations.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      stats: ["Automated Reports", "Risk Assessment", "Certification"],
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-green-700">
              Digital Portfolio
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Plantation
            <span className="text-green-600"> Management</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced digital tools and real-time monitoring systems for
            comprehensive oversight of Sri Lankan rubber plantations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 text-green-600">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Stats */}
              <div className="space-y-2">
                {feature.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center text-sm text-green-600"
                  >
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                    {stat}
                  </div>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="inline-flex items-center text-green-600 font-medium">
                  Learn more
                  <TrendingUp className="ml-2 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Map Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Interactive Plantation Network
            </h3>
            <p className="text-gray-600">
              Real-time visualization of 30,000+ registered plantations across
              Sri Lanka
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 h-80 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop"
              alt="Sri Lanka map view"
              className="w-full h-full object-cover rounded-xl opacity-80"
            />
            <div className="absolute inset-0 bg-green-900/10 rounded-xl"></div>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white bg-black/50 backdrop-blur-sm rounded-2xl p-8">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-green-400" />
                <h4 className="text-2xl font-bold mb-2">
                  Sri Lankan Rubber Belt
                </h4>
                <p className="text-green-200">
                  30,000+ Plantations • 500K Hectares
                </p>
              </div>
            </div>

            {/* Floating Indicators */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
