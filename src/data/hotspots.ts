import { HotspotDetail } from "@/types";

export const HOTSPOT_DETAILS: Record<string, HotspotDetail> = {
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
