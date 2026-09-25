"use client";

import React, { useState } from "react";
import {
  X,
  Shield,
  Lock,
  FileText,
  Database,
  EyeOff,
  UserCheck,
  Server,
  Globe,
  Mail,
  ChevronRight,
  ExternalLink,
  Printer,
  CheckCircle2,
  Search,
} from "lucide-react";
import { PrimeguageLogo } from "@/components/common";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeSection, setActiveSection] = useState<string>("pledge");
  const [searchQuery, setSearchQuery] = useState<string>("");

  if (!isOpen) return null;

  const sections = [
    {
      id: "pledge",
      title: "Our Privacy Pledge",
      icon: Shield,
      summary: "Zero third-party ads, zero data sales, privacy-by-design.",
    },
    {
      id: "scope",
      title: "Scope & Legal Framework",
      icon: Globe,
      summary: "NDPA 2023 compliance, Controller vs. Processor roles.",
    },
    {
      id: "part1",
      title: "Part I: Data Netrom Collects & Controls",
      icon: Database,
      summary: "Sign-up, billing, communications, and telemetry.",
    },
    {
      id: "part2",
      title: "Part II: Service Data (Processed for You)",
      icon: Lock,
      summary: "Enterprise workforce records, payroll, requisitions & files.",
    },
    {
      id: "sharing",
      title: "Information Sharing & Disclosures",
      icon: EyeOff,
      summary: "Sub-processors, cloud hosting, and statutory authorities.",
    },
    {
      id: "security",
      title: "Data Security & 256-bit Encryption",
      icon: Server,
      summary: "AES-256 at rest, TLS 1.3 in transit, tenant isolation.",
    },
    {
      id: "retention",
      title: "Retention & Permanent Deletion",
      icon: FileText,
      summary: "Active lifecycle, 90-day export grace period, secure purging.",
    },
    {
      id: "rights",
      title: "Your Rights as a Data Subject",
      icon: UserCheck,
      summary: "Access, rectification, erasure, and NDPC recourse.",
    },
    {
      id: "dpo",
      title: "DPO & Contact Information",
      icon: Mail,
      summary: "Data Protection Officer contact and complaint resolution.",
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[90] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl sm:rounded-3xl max-w-5xl w-full h-[90vh] flex flex-col shadow-2xl relative animate-in fade-in zoom-in duration-200 overflow-hidden text-gray-900 border border-gray-100 my-auto">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-slate-950 text-white shrink-0">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-xl font-black tracking-tight text-white">
                  Netrom Privacy Policy
                </h3>
                <span className="text-[10px] sm:text-xs bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                  NDPA 2023 Compliant
                </span>
                <span className="text-[10px] sm:text-xs bg-blue-500/20 text-blue-300 font-bold px-2 py-0.5 rounded-full border border-blue-500/30">
                  Zero Third-Party Ads
                </span>
              </div>
              <div className="text-xs text-gray-400 mt-1 font-normal flex items-center gap-1.5 flex-wrap">
                <span>Operated by</span>
                <PrimeguageLogo size="sm" />
                <span className="font-semibold text-gray-300">Primeguage Solutions Limited</span>
                <span>• Effective: September 2026</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              title="Print policy"
              className="hidden sm:flex items-center space-x-1 text-gray-300 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors text-xs font-semibold"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Bar & Mobile Section Selector */}
        <div className="p-3 bg-slate-900 border-b border-slate-800 flex flex-col sm:flex-row gap-2 items-stretch sm:items-center justify-between shrink-0 text-white">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search privacy clauses (e.g., Service Data, NDPA, Sub-processors)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/80 text-white text-xs pl-9 pr-3 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500 placeholder-gray-400"
            />
          </div>
          <div className="sm:hidden flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className={`whitespace-nowrap px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors ${
                  activeSection === sec.id
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                }`}
              >
                {sec.title}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Main Area: Desktop Two-Column Layout */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Navigation Sidebar (Desktop) */}
          <div className="hidden sm:block w-72 bg-slate-50/80 border-r border-gray-200 overflow-y-auto p-3 space-y-1 shrink-0">
            <div className="px-3 py-2 text-[10px] font-black uppercase tracking-wider text-gray-400">
              Navigation Index
            </div>
            {sections.map((sec) => {
              const Icon = sec.icon;
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    setActiveSection(sec.id);
                    const el = document.getElementById(`section-${sec.id}`);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start space-x-2.5 cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm font-semibold"
                      : "text-gray-700 hover:bg-gray-200/70 font-normal"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 mt-0.5 shrink-0 ${
                      isActive ? "text-white" : "text-gray-500"
                    }`}
                  />
                  <div className="overflow-hidden">
                    <div className="text-xs truncate">{sec.title}</div>
                    <div
                      className={`text-[10px] truncate ${
                        isActive ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      {sec.summary}
                    </div>
                  </div>
                </button>
              );
            })}

            <div className="pt-4 px-3">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-900 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>The Netrom Privacy Code</span>
                </div>
                <p className="text-[11px] leading-relaxed text-blue-800">
                  We never monetize attention, sell your corporate logs, or deploy behavioral tracking ads.
                </p>
              </div>
            </div>
          </div>

          {/* Right Scrollable Content Pane */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed font-normal bg-white">
            {/* Search Banner if filtering */}
            {searchQuery && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs flex items-center justify-between">
                <span>Filtering for: <strong>"{searchQuery}"</strong></span>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-amber-700 font-bold underline cursor-pointer"
                >
                  Clear filter
                </button>
              </div>
            )}

            {/* SECTION 1: OUR PRIVACY PLEDGE */}
            <section id="section-pledge" className="space-y-3 scroll-mt-6">
              <div className="flex items-center space-x-2 text-blue-600">
                <Shield className="w-5 h-5" />
                <span className="text-xs font-bold tracking-wider uppercase text-blue-600">
                  Our Foundational Philosophy
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                1. The Netrom Privacy Pledge: Zero Ads, Zero Brokerage
              </h2>
              <p>
                At Netrom (operated by <strong>Primeguage Solutions Limited</strong>), we adhere to a fundamental principle inspired by the world’s most trusted enterprise privacy standards: <strong>your company’s data belongs to you, and your team’s privacy is not for sale</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
                <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-extrabold text-gray-900 flex items-center gap-1.5 text-xs sm:text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    No Third-Party Ads
                  </div>
                  <p className="text-xs text-gray-600">
                    We do not serve third-party ads in any Netrom software, nor do we partner with ad exchange networks.
                  </p>
                </div>
                <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-extrabold text-gray-900 flex items-center gap-1.5 text-xs sm:text-sm">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Zero Data Monetization
                  </div>
                  <p className="text-xs text-gray-600">
                    We never rent, trade, lease, or sell your employees' or organization's data to marketing brokers.
                  </p>
                </div>
                <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-extrabold text-gray-900 flex items-center gap-1.5 text-xs sm:text-sm">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    Enterprise Sovereignty
                  </div>
                  <p className="text-xs text-gray-600">
                    Every organization operates within an isolated cryptographic boundary with full export rights.
                  </p>
                </div>
              </div>
              <p>
                Our business model is pure and simple: we charge transparent subscription fees for our software and enterprise workflow tools. Because we do not rely on advertising revenue, our product development is 100% focused on creating secure, reliable, and high-performance business applications.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* SECTION 2: SCOPE & LEGAL FRAMEWORK */}
            <section id="section-scope" className="space-y-3 scroll-mt-6">
              <div className="flex items-center space-x-2 text-indigo-600">
                <Globe className="w-5 h-5" />
                <span className="text-xs font-bold tracking-wider uppercase">
                  Jurisdiction & Architecture
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-gray-900">
                2. Scope, Applicable Law & Dual-Role Framework
              </h2>
              <p>
                This Privacy Policy applies to all services, software applications, mobile apps, web portals, and APIs provided under the Netrom brand by <strong>Primeguage Solutions Limited</strong> (incorporated under the laws of the Federal Republic of Nigeria).
              </p>
              <p>
                We comply with the <strong>Nigeria Data Protection Act (NDPA) 2023</strong>, regulations issued by the <strong>Nigeria Data Protection Commission (NDPC)</strong>, and international best practices (including General Data Protection Regulation [GDPR] data protection principles and ISO/IEC 27001 data governance standards).
              </p>

              <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-3">
                <h4 className="font-bold text-sm text-blue-400">
                  Crucial Distinction: Data Controller vs. Data Processor
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-300">
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                    <strong className="text-white block mb-1 text-sm">
                      Part I: Netrom as Data Controller
                    </strong>
                    Applies when you interact directly with us as a website visitor, prospect, account owner, or billing administrator. Netrom decides how and why this account and administrative data is processed.
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                    <strong className="text-white block mb-1 text-sm">
                      Part II: Netrom as Data Processor (Service Data)
                    </strong>
                    Applies when your organization uses Netrom to manage its workplace operations (employees, requisitions, payroll, tasks, files). <strong>Your organization is the Data Controller; Netrom is strictly the Data Processor.</strong>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* SECTION 3: PART I - DATA WE COLLECT AS CONTROLLER */}
            <section id="section-part1" className="space-y-3 scroll-mt-6">
              <div className="flex items-center space-x-2 text-emerald-600">
                <Database className="w-5 h-5" />
                <span className="text-xs font-bold tracking-wider uppercase">
                  Part I
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-gray-900">
                3. Information Netrom Collects and Controls
              </h2>
              <p>
                In our capacity as a Data Controller, we collect specific categories of personal data to establish accounts, process billing, maintain platform security, and deliver customer support:
              </p>

              <div className="space-y-3">
                <div className="border border-gray-200 rounded-xl p-3.5 space-y-1.5">
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm">
                    A. Information You Voluntarily Provide
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 text-xs">
                    <li>
                      <strong>Account Registration:</strong> Administrator name, official company email, telephone number, organization name, industry sector, team size, and encrypted account credentials.
                    </li>
                    <li>
                      <strong>Billing & Invoicing:</strong> Registered business address, Tax Identification Number (TIN), billing contacts, and payment confirmation tokens. Note that sensitive card/account data is tokenized through PCI-DSS Level 1 compliant Nigerian payment gateways (e.g., Paystack, Flutterwave); Netrom never stores raw card verification values (CVV) on our servers.
                    </li>
                    <li>
                      <strong>Inquiries & Sales Consultations:</strong> When you request a demo, sign up for a trial, or contact support, we record your inquiries, messages, and call notes to assist your onboarding.
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-xl p-3.5 space-y-1.5">
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm">
                    B. Information Collected Automatically
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 text-xs">
                    <li>
                      <strong>Device & Network Identifiers:</strong> Internet Protocol (IP) address, operating system, browser user-agent, language preferences, and device characteristics for fraud prevention and session management.
                    </li>
                    <li>
                      <strong>System Logs & Security Telemetry:</strong> Login timestamps, multi-factor authentication (MFA) verification events, failed authentication alerts, and API rate-limiting logs.
                    </li>
                    <li>
                      <strong>Aggregated Usage Metrics:</strong> First-party telemetry on system response times, feature throughput, and error codes to maintain high workspace availability.
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-xl p-3.5 space-y-1.5">
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm">
                    C. Lawful Bases for Processing under NDPA 2023
                  </h4>
                  <p className="text-xs text-gray-600">
                    Pursuant to Section 24 of the NDPA 2023, we rely on the following lawful bases:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 text-xs">
                    <li>
                      <strong>Performance of a Contract:</strong> Providing you access to Netrom services and fulfilling our enterprise service level agreement (SLA).
                    </li>
                    <li>
                      <strong>Legal & Regulatory Compliance:</strong> Retaining invoices for Nigerian corporate tax audits, responding to statutory directives, and maintaining security audit trails.
                    </li>
                    <li>
                      <strong>Legitimate Business Interests:</strong> Safeguarding against credential abuse, DDoS attacks, and ensuring continuous platform stability.
                    </li>
                    <li>
                      <strong>Consent:</strong> Sending promotional product updates or newsletters, which you can opt out of at any time via a single click.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* SECTION 4: PART II - SERVICE DATA */}
            <section id="section-part2" className="space-y-3 scroll-mt-6">
              <div className="flex items-center space-x-2 text-blue-600">
                <Lock className="w-5 h-5" />
                <span className="text-xs font-bold tracking-wider uppercase">
                  Part II
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-gray-900">
                4. Information Netrom Processes on Your Behalf (Service Data)
              </h2>
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-950 font-medium text-xs sm:text-sm">
                <strong>Sole Ownership Guarantee:</strong> You and your organization retain all legal ownership, copyright, and intellectual property rights to all Service Data processed within Netrom. We act solely as a secure data custodian.
              </div>
              <p>
                <strong>What is Service Data?</strong> Service Data encompasses all information inputted, uploaded, generated, or transmitted by you or your authorized users through Netrom applications, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-xs sm:text-sm">
                <li>
                  <strong>Human Resources & People:</strong> Staff profiles, national identification records (NIN, where authorized by employer), job titles, work department, date of resumption, leave balances, and disciplinary logs.
                </li>
                <li>
                  <strong>Requisitions & Financial Workflows:</strong> Expense requests, budget approvals, vendor invoices, purchase orders, reimbursement receipts, and payment authorizations.
                </li>
                <li>
                  <strong>Payroll & Compensation Data:</strong> Salary structures, bank account numbers (NIBSS routing), pension deductions, PAYE tax computation tables, and allowances.
                </li>
                <li>
                  <strong>Operations, Tasks & OKRs:</strong> Strategic goals, quarterly milestones, task boards, internal approvals, audit comments, and operational documentation.
                </li>
                <li>
                  <strong>Corporate Documents & Assets:</strong> Contracts, employee handbooks, signed vouchers, PDF reports, and organizational charts stored in Netrom Files.
                </li>
              </ul>

              <h4 className="font-bold text-gray-900 text-sm mt-3">
                Netrom's Commitments Regarding Service Data:
              </h4>
              <div className="space-y-2 text-xs text-gray-600">
                <p>
                  <strong>1. Documented Processing Only:</strong> Netrom processes Service Data strictly in accordance with your organization’s configuration, terms of service, and explicit administrative instructions.
                </p>
                <p>
                  <strong>2. Zero Data Mining or Profiling:</strong> We will never scan, parse, index, or analyze your organization's confidential spreadsheets, files, or requisitions for advertising or AI model training without your explicit affirmative enterprise consent.
                </p>
                <p>
                  <strong>3. Tenant Isolation:</strong> Every customer's workspace is segregated using robust logical database partitions. One organization’s administrators or staff can never access, query, or view another tenant's data.
                </p>
                <p>
                  <strong>4. Data Subject Requests:</strong> If an individual employee or data subject contacts Netrom directly to exercise rights regarding Service Data, we will promptly route the request to your organization's designated administrator (Data Controller) within three (3) business days.
                </p>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* SECTION 5: INFORMATION SHARING & SUBPROCESSORS */}
            <section id="section-sharing" className="space-y-3 scroll-mt-6">
              <div className="flex items-center space-x-2 text-violet-600">
                <EyeOff className="w-5 h-5" />
                <span className="text-xs font-bold tracking-wider uppercase">
                  Confidentiality
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-gray-900">
                5. Third-Party Sharing, Sub-processors & Statutory Disclosures
              </h2>
              <p>
                We do not share your personal data or Service Data with third parties except under the following strictly delimited circumstances:
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-bold text-gray-900">
                    A. Vetted Sub-processors & Infrastructure Partners
                  </div>
                  <p className="text-gray-600">
                    We engage trusted third-party providers exclusively to provide specialized technological infrastructure necessary to deliver Netrom. Each sub-processor is bound by rigorous Data Processing Agreements (DPAs) requiring equal or greater data security standards:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-0.5 mt-1">
                    <li>Cloud Infrastructure & Tier-3 Data Center Providers (high-availability hosting, automated disaster recovery).</li>
                    <li>Transactional Email & SMS Delivery Services (for login OTPs, workflow approval notifications, and password resets).</li>
                    <li>Licensed Payment Processing Gateways (for secure corporate subscription processing).</li>
                  </ul>
                </div>

                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-bold text-gray-900">
                    B. Statutory Legal & Law Enforcement Disclosures
                  </div>
                  <p className="text-gray-600">
                    Under the NDPA 2023, we may disclose personal data to law enforcement, judicial courts, or regulatory authorities only when compelled by a valid legal subpoena, court order, or binding statutory requirement. Unless legally prohibited, we will notify the affected organization prior to disclosure so they may seek protective orders.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* SECTION 6: DATA SECURITY & 256-BIT ENCRYPTION */}
            <section id="section-security" className="space-y-3 scroll-mt-6">
              <div className="flex items-center space-x-2 text-teal-600">
                <Server className="w-5 h-5" />
                <span className="text-xs font-bold tracking-wider uppercase">
                  Technical Safeguards
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-gray-900">
                6. Data Security, 256-bit Encryption & System Integrity
              </h2>
              <p>
                Netrom employs enterprise-grade technical, physical, and administrative safeguards designed to protect personal and corporate data against unauthorized access, loss, or alteration:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-bold text-gray-900 flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-emerald-600" />
                    Encryption in Transit & at Rest
                  </div>
                  <p className="text-gray-600">
                    All network traffic is encrypted using <strong>Transport Layer Security (TLS 1.3)</strong>. All database tables, file attachments, and automated disaster recovery archives are encrypted using <strong>AES-256 bit encryption</strong>.
                  </p>
                </div>

                <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-bold text-gray-900 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-blue-600" />
                    Role-Based Access Control (RBAC)
                  </div>
                  <p className="text-gray-600">
                    Granular permission matrices ensure that staff only see data permitted by their organizational role. Two-factor authentication (2FA) is available and recommended for all administrator accounts.
                  </p>
                </div>

                <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-bold text-gray-900 flex items-center gap-1.5">
                    <Database className="w-4 h-4 text-indigo-600" />
                    Automated Redundant Backups
                  </div>
                  <p className="text-gray-600">
                    Continuous encrypted snapshots are geographically replicated across secure secondary sites to safeguard business continuity against hardware failures or regional incidents.
                  </p>
                </div>

                <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-bold text-gray-900 flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-violet-600" />
                    Vulnerability Testing & Audits
                  </div>
                  <p className="text-gray-600">
                    We conduct regular automated vulnerability scans, internal security assessments, and code audits to safeguard against the OWASP Top 10 web vulnerabilities.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* SECTION 7: RETENTION & DELETION */}
            <section id="section-retention" className="space-y-3 scroll-mt-6">
              <div className="flex items-center space-x-2 text-amber-600">
                <FileText className="w-5 h-5" />
                <span className="text-xs font-bold tracking-wider uppercase">
                  Lifecycle
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-gray-900">
                7. Data Retention, Portability & Permanent Deletion
              </h2>
              <p>
                We retain your data only for as long as necessary to fulfill the purposes outlined in this policy or as mandated by Nigerian legal, statutory, and accounting obligations:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-600">
                <li>
                  <strong>Active Accounts:</strong> We maintain your organization’s workspace and Service Data for the entire duration of your paid or active trial subscription.
                </li>
                <li>
                  <strong>Post-Termination Export Grace Period:</strong> Upon subscription termination or cancellation, Netrom provides a <strong>90-day grace period</strong> during which designated organization administrators can export all Service Data in standard, structured formats (CSV, JSON, PDF).
                </li>
                <li>
                  <strong>Permanent Cryptographic Purging:</strong> After the 90-day export window expires, all Service Data is automatically marked for irrevocable deletion and permanently scrubbed from our active production clusters and rotating backup archives within 30 days.
                </li>
                <li>
                  <strong>Financial & Tax Records:</strong> Under Nigerian tax statutes (FIRS guidelines and Companies and Allied Matters Act [CAMA 2020]), transaction invoices and payment receipts are retained for up to six (6) years.
                </li>
              </ul>
            </section>

            <hr className="border-gray-100" />

            {/* SECTION 8: YOUR RIGHTS UNDER NDPA 2023 */}
            <section id="section-rights" className="space-y-3 scroll-mt-6">
              <div className="flex items-center space-x-2 text-blue-600">
                <UserCheck className="w-5 h-5" />
                <span className="text-xs font-bold tracking-wider uppercase">
                  Statutory Rights
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-gray-900">
                8. Your Legal Rights as a Data Subject
              </h2>
              <p>
                Under Part VI of the <strong>Nigeria Data Protection Act (NDPA) 2023</strong> and comparable international privacy legislations, individuals are entitled to exercise the following enforceable rights:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-bold text-gray-900">1. Right of Access</div>
                  <p className="text-gray-600">
                    Confirm whether Netrom processes your personal data and obtain a full copy of all such records.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-bold text-gray-900">2. Right to Rectification</div>
                  <p className="text-gray-600">
                    Request immediate correction of inaccurate, outdated, or incomplete personal information.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-bold text-gray-900">3. Right to Erasure ("To Be Forgotten")</div>
                  <p className="text-gray-600">
                    Request permanent erasure of personal data where legal grounds for retention have lapsed.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-bold text-gray-900">4. Right to Data Portability</div>
                  <p className="text-gray-600">
                    Receive your data in a structured, machine-readable format to transfer to another system.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-bold text-gray-900">5. Right to Restrict Processing</div>
                  <p className="text-gray-600">
                    Limit the scope of data processing while a dispute or verification request is pending.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-bold text-gray-900">6. Right to Lodge a Regulatory Complaint</div>
                  <p className="text-gray-600">
                    You have the unencumbered right to lodge a complaint directly with the <strong>Nigeria Data Protection Commission (NDPC)</strong> at <a href="https://ndpc.gov.ng" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">ndpc.gov.ng</a>.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900">
                <strong>How to Exercise Your Rights:</strong> If you are an employee whose organization uses Netrom, please submit your request to your employer’s Netrom Administrator (Data Controller). For inquiries regarding direct accounts or website interactions, email our Data Protection Officer at <strong>dpo@primeguage.co</strong>.
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* SECTION 9: DPO CONTACT & REDRESS */}
            <section id="section-dpo" className="space-y-3 scroll-mt-6">
              <div className="flex items-center space-x-2 text-rose-600">
                <Mail className="w-5 h-5" />
                <span className="text-xs font-bold tracking-wider uppercase">
                  Contact & Governance
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-gray-900">
                9. Data Protection Officer (DPO) & Redress Mechanism
              </h2>
              <p>
                In compliance with Section 32 of the NDPA 2023, Primeguage Solutions Limited has appointed a dedicated Data Protection Officer to supervise privacy governance and respond to public inquiries.
              </p>

              <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-3 font-mono text-xs">
                <div className="text-blue-400 font-bold uppercase tracking-wider text-[11px]">
                  Official DPO Contact Office
                </div>
                <div className="space-y-1.5 text-gray-300">
                  <div className="flex items-center gap-2 flex-wrap">
                    <strong>Entity:</strong>
                    <PrimeguageLogo size="sm" />
                    <span>Primeguage Solutions Limited (Creators &amp; Operators of Netrom)</span>
                  </div>
                  <div><strong>Designation:</strong> Data Protection Officer &amp; Legal Counsel</div>
                  <div><strong>Email:</strong> dpo@primeguage.co &nbsp;|&nbsp; info@primeguage.co &nbsp;|&nbsp; privacy@netrom.ng</div>
                  <div><strong>Telephone:</strong> +234 803 543 7501</div>
                  <div><strong>Corporate Headquarters:</strong> No. 31 Adamu Ciroma Crescent, Jabi, Abuja, Federal Republic of Nigeria</div>
                  <div><strong>Response SLA:</strong> Formal acknowledgment within 48 hours; substantive resolution within 30 calendar days.</div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Version 3.2 • Effective September 2026 • Verified for NDPA 2023 Compliance</span>
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="w-full sm:w-auto bg-[#1d61e7] hover:bg-blue-700 text-white text-xs font-bold px-6 py-2.5 rounded-full transition-colors cursor-pointer shadow-md"
            >
              I Acknowledge &amp; Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
