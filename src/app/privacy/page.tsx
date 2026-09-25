"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  ArrowLeft,
  Shield,
  Lock,
  Globe,
  Mail,
  CheckCircle2,
  FileText,
  Server,
  AlertCircle,
  Building,
  CreditCard,
  KeyRound,
  FileCheck,
  Scale,
} from "lucide-react";
import { NetromLogo, PrimeguageLogo } from "@/components/common";

function PrivacyContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>("privacy");
  const [activeSubTab, setActiveSubTab] = useState<string>("summary");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "cookies") {
      setActiveCategory("privacy");
      setActiveSubTab("cookies");
    } else if (tab === "terms") {
      setActiveCategory("terms");
      setActiveSubTab("terms-service");
    } else if (tab === "payment" || tab === "commercial") {
      setActiveCategory("terms");
      setActiveSubTab("terms-payment");
    } else if (tab === "security") {
      setActiveCategory("security");
      setActiveSubTab("sec-overview");
    } else if (tab === "encryption" || tab === "crypto") {
      setActiveCategory("security");
      setActiveSubTab("sec-encryption");
    } else if (tab === "compliance") {
      setActiveCategory("compliance");
      setActiveSubTab("comp-ndpa");
    }
  }, [searchParams]);

  // Sidebar navigation sections matching the enterprise legal portal layout
  const navSections = [
    {
      id: "terms",
      title: "Terms",
      items: [
        { id: "terms-service", title: "Enterprise Service Agreement" },
        { id: "terms-payment", title: "Subscription & Commercial Terms" },
      ],
    },
    {
      id: "privacy",
      title: "Privacy",
      items: [
        { id: "summary", title: "Netrom Privacy Policy" },
        { id: "cookies", title: "Cookie & Tracking Policy" },
        { id: "dpa", title: "Data Processing Addendum (DPA)" },
      ],
    },
    {
      id: "security",
      title: "Security",
      items: [
        { id: "sec-overview", title: "ISO/IEC 27001 Security Framework" },
        { id: "sec-encryption", title: "Cryptographic Controls & Storage" },
      ],
    },
    {
      id: "compliance",
      title: "Compliance",
      items: [
        { id: "comp-ndpa", title: "NDPA 2023 Statutory Compliance" },
        { id: "comp-gdpr", title: "Cross-Border Transfers & Safeguards" },
      ],
    },
    {
      id: "policies",
      title: "Policies",
      items: [
        { id: "pol-acceptable", title: "Acceptable Use Policy (AUP)" },
        { id: "pol-vulnerability", title: "Coordinated Vulnerability Disclosure" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col">
      {/* Top Legal Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link href="/" className="flex items-center">
              <NetromLogo className="h-7 w-auto" />
            </Link>
            <span className="hidden sm:inline-block h-5 w-px bg-gray-300" />
            <div className="hidden sm:flex items-center space-x-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Developed by
              </span>
              <PrimeguageLogo className="h-5 w-auto" />
            </div>
            <span className="hidden sm:inline-block h-5 w-px bg-gray-300" />
            <span className="text-sm font-bold text-slate-800 hidden md:inline-block">
              Trust, Security &amp; Legal Governance
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-xs sm:text-sm font-bold text-slate-700 hover:text-[#1d61e7] flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Netrom Workspace</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Legal Two-Column Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex flex-col md:flex-row">
        {/* Left Sidebar Menu */}
        <aside className="w-full md:w-72 border-b md:border-b-0 md:border-r border-gray-200 bg-white shrink-0 py-4 md:py-6 select-none">
          <div className="px-5 pb-2.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
            Legal &amp; Regulatory Index
          </div>
          <nav className="space-y-1">
            {navSections.map((sec) => {
              const isOpen = activeCategory === sec.id;
              return (
                <div key={sec.id} className="border-b border-gray-100 last:border-0">
                  <button
                    onClick={() => {
                      if (activeCategory !== sec.id) {
                        setActiveCategory(sec.id);
                        setActiveSubTab(sec.items[0].id);
                      }
                    }}
                    className={`w-full flex items-center justify-between px-5 py-3 text-sm font-bold transition-colors text-left cursor-pointer ${
                      isOpen
                        ? "text-slate-900 bg-slate-50"
                        : "text-slate-700 hover:bg-slate-50/70 hover:text-slate-900"
                    }`}
                  >
                    <span>{sec.title}</span>
                    {isOpen ? (
                      <ChevronDown className="w-4 h-4 text-slate-600" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    )}
                  </button>

                  {/* Sub-items */}
                  {isOpen && (
                    <div className="bg-slate-50/70 py-1 pl-6 pr-3 space-y-0.5 border-t border-slate-100">
                      {sec.items.map((sub) => {
                        const isSubActive = activeSubTab === sub.id;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => setActiveSubTab(sub.id)}
                            className={`w-full text-left py-2 px-3 text-xs rounded-md transition-colors cursor-pointer ${
                              isSubActive
                                ? "text-[#1d61e7] bg-blue-50 font-extrabold shadow-2xs"
                                : "text-slate-600 hover:text-slate-900 hover:bg-gray-200/50 font-medium"
                            }`}
                          >
                            {sub.title}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="mt-8 px-5">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center space-x-2">
                <PrimeguageLogo className="h-5 w-auto" />
                <span className="font-extrabold text-slate-900 text-xs">
                  Legal Directorate
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 font-medium">
                Primeguage Solutions Limited operates Netrom in conformity with NDPA 2023, CAMA 2020, and ISO/IEC 27001:2022 ISMS standards.
              </p>
              <div className="pt-1 text-[11px] space-y-1">
                <div className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
                  DPO Inquiries
                </div>
                <a
                  href="mailto:dpo@primeguage.co"
                  className="text-[#1d61e7] font-bold hover:underline block truncate"
                >
                  dpo@primeguage.co
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Main Content Pane */}
        <main className="flex-1 min-w-0 bg-white">
          {/* ========================================================================= */}
          {/* TAB: PRIVACY POLICY SUMMARY & DETAILED POLICY                             */}
          {/* ========================================================================= */}
          {activeCategory === "privacy" && activeSubTab === "summary" && (
            <div>
              {/* Executive Summary Box matching the reference design */}
              <div className="bg-[#f2f4f7] px-6 sm:px-12 py-10 sm:py-12 border-b border-gray-200/80">
                <div className="max-w-4xl space-y-5">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
                    Summary of our Privacy Policy
                  </h1>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                    This Privacy Policy governs every digital portal, workflow application, application programming interface (API), and cloud infrastructure provided under the Netrom brand by{" "}
                    <span className="inline-flex items-center gap-1.5 font-bold text-slate-900 align-baseline">
                      <PrimeguageLogo className="h-4 sm:h-5 w-auto inline-block align-middle" />
                      Primeguage Solutions Limited
                    </span>
                    . It establishes our formal legal posture as both a <strong>Data Controller</strong> (for administrative, commercial, and platform access data) and a <strong>Data Processor</strong> (for all Service Data uploaded and processed by subscribing enterprise tenants).
                  </p>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                    <strong>Our Sovereign Privacy Commitment:</strong> Primeguage Solutions Limited has never sold, leased, traded, or monetized customer data, employee records, or corporate operational telemetry to third-party advertising brokers, and we never will. Netrom’s commercial viability is built exclusively upon transparent enterprise software subscription fees. We execute all data handling in rigorous adherence to the lawful bases, purpose limitations, and security safeguards enacted under the <strong>Nigeria Data Protection Act (NDPA) 2023</strong> and the <strong>ISO/IEC 27701:2019 Privacy Information Management System (PIMS)</strong> standard.
                  </p>
                </div>
              </div>

              {/* Main Policy Body */}
              <div className="px-6 sm:px-12 py-8 max-w-4xl space-y-12 text-slate-800 leading-relaxed font-medium text-sm sm:text-[15px]">
                <div className="text-right text-xs sm:text-sm text-slate-500 font-bold">
                  Effective Date: 1st January 2026 • Verified NDPA Compliance
                </div>

                {/* PART I */}
                <section className="space-y-5">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0066cc] tracking-tight">
                    Part I – Information Netrom Collects and Controls
                  </h2>

                  <p>
                    Pursuant to Sections 24 and 25 of the Nigeria Data Protection Act (NDPA) 2023,{" "}
                    <span className="inline-flex items-center gap-1 font-bold text-slate-900">
                      <PrimeguageLogo className="h-4 w-auto inline-block align-middle" />
                      Primeguage Solutions Limited
                    </span>{" "}
                    acts as a <strong>Data Controller</strong> in relation to personal data collected directly from individuals navigating our public portals, registering for software demonstrations, executing enterprise subscription agreements, or communicating with our corporate legal and technical support teams.
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 pt-2">
                    1.1 Categories of Data Collected Directly from You
                  </h3>
                  <p>
                    In our capacity as Data Controller, we collect only the personal information strictly necessary to establish and administer commercial engagements:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 text-sm">
                    <li>
                      <strong>Identity &amp; Account Credentials:</strong> Full legal name, official corporate email address, corporate telephone number, job title, company name, registered physical address, and cryptographically salted login credentials.
                    </li>
                    <li>
                      <strong>Commercial &amp; Financial Transaction Data:</strong> Registered corporate entity name, Tax Identification Number (TIN), Value Added Tax (VAT) registration numbers, billing contact details, and transaction settlement tokens. Raw card verification values (CVVs) and primary account numbers (PAN) are tokenized directly through PCI-DSS Level 1 certified Nigerian payment processors (such as Paystack and Flutterwave); Netrom never captures or stores unencrypted payment card information on its servers.
                    </li>
                    <li>
                      <strong>Inquiries &amp; Customer Support Records:</strong> Records of correspondence, demonstration requests, proof-of-concept requirements, support tickets, and webinar registration logs.
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 pt-2">
                    1.2 Automatically Collected System Telemetry &amp; Technical Logs
                  </h3>
                  <p>
                    To guarantee platform availability, monitor cybersecurity threats, and optimize multi-tenant infrastructure, Netrom automatically records telemetry logs:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 text-sm">
                    <li>
                      <strong>Network Identifiers &amp; Device Attributes:</strong> Internet Protocol (IP) address, operating system version, browser engine architecture, language locale, and connection routing parameters.
                    </li>
                    <li>
                      <strong>Authentication &amp; Security Audit Trails:</strong> Timestamped records of account authentications, Multi-Factor Authentication (MFA) challenges, failed login attempts, password resets, and session expiration events.
                    </li>
                    <li>
                      <strong>Application Health Metrics:</strong> Aggregated page render latencies, database query response times, and API exception logs utilized strictly for platform reliability under ISO/IEC 27001 standards.
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 pt-2">
                    1.3 Lawful Bases for Processing under Section 24 of the NDPA 2023
                  </h3>
                  <p>
                    Netrom processes personal data in our capacity as Data Controller only where recognized lawful grounds exist under Nigerian law:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-1">
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                      <strong className="text-slate-950 block font-extrabold">Contractual Performance (Sec. 24(1)(b))</strong>
                      <p className="text-slate-600 text-xs">
                        Provisioning workspace environments, authenticating authorized staff, fulfilling Service Level Agreements (SLAs), and processing corporate subscriptions.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                      <strong className="text-slate-950 block font-extrabold">Legal &amp; Statutory Compliance (Sec. 24(1)(c))</strong>
                      <p className="text-slate-600 text-xs">
                        Complying with corporate tax filings under CAMA 2020, FIRS accounting directives, and statutory mandates issued by the Nigeria Data Protection Commission (NDPC).
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                      <strong className="text-slate-950 block font-extrabold">Legitimate Enterprise Interests (Sec. 24(1)(e))</strong>
                      <p className="text-slate-600 text-xs">
                        Preventing credential brute-forcing, repelling distributed denial-of-service (DDoS) attacks, detecting unauthorized intrusion, and ensuring continuous platform integrity.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                      <strong className="text-slate-950 block font-extrabold">Explicit Consent (Sec. 24(1)(a))</strong>
                      <p className="text-slate-600 text-xs">
                        Disseminating optional quarterly research whitepapers, feature release notes, or event invitations, with an unencumbered right of withdrawal at any time.
                      </p>
                    </div>
                  </div>
                </section>

                <hr className="border-gray-200" />

                {/* PART II */}
                <section className="space-y-5">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0066cc] tracking-tight">
                    Part II – Information Netrom Processes on Your Behalf (Service Data)
                  </h2>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 text-xs sm:text-sm font-semibold">
                    <strong>Legal Status:</strong> When your organization utilizes Netrom applications to digitize and manage internal operations, <strong>your organization is the sole Data Controller</strong>.{" "}
                    <span className="inline-flex items-center gap-1 font-bold">
                      <PrimeguageLogo className="h-4 w-auto inline-block align-middle" />
                      Primeguage Solutions Limited
                    </span>{" "}
                    acts strictly as a <strong>Data Processor</strong> in accordance with Sections 24 and 29 of the NDPA 2023 and the ISO/IEC 27018 cloud privacy code of practice.
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 pt-2">
                    2.1 Definition, Scope and Ownership of Service Data
                  </h3>
                  <p>
                    Service Data encompasses all operational records, files, spreadsheets, communications, and structured entries submitted, transmitted, or generated within your organization's Netrom instance. Depending on the modules your organization activates, Service Data includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 text-sm">
                    <li>
                      <strong>Workforce &amp; Human Capital Data:</strong> Employee profiles, staff ID numbers, National Identity Numbers (NIN, where authorized by employer and law), departmental allocations, date of hire, biometric attendance records, leave allowances, and appraisal ratings.
                    </li>
                    <li>
                      <strong>Payroll &amp; Compensation Records:</strong> Salary structures, allowances, statutory deductions (PAYE tax tables, Pension Fund Administrator allocations, NHF), employee bank account details (NIBSS routing), and disbursement authorizations.
                    </li>
                    <li>
                      <strong>Requisitions &amp; Procurement Workflows:</strong> Internal fund requisitions, expense claims, vendor invoices, purchase orders, reimbursement receipts, and multi-tier approval audit trails.
                    </li>
                    <li>
                      <strong>Strategic Execution &amp; Project Deliverables:</strong> Corporate OKRs, departmental milestones, project task boards, internal approvals, and corporate documents stored in Netrom Files.
                    </li>
                  </ul>

                  <p className="font-bold text-slate-950 pt-1">
                    Your organization retains full legal title, intellectual property, and proprietary rights in and to all Service Data. Netrom holds no ownership claim whatsoever.
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 pt-2">
                    2.2 Statutory Undertakings of Netrom as Data Processor
                  </h3>
                  <p>
                    Pursuant to the NDPA 2023 and ISO/IEC 27701 PII Processor specifications, Netrom undertakes the following binding covenants:
                  </p>
                  <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                    <p>
                      <strong>A. Documented Instructions Only:</strong> We process Service Data strictly in accordance with your organization’s administrative configurations, contracted service scope, and explicit written directives.
                    </p>
                    <p>
                      <strong>B. Absolute Anti-Mining Covenant:</strong> We will never mine, scan, index, commercialize, or use your organization's confidential Service Data (including payroll tables, expense vouchers, or personnel files) for targeted marketing, external commercial exploitation, or training third-party public AI models.
                    </p>
                    <p>
                      <strong>C. Cryptographic Tenant Segregation:</strong> Every organization's records are logically isolated at the database layer. Database partition keys and tenant authentication guards prevent cross-tenant queries or unauthorized data exposure.
                    </p>
                    <p>
                      <strong>D. Confidentiality &amp; Vetting:</strong> All Netrom personnel with authorized administrative access to hosting infrastructure are subject to rigorous background vetting, mandatory NDPA privacy training, and binding non-disclosure agreements.
                    </p>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 pt-2">
                    2.3 Data Subject Access Requests (DSAR) Protocol
                  </h3>
                  <p>
                    If an individual employee, contractor, or customer whose personal data is hosted within your Netrom workspace contacts us directly to exercise rights under the NDPA 2023 (such as access, rectification, or erasure), our policy is to promptly notify your designated Organization Administrator within three (3) business days. We will provide reasonable technical capabilities to enable your administrator to fulfill the request.
                  </p>
                </section>

                <hr className="border-gray-200" />

                {/* PART III */}
                <section className="space-y-5">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0066cc] tracking-tight">
                    Part III – General Provisions, Security, Rights &amp; Governance
                  </h2>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 pt-2">
                    3.1 Information Security &amp; ISO/IEC 27001:2022 Safeguards
                  </h3>
                  <p>
                    <span className="inline-flex items-center gap-1 font-bold text-slate-900">
                      <PrimeguageLogo className="h-4 w-auto inline-block align-middle" />
                      Primeguage Solutions Limited
                    </span>{" "}
                    maintains an Information Security Management System (ISMS) engineered to align with <strong>ISO/IEC 27001:2022</strong> and <strong>ISO/IEC 27018:2019</strong> controls:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 text-sm">
                    <li>
                      <strong>Cryptographic Controls:</strong> All communications between user endpoints and Netrom systems are encrypted using Transport Layer Security (TLS 1.3). All database volumes, application backups, and file storage partitions are encrypted at rest using Advanced Encryption Standard with 256-bit keys (AES-256).
                    </li>
                    <li>
                      <strong>Access Governance:</strong> Infrastructure access is governed by Principle of Least Privilege (PoLP) and Zero Trust Network Architecture (ZTNA). Multi-Factor Authentication (MFA) is enforced across all administrative accounts.
                    </li>
                    <li>
                      <strong>Resilience &amp; Disaster Recovery:</strong> Automated write-ahead logging with geographically dispersed snapshot replication to ensure high availability and robust Recovery Time Objectives (RTO).
                    </li>
                    <li>
                      <strong>Vulnerability Governance:</strong> Automated static and dynamic application security testing (SAST/DAST) across CI/CD deployment pipelines, supplemented by periodic third-party penetration testing.
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 pt-2">
                    3.2 Data Retention &amp; Permanent Erasure Lifecycle (Sec. 25(1)(e) NDPA)
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 text-sm">
                    <li>
                      <strong>Active Subscriptions:</strong> Service Data is retained throughout the active term of your organization's subscription.
                    </li>
                    <li>
                      <strong>Post-Termination Export Grace Period:</strong> Following subscription termination, Netrom retains Service Data in an accessible, read-only state for <strong>ninety (90) calendar days</strong> to allow your organization to export all operational records in standard, structured formats (CSV, JSON, PDF).
                    </li>
                    <li>
                      <strong>Irrevocable Purging:</strong> Upon expiry of the 90-day grace period, all Service Data is automatically scheduled for cryptographic erasure and permanent physical destruction from production clusters and rotating backup archives in accordance with NIST SP 800-88 Rev. 1 media sanitization guidelines.
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 pt-2">
                    3.3 Cross-Border Data Transfers (Sections 41–43 NDPA 2023)
                  </h3>
                  <p>
                    Where personal data is transferred across international boundaries for secure cloud hosting, backup redundancy, or transactional relay processing, Netrom ensures compliance with Sections 41, 42, and 43 of the NDPA 2023:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 text-sm">
                    <li>
                      Transfers are made exclusively to jurisdictions evaluated by the Nigeria Data Protection Commission (NDPC) as providing an adequate level of data protection.
                    </li>
                    <li>
                      In the absence of an adequacy decision, transfers are governed by binding contractual commitments, including standard contractual clauses (SCCs) and Data Processing Agreements that guarantee enforceable data subject rights.
                    </li>
                    <li>
                      Sovereign on-premises and local Nigerian data residency configurations are available upon request for qualifying public sector and regulated financial institutions.
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 pt-2">
                    3.4 Statutory Data Subject Rights under the NDPA 2023
                  </h3>
                  <p>
                    Pursuant to Part VI (Sections 34–39) of the NDPA 2023, data subjects possess the following enforceable statutory rights:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-1">
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <strong className="text-slate-950 block font-bold">Right of Access (Section 34)</strong>
                      <p className="text-slate-600 text-xs">Confirm whether we process your data and receive structured copies within statutory timelines.</p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <strong className="text-slate-950 block font-bold">Right to Rectification (Section 35)</strong>
                      <p className="text-slate-600 text-xs">Correct inaccurate, incomplete, or out-of-date records without undue delay.</p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <strong className="text-slate-950 block font-bold">Right to Erasure (Section 36)</strong>
                      <p className="text-slate-600 text-xs">Request permanent deletion of personal data where lawful retention grounds have expired.</p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <strong className="text-slate-950 block font-bold">Right to Data Portability (Section 38)</strong>
                      <p className="text-slate-600 text-xs">Obtain your personal data in a structured, machine-readable format for transfer to another provider.</p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <strong className="text-slate-950 block font-bold">Right to Object &amp; Restrict</strong>
                      <p className="text-slate-600 text-xs">Object to processing based on legitimate interests or request restriction while a dispute is reviewed.</p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <strong className="text-slate-950 block font-bold">Right to Regulatory Recourse</strong>
                      <p className="text-slate-600 text-xs">
                        Lodge a formal complaint directly with the <strong>Nigeria Data Protection Commission (NDPC)</strong> via <a href="https://ndpc.gov.ng" target="_blank" rel="noopener noreferrer" className="text-[#1d61e7] underline font-bold">ndpc.gov.ng</a>.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 pt-2">
                    3.5 Data Protection Officer (DPO) Contact &amp; Statutory SLA
                  </h3>
                  <p>
                    Pursuant to Section 32 of the NDPA 2023,{" "}
                    <span className="inline-flex items-center gap-1 font-bold text-slate-900">
                      <PrimeguageLogo className="h-4 w-auto inline-block align-middle" />
                      Primeguage Solutions Limited
                    </span>{" "}
                    maintains a designated Data Protection Officer responsible for privacy governance and public regulatory interface:
                  </p>

                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs sm:text-sm font-sans mt-3">
                    <div className="font-extrabold text-slate-950 text-sm flex items-center gap-2">
                      <PrimeguageLogo className="h-5 w-auto" />
                      <span>Data Protection Officer &amp; Compliance Directorate</span>
                    </div>
                    <div className="space-y-1 text-slate-700 pt-1 font-medium">
                      <div><strong>Operating Entity:</strong> Primeguage Solutions Limited (Creators of Netrom)</div>
                      <div><strong>Designation:</strong> Data Protection Officer &amp; Legal Counsel</div>
                      <div><strong>Direct DPO Email:</strong> <a href="mailto:dpo@primeguage.co" className="text-[#1d61e7] underline font-bold">dpo@primeguage.co</a> &nbsp;|&nbsp; <a href="mailto:privacy@netrom.ng" className="text-[#1d61e7] underline font-bold">privacy@netrom.ng</a></div>
                      <div><strong>Corporate Headquarters:</strong> Victoria Island, Lagos State, Federal Republic of Nigeria</div>
                      <div><strong>Statutory SLA:</strong> Formal acknowledgment within forty-eight (48) hours; substantive resolution within thirty (30) calendar days.</div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB: SUBSCRIPTION & COMMERCIAL TERMS                                      */}
          {/* ========================================================================= */}
          {activeCategory === "terms" && activeSubTab === "terms-payment" && (
            <div className="p-6 sm:px-12 py-10 max-w-4xl space-y-8 text-slate-800 leading-relaxed font-medium text-sm sm:text-[15px]">
              <div className="space-y-2 border-b border-gray-200 pb-4">
                <div className="flex items-center space-x-2 text-[#0066cc]">
                  <CreditCard className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Commercial Policy
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Subscription &amp; Commercial Terms
                </h1>
                <p className="text-xs text-slate-500 font-bold">
                  Issued by Primeguage Solutions Limited • Effective January 2026
                </p>
              </div>

              <div className="bg-[#f2f4f7] p-6 rounded-xl space-y-3">
                <div className="flex items-center space-x-2">
                  <PrimeguageLogo className="h-5 w-auto" />
                  <h3 className="font-extrabold text-slate-950 text-base">
                    Commercial Governance Overview
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  These Subscription and Commercial Terms ("Commercial Terms") govern all invoicing, license provisioning, payment settlements, subscription renewals, tax withholdings, and commercial service credits for the Netrom Enterprise Operating System provided by <strong>Primeguage Solutions Limited</strong>.
                </p>
              </div>

              <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                  1. Subscription Models &amp; Licensing Metrics
                </h2>
                <p>
                  Netrom is licensed on a Software-as-a-Service (SaaS) subscription basis. License fees are calculated based on either: (a) Authorized Seat Metric (the total count of active employee user accounts provisioned in your tenant), or (b) Tiered Organizational Workspace packages as specified in your executed Order Form or Enterprise Master Services Agreement (MSA).
                </p>
                <p>
                  Administrative user accounts may provision or de-provision user seats dynamically. Any net addition of active users during an ongoing billing period shall be invoiced on a pro-rata basis for the remainder of that billing term.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                  2. Invoicing, Currency &amp; Payment Settlement
                </h2>
                <p>
                  Subscriptions are billed in advance on an annual or monthly cadence. Unless explicitly agreed otherwise in a written Enterprise Order Form:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 text-sm">
                  <li>
                    <strong>Currency of Invoicing:</strong> Invoices issued to Nigerian entities are denominated in Nigerian Naira (NGN). Invoices issued to international enterprise entities may be denominated in United States Dollars (USD).
                  </li>
                  <li>
                    <strong>Settlement Terms:</strong> Enterprise invoices are payable within <strong>fourteen (14) calendar days</strong> from the invoice date via electronic bank transfer (NIBSS / NACS), corporate debit card, or approved direct debit mandate.
                  </li>
                  <li>
                    <strong>Late Payment Penalties:</strong> Undisputed overdue amounts accrue interest at a statutory rate of 1.5% per month or the maximum permissible rate under Nigerian commercial law, whichever is lower, calculated daily from the due date until full liquidation.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                  3. Taxation &amp; Statutory Withholdings (CAMA 2020 &amp; FIRS)
                </h2>
                <p>
                  All subscription fees are exclusive of applicable statutory taxes. In accordance with the Value Added Tax (VAT) Act and Federal Inland Revenue Service (FIRS) guidelines:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 text-sm">
                  <li>
                    <strong>Value Added Tax (VAT):</strong> VAT at the statutory rate (currently 7.5%) will be added to all taxable invoices issued within the Federal Republic of Nigeria.
                  </li>
                  <li>
                    <strong>Withholding Tax (WHT):</strong> If your organization is legally mandated to deduct Withholding Tax under Nigerian tax laws, you must provide valid FIRS Withholding Tax Credit Notes to Primeguage Solutions Limited within sixty (60) days of invoice payment; otherwise, the withheld amount remains due and payable.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                  4. Service Level Commitments &amp; Uptime Credits
                </h2>
                <p>
                  Primeguage Solutions Limited guarantees a monthly system uptime of <strong>99.9%</strong> for core Netrom production workloads, excluding scheduled maintenance windows announced at least 72 hours in advance.
                </p>
                <p>
                  In the event that system availability falls below 99.9% in any calendar month, the customer shall be entitled to receive pro-rated Service Credits against their subsequent billing invoice upon formal submission of an SLA claim to <a href="mailto:billing@primeguage.co" className="text-[#1d61e7] underline font-bold">billing@primeguage.co</a> within thirty (30) days of the incident.
                </p>
              </section>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB: CRYPTOGRAPHIC CONTROLS & STORAGE                                     */}
          {/* ========================================================================= */}
          {activeCategory === "security" && activeSubTab === "sec-encryption" && (
            <div className="p-6 sm:px-12 py-10 max-w-4xl space-y-8 text-slate-800 leading-relaxed font-medium text-sm sm:text-[15px]">
              <div className="space-y-2 border-b border-gray-200 pb-4">
                <div className="flex items-center space-x-2 text-[#0066cc]">
                  <KeyRound className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Technical Specifications
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Cryptographic Controls, Key Management &amp; Storage Architecture
                </h1>
                <p className="text-xs text-slate-500 font-bold">
                  Audited under ISO/IEC 27001:2022 &amp; NIST SP 800-57 Standards
                </p>
              </div>

              <div className="bg-[#f2f4f7] p-6 rounded-xl space-y-3">
                <div className="flex items-center space-x-2">
                  <PrimeguageLogo className="h-5 w-auto" />
                  <h3 className="font-extrabold text-slate-950 text-base">
                    Cryptographic Architecture Mandate
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  This document provides technical and legal disclosure of the cryptographic mechanisms implemented across Netrom infrastructure by <strong>Primeguage Solutions Limited</strong> to ensure confidentiality, authenticity, and non-repudiation of customer operational records.
                </p>
              </div>

              <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                  1. Transport Layer Cryptography (In Transit)
                </h2>
                <p>
                  All external and internal network communications traversing Netrom public endpoints are protected using <strong>Transport Layer Security (TLS 1.3)</strong>. Backward compatibility is strictly restricted to TLS 1.2 with secure cipher suites. Insecure protocol negotiations (SSLv3, TLS 1.0, and TLS 1.1) are permanently disabled at our edge reverse-proxies.
                </p>
                <div className="p-4 bg-slate-900 text-white rounded-xl font-mono text-xs space-y-1">
                  <div className="text-emerald-400 font-bold">Authorized Cipher Suites:</div>
                  <div>• TLS_AES_256_GCM_SHA384</div>
                  <div>• TLS_CHACHA20_POLY1305_SHA256</div>
                  <div>• ECDHE-RSA-AES256-GCM-SHA384</div>
                  <div className="text-slate-400 pt-1 text-[11px]">Strict Transport Security (HSTS) enforced with 31,536,000s max-age.</div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                  2. Cryptography at Rest &amp; Storage Volumes
                </h2>
                <p>
                  Every database cluster, transaction log, file attachment repository, and automated backup archive is encrypted at rest utilizing the <strong>Advanced Encryption Standard with 256-bit symmetric keys in Galois/Counter Mode (AES-256-GCM)</strong>.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 text-sm">
                  <li>
                    <strong>Relational Database Engines:</strong> Encrypted using hardware-accelerated Transparent Data Encryption (TDE) with FIPS 140-2 validated cryptographic modules.
                  </li>
                  <li>
                    <strong>Document &amp; File Storage (Netrom Files):</strong> Objects uploaded to our S3-compatible enterprise storage partitions are encrypted server-side with unique envelope keys before being committed to non-volatile disks.
                  </li>
                  <li>
                    <strong>Encrypted Backup Archives:</strong> Snapshot archives are encrypted using distinct off-site master keys prior to replication across secondary geographic zones.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                  3. Key Management Service (KMS) &amp; HSM Key Rotation
                </h2>
                <p>
                  Cryptographic keys are managed through an enterprise Key Management Service (KMS) backed by certified Hardware Security Modules (HSM) conforming to <strong>FIPS 140-2 Level 3</strong>:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <strong className="text-slate-950 block font-bold">Envelope Key Architecture</strong>
                    <p className="text-slate-600 text-xs">Data encryption keys (DEKs) are enveloped using customer-partition master keys (KEKs), preventing direct key exposure.</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <strong className="text-slate-950 block font-bold">Automated Key Rotation</strong>
                    <p className="text-slate-600 text-xs">Master key encryption keys undergo automated annual rotation without requiring re-encryption of underlying datasets.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                  4. Cryptographic Erasure &amp; Sanitization (NIST SP 800-88)
                </h2>
                <p>
                  When an enterprise tenant terminates its subscription and the 90-day grace period lapses, Netrom initiates cryptographic erasure (crypto-shredding) by permanently destroying the tenant-specific Master Key from our HSM. Without the key, all historical encrypted blocks on disk are mathematically impossible to decipher, ensuring absolute data disposal.
                </p>
              </section>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB: ENTERPRISE SERVICE AGREEMENT                                         */}
          {/* ========================================================================= */}
          {activeCategory === "terms" && activeSubTab === "terms-service" && (
            <div className="p-6 sm:px-12 py-10 max-w-4xl space-y-8 text-slate-800 leading-relaxed font-medium text-sm sm:text-[15px]">
              <div className="space-y-2 border-b border-gray-200 pb-4">
                <div className="flex items-center space-x-2 text-[#0066cc]">
                  <Scale className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Binding Terms
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Enterprise Service Agreement
                </h1>
                <p className="text-xs text-slate-500 font-bold">
                  Governed by the Laws of the Federal Republic of Nigeria
                </p>
              </div>

              <div className="bg-[#f2f4f7] p-6 rounded-xl space-y-3">
                <div className="flex items-center space-x-2">
                  <PrimeguageLogo className="h-5 w-auto" />
                  <h3 className="font-extrabold text-slate-950 text-base">
                    Master Services Agreement (MSA) Summary
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  This Agreement constitutes a legally binding contract between{" "}
                  <strong>Primeguage Solutions Limited</strong> ("Netrom", "we", "us") and the corporate subscriber ("Customer", "you") authorizing enterprise workspace access.
                </p>
              </div>

              <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                  1. Provision of Workspace Services
                </h2>
                <p>
                  Primeguage Solutions Limited grants Customer a non-exclusive, non-sublicensable, non-transferable right to access and utilize Netrom applications for internal business management throughout the subscribed term.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                  2. Customer Warranties &amp; Acceptable Usage
                </h2>
                <p>
                  Customer represents and warrants that: (a) all staff credentials provisioned within the workspace belong to authorized corporate personnel; (b) Customer possesses all requisite consents under the NDPA 2023 to upload employee and operational data; and (c) Customer will not reverse-engineer or attempt to compromise Netrom platform code.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                  3. Limitation of Liability &amp; Dispute Resolution
                </h2>
                <p>
                  To the maximum extent permitted under Nigerian law, neither party shall be liable for indirect, punitive, or consequential damages. Any commercial dispute arising out of this Agreement shall first be submitted to good-faith mediation in Lagos, Nigeria, before resort to arbitration under the Arbitration and Mediation Act (AMA) 2023.
                </p>
              </section>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB: COOKIE POLICY (SUBTAB)                                               */}
          {/* ========================================================================= */}
          {activeCategory === "privacy" && activeSubTab === "cookies" && (
            <div className="p-6 sm:px-12 py-10 max-w-4xl space-y-6 text-slate-800 leading-relaxed font-medium text-sm sm:text-[15px]">
              <div className="space-y-2 border-b border-gray-200 pb-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                  Cookie &amp; Tracking Technology Policy
                </h1>
                <p className="text-xs text-slate-500 font-bold">
                  Governed by the NDPA 2023 &amp; ISO/IEC 27701 Guidelines • Effective January 2026
                </p>
              </div>

              <div className="bg-[#f2f4f7] p-6 rounded-xl space-y-3">
                <div className="flex items-center space-x-2">
                  <PrimeguageLogo className="h-5 w-auto" />
                  <h3 className="font-extrabold text-slate-950 text-base">
                    Anti-Surveillance Operating Philosophy
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Netrom employs cookies, session tokens, and local storage strictly to deliver authenticated workspace sessions, validate anti-CSRF security tokens, and maintain operational stability. <strong>We do not participate in cross-site behavioral advertising networks, commercial retargeting exchanges, or third-party data brokerage schemes.</strong>
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <h3 className="text-base font-bold text-slate-950">
                  Categories of Cookies We Deploy
                </h3>

                <div className="space-y-3">
                  <div className="border border-gray-200 rounded-xl p-4 space-y-1">
                    <div className="flex items-center justify-between font-bold text-slate-950">
                      <span>1. Strictly Necessary &amp; Security Cookies</span>
                      <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">Always Active</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Indispensable for authenticating account access, enforcing multi-tenant partition boundaries, verifying Cross-Site Request Forgery (CSRF) tokens, and routing API traffic across clustered infrastructure. These cannot be disabled.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-4 space-y-1">
                    <div className="flex items-center justify-between font-bold text-slate-950">
                      <span>2. Functional &amp; Workflow Preference Cookies</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full font-bold">Configurable</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Preserves your dashboard display preferences (e.g., Light or Dark mode, pinned or collapsed navigation drawers, and regional currency views) to ensure continuity between sessions.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-4 space-y-1">
                    <div className="flex items-center justify-between font-bold text-slate-950">
                      <span>3. First-Party Diagnostic Telemetry</span>
                      <span className="text-xs bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-full font-bold">Configurable</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Aggregated, privacy-preserving performance telemetry to identify frontend exceptions, render delays, and server latency bottlenecks. Data is never shared with third-party advertising brokers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB: DATA PROCESSING ADDENDUM (DPA)                                       */}
          {/* ========================================================================= */}
          {activeCategory === "privacy" && activeSubTab === "dpa" && (
            <div className="p-6 sm:px-12 py-10 max-w-4xl space-y-6 text-slate-800 leading-relaxed font-medium text-sm sm:text-[15px]">
              <div className="space-y-2 border-b border-gray-200 pb-4">
                <div className="flex items-center space-x-2 text-[#0066cc]">
                  <FileCheck className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Statutory Framework
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                  Data Processing Addendum (DPA)
                </h1>
                <p className="text-xs text-slate-500 font-bold">
                  Standard Contractual Terms Governing Enterprise Data Custodianship under the NDPA 2023 &amp; GDPR
                </p>
              </div>

              <p className="text-sm">
                This Data Processing Addendum ("DPA") supplements the Netrom Enterprise Service Agreement between{" "}
                <span className="inline-flex items-center gap-1 font-bold text-slate-900">
                  <PrimeguageLogo className="h-4 w-auto inline-block align-middle" />
                  Primeguage Solutions Limited
                </span>{" "}
                ("Processor") and the subscribing corporate entity ("Controller").
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                  <h3 className="font-extrabold text-slate-950 text-sm">Key Statutory Undertakings:</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                    <li>Processing strictly on documented controller instructions.</li>
                    <li>Technical &amp; organizational safeguards compliant with ISO/IEC 27001:2022.</li>
                    <li>Mandatory notification of data breaches to the Controller within forty-eight (48) hours of confirmation.</li>
                    <li>Assistance in executing Data Protection Impact Assessments (DPIAs) under Section 31 of the NDPA.</li>
                    <li>Prompt return or certified destruction of all Service Data upon contract expiration.</li>
                  </ul>
                </div>

                <p className="text-xs text-slate-500 font-medium">
                  Enterprise clients requiring a countersigned bilateral DPA for statutory compliance audits may request execution via <a href="mailto:dpo@primeguage.co" className="text-[#1d61e7] underline font-bold">dpo@primeguage.co</a>.
                </p>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB: SECURITY OVERVIEW                                                    */}
          {/* ========================================================================= */}
          {activeCategory === "security" && activeSubTab === "sec-overview" && (
            <div className="p-6 sm:px-12 py-10 max-w-4xl space-y-8 text-slate-800 leading-relaxed font-medium text-sm sm:text-[15px]">
              <div className="space-y-2 border-b border-gray-200 pb-4">
                <div className="flex items-center space-x-2 text-[#0066cc]">
                  <Shield className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Infrastructure Defense
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  ISO/IEC 27001 Security Framework &amp; Controls
                </h1>
                <p className="text-xs text-slate-500 font-bold">
                  Technical, Administrative, and Physical Safeguards Implemented by Primeguage Solutions Limited
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 border border-gray-200 rounded-xl space-y-2">
                  <div className="font-extrabold text-slate-950 flex items-center gap-1.5 text-sm">
                    <Lock className="w-4 h-4 text-[#1d61e7]" />
                    <span>256-Bit Cryptographic Defense</span>
                  </div>
                  <p className="text-slate-600 text-xs">
                    Continuous TLS 1.3 transport encryption. AES-256 block cipher encryption for all database tables, requisition attachments, and automated backups at rest.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-xl space-y-2">
                  <div className="font-extrabold text-slate-950 flex items-center gap-1.5 text-sm">
                    <Server className="w-4 h-4 text-[#1d61e7]" />
                    <span>Tenant Partition Isolation</span>
                  </div>
                  <p className="text-slate-600 text-xs">
                    Strict logical partition enforcement prevents cross-tenant data bleed. Role-based access control (RBAC) ensures users only see data permitted by their organizational role.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB: COMPLIANCE NDPA                                                      */}
          {/* ========================================================================= */}
          {activeCategory === "compliance" && (
            <div className="p-6 sm:px-12 py-10 max-w-4xl space-y-8 text-slate-800 leading-relaxed font-medium text-sm sm:text-[15px]">
              <div className="space-y-2 border-b border-gray-200 pb-4">
                <div className="flex items-center space-x-2 text-[#0066cc]">
                  <Scale className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Regulatory Mandate
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  NDPA 2023 Statutory Compliance &amp; Audit Charter
                </h1>
                <p className="text-xs text-slate-500 font-bold">
                  Certified Alignment with the Nigeria Data Protection Commission (NDPC)
                </p>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm space-y-3 text-slate-700">
                <div className="flex items-center space-x-2">
                  <PrimeguageLogo className="h-5 w-auto" />
                  <h3 className="font-extrabold text-slate-950 text-sm">
                    Statutory Compliance Statement
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Primeguage Solutions Limited operates Netrom in rigorous compliance with the <strong>Nigeria Data Protection Act (NDPA) 2023</strong> enacted by the Federal Republic of Nigeria. Our operations undergo periodic Data Protection Audits conducted by licensed Data Protection Compliance Organizations (DPCO) registered with the Nigeria Data Protection Commission (NDPC).
                </p>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB: POLICIES                                                             */}
          {/* ========================================================================= */}
          {activeCategory === "policies" && (
            <div className="p-6 sm:px-12 py-10 max-w-4xl space-y-8 text-slate-800 leading-relaxed font-medium text-sm sm:text-[15px]">
              <div className="space-y-2 border-b border-gray-200 pb-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Acceptable Use &amp; Operational Policies
                </h1>
                <p className="text-xs text-slate-500 font-bold">
                  Standard Operating Procedures for Workspace Tenants
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <p>
                  Users must not utilize Netrom infrastructure to transmit malware, engage in unauthorized penetration testing without prior authorization, or upload data in violation of applicable laws.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-slate-50 py-6 text-xs text-slate-600 font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <PrimeguageLogo className="h-5 w-auto" />
            <span>© 2026 Primeguage Solutions Limited. All rights reserved. • Netrom Legal Portal</span>
          </div>
          <div className="flex space-x-6 font-semibold">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/privacy?tab=terms" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy?tab=security" className="hover:text-slate-900 transition-colors">
              Security Overview
            </Link>
            <Link href="/privacy?tab=cookies" className="hover:text-slate-900 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <PrivacyContent />
    </Suspense>
  );
}
