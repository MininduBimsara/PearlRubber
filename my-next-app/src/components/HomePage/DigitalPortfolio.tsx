import Image from "next/image";

interface DigitalPortfolioData {
  badge: {
    text: string;
    bgColor: string;
    textColor: string;
    dotColor: string;
  };
  title: string;
  subtitle: string;
  interactiveMap: {
    title: string;
    description: string;
    image: string;
    liveIndicator: {
      text: string;
      dotColor: string;
    };
  };
}

interface DigitalPortfolioProps {
  data: DigitalPortfolioData;
}

export default function DigitalPortfolio({ data }: DigitalPortfolioProps) {
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

        {/* Interactive Map Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {data.interactiveMap.title}
            </h3>
            <p className="text-gray-600">{data.interactiveMap.description}</p>
          </div>

          <div className="relative bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 h-80 overflow-hidden">
            <Image
              src={data.interactiveMap.image}
              alt="Interactive plantation network visualization"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-green-900/10 rounded-xl"></div>

            {/* Floating Indicators */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-3">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-3 h-3 ${data.interactiveMap.liveIndicator.dotColor} rounded-full animate-pulse`}
                ></div>
                <span className="text-sm font-medium">
                  {data.interactiveMap.liveIndicator.text}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
