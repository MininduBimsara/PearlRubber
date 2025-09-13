// types/index.ts
import { LucideIcon } from "lucide-react";

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

export interface ComplianceFeature {
  title: string;
  description: string;
  color: string;
}

export interface VerificationPoint {
  title: string;
  description: string;
}

export interface AppFeature {
  text: string;
  color: string;
}

export interface Application {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: AppFeature[];
  gradient: string;
  iconColor: string;
}

export interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
}

export interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}