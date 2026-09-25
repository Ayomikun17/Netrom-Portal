import {
  User,
  Users,
  Clock,
  Calendar,
  Calculator,
  DollarSign,
  PieChart,
  FileText,
  TrendingUp,
  BarChart2,
  CheckSquare,
  Sparkles,
  Cog,
  Building,
  ShoppingCart,
  Package,
  MessageSquare,
  Megaphone,
  ShieldCheck,
  Lock,
  Briefcase,
  Grid,
  Inbox,
  Plus,
} from "lucide-react";
import { DepartmentInfo, NetromDepartmentInfo } from "@/types";

export const DEPARTMENT_DATA: Record<string, DepartmentInfo> = {
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
        icon: CheckSquare,
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

export const NETROM_DEPARTMENT_DATA: Record<string, NetromDepartmentInfo> = {
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
