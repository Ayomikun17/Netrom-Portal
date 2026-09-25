import React from "react";

export const NetromOneLogo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <div className="relative w-8 h-8 flex items-center justify-center bg-[#0066cc] rounded-md shadow-md">
      <span className="text-white font-black text-xs tracking-tighter">N</span>
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-extrabold text-gray-900 leading-none">
        NETROM
      </span>
      <span className="text-[9px] text-gray-500 font-semibold tracking-wider uppercase">
        Connected Business Workspace
      </span>
    </div>
  </div>
);

// Backward-compatible alias
export const NetromWorkspaceLogo = NetromOneLogo;

export default NetromOneLogo;
