import React from 'react';

interface FocusArea {
  title: string;
  description: string;
  category: string;
}

interface CoreValue {
  title: string;
  description: string;
  color: string;
}

interface MissionData {
  title: string;
  description: string;
  vision: string;
  focusAreas: FocusArea[];
  coreValues: CoreValue[];
}

interface MissionSectionProps {
  data: MissionData;
}

const getValueColorClass = (color: string) => {
  switch (color) {
    case 'emerald':
      return 'bg-emerald-900 text-white';
    case 'stone':
      return 'bg-stone-800 text-white';
    case 'amber':
      return 'bg-amber-700 text-white';
    default:
      return 'bg-stone-800 text-white';
  }
};

const getValueTextClass = (color: string) => {
  switch (color) {
    case 'emerald':
      return 'text-emerald-100';
    case 'stone':
      return 'text-stone-200';
    case 'amber':
      return 'text-amber-100';
    default:
      return 'text-stone-200';
  }
};

export default function MissionSection({ data }: MissionSectionProps) {
  return (
    <section className="py-24 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Mission Statement */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-8 leading-tight">
            {data.title}
          </h2>
          <p className="text-2xl md:text-3xl text-emerald-800 font-light max-w-4xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Vision Statement */}
        <div className="bg-white rounded-3xl p-12 mb-20 shadow-lg border border-stone-200">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-stone-900 mb-6">Our Vision</h3>
            <p className="text-lg text-stone-700 leading-relaxed">
              {data.vision}
            </p>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-stone-900 text-center mb-16">
            Focus Areas
          </h3>
          
          <div className="grid gap-8 md:grid-cols-2">
            {data.focusAreas.map((area, index) => (
              <div
                key={area.title}
                className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="mb-4">
                  <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {area.category}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-stone-900 mb-4">
                  {area.title}
                </h4>
                <p className="text-stone-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
          {data.coreValues.map((value, index) => (
            <div 
              key={value.title}
              className={`rounded-2xl p-8 text-center ${getValueColorClass(value.color)}`}
            >
              <h4 className="text-2xl font-bold mb-4">{value.title}</h4>
              <p className={`leading-relaxed ${getValueTextClass(value.color)}`}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}