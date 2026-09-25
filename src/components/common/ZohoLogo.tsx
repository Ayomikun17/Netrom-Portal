import React from "react";

export const ZohoLogo: React.FC = () => (
  <div className="flex items-center space-x-2 font-black text-xl tracking-tight text-gray-900 select-none">
    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0066cc] via-[#e43338] to-[#ffb400] flex items-center justify-center text-white shadow-md">
      <span className="font-extrabold text-sm tracking-tighter">N</span>
    </div>
    <span className="text-gray-900 font-extrabold text-lg tracking-tight">
      Net<span className="text-[#0066cc]">rom</span>
    </span>
  </div>
);

export default ZohoLogo;
