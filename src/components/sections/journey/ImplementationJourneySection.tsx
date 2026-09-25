"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ScrollReveal } from "@/components/common";

export const ImplementationJourneySection: React.FC = () => {
  const [activeWayTab, setActiveWayTab] = useState(0);

  const journeySteps = [
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
          <rect
            x="21"
            y="14"
            width="10"
            height="4"
            rx="2"
            fill="#ffffff"
            opacity="0.8"
          />
          <circle cx="25" cy="24" r="3" fill="#f59e0b" />
          <rect
            x="8"
            y="22"
            width="13"
            height="4"
            rx="2"
            fill="#ffffff"
            opacity="0.8"
          />
        </svg>
      ),
      title: "Import and configure",
      category: "STRUCTURE",
      description:
        "Seamlessly transfer your existing staff records, departments, financial accounts, and operational data to Netrom. Tailor approval matrixes and system settings to match your business needs.",
      features: [
        "Department Mapping",
        "Approval Matrix Setup",
        "Custom Roles & Permissions",
      ],
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
          <path
            d="M 20 5 L 32 10 C 32 22 26 30 20 35 C 14 30 8 22 8 10 Z"
            fill="url(#ic3dA1)"
          />
          <circle cx="20" cy="17" r="4" fill="#ffffff" />
          <path d="M 14 27 C 14 23 26 23 26 27 Z" fill="#ffffff" />
        </svg>
      ),
      title: "Administer user access",
      category: "ACCESS",
      description:
        "Provision role permissions for HR Admins, Team Leads, Finance Officers, and Staff. Establish secure multi-tenant access control and single sign-on across departments.",
      features: [
        "Bulk Staff Import",
        "Role Provisioning",
        "Data Encryption & Verification",
      ],
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
      features: [
        "Unified Workspace",
        "Cross-Team Workflows",
        "Central Operations Portal",
      ],
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
          <path
            d="M 22 7 L 12 21 L 19 21 L 17 33 L 28 17 L 21 17 Z"
            fill="url(#ic3dZ2)"
          />
        </svg>
      ),
      title: "Innovate and automate",
      category: "INTELLIGENCE",
      description:
        "Automate leave approvals, requisition routing, payslip distribution, and executive reporting. Monitor organizational performance with live OKRs and analytics.",
      features: [
        "Automated Approvals",
        "Live OKR Tracking",
        "Executive Reports & Dashboards",
      ],
    },
  ];

  return (
    <section
      id="journey"
      className="py-16 md:py-24 bg-white text-gray-900 relative overflow-hidden select-none border-t border-gray-100"
    >
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
              Netrom makes the transition from disconnected tools and manual
              workflows straightforward. Configure your workspace, bring your
              data across, prepare your teams, and launch with confidence.
            </p>
          </div>

          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* LEFT COLUMN: Accordion Slider with 3D Icons */}
            <div className="lg:col-span-7 space-y-3.5">
              {journeySteps.map((item, idx) => {
                const isOpen = activeWayTab === idx;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveWayTab(idx)}
                    className={`rounded-2xl transition-all duration-200 overflow-hidden cursor-pointer ${
                      isOpen
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
                          <h3
                            className={`text-base font-extrabold tracking-tight ${
                              isOpen ? "text-gray-900" : "text-gray-800"
                            }`}
                          >
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
  );
};

export default ImplementationJourneySection;
