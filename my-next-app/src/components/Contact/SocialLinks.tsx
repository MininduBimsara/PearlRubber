"use client";

import { Linkedin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const socialLinks: SocialLink[] = [
  { name: "Linked In", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Youtube", href: "#", icon: Youtube },
];

export default function SocialLinks() {
  return (
    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-6">Our Socials</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {socialLinks.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 group"
              aria-label={link.name}
            >
              <IconComponent className="w-8 h-8 transition-transform duration-300" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
