"use client";

import React from "react";

interface RedHotspotProps {
  id: string;
  activeHotspot: string | null;
  onClick: (id: string) => void;
  tooltipLabel: string;
  className?: string;
}

export const RedHotspot: React.FC<RedHotspotProps> = ({
  id,
  activeHotspot,
  onClick,
  tooltipLabel,
  className = "",
}) => {
  const isSelected = activeHotspot === id;

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick(id);
      }}
      className={`relative group focus:outline-none z-30 transition-transform hover:scale-125 ${className}`}
      title={`Click to inspect ${tooltipLabel}`}
    >
      {/* Outer Pulse Ring */}
      <span className="absolute -inset-1 rounded-full bg-red-400 opacity-75 animate-ping" />

      {/* Inner Red Dot */}
      <span
        className={`relative flex items-center justify-center w-3.5 h-3.5 rounded-full ${
          isSelected
            ? "bg-amber-400 ring-2 ring-red-600 scale-125"
            : "bg-[#e43338] ring-2 ring-white shadow-md"
        }`}
      >
        <span className="w-1.5 h-1.5 bg-white rounded-full" />
      </span>

      {/* Tooltip on Hover */}
      <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex items-center px-2 py-1 bg-gray-900 text-white text-[10px] font-medium rounded shadow-lg whitespace-nowrap z-50 pointer-events-none">
        {tooltipLabel}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
      </span>
    </button>
  );
};

export default RedHotspot;
