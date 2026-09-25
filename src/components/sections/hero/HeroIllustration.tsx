import React from "react";

export const HeroIllustration: React.FC = () => (
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
    <circle
      cx="260"
      cy="240"
      r="190"
      fill="#1d61e7"
      opacity="0.08"
      filter="url(#heroGlow)"
    />
    <circle
      cx="340"
      cy="180"
      r="120"
      fill="#38bdf8"
      opacity="0.06"
      filter="url(#heroGlow)"
    />

    {/* Isometric Dashboard Window 1 (Main Platform Workspace) */}
    <g transform="translate(40, 50)">
      <rect
        x="0"
        y="0"
        width="440"
        height="320"
        rx="16"
        fill="url(#heroCardGrad1)"
        stroke="#cbd5e1"
        strokeWidth="1.5"
      />

      {/* Top Window Bar */}
      <path
        d="M 0 16 C 0 7, 7 0, 16 0 L 424 0 C 433 0, 440 7, 440 16 L 440 40 L 0 40 Z"
        fill="#0f172a"
      />
      <circle cx="20" cy="20" r="4" fill="#ef4444" />
      <circle cx="34" cy="20" r="4" fill="#eab308" />
      <circle cx="48" cy="20" r="4" fill="#22c55e" />
      <rect x="70" y="12" width="160" height="16" rx="4" fill="#1e293b" />
      <text x="80" y="24" fill="#94a3b8" fontSize="9" fontWeight="bold">
        netrom.app/workspace
      </text>

      {/* Sidebar Mock */}
      <rect x="0" y="40" width="80" height="280" fill="#f1f5f9" />
      <rect x="12" y="56" width="56" height="8" rx="3" fill="#cbd5e1" />
      <rect x="12" y="74" width="56" height="8" rx="3" fill="#2563eb" />
      <rect x="12" y="92" width="56" height="8" rx="3" fill="#cbd5e1" />
      <rect x="12" y="110" width="56" height="8" rx="3" fill="#cbd5e1" />

      {/* Main Panel Widgets */}
      <g transform="translate(96, 56)">
        {/* Metric Card 1 */}
        <rect
          x="0"
          y="0"
          width="100"
          height="64"
          rx="8"
          fill="#ffffff"
          stroke="#e2e8f0"
          strokeWidth="1"
        />
        <rect x="10" y="10" width="40" height="6" rx="2" fill="#94a3b8" />
        <text x="10" y="38" fill="#0f172a" fontSize="16" fontWeight="900">
          24.5%
        </text>
        <text x="10" y="52" fill="#16a34a" fontSize="8" fontWeight="bold">
          ↑ OKR Progress
        </text>

        {/* Metric Card 2 */}
        <rect
          x="110"
          y="0"
          width="100"
          height="64"
          rx="8"
          fill="#ffffff"
          stroke="#e2e8f0"
          strokeWidth="1"
        />
        <rect x="120" y="10" width="40" height="6" rx="2" fill="#94a3b8" />
        <text x="120" y="38" fill="#0f172a" fontSize="16" fontWeight="900">
          ₦4.9M
        </text>
        <text x="120" y="52" fill="#2563eb" fontSize="8" fontWeight="bold">
          Monthly Spend
        </text>

        {/* Metric Card 3 */}
        <rect
          x="220"
          y="0"
          width="110"
          height="64"
          rx="8"
          fill="#ffffff"
          stroke="#e2e8f0"
          strokeWidth="1"
        />
        <rect x="230" y="10" width="50" height="6" rx="2" fill="#94a3b8" />
        <text x="230" y="38" fill="#0f172a" fontSize="16" fontWeight="900">
          82%
        </text>
        <text x="230" y="52" fill="#16a34a" fontSize="8" fontWeight="bold">
          Task Completion
        </text>

        {/* Big Chart Box */}
        <rect
          x="0"
          y="76"
          width="330"
          height="170"
          rx="10"
          fill="#ffffff"
          stroke="#e2e8f0"
          strokeWidth="1"
        />
        <text x="12" y="96" fill="#1e293b" fontSize="11" fontWeight="bold">
          Organizational Growth &amp; Staff Performance
        </text>

        {/* Trend Area Chart Path */}
        <path
          d="M 16 220 Q 90 200, 150 140 T 260 130 Q 300 110, 314 170 L 314 230 L 16 230 Z"
          fill="#2563eb"
          opacity="0.1"
        />
        <path
          d="M 16 220 Q 90 200, 150 140 T 260 130 Q 300 110, 314 170"
          fill="none"
          stroke="#2563eb"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="150" cy="140" r="4" fill="#2563eb" />
        <circle cx="260" cy="130" r="4" fill="#2563eb" />
      </g>
    </g>

    {/* Floating Glassmorphic Badge 1: Staff Approval */}
    <g transform="translate(20, 260)" opacity="0.95">
      <rect
        x="0"
        y="0"
        width="160"
        height="60"
        rx="12"
        fill="#ffffff"
        stroke="#bfdbfe"
        strokeWidth="1.5"
      />
      <circle cx="28" cy="30" r="14" fill="#dbeafe" />
      <text
        x="28"
        y="34"
        fill="#1d61e7"
        fontSize="12"
        fontWeight="bold"
        textAnchor="middle"
      >
        ✓
      </text>
      <text x="50" y="26" fill="#0f172a" fontSize="10" fontWeight="bold">
        Leave Request Approved
      </text>
      <text x="50" y="40" fill="#64748b" fontSize="8">
        HR Review completed
      </text>
    </g>

    {/* Floating Glassmorphic Badge 2: Security & NDPA Compliant */}
    <g transform="translate(320, 320)" opacity="0.95">
      <rect
        x="0"
        y="0"
        width="170"
        height="54"
        rx="12"
        fill="#0f172a"
        stroke="#334155"
        strokeWidth="1"
      />
      <circle cx="26" cy="27" r="12" fill="#16a34a" />
      <text
        x="26"
        y="31"
        fill="#ffffff"
        fontSize="10"
        fontWeight="bold"
        textAnchor="middle"
      >
        🔒
      </text>
      <text x="46" y="24" fill="#ffffff" fontSize="10" fontWeight="bold">
        NDPA 2023 Compliant
      </text>
      <text x="46" y="38" fill="#94a3b8" fontSize="8">
        256-Bit Data Encryption
      </text>
    </g>

    {/* Floating Floating Icon Element */}
    <g transform="translate(420, 100)">
      <circle cx="24" cy="24" r="24" fill="url(#heroBlueGrad)" />
      <text
        x="24"
        y="30"
        fill="#ffffff"
        fontSize="18"
        fontWeight="black"
        textAnchor="middle"
      >
        ✦
      </text>
    </g>
  </svg>
);

export default HeroIllustration;
