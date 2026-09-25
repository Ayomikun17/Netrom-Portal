"use client";

import React, { useState, useEffect } from "react";
import { Cookie, Shield, X } from "lucide-react";

interface CookieConsentBannerProps {
  onOpenPreferences: () => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  onOpenPreferences,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("netrom_cookie_consent");
      if (!consent) {
        // Small delay so it animates in smoothly after initial render
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {}
  }, []);

  if (!isVisible) return null;

  const handleAcceptAll = () => {
    try {
      localStorage.setItem(
        "netrom_cookie_consent",
        JSON.stringify({
          necessary: true,
          functional: true,
          analytics: true,
          timestamp: new Date().toISOString(),
        })
      );
    } catch {}
    setIsVisible(false);
  };

  const handleDeclineNonEssential = () => {
    try {
      localStorage.setItem(
        "netrom_cookie_consent",
        JSON.stringify({
          necessary: true,
          functional: false,
          analytics: false,
          timestamp: new Date().toISOString(),
        })
      );
    } catch {}
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-slate-950/95 backdrop-blur-md text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-slate-800 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/30 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <Cookie className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-white">
                Privacy-First Cookies on Netrom
              </h4>
              <p className="text-[10px] text-emerald-400 font-mono">
                NDPA 2023 Compliant • Zero Third-Party Ads
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-gray-300 leading-relaxed">
          We use strictly necessary cookies to keep Netrom secure and provide seamless workspace logins. We never sell your personal data or deploy ad-tracking networks.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <button
            onClick={onOpenPreferences}
            className="text-xs text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-2 cursor-pointer"
          >
            Customize Preferences
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDeclineNonEssential}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-gray-300 cursor-pointer transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={handleAcceptAll}
              className="text-xs font-bold px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer transition-colors shadow-sm"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
