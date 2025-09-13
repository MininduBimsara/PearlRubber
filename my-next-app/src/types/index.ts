// types/index.ts
export interface NavLink {
  href: string;
  label: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface InfoMarkerProps {
  position: string;
  text: string;
  side: "left" | "right";
}
