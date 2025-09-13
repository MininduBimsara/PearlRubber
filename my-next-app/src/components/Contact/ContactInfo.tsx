"use client";

import { Mail, Phone, MapPin } from "lucide-react";

interface ContactItem {
  icon: React.ComponentType<any>;
  text: string;
}

const contactItems: ContactItem[] = [
  { icon: Mail, text: "myemail@mail.com" },
  { icon: Phone, text: "+321 8472 8473" },
  { icon: MapPin, text: "Street Address, 85 285" },
];

export default function ContactInfo() {
  return (
    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
      <div className="space-y-6">
        {contactItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="flex items-center space-x-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 backdrop-blur-sm flex items-center justify-center border border-gray-200 group-hover:bg-gray-200 transition-all duration-300">
                <IconComponent className="w-5 h-5 text-gray-700" />
              </div>
              <span className="text-gray-700 text-lg font-medium group-hover:text-gray-800 transition-colors duration-300">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
