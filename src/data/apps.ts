import {
  BarChart2,
  FileText,
  Users,
  HelpCircle,
  Mail,
  MessageSquare,
  Send,
  Package,
  Briefcase,
  PieChart,
  Edit3,
  Code,
  LucideIcon,
} from "lucide-react";

export interface PlatformAppItem {
  id: string;
  name: string;
  cat: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}

export const ALL_ZOHO_APPS: PlatformAppItem[] = [
  {
    id: "crm",
    name: "CRM",
    cat: "sales",
    desc: "Omnichannel customer relation management",
    icon: BarChart2,
    color: "text-red-500",
  },
  {
    id: "books",
    name: "Books",
    cat: "finance",
    desc: "Smart cloud accounting for businesses",
    icon: FileText,
    color: "text-blue-500",
  },
  {
    id: "people",
    name: "People",
    cat: "hr",
    desc: "Agile human resource management",
    icon: Users,
    color: "text-emerald-500",
  },
  {
    id: "desk",
    name: "Desk",
    cat: "service",
    desc: "Context-aware help desk software",
    icon: HelpCircle,
    color: "text-teal-500",
  },
  {
    id: "mail",
    name: "Mail",
    cat: "productivity",
    desc: "Secure email suite for your business",
    icon: Mail,
    color: "text-sky-500",
  },
  {
    id: "cliq",
    name: "Cliq",
    cat: "productivity",
    desc: "Real-time messaging & audio/video calls",
    icon: MessageSquare,
    color: "text-indigo-500",
  },
  {
    id: "campaigns",
    name: "Campaigns",
    cat: "sales",
    desc: "Targeted email marketing automation",
    icon: Send,
    color: "text-amber-500",
  },
  {
    id: "inventory",
    name: "Inventory",
    cat: "operations",
    desc: "Multi-channel inventory and order fulfillment",
    icon: Package,
    color: "text-rose-500",
  },
  {
    id: "projects",
    name: "Projects",
    cat: "operations",
    desc: "Comprehensive cloud project management",
    icon: Briefcase,
    color: "text-green-600",
  },
  {
    id: "analytics",
    name: "Analytics",
    cat: "custom",
    desc: "Self-service BI & data analytics platform",
    icon: PieChart,
    color: "text-purple-600",
  },
  {
    id: "sign",
    name: "Sign",
    cat: "productivity",
    desc: "Legally binding e-signatures made simple",
    icon: Edit3,
    color: "text-cyan-600",
  },
  {
    id: "creator",
    name: "Creator",
    cat: "custom",
    desc: "Low-code custom app development builder",
    icon: Code,
    color: "text-blue-600",
  },
];
