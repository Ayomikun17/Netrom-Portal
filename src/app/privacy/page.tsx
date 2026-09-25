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
  CheckCircle,
  FileText,
  Server,
  AlertCircle,
  Building,
} from "lucide-react";
import { NetromLogo } from "@/components/common";

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
    } else if (tab === "security") {
      setActiveCategory("security");
      setActiveSubTab("sec-overview");
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
        { id: "comp-gdpr", title: "International Transfer & Safeguards" },
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
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      {/* Top Legal Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center">
              <NetromLogo className="h-7 w-auto" />
            </Link>
            <span className="hidden sm:inline-block h-5 w-px bg-gray-300" />
            <span className="text-sm font-semibold text-gray-700 hidden sm:inline-block">
              Trust &amp; Legal Center
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-xs sm:text-sm font-semibold text-gray-600 hover:text-[#1d61e7] flex items-center gap-1.5 transition-colors"
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
        <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200 bg-white shrink-0 py-4 md:py-6">
          <div className="px-5 pb-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
            Legal &amp; Governance Index
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
                    className={`w-full flex items-center justify-between px-5 py-3 text-sm font-semibold transition-colors text-left cursor-pointer ${
                      isOpen
                        ? "text-gray-900 bg-gray-50/70"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span>{sec.title}</span>
                    {isOpen ? (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    )}
                  </button>

                  {/* Sub-items */}
                  {isOpen && (
                    <div className="bg-gray-50/50 py-1 pl-6 pr-3 space-y-0.5 border-t border-gray-100">
                      {sec.items.map((sub) => {
                        const isSubActive = activeSubTab === sub.id;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => setActiveSubTab(sub.id)}
                            className={`w-full text-left py-2 px-3 text-xs rounded-md font-medium transition-colors cursor-pointer ${
                              isSubActive
                                ? "text-[#1d61e7] bg-blue-50 font-bold"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/60"
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
            <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl space-y-2 text-xs text-gray-600">
              <div className="font-bold text-gray-900 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#1d61e7]" />
                <span>Statutory Compliance</span>
              </div>
              <p className="text-[11px] leading-relaxed text-gray-500">
                Audited under the Nigeria Data Protection Act (NDPA) 2023 &amp; ISO/IEC 27701:2019 standards.
              </p>
              <div className="pt-1 text-[11px]">
                <strong className="text-gray-700">DPO Office:</strong>
                <a
                  href="mailto:dpo@primeguage.co"
                  className="text-[#1d61e7] hover:underline block truncate"
                >
                  dpo@primeguage.co
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Main Content Pane */}
        <main className="flex-1 min-w-0 bg-white">
          {/* TAB: PRIVACY POLICY SUMMARY & DETAILED POLICY */}
          {activeCategory === "privacy" && activeSubTab === "summary" && (
            <div>
              {/* Executive Summary Box matching the reference design */}
              <div className="bg-[#f2f4f7] px-6 sm:px-12 py-10 sm:py-12 border-b border-gray-200/80">
                <div className="max-w-3xl space-y-5">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                    Summary of our Privacy Policy
                  </h1>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                    This Privacy Policy governs every Netrom web portal, application, API, and digital service provided by <strong>Primeguage Solutions Limited</strong>. It outlines our legal posture as both a <strong>Data Controller</strong> (for information relating directly to your account, commercial relationship, and platform access) and as a <strong>Data Processor</strong> (for Service Data uploaded and managed by your organization).
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                    <strong>Our Sovereign Privacy Commitment:</strong> Netrom operates exclusively as an enterprise software provider. We do not monetize personal data, lease corporate records to commercial brokers, or deploy behavioral ad-tracking technologies across our workspace. We adhere to the foundational principles of lawful processing, purpose specification, data minimization, and technical security prescribed by the <strong>Nigeria Data Protection Act (NDPA) 2023</strong> and the <strong>ISO/IEC 27701 Privacy Information Management System (PIMS)</strong> standard.
                  </p>
                </div>
              </div>

              {/* Main Policy Body */}
              <div className="px-6 sm:px-12 py-8 max-w-4xl space-y-12 text-gray-700 leading-relaxed font-normal text-sm sm:text-base">
                <div className="text-right text-xs sm:text-sm text-gray-500 font-medium">
                  Last updated on: 1st January 2026
                </div>

                {/* PART I */}
                <section className="space-y-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0066cc]">
                    Part I – Information Netrom Collects and Controls
                  </h2>

                  <p>
                    In accordance with Section 24 and Section 25 of the NDPA 2023, Primeguage Solutions Limited acts as a <strong>Data Controller</strong> with respect to the personal information collected directly from individuals who visit our public portals, request product demonstrations, subscribe as account administrators, or communicate with our support personnel.
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 pt-1">
                    1. Categories of Information Collected Directly from You
                  </h3>
                  <p>
                    We collect personal data that you explicitly provide when creating an enterprise account or engaging our sales and technical support teams:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                    <li>
                      <strong>Account &amp; Administrative Data:</strong> Full legal name, official corporate email address, corporate telephone number, job designation, organization name, registered business address, and administrative credentials.
                    </li>
                    <li>
                      <strong>Commercial &amp; Billing Data:</strong> Registered entity name, Tax Identification Number (TIN), billing contacts, and payment transaction references. Sensitive payment card numbers are processed via certified PCI-DSS Level 1 compliant payment settlement gateways (e.g., Paystack, Flutterwave); Netrom never captures or stores raw Card Verification Values (CVV) on our application servers.
                    </li>
                    <li>
                      <strong>Commercial Inquiries &amp; Consultations:</strong> Records of communications, demo requests, onboarding schedules, support ticket attachments, and webinar registrations.
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 pt-2">
                    2. Information Collected Automatically Through Platform Telemetry
                  </h3>
                  <p>
                    To ensure service availability, monitor infrastructure performance, and protect our environment against cyber incidents, our systems automatically generate telemetry logs:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                    <li>
                      <strong>Device and Network Identifiers:</strong> Internet Protocol (IP) address, operating system architecture, browser engine user-agent, language locale, and routing information.
                    </li>
                    <li>
                      <strong>Operational &amp; Audit Logs:</strong> Timestamps of successful and failed authentication attempts, multi-factor authentication (MFA) challenges, password resets, and session lease periods.
                    </li>
                    <li>
                      <strong>Diagnostic Metrics:</strong> Aggregated page render latencies, API throughput, and error codes captured through first-party telemetry tools to diagnose stability bottlenecks.
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 pt-2">
                    3. Information Received from Authorized Third Parties
                  </h3>
                  <p>
                    If your organization enables enterprise Single Sign-On (SSO) integrations (such as Microsoft Entra ID, Google Workspace, or Okta SAML 2.0), we receive verified authentication tokens, directory profile names, and official email addresses strictly to validate authorized access to your tenant.
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 pt-2">
                    4. Lawful Bases for Processing under Section 24 of the NDPA 2023
                  </h3>
                  <p>
                    Netrom processes personal data in our capacity as a Data Controller only where a recognized legal basis exists under Nigerian law:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-1">
                    <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                      <strong className="text-gray-900 block">Performance of a Contract</strong>
                      <p className="text-gray-600 text-xs">
                        Provisioning workspace environments, authenticating authorized staff, fulfilling Service Level Agreements (SLAs), and processing corporate subscriptions.
                      </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                      <strong className="text-gray-900 block">Legal &amp; Regulatory Obligations</strong>
                      <p className="text-gray-600 text-xs">
                        Retaining financial ledgers for corporate tax audits under the Companies and Allied Matters Act (CAMA 2020) and complying with statutory directives.
                      </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                      <strong className="text-gray-900 block">Legitimate Enterprise Interests</strong>
                      <p className="text-gray-600 text-xs">
                        Defending against DDoS attacks, detecting credential compromise, validating software integrity, and maintaining high platform reliability.
                      </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                      <strong className="text-gray-900 block">Explicit Consent</strong>
                      <p className="text-gray-600 text-xs">
                        Sending optional product roadmap updates, release notes, or whitepapers, from which you may freely unsubscribe at any time.
                      </p>
                    </div>
                  </div>
                </section>

                <hr className="border-gray-200" />

                {/* PART II */}
                <section className="space-y-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0066cc]">
                    Part II – Information Netrom Processes on Your Behalf (Service Data)
                  </h2>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 text-xs sm:text-sm font-medium">
                    <strong>Legal Status:</strong> When your organization uses Netrom applications to digitize and manage internal operations, <strong>your organization is the Data Controller</strong>. Primeguage Solutions Limited operates strictly as a <strong>Data Processor</strong> under Section 24 and Section 29 of the NDPA 2023 and ISO/IEC 27018 cloud privacy standards.
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 pt-1">
                    1. Scope and Nature of Service Data
                  </h3>
                  <p>
                    Service Data encompasses all operational records, files, communications, and structured entries submitted, transmitted, or stored within your organization's Netrom instance. Depending on the modules your organization activates, this includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                    <li>
                      <strong>Workforce &amp; Human Capital Records:</strong> Employee profiles, staff identity numbers, department designations, date of employment, leave requests, attendance logs, and internal performance appraisals.
                    </li>
                    <li>
                      <strong>Payroll &amp; Financial Disclosures:</strong> Salary schedules, allowances, statutory deductions (PAYE, pension, NHF), employee bank account details (NIBSS routing), and payroll disbursement authorizations.
                    </li>
                    <li>
                      <strong>Requisitions &amp; Procurement Ledgers:</strong> Purchase orders, internal fund requests, expense vouchers, vendor contracts, receipts, and multi-tier approval audit trails.
                    </li>
                    <li>
                      <strong>Strategic Execution &amp; Task Deliverables:</strong> Corporate OKRs, departmental milestones, project task boards, internal approvals, and uploaded documents in Netrom Files.
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 pt-2">
                    2. Netrom's Legal Obligations as Data Processor
                  </h3>
                  <p>
                    Pursuant to the NDPA 2023 and ISO/IEC 27701 PII Processor specifications, Netrom undertakes the following binding obligations:
                  </p>
                  <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                    <p>
                      <strong>A. Documented Instructions Only:</strong> We process Service Data strictly in accordance with your organization’s administrative configurations, contracted service scope, and explicit written directives.
                    </p>
                    <p>
                      <strong>B. Zero Secondary Use or Model Training:</strong> We will never mine, scan, index, commercialize, or use your organization's confidential Service Data (including payroll tables, expense vouchers, or personnel files) for targeted marketing, external commercial exploitation, or training third-party public AI models.
                    </p>
                    <p>
                      <strong>C. Cryptographic Tenant Segregation:</strong> Every organization's records are logically isolated at the database layer. Database partition keys and tenant authentication guards prevent cross-tenant queries or unauthorized data exposure.
                    </p>
                    <p>
                      <strong>D. Confidentiality Commitments:</strong> All Netrom personnel with authorized administrative access to hosting infrastructure are subject to rigorous background vetting, mandatory NDPA privacy training, and binding non-disclosure agreements.
                    </p>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 pt-2">
                    3. Data Subject Access Requests (DSAR) Protocol
                  </h3>
                  <p>
                    If an individual employee, contractor, or customer whose personal data is hosted within your Netrom workspace contacts us directly to exercise rights under the NDPA 2023 (such as access, rectification, or erasure), our policy is to promptly notify your designated Organization Administrator within three (3) business days, unless prohibited by law. We will provide reasonable technical capabilities to enable your administrator to fulfill the request.
                  </p>
                </section>

                <hr className="border-gray-200" />

                {/* PART III */}
                <section className="space-y-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0066cc]">
                    Part III – General Provisions, Security, Rights &amp; Governance
                  </h2>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 pt-1">
                    1. Information Security &amp; ISO/IEC 27001:2022 Safeguards
                  </h3>
                  <p>
                    Primeguage Solutions Limited maintains an Information Security Management System (ISMS) engineered to align with <strong>ISO/IEC 27001:2022</strong> and <strong>ISO/IEC 27018:2019</strong> controls:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                    <li>
                      <strong>Cryptographic Controls:</strong> All communications between your devices and Netrom systems are encrypted using Transport Layer Security (TLS 1.3). All database volumes, application backups, and file storage partitions are encrypted at rest using Advanced Encryption Standard with 256-bit keys (AES-256).
                    </li>
                    <li>
                      <strong>Access Governance:</strong> Access to infrastructure is governed by Principle of Least Privilege (PoLP) and Zero Trust Network Architecture (ZTNA). Multi-Factor Authentication (MFA) and hardware security tokens are mandatory for all administrative access.
                    </li>
                    <li>
                      <strong>Resilience &amp; Disaster Recovery:</strong> Production databases are subject to continuous write-ahead logging with automated geographic snapshot replication to guarantee Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO).
                    </li>
                    <li>
                      <strong>Vulnerability Governance:</strong> We perform automated static and dynamic application security testing (SAST/DAST) across our CI/CD pipelines, supplemented by periodic third-party penetration testing.
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 pt-2">
                    2. Data Retention &amp; Permanent Erasure Lifecycle
                  </h3>
                  <p>
                    In accordance with the storage limitation principle of Section 25(1)(e) of the NDPA 2023:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
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

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 pt-2">
                    3. Cross-Border Data Transfers (Sections 41–43 NDPA 2023)
                  </h3>
                  <p>
                    Where personal data is transferred across international boundaries for secure cloud hosting, backup redundancy, or transactional relay processing, Netrom ensures compliance with Sections 41, 42, and 43 of the NDPA 2023:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
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

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 pt-2">
                    4. Enforceable Rights of Data Subjects
                  </h3>
                  <p>
                    Pursuant to Part VI (Sections 34–39) of the NDPA 2023, you and your employees enjoy the following statutory protections:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-1">
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                      <strong className="text-gray-900">Right of Access (Section 34)</strong>
                      <p className="text-gray-600 text-xs">Confirm whether we process your data and receive structured copies within statutory timelines.</p>
                    </div>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                      <strong className="text-gray-900">Right to Rectification (Section 35)</strong>
                      <p className="text-gray-600 text-xs">Correct inaccurate, incomplete, or out-of-date records without undue delay.</p>
                    </div>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                      <strong className="text-gray-900">Right to Erasure (Section 36)</strong>
                      <p className="text-gray-600 text-xs">Request permanent deletion of personal data where lawful retention grounds have expired.</p>
                    </div>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                      <strong className="text-gray-900">Right to Data Portability (Section 38)</strong>
                      <p className="text-gray-600 text-xs">Obtain your personal data in a structured, machine-readable format for transfer to another provider.</p>
                    </div>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                      <strong className="text-gray-900">Right to Object &amp; Restrict</strong>
                      <p className="text-gray-600 text-xs">Object to processing based on legitimate interests or request restriction while a dispute is reviewed.</p>
                    </div>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                      <strong className="text-gray-900">Right to Regulatory Recourse</strong>
                      <p className="text-gray-600 text-xs">
                        Lodge a formal complaint directly with the <strong>Nigeria Data Protection Commission (NDPC)</strong> via <a href="https://ndpc.gov.ng" target="_blank" rel="noopener noreferrer" className="text-[#1d61e7] underline">ndpc.gov.ng</a>.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 pt-2">
                    5. Protection of Minors (Section 29 NDPA 2023)
                  </h3>
                  <p>
                    Netrom is strictly an enterprise business-to-business operating platform designed for corporate entities, managers, and professional staff. Our software and websites are not directed toward children under eighteen (18) years of age. We do not knowingly solicit or collect personal information from minors.
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 pt-2">
                    6. Statutory Data Protection Officer (DPO) Contact
                  </h3>
                  <p>
                    Pursuant to Section 32 of the NDPA 2023, Primeguage Solutions Limited has appointed a designated Data Protection Officer responsible for overseeing regulatory compliance, executing Data Protection Impact Assessments (DPIAs), and serving as the primary contact point for data subjects and regulatory authorities:
                  </p>

                  <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-2 text-xs sm:text-sm font-sans mt-3">
                    <div className="font-bold text-gray-900 text-sm flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-[#1d61e7]" />
                      <span>Data Protection Officer &amp; Compliance Directorate</span>
                    </div>
                    <div className="space-y-1 text-gray-700 pt-1">
                      <div><strong>Entity:</strong> Primeguage Solutions Limited (Creators &amp; Operators of Netrom)</div>
                      <div><strong>Attn:</strong> Data Protection Officer</div>
                      <div><strong>Official Email:</strong> <a href="mailto:dpo@primeguage.co" className="text-[#1d61e7] underline font-semibold">dpo@primeguage.co</a> &nbsp;|&nbsp; <a href="mailto:privacy@netrom.ng" className="text-[#1d61e7] underline font-semibold">privacy@netrom.ng</a></div>
                      <div><strong>Registered Corporate Address:</strong> Victoria Island, Lagos State, Federal Republic of Nigeria</div>
                      <div><strong>Statutory SLA:</strong> Acknowledgment within forty-eight (48) hours; formal response and resolution within thirty (30) calendar days.</div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}

          {/* TAB: COOKIES */}
          {activeCategory === "privacy" && activeSubTab === "cookies" && (
            <div className="p-6 sm:px-12 py-10 max-w-4xl space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
              <div className="space-y-2 border-b border-gray-200 pb-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  Cookie &amp; Tracking Technology Policy
                </h1>
                <p className="text-xs text-gray-500 font-medium">
                  Governed by the NDPA 2023 &amp; ISO/IEC 27701 Privacy Guidelines • Effective January 2026
                </p>
              </div>

              <div className="bg-[#f2f4f7] p-6 rounded-xl space-y-3">
                <h3 className="font-bold text-gray-900 text-base">
                  Netrom's Anti-Surveillance Operating Philosophy
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Netrom employs cookies, session tokens, and local storage strictly to deliver authenticated workspace sessions, validate anti-CSRF security tokens, and maintain operational stability. <strong>We do not participate in cross-site behavioral advertising networks, commercial retargeting exchanges, or third-party data brokerage schemes.</strong>
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <h3 className="text-base font-bold text-gray-900">
                  Categories of Cookies We Deploy
                </h3>

                <div className="space-y-3">
                  <div className="border border-gray-200 rounded-xl p-4 space-y-1">
                    <div className="flex items-center justify-between font-bold text-gray-900">
                      <span>1. Strictly Necessary &amp; Security Cookies</span>
                      <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">Always Active</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Indispensable for authenticating account access, enforcing multi-tenant partition boundaries, verifying Cross-Site Request Forgery (CSRF) tokens, and routing API traffic across clustered infrastructure. These cannot be disabled.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-4 space-y-1">
                    <div className="flex items-center justify-between font-bold text-gray-900">
                      <span>2. Functional &amp; Workflow Preference Cookies</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">Configurable</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Preserves your dashboard display preferences (e.g., Light or Dark mode, pinned or collapsed navigation drawers, and regional currency views) to ensure continuity between sessions.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-4 space-y-1">
                    <div className="flex items-center justify-between font-bold text-gray-900">
                      <span>3. First-Party Diagnostic Telemetry</span>
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-bold">Configurable</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Aggregated, privacy-preserving performance telemetry to identify frontend exceptions, render delays, and server latency bottlenecks. Data is never shared with third-party advertising brokers.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    Managing Cookie Preferences
                  </h4>
                  <p className="text-xs text-gray-600">
                    You can adjust your cookie choices at any time through our interactive banner or within your web browser settings. Disabling essential cookies will prevent authentication to the Netrom workspace.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB: DATA PROCESSING ADDENDUM (DPA) */}
          {activeCategory === "privacy" && activeSubTab === "dpa" && (
            <div className="p-6 sm:px-12 py-10 max-w-4xl space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
              <div className="space-y-2 border-b border-gray-200 pb-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  Data Processing Addendum (DPA)
                </h1>
                <p className="text-xs text-gray-500 font-medium">
                  Standard Contractual Terms Governing Enterprise Data Custodianship under the NDPA 2023 &amp; GDPR
                </p>
              </div>

              <p className="text-sm">
                This Data Processing Addendum ("DPA") supplements the Netrom Enterprise Service Agreement between Primeguage Solutions Limited ("Processor") and the subscribing corporate entity ("Controller").
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-gray-600">
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                  <h3 className="font-bold text-gray-900 text-sm">Key Governance Commitments:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>Processing strictly on documented controller instructions.</li>
                    <li>Technical &amp; organizational safeguards compliant with ISO/IEC 27001:2022.</li>
                    <li>Mandatory notification of data breaches to the Controller within forty-eight (48) hours of confirmation.</li>
                    <li>Assistance in executing Data Protection Impact Assessments (DPIAs) under Section 31 of the NDPA.</li>
                    <li>Prompt return or certified destruction of all Service Data upon contract expiration.</li>
                  </ul>
                </div>

                <p className="text-xs text-gray-500">
                  Enterprise clients requiring a countersigned bilateral DPA for statutory compliance audits may request execution via <a href="mailto:dpo@primeguage.co" className="text-[#1d61e7] underline">dpo@primeguage.co</a>.
                </p>
              </div>
            </div>
          )}

          {/* TAB: TERMS OF SERVICE */}
          {activeCategory === "terms" && (
            <div className="p-6 sm:px-12 py-10 max-w-4xl space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
              <div className="space-y-2 border-b border-gray-200 pb-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  Enterprise Service Agreement
                </h1>
                <p className="text-xs text-gray-500 font-medium">
                  Standard Commercial Terms &amp; Acceptable Use Conditions
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-gray-600">
                <h3 className="font-bold text-gray-900 text-sm">1. Software License &amp; Scope of Use</h3>
                <p>
                  Primeguage Solutions Limited grants your organization a non-exclusive, non-transferable enterprise subscription to access Netrom applications in accordance with your contracted tier.
                </p>

                <h3 className="font-bold text-gray-900 text-sm">2. Sole Ownership of Service Data</h3>
                <p>
                  The subscribing customer retains all legal title, copyright, proprietary rights, and intellectual property rights in and to all Service Data uploaded, generated, or processed through Netrom.
                </p>

                <h3 className="font-bold text-gray-900 text-sm">3. Service Level Commitments &amp; Availability</h3>
                <p>
                  Netrom targets 99.9% application uptime for core production modules, backed by redundant cloud clustering and automated failover architecture.
                </p>
              </div>
            </div>
          )}

          {/* TAB: SECURITY */}
          {activeCategory === "security" && (
            <div className="p-6 sm:px-12 py-10 max-w-4xl space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
              <div className="space-y-2 border-b border-gray-200 pb-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  ISO/IEC 27001 Security Framework &amp; Controls
                </h1>
                <p className="text-xs text-gray-500 font-medium">
                  Technical, Administrative, and Physical Safeguards
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 border border-gray-200 rounded-xl space-y-1.5">
                  <div className="font-bold text-gray-900 flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-[#1d61e7]" />
                    <span>256-Bit Cryptographic Defense</span>
                  </div>
                  <p className="text-gray-600">
                    Continuous TLS 1.3 transport encryption. AES-256 block cipher encryption for all database tables, requisition attachments, and automated backups at rest.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-xl space-y-1.5">
                  <div className="font-bold text-gray-900 flex items-center gap-1.5">
                    <Server className="w-4 h-4 text-[#1d61e7]" />
                    <span>Tenant Partition Isolation</span>
                  </div>
                  <p className="text-gray-600">
                    Strict logical partition enforcement prevents cross-tenant data bleed. Role-based access control (RBAC) ensures users only see data permitted by their organizational role.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB: COMPLIANCE */}
          {activeCategory === "compliance" && (
            <div className="p-6 sm:px-12 py-10 max-w-4xl space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
              <div className="space-y-2 border-b border-gray-200 pb-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  Regulatory Compliance &amp; Statutory Alignment
                </h1>
                <p className="text-xs text-gray-500 font-medium">
                  Nigeria Data Protection Act (NDPA) 2023 &amp; NDPC Regulatory Guidelines
                </p>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-xs space-y-2 text-gray-600">
                <p>
                  Primeguage Solutions Limited operates Netrom in rigorous compliance with the <strong>Nigeria Data Protection Act (NDPA) 2023</strong> enacted by the Federal Republic of Nigeria. Our operations undergo periodic Data Protection Audits conducted by licensed Data Protection Compliance Organizations (DPCO) registered with the Nigeria Data Protection Commission (NDPC).
                </p>
              </div>
            </div>
          )}

          {/* TAB: POLICIES */}
          {activeCategory === "policies" && (
            <div className="p-6 sm:px-12 py-10 max-w-4xl space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
              <div className="space-y-2 border-b border-gray-200 pb-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  Acceptable Use &amp; Operational Policies
                </h1>
                <p className="text-xs text-gray-500 font-medium">
                  Standard Operating Procedures for Workspace Tenants
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                <p>
                  Users must not utilize Netrom infrastructure to transmit malware, engage in unauthorized penetration testing without prior authorization, or upload data in violation of applicable laws.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-6 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © 2026 Primeguage Solutions Limited. All rights reserved. • Netrom Enterprise Trust &amp; Legal Center
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/privacy?tab=terms" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy?tab=security" className="hover:text-gray-900 transition-colors">
              Security Overview
            </Link>
            <Link href="/privacy?tab=cookies" className="hover:text-gray-900 transition-colors">
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
