import React from "react";
import Image from "next/image";

interface MissionData {
  badge: {
    text: string;
    bgColor: string;
    textColor: string;
    dotColor: string;
  };
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
    overlayTitle: string;
    overlaySubtitle: string;
  };
  pillars: Array<{
    icon: string;
    title: string;
    description: string;
    bgColor: string;
    borderColor: string;
  }>;
  vision: {
    title: string;
    description: string;
  };
}

interface MissionProps {
  data: MissionData;
}

export default function RubberMission({ data }: MissionProps) {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Mission Statement */}
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
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Rubber Plantation Image Section */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={data.image.src}
              width={1200}
              height={700}
              alt={data.image.alt}
              className="w-full h-64 lg:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {data.image.overlayTitle}
              </h3>
              <p className="text-lg opacity-90">{data.image.overlaySubtitle}</p>
            </div>
          </div>
        </div>

        {/* Mission Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {data.pillars.map((pillar, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group border-2 ${pillar.borderColor}`}
            >
              <div
                className={`w-12 h-12 ${pillar.bgColor} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
              >
                <div
                  className={`text-xl ${
                    pillar.bgColor.includes("yellow")
                      ? "text-black"
                      : "text-white"
                  }`}
                >
                  {pillar.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-600 to-gray-800 rounded-3xl p-10 text-white shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              {data.vision.title}
            </h3>
            <p className="text-lg text-green-100 leading-relaxed max-w-3xl mx-auto">
              {data.vision.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
