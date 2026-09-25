import { LucideIcon } from "lucide-react";

export interface DepartmentApp {
  id: string;
  name: string;
  desc?: string;
  icon: LucideIcon;
  active?: boolean;
  badgeColor?: string;
}

export interface DepartmentInfo {
  id: string;
  name: string;
  icon: LucideIcon;
  headline: string;
  paragraph: string;
  learnMoreUrl: string;
  apps: DepartmentApp[];
  previewType?: string;
}

export interface NetromDepartmentApp {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface NetromDepartmentInfo {
  id: string;
  name: string;
  icon: LucideIcon;
  headline: string;
  paragraph: string;
  learnMoreUrl: string;
  apps: NetromDepartmentApp[];
}
