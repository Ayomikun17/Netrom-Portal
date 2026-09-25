"use client";

import React from "react";
import { ScrollReveal } from "@/components/common";

interface MetricsTrustSectionProps {
  onSeeHowItWorks: () => void;
}

export const MetricsTrustSection: React.FC<MetricsTrustSectionProps> = ({
  onSeeHowItWorks,
}) => {
  return (
    <section
      id="solutions"
      className="bg-white py-14 md:py-20 border-t border-gray-100 relative overflow-hidden select-none"
    >
      <ScrollReveal direction="right">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black text-gray-900 tracking-tight leading-tight mb-4">
              Built for organisations ready to work as one.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
              Netrom is designed for businesses at different stages of growth,
              from small teams establishing structured processes to larger
              organisations managing more complex operations and governance.
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
          <div className="w-full max-w-4xl mx-auto my-10 md:my-14 border-b border-gray-200/80" />

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
                onClick={onSeeHowItWorks}
                className="w-full max-w-sm bg-[#005838] hover:bg-[#004d31] rounded-2xl p-7 sm:p-8 text-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group relative overflow-hidden border border-emerald-800"
              >
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

                <div className="text-lg sm:text-xl font-black tracking-tight text-white mb-3 leading-snug">
                  One workspace. Multiple teams. Shared visibility.
                </div>

                <div className="text-xs sm:text-sm font-normal text-emerald-100 mb-6 leading-relaxed">
                  Bring HR, Finance, Management and Staff workflows together
                  without forcing your teams to work across disconnected systems.
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
                      <polygon
                        points="12,12 20,6 34,10 28,12"
                        fill="#a5b4fc"
                      />
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
  );
};

export default MetricsTrustSection;
