// components/contact/ContactHeader.tsx
"use client";

interface ContactHeaderData {
  title: string;
  description: string[];
  phone: {
    text: string;
    icon: string;
    bgColor: string;
    hoverColor: string;
  };
  consultation: {
    text: string;
    arrow: string;
    bgColor: string;
    hoverColor: string;
  };
}

interface ContactHeaderProps {
  data: ContactHeaderData;
}

export default function ContactHeader({ data }: ContactHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
        {data.title}
      </h1>

      <div className="mb-6 space-y-1">
        {data.description.map((paragraph, index) => (
          <p key={index} className="text-gray-600 text-base max-w-2xl">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          className={`${data.phone.bgColor} ${data.phone.hoverColor} text-black px-6 py-3 rounded-full font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 group`}
        >
          <span>{data.phone.icon}</span>
          <span>{data.phone.text}</span>
        </button>

        <button
          className={`${data.consultation.bgColor} ${data.consultation.hoverColor} border border-black text-black px-6 py-3 rounded-full font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 group`}
        >
          <span>{data.consultation.text}</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">
            {data.consultation.arrow}
          </span>
        </button>
      </div>
    </div>
  );
}
