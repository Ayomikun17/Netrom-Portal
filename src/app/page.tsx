"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";

import {
  Search,
  Globe,
  User,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
  Check,
  Sparkles,
  Building,
  Users,
  BarChart2,
  Briefcase,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  ExternalLink,
  Bell,
  Umbrella,
  Moon,
  Lock,
  Grid,
  Settings,
  Plus,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Mail as MailIcon,
  MessageSquare,
  FileText,
  DollarSign,
  TrendingUp,
  Clock,
  PieChart,
  Layers,
  Inbox,
  Filter,
  MoreHorizontal,
  RefreshCw,
  Edit3,
  Bookmark,
  Send,
  Zap,
  CheckCircle,
  AlertCircle,
  Info,
  ShoppingBag,
  Megaphone,
  Headphones,
  Calculator,
  Cog,
  Store,
  ShoppingCart,
  Package,
  FolderKanban,
  PlayCircle,
  Tag,
  Award,
  Sliders,
  Star,
  CheckSquare,
  Layers3,
  CheckSquare as CheckIcon,
  Zap as SprintIcon,
  Package as InventoryIcon,
  Shield,
  Cpu,
  Database,
  Layout,
  Code,
  Terminal,
  CheckCircle2,
  Video,
  LayoutGrid,
  Target,
  Box,
  GraduationCap,
} from "lucide-react";


// Netrom Main Brand Logo
const ZohoLogo = () => (
  <div className="flex items-center space-x-2 font-black text-xl tracking-tight text-gray-900 select-none">
    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0066cc] via-[#e43338] to-[#ffb400] flex items-center justify-center text-white shadow-md">
      <span className="font-extrabold text-sm tracking-tighter">N</span>
    </div>
    <span className="text-gray-900 font-extrabold text-lg tracking-tight">
      Net<span className="text-[#0066cc]">rom</span>
    </span>
  </div>
);

// Netrom Product Logo
const ZohoOneLogo = () => (
  <div className="flex items-center space-x-2">
    <div className="relative w-8 h-8 flex items-center justify-center bg-[#0066cc] rounded-md shadow-md">
      <span className="text-white font-black text-xs tracking-tighter">N</span>
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-extrabold text-gray-900 leading-none">
        NETROM
      </span>
      <span className="text-[9px] text-gray-500 font-semibold tracking-wider uppercase">
        Connected Business Workspace
      </span>
    </div>
  </div>
);

// Hero Section Custom Graphic Illustration (Modern Professional Enterprise Workspace)
const HeroIllustration = () => (
  <svg
    viewBox="0 0 520 480"
    className="w-full h-auto max-w-lg drop-shadow-2xl select-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="heroCardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f8fafc" />
      </linearGradient>
      <linearGradient id="heroBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1d61e7" />
      </linearGradient>
      <linearGradient id="heroAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <filter id="heroGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="12" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Background Ambient Glow Circle */}
    <circle cx="260" cy="240" r="190" fill="#1d61e7" opacity="0.08" filter="url(#heroGlow)" />
    <circle cx="340" cy="180" r="120" fill="#38bdf8" opacity="0.06" filter="url(#heroGlow)" />

    {/* Isometric Dashboard Window 1 (Main Platform Workspace) */}
    <g transform="translate(40, 50)">
      <rect x="0" y="0" width="440" height="320" rx="16" fill="url(#heroCardGrad1)" stroke="#cbd5e1" strokeWidth="1.5" />

      {/* Top Window Bar */}
      <path d="M 0 16 C 0 7, 7 0, 16 0 L 424 0 C 433 0, 440 7, 440 16 L 440 40 L 0 40 Z" fill="#0f172a" />
      <circle cx="20" cy="20" r="4" fill="#ef4444" />
      <circle cx="34" cy="20" r="4" fill="#eab308" />
      <circle cx="48" cy="20" r="4" fill="#22c55e" />
      <rect x="70" y="12" width="160" height="16" rx="4" fill="#1e293b" />
      <text x="80" y="24" fill="#94a3b8" fontSize="9" fontWeight="bold">netrom.app/workspace</text>

      {/* Sidebar Mock */}
      <rect x="0" y="40" width="80" height="280" fill="#f1f5f9" />
      <rect x="12" y="56" width="56" height="8" rx="3" fill="#cbd5e1" />
      <rect x="12" y="74" width="56" height="8" rx="3" fill="#2563eb" />
      <rect x="12" y="92" width="56" height="8" rx="3" fill="#cbd5e1" />
      <rect x="12" y="110" width="56" height="8" rx="3" fill="#cbd5e1" />

      {/* Main Panel Widgets */}
      <g transform="translate(96, 56)">
        {/* Metric Card 1 */}
        <rect x="0" y="0" width="100" height="64" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="10" y="10" width="40" height="6" rx="2" fill="#94a3b8" />
        <text x="10" y="38" fill="#0f172a" fontSize="16" fontWeight="900">24.5%</text>
        <text x="10" y="52" fill="#16a34a" fontSize="8" fontWeight="bold">↑ OKR Progress</text>

        {/* Metric Card 2 */}
        <rect x="110" y="0" width="100" height="64" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="120" y="10" width="40" height="6" rx="2" fill="#94a3b8" />
        <text x="120" y="38" fill="#0f172a" fontSize="16" fontWeight="900">₦4.9M</text>
        <text x="120" y="52" fill="#2563eb" fontSize="8" fontWeight="bold">Monthly Spend</text>

        {/* Metric Card 3 */}
        <rect x="220" y="0" width="110" height="64" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="230" y="10" width="50" height="6" rx="2" fill="#94a3b8" />
        <text x="230" y="38" fill="#0f172a" fontSize="16" fontWeight="900">82%</text>
        <text x="230" y="52" fill="#16a34a" fontSize="8" fontWeight="bold">Task Completion</text>

        {/* Big Chart Box */}
        <rect x="0" y="76" width="330" height="170" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <text x="12" y="96" fill="#1e293b" fontSize="11" fontWeight="bold">Organizational Growth &amp; Staff Performance</text>

        {/* Trend Area Chart Path */}
        <path d="M 16 220 Q 90 200, 150 140 T 260 130 Q 300 110, 314 170 L 314 230 L 16 230 Z" fill="#2563eb" opacity="0.1" />
        <path d="M 16 220 Q 90 200, 150 140 T 260 130 Q 300 110, 314 170" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
        <circle cx="150" cy="140" r="4" fill="#2563eb" />
        <circle cx="260" cy="130" r="4" fill="#2563eb" />
      </g>
    </g>

    {/* Floating Glassmorphic Badge 1: Staff Approval */}
    <g transform="translate(20, 260)" opacity="0.95">
      <rect x="0" y="0" width="160" height="60" rx="12" fill="#ffffff" stroke="#bfdbfe" strokeWidth="1.5" />
      <circle cx="28" cy="30" r="14" fill="#dbeafe" />
      <text x="28" y="34" fill="#1d61e7" fontSize="12" fontWeight="bold" textAnchor="middle">✓</text>
      <text x="50" y="26" fill="#0f172a" fontSize="10" fontWeight="bold">Leave Request Approved</text>
      <text x="50" y="40" fill="#64748b" fontSize="8">HR Review completed</text>
    </g>

    {/* Floating Glassmorphic Badge 2: Security & NDPA Compliant */}
    <g transform="translate(320, 320)" opacity="0.95">
      <rect x="0" y="0" width="170" height="54" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1" />
      <circle cx="26" cy="27" r="12" fill="#16a34a" />
      <text x="26" y="31" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">🔒</text>
      <text x="46" y="24" fill="#ffffff" fontSize="10" fontWeight="bold">NDPA 2023 Compliant</text>
      <text x="46" y="38" fill="#94a3b8" fontSize="8">256-Bit Data Encryption</text>
    </g>

    {/* Floating Floating Icon Element */}
    <g transform="translate(420, 100)">
      <circle cx="24" cy="24" r="24" fill="url(#heroBlueGrad)" />
      <text x="24" y="30" fill="#ffffff" fontSize="18" fontWeight="black" textAnchor="middle">✦</text>
    </g>
  </svg>
);

// Reusable Pulsating Red Hotspot Dot Button Component
const RedHotspot = ({
  id,
  activeHotspot,
  onClick,
  tooltipLabel,
  className = "",
}: {
  id: string;
  activeHotspot: string | null;
  onClick: (id: string) => void;
  tooltipLabel: string;
  className?: string;
}) => {
  const isSelected = activeHotspot === id;

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick(id);
      }}
      className={`relative group focus:outline-none z-30 transition-transform hover:scale-125 ${className}`}
      title={`Click to inspect ${tooltipLabel}`}
    >
      {/* Outer Pulse Ring */}
      <span className="absolute -inset-1 rounded-full bg-red-400 opacity-75 animate-ping"></span>

      {/* Inner Red Dot */}
      <span
        className={`relative flex items-center justify-center w-3.5 h-3.5 rounded-full ${isSelected ? "bg-amber-400 ring-2 ring-red-600 scale-125" : "bg-[#e43338] ring-2 ring-white shadow-md"}`}
      >
        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
      </span>

      {/* Tooltip on Hover */}
      <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex items-center px-2 py-1 bg-gray-900 text-white text-[10px] font-medium rounded shadow-lg whitespace-nowrap z-50 pointer-events-none">
        {tooltipLabel}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></span>
      </span>
    </button>
  );
};

const HOTSPOT_DETAILS: Record<
  string,
  {
    id: string;
    title: string;
    category: string;
    badge: string;
    color: string;
    description: string;
    features: string[];
  }
> = {
  people: {
    id: "people",
    title: "HR & People Management",
    category: "People Operations",
    badge: "People",
    color: "bg-blue-500",
    description:
      "Manage employee information, onboarding, attendance, leave, documents and staff records from one central workspace.",
    features: [
      "Employee directory and profiles",
      "Digital onboarding",
      "Attendance and clock-in/out",
      "Leave management",
      "Employee documents",
      "Staff compliance records",
    ],
  },
  finance: {
    id: "finance",
    title: "Finance & Expense Workflows",
    category: "Financial Operations",
    badge: "Finance",
    color: "bg-emerald-500",
    description:
      "Move requests and expenses through defined approval workflows while giving Finance and Management greater visibility into spending.",
    features: [
      "Requisition management",
      "Multi-level approvals",
      "Expense retirement",
      "Vendor management",
      "Purchase orders",
      "Cost-centre tracking",
    ],
  },
  tasks: {
    id: "tasks",
    title: "Tasks & OKR Management",
    category: "Performance & Execution",
    badge: "Performance",
    color: "bg-purple-500",
    description:
      "Connect strategic goals to the work being delivered every day. Assign, monitor and review tasks while keeping organisational priorities visible.",
    features: [
      "Strategic OKRs",
      "Task assignment",
      "Kanban workflows",
      "Cross-department tasks",
      "Workload management",
      "Deliverable tracking",
    ],
  },
  communication: {
    id: "communication",
    title: "Workplace Communication",
    category: "Collaboration",
    badge: "Communication",
    color: "bg-sky-500",
    description:
      "Keep teams connected with organisation-wide announcements, departmental conversations and workflow notifications in one place.",
    features: [
      "Organisation-wide announcements",
      "Departmental chat",
      "Internal messaging",
      "Workflow notifications",
      "Policy communication",
      "Important updates",
    ],
  },
  insights: {
    id: "insights",
    title: "Staff Insights & Performance Analytics",
    category: "People Intelligence",
    badge: "Analytics",
    color: "bg-amber-500",
    description:
      "Bring attendance, task delivery and team-lead assessments together to give management a broader view of workforce performance.",
    features: [
      "Performance Index",
      "Attendance insights",
      "Task delivery analysis",
      "Team Lead appraisals",
      "Department performance",
      "Management dashboards",
    ],
  },
  payslips: {
    id: "payslips",
    title: "Payroll & Payslip Management",
    category: "Compensation",
    badge: "Payroll",
    color: "bg-green-600",
    description:
      "Give Finance a structured process for generating and distributing payslips while giving employees secure access to their own records.",
    features: [
      "Payslip generation",
      "Payslip distribution",
      "Employee payslip access",
      "Payslip records and history",
    ],
  },
  governance: {
    id: "governance",
    title: "Compliance & Data Privacy",
    category: "Governance",
    badge: "Compliance",
    color: "bg-red-500",
    description:
      "Track important compliance records, manage organisational policies and support secure employee offboarding with privacy controls.",
    features: [
      "Licence and certificate tracking",
      "Expiry reminders",
      "Policy management",
      "Audit trails",
      "Offboarding workflows",
      "PII erasure controls",
    ],
  },
  notifications: {
    id: "notifications",
    title: "Smart Notifications",
    category: "Workflow Intelligence",
    badge: "Notifications",
    color: "bg-indigo-500",
    description:
      "Keep users informed when something needs attention, from approval requests and leave updates to task deadlines and organisational announcements.",
    features: [
      "Real-time notifications",
      "Approval alerts",
      "Task reminders",
      "Email notifications",
      "Browser notifications",
      "WhatsApp notification channels",
    ],
  },
};

const DEPARTMENT_DATA: Record<
  string,
  {
    id: string;
    name: string;
    icon: any;
    headline: string;
    paragraph: string;
    learnMoreUrl: string;
    apps: {
      id: string;
      name: string;
      icon: any;
      active: boolean;
      badgeColor?: string;
      desc?: string;
    }[];
    previewType: string;
  }
> = {
  people: {
    id: "people",
    name: "People",
    icon: User,
    headline: "Give HR a complete view of your workforce.",
    paragraph:
      "Centralise employee information, onboarding, attendance, leave, documents, training and compliance. Give HR the tools to manage the employee lifecycle while keeping important records structured and accessible.",
    learnMoreUrl: "#",
    apps: [
      {
        id: "employee",
        name: "Employee Management",
        desc: "Employee profiles, departments, roles and onboarding.",
        icon: Users,
        active: true,
      },
      {
        id: "attendance",
        name: "Attendance",
        desc: "Clock-in, clock-out, attendance tracking and reporting.",
        icon: Clock,
        active: false,
      },
      {
        id: "leave",
        name: "Leave",
        desc: "Digital requests, approvals, balances and leave history.",
        icon: Calendar,
        active: false,
      },
    ],
    previewType: "hr",
  },
  finance: {
    id: "finance",
    name: "Finance",
    icon: Calculator,
    headline:
      "Put financial workflows on a clear path from request to approval.",
    paragraph:
      "Manage requisitions, expenses, vendors, purchase orders and payslips through structured workflows. Give Finance and Management better control over spending and financial activity.",
    learnMoreUrl: "#",
    apps: [
      {
        id: "requisitions",
        name: "Requisitions",
        desc: "Create, review, route and approve requests.",
        icon: DollarSign,
        active: true,
      },
      {
        id: "expenses",
        name: "Expenses",
        desc: "Track expense retirement and supporting documentation.",
        icon: PieChart,
        active: false,
      },
      {
        id: "payslips",
        name: "Payslips",
        desc: "Generate, distribute and securely access payslips.",
        icon: FileText,
        active: false,
      },
    ],
    previewType: "finance",
  },
  performance: {
    id: "performance",
    name: "Performance",
    icon: TrendingUp,
    headline: "Connect strategy to the work getting done.",
    paragraph:
      "Turn organisational objectives into visible goals, tasks and deliverables. Netrom helps managers understand what teams are working on, how work is progressing and where attention is needed.",
    learnMoreUrl: "#",
    apps: [
      {
        id: "okrs",
        name: "OKRs",
        desc: "Set strategic goals and track progress.",
        icon: BarChart2,
        active: true,
      },
      {
        id: "tasks",
        name: "Tasks",
        desc: "Assign and manage work across teams and departments.",
        icon: CheckIcon,
        active: false,
      },
      {
        id: "insights",
        name: "Insights",
        desc: "Understand attendance, delivery and workforce performance.",
        icon: Sparkles,
        active: false,
      },
    ],
    previewType: "sales",
  },
  operations: {
    id: "operations",
    name: "Operations",
    icon: Cog,
    headline: "Bring everyday operational workflows into one system.",
    paragraph:
      "Manage vendors, purchase orders, inventory and operational requests through structured workflows that reduce manual follow-up and give teams greater visibility.",
    learnMoreUrl: "#",
    apps: [
      {
        id: "vendors",
        name: "Vendors",
        desc: "Centralise vendor records and management.",
        icon: Building,
        active: true,
      },
      {
        id: "purchase_orders",
        name: "Purchase Orders",
        desc: "Create and manage purchasing workflows.",
        icon: ShoppingCart,
        active: false,
      },
      {
        id: "inventory",
        name: "Inventory",
        desc: "Track assets, stock levels and operational items.",
        icon: Package,
        active: false,
      },
    ],
    previewType: "operations",
  },
  communication: {
    id: "communication",
    name: "Communication",
    icon: MessageSquare,
    headline: "Keep everyone informed without adding another tool.",
    paragraph:
      "Create a more connected workplace with central announcements, departmental conversations, direct messages and workflow notifications.",
    learnMoreUrl: "#",
    apps: [
      {
        id: "messages",
        name: "Messages",
        desc: "Keep internal conversations organised.",
        icon: MessageSquare,
        active: true,
      },
      {
        id: "announcements",
        name: "Announcements",
        desc: "Share important information across the organisation.",
        icon: Megaphone,
        active: false,
      },
      {
        id: "policies",
        name: "Policies",
        desc: "Give employees controlled access to important organisational documents.",
        icon: FileText,
        active: false,
      },
    ],
    previewType: "marketing",
  },
  governance: {
    id: "governance",
    name: "Governance",
    icon: ShieldCheck,
    headline: "Build accountability into the way your organisation works.",
    paragraph:
      "Track compliance obligations, manage organisational policies, preserve audit history and support secure offboarding while protecting the continuity of organisational knowledge.",
    learnMoreUrl: "#",
    apps: [
      {
        id: "compliance",
        name: "Compliance",
        desc: "Monitor licences, certificates and renewal dates.",
        icon: ShieldCheck,
        active: true,
      },
      {
        id: "privacy",
        name: "Privacy",
        desc: "Manage offboarding and personal data erasure.",
        icon: Lock,
        active: false,
      },
      {
        id: "governance_app",
        name: "Governance",
        desc: "Control correspondence, policies and audit information.",
        icon: Briefcase,
        active: false,
      },
    ],
    previewType: "service",
  },
};

const ALL_ZOHO_APPS = [
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
    icon: MailIcon,
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

/* ============================================================
   NETROM — "ALL YOUR TEAMS ACROSS DEPARTMENTS" SECTION
   Self-contained: owns its own data + state, so it can be
   dropped in anywhere above export default function Home() {
   and rendered with <TeamsAcrossDepartmentsSection />
   ============================================================ */

const NETROM_DEPARTMENT_DATA: Record<
  string,
  {
    id: string;
    name: string;
    icon: any;
    headline: string;
    paragraph: string;
    learnMoreUrl: string;
    apps: { id: string; name: string; icon: any }[];
  }
> = {
  management: {
    id: "management",
    name: "Management & OKRs",
    icon: Grid,
    headline: "Align strategy with execution across all departments.",
    paragraph:
      "Keep company objectives top-of-mind. Track high-level metrics, review pending cross-department requisitions, evaluate task bottlenecks, and monitor OKR health in one unified executive dashboard.",
    learnMoreUrl: "#",
    apps: [
      { id: "dashboard", name: "Management Console", icon: Grid },
      { id: "okrs", name: "Strategic Goals", icon: BarChart2 },
    ],
  },
  messages: {
    id: "messages",
    name: "Messages & Broadcasts",
    icon: MessageSquare,
    headline: "Instant, transparent internal communication for all teams.",
    paragraph:
      "Eliminate email fragmentation. Connect executive leadership with staff through direct messaging, official broadcasts, announcement logs, and quick contextual feedback loops.",
    learnMoreUrl: "#",
    apps: [
      { id: "inbox", name: "Messages Hub", icon: Inbox },
      { id: "announcements", name: "Announcements", icon: Megaphone },
    ],
  },
  operations: {
    id: "operations",
    name: "Operations & Stock",
    icon: Cog,
    headline: "Real-time multi-warehouse inventory and logistics.",
    paragraph:
      "Track product stock on hand, committed reserves, and reorder levels across multiple regional fulfillment centers. Adjust inventory instantly with full audit trails.",
    learnMoreUrl: "#",
    apps: [
      { id: "inventory", name: "Item Master", icon: Package },
      { id: "warehouses", name: "Locations", icon: Building },
    ],
  },
  finance: {
    id: "finance",
    name: "Finance & Ledger",
    icon: Calculator,
    headline: "Automated ledger tracking, budget vs. actuals, and cash flow.",
    paragraph:
      "Full transparency into organizational spending, monthly budget allocations, operating expenses, and revenue velocity with multi-currency support tailored for Nigerian business operations.",
    learnMoreUrl: "#",
    apps: [
      { id: "analytics", name: "Executive Financials", icon: TrendingUp },
      { id: "budget", name: "Budget Control", icon: PieChart },
    ],
  },
  hr: {
    id: "hr",
    name: "HR & People Ops",
    icon: Users,
    headline: "Employee directory, attendance, performance, and leaves.",
    paragraph:
      "Empower HR managers to streamline employee onboarding, review leave applications in real time, track attendance compliance, and maintain employee records smoothly.",
    learnMoreUrl: "#",
    apps: [
      { id: "staff", name: "Staff Directory", icon: Users },
      { id: "leaves", name: "Leave Queue", icon: Calendar },
    ],
  },
  requisitions: {
    id: "requisitions",
    name: "Procurement & Req",
    icon: FileText,
    headline: "Transparent approval chains for expense requisitions.",
    paragraph:
      "Prevent unauthorized spend with multi-tier approval workflows. Requisitions are routed automatically to line managers and financial approvers with complete audit trails.",
    learnMoreUrl: "#",
    apps: [
      { id: "console", name: "Approval Console", icon: CheckSquare },
      { id: "newreq", name: "Raise Request", icon: Plus },
    ],
  },
};

// Scroll-triggered fly in & fade animation component
function ScrollReveal({
  children,
  direction = "fade",
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  direction?: "left" | "right" | "fade";
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0)";
    if (direction === "left") return "translate3d(-80px, 0, 0)";
    if (direction === "right") return "translate3d(80px, 0, 0)";
    return "translate3d(0, 40px, 0)";
  };

  return (
    <div
      ref={ref}
      className={`w-full ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 1.4s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 1.4s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

function TeamsAcrossDepartmentsSection() {
  const [selectedDept, setSelectedDept] = useState("management");
  const [selectedDeptApp, setSelectedDeptApp] = useState("dashboard");

  // Messages & Broadcasts state (the only fully interactive replica besides
  // Management & OKRs)
  const [pcMessages, setPcMessages] = useState([
    {
      id: 1,
      sender: "Chukwudi Okeke",
      initials: "CO",
      date: "12 May",
      fullDate: "Friday May 15th · 12 May",
      subject: "Q2 OKR Review — Friday May 15th",
      body:
        "Team,\n\nPlease prepare your Q2 OKR progress updates for the review meeting on Friday May 15th at 10:00 AM. All team leads should submit their department reports to the portal by Thursday EOD.\n\nChukwudi Okeke\nManagement",
      replies: [] as { author: string; time: string; text: string }[],
    },
    {
      id: 2,
      sender: "Emeka Nwosu",
      initials: "EN",
      date: "30 Apr",
      fullDate: "Thursday · 30 Apr",
      subject: "May 2026 Payslips — Now Available",
      body:
        "Dear Staff,\n\nPlease note that the April 2026 payslips have been generated and published to your individual portals. Kindly review your allowances and tax withholdings.\n\nEmeka Nwosu\nHR Department",
      replies: [] as { author: string; time: string; text: string }[],
    },
  ]);
  const [pcActiveMessageId, setPcActiveMessageId] = useState(1);
  const [pcReplyDraft, setPcReplyDraft] = useState("");

  const sendPcReply = () => {
    const text = pcReplyDraft.trim();
    if (!text) return;
    setPcMessages((prev) =>
      prev.map((m) =>
        m.id === pcActiveMessageId
          ? {
            ...m,
            replies: [
              ...m.replies,
              { author: "Adaeze Okafor (You)", time: "Just now", text },
            ],
          }
          : m,
      ),
    );
    setPcReplyDraft("");
  };

  return (
    <section id="departments" className="bg-[#fbf7ee] py-16 sm:py-24 border-t border-amber-200/50 relative overflow-hidden select-none">
      <ScrollReveal direction="fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Headline */}
          <div className="max-w-4xl mb-10 sm:mb-12 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-gray-900 tracking-tight leading-[1.14]">
              Every team has a role to play.
              <br className="hidden sm:inline" />
              Netrom connects them all.
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mt-3 font-normal max-w-3xl leading-relaxed">
              From onboarding a new employee to approving a requisition,
              tracking strategic goals or reviewing financial performance,
              Netrom connects the people, processes and information behind
              everyday business operations.
            </p>
          </div>

          {/* Department Tab Switcher Bar */}
          <div className="mb-12 overflow-x-auto pb-2 scrollbar-none">
            <div className="bg-white rounded-2xl p-1.5 shadow-xs border border-gray-200/80 inline-flex items-center gap-1.5 sm:gap-2">
              {Object.keys(NETROM_DEPARTMENT_DATA).map((deptKey) => {
                const dept = NETROM_DEPARTMENT_DATA[deptKey];
                const IconComp = dept.icon;
                const isSelected = selectedDept === deptKey;

                return (
                  <button
                    key={deptKey}
                    onClick={() => {
                      setSelectedDept(deptKey);
                      setSelectedDeptApp(dept.apps[0].id);
                    }}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap focus:outline-none cursor-pointer ${isSelected
                        ? "bg-[#ffc72c] text-gray-900 shadow-sm scale-100"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/70 font-semibold"
                      }`}
                  >
                    <IconComp
                      className={`w-4 h-4 ${isSelected ? "text-gray-900" : "text-gray-500"}`}
                    />
                    <span>{dept.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Department Detailed Showcase Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6 pt-2 text-left">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-snug">
                {NETROM_DEPARTMENT_DATA[selectedDept].headline}
              </h3>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                {NETROM_DEPARTMENT_DATA[selectedDept].paragraph}
              </p>
            </div>

            {/* Right Interactive UI App Replica Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden text-xs text-gray-800 transition-all duration-300">
                {/* Window chrome — no URL shown */}
                <div className="bg-slate-900 px-4 py-2.5 text-white flex items-center justify-between text-xs border-b border-slate-800">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Live Interactive Frame
                  </span>
                </div>

                {/* ------------------------------- */}
                {/* MANAGEMENT & OKRs REPLICA (interactive; sidebar frozen) */}
                {/* ------------------------------- */}
                {selectedDept === "management" && (
                  <div className="flex flex-col md:flex-row min-h-[560px]">
                    <div className="w-full md:w-56 bg-white border-r border-gray-200 p-3 flex-none text-[11.5px] font-medium text-gray-600 space-y-1 hidden md:block pointer-events-none select-none">
                      <div className="p-2 mb-2 font-bold text-blue-700 bg-blue-50/80 rounded-lg flex items-center space-x-2">
                        <Grid className="w-4 h-4" />
                        <span>Dashboard</span>
                      </div>
                      <div className="p-2 rounded-lg flex items-center justify-between">
                        <span>Approval Console</span>
                        <span className="bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">2</span>
                      </div>
                      <div className="p-2 rounded-lg">Goals & OKRs</div>
                      <div className="p-2 rounded-lg">Tasks & OKRs</div>
                      <div className="p-2 rounded-lg">Attendance</div>
                      <div className="p-2 rounded-lg">Requisitions</div>
                      <div className="p-2 rounded-lg">Finance</div>
                      <div className="p-2 rounded-lg">Documents</div>
                      <div className="p-2 rounded-lg">Staff Management</div>
                      <div className="p-2 rounded-lg">Reports & Analytics</div>
                      <div className="p-2 rounded-lg flex items-center justify-between">
                        <span>Messages</span>
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                      </div>
                    </div>

                    <div className="flex-1 p-4 sm:p-6 bg-slate-50 space-y-5 overflow-y-auto max-h-[620px]">
                      <div>
                        <p className="text-[10px] text-gray-500 font-medium">PGS Portal &gt; Dashboard</p>
                        <h2 className="text-xl font-extrabold text-gray-900 tracking-tight mt-0.5">Management Dashboard</h2>
                      </div>

                      <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 flex items-center space-x-3 shadow-sm">
                        <div className="w-9 h-9 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center flex-none">
                          <Zap className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-xs">Strategic Console</h4>
                          <p className="text-[11px] text-gray-500">Needs attention, organizational health, OKR portfolio and console overview</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-2.5">Needs Your Attention</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm relative">
                            <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-red-500" />
                            <div className="text-2xl font-black text-gray-900">2</div>
                            <p className="text-xs font-bold text-gray-800 mt-1">Pending Requisitions</p>
                            <p className="text-[10px] text-gray-500">Awaiting your approval</p>
                            <button
                              onClick={() => setSelectedDept("requisitions")}
                              className="text-blue-600 hover:text-blue-800 text-[11px] font-bold mt-3 inline-block cursor-pointer"
                            >
                              Review →
                            </button>
                          </div>
                          <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm relative">
                            <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-red-500" />
                            <div className="text-2xl font-black text-gray-900">34</div>
                            <p className="text-xs font-bold text-gray-800 mt-1">Tasks Pending Review</p>
                            <p className="text-[10px] text-gray-500">Require management review</p>
                            <span className="text-gray-400 text-[11px] font-bold mt-3 inline-block">Review →</span>
                          </div>
                          <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm relative">
                            <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-orange-500" />
                            <div className="text-2xl font-black text-gray-900">2</div>
                            <p className="text-xs font-bold text-gray-800 mt-1">Leave Requests</p>
                            <p className="text-[10px] text-gray-500">Awaiting approval</p>
                            <button
                              onClick={() => setSelectedDept("hr")}
                              className="text-blue-600 hover:text-blue-800 text-[11px] font-bold mt-3 inline-block cursor-pointer"
                            >
                              Approve →
                            </button>
                          </div>
                          <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm relative">
                            <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-red-500" />
                            <div className="text-2xl font-black text-gray-900">11</div>
                            <p className="text-xs font-bold text-gray-800 mt-1">At-Risk OKRs</p>
                            <p className="text-[10px] text-gray-500">Require immediate attention</p>
                            <span className="text-gray-400 text-[11px] font-bold mt-3 inline-block">View →</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-2.5">Organizational Health</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          {[
                            { label: "OKR Progress", value: "24.5%", target: "Target: 75%", note: "↑ +4% this month" },
                            { label: "Portfolio Health", value: "28.1%", target: "Target: 80%", note: "↑ On track" },
                            { label: "Monthly Spend vs Budget", value: "₦4.9M", target: "Target: ₦5,000,000", note: "↑ 98.2% utilized" },
                            { label: "Task Completion Rate", value: "82%", target: "Target: 90%", note: "↑ +3% vs last month" },
                          ].map((k) => (
                            <div key={k.label} className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm">
                              <p className="text-[10px] font-bold text-gray-400 uppercase">{k.label}</p>
                              <div className="text-xl font-extrabold text-gray-900 mt-0.5">{k.value}</div>
                              <p className="text-[10px] text-gray-500">{k.target}</p>
                              <p className="text-[10px] text-emerald-600 font-semibold mt-1">{k.note}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                        <h4 className="font-bold text-gray-900 text-xs mb-3">OKR & Portfolio Health Summary</h4>
                        <div className="space-y-3">
                          {[
                            { title: "Achieve 95% Portal Adoption Across All Staff", progress: 71 },
                            { title: "Reduce Payroll Processing Time by 30%", progress: 80 },
                            { title: "Complete Engineering Platform Modernisation", progress: 85 },
                            { title: "Increase Share of Base Revenue Streams by 25%", progress: 40 },
                            { title: "Optimize Logistics Requisition Cycle Time", progress: 62 },
                          ].map((okr) => (
                            <div key={okr.title}>
                              <div className="flex justify-between text-[11px] font-medium text-gray-700 mb-1">
                                <span className="truncate max-w-[70%]">{okr.title}</span>
                                <span className="font-bold text-emerald-700">{okr.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                <div className="bg-emerald-600 h-full rounded-full" style={{ width: `${okr.progress}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-2.5 flex flex-wrap items-center justify-between gap-2 shadow-sm">
                        <div className="flex items-center space-x-1.5 flex-wrap">
                          <button className="bg-blue-600 text-white font-bold text-xs px-3 py-1.5 rounded-lg cursor-default">+ Assign Task</button>
                          <button className="bg-gray-100 text-gray-700 font-semibold text-xs px-2.5 py-1.5 rounded-lg cursor-default">New OKR</button>
                          <button
                            onClick={() => setSelectedDept("hr")}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs px-2.5 py-1.5 rounded-lg cursor-pointer"
                          >
                            Leave queue
                          </button>
                          <button
                            onClick={() => setSelectedDept("hr")}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs px-2.5 py-1.5 rounded-lg cursor-pointer"
                          >
                            Staff directory
                          </button>
                        </div>
                        <div className="text-[10px] font-bold text-gray-400">CONSOLE OVERVIEW</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ------------------------------- */}
                {/* MESSAGES & BROADCASTS REPLICA (fully interactive, no toasts) */}
                {/* ------------------------------- */}
                {selectedDept === "messages" &&
                  (() => {
                    const activeMsg =
                      pcMessages.find((m) => m.id === pcActiveMessageId) || pcMessages[0];
                    return (
                      <div className="flex flex-col md:flex-row min-h-[560px]">
                        <div className="w-full md:w-80 bg-white border-r border-gray-200 flex flex-col flex-none">
                          <div className="p-3 border-b border-gray-200 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-xs text-gray-800">Messages</span>
                              <button className="bg-blue-600 text-white font-bold text-[11px] px-2.5 py-1 rounded-md cursor-default">
                                + Compose
                              </button>
                            </div>
                            <div className="flex border-b border-gray-100 text-xs font-semibold text-gray-500">
                              <button className="py-1.5 text-blue-600 border-b-2 border-blue-600 font-bold mr-4">
                                Inbox ({pcMessages.length})
                              </button>
                              <button className="py-1.5 text-gray-400 cursor-default">Sent</button>
                            </div>
                          </div>
                          <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
                            {pcMessages.map((msg) => (
                              <div
                                key={msg.id}
                                onClick={() => setPcActiveMessageId(msg.id)}
                                className={`p-3 hover:bg-gray-50 cursor-pointer transition-colors ${msg.id === activeMsg.id ? "bg-blue-50/60 border-l-4 border-blue-600" : ""
                                  }`}
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <div className="flex items-center space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold flex items-center justify-center">
                                      {msg.initials}
                                    </div>
                                    <span className="font-bold text-xs text-gray-900">{msg.sender}</span>
                                  </div>
                                  <span className="text-[10px] text-gray-400">{msg.date}</span>
                                </div>
                                <p className="font-semibold text-xs text-gray-800 truncate">{msg.subject}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex-1 flex flex-col bg-white">
                          <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
                            <div>
                              <p className="text-[10px] text-gray-500">Management &gt; Messages</p>
                              <h3 className="font-black text-gray-900 text-base mt-0.5">Messages</h3>
                            </div>
                            <button className="border border-gray-300 text-gray-700 text-xs font-semibold px-3 py-1 rounded-md cursor-default">
                              ↩ Reply
                            </button>
                          </div>

                          <div className="p-6 flex-1 overflow-y-auto space-y-5">
                            <div className="flex items-start space-x-3">
                              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-800 font-bold flex items-center justify-center text-sm">
                                {activeMsg.initials}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-baseline justify-between">
                                  <h4 className="font-bold text-gray-900 text-sm">{activeMsg.sender}</h4>
                                  <span className="text-xs text-gray-400">{activeMsg.fullDate}</span>
                                </div>
                                <p className="text-xs font-semibold text-blue-700 mt-0.5">{activeMsg.subject}</p>
                                <div className="mt-4 text-xs text-gray-700 whitespace-pre-line leading-relaxed border-t border-b border-gray-100 py-4">
                                  {activeMsg.body}
                                </div>

                                {activeMsg.replies.length > 0 && (
                                  <div className="mt-4 space-y-3">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">Replies</p>
                                    {activeMsg.replies.map((r, i) => (
                                      <div key={i} className="bg-blue-50/50 border border-blue-100 rounded-xl p-3 text-xs">
                                        <div className="flex justify-between font-bold text-gray-800 mb-1">
                                          <span>{r.author}</span>
                                          <span className="text-[10px] text-gray-400 font-normal">{r.time}</span>
                                        </div>
                                        <p className="text-gray-700">{r.text}</p>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                <div className="mt-6 pt-4 border-t border-gray-100">
                                  <label className="block text-xs font-bold text-gray-700 mb-2">Quick Reply</label>
                                  <textarea
                                    rows={3}
                                    value={pcReplyDraft}
                                    onChange={(e) => setPcReplyDraft(e.target.value)}
                                    placeholder="Type your reply..."
                                    className="w-full border border-gray-300 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50/50"
                                  />
                                  <div className="mt-2 text-right">
                                    <button
                                      onClick={sendPcReply}
                                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl cursor-pointer"
                                    >
                                      Send Reply
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                {/* ------------------------------- */}
                {/* OPERATIONS & STOCK REPLICA (static mockup — not clickable) */}
                {/* ------------------------------- */}
                {selectedDept === "operations" && (
                  <div className="min-h-[560px] p-4 sm:p-6 bg-slate-50 space-y-4 pointer-events-none select-none">
                    <div>
                      <p className="text-[10px] text-gray-500 font-medium">HR Admin &gt; Operations</p>
                      <h2 className="text-xl font-extrabold text-gray-900 tracking-tight mt-0.5">Operations</h2>
                      <p className="text-gray-500 text-[11px] mt-0.5">
                        Inventory & asset tracking, vendor management, purchase orders and RFQs
                      </p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-xl px-3.5 py-2.5 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-none" />
                      <p className="text-[11.5px]">
                        <strong>2 item(s) need restocking.</strong> Printing Paper (1≤1), Office Envelopes
                        (5 pcs≤5) — raise a purchase order to restock.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-200/80 p-1.5 inline-flex items-center gap-1 shadow-sm">
                      {["Asset & Inventory", "Vendors", "Purchase Orders", "RFQs / Quotes"].map((t, i) => (
                        <span
                          key={t}
                          className={`px-3 py-1.5 rounded-lg text-[11.5px] font-bold ${i === 0 ? "text-blue-700 bg-blue-50" : "text-gray-400"
                            }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      {[
                        { label: "Total Items", value: 18, color: "text-blue-700 bg-blue-50" },
                        { label: "Assigned", value: 10, color: "text-emerald-700 bg-emerald-50" },
                        { label: "Available", value: 5, color: "text-amber-700 bg-amber-50" },
                        { label: "Low Stock", value: 2, color: "text-purple-700 bg-purple-50" },
                      ].map((k) => (
                        <div key={k.label} className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm">
                          <span className={`inline-block text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded ${k.color}`}>
                            {k.label}
                          </span>
                          <div className="text-2xl font-black text-gray-900 mt-1.5">{k.value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                      <div className="p-3.5 border-b border-gray-100">
                        <h4 className="font-bold text-gray-900 text-xs">Inventory & Assets</h4>
                      </div>
                      <table className="w-full text-left text-xs">
                        <thead className="bg-gray-50 text-[10px] uppercase text-gray-500 font-bold border-b border-gray-100">
                          <tr>
                            <th className="p-2.5">Item</th>
                            <th className="p-2.5">Category</th>
                            <th className="p-2.5">Stock</th>
                            <th className="p-2.5">Condition</th>
                            <th className="p-2.5">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {[
                            { name: "Alienware Laptop", cat: "IT Equipment", stock: "5 pcs", cond: "New", status: "Available" },
                            { name: "Apple MacBook Air M2", cat: "Laptop", stock: "1", cond: "Good", status: "Assigned" },
                            { name: "Canon PIXMA Printer G3411", cat: "Printer", stock: "1", cond: "Fair", status: "Available" },
                            { name: "Printing Paper (A4 Ream)", cat: "Consumable", stock: "1", cond: "—", status: "Low Stock" },
                          ].map((a) => (
                            <tr key={a.name}>
                              <td className="p-2.5 font-bold text-gray-900">{a.name}</td>
                              <td className="p-2.5 text-gray-600">{a.cat}</td>
                              <td className="p-2.5 font-semibold text-gray-800">{a.stock}</td>
                              <td className="p-2.5 text-gray-500">{a.cond}</td>
                              <td className="p-2.5">
                                <span
                                  className={`text-[11px] font-bold ${a.status === "Available"
                                      ? "text-emerald-600"
                                      : a.status === "Assigned"
                                        ? "text-blue-600"
                                        : "text-red-600"
                                    }`}
                                >
                                  {a.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* ------------------------------- */}
                {/* FINANCE & LEDGER REPLICA (static mockup — not clickable) */}
                {/* ------------------------------- */}
                {selectedDept === "finance" && (
                  <div className="min-h-[560px] p-5 bg-slate-900 text-slate-100 space-y-5 pointer-events-none select-none">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                      <div>
                        <h3 className="text-lg font-bold text-amber-400">Finance & General Ledger</h3>
                        <p className="text-xs text-slate-400">All figures in Nigerian Naira (₦) · Q3 2026</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { label: "Total Revenue", value: "₦48.2M", note: "↑ +12.4% vs last Q", color: "text-emerald-400" },
                        { label: "Operating Expenses", value: "₦32.6M", note: "within budget", color: "text-amber-400" },
                        { label: "Net Profit Margin", value: "32.3%", note: "Healthy margin", color: "text-blue-400" },
                        { label: "Cash Reserves", value: "₦15.6M", note: "Lagos Main Account", color: "text-indigo-400" },
                        { label: "Accounts Receivable", value: "₦6.4M", note: "18 open invoices", color: "text-teal-400" },
                        { label: "Accounts Payable", value: "₦3.1M", note: "9 vendor bills due", color: "text-rose-400" },
                        { label: "Monthly Burn Rate", value: "₦10.8M", note: "~4.4 months runway", color: "text-orange-400" },
                        { label: "Budget Utilization", value: "98.2%", note: "Target: ₦5,000,000/mo", color: "text-emerald-400" },
                      ].map((k) => (
                        <div key={k.label} className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                          <span className="text-[10px] uppercase font-bold text-slate-400">{k.label}</span>
                          <div className={`text-xl font-extrabold font-mono mt-1 ${k.color}`}>{k.value}</div>
                          <span className="text-[10px] text-slate-400">{k.note}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="lg:col-span-2 bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                        <h4 className="text-xs font-bold text-slate-300 mb-3">Monthly Revenue vs Expenditure (₦M)</h4>
                        <div className="flex items-end gap-3 h-40">
                          {[
                            { m: "May", rev: 38, exp: 28 },
                            { m: "Jun", rev: 42, exp: 30 },
                            { m: "Jul", rev: 45, exp: 31 },
                            { m: "Aug", rev: 41, exp: 29 },
                            { m: "Sep", rev: 48, exp: 32 },
                            { m: "Oct", rev: 52, exp: 34 },
                          ].map((d) => (
                            <div key={d.m} className="flex-1 flex flex-col items-center gap-1">
                              <div className="w-full flex items-end gap-0.5 h-32">
                                <div className="flex-1 bg-emerald-500 rounded-t" style={{ height: `${(d.rev / 55) * 100}%` }} />
                                <div className="flex-1 bg-amber-500 rounded-t" style={{ height: `${(d.exp / 55) * 100}%` }} />
                              </div>
                              <span className="text-[9px] text-slate-400">{d.m}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-[10px] text-slate-400">
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" /> Revenue
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-amber-500" /> Expenses
                          </span>
                        </div>
                      </div>

                      <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                        <h4 className="text-xs font-bold text-slate-300 mb-3">Expense by Category</h4>
                        <div
                          className="w-28 h-28 rounded-full mx-auto"
                          style={{
                            background:
                              "conic-gradient(#60a5fa 0% 42%, #34d399 42% 66%, #fbbf24 66% 81%, #f472b6 81% 92%, #a78bfa 92% 100%)",
                          }}
                        />
                        <div className="mt-3 space-y-1 text-[10px] text-slate-300">
                          {[
                            { c: "bg-blue-400", label: "Payroll", pct: "42%" },
                            { c: "bg-emerald-400", label: "Vendors & Logistics", pct: "24%" },
                            { c: "bg-amber-400", label: "Cloud & IT", pct: "15%" },
                            { c: "bg-pink-400", label: "Facilities", pct: "11%" },
                            { c: "bg-purple-400", label: "Marketing", pct: "8%" },
                          ].map((l) => (
                            <div key={l.label} className="flex justify-between">
                              <span className="flex items-center gap-1">
                                <span className={`w-2 h-2 rounded-full ${l.c}`} />
                                {l.label}
                              </span>
                              <span>{l.pct}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-800/60 rounded-xl border border-slate-700 overflow-hidden">
                      <div className="p-3.5 border-b border-slate-700">
                        <h4 className="text-xs font-bold text-slate-300">Budget vs Actual by Department</h4>
                      </div>
                      <table className="w-full text-left text-xs">
                        <thead className="text-[10px] uppercase text-slate-400 border-b border-slate-700 font-bold">
                          <tr>
                            <th className="p-2.5">Department</th>
                            <th className="p-2.5">Budget</th>
                            <th className="p-2.5">Actual</th>
                            <th className="p-2.5 w-32">Utilization</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700/70">
                          {[
                            { dept: "Engineering", budget: 14.5, actual: 13.8 },
                            { dept: "Operations", budget: 8.2, actual: 8.9 },
                            { dept: "Sales & Marketing", budget: 6.0, actual: 5.1 },
                            { dept: "HR & People Ops", budget: 3.9, actual: 3.6 },
                          ].map((r) => {
                            const pct = Math.round((r.actual / r.budget) * 100);
                            const over = r.actual > r.budget;
                            return (
                              <tr key={r.dept}>
                                <td className="p-2.5 font-semibold text-slate-200">{r.dept}</td>
                                <td className="p-2.5 font-mono text-slate-300">₦{r.budget.toFixed(1)}M</td>
                                <td className="p-2.5 font-mono text-slate-300">₦{r.actual.toFixed(1)}M</td>
                                <td className="p-2.5">
                                  <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                    <div
                                      className={`h-full rounded-full ${over ? "bg-rose-500" : "bg-emerald-500"}`}
                                      style={{ width: `${Math.min(pct, 100)}%` }}
                                    />
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* ------------------------------- */}
                {/* HR & PEOPLE OPS REPLICA (static mockup — not clickable) */}
                {/* ------------------------------- */}
                {selectedDept === "hr" && (
                  <div className="min-h-[560px] bg-white pointer-events-none select-none">
                    <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-gray-400">PGS Portal &gt; HR</p>
                        <h3 className="text-base font-bold text-gray-900">Staff Directory</h3>
                      </div>
                    </div>
                    <div className="px-4 sm:px-5 pt-3 flex gap-5 border-b border-gray-100 text-[11.5px] font-bold">
                      {["Staff Directory", "Attendance", "Performance", "Leave"].map((t, i) => (
                        <span key={t} className={`pb-2.5 ${i === 0 ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-400"}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="p-4 sm:p-5 bg-slate-50">
                      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-gray-50 text-[10px] uppercase text-gray-500 border-b border-gray-200 font-bold">
                            <tr>
                              <th className="p-2.5">Name</th>
                              <th className="p-2.5">Department</th>
                              <th className="p-2.5">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {[
                              { name: "Adaeze Okafor", dept: "HR Operations", status: "Active" },
                              { name: "Chukwudi Okeke", dept: "Management", status: "Active" },
                              { name: "Emeka Nwosu", dept: "HR Operations", status: "On Leave" },
                              { name: "Amara Nwosu", dept: "Engineering", status: "Active" },
                            ].map((s) => (
                              <tr key={s.name}>
                                <td className="p-2.5 font-semibold">{s.name}</td>
                                <td className="p-2.5">{s.dept}</td>
                                <td className="p-2.5">
                                  <span className={`font-bold ${s.status === "Active" ? "text-emerald-700" : "text-amber-700"}`}>
                                    {s.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* ------------------------------- */}
                {/* REQUISITIONS REPLICA (static mockup — not clickable) */}
                {/* ------------------------------- */}
                {selectedDept === "requisitions" && (
                  <div className="min-h-[560px] p-5 bg-white space-y-4 text-xs pointer-events-none select-none">
                    <div>
                      <p className="text-[10px] text-gray-400">PGS Portal &gt; Requisitions</p>
                      <h3 className="text-base font-bold text-gray-900">Procurement & Expense Approvals</h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        {
                          id: "REQ-1092",
                          title: "Dell XPS 15 Workstations (3 Units)",
                          dept: "Engineering",
                          amount: "₦2,450,000",
                          requester: "Oluwaseun Bakare",
                          date: "2026-09-21",
                          status: "Pending",
                        },
                        {
                          id: "REQ-1093",
                          title: "Q4 AWS Cloud Infrastructure Renewal",
                          dept: "DevOps",
                          amount: "₦1,820,000",
                          requester: "Chukwudi Okeke",
                          date: "2026-09-22",
                          status: "Pending",
                        },
                        {
                          id: "REQ-1088",
                          title: "Lagos Office Supplies & Stationery",
                          dept: "Admin",
                          amount: "₦340,000",
                          requester: "Blessing Adebayo",
                          date: "2026-09-19",
                          status: "Approved",
                        },
                      ].map((r) => (
                        <div key={r.id} className="border border-gray-200 rounded-xl p-3.5 bg-white shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="font-mono font-bold text-blue-700">{r.id}</span>
                              <span className="bg-gray-100 text-gray-700 text-[10px] px-2 py-0.5 rounded font-semibold">{r.dept}</span>
                            </div>
                            <span className="font-bold text-sm text-gray-900 font-mono">{r.amount}</span>
                          </div>
                          <p className="font-bold text-gray-800 text-xs">{r.title}</p>
                          <p className="text-[11px] text-gray-500 mt-0.5">
                            Requested by {r.requester} on {r.date}
                          </p>
                          <div className="mt-3 pt-2.5 border-t border-gray-100">
                            <span className={`text-[11px] font-bold ${r.status === "Approved" ? "text-emerald-600" : "text-amber-600"}`}>
                              Status: {r.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default function Home() {
  // const [activeWayTab, setActiveWayTab] = useState(0);
  // const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [showTooltip, setShowTooltip] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Customer Case Studies Modal State
  const [customerModalOpen, setCustomerModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  // Interactive Dashboard States
  const [activeDashboardTab, setActiveDashboardTab] = useState("overview");
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [dashboardView, setDashboardView] = useState("dashboard");
  const [requisitionModalOpen, setRequisitionModalOpen] = useState(false);

  // Interactive Department Section State
  const [selectedDept, setSelectedDept] = useState("operations");
  const [selectedDeptApp, setSelectedDeptApp] = useState("inventory");
  const [activeWayTab, setActiveWayTab] = useState(0);

  // Global Modal & Overlay States
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);

  // Directory Search Filter State
  const [selectedAppCategory, setSelectedAppCategory] = useState("all");
  const [appSearchQuery, setAppSearchQuery] = useState("");

  // Hero Typewriter Effect State & Hook
  const heroWords = useMemo(
    () => [
      "your business",
      "your people",
      "your finances",
      "your tasks & OKRs",
      "your approvals",
      "everyday operations",
      "business growth",
    ],
    [],
  );
  const [heroWordIndex, setHeroWordIndex] = useState(0);
  const [heroSubIndex, setHeroSubIndex] = useState(heroWords[0].length);
  const [heroIsReverse, setHeroIsReverse] = useState(false);
  const [heroTypedText, setHeroTypedText] = useState(heroWords[0]);

  // Contact Sales & Request Demo Form State
  const [demoFormSubmitted, setDemoFormSubmitted] = useState(false);
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    interest: "",
    dateTime: "",
    message: "",
  });

  useEffect(() => {
    // When word is fully typed, pause before deleting
    if (!heroIsReverse && heroSubIndex === heroWords[heroWordIndex].length) {
      const timeout = setTimeout(() => {
        setHeroIsReverse(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }

    // When word is completely deleted, switch to next word
    if (heroIsReverse && heroSubIndex === 0) {
      setHeroIsReverse(false);
      setHeroWordIndex((prev) => (prev + 1) % heroWords.length);
      return;
    }

    // Typing or deleting speed (fast backspace, smooth natural typing)
    const speed = heroIsReverse ? 35 : 75;
    const timeout = setTimeout(() => {
      setHeroSubIndex((prev) => prev + (heroIsReverse ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [heroSubIndex, heroWordIndex, heroIsReverse, heroWords]);

  useEffect(() => {
    setHeroTypedText(heroWords[heroWordIndex].substring(0, heroSubIndex));
  }, [heroSubIndex, heroWordIndex, heroWords]);

  // Pricing State
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );
  const [scrollY, setScrollY] = useState(0);

  const dashboardSectionRef = useRef<HTMLDivElement>(null);

  // Smooth Parallax Scroll Handler respecting WCAG prefers-reduced-motion
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Blinking typewriter effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(timer);
  }, []);

  // Hotspot Click Handler
  const handleHotspotClick = (hotspotId: string) => {
    setActiveHotspot(hotspotId);
    if (hotspotId === "notifications") {
      setNotificationsOpen((prev) => !prev);
    } else {
      setDashboardView(hotspotId);
    }
  };

  const resetToOverview = () => {
    setActiveHotspot(null);
    setDashboardView("overview");
  };

  const scrollToDashboard = () => {
    dashboardSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Top Nav Links
  const topNavLinks = [
    { name: "Workplace", href: "#", active: true, hasTooltip: true },
    { name: "People", href: "#" },
    { name: "Finance", href: "#" },
    { name: "Performance", href: "#" },
    { name: "Operations", href: "#" },
    { name: "All Features", href: "#", hasChevron: true },
  ];

  interface SubNavItem {
    name: string;
    dept?: string;
    isModal?: boolean;
    modalKey?: string;
    href?: string;
  }

  interface SecondaryNavItem {
    name: string;
    href: string;
    hasChevron?: boolean;
    isModal?: boolean;
    modalKey?: string;
    items?: SubNavItem[];
  }

  // Secondary Nav Links matching exact website content & attached layout
  const secondaryNavLinks: SecondaryNavItem[] = [
    {
      name: "Features",
      href: "#os-showcase",
    },
    {
      name: "Platform",
      href: "#departments",
    },
    {
      name: "Pricing",
      href: "#pricing",
    },
    {
      name: "Resources",
      href: "#journey",
    },
    {
      name: "Contact Sales",
      href: "#contact",
      isModal: true,
      modalKey: "contact",
    },
  ];

  const currentDept = DEPARTMENT_DATA[selectedDept];

  // Filtered Apps List
  const filteredApps = ALL_ZOHO_APPS.filter((app) => {
    const matchesCat =
      selectedAppCategory === "all" || app.cat === selectedAppCategory;
    const matchesSearch =
      app.name.toLowerCase().includes(appSearchQuery.toLowerCase()) ||
      app.desc.toLowerCase().includes(appSearchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased overflow-x-clip">
      {/* ========================================== */}
      {/* SINGLE GLOBAL NAVIGATION BAR */}
      {/* ========================================== */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">

            {/* Left: Netrom Logo */}
            <div className="flex items-center flex-shrink-0">
              <ZohoOneLogo />
            </div>

            {/* Center Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-5 lg:space-x-7 text-xs md:text-[14px] font-medium text-gray-800">
              {secondaryNavLinks.map((link) => (
                <div key={link.name} className="relative group py-4">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.isModal) {
                        e.preventDefault();
                        setActiveModal(link.modalKey || "contact");
                      } else if (link.href.startsWith("#")) {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="flex items-center space-x-1 text-gray-800 hover:text-[#1d61e7] font-semibold transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>{link.name}</span>

                    {link.hasChevron && (
                      <ChevronDown
                        className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#1d61e7] transition-transform duration-200 group-hover:rotate-180"
                      />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {link.hasChevron && link.items && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-60 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50 py-2">
                      {link.items.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href || "#"}
                          onClick={(e) => {
                            e.preventDefault();
                            if (subItem.dept) {
                              setSelectedDept(subItem.dept);
                            }
                            if (subItem.isModal) {
                              setActiveModal(subItem.modalKey || "privacy");
                            } else if (subItem.href && subItem.href.startsWith("#")) {
                              document.querySelector(subItem.href)?.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                          className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-blue-50 hover:text-[#1d61e7] font-medium transition-colors cursor-pointer"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Header Actions */}
            <div className="flex items-center space-x-4 md:space-x-5 text-gray-700">

              {/* Language (non-clickable) */}
              <div
                className="hidden sm:flex items-center space-x-1.5 text-xs md:text-[13px] font-medium text-gray-700 select-none cursor-default"
                title="Language: English"
              >
                <Globe className="w-4 h-4 text-gray-600" />
                <span>English</span>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 border-b border-gray-200 px-4 pt-3 pb-6">
            <nav className="space-y-1">
              {secondaryNavLinks.map((link) => (
                <div key={link.name}>
                  <div className="flex items-center justify-between text-sm py-2.5 px-2 rounded text-gray-800 hover:bg-gray-50 hover:text-[#1d61e7] transition-colors">
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.isModal) {
                          e.preventDefault();
                          setActiveModal(link.modalKey || "contact");
                          setMobileMenuOpen(false);
                        } else if (link.href.startsWith("#")) {
                          e.preventDefault();
                          document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                          setMobileMenuOpen(false);
                        }
                      }}
                      className="flex-1 font-semibold cursor-pointer"
                    >
                      {link.name}
                    </a>

                    {link.hasChevron && (
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="p-1 text-gray-500 hover:text-gray-900 cursor-pointer"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown Sub-Items */}
                  {link.hasChevron && link.items && activeDropdown === link.name && (
                    <div className="ml-3 mt-1 mb-2 border-l-2 border-blue-100 pl-3 space-y-1">
                      {link.items.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href || "#"}
                          onClick={(e) => {
                            e.preventDefault();
                            if (subItem.dept) {
                              setSelectedDept(subItem.dept);
                            }
                            if (subItem.isModal) {
                              setActiveModal(subItem.modalKey || "privacy");
                            } else if (subItem.href && subItem.href.startsWith("#")) {
                              document.querySelector(subItem.href)?.scrollIntoView({ behavior: "smooth" });
                            }
                            setMobileMenuOpen(false);
                          }}
                          className="block text-xs py-2 px-2 text-gray-600 hover:text-[#1d61e7] hover:bg-blue-50 rounded font-medium transition-colors cursor-pointer"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ========================================== */}
      {/* 3. HERO MAIN SECTION */}
      {/* ========================================== */}
      <main className="relative pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left z-10">
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>NETROM</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-gray-900 tracking-tight leading-[1.12]">
                One connected workspace for{" "}
                <span className="text-[#1d61e7]">
                  {heroTypedText}
                </span>
                <span
                  className="inline-block font-thin text-[#1d61e7] mx-0.5"
                  style={{ opacity: cursorVisible ? 1 : 0 }}
                >
                  |
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-[19px] text-gray-700 leading-relaxed font-normal max-w-2xl">
                Netrom brings your people, finances, tasks, approvals,
                performance and everyday operations into one secure business
                workspace, helping your teams spend less time switching between
                disconnected systems and more time getting work done.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4 pt-2">
                <button
                  onClick={scrollToDashboard}
                  className="bg-[#e43338] hover:bg-[#d2282d] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wider text-center flex items-center justify-center space-x-2 group cursor-pointer"
                >
                  <span>START YOUR FIRST MONTH FREE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setActiveModal("contact")}
                  className="bg-black hover:bg-gray-800 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wider text-center cursor-pointer"
                >
                  TALK TO SALES
                </button>
              </div>
            </div>

            {/* Right Graphic Illustration Column */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
              <HeroIllustration />
            </div>
          </div>
        </div>

      </main>

      {/* ========================================================================= */}
      {/* 4. UNDERNEATH SECTION: INTERACTIVE OPERATING SYSTEM DASHBOARD SHOWCASE */}
      {/* ========================================================================= */}
      <section
        id="os-showcase"
        ref={dashboardSectionRef}
        className="relative py-12 md:py-20 bg-gradient-to-b from-amber-50/40 via-yellow-100/30 to-amber-100/50 border-t border-gray-200 overflow-hidden"
      >
        <ScrollReveal direction="left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10 space-y-3">
              <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-300 text-amber-900 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                <span>SEE NETROM IN ACTION</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                Everything your teams need. One place to run it.
              </h2>

              <p className="text-sm md:text-base text-gray-700 font-normal">
                Move from scattered spreadsheets, disconnected tools and approval
                bottlenecks to a single workspace where employees, managers, HR
                and Finance can work from the same source of truth.
              </p>

              {/* Hotspot Helper Banner */}
              <div className="pt-2 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-xs border border-red-200 shadow-sm rounded-lg px-4 py-2.5 flex items-center space-x-3 text-xs md:text-sm text-gray-800">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                  </span>
                  <span className="font-bold text-gray-900">
                    Explore Netrom:
                  </span>
                  <span className="font-medium text-gray-700">
                    Click a highlighted area to see how each part of the platform
                    helps your organisation manage everyday work.
                  </span>
                  {dashboardView !== "overview" && (
                    <button
                      onClick={resetToOverview}
                      className="ml-2 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-2.5 py-1 rounded border border-gray-300 transition-colors flex items-center space-x-1 cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Reset Overview</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* DASHBOARD FRAME CONTAINER */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white transition-all duration-300">
              {/* Top Slate App Window Chrome Header Bar */}
              <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800 text-xs sm:text-sm select-none">
                {/* Left: Window Controls & App Title */}
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-xs" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-xs" />
                    <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-xs" />
                  </div>
                  <div className="h-4 w-px bg-slate-700 mx-1 hidden sm:block" />
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded bg-gradient-to-tr from-[#0066cc] via-[#e43338] to-[#ffb400] flex items-center justify-center text-white text-[10px] font-black">
                      P
                    </div>
                    <span className="font-extrabold text-xs sm:text-sm tracking-wide text-white">
                      Netrom <span className="text-blue-400">OS</span>
                    </span>
                    <span className="hidden md:inline-flex items-center gap-1.5 text-[10px] font-semibold bg-slate-800 px-2 py-0.5 rounded-full text-slate-300 border border-slate-700 ml-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Workspace Console
                    </span>
                  </div>
                </div>

                {/* Right Utility Controls */}
                <div className="flex items-center space-x-3 sm:space-x-4 text-slate-300">
                  <button className="hover:text-white p-1 transition-colors cursor-pointer" title="Search Workspace">
                    <Search className="w-4 h-4" />
                  </button>

                  {/* Notification Bell with Hotspot */}
                  <div className="relative flex items-center">
                    <button
                      onClick={() => handleHotspotClick("notifications")}
                      className="hover:text-white p-1 transition-colors relative cursor-pointer"
                    >
                      <Bell className="w-4 h-4" />
                      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <RedHotspot
                      id="notifications"
                      activeHotspot={activeHotspot}
                      onClick={handleHotspotClick}
                      tooltipLabel="System Notifications"
                      className="-top-1 -right-1 absolute"
                    />
                  </div>

                  <button className="hover:text-white p-1 transition-colors cursor-pointer" title="Calendar">
                    <Calendar className="w-4 h-4" />
                  </button>
                  <button className="hover:text-white p-1 transition-colors cursor-pointer" title="Settings">
                    <Settings className="w-4 h-4" />
                  </button>

                  {/* User Profile Avatar */}
                  <div className="flex items-center space-x-2 pl-1 border-l border-slate-700">
                    <div className="w-6 h-6 rounded-full bg-blue-600 border border-blue-400 overflow-hidden flex items-center justify-center text-[10px] font-bold text-white">
                      OB
                    </div>
                    <span className="text-xs font-medium text-slate-200 hidden lg:inline-block">Oluwaseun B.</span>
                  </div>
                </div>
              </div>

              {/* White Secondary Dashboard Header Control Bar */}
              <div className="bg-white border-b border-gray-200 px-4 py-2 flex flex-wrap items-center justify-between text-xs sm:text-sm text-gray-700">
                {/* Left Sub-Nav Tabs */}
                <div className="flex items-center space-x-1 sm:space-x-3 font-semibold py-1">
                  <button
                    onClick={() => {
                      setActiveDashboardTab("overview");
                      setDashboardView("overview");
                      setActiveHotspot(null);
                    }}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${activeDashboardTab === "overview" && dashboardView === "overview"
                        ? "text-blue-700 font-bold bg-blue-50 border border-blue-200"
                        : "hover:bg-gray-100 text-gray-600"
                      }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Workspace Overview</span>
                  </button>

                  <button
                    onClick={() => handleHotspotClick("people")}
                    className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${dashboardView === "people"
                        ? "text-blue-700 font-bold bg-blue-50 border border-blue-200"
                        : "hover:bg-gray-100 text-gray-600"
                      }`}
                  >
                    HR & People
                  </button>

                  <button
                    onClick={() => handleHotspotClick("finance")}
                    className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${dashboardView === "finance"
                        ? "text-blue-700 font-bold bg-blue-50 border border-blue-200"
                        : "hover:bg-gray-100 text-gray-600"
                      }`}
                  >
                    Requisitions & Finance
                  </button>

                  <button
                    onClick={() => handleHotspotClick("tasks")}
                    className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${dashboardView === "tasks"
                        ? "text-blue-700 font-bold bg-blue-50 border border-blue-200"
                        : "hover:bg-gray-100 text-gray-600"
                      }`}
                  >
                    OKRs & Performance
                  </button>
                </div>

                {/* Right View Action Controls */}
                <div className="flex items-center space-x-2 py-1">
                  <button
                    onClick={resetToOverview}
                    className="p-1.5 text-gray-500 hover:text-gray-900 rounded hover:bg-gray-100 transition-colors cursor-pointer"
                    title="Refresh Dashboard"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                  <button className="border border-gray-300 text-gray-700 font-semibold px-3 py-1 rounded-md text-xs hover:bg-gray-50 transition-colors cursor-pointer">
                    Customize
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-1 rounded-md text-xs shadow-xs transition-colors cursor-pointer flex items-center space-x-1">
                    <Plus className="w-3 h-3" />
                    <span>Add Widget</span>
                  </button>
                </div>
              </div>

              {/* Main Dashboard Area (Left Dock + Main Canvas) */}
              <div className="flex h-[620px] max-h-[620px] bg-slate-50 overflow-hidden">
                {/* SIDEBAR NAVIGATION (Matching input_file_0.png) */}
                <div className="w-56 md:w-60 bg-white border-r border-gray-200 flex flex-col shrink-0 select-none py-4 px-3 space-y-3 h-full">
                  {/* Brand Header inside Sidebar */}
                  <div className="flex items-center justify-between px-2 pb-3 border-b border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-md bg-[#0052cc] flex items-center justify-center text-white font-black text-xs">
                        ✦
                      </div>
                      <span className="font-extrabold text-xs tracking-tight text-[#0f2552]">
                        PRIMEGUAGE
                        <span className="block text-[8px] font-semibold text-gray-400 tracking-widest uppercase -mt-0.5">SOLUTIONS</span>
                      </span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100 cursor-pointer">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Module List (13 Modules matching user's exact list) */}
                  <div className="flex-1 space-y-1 overflow-y-auto pr-1">
                    {[
                      { id: "overview", name: "Dashboard", icon: LayoutGrid, hasImage: true },
                      { id: "approval", name: "Approval Console", icon: CheckSquare, badge: "2", hasImage: false },
                      { id: "people", name: "Staff Management", icon: Users, hasImage: true },
                      { id: "profile", name: "My Profile", icon: User, hasImage: false },
                      { id: "attendance", name: "Attendance", icon: Clock, hasImage: false },
                      { id: "tasks", name: "Tasks & OKRs", icon: Target, hasImage: true },
                      { id: "finance", name: "Finance", icon: DollarSign, hasImage: true },
                      { id: "documents", name: "Documents", icon: FileText, hasImage: false },
                      { id: "operations", name: "Operations", icon: Box, hasImage: false },
                      { id: "training", name: "Training", icon: GraduationCap, hasImage: false },
                      { id: "insights", name: "Staff Insights", icon: BarChart2, hasImage: false },
                      { id: "departments", name: "Departments", icon: Briefcase, hasImage: false },
                      { id: "mail", name: "Messages", icon: MessageSquare, badge: "5", hasImage: true },
                    ].map((mod) => {
                      const IconComp = mod.icon;
                      const isActive =
                        dashboardView === mod.id ||
                        (mod.id === "overview" && (dashboardView === "overview" || dashboardView === "dashboard"));

                      return (
                        <button
                          key={mod.id}
                          disabled={!mod.hasImage}
                          onClick={() => {
                            if (mod.hasImage) {
                              setDashboardView(mod.id);
                              setActiveHotspot(null);
                            }
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all ${!mod.hasImage
                              ? "opacity-45 text-slate-400 cursor-not-allowed"
                              : isActive
                                ? "bg-[#1d61e7] text-white shadow-md font-bold cursor-pointer"
                                : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-semibold cursor-pointer"
                            }`}
                          title={mod.hasImage ? `View ${mod.name} Console` : `${mod.name} (Module inactive)`}
                        >
                          <div className="flex items-center space-x-2.5">
                            <IconComp className={`w-4 h-4 ${isActive ? "text-white" : mod.hasImage ? "text-slate-600" : "text-slate-400"}`} />
                            <span>{mod.name}</span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            {mod.badge && (
                              <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${isActive ? "bg-white text-[#1d61e7]" : "bg-red-500 text-white"
                                }`}>
                                {mod.badge}
                              </span>
                            )}
                            {/* Pulsating Red Hotspot Dot for modules with UI images */}
                            {mod.hasImage && (
                              <span className="relative flex h-2.5 w-2.5" title="Clickable interactive module">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isActive ? "bg-white" : "bg-red-500"}`}></span>
                                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isActive ? "bg-white" : "bg-red-600"}`}></span>
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Dynamic Dashboard Main Content Area */}
                <div className="flex-1 p-4 sm:p-6 overflow-x-auto overflow-y-auto h-full relative border-l border-gray-100">
                  {/* Active Hotspot Info Banner */}
                  {activeHotspot && HOTSPOT_DETAILS[activeHotspot] && (
                    <div className="mb-5 bg-white border-l-4 border-[#e43338] shadow-md rounded-r-xl p-4 flex items-start justify-between animate-in fade-in slide-in-from-top-2 duration-300 border border-gray-200/80">
                      <div className="flex items-start space-x-3.5">
                        <div className="p-2.5 bg-red-50 text-[#e43338] rounded-xl flex-none">
                          <Info className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-extrabold text-sm text-gray-900">
                              {HOTSPOT_DETAILS[activeHotspot].title}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
                              {HOTSPOT_DETAILS[activeHotspot].badge}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                            {HOTSPOT_DETAILS[activeHotspot].description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2.5">
                            {HOTSPOT_DETAILS[activeHotspot].features.map((feat) => (
                              <span
                                key={feat}
                                className="text-[10px] bg-slate-100 text-slate-800 border border-slate-200 px-2 py-0.5 rounded-md font-semibold"
                              >
                                ✓ {feat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={resetToOverview}
                        className="text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                        title="Close preview banner"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* VIEW 1: MANAGEMENT DASHBOARD (New Uploaded Image) */}
                  {(dashboardView === "overview" || dashboardView === "dashboard") && (
                    <div className="space-y-5 animate-in fade-in duration-300 select-none">
                      {/* Top Breadcrumb & Filters Bar */}
                      <div className="text-[11px] text-gray-400 font-semibold">PGS Portal &gt; Dashboard</div>

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <h3 className="text-2xl font-black text-gray-900 tracking-tight">Management Dashboard</h3>

                        <div className="flex items-center space-x-2 bg-white p-1 rounded-xl border border-gray-200 shadow-2xs">
                          <span className="text-xs font-semibold text-gray-400 px-2">Global filters</span>
                          <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-gray-700 font-medium">
                            <option>This Month</option>
                          </select>
                          <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-gray-700 font-medium">
                            <option>All Departments / Teams</option>
                          </select>
                          <button className="text-xs px-2.5 py-1 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 font-semibold">
                            Reset
                          </button>
                        </div>
                      </div>

                      {/* Strategic Console Banner */}
                      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between hover:border-gray-300 transition-colors cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
                            🪙
                          </div>
                          <div>
                            <div className="font-extrabold text-sm text-gray-900">Strategic Console</div>
                            <div className="text-xs text-gray-500">Needs attention, organizational health, OKR portfolio and console overview</div>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>

                      {/* Section: Needs Your Attention */}
                      <div className="space-y-3">
                        <h4 className="font-bold text-xs text-gray-800">Needs Your Attention</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {/* Card 1 */}
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-2 relative">
                            <span className="w-2 h-2 rounded-full bg-amber-500 absolute top-4 right-4" />
                            <div className="text-2xl font-black text-gray-900 font-mono">2</div>
                            <div>
                              <div className="font-bold text-xs text-gray-900">Pending Requisitions</div>
                              <div className="text-[11px] text-gray-500">Awaiting your approval</div>
                            </div>
                            <button
                              onClick={() => setDashboardView("finance")}
                              className="text-xs font-bold text-[#1d61e7] hover:underline flex items-center space-x-1 pt-1 cursor-pointer"
                            >
                              <span>Review →</span>
                            </button>
                          </div>

                          {/* Card 2 */}
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-2 relative">
                            <span className="w-2 h-2 rounded-full bg-red-500 absolute top-4 right-4" />
                            <div className="text-2xl font-black text-gray-900 font-mono">34</div>
                            <div>
                              <div className="font-bold text-xs text-gray-900">Tasks Pending Review</div>
                              <div className="text-[11px] text-gray-500">Require management review</div>
                            </div>
                            <button
                              onClick={() => setDashboardView("tasks")}
                              className="text-xs font-bold text-[#1d61e7] hover:underline flex items-center space-x-1 pt-1 cursor-pointer"
                            >
                              <span>Review →</span>
                            </button>
                          </div>

                          {/* Card 3 */}
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-2 relative">
                            <span className="w-2 h-2 rounded-full bg-amber-500 absolute top-4 right-4" />
                            <div className="text-2xl font-black text-gray-900 font-mono">2</div>
                            <div>
                              <div className="font-bold text-xs text-gray-900">Leave Requests</div>
                              <div className="text-[11px] text-gray-500">Awaiting approval</div>
                            </div>
                            <button
                              onClick={() => setDashboardView("people")}
                              className="text-xs font-bold text-[#1d61e7] hover:underline flex items-center space-x-1 pt-1 cursor-pointer"
                            >
                              <span>Approve →</span>
                            </button>
                          </div>

                          {/* Card 4 */}
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-2 relative">
                            <span className="w-2 h-2 rounded-full bg-red-500 absolute top-4 right-4" />
                            <div className="text-2xl font-black text-gray-900 font-mono">11</div>
                            <div>
                              <div className="font-bold text-xs text-gray-900">At-Risk OKRs</div>
                              <div className="text-[11px] text-gray-500">Require immediate attention</div>
                            </div>
                            <button
                              onClick={() => setDashboardView("tasks")}
                              className="text-xs font-bold text-[#1d61e7] hover:underline flex items-center space-x-1 pt-1 cursor-pointer"
                            >
                              <span>View →</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Section: Organizational Health */}
                      <div className="space-y-3">
                        <h4 className="font-bold text-xs text-gray-800">Organizational Health</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {/* Card 1 */}
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-1.5 relative">
                            <span className="w-2 h-2 rounded-full bg-amber-500 absolute top-4 right-4" />
                            <div className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">OKR PROGRESS</div>
                            <div className="text-2xl font-black text-gray-900 font-mono">24.5%</div>
                            <div className="text-[11px] text-gray-500">Target: 75%</div>
                            <div className="text-[11px] text-emerald-600 font-bold">↑ +4% this month</div>
                          </div>

                          {/* Card 2 */}
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-1.5 relative">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 absolute top-4 right-4" />
                            <div className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">PORTFOLIO HEALTH</div>
                            <div className="text-2xl font-black text-gray-900 font-mono">28.1%</div>
                            <div className="text-[11px] text-gray-500">Target: 80%</div>
                            <div className="text-[11px] text-emerald-600 font-bold">↑ On track</div>
                          </div>

                          {/* Card 3 */}
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-1.5 relative">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 absolute top-4 right-4" />
                            <div className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">MONTHLY SPEND VS BUDGET</div>
                            <div className="text-2xl font-black text-gray-900 font-mono">₦4.9M</div>
                            <div className="text-[11px] text-gray-500">Target: ₦5000000</div>
                            <div className="text-[11px] text-emerald-600 font-bold">↑ 98.2% utilized</div>
                          </div>

                          {/* Card 4 */}
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-1.5 relative">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 absolute top-4 right-4" />
                            <div className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">TASK COMPLETION RATE</div>
                            <div className="text-2xl font-black text-gray-900 font-mono">82%</div>
                            <div className="text-[11px] text-gray-500">Target: 90%</div>
                            <div className="text-[11px] text-emerald-600 font-bold">↑ +3% vs last month</div>
                          </div>
                        </div>
                      </div>

                      {/* Section: OKR & Portfolio Health */}
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-4">
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-xs text-gray-900">OKR &amp; Portfolio Health</h4>
                          <button
                            onClick={() => setDashboardView("tasks")}
                            className="px-3 py-1 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer"
                          >
                            View OKRs
                          </button>
                        </div>

                        <div className="space-y-3.5 text-xs">
                          {/* Progress Item 1 */}
                          <div className="space-y-1">
                            <div className="flex justify-between font-semibold text-gray-800">
                              <span>Achieve 95% Portal Adoption Across All Staff</span>
                              <span className="font-bold font-mono text-emerald-600">71%</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-emerald-600 h-full w-[71%]" />
                            </div>
                          </div>

                          {/* Progress Item 2 */}
                          <div className="space-y-1">
                            <div className="flex justify-between font-semibold text-gray-800">
                              <span>Reduce Payroll Processing Time by 30%</span>
                              <span className="font-bold font-mono text-emerald-600">80%</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-emerald-600 h-full w-[80%]" />
                            </div>
                          </div>

                          {/* Progress Item 3 */}
                          <div className="space-y-1">
                            <div className="flex justify-between font-semibold text-gray-800">
                              <span>Complete Engineering Platform Modernisation</span>
                              <span className="font-bold font-mono text-emerald-600">85%</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-emerald-600 h-full w-[85%]" />
                            </div>
                          </div>

                          {/* Progress Item 4 */}
                          <div className="space-y-1">
                            <div className="flex justify-between font-semibold text-gray-800">
                              <span>Increase revenue by 20%</span>
                              <span className="font-bold font-mono text-red-500">0%</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-red-400 h-full w-0" />
                            </div>
                          </div>

                          {/* Progress Item 5 */}
                          <div className="space-y-1">
                            <div className="flex justify-between font-semibold text-gray-800">
                              <span>Test Monthly OKR</span>
                              <span className="font-bold font-mono text-red-500">0%</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-red-400 h-full w-0" />
                            </div>
                          </div>

                          {/* Progress Item 6 */}
                          <div className="space-y-1">
                            <div className="flex justify-between font-semibold text-gray-800">
                              <span>Test objective</span>
                              <span className="font-bold font-mono text-red-500">0%</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-red-400 h-full w-0" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Floating Quick Action Pill Bar */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-lg space-x-4 text-xs font-bold text-gray-700">
                          <button
                            onClick={() => setRequisitionModalOpen(true)}
                            className="bg-[#1d61e7] hover:bg-blue-700 text-white px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer flex items-center space-x-1"
                          >
                            <span>+ Assign Task</span>
                          </button>
                          <button onClick={() => setDashboardView("tasks")} className="hover:text-blue-600 transition-colors cursor-pointer flex items-center space-x-1">
                            <span>🌐 New OKR</span>
                          </button>
                          <button onClick={() => setDashboardView("people")} className="hover:text-blue-600 transition-colors cursor-pointer flex items-center space-x-1">
                            <span>☂ Leave queue</span>
                          </button>
                          <button onClick={() => setDashboardView("people")} className="hover:text-blue-600 transition-colors cursor-pointer flex items-center space-x-1">
                            <span>👥 Staff directory</span>
                          </button>
                          <button onClick={() => setDashboardView("mail")} className="hover:text-blue-600 transition-colors cursor-pointer flex items-center space-x-1">
                            <span>📄 Notes</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* VIEW 2: TASKS & OKRS / TEAM OVERVIEW (input_file_2.png) */}
                  {dashboardView === "tasks" && (
                    <div className="space-y-6 animate-in fade-in duration-300 select-none">
                      {/* Header Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-black text-gray-900 tracking-tight">Team Overview</h3>
                          <p className="text-xs text-gray-500">Create, assign and monitor tasks across your team</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="px-3.5 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
                            + Add To-Do
                          </button>
                          <button
                            onClick={() => setRequisitionModalOpen(true)}
                            className="px-4 py-1.5 bg-[#1d61e7] hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors cursor-pointer flex items-center space-x-1.5"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Assign Task</span>
                          </button>
                        </div>
                      </div>

                      {/* 4 Stat Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Total Tasks</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">134</div>
                            <p className="text-[10px] text-gray-400 mt-0.5">across all teams</p>
                          </div>
                          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                            <Briefcase className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Completed</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">17</div>
                            <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">13% completion rate</p>
                          </div>
                          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Ongoing</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">19</div>
                            <p className="text-[10px] text-gray-400 mt-0.5">across 6 staff</p>
                          </div>
                          <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                            <Clock className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Overdue</p>
                            <div className="text-2xl font-black text-red-600 mt-1">99</div>
                            <p className="text-[10px] text-red-500 font-semibold mt-0.5">needs attention</p>
                          </div>
                          <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                            <AlertCircle className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      {/* Middle Charts Row */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {/* Left: Task Completion Trend Line Chart */}
                        <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-bold text-xs text-gray-800">Task Completion trend</h4>
                            <select className="text-[11px] border border-gray-200 rounded-md px-2 py-1 text-gray-600 bg-gray-50 font-medium">
                              <option>Weekly</option>
                              <option>Monthly</option>
                            </select>
                          </div>
                          <div className="h-44 flex items-end justify-between px-4 pb-2 relative border-b border-l border-gray-200">
                            <svg className="absolute inset-0 w-full h-full p-2" viewBox="0 0 400 120" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#1d61e7" stopOpacity="0.25" />
                                  <stop offset="100%" stopColor="#1d61e7" stopOpacity="0.0" />
                                </linearGradient>
                              </defs>
                              <path d="M 10 110 Q 100 110, 150 20 T 280 20 Q 340 20, 390 110 L 390 110 L 10 110 Z" fill="url(#chartGrad)" />
                              <path d="M 10 110 Q 100 110, 150 20 T 280 20 Q 340 20, 390 110" fill="none" stroke="#1d61e7" strokeWidth="3" />
                              <circle cx="150" cy="20" r="4" fill="#1d61e7" />
                              <circle cx="215" cy="20" r="4" fill="#1d61e7" />
                              <circle cx="280" cy="20" r="4" fill="#1d61e7" />
                            </svg>
                          </div>
                          <div className="flex justify-between text-[10px] text-gray-400 mt-2 px-4">
                            <span>Fri</span><span>Sat</span><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span>
                          </div>
                        </div>

                        {/* Right: OKR Coverage Donut Chart */}
                        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between">
                          <h4 className="font-bold text-xs text-gray-800">OKR Coverage</h4>
                          <div className="my-3 flex items-center justify-center relative">
                            <div className="w-32 h-32 rounded-full flex items-center justify-center" style={{ background: "conic-gradient(#1d61e7 0% 35%, #e2e8f0 35% 100%)" }}>
                              <div className="w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                                <span className="text-xl font-black text-gray-900">35%</span>
                                <span className="text-[9px] text-gray-400 font-semibold">OKR Linked</span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-1.5 pt-2 border-t border-gray-100 text-[11px]">
                            <div className="flex justify-between items-center text-gray-700">
                              <span className="flex items-center space-x-1.5"><span className="w-2 h-2 rounded-full bg-[#1d61e7]" /><span>OKR linked</span></span>
                              <span className="font-bold">47</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-500">
                              <span className="flex items-center space-x-1.5"><span className="w-2 h-2 rounded-full bg-slate-300" /><span>Non OKR Linked</span></span>
                              <span className="font-bold">87</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Lower Section: Search, Filters & 4-Column Kanban Board */}
                      <div className="space-y-4 pt-2">
                        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-2.5 rounded-xl border border-gray-200 shadow-xs">
                          <div className="flex-1 min-w-[200px] relative">
                            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input type="text" placeholder="Search by task, priority, status..." className="w-full text-xs pl-9 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1d61e7]" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                              <Sliders className="w-3.5 h-3.5" />
                              <span>Show Filters</span>
                            </button>
                            <div className="flex bg-gray-100 p-0.5 rounded-lg border border-gray-200">
                              <button className="px-2.5 py-1 text-[11px] font-semibold text-gray-600 rounded">List</button>
                              <button className="px-2.5 py-1 text-[11px] font-bold bg-white text-[#1d61e7] rounded shadow-xs">Kanban</button>
                            </div>
                          </div>
                        </div>

                        {/* 4-Column Kanban Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {/* Column 1: Not started (65) */}
                          <div className="bg-gray-50/70 border border-gray-200 rounded-xl p-3 space-y-3">
                            <div className="flex items-center justify-between px-1">
                              <div className="flex items-center space-x-2"><span className="w-2.5 h-2.5 rounded-full bg-gray-400" /><span className="font-extrabold text-xs text-gray-800">Not started</span></div>
                              <span className="text-[10px] font-extrabold text-gray-600 bg-gray-200 px-2 py-0.5 rounded-full">65</span>
                            </div>
                            <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-2xs space-y-2">
                              <div className="flex items-start justify-between"><h5 className="font-bold text-xs text-gray-900">Draft the BRD for the new product</h5><span className="w-2 h-3.5 bg-amber-400 rounded-xs inline-block" /></div>
                              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden"><div className="w-0 bg-[#1d61e7] h-full" /></div>
                              <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1">
                                <span className="text-gray-500 font-medium">Sep 30, 2026</span>
                                <div className="flex items-center space-x-2"><span className="flex items-center space-x-0.5"><FileText className="w-3 h-3" /><span>0</span></span></div>
                              </div>
                            </div>
                          </div>

                          {/* Column 2: Ongoing (13) */}
                          <div className="bg-blue-50/40 border border-blue-100 rounded-xl p-3 space-y-3">
                            <div className="flex items-center justify-between px-1">
                              <div className="flex items-center space-x-2"><span className="w-2.5 h-2.5 rounded-full bg-[#1d61e7]" /><span className="font-extrabold text-xs text-gray-800">Ongoing</span></div>
                              <span className="text-[10px] font-extrabold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">13</span>
                            </div>
                            <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-2xs space-y-2">
                              <div className="flex items-start justify-between"><h5 className="font-bold text-xs text-gray-900">Send out marketing emails</h5></div>
                              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden"><div className="w-0 bg-[#1d61e7] h-full" /></div>
                              <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1">
                                <span className="text-gray-500 font-medium">Sep 30, 2026</span>
                                <div className="flex items-center space-x-2"><span className="flex items-center space-x-0.5"><MessageSquare className="w-3 h-3" /><span>0</span></span></div>
                              </div>
                            </div>
                          </div>

                          {/* Column 3: Awaiting Approval (11) */}
                          <div className="bg-amber-50/40 border border-amber-100 rounded-xl p-3 space-y-3">
                            <div className="flex items-center justify-between px-1">
                              <div className="flex items-center space-x-2"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="font-extrabold text-xs text-gray-800">Awaiting Approval</span></div>
                              <span className="text-[10px] font-extrabold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">11</span>
                            </div>
                            <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-2xs space-y-2">
                              <div className="flex items-start justify-between"><h5 className="font-bold text-xs text-gray-900">Conduct meeting with sales representative</h5><span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-full">● OKR Linked</span></div>
                              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden"><div className="w-0 bg-[#1d61e7] h-full" /></div>
                              <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1">
                                <span className="text-gray-500 font-medium">Sep 18, 2026</span>
                              </div>
                            </div>
                          </div>

                          {/* Column 4: Approved (19) */}
                          <div className="bg-emerald-50/40 border border-emerald-100 rounded-xl p-3 space-y-3">
                            <div className="flex items-center justify-between px-1">
                              <div className="flex items-center space-x-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /><span className="font-extrabold text-xs text-gray-800">Approved</span></div>
                              <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">19</span>
                            </div>
                            <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-2xs space-y-2">
                              <div className="flex items-start justify-between"><h5 className="font-bold text-xs text-gray-900">Launch Product in West Region</h5><span className="text-[10px] font-bold text-emerald-600">100%</span></div>
                              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden"><div className="w-full bg-emerald-500 h-full" /></div>
                              <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1">
                                <span className="text-gray-500 font-medium">Sep 30, 2026</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Floating Quick Action Pill Bar */}
                        <div className="flex items-center justify-between pt-4">
                          <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-lg space-x-4 text-xs font-bold text-gray-700">
                            <button onClick={() => setRequisitionModalOpen(true)} className="bg-[#1d61e7] text-white px-3 py-1 rounded-full text-xs font-bold">+ Assign Task</button>
                            <button onClick={() => setDashboardView("people")} className="hover:text-blue-600">☂ Leave queue</button>
                            <button onClick={() => setDashboardView("approval")} className="hover:text-blue-600">$ Requisitions</button>
                            <button onClick={() => setDashboardView("people")} className="hover:text-blue-600">👥 Staff directory</button>
                          </div>
                          <button onClick={() => setRequisitionModalOpen(true)} className="bg-[#1d61e7] hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full shadow-lg text-xs flex items-center space-x-1.5 cursor-pointer">
                            <Plus className="w-4 h-4" /><span>Assign Task</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* VIEW 2: NETROM SALES & REVENUE PIPELINE */}
                  {dashboardView === "crm" && (
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-5 animate-in fade-in duration-300">
                      <div className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-4 gap-3">
                        <div>
                          <h3 className="text-lg font-black text-gray-900 flex items-center space-x-2">
                            <BarChart2 className="w-5 h-5 text-red-500" />
                            <span>Netrom Sales - Deals Pipeline Overview</span>
                          </h3>
                          <p className="text-xs text-gray-600 mt-0.5">
                            Live stage tracking, lead scoring, and quarterly revenue forecasting
                          </p>
                        </div>
                        <button
                          onClick={resetToOverview}
                          className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                        >
                          ← Back to Unified Overview
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                          { stage: "Lead Qualification", deals: 14, value: "₦14,200,000", color: "border-t-blue-500 bg-blue-50/30" },
                          { stage: "Needs & Proposal", deals: 9, value: "₦28,500,000", color: "border-t-amber-500 bg-amber-50/30" },
                          { stage: "Contract Review", deals: 6, value: "₦41,000,000", color: "border-t-purple-500 bg-purple-50/30" },
                          { stage: "Closed Won", deals: 22, value: "₦85,400,000", color: "border-t-emerald-500 bg-emerald-50/30" },
                        ].map((col) => (
                          <div key={col.stage} className={`border-t-4 ${col.color} border border-gray-200 rounded-xl p-4 space-y-3`}>
                            <div className="flex justify-between items-center text-xs font-extrabold text-gray-900">
                              <span>{col.stage}</span>
                              <span className="bg-white px-2 py-0.5 rounded text-[10px] border border-gray-200 text-gray-600">{col.deals}</span>
                            </div>
                            <div className="text-base font-black font-mono text-gray-900">{col.value}</div>
                            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-2xs space-y-1 text-xs">
                              <div className="font-bold text-gray-900">Enterprise Workspace Expansion</div>
                              <div className="text-[10px] text-gray-500">Account Owner: Chukwudi O.</div>
                              <div className="text-[11px] font-extrabold text-emerald-600 font-mono mt-1">₦8,500,000</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* VIEW 3: STAFF MANAGEMENT (input_file_1.png) */}
                  {dashboardView === "people" && (
                    <div className="space-y-5 animate-in fade-in duration-300 select-none">
                      {/* Header */}
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-black text-gray-900 tracking-tight">Staff Management</h3>
                          <p className="text-xs text-gray-500">39 staff across all departments</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="px-3.5 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors flex items-center space-x-1 cursor-pointer">
                            <span>↓ Export</span>
                          </button>
                          <button className="px-4 py-1.5 bg-[#1d61e7] hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors flex items-center space-x-1.5 cursor-pointer">
                            <Plus className="w-3.5 h-3.5" />
                            <span>Create Staff</span>
                          </button>
                        </div>
                      </div>

                      {/* Sub Nav Tabs */}
                      <div className="flex space-x-6 border-b border-gray-200 text-xs font-semibold">
                        <button className="pb-2.5 text-[#1d61e7] border-b-2 border-[#1d61e7] font-bold">Staff Directory</button>
                        <button className="pb-2.5 text-gray-500 hover:text-gray-800">Onboarding & Compliance</button>
                      </div>

                      {/* 4 Stat Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Total Active</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">32</div>
                          </div>
                          <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1d61e7] flex items-center justify-center">
                            <Users className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Team Leads</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">7</div>
                          </div>
                          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">New This Month</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">0</div>
                          </div>
                          <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                            <User className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Docs Pending</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">0+</div>
                          </div>
                          <div className="w-9 h-9 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
                            <X className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      {/* Filter Control Bar */}
                      <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-xs space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="flex-1 min-w-[180px] relative">
                            <input
                              type="text"
                              placeholder="Search name, email, ID..."
                              className="w-full text-xs px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1d61e7]"
                            />
                          </div>
                          <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-gray-600 font-medium">
                            <option>All Departments</option>
                          </select>
                          <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-gray-600 font-medium">
                            <option>All Types</option>
                          </select>
                          <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-gray-600 font-medium">
                            <option>All Statuses</option>
                          </select>
                          <div className="text-xs text-gray-400 flex items-center space-x-1">
                            <span>Joined from</span>
                            <input type="text" placeholder="dd/mm/yyyy" className="w-24 text-[11px] px-2 py-1 border border-gray-200 rounded bg-gray-50" />
                            <span>to</span>
                            <input type="text" placeholder="dd/mm/yyyy" className="w-24 text-[11px] px-2 py-1 border border-gray-200 rounded bg-gray-50" />
                          </div>
                        </div>
                        <div className="text-[11px] text-gray-500">
                          <button className="text-gray-600 hover:text-gray-900 font-semibold cursor-pointer">× Clear</button>
                        </div>
                      </div>

                      {/* Staff Directory Table */}
                      <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-gray-50/80 border-b border-gray-200 text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">
                            <tr>
                              <th className="p-3">STAFF MEMBER</th>
                              <th className="p-3">STAFF ID</th>
                              <th className="p-3">DEPARTMENT</th>
                              <th className="p-3">JOB ROLE</th>
                              <th className="p-3">TYPE</th>
                              <th className="p-3">STATUS</th>
                              <th className="p-3">ACTIONS</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                            <tr className="hover:bg-gray-50/50">
                              <td className="p-3 flex items-center space-x-2.5">
                                <div className="w-7 h-7 rounded-full bg-cyan-100 text-cyan-700 font-bold flex items-center justify-center text-[10px]">TS</div>
                                <div>
                                  <div className="font-bold text-gray-900">Test Staff Staff</div>
                                  <div className="text-[10px] text-gray-400">hiropi5576@dnsink.com</div>
                                </div>
                              </td>
                              <td className="p-3 font-mono text-[11px] text-gray-500">PGS-007-0009</td>
                              <td className="p-3 text-gray-600">Demo Departments</td>
                              <td className="p-3 text-gray-600">another test</td>
                              <td className="p-3"><span className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-semibold text-gray-600">Regular</span></td>
                              <td className="p-3"><span className="text-gray-500 font-semibold">• Inactive</span></td>
                              <td className="p-3 flex items-center space-x-1 text-[11px]">
                                <button className="px-2 py-0.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">View</button>
                                <button className="px-2 py-0.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">Edit</button>
                                <button className="px-2 py-0.5 border border-red-200 rounded text-red-600 bg-red-50">Permissions</button>
                              </td>
                            </tr>

                            <tr className="hover:bg-gray-50/50">
                              <td className="p-3 flex items-center space-x-2.5">
                                <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-[10px]">NS</div>
                                <div>
                                  <div className="font-bold text-gray-900">New Staff Staff</div>
                                  <div className="text-[10px] text-gray-400">1g3vj31a4q@gmeenramy.com</div>
                                </div>
                              </td>
                              <td className="p-3 font-mono text-[11px] text-gray-500">PGS-007-0008</td>
                              <td className="p-3 text-gray-600">Demo Departments</td>
                              <td className="p-3 text-gray-600">another test</td>
                              <td className="p-3"><span className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-semibold text-gray-600">Regular</span></td>
                              <td className="p-3"><span className="text-gray-500 font-semibold">• Inactive</span></td>
                              <td className="p-3 flex items-center space-x-1 text-[11px]">
                                <button className="px-2 py-0.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">View</button>
                                <button className="px-2 py-0.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">Edit</button>
                                <button className="px-2 py-0.5 border border-red-200 rounded text-red-600 bg-red-50">Permissions</button>
                              </td>
                            </tr>

                            <tr className="hover:bg-gray-50/50">
                              <td className="p-3 flex items-center space-x-2.5">
                                <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-[10px]">AT</div>
                                <div>
                                  <div className="font-bold text-gray-900">Another Test</div>
                                  <div className="text-[10px] text-gray-400">another@test.com</div>
                                </div>
                              </td>
                              <td className="p-3 font-mono text-[11px] text-gray-500">PGS-007-0007</td>
                              <td className="p-3 text-gray-600">Demo Departments</td>
                              <td className="p-3 text-gray-600">Tester</td>
                              <td className="p-3"><span className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-semibold text-gray-600">Regular</span></td>
                              <td className="p-3"><span className="text-gray-500 font-semibold">• Inactive</span></td>
                              <td className="p-3 flex items-center space-x-1 text-[11px]">
                                <button className="px-2 py-0.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">View</button>
                                <button className="px-2 py-0.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">Edit</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Bottom Floating Quick Action Pill Bar */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-lg space-x-4 text-xs font-bold text-gray-700">
                          <button onClick={() => setRequisitionModalOpen(true)} className="bg-[#1d61e7] text-white px-3 py-1 rounded-full text-xs font-bold">+ Assign Task</button>
                          <button className="hover:text-blue-600">☂ Leave queue</button>
                          <button onClick={() => setDashboardView("approval")} className="hover:text-blue-600">$ Requisitions</button>
                          <button className="hover:text-blue-600">👥 Staff directory</button>
                        </div>

                        <button
                          onClick={() => setRequisitionModalOpen(true)}
                          className="bg-[#1d61e7] hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full shadow-lg text-xs flex items-center space-x-1.5 cursor-pointer transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Assign Task</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* VIEW 4: MESSAGES VIEW (input_file_3.png) */}
                  {(dashboardView === "mail" || dashboardView === "messages") && (
                    <div className="space-y-4 animate-in fade-in duration-300 select-none">
                      <div className="text-[11px] text-gray-400 font-semibold">Management &gt; Messages</div>

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-black text-gray-900 tracking-tight">Messages</h3>
                          <p className="text-xs text-gray-500">Direct messages, broadcasts &amp; announcements</p>
                        </div>
                        <button className="px-4 py-1.5 bg-[#1d61e7] hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors flex items-center space-x-1.5 cursor-pointer">
                          <Send className="w-3.5 h-3.5" />
                          <span>Compose</span>
                        </button>
                      </div>

                      <div className="flex space-x-6 border-b border-gray-200 text-xs font-semibold">
                        <button className="pb-2 text-[#1d61e7] border-b-2 border-[#1d61e7] font-bold">Messages</button>
                        <button className="pb-2 text-gray-500 hover:text-gray-800">Announcements</button>
                      </div>

                      {/* 2 Column Messenger Layout */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                        {/* Left Inbox Column */}
                        <div className="lg:col-span-4 bg-white rounded-xl border border-gray-200 p-3 shadow-xs space-y-3">
                          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg text-xs font-semibold">
                            <button className="flex-1 py-1 bg-white text-gray-900 rounded shadow-2xs font-bold text-center">Inbox</button>
                            <button className="flex-1 py-1 text-gray-500 text-center hover:text-gray-800">Sent</button>
                          </div>

                          <div className="space-y-2">
                            <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-200 space-y-1 cursor-pointer">
                              <div className="flex items-center justify-between text-xs font-bold text-gray-900">
                                <span className="flex items-center space-x-1.5">
                                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 text-[9px] flex items-center justify-center font-bold">CO</span>
                                  <span>Chukwudi Okeke</span>
                                </span>
                                <span className="text-[10px] text-gray-400 font-normal">12 May</span>
                              </div>
                              <div className="text-xs font-bold text-gray-900">Q2 OKR Review — Friday May 15th</div>
                              <p className="text-[11px] text-gray-500 line-clamp-1">Team, Please prepare your Q2 OKR progress updates for the review meeting...</p>
                            </div>

                            <div className="p-3 rounded-lg bg-white border border-gray-100 hover:bg-gray-50 space-y-1 cursor-pointer">
                              <div className="flex items-center justify-between text-xs font-bold text-gray-900">
                                <span className="flex items-center space-x-1.5">
                                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-[9px] flex items-center justify-center font-bold">EN</span>
                                  <span>Emeka Nwosu</span>
                                </span>
                                <span className="text-[10px] text-gray-400 font-normal">30 Apr</span>
                              </div>
                              <div className="text-xs font-bold text-gray-900">May 2026 Payslips — Now Available</div>
                              <p className="text-[11px] text-gray-500 line-clamp-1">Dear Staff, Please note that April 2026 payslips have been uploaded...</p>
                            </div>
                          </div>
                        </div>

                        {/* Right Thread Reader Column */}
                        <div className="lg:col-span-8 bg-white rounded-xl border border-gray-200 p-5 shadow-xs space-y-5">
                          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-800 font-extrabold flex items-center justify-center text-xs">CO</div>
                              <div>
                                <div className="font-bold text-sm text-gray-900">Chukwudi Okeke</div>
                                <div className="text-xs text-gray-500">Q2 OKR Review — Friday May 15th · 12 May</div>
                              </div>
                            </div>
                            <button className="px-3 py-1 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50">Reply</button>
                          </div>

                          <div className="text-xs text-gray-700 leading-relaxed space-y-3">
                            <p>Team,</p>
                            <p>Please prepare your Q2 OKR progress updates for the review meeting on Friday May 15th at 10:00 AM. All team leads should submit their department reports to the portal by Thursday EOD.</p>
                            <div className="pt-2">
                              <div className="font-bold text-gray-900">Chukwudi Okeke</div>
                              <div className="text-[#1d61e7] font-semibold">Management</div>
                            </div>
                          </div>

                          {/* Quick Reply Form */}
                          <div className="pt-4 border-t border-gray-100 space-y-2">
                            <label className="text-xs font-bold text-gray-800">Quick Reply</label>
                            <textarea
                              rows={3}
                              placeholder="Type your reply..."
                              className="w-full text-xs p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1d61e7]"
                            />
                            <button className="px-4 py-2 bg-[#1d61e7] hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors flex items-center space-x-1.5 cursor-pointer">
                              <Send className="w-3.5 h-3.5" />
                              <span>Send Reply</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* VIEW 5: REQUISITIONS & APPROVAL CONSOLE (input_file_4.png) */}
                  {(dashboardView === "approval" || dashboardView === "requisition") && (
                    <div className="space-y-5 animate-in fade-in duration-300 select-none">
                      <div className="text-[11px] text-gray-400 font-semibold">Finance &gt; Requisitions</div>

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-black text-gray-900 tracking-tight">Requisitions</h3>
                          <p className="text-xs text-gray-500">Finance-stage review and payment processing</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="px-3.5 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer">Export</button>
                          <button className="px-3.5 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer">Retire an Expense</button>
                          <button
                            onClick={() => setRequisitionModalOpen(true)}
                            className="px-4 py-1.5 bg-[#1d61e7] hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors flex items-center space-x-1.5 cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>New Requisition</span>
                          </button>
                        </div>
                      </div>

                      {/* 4 Stat Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Awaiting Finance Approval</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">20</div>
                            <p className="text-[10px] text-gray-400 mt-0.5">After TL approval</p>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Approved Requisitions</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">45</div>
                            <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">This month</p>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Pending Payment</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">14</div>
                            <p className="text-[10px] text-amber-600 font-semibold mt-0.5">Batch processing</p>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Rejected Requisitions</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">11</div>
                            <p className="text-[10px] text-red-500 font-semibold mt-0.5">4 this month</p>
                          </div>
                        </div>
                      </div>

                      {/* Notice Banner */}
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-800 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Info className="w-4 h-4 text-blue-600" />
                          <span>Finance has two roles in the 6-stage review flow: 1. Staff submits → 2. Team Lead ✓</span>
                        </div>
                      </div>

                      {/* Tabs */}
                      <div className="flex space-x-6 border-b border-gray-200 text-xs font-semibold">
                        <button className="pb-2 text-[#1d61e7] border-b-2 border-[#1d61e7] font-bold flex items-center space-x-1.5">
                          <span>Pending Review</span>
                          <span className="bg-blue-100 text-[#1d61e7] px-1.5 py-0.2 rounded-full text-[10px]">20</span>
                        </button>
                        <button className="pb-2 text-gray-500 hover:text-gray-800">Awaiting Payment</button>
                      </div>

                      {/* Table */}
                      <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-gray-50/80 border-b border-gray-200 text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">
                            <tr>
                              <th className="p-3">STAFF</th>
                              <th className="p-3">REFERENCE</th>
                              <th className="p-3">DEPARTMENT</th>
                              <th className="p-3">SUBMITTED</th>
                              <th className="p-3">ACTION</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                            <tr className="hover:bg-gray-50/50">
                              <td className="p-3 flex items-center space-x-2.5">
                                <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-[10px]">BB</div>
                                <span className="font-bold text-gray-900">B Blessing</span>
                              </td>
                              <td className="p-3 font-mono text-gray-500">REQ-2026-8431</td>
                              <td className="p-3 text-gray-600">Engineering</td>
                              <td className="p-3 text-gray-500">Sept 2026</td>
                              <td className="p-3 flex items-center space-x-2">
                                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-bold">✓ Approve</button>
                                <button className="px-3 py-1 border border-red-200 text-red-600 rounded text-xs font-bold hover:bg-red-50">× Reject</button>
                              </td>
                            </tr>

                            <tr className="hover:bg-gray-50/50">
                              <td className="p-3 flex items-center space-x-2.5">
                                <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-[10px]">DC</div>
                                <span className="font-bold text-gray-900">DARLINGTON CHARLES</span>
                              </td>
                              <td className="p-3 font-mono text-gray-500">REQ-2026-7443</td>
                              <td className="p-3 text-gray-600">Finance</td>
                              <td className="p-3 text-gray-500">Sept 2026</td>
                              <td className="p-3 flex items-center space-x-2">
                                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-bold">✓ Approve</button>
                                <button className="px-3 py-1 border border-red-200 text-red-600 rounded text-xs font-bold hover:bg-red-50">× Reject</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Floating Action Button */}
                      <div className="flex justify-end pt-2">
                        <button
                          onClick={() => setRequisitionModalOpen(true)}
                          className="bg-[#1d61e7] hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full shadow-lg text-xs flex items-center space-x-1.5 cursor-pointer transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Assign Task</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* VIEW 6: FINANCE MODULE DASHBOARD (Custom Requested UI) */}
                  {dashboardView === "finance" && (
                    <div className="space-y-5 animate-in fade-in duration-300 select-none">
                      <div className="text-[11px] text-gray-400 font-semibold">Management &gt; Finance</div>

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-black text-gray-900 tracking-tight">Finance Console</h3>
                          <p className="text-xs text-gray-500">Financial Overview, Cash Runway &amp; Requisition Budgets</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="px-3.5 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer">Generate Report</button>
                          <button
                            onClick={() => setRequisitionModalOpen(true)}
                            className="px-4 py-1.5 bg-[#1d61e7] hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors flex items-center space-x-1.5 cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>New Requisition</span>
                          </button>
                        </div>
                      </div>

                      {/* 4 Stat Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Total Revenue (YTD)</p>
                            <div className="text-2xl font-black text-gray-900 mt-1 font-mono">₦284.5M</div>
                            <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">↑ 18.4% YoY Growth</p>
                          </div>
                          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <DollarSign className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Monthly Operating Expense</p>
                            <div className="text-2xl font-black text-gray-900 mt-1 font-mono">₦42.1M</div>
                            <p className="text-[10px] text-gray-400 mt-0.5">Budget: ₦45.0M</p>
                          </div>
                          <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                            <BarChart2 className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Pending Requisitions</p>
                            <div className="text-2xl font-black text-gray-900 mt-1 font-mono">₦18.45M</div>
                            <p className="text-[10px] text-amber-600 font-semibold mt-0.5">20 requests queue</p>
                          </div>
                          <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                            <Clock className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Cash Runway</p>
                            <div className="text-2xl font-black text-gray-900 mt-1 font-mono">14.2 Mos</div>
                            <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">Low Liquidity Risk</p>
                          </div>
                          <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      {/* Finance Charts Row */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                        <div className="lg:col-span-8 bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-3">
                          <div className="flex justify-between items-center">
                            <h4 className="font-bold text-xs text-gray-900">Cash Flow &amp; Budget Reconciliation</h4>
                            <span className="text-[10px] font-semibold text-gray-500">FY 2026</span>
                          </div>
                          <div className="h-40 flex items-end justify-between px-6 pt-4 border-b border-l border-gray-200 gap-3">
                            {[
                              { m: "Jan", rev: 80, exp: 50 },
                              { m: "Feb", rev: 90, exp: 55 },
                              { m: "Mar", rev: 70, exp: 45 },
                              { m: "Apr", rev: 100, exp: 60 },
                              { m: "May", rev: 110, exp: 65 },
                              { m: "Jun", rev: 125, exp: 70 },
                            ].map((item) => (
                              <div key={item.m} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                                <div className="w-full flex items-end justify-center gap-1 h-full">
                                  <div className="w-3 bg-[#1d61e7] rounded-t-xs" style={{ height: `${item.rev}%` }} title={`Rev: ${item.rev}`} />
                                  <div className="w-3 bg-red-400 rounded-t-xs" style={{ height: `${item.exp}%` }} title={`Exp: ${item.exp}`} />
                                </div>
                                <span className="text-[9px] text-gray-400 mt-1">{item.m}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-center space-x-6 text-[11px] text-gray-600 pt-2">
                            <span className="flex items-center space-x-1.5"><span className="w-2.5 h-2.5 bg-[#1d61e7] rounded-xs" /><span>Revenue</span></span>
                            <span className="flex items-center space-x-1.5"><span className="w-2.5 h-2.5 bg-red-400 rounded-xs" /><span>Operating Expense</span></span>
                          </div>
                        </div>

                        <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between space-y-3">
                          <h4 className="font-bold text-xs text-gray-900">Expense Allocation</h4>
                          <div className="space-y-3 text-xs">
                            <div>
                              <div className="flex justify-between font-medium text-gray-700 text-[11px]">
                                <span>Payroll &amp; Benefits</span>
                                <span className="font-mono font-bold">55%</span>
                              </div>
                              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-1">
                                <div className="bg-blue-600 h-full w-[55%]" />
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between font-medium text-gray-700 text-[11px]">
                                <span>Cloud &amp; Infrastructure</span>
                                <span className="font-mono font-bold">22%</span>
                              </div>
                              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-1">
                                <div className="bg-purple-600 h-full w-[22%]" />
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between font-medium text-gray-700 text-[11px]">
                                <span>Operations &amp; Logistics</span>
                                <span className="font-mono font-bold">15%</span>
                              </div>
                              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-1">
                                <div className="bg-emerald-500 h-full w-[15%]" />
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between font-medium text-gray-700 text-[11px]">
                                <span>Training &amp; Development</span>
                                <span className="font-mono font-bold">8%</span>
                              </div>
                              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-1">
                                <div className="bg-amber-500 h-full w-[8%]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* GENERIC MODULE VIEW FALLBACK */}
                  {!["overview", "dashboard", "people", "mail", "messages", "approval", "requisition", "finance"].includes(dashboardView) && (
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm text-center space-y-4 animate-in fade-in duration-300">
                      <div className="w-14 h-14 bg-blue-50 text-[#1d61e7] border border-blue-200 rounded-full flex items-center justify-center mx-auto shadow-xs">
                        <Sparkles className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-black text-gray-900 capitalize">
                        Netrom {dashboardView} Module
                      </h3>
                      <p className="text-xs text-gray-600 max-w-lg mx-auto leading-relaxed">
                        Unified operating console for {dashboardView}. Managed through Netrom integrated business workflow.
                      </p>
                      <button
                        onClick={resetToOverview}
                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-md transition-colors cursor-pointer"
                      >
                        Return to Dashboard Overview
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* INTERACTIVE NEW REQUISITION MODAL DIALOG (input_file_4.png) */}
          {requisitionModalOpen && (
            <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl max-w-2xl w-full p-6 space-y-5 relative my-8 text-xs text-gray-800">
                {/* Modal Header */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <div className="flex items-center space-x-2 font-black text-base text-gray-900">
                    <FileText className="w-5 h-5 text-[#1d61e7]" />
                    <span>New Requisition</span>
                  </div>
                  <button
                    onClick={() => setRequisitionModalOpen(false)}
                    className="p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Purpose */}
                <div className="space-y-1">
                  <label className="font-bold text-gray-900">Purpose <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    placeholder="e.g. Laptop purchase / Research materials"
                    className="w-full text-xs p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1d61e7]"
                  />
                </div>

                {/* Procurement Items */}
                <div className="space-y-2">
                  <label className="font-bold text-gray-900">Procurement Items</label>
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-gray-50 text-[10px] font-extrabold text-gray-500 uppercase border-b border-gray-200">
                        <tr>
                          <th className="p-2.5">DESCRIPTION *</th>
                          <th className="p-2.5">EXPENSE CATEGORY *</th>
                          <th className="p-2.5">UNIT PRICE *</th>
                          <th className="p-2.5">QTY *</th>
                          <th className="p-2.5">TOTAL(N)</th>
                          <th className="p-2.5">ACTION</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="p-2">
                            <input type="text" placeholder="e.g. Purchase of lap..." className="w-full text-xs p-1.5 bg-gray-50 border border-gray-200 rounded" />
                          </td>
                          <td className="p-2">
                            <select className="w-full text-xs p-1.5 bg-gray-50 border border-gray-200 rounded text-gray-600">
                              <option>Select category</option>
                            </select>
                          </td>
                          <td className="p-2">
                            <input type="number" defaultValue={0} className="w-16 text-xs p-1.5 bg-gray-50 border border-gray-200 rounded" />
                          </td>
                          <td className="p-2">
                            <input type="number" defaultValue={1} className="w-12 text-xs p-1.5 bg-gray-50 border border-gray-200 rounded" />
                          </td>
                          <td className="p-2 font-bold font-mono">0</td>
                          <td className="p-2 text-center">
                            <button className="text-red-500 font-bold hover:text-red-700">×</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="p-2.5 bg-gray-50 flex items-center justify-between border-t border-gray-200 text-xs">
                      <button className="text-[#1d61e7] font-bold hover:underline">+ Add Item</button>
                      <span className="font-bold text-gray-900">Grand Total ₦0</span>
                    </div>
                  </div>
                </div>

                {/* Procurement Details Grid */}
                <div className="space-y-2">
                  <label className="font-bold text-gray-900">Procurement Details</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] text-gray-600 font-medium">Department *</label>
                      <select className="w-full text-xs p-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 mt-0.5">
                        <option>Select department...</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-600 font-medium">Project *</label>
                      <select className="w-full text-xs p-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 mt-0.5">
                        <option>Select project...</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-600 font-medium">Vendor (optional)</label>
                      <select className="w-full text-xs p-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 mt-0.5">
                        <option>- None -</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-600 font-medium">Cost center *</label>
                      <select className="w-full text-xs p-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 mt-0.5">
                        <option>Select cost center..</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Business Justification */}
                <div className="space-y-1">
                  <label className="font-bold text-gray-900">Business Justification *</label>
                  <textarea
                    rows={2}
                    placeholder="Help us understand why this request is needed"
                    className="w-full text-xs p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1d61e7]"
                  />
                  <div className="text-right text-[10px] text-gray-400">0/1000</div>
                </div>

                {/* Payment Details & Supporting Documents */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1">
                    <div className="text-[11px] font-bold text-gray-700">Payment/ Account details</div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-500">Account Name</span>
                      <span className="font-bold text-gray-900">Adaeze Okafor</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-500">Account Number</span>
                      <span className="font-mono font-bold text-gray-900">**** **** 5601</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-500">Bank</span>
                      <span className="font-bold text-emerald-700">Zenith Bank</span>
                    </div>
                  </div>

                  <div className="p-3 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-center bg-gray-50 text-gray-500 space-y-1">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <span className="text-[11px] font-medium">Drag and drop files here</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end space-x-2 pt-3 border-t border-gray-200">
                  <button
                    onClick={() => setRequisitionModalOpen(false)}
                    className="px-4 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setRequisitionModalOpen(false)}
                    className="px-5 py-1.5 bg-[#1d61e7] hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors flex items-center space-x-1 cursor-pointer"
                  >
                    <Check className="w-4 h-4" />
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 5. METRICS & TRUST SECTION */}
      {/* ========================================================================= */}
      <section id="solutions" className="bg-white py-14 md:py-20 border-t border-gray-100 relative overflow-hidden select-none">
        <ScrollReveal direction="right">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black text-gray-900 tracking-tight leading-tight mb-4">
                Built for organisations ready to work as one.
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                Netrom is designed for businesses at different stages of
                growth, from small teams establishing structured processes to
                larger organisations managing more complex operations and
                governance.
              </p>
            </div>

            {/* Top Metrics Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 max-w-4xl mx-auto text-center items-center">
              {/* Stat 1 */}
              <div className="md:border-r md:border-gray-200 px-4 py-2 group cursor-default">
                <div className="text-4xl sm:text-5xl lg:text-[56px] font-black text-gray-900 tracking-tight leading-none transition-transform duration-300 group-hover:scale-105">
                  4
                </div>
                <div className="text-sm md:text-base font-bold text-gray-800 mt-2">
                  Core role types
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  HR Admin, Finance, Management & Staff
                </p>
              </div>

              {/* Stat 2 */}
              <div className="md:border-r md:border-gray-200 px-4 py-2 group cursor-default">
                <div className="text-4xl sm:text-5xl lg:text-[56px] font-black text-gray-900 tracking-tight leading-none transition-transform duration-300 group-hover:scale-105 text-[#0066cc]">
                  3–4 weeks
                </div>
                <div className="text-sm md:text-base font-bold text-gray-800 mt-2">
                  Typical implementation journey
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  From setup to full organisation rollout
                </p>
              </div>

              {/* Stat 3 */}
              <div className="px-4 py-2 group cursor-default">
                <div className="text-4xl sm:text-5xl lg:text-[56px] font-black text-gray-900 tracking-tight leading-none transition-transform duration-300 group-hover:scale-105 text-emerald-600">
                  1
                </div>
                <div className="text-sm md:text-base font-bold text-gray-800 mt-2">
                  Connected workspace
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Single source of truth for everyday operations
                </p>
              </div>
            </div>

            {/* Horizontal Section Divider Line */}
            <div className="w-full max-w-4xl mx-auto my-10 md:my-14 border-b border-gray-200/80"></div>

            {/* Trust Strip & Center Green Highlight Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
              {/* Left Trust Badges Column */}
              <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start space-y-3 text-center lg:text-left">
                <span className="text-xs font-black tracking-widest text-gray-400 uppercase">
                  Designed For
                </span>
                <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                  {/* 1. Startups 3D Icon Badge */}
                  <div className="inline-flex items-center space-x-2.5 px-3.5 py-2 bg-white text-gray-900 rounded-full text-xs font-bold border border-gray-200 shadow-xs hover:shadow-md hover:border-amber-300 hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
                    <div className="w-6 h-6 shrink-0 relative flex items-center justify-center">
                      <svg
                        className="w-6 h-6 drop-shadow-xs transform group-hover:scale-110 transition-transform"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <defs>
                          <linearGradient
                            id="rocket3dBody"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#ff9a00" />
                            <stop offset="100%" stopColor="#cc2900" />
                          </linearGradient>
                          <linearGradient
                            id="rocket3dNose"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#ffe600" />
                            <stop offset="100%" stopColor="#ff9000" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 20 4 C 27 15 27 26 24 30 L 16 30 C 13 26 13 15 20 4 Z"
                          fill="url(#rocket3dBody)"
                        />
                        <path
                          d="M 20 4 C 24 10 25 15 25 16 L 15 16 C 15 15 16 10 20 4 Z"
                          fill="url(#rocket3dNose)"
                        />
                        <path d="M 15 22 L 8 28 L 15 27 Z" fill="#b30000" />
                        <path d="M 25 22 L 32 28 L 25 27 Z" fill="#b30000" />
                        <circle
                          cx="20"
                          cy="20"
                          r="3.5"
                          fill="#022c22"
                          stroke="#ffe600"
                          strokeWidth="1"
                        />
                        <circle cx="20" cy="20" r="2" fill="#38bdf8" />
                        <path d="M 17 30 Q 20 37 23 30 Z" fill="#ffea00" />
                      </svg>
                    </div>
                    <span>Startups</span>
                  </div>

                  {/* 2. Small Teams 3D Icon Badge */}
                  <div className="inline-flex items-center space-x-2.5 px-3.5 py-2 bg-white text-gray-900 rounded-full text-xs font-bold border border-gray-200 shadow-xs hover:shadow-md hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
                    <div className="w-6 h-6 shrink-0 relative flex items-center justify-center">
                      <svg
                        className="w-6 h-6 drop-shadow-xs transform group-hover:scale-110 transition-transform"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <defs>
                          <linearGradient
                            id="avatar3dBg"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#38bdf8" />
                            <stop offset="100%" stopColor="#0284c7" />
                          </linearGradient>
                          <linearGradient
                            id="avatar3dGold"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#fde047" />
                            <stop offset="100%" stopColor="#ca8a04" />
                          </linearGradient>
                        </defs>
                        <circle cx="16" cy="18" r="8" fill="url(#avatar3dBg)" />
                        <path d="M 10 28 C 10 23 22 23 22 28 Z" fill="#0369a1" />
                        <circle cx="26" cy="20" r="7" fill="url(#avatar3dGold)" />
                        <path d="M 20 30 C 20 25 32 25 32 30 Z" fill="#a16207" />
                        <circle
                          cx="20"
                          cy="13"
                          r="2.5"
                          fill="#22c55e"
                          stroke="#ffffff"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>
                    <span>Small Teams</span>
                  </div>

                  {/* 3. Growing SMEs 3D Icon Badge */}
                  <div className="inline-flex items-center space-x-2.5 px-3.5 py-2 bg-white text-gray-900 rounded-full text-xs font-bold border border-gray-200 shadow-xs hover:shadow-md hover:border-emerald-300 hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
                    <div className="w-6 h-6 shrink-0 relative flex items-center justify-center">
                      <svg
                        className="w-6 h-6 drop-shadow-xs transform group-hover:scale-110 transition-transform"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <defs>
                          <linearGradient
                            id="chartBar1"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#34d399" />
                            <stop offset="100%" stopColor="#059669" />
                          </linearGradient>
                          <linearGradient
                            id="chartBar2"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#047857" />
                          </linearGradient>
                          <linearGradient
                            id="arrow3d"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#fbbf24" />
                            <stop offset="100%" stopColor="#d97706" />
                          </linearGradient>
                        </defs>
                        <rect
                          x="8"
                          y="22"
                          width="6"
                          height="12"
                          rx="1.5"
                          fill="url(#chartBar1)"
                        />
                        <rect
                          x="17"
                          y="16"
                          width="6"
                          height="18"
                          rx="1.5"
                          fill="url(#chartBar2)"
                        />
                        <rect
                          x="26"
                          y="10"
                          width="6"
                          height="24"
                          rx="1.5"
                          fill="url(#chartBar1)"
                        />
                        <path
                          d="M 6 20 L 16 14 L 24 16 L 34 6"
                          stroke="url(#arrow3d)"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M 27 6 L 34 6 L 34 13"
                          fill="none"
                          stroke="url(#arrow3d)"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>Growing SMEs</span>
                  </div>
                </div>
              </div>

              {/* Center Column: Deep Forest Green Highlight Card */}
              <div className="lg:col-span-4 flex justify-center">
                <div
                  onClick={() => setCustomerModalOpen(true)}
                  className="w-full max-w-sm bg-[#005838] hover:bg-[#004d31] rounded-2xl p-7 sm:p-8 text-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group relative overflow-hidden border border-emerald-800"
                >
                  <div className="absolute -right-12 -top-12 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none"></div>

                  <div className="text-lg sm:text-xl font-black tracking-tight text-white mb-3 leading-snug">
                    One workspace. Multiple teams. Shared visibility.
                  </div>

                  <div className="text-xs sm:text-sm font-normal text-emerald-100 mb-6 leading-relaxed">
                    Bring HR, Finance, Management and Staff workflows together
                    without forcing your teams to work across disconnected
                    systems.
                  </div>

                  <div className="inline-flex items-center justify-center space-x-2 text-[#ffc72c] group-hover:text-amber-300 font-extrabold text-xs sm:text-sm tracking-wider uppercase border-b-2 border-[#ffc72c] group-hover:border-amber-300 pb-0.5 transition-colors">
                    <span>SEE HOW IT WORKS</span>
                    <div className="w-5 h-5 rounded-full border border-[#ffc72c] group-hover:border-amber-300 flex items-center justify-center text-[11px] leading-none ml-1">
                      →
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Trust Badges Column */}
              <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start space-y-3 text-center lg:text-left">
                <span className="text-xs font-black tracking-widest text-gray-400 uppercase">
                  Enterprise Scale
                </span>
                <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                  {/* 4. Mid-Market Organisations 3D Icon Badge */}
                  <div className="inline-flex items-center space-x-2.5 px-3.5 py-2 bg-white text-gray-900 rounded-full text-xs font-bold border border-gray-200 shadow-xs hover:shadow-md hover:border-indigo-300 hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
                    <div className="w-6 h-6 shrink-0 relative flex items-center justify-center">
                      <svg
                        className="w-6 h-6 drop-shadow-xs transform group-hover:scale-110 transition-transform"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <defs>
                          <linearGradient
                            id="towerGrad"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#818cf8" />
                            <stop offset="100%" stopColor="#4338ca" />
                          </linearGradient>
                          <linearGradient
                            id="towerSide"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#3730a3" />
                          </linearGradient>
                        </defs>
                        <polygon
                          points="12,12 28,12 28,34 12,34"
                          fill="url(#towerGrad)"
                        />
                        <polygon
                          points="28,12 34,16 34,34 28,34"
                          fill="url(#towerSide)"
                        />
                        <polygon points="12,12 20,6 34,10 28,12" fill="#a5b4fc" />
                        <rect
                          x="15"
                          y="16"
                          width="4"
                          height="4"
                          rx="0.5"
                          fill="#e0e7ff"
                        />
                        <rect
                          x="21"
                          y="16"
                          width="4"
                          height="4"
                          rx="0.5"
                          fill="#e0e7ff"
                        />
                        <rect
                          x="15"
                          y="23"
                          width="4"
                          height="4"
                          rx="0.5"
                          fill="#e0e7ff"
                        />
                        <rect
                          x="21"
                          y="23"
                          width="4"
                          height="4"
                          rx="0.5"
                          fill="#e0e7ff"
                        />
                      </svg>
                    </div>
                    <span>Mid-Market Organisations</span>
                  </div>

                  {/* 5. Enterprise Groups 3D Icon Badge */}
                  <div className="inline-flex items-center space-x-2.5 px-3.5 py-2 bg-white text-gray-900 rounded-full text-xs font-bold border border-gray-200 shadow-xs hover:shadow-md hover:border-purple-300 hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
                    <div className="w-6 h-6 shrink-0 relative flex items-center justify-center">
                      <svg
                        className="w-6 h-6 drop-shadow-xs transform group-hover:scale-110 transition-transform"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <defs>
                          <linearGradient
                            id="crownGold"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#fde047" />
                            <stop offset="50%" stopColor="#eab308" />
                            <stop offset="100%" stopColor="#854d0e" />
                          </linearGradient>
                          <linearGradient
                            id="purpleGem"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#c084fc" />
                            <stop offset="100%" stopColor="#7e22ce" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 8 28 L 6 14 L 14 20 L 20 8 L 26 20 L 34 14 L 32 28 Z"
                          fill="url(#crownGold)"
                          stroke="#b45309"
                          strokeWidth="0.8"
                        />
                        <rect
                          x="8"
                          y="28"
                          width="24"
                          height="4"
                          rx="1"
                          fill="#78350f"
                        />
                        <circle cx="20" cy="14" r="2.5" fill="url(#purpleGem)" />
                        <circle cx="12" cy="20" r="2" fill="url(#purpleGem)" />
                        <circle cx="28" cy="20" r="2" fill="url(#purpleGem)" />
                      </svg>
                    </div>
                    <span>Enterprise Groups</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 6. ALL YOUR TEAMS ACROSS DEPARTMENTS                                       */}
      {/* ========================================================================= */}
      <TeamsAcrossDepartmentsSection />

      {/* ========================================================================= */}
      {/* 7. NEW SECTION: EASE INTO A NEW WAY OF WORKING & RELIABLE ALL-IN-ONE     */}
      {/* ========================================================================= */}
      {/* 7. NETROM IMPLEMENTATION JOURNEY — SOLAR SYSTEM REVOLUTION            */}
      {/* ========================================================================= */}
      <section id="journey" className="py-16 md:py-24 bg-white text-gray-900 relative overflow-hidden select-none border-t border-gray-100">
        <ScrollReveal direction="left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-xs font-black tracking-widest text-[#1d61e7] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/60 inline-block mb-3">
                IMPLEMENTATION JOURNEY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
                Ease into a new way of working
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                Netrom makes the transition from disconnected tools and manual workflows straightforward.
                Configure your workspace, bring your data across, prepare your teams, and launch with confidence.
              </p>
            </div>

            {/* 2-Column Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* LEFT COLUMN: Accordion Slider with 3D Icons */}
              <div className="lg:col-span-7 space-y-3.5">
                {[
                  {
                    id: 0,
                    icon3d: (
                      <svg className="w-7 h-7 drop-shadow-xs" viewBox="0 0 40 40" fill="none">
                        <defs>
                          <linearGradient id="ic3dC1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#38bdf8" />
                            <stop offset="100%" stopColor="#1d61e7" />
                          </linearGradient>
                        </defs>
                        <rect x="6" y="8" width="28" height="24" rx="6" fill="url(#ic3dC1)" />
                        <circle cx="15" cy="16" r="3" fill="#ffffff" />
                        <rect x="21" y="14" width="10" height="4" rx="2" fill="#ffffff" opacity="0.8" />
                        <circle cx="25" cy="24" r="3" fill="#f59e0b" />
                        <rect x="8" y="22" width="13" height="4" rx="2" fill="#ffffff" opacity="0.8" />
                      </svg>
                    ),
                    title: "Import and configure",
                    category: "STRUCTURE",
                    description:
                      "Seamlessly transfer your existing staff records, departments, financial accounts, and operational data to Netrom. Tailor approval matrixes and system settings to match your business needs.",
                    features: ["Department Mapping", "Approval Matrix Setup", "Custom Roles & Permissions"]
                  },
                  {
                    id: 1,
                    icon3d: (
                      <svg className="w-7 h-7 drop-shadow-xs" viewBox="0 0 40 40" fill="none">
                        <defs>
                          <linearGradient id="ic3dA1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#34d399" />
                            <stop offset="100%" stopColor="#059669" />
                          </linearGradient>
                        </defs>
                        <path d="M 20 5 L 32 10 C 32 22 26 30 20 35 C 14 30 8 22 8 10 Z" fill="url(#ic3dA1)" />
                        <circle cx="20" cy="17" r="4" fill="#ffffff" />
                        <path d="M 14 27 C 14 23 26 23 26 27 Z" fill="#ffffff" />
                      </svg>
                    ),
                    title: "Administer user access",
                    category: "ACCESS",
                    description:
                      "Provision role permissions for HR Admins, Team Leads, Finance Officers, and Staff. Establish secure multi-tenant access control and single sign-on across departments.",
                    features: ["Bulk Staff Import", "Role Provisioning", "Data Encryption & Verification"]
                  },
                  {
                    id: 2,
                    icon3d: (
                      <svg className="w-7 h-7 drop-shadow-xs" viewBox="0 0 40 40" fill="none">
                        <defs>
                          <linearGradient id="ic3dI1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#818cf8" />
                            <stop offset="100%" stopColor="#4338ca" />
                          </linearGradient>
                          <linearGradient id="ic3dI2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#c084fc" />
                            <stop offset="100%" stopColor="#7e22ce" />
                          </linearGradient>
                        </defs>
                        <polygon points="20,6 32,13 20,20 8,13" fill="url(#ic3dI1)" />
                        <polygon points="8,13 20,20 20,34 8,27" fill="#312e81" />
                        <polygon points="32,13 32,27 20,34 20,20" fill="url(#ic3dI2)" />
                      </svg>
                    ),
                    title: "Integrate and expand",
                    category: "OPERATIONS",
                    description:
                      "Bring HR, Payroll, Procurement, OKR Task Management, and Internal Communication into one connected workspace, replacing fragmented spreadsheets and standalone software.",
                    features: ["Unified Workspace", "Cross-Team Workflows", "Central Operations Portal"]
                  },
                  {
                    id: 3,
                    icon3d: (
                      <svg className="w-7 h-7 drop-shadow-xs" viewBox="0 0 40 40" fill="none">
                        <defs>
                          <linearGradient id="ic3dZ1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fb7185" />
                            <stop offset="100%" stopColor="#e11d48" />
                          </linearGradient>
                          <linearGradient id="ic3dZ2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fde047" />
                            <stop offset="100%" stopColor="#ca8a04" />
                          </linearGradient>
                        </defs>
                        <circle cx="20" cy="20" r="15" fill="url(#ic3dZ1)" />
                        <path d="M 22 7 L 12 21 L 19 21 L 17 33 L 28 17 L 21 17 Z" fill="url(#ic3dZ2)" />
                      </svg>
                    ),
                    title: "Innovate and automate",
                    category: "INTELLIGENCE",
                    description:
                      "Automate leave approvals, requisition routing, payslip distribution, and executive reporting. Monitor organizational performance with live OKRs and analytics.",
                    features: ["Automated Approvals", "Live OKR Tracking", "Executive Reports & Dashboards"]
                  },
                ].map((item, idx) => {
                  const isOpen = activeWayTab === idx;

                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveWayTab(idx)}
                      className={`rounded-2xl transition-all duration-200 overflow-hidden cursor-pointer ${isOpen
                          ? "bg-blue-50/40 border border-blue-200/80 shadow-md p-5 border-l-4 border-l-[#1d61e7]"
                          : "bg-gray-50/70 hover:bg-gray-100/70 border border-gray-200/70 p-4 hover:shadow-xs"
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3.5">
                          <div className="w-10 h-10 rounded-xl bg-white border border-gray-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                            {item.icon3d}
                          </div>
                          <div>
                            <h3 className={`text-base font-extrabold tracking-tight ${isOpen ? "text-gray-900" : "text-gray-800"}`}>
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-[#1d61e7]" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </div>

                      {isOpen && (
                        <div className="mt-3.5 pt-3.5 border-t border-blue-100 space-y-3 animate-in fade-in duration-200">
                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-1">
                            {item.features.map((feat) => (
                              <span
                                key={feat}
                                className="text-[11px] font-semibold bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-lg shadow-2xs"
                              >
                                ✓ {feat}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* RIGHT COLUMN: Modern Office Meeting Image */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white relative group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src="/office-meeting.jpg"
                      alt="African and Black business professionals having an engaging strategy meeting in a modern corporate office"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 10. PRICING SECTION                                                        */}
      {/* ========================================================================= */}
      <section id="pricing" className="bg-[#f7f5eb] py-16 sm:py-24 border-t border-amber-900/10 select-none">
        <ScrollReveal direction="right">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Heading */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs font-black tracking-widest text-[#0066cc] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/60 inline-block mb-3">
                SIMPLE, SCALABLE PRICING
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
                Choose the plan that fits the way you work.
              </h2>

              <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                Start with the capabilities your organisation needs today and move
                up as your people, workflows and reporting requirements grow.
              </p>

              {/* Promotional Banner */}
              <div className="mt-6 inline-flex items-center space-x-2 bg-emerald-100/80 border border-emerald-300 text-emerald-900 px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-2xs">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>
                  Your first month is on us — free on Essential, Professional and
                  Advanced plans.
                </span>
              </div>
            </div>

            {/* ================================================================ */}
            {/* BILLING TOGGLE                                                    */}
            {/* ================================================================ */}
            <div className="flex flex-col items-center mb-10">
              <div className="inline-flex items-center bg-gray-200/80 border border-gray-300/80 rounded-full p-1.5 shadow-inner space-x-1">

                {/* Monthly */}
                <button
                  type="button"
                  onClick={() => setBillingCycle("monthly")}
                  aria-pressed={billingCycle === "monthly"}
                  className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${billingCycle === "monthly"
                      ? "bg-[#1d61e7] text-white shadow-md scale-105"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
                    }`}
                >
                  Monthly Billing
                </button>

                {/* Yearly */}
                <button
                  type="button"
                  onClick={() => setBillingCycle("yearly")}
                  aria-pressed={billingCycle === "yearly"}
                  className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center gap-2 cursor-pointer ${billingCycle === "yearly"
                      ? "bg-[#1d61e7] text-white shadow-md scale-105"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
                    }`}
                >
                  <span>Annual Billing</span>
                  <span
                    className={`text-[10px] font-black uppercase tracking-wide px-2 py-0.5 rounded-full ${billingCycle === "yearly"
                        ? "bg-emerald-400 text-slate-950 font-black"
                        : "bg-emerald-600 text-white font-bold"
                      }`}
                  >
                    Save 20%
                  </span>
                </button>

              </div>

              <p className="mt-3.5 text-xs text-gray-600 font-semibold flex items-center space-x-1.5">
                <span>
                  {billingCycle === "monthly"
                    ? "✓ Flexible month-to-month billing. Cancel or upgrade anytime."
                    : "🎉 Annual billing selected — Enjoy 20% discount on all platform seats!"}
                </span>
              </p>
            </div>

            {/* ================================================================ */}
            {/* 4-TIER PRICING GRID                                               */}
            {/* ================================================================ */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

              {/* ============================================================ */}
              {/* TIER 1: ESSENTIAL                                             */}
              {/* ============================================================ */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black tracking-widest text-emerald-700 uppercase bg-emerald-50 px-2.5 py-1 rounded">
                    ESSENTIAL
                  </span>

                  <h3 className="text-base font-bold text-gray-900 mt-3 mb-1">
                    Run your people and everyday operations.
                  </h3>

                  <p className="text-xs text-gray-500 mb-4">
                    Best for startups, micro businesses & small teams.
                  </p>

                  <div className="py-3 border-y border-gray-100 my-4">
                    <div className="text-2xl font-black text-gray-900 transition-all duration-300">
                      {billingCycle === "monthly" ? "₦30,000" : "₦300,000"}
                    </div>

                    <div className="text-xs text-gray-600 font-medium">
                      / employee / {billingCycle === "monthly" ? "month" : "year"}
                    </div>

                    {billingCycle === "yearly" && (
                      <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                        Equivalent to ₦25,000/month
                      </div>
                    )}

                    <div className="text-[11px] text-gray-400 mt-1 font-bold">
                      Capacity: Up to 20 users
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-gray-700 mb-6">
                    <li className="flex items-start space-x-1.5">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>Employee directory & profiles</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>Organisation structure</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>Digital employee onboarding</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>Attendance & leave management</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>Basic OKRs & task assignment</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>Personal To-Do list</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>Basic inventory & vendor management</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>Internal communication & announcements</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>Standard HR dashboard</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => setActiveModal("trial")}
                  className="w-full bg-gray-900 hover:bg-black text-white font-bold text-xs py-3 rounded-lg transition-colors cursor-pointer uppercase tracking-wider"
                >
                  GET STARTED
                </button>
              </div>

              {/* ============================================================ */}
              {/* TIER 2: PROFESSIONAL                                          */}
              {/* ============================================================ */}
              <div className="bg-[#034d3a] rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative border-2 border-emerald-500 transform lg:-translate-y-2">

                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-gray-900 text-[10px] font-black tracking-wider uppercase px-3 py-0.5 rounded-full shadow-xs">
                  MOST POPULAR
                </div>

                <div>
                  <span className="text-xs font-black tracking-widest text-amber-300 uppercase bg-emerald-900/80 px-2.5 py-1 rounded">
                    PROFESSIONAL
                  </span>

                  <h3 className="text-base font-bold text-white mt-3 mb-1">
                    Manage performance, workflows & complexity.
                  </h3>

                  <p className="text-xs text-emerald-200 mb-4">
                    Best for growing SMEs.
                  </p>

                  <div className="py-3 border-y border-emerald-800/80 my-4">
                    <div className="text-2xl font-black text-amber-400 transition-all duration-300">
                      {billingCycle === "monthly" ? "₦45,000" : "₦450,000"}
                    </div>

                    <div className="text-xs text-emerald-100 font-medium">
                      / employee / {billingCycle === "monthly" ? "month" : "year"}
                    </div>

                    {billingCycle === "yearly" && (
                      <div className="text-[11px] text-amber-300 font-semibold mt-1">
                        Equivalent to ₦37,500/month
                      </div>
                    )}

                    <div className="text-[11px] text-emerald-200 mt-1 font-bold">
                      Capacity: Up to 25 users
                    </div>
                  </div>

                  <p className="text-xs font-bold text-amber-300 mb-2">
                    Everything in Essential, plus:
                  </p>

                  <ul className="space-y-2 text-xs text-emerald-100 mb-6">
                    <li className="flex items-start space-x-1.5">
                      <span className="text-amber-400 font-bold">✓</span>
                      <span>Advanced tasks & Kanban workflows</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-amber-400 font-bold">✓</span>
                      <span>Cross-department workload management</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-amber-400 font-bold">✓</span>
                      <span>Advanced strategic OKRs</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-amber-400 font-bold">✓</span>
                      <span>Custom approval workflows</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-amber-400 font-bold">✓</span>
                      <span>Requisitions & expense retirement</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-amber-400 font-bold">✓</span>
                      <span>Purchase orders & RFQs</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-amber-400 font-bold">✓</span>
                      <span>Payslip generation & distribution</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-amber-400 font-bold">✓</span>
                      <span>Compliance & training management</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => setActiveModal("trial")}
                  className="w-full bg-[#e43338] hover:bg-[#cc282d] text-white font-extrabold text-xs py-3 rounded-lg shadow-md transition-all cursor-pointer uppercase tracking-wider"
                >
                  GET STARTED
                </button>
              </div>

              {/* ============================================================ */}
              {/* TIER 3: ADVANCED                                              */}
              {/* ============================================================ */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black tracking-widest text-blue-700 uppercase bg-blue-50 px-2.5 py-1 rounded">
                    ADVANCED
                  </span>

                  <h3 className="text-base font-bold text-gray-900 mt-3 mb-1">
                    Turn operational data into intelligence.
                  </h3>

                  <p className="text-xs text-gray-500 mb-4">
                    Established SMEs & mid-market.
                  </p>

                  <div className="py-3 border-y border-gray-100 my-4">
                    <div className="text-2xl font-black text-gray-900 transition-all duration-300">
                      {billingCycle === "monthly" ? "₦60,000" : "₦600,000"}
                    </div>

                    <div className="text-xs text-gray-600 font-medium">
                      / employee / {billingCycle === "monthly" ? "month" : "year"}
                    </div>

                    {billingCycle === "yearly" && (
                      <div className="text-[11px] text-blue-600 font-semibold mt-1">
                        Equivalent to ₦50,000/month
                      </div>
                    )}

                    <div className="text-[11px] text-gray-400 mt-1 font-bold">
                      Capacity: Up to 30 users
                    </div>
                  </div>

                  <p className="text-xs font-bold text-blue-600 mb-2">
                    Everything in Professional, plus:
                  </p>

                  <ul className="space-y-2 text-xs text-gray-700 mb-6">
                    <li className="flex items-start space-x-1.5">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>Revenue, payables & receivables</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>Cost-centre & project accounting</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>Financial & profit-margin analytics</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>Employee Performance Index</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>Competency appraisals & rankings</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>Executive dashboards & correspondence</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>Advanced audit & PII erasure controls</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>Premium support & account manager</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => setActiveModal("trial")}
                  className="w-full bg-gray-900 hover:bg-black text-white font-bold text-xs py-3 rounded-lg transition-colors cursor-pointer uppercase tracking-wider"
                >
                  GET STARTED
                </button>
              </div>

              {/* ============================================================ */}
              {/* TIER 4: ENTERPRISE                                            */}
              {/* ============================================================ */}
              <div className="bg-gray-900 rounded-2xl p-6 text-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-gray-800">
                <div>
                  <span className="text-xs font-black tracking-widest text-purple-400 uppercase bg-purple-950 px-2.5 py-1 rounded">
                    ENTERPRISE
                  </span>

                  <h3 className="text-base font-bold text-white mt-3 mb-1">
                    Run complex organisations with advanced governance.
                  </h3>

                  <p className="text-xs text-gray-400 mb-4">
                    Corporations, groups & multi-entities.
                  </p>

                  <div className="py-3 border-y border-gray-800 my-4">
                    <div className="text-2xl font-black text-purple-400">
                      Custom Pricing
                    </div>

                    <div className="text-xs text-gray-300 font-medium">
                      Tailored group capacity & SLA
                    </div>

                    <div className="text-[11px] text-purple-300 font-semibold mt-1">
                      Monthly or annual billing
                    </div>

                    <div className="text-[11px] text-gray-400 mt-1 font-bold">
                      Dedicated deployment
                    </div>
                  </div>

                  <p className="text-xs font-bold text-purple-400 mb-2">
                    Everything in Advanced, plus:
                  </p>

                  <ul className="space-y-2 text-xs text-gray-300 mb-6">
                    <li className="flex items-start space-x-1.5">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span>Multi-company & entity administration</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span>Subsidiary consolidation & reporting</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span>Advanced APIs & custom integrations</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span>Enterprise SSO & custom SLA</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span>Dedicated implementation team</span>
                    </li>

                    <li className="flex items-start space-x-1.5">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span>Data migration & custom dashboards</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => setActiveModal("contact")}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs py-3 rounded-lg transition-colors cursor-pointer uppercase tracking-wider"
                >
                  TALK TO SALES
                </button>
              </div>
            </div>



          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 11. FINAL CTA SECTION                                                      */}
      {/* ========================================================================= */}
      <footer className="bg-gray-900 text-white pt-16 pb-12 select-none border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CTA Banner inside Footer */}
          <ScrollReveal direction="fade">
            <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-green-800 rounded-2xl p-8 md:p-12 text-center text-white mb-16 shadow-2xl relative overflow-hidden border border-emerald-600/40">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
                Ready to bring your business together?
              </h2>
              <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8 font-normal opacity-90 leading-relaxed">
                Replace disconnected tools and manual follow-ups with one
                workspace for people, performance, finance and operations. Give
                every team the visibility they need. Give management the
                information they need to make decisions. Give your organisation a
                better way to work.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setActiveModal("trial")}
                  className="w-full sm:w-auto bg-[#ffc72c] hover:bg-amber-400 text-gray-900 font-extrabold text-xs sm:text-sm px-8 py-4 rounded-md uppercase tracking-wider shadow-lg transition-transform hover:scale-105 cursor-pointer"
                >
                  START YOUR FIRST MONTH FREE
                </button>
                <button
                  onClick={() => setActiveModal("contact")}
                  className="w-full sm:w-auto bg-black/40 hover:bg-black/60 text-white font-extrabold text-xs sm:text-sm px-8 py-4 rounded-md uppercase tracking-wider border border-white/30 transition-colors cursor-pointer"
                >
                  REQUEST A DEMO
                </button>
              </div>

              <p className="text-xs text-emerald-200 mt-4 font-bold tracking-wider uppercase">
                Netrom by{" "}
                <a
                  href="https://primeguage.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition-colors"
                >
                  Primeguage Solutions
                </a>
              </p>
            </div>
          </ScrollReveal>

          {/* Footer Navigation Columns */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-800 pb-12 text-xs text-gray-400">
            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">
                Product
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    People Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Attendance & Leave
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tasks & OKRs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Finance & Requisitions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Operations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Performance Insights
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Communication
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">
                Platform
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security & Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Roles & Permissions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Analytics & Reporting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Customisation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Implementation
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">
                Solutions
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Startups & Small Teams
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Growing SMEs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mid-Market
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Multi-Entity Organisations
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Product Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Feature Comparison
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Centre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Customer Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveModal("contact");
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Contact Sales
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3 col-span-2 md:col-span-1">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">
                Company
              </h4>
              <p className="text-emerald-400 font-extrabold text-sm">
                <a
                  href="https://primeguage.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Primeguage Solutions
                </a>
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Netrom is a unified business workspace designed to help
                organisations digitise everyday operations, connect teams and
                make better decisions from one platform.
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveModal("contact");
                }}
                className="inline-flex items-center text-amber-400 hover:text-amber-300 font-bold text-xs pt-1 transition-colors cursor-pointer"
              >
                <span>Talk to a Netrom specialist →</span>
              </a>
              <div className="pt-2 flex items-center space-x-3 text-gray-400">
                <Globe className="w-4 h-4" />
                <span>English</span>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 space-y-4 md:space-y-0">
            <div>
              © 2026{" "}
              <a
                href="https://primeguage.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 underline transition-colors"
              >
                Primeguage Solutions Limited
              </a>
              . All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Security
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 13. GLOBAL MODALS & DRAWERS                                              */}
      {/* ========================================================================= */}
      {customerModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setCustomerModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-black text-gray-900">
              See Netrom in action
            </h3>
            <p className="text-xs text-gray-600">
              Discover how organisations use Netrom to connect people,
              streamline workflows and gain better visibility across everyday
              operations.
            </p>

            <div className="space-y-3 pt-2 max-h-[60vh] overflow-y-auto">
              <div className="p-5 bg-emerald-50/70 rounded-xl border border-emerald-200">
                <span className="font-extrabold text-sm text-emerald-900">
                  Be among the first Netrom organisations
                </span>
                <p className="text-xs text-gray-700 mt-1 leading-relaxed">
                  Join businesses moving from fragmented workflows to one
                  connected workspace for people, performance and operations.
                </p>
                <button
                  onClick={() => {
                    setCustomerModalOpen(false);
                    setActiveModal("contact");
                  }}
                  className="mt-3 text-xs font-bold text-[#0066cc] hover:underline inline-flex items-center gap-1"
                >
                  <span>TALK TO SALES →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NDPA 2023 COMPLIANT PRIVACY POLICY MODAL */}
      {(activeModal === "privacy" || activeModal === "Privacy Policy" || privacyPolicyOpen) && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-xs z-[90] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl relative animate-in fade-in zoom-in duration-200 overflow-hidden text-gray-900 border border-gray-100">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-slate-900 text-white shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-md">
                  🔒
                </div>
                <div>
                  <h3 className="text-lg font-black tracking-tight text-white">Privacy Policy</h3>
                  <p className="text-xs text-blue-300 font-mono">Nigeria Data Protection Act (NDPA 2023) Compliant</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setActiveModal(null);
                  setPrivacyPolicyOpen(false);
                }}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Scrollable Text */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs text-gray-700 leading-relaxed font-normal">
              <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 font-medium">
                <strong>Data Controller Notice:</strong> Primeguage Solutions Limited operates Netrom in full compliance with the Nigeria Data Protection Act (NDPA) 2023, ensuring that all personal, operational, and financial data processed through our workspace platform is lawful, transparent, secure, and accurate.
              </div>

              <section className="space-y-2">
                <h4 className="text-sm font-extrabold text-gray-900">1. Lawful Basis for Data Processing</h4>
                <p>Under Section 24 of the NDPA 2023, Netrom processes personal data only where lawful grounds exist, including:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li><strong>Contractual Necessity:</strong> Enabling employee account provisioning, workflow routing, payroll processing, and organizational operations.</li>
                  <li><strong>Consent:</strong> Explicit user opt-in for communications and optional analytical cookies.</li>
                  <li><strong>Legal Obligation:</strong> Compliance with Nigerian tax laws, corporate disclosures, and regulatory audits.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-extrabold text-gray-900">2. Categories of Data Collected</h4>
                <p>Netrom collects personal and organizational data strictly necessary for workspace functionality:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li><strong>Identity & Account Data:</strong> Full name, official email address, phone number, staff ID, department, and role permissions.</li>
                  <li><strong>Operational Data:</strong> Task assignments, approval histories, requisition slips, leave schedules, and OKR progress entries.</li>
                  <li><strong>Technical & Log Data:</strong> IP addresses, browser types, device IDs, login timestamps, and system performance metrics.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-extrabold text-gray-900">3. Data Subject Rights under NDPA 2023</h4>
                <p>As a data subject under NDPA 2023, you retain the following enforceable rights:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li><strong>Right of Access:</strong> Request confirmation and full copies of your processed personal data.</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal records.</li>
                  <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of data where legal retention periods have expired.</li>
                  <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format.</li>
                  <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or direct marketing.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-extrabold text-gray-900">4. Data Security & Storage Safeguards</h4>
                <p>We implement 256-bit TLS encryption in transit and AES-256 encryption at rest. Multi-tenant database isolation, role-based access control (RBAC), and continuous vulnerability monitoring safeguard data against unauthorized access or breaches.</p>
              </section>

              <section className="space-y-2 border-t border-gray-100 pt-3">
                <h4 className="text-sm font-extrabold text-gray-900">5. Data Protection Officer (DPO) Contact</h4>
                <p>For privacy inquiries, rights enforcement, or NDPA compliance requests, contact our Data Protection Officer:</p>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl font-mono text-[11px] text-gray-800 space-y-1">
                  <div><strong>Email:</strong> dpo@primeguage.com | privacy@netrom.ng</div>
                  <div><strong>Address:</strong> Primeguage Solutions Limited, Victoria Island, Lagos, Nigeria</div>
                </div>
              </section>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between shrink-0">
              <span className="text-[11px] text-gray-500 font-medium">Last updated: September 2026</span>
              <button
                onClick={() => {
                  setActiveModal(null);
                  setPrivacyPolicyOpen(false);
                }}
                className="bg-[#1d61e7] hover:bg-blue-700 text-white text-xs font-bold px-6 py-2.5 rounded-full transition-colors cursor-pointer shadow-md"
              >
                I Understand &amp; Agree
              </button>
            </div>
          </div>
        </div>
      )}

      {/* COOKIE POLICY MODAL */}
      {(activeModal === "cookie" || activeModal === "Cookie Policy" || cookiePolicyOpen) && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-xs z-[90] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl relative animate-in fade-in zoom-in duration-200 overflow-hidden text-gray-900 border border-gray-100">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-slate-900 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-black text-lg shadow-md">
                  🍪
                </div>
                <div>
                  <h3 className="text-lg font-black tracking-tight text-white">Cookie &amp; Tracking Policy</h3>
                  <p className="text-xs text-emerald-300 font-mono">Workspace Preference &amp; Security Cookies</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setActiveModal(null);
                  setCookiePolicyOpen(false);
                }}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs text-gray-700 leading-relaxed">
              <p>Netrom uses cookies and similar session storage technologies to maintain secure user authentication, save workspace dashboard state, and optimize load speed.</p>

              <div className="space-y-3">
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-bold text-gray-900 flex items-center justify-between">
                    <span>1. Strictly Necessary Cookies</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Always Active</span>
                  </div>
                  <p className="text-[11px] text-gray-600">Essential for user login authentication, CSRF token validation, and secure workspace navigation.</p>
                </div>

                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-bold text-gray-900 flex items-center justify-between">
                    <span>2. Performance &amp; Analytics Cookies</span>
                    <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full">Optional</span>
                  </div>
                  <p className="text-[11px] text-gray-600">Helps us measure workspace responsiveness, feature adoption, and system uptime anonymously.</p>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-end space-x-3">
              <button
                onClick={() => {
                  setActiveModal(null);
                  setCookiePolicyOpen(false);
                }}
                className="px-5 py-2 border border-gray-300 text-gray-700 font-bold text-xs rounded-full hover:bg-gray-100"
              >
                Essential Only
              </button>
              <button
                onClick={() => {
                  setActiveModal(null);
                  setCookiePolicyOpen(false);
                }}
                className="bg-[#1d61e7] hover:bg-blue-700 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-md"
              >
                Accept All Cookies
              </button>
            </div>
          </div>
        </div>
      )}

      {/* GLOBAL NOTIFICATION DROPDOWN OVERLAY (Matching input_file_0.png) */}
      {notificationsOpen && (
        <div className="fixed top-20 right-4 sm:right-8 w-80 sm:w-96 bg-white rounded-2xl border border-gray-200 shadow-2xl z-[85] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 text-gray-900 select-none">
          {/* Header Profile Bar */}
          <div className="bg-gray-50/90 border-b border-gray-100 p-3.5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1.5 bg-white border border-gray-200 rounded-full px-2.5 py-1 shadow-2xs">
                <Bell className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-[10px] font-black text-red-500 bg-red-50 px-1 rounded-full">10</span>
                <span className="text-gray-300 text-xs">|</span>
                <Moon className="w-3.5 h-3.5 text-gray-500" />
              </div>
              <div className="text-left pl-1">
                <div className="text-xs font-bold text-gray-900 leading-none">Adaeze Okafor</div>
                <div className="text-[10px] text-gray-500 font-mono mt-0.5">hr_admin</div>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-extrabold flex items-center justify-center text-xs border border-purple-200">
              AO
            </div>
          </div>

          {/* Title & Actions Bar */}
          <div className="p-3.5 border-b border-gray-100 flex items-center justify-between bg-white">
            <div className="flex items-center space-x-2">
              <h4 className="text-sm font-extrabold text-gray-900">Notifications</h4>
              <span className="text-[10px] font-extrabold bg-red-50 text-red-600 px-2 py-0.5 rounded-full border border-red-100">10 New</span>
            </div>
            <div className="flex items-center space-x-3 text-xs">
              <button onClick={() => setNotificationsOpen(false)} className="text-gray-500 hover:text-gray-900 font-medium cursor-pointer">Mark all read</button>
              <button onClick={() => setNotificationsOpen(false)} className="text-gray-400 hover:text-gray-700 p-0.5 rounded-full hover:bg-gray-100 cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Notification Items List */}
          <div className="p-3 space-y-2 max-h-[380px] overflow-y-auto bg-gray-50/30">
            {/* Item 1 */}
            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100/80 hover:border-blue-200 transition-colors flex items-start space-x-3 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                <Umbrella className="w-4 h-4" />
              </div>
              <div className="flex-1 text-left space-y-0.5">
                <p className="text-xs font-bold text-gray-900 leading-tight">Leave request from DARLINGTON CHARLES — HR review</p>
                <p className="text-[10px] text-gray-500">42m ago · <span className="text-[#1d61e7] font-semibold hover:underline">Open &gt;</span></p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100/80 hover:border-blue-200 transition-colors flex items-start space-x-3 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                <Umbrella className="w-4 h-4" />
              </div>
              <div className="flex-1 text-left space-y-0.5">
                <p className="text-xs font-bold text-gray-900 leading-tight">Leave request from DARLINGTON CHARLES — HR review</p>
                <p className="text-[10px] text-gray-500">1h ago · <span className="text-[#1d61e7] font-semibold hover:underline">Open &gt;</span></p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100/80 hover:border-blue-200 transition-colors flex items-start space-x-3 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                <Bell className="w-4 h-4" />
              </div>
              <div className="flex-1 text-left space-y-0.5">
                <p className="text-xs font-bold text-gray-900 leading-tight">Birthday Requisition — Sade Olawale</p>
                <p className="text-[10px] text-gray-500">1h ago · <span className="text-[#1d61e7] font-semibold hover:underline">Open &gt;</span></p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100/80 hover:border-blue-200 transition-colors flex items-start space-x-3 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                <Bell className="w-4 h-4" />
              </div>
              <div className="flex-1 text-left space-y-0.5">
                <p className="text-xs font-bold text-gray-900 leading-tight">🔔 Sade Olawale — Birthday tomorrow</p>
                <p className="text-[10px] text-gray-500">1h ago · <span className="text-[#1d61e7] font-semibold hover:underline">Open &gt;</span></p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100/80 hover:border-blue-200 transition-colors flex items-start space-x-3 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                <Bell className="w-4 h-4" />
              </div>
              <div className="flex-1 text-left space-y-0.5">
                <p className="text-xs font-bold text-gray-900 leading-tight">New comment on REQ-2026-5631</p>
                <p className="text-[10px] text-gray-500">1d ago · <span className="text-[#1d61e7] font-semibold hover:underline">Open &gt;</span></p>
              </div>
            </div>

            {/* Item 6 */}
            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100/80 hover:border-blue-200 transition-colors flex items-start space-x-3 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                <Bell className="w-4 h-4" />
              </div>
              <div className="flex-1 text-left space-y-0.5">
                <p className="text-xs font-bold text-gray-900 leading-tight">Requisition Awaiting HR Review</p>
                <p className="text-[10px] text-gray-500">1d ago · <span className="text-[#1d61e7] font-semibold hover:underline">Open &gt;</span></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* BOOK A DEMO & TALK TO SALES MODAL (MATCHING UI SCREENSHOT)                */}
      {/* ========================================================================= */}
      {activeModal && activeModal !== "privacy" && activeModal !== "Privacy Policy" && activeModal !== "cookie" && activeModal !== "Cookie Policy" && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-[95] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          <div className="bg-[#eef2f6] rounded-3xl max-w-4xl w-full flex flex-col md:flex-row shadow-2xl relative animate-in fade-in zoom-in duration-200 overflow-hidden text-gray-900 border border-slate-200/50 my-6">

            {/* LEFT BLUE COLUMN */}
            <div className="w-full md:w-[38%] bg-gradient-to-b from-[#0b3ec2] via-[#05329c] to-[#022272] text-white p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden shrink-0">
              {/* Decorative soft glow */}
              <div className="absolute -top-16 -left-16 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 flex items-center justify-center">
                    <svg className="w-7 h-7" viewBox="0 0 40 40" fill="none">
                      <polygon points="12,6 30,14 26,34 8,24" stroke="white" strokeWidth="2.5" fill="rgba(255,255,255,0.15)" />
                      <line x1="12" y1="6" x2="26" y2="34" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-extrabold text-xs tracking-wider text-white block leading-none">PRIMEGUAGE</span>
                    <span className="text-[7.5px] font-semibold text-blue-200 tracking-widest uppercase">SOLUTIONS</span>
                  </div>
                </div>

                {/* Heading */}
                <div>
                  <h3 className="text-2xl sm:text-[26px] font-black tracking-tight text-white leading-tight">
                    See Primeguage in action
                  </h3>
                  <p className="text-xs text-blue-100/85 mt-2.5 leading-relaxed font-normal">
                    Tell us what you are working on and we will show you how our technology, advisory and media teams can help.
                  </p>
                </div>

                {/* 3 Checkmark bullet points */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-xs text-white/95">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 shadow-2xs">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>A walkthrough tailored to your organisation</span>
                  </div>

                  <div className="flex items-center space-x-3 text-xs text-white/95">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 shadow-2xs">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>A reply from our team within one working day</span>
                  </div>

                  <div className="flex items-center space-x-3 text-xs text-white/95">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 shadow-2xs">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>No cost and no obligation</span>
                  </div>
                </div>
              </div>

              {/* Bottom direct contact */}
              <div className="pt-8 relative z-10 border-t border-white/10 mt-6">
                <p className="text-[11px] text-blue-200/80 mb-1">Prefer to talk now?</p>
                <div className="space-y-0.5">
                  <a href="mailto:info@primeguage.co" className="text-white font-semibold text-xs underline block hover:text-blue-200 transition-colors">
                    info@primeguage.co
                  </a>
                  <a href="tel:07007746348243" className="text-white font-semibold text-xs underline block hover:text-blue-200 transition-colors">
                    0700-774-634-8243
                  </a>
                  <span className="text-[10px] text-blue-300 block pt-1">
                    No.31 Adamu Ciroma Crescent, Jabi, Abuja.
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT LIGHT COLUMN (FORM) */}
            <div className="w-full md:w-[62%] p-6 sm:p-8 flex flex-col justify-between relative bg-[#eef2f6]">
              {/* Close Button */}
              <button
                onClick={() => {
                  setActiveModal(null);
                  setDemoFormSubmitted(false);
                }}
                className="w-7 h-7 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors absolute top-4 right-4 cursor-pointer"
                title="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              {demoFormSubmitted ? (
                <div className="my-auto py-10 text-center space-y-3">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-black shadow-lg">
                    ✓
                  </div>
                  <h4 className="text-2xl font-black text-[#052d82]">Request Received</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you <strong>{demoFormData.name || "there"}</strong>. We have received your booking enquiry for <strong>{demoFormData.dateTime || "your preferred slot"}</strong>. We will email a confirmation to <strong>{demoFormData.email || "your address"}</strong>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setActiveModal(null);
                        setDemoFormSubmitted(false);
                      }}
                      className="bg-[#1d61e7] hover:bg-[#1550c7] text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-md transition-colors cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setDemoFormSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  {/* Form Header */}
                  <div>
                    <h3 className="text-2xl sm:text-[26px] font-black text-[#052d82] tracking-tight">
                      Book a Demo
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Share a few details and pick a time that suits you. We will confirm by email.
                    </p>
                  </div>

                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Your name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={demoFormData.name}
                        onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })}
                        placeholder="e.g. Amina Bello"
                        className="w-full bg-[#f8fafc] border border-slate-300/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d61e7]/20 focus:border-[#1d61e7] transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={demoFormData.email}
                        onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-[#f8fafc] border border-slate-300/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d61e7]/20 focus:border-[#1d61e7] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone number and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        value={demoFormData.phone}
                        onChange={(e) => setDemoFormData({ ...demoFormData, phone: e.target.value })}
                        placeholder="0803 000 0000"
                        className="w-full bg-[#f8fafc] border border-slate-300/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d61e7]/20 focus:border-[#1d61e7] transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Company / organisation <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={demoFormData.company}
                        onChange={(e) => setDemoFormData({ ...demoFormData, company: e.target.value })}
                        placeholder="Company name"
                        className="w-full bg-[#f8fafc] border border-slate-300/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d61e7]/20 focus:border-[#1d61e7] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Role and Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Your role
                      </label>
                      <select
                        value={demoFormData.role}
                        onChange={(e) => setDemoFormData({ ...demoFormData, role: e.target.value })}
                        className="w-full bg-[#f8fafc] border border-slate-300/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1d61e7]/20 focus:border-[#1d61e7] transition-all"
                      >
                        <option value="">Select your role (optional)</option>
                        <option value="Executive / C-Suite">Executive / C-Suite</option>
                        <option value="HR / People Operations">HR / People Operations</option>
                        <option value="Finance & Accounts">Finance &amp; Accounts</option>
                        <option value="Operations & Admin">Operations &amp; Admin</option>
                        <option value="Team Lead / Manager">Team Lead / Manager</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        What are you interested in? <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={demoFormData.interest}
                        onChange={(e) => setDemoFormData({ ...demoFormData, interest: e.target.value })}
                        className="w-full bg-[#f8fafc] border border-slate-300/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1d61e7]/20 focus:border-[#1d61e7] transition-all"
                      >
                        <option value="">Select what you are interested in</option>
                        <option value="All-in-One Netrom Platform">All-in-One Netrom Platform</option>
                        <option value="HR & Staff Operations">HR &amp; Staff Operations</option>
                        <option value="Finance & Requisitions">Finance &amp; Requisitions</option>
                        <option value="Tasks & OKR Tracking">Tasks &amp; OKR Tracking</option>
                        <option value="Custom Implementation">Custom Implementation</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Preferred date and time */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Preferred date and time <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="datetime-local"
                        required
                        value={demoFormData.dateTime}
                        onChange={(e) => setDemoFormData({ ...demoFormData, dateTime: e.target.value })}
                        className="w-full bg-[#f8fafc] border border-slate-300/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1d61e7]/20 focus:border-[#1d61e7] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 5: Message */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Message (optional)
                    </label>
                    <textarea
                      rows={2.5}
                      value={demoFormData.message}
                      onChange={(e) => setDemoFormData({ ...demoFormData, message: e.target.value })}
                      placeholder="Anything we should know before the demo?"
                      className="w-full bg-[#f8fafc] border border-slate-300/80 rounded-xl px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d61e7]/20 focus:border-[#1d61e7] transition-all"
                    />
                  </div>

                  {/* Bottom Action and Disclaimer */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                    <button
                      type="submit"
                      className="bg-[#1d61e7] hover:bg-[#1550c7] text-white font-bold text-xs px-7 py-3 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
                    >
                      Submit request
                    </button>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      We will email you a confirmation as soon as your request arrives. See how we use your details in our{" "}
                      <button
                        type="button"
                        onClick={() => setActiveModal("privacy")}
                        className="text-[#1d61e7] font-semibold underline hover:text-blue-800 cursor-pointer"
                      >
                        Privacy Policy
                      </button>
                      .
                    </p>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
