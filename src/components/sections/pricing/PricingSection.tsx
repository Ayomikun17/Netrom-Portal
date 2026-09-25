"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/common";

interface PricingSectionProps {
  onOpenModal: (modalKey: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenModal,
}) => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <section
      id="pricing"
      className="bg-[#f7f5eb] py-16 sm:py-24 border-t border-amber-900/10 select-none"
    >
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

          {/* BILLING TOGGLE */}
          <div className="flex flex-col items-center mb-10">
            <div className="inline-flex items-center bg-gray-200/80 border border-gray-300/80 rounded-full p-1.5 shadow-inner space-x-1">
              {/* Monthly */}
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                aria-pressed={billingCycle === "monthly"}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
                  billingCycle === "monthly"
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
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  billingCycle === "yearly"
                    ? "bg-[#1d61e7] text-white shadow-md scale-105"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
                }`}
              >
                <span>Annual Billing</span>
                <span
                  className={`text-[10px] font-black uppercase tracking-wide px-2 py-0.5 rounded-full ${
                    billingCycle === "yearly"
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

          {/* 4-TIER PRICING GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* TIER 1: ESSENTIAL */}
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
                    <span>Clock-in, clock-out attendance</span>
                  </li>
                  <li className="flex items-start space-x-1.5">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Leave requests & balance tracking</span>
                  </li>
                  <li className="flex items-start space-x-1.5">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Personal employee profiles</span>
                  </li>
                  <li className="flex items-start space-x-1.5">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Direct messaging & team chat</span>
                  </li>
                  <li className="flex items-start space-x-1.5">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Standard tasks & deliverables</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenModal("trial")}
                className="w-full bg-gray-900 hover:bg-black text-white font-bold text-xs py-3 rounded-lg transition-colors cursor-pointer uppercase tracking-wider"
              >
                GET STARTED
              </button>
            </div>

            {/* TIER 2: PROFESSIONAL */}
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
                onClick={() => onOpenModal("trial")}
                className="w-full bg-[#e43338] hover:bg-[#cc282d] text-white font-extrabold text-xs py-3 rounded-lg shadow-md transition-all cursor-pointer uppercase tracking-wider"
              >
                GET STARTED
              </button>
            </div>

            {/* TIER 3: ADVANCED */}
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
                onClick={() => onOpenModal("trial")}
                className="w-full bg-gray-900 hover:bg-black text-white font-bold text-xs py-3 rounded-lg transition-colors cursor-pointer uppercase tracking-wider"
              >
                GET STARTED
              </button>
            </div>

            {/* TIER 4: ENTERPRISE */}
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
                onClick={() => onOpenModal("contact")}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs py-3 rounded-lg transition-colors cursor-pointer uppercase tracking-wider"
              >
                TALK TO SALES
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default PricingSection;
