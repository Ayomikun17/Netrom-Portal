"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";

interface CookieConsentBannerProps {
  onOpenPreferences?: () => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  onOpenPreferences,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: true,
    analytics: true,
  });

  useEffect(() => {
    try {
      const consent = localStorage.getItem("netrom_cookie_consent");
      if (!consent) {
        // Show after a brief delay for smooth appearance
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsVisible(true);
    }
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

  const handleSavePreferences = () => {
    try {
      localStorage.setItem(
        "netrom_cookie_consent",
        JSON.stringify({
          ...preferences,
          necessary: true,
          timestamp: new Date().toISOString(),
        })
      );
    } catch {}
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-6 left-6 right-6 sm:left-6 sm:right-auto sm:max-w-2xl z-[100] animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/90 p-6 sm:p-7 relative text-gray-900 font-sans">
        {/* Close Button Top-Right */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-5 right-5 w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
          Accept the use of cookies.
        </h3>

        {!showPreferences ? (
          <>
            {/* Body Text */}
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed max-w-xl">
              <p>
                We use cookies to improve your browsing experience, serve personalized content, and analyze our traffic. By clicking Accept all Cookies, you agree to the storing of cookies on your device.
              </p>
              <p>
                You can customize your settings by clicking Manage Preferences. For more details, see our{" "}
                <Link
                  href="/privacy?tab=cookies"
                  className="text-gray-900 underline underline-offset-2 hover:text-[#1d61e7] font-medium transition-colors"
                >
                  Cookie Policy.
                </Link>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="bg-[#1d61e7] hover:bg-blue-700 text-white font-medium text-sm px-6 py-2.5 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                Accept all Cookies
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onOpenPreferences) {
                    onOpenPreferences();
                  } else {
                    setShowPreferences(true);
                  }
                }}
                className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-medium text-sm px-5 py-2.5 rounded-lg transition-colors cursor-pointer shadow-2xs"
              >
                Manage Preferences
              </button>
            </div>
          </>
        ) : (
          /* Inline Preferences Panel */
          <div className="mt-4 space-y-4 text-xs text-gray-700">
            <div className="space-y-3 border-y border-gray-100 py-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">Strictly Necessary</div>
                  <div className="text-[11px] text-gray-500">Required for session security and navigation.</div>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Always Active</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">Functional Cookies</div>
                  <div className="text-[11px] text-gray-500">Remembers your workspace UI settings.</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1d61e7]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">Analytics &amp; Performance</div>
                  <div className="text-[11px] text-gray-500">First-party metrics for system load speed.</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1d61e7]"></div>
                </label>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleSavePreferences}
                className="bg-[#1d61e7] hover:bg-blue-700 text-white font-medium text-xs px-5 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Save Preferences
              </button>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="text-gray-500 hover:text-gray-800 text-xs font-medium cursor-pointer"
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsentBanner;
