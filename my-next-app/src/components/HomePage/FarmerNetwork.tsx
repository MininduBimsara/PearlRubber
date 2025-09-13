import { Users, BookOpen, Smartphone, Award } from "lucide-react";

export default function FarmerNetwork() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Smallholder Integration",
      description:
        "Comprehensive integration of 30,000+ smallholder farmers into the digital ecosystem with tailored support and resources.",
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
      benefits: [
        "Digital Registration",
        "Profile Management",
        "Payment Processing",
      ],
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Training & Extension",
      description:
        "Comprehensive training programs and extension services to enhance farming practices and increase productivity.",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
      benefits: [
        "Best Practices",
        "Sustainable Techniques",
        "Certification Programs",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Platform",
      description:
        "User-friendly mobile application with offline capabilities for farmers to access information and manage operations.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      benefits: ["Offline Sync", "Weather Updates", "Community Forums"],
    },
  ];

  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-green-800">
              Farmer Network
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Empowering Sri Lankan
            <span className="text-green-600"> Farmers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through technology, training, and comprehensive support systems for
            sustainable growth and prosperity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
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
                  {feature.icon}
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
          ))}
        </div>

        {/* Mobile App Showcase */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                FarmerConnect Mobile App
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Designed specifically for Sri Lankan rubber farmers with
                intuitive interface, offline capabilities, and comprehensive
                farming tools.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    99.9%
                  </div>
                  <div className="text-sm text-green-700">App Uptime</div>
                </div>
                <div className="bg-amber-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-amber-600 mb-2">
                    4.8★
                  </div>
                  <div className="text-sm text-amber-700">User Rating</div>
                </div>
              </div>

              <button className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors duration-300">
                <Smartphone className="mr-2 w-5 h-5" />
                Download App
              </button>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=600&fit=crop"
                alt="Mobile app interface"
                className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-amber-500/10 rounded-3xl"></div>

              {/* App UI Elements */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
                <div className="text-xs text-gray-500 mb-1">Today's Yield</div>
                <div className="text-lg font-bold text-green-600">2.8 MT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
