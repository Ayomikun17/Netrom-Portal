"use client";

import React from "react";
import { X } from "lucide-react";

interface CookiePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookiePolicyModal: React.FC<CookiePolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xs z-[90] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl relative animate-in fade-in zoom-in duration-200 overflow-hidden text-gray-900 border border-gray-100">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-black text-lg shadow-md">
              🍪
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight text-white">
                Cookie &amp; Tracking Policy
              </h3>
              <p className="text-xs text-emerald-300 font-mono">
                Workspace Preference &amp; Security Cookies
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs text-gray-700 leading-relaxed">
          <p>
            Netrom uses cookies and similar session storage technologies to
            maintain secure user authentication, save workspace dashboard state,
            and optimize load speed.
          </p>

          <div className="space-y-3">
            <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
              <div className="font-bold text-gray-900 flex items-center justify-between">
                <span>1. Strictly Necessary Cookies</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                  Always Active
                </span>
              </div>
              <p className="text-[11px] text-gray-600">
                Essential for user login authentication, CSRF token validation,
                and secure workspace navigation.
              </p>
            </div>

            <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
              <div className="font-bold text-gray-900 flex items-center justify-between">
                <span>2. Performance &amp; Analytics Cookies</span>
                <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full">
                  Optional
                </span>
              </div>
              <p className="text-[11px] text-gray-600">
                Helps us measure workspace responsiveness, feature adoption, and
                system uptime anonymously.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-5 py-2 border border-gray-300 text-gray-700 font-bold text-xs rounded-full hover:bg-gray-100 cursor-pointer"
          >
            Essential Only
          </button>
          <button
            onClick={onClose}
            className="bg-[#1d61e7] hover:bg-blue-700 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-md cursor-pointer"
          >
            Accept All Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyModal;
