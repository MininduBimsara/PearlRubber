import { MapPin, Satellite, Shield, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function DigitalPortfolio() {


  return (
    <section className="py-24 bg-white">
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
            <Image
              src="/rubber.jpg"
              alt="External image"
              fill // makes the image cover the parent div
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-green-900/10 rounded-xl"></div>

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
