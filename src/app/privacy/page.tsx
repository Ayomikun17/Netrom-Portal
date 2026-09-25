"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  ArrowLeft,
  ExternalLink,
  Shield,
  Lock,
  Globe,
  Mail,
  CheckCircle,
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
      setActiveSubTab("overview");
    } else if (tab === "compliance") {
      setActiveCategory("compliance");
      setActiveSubTab("ndpa");
    }
  }, [searchParams]);

  // Sidebar navigation sections matching Zoho's layout
  const navSections = [
    {
      id: "terms",
      title: "Terms",
      items: [
        { id: "terms-service", title: "Terms of Service" },
        { id: "terms-payment", title: "Subscription & Payments" },
      ],
    },
    {
      id: "privacy",
      title: "Privacy",
      items: [
        { id: "summary", title: "Privacy Policy" },
        { id: "cookies", title: "Cookie Policy" },
        { id: "dpa", title: "Data Processing Addendum" },
      ],
    },
    {
      id: "security",
      title: "Security",
      items: [
        { id: "sec-overview", title: "Security Overview" },
        { id: "sec-encryption", title: "Encryption & Architecture" },
      ],
    },
    {
      id: "compliance",
      title: "Compliance",
      items: [
        { id: "comp-ndpa", title: "NDPA 2023 (Nigeria)" },
        { id: "comp-gdpr", title: "Global Privacy Standards" },
      ],
    },
    {
      id: "policies",
      title: "Policies",
      items: [
        { id: "pol-acceptable", title: "Acceptable Use Policy" },
        { id: "pol-vulnerability", title: "Vulnerability Disclosure" },
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
              <span>Back to Netrom</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Legal Two-Column Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex flex-col md:flex-row">
        {/* Left Sidebar Menu */}
        <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200 bg-white shrink-0 py-4 md:py-6">
          <div className="px-4 pb-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
            Legal &amp; Compliance
          </div>
          <nav className="space-y-1">
            {navSections.map((sec) => {
              const isOpen = activeCategory === sec.id;
              return (
                <div key={sec.id} className="border-b border-gray-100 last:border-0">
                  <button
                    onClick={() => {
                      if (activeCategory === sec.id) {
                        // toggle
                      } else {
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
                <span>Need legal assistance?</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Reach our corporate legal and compliance team directly at:
              </p>
              <a
                href="mailto:privacy@netrom.ng"
                className="text-[#1d61e7] font-semibold text-xs hover:underline block"
              >
                privacy@netrom.ng
              </a>
            </div>
          </div>
        </aside>

        {/* Right Main Content Pane */}
        <main className="flex-1 min-w-0 bg-white">
          {activeCategory === "privacy" && activeSubTab === "summary" && (
            <div>
              {/* Light Grey Banner matching Image 2 */}
              <div className="bg-[#f2f4f7] px-6 sm:px-12 py-10 sm:py-12 border-b border-gray-200/80">
                <div className="max-w-3xl space-y-5">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                    Summary of our Privacy Policy
                  </h1>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                    It covers every Netrom website that links here, and all of the products and services contained on those websites. The detailed policy follows the same structure as this summary and constitutes the actual legal document.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                    <strong>Our privacy commitment:</strong> Netrom has never sold your information to someone else for advertising, or made money by showing you other people's ads, and we never will. This has been our approach from day one, and we remain committed to it. This policy tells you what information we collect from you, what we do with it, who can access it, and what you can do about it.
                  </p>
                </div>
              </div>

              {/* White Detailed Policy Content Area matching Image 2 */}
              <div className="px-6 sm:px-12 py-8 max-w-4xl space-y-10 text-gray-700 leading-relaxed font-normal text-sm sm:text-base">
                {/* Last Updated Date right aligned */}
                <div className="text-right text-xs sm:text-sm text-gray-500 font-medium">
                  Last updated on: 22nd Dec 2025.
                </div>

                {/* PART I */}
                <section className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0066cc]">
                    Part I – Information Netrom collects and controls
                  </h2>

                  <p>
                    We only collect the information that we actually need. Some of that is information that you actively give us when you sign up for an account, register for an event, ask for customer support, or buy something from us. We store your name and contact information, but we don't store credit card numbers (except with your permission and in one of our secured payment gateways).
                  </p>

                  <p>
                    When you visit one of our websites or use our software, we automatically log some basic information like how you got to the site, where you navigated within it, and what features and settings you use. We use this information to improve our websites and services and to drive new product development.
                  </p>

                  <p>
                    Sometimes we receive information indirectly. If you ask about our products through one of our referral programs or reselling partners, or sign in to one of our products through an authentication service provider like LinkedIn or Google, they'll pass on your contact information to us. We'll use that information to address the request that you made. If you engage with our brand on social media (for instance, liking, retweeting, or mentioning us), we will have access to your interactions and profile information. We'll still have that information even if you later remove it from the social media site.
                  </p>

                  <h3 className="text-lg font-bold text-gray-900 pt-2">
                    What we do with your information
                  </h3>
                  <p>
                    We use your information to provide the services you've requested, create and maintain your accounts, and keep an eye out for unauthorized activity on your accounts. We also use it to communicate with you about the products you're currently using, your customer support requests, new products you may like, chances for you to give us feedback, and policy updates. We analyze the information we collect to understand how users use our products and services, to monitor and prevent problems, and to improve our products and services.
                  </p>
                  <p>
                    We are required to have a lawful basis for collecting and processing your information. In most cases, we have your consent or we need the information to provide the service you've requested from us. When that's not the case, we must demonstrate that we have another lawful basis, such as our legitimate business interests, or statutory obligations under the <strong>Nigeria Data Protection Act (NDPA 2023)</strong>.
                  </p>

                  <p>
                    You can decline certain kinds of information use either by not providing the information in the first place or by opting out later. You can also disable cookies to prevent your browser from giving us information, but if you do so, certain website features may not work properly. We completely disable non-essential and intrusive third-party cookies on all Netrom websites and products.
                  </p>

                  <p>
                    We limit access to your personal information to our employees and contractors who have a legitimate need to use it. If we share your information with other parties (like developers, service providers, registrar partners, and resellers), they must have appropriate security measures and a valid reason to use your information, typically to serve you.
                  </p>

                  <p>
                    Under the NDPA 2023, you have certain rights with respect to your information (including access, rectification, erasure, restriction of processing, data portability, and the right to object or complain to the Nigeria Data Protection Commission). Netrom undertakes to provide you with the same rights no matter where you choose to live.
                  </p>

                  <p>
                    We keep your personal information for as long as it is required for the purposes stated in this Privacy Policy. When we no longer have a legitimate need to process your information, we will delete, anonymize, or isolate your information, whichever is appropriate.
                  </p>
                </section>

                <hr className="border-gray-200" />

                {/* PART II */}
                <section className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0066cc]">
                    Part II – Information that Netrom processes on your behalf
                  </h2>

                  <p>
                    If you handle other people's data using Netrom apps, such as information about your employees, financial requisitions, payroll numbers, tasks, or customers, you are entrusting that data to us. We refer to this as <strong>Service Data</strong>.
                  </p>

                  <p>
                    You own your service data. We protect it, limit access to it, and only process it according to your instructions. You may access it, share it through third-party integrations, and request that we export or delete it.
                  </p>

                  <p>
                    We hold the data in your account as long as you choose to use Netrom Services. After you terminate your account, your data will be safely held for a 90-day grace period to allow you to export your records, after which it will be permanently deleted from our active databases and rolling backups.
                  </p>

                  <p>
                    If you are in Nigeria or the European Union and you believe that someone has entrusted your information to us for processing (for instance, your employer or a company whose services you use), you may request certain actions with respect to your data. To exercise those rights, you should contact the person or company that entrusted the data to us, and we will assist them in fulfilling your request.
                  </p>
                </section>

                <hr className="border-gray-200" />

                {/* PART III */}
                <section className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0066cc]">
                    Part III – General
                  </h2>

                  <p>
                    There are some limitations to the privacy we can promise you. We will disclose personal information if it's necessary to comply with a legal obligation, prevent fraud, enforce an agreement, or protect the safety of our users. We do not currently honor Do Not Track signals from internet browsers; when a universal standard for processing them emerges, we will follow it.
                  </p>

                  <p>
                    Third-party websites and social media widgets have their own separate privacy policies. Always check the relevant privacy policy before sharing personal information with third parties.
                  </p>

                  <p>
                    You can always contact us to: ask questions about our privacy practices, request a Data Processing Addendum (DPA), alert us if you believe we have inadvertently collected personal information from a minor, or ask to have your personal information removed from our blogs or forums.
                  </p>

                  <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-2 mt-4">
                    <h4 className="font-bold text-gray-900 text-sm">
                      Data Protection Officer &amp; Contact Details
                    </h4>
                    <p className="text-xs text-gray-600">
                      If you have any questions about this Privacy Policy or Netrom's data governance practices, please reach out to our Data Protection Officer:
                    </p>
                    <div className="font-mono text-xs text-gray-800 space-y-1 pt-1">
                      <div><strong>Entity:</strong> Primeguage Solutions Limited</div>
                      <div><strong>Email:</strong> dpo@primeguage.co | privacy@netrom.ng</div>
                      <div><strong>Location:</strong> Victoria Island, Lagos State, Nigeria</div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}

          {/* COOKIE POLICY SUB-TAB */}
          {activeCategory === "privacy" && activeSubTab === "cookies" && (
            <div className="p-6 sm:p-12 max-w-4xl space-y-6 text-gray-700 leading-relaxed">
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  Cookie Policy
                </h1>
                <p className="text-sm text-gray-500">
                  Last updated: December 2025
                </p>
              </div>

              <div className="bg-[#f2f4f7] p-6 rounded-xl space-y-3">
                <h3 className="font-bold text-gray-900">
                  Netrom's Cookie Philosophy
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We use cookies and similar technologies to remember your preferences, secure your workspace sessions, and diagnose performance. <strong>We do not use third-party advertising cookies or participate in cross-site tracking ad networks.</strong>
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <h3 className="text-base font-bold text-gray-900">
                  Categories of Cookies We Use
                </h3>
                <div className="space-y-3">
                  <div className="border border-gray-200 rounded-xl p-4 space-y-1">
                    <div className="flex items-center justify-between font-bold text-gray-900">
                      <span>1. Strictly Necessary Cookies</span>
                      <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">Always Active</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Required for login authentication, secure routing, CSRF protection, and load balancing across our infrastructure.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-4 space-y-1">
                    <div className="flex items-center justify-between font-bold text-gray-900">
                      <span>2. Functional Cookies</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">Preferences</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Saves your UI settings such as theme mode (dark/light), pinned or collapsed sidebars, and recent workspace views.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-4 space-y-1">
                    <div className="flex items-center justify-between font-bold text-gray-900">
                      <span>3. Performance &amp; Analytics Cookies</span>
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-bold">Telemetry</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      First-party metrics that measure page load speed and application errors to ensure smooth workspace operation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DPA SUB-TAB */}
          {activeCategory === "privacy" && activeSubTab === "dpa" && (
            <div className="p-6 sm:p-12 max-w-4xl space-y-6 text-gray-700 leading-relaxed">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Data Processing Addendum (DPA)
              </h1>
              <p className="text-sm">
                This Data Processing Addendum ("DPA") governs the processing of personal data by Primeguage Solutions Limited on behalf of enterprise customers using Netrom.
              </p>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-xs space-y-2">
                <p>
                  Enterprise customers requiring a signed DPA for NDPA 2023 or GDPR audit compliance can request our standard executed agreement by emailing <a href="mailto:dpo@primeguage.co" className="text-[#1d61e7] underline">dpo@primeguage.co</a>.
                </p>
              </div>
            </div>
          )}

          {/* TERMS OF SERVICE */}
          {activeCategory === "terms" && (
            <div className="p-6 sm:p-12 max-w-4xl space-y-6 text-gray-700 leading-relaxed">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Terms of Service
              </h1>
              <p className="text-sm">
                These terms govern your organization’s access to and use of Netrom enterprise workspace software.
              </p>
              <div className="space-y-4 text-xs sm:text-sm text-gray-600">
                <h3 className="font-bold text-gray-900">1. Acceptance of Terms</h3>
                <p>
                  By creating a Netrom workspace or accessing our software services, your organization agrees to be bound by these terms.
                </p>
                <h3 className="font-bold text-gray-900">2. Customer Ownership of Content</h3>
                <p>
                  All workflows, documents, requisitions, payroll data, and employee records remain the exclusive property of your organization.
                </p>
              </div>
            </div>
          )}

          {/* SECURITY */}
          {activeCategory === "security" && (
            <div className="p-6 sm:p-12 max-w-4xl space-y-6 text-gray-700 leading-relaxed">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Security Overview &amp; Architecture
              </h1>
              <p className="text-sm">
                Netrom is engineered with enterprise-grade defenses to safeguard your mission-critical operations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-bold text-gray-900">256-Bit TLS &amp; AES Encryption</div>
                  <p className="text-gray-600">All data in transit is protected via TLS 1.3. Databases and volume storage are encrypted at rest using AES-256.</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-xl space-y-1">
                  <div className="font-bold text-gray-900">Multi-Tenant Logical Isolation</div>
                  <p className="text-gray-600">Every organization's records reside behind strict cryptographic boundaries to prevent cross-tenant exposure.</p>
                </div>
              </div>
            </div>
          )}

          {/* COMPLIANCE */}
          {activeCategory === "compliance" && (
            <div className="p-6 sm:p-12 max-w-4xl space-y-6 text-gray-700 leading-relaxed">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Regulatory Compliance (NDPA 2023)
              </h1>
              <p className="text-sm">
                Primeguage Solutions Limited operates Netrom in full conformity with the Nigeria Data Protection Act (NDPA) 2023 and guidelines set forth by the Nigeria Data Protection Commission (NDPC).
              </p>
            </div>
          )}

          {/* POLICIES */}
          {activeCategory === "policies" && (
            <div className="p-6 sm:p-12 max-w-4xl space-y-6 text-gray-700 leading-relaxed">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Acceptable Use &amp; Operational Policies
              </h1>
              <p className="text-sm">
                Outlines standard expectations for workspace administrators and team members using Netrom tools.
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-6 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © 2026 Primeguage Solutions Limited. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/privacy?tab=terms" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy?tab=security" className="hover:text-gray-900 transition-colors">
              Security
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
