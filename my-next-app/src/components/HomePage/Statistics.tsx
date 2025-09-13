import { TrendingUp, Users, MapPin, Award } from "lucide-react";

export default function Statistics() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "30,000+",
      label: "Registered Farmers",
      description: "Smallholder farmers across Sri Lanka",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      number: "500K",
      label: "Hectares Monitored",
      description: "Total plantation area under management",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "95%",
      label: "Prediction Accuracy",
      description: "AI-powered yield forecasting precision",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "100%",
      label: "EUDR Compliant",
      description: "International compliance certification",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
            <span className="text-sm font-medium text-white/80">
              Impact Statistics
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transforming Sri Lankan
            <span className="text-green-400"> Agriculture</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real numbers that demonstrate our commitment to revolutionizing
            rubber plantation management through technology and innovation.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl blur-xl group-hover:from-white/10 group-hover:to-white/20 transition-all duration-500"></div>

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group-hover:scale-105">
                <div
                  className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>

                <div className="text-4xl font-bold mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {stat.number}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-white">
                  {stat.label}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Plantation?
          </h3>
          <p className="text-green-100 mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of Sri Lankan farmers already benefiting from our
            advanced plantation management system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-300">
              Get Started Today
              <TrendingUp className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
