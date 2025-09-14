// components/products/HeroSection.tsx
import React from "react";
import {
  Shield,
  Check,
  MapPin,
  Satellite,
  Users,
  BarChart3,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-green-700">
              Our Products
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Complete <span className="text-green-600">EUDR Compliance</span>
            <br />
            Platform Suite
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Advanced geo-mapping technology and AI-powered analytics designed
            specifically for Sri Lankan rubber plantations to achieve seamless
            EUDR compliance and sustainable farming practices.
          </p>
        </div>

        {/* Interactive Visual Dashboard */}
        <div className="relative bg-gradient-to-br from-green-50 to-gray-50 rounded-3xl p-12 mb-16 shadow-xl overflow-hidden">
          {/* Background Image Pattern */}
          <div
            className="absolute inset-0  bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/Globe.png')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-gray-50/80"></div>
          </div>

          {/* Central Hub */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            {/* Main Center Circle */}
            <div className="relative z-10">
              <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-green-100">
                <MapPin size={48} className="text-green-600" />
              </div>

              {/* Connecting Lines */}
              <div className="absolute top-1/2 left-1/2 w-64 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent transform -translate-y-px -translate-x-1/2"></div>
              <div className="absolute top-1/2 left-1/2 w-px h-64 bg-gradient-to-b from-transparent via-green-300 to-transparent transform -translate-x-px -translate-y-1/2"></div>
            </div>

            {/* Product Feature Circles */}
            {/* Top */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 bg-green-600 rounded-full shadow-lg flex items-center justify-center">
                <Satellite size={32} className="text-white" />
              </div>
            </div>

            {/* Right */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
              <div className="w-20 h-20 bg-blue-600 rounded-full shadow-lg flex items-center justify-center">
                <BarChart3 size={32} className="text-white" />
              </div>
            </div>

            {/* Bottom */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 bg-yellow-500 rounded-full shadow-lg flex items-center justify-center">
                <Shield size={32} className="text-black" />
              </div>
            </div>

            {/* Left */}
            <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
              <div className="w-20 h-20 bg-emerald-600 rounded-full shadow-lg flex items-center justify-center">
                <Users size={32} className="text-white" />
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 max-w-xs">
            <div className="flex items-center mb-2">
              <Satellite size={16} className="text-green-600 mr-2" />
              <span className="text-sm font-semibold text-gray-900">
                Satellite Monitoring
              </span>
            </div>
            <div className="text-xs text-gray-600">
              Real-time plantation tracking with 95% accuracy
            </div>
          </div>

          <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 max-w-xs">
            <div className="flex items-center mb-2">
              <BarChart3 size={16} className="text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-gray-900">
                Analytics Dashboard
              </span>
            </div>
            <div className="text-xs text-gray-600">
              Comprehensive reporting and data visualization
            </div>
          </div>

          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 max-w-xs">
            <div className="flex items-center mb-2">
              <Shield size={16} className="text-yellow-600 mr-2" />
              <span className="text-sm font-semibold text-gray-900">
                EUDR Compliance
              </span>
            </div>
            <div className="text-xs text-gray-600">
              Automated verification and reporting system
            </div>
          </div>

          <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 max-w-xs">
            <div className="flex items-center mb-2">
              <Users size={16} className="text-emerald-600 mr-2" />
              <span className="text-sm font-semibold text-gray-900">
                Farmer Network
              </span>
            </div>
            <div className="text-xs text-gray-600">
              Community support and training platform
            </div>
          </div>

          {/* Status Indicator */}
          
        </div>

        {/* Product Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-sm text-gray-500">Processing Facilities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
            <div className="text-sm text-gray-500">Plots Mapped</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">5000+</div>
            <div className="text-sm text-gray-500">Farmers Connected</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-sm text-gray-500">EUDR Compliant</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Explore Our Solutions</button>
            <button className="btn-secondary">Request Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}
