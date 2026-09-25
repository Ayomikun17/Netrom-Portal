"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Cookie,
  ShieldCheck,
  Sliders,
  Table as TableIcon,
  Check,
  AlertCircle,
  Lock,
  Sparkles,
} from "lucide-react";

interface CookiePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CookiePreferenceState {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
}

export const CookiePolicyModal: React.FC<CookiePolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"overview" | "preferences" | "manifest">(
    "preferences"
  );

  const [preferences, setPreferences] = useState<CookiePreferenceState>({
    necessary: true, // Always required
    functional: true,
    analytics: true,
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("netrom_cookie_consent");
      if (stored) {
        const parsed = JSON.parse(stored);
        setPreferences({
          necessary: true,
          functional: parsed.functional ?? true,
          analytics: parsed.analytics ?? true,
        });
      }
    } catch {
      // Fallback to default
    }
  }, [isOpen]);

  if (!isOpen) return null;

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

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, functional: true, analytics: true };
    setPreferences(allAccepted);
    try {
      localStorage.setItem(
        "netrom_cookie_consent",
        JSON.stringify({ ...allAccepted, timestamp: new Date().toISOString() })
      );
    } catch {}

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const handleRejectNonEssential = () => {
    const minimal = { necessary: true, functional: false, analytics: false };
    setPreferences(minimal);
    try {
      localStorage.setItem(
        "netrom_cookie_consent",
        JSON.stringify({ ...minimal, timestamp: new Date().toISOString() })
      );
    } catch {}

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const cookieManifest = [
    {
      name: "netrom_session",
      category: "Strictly Necessary",
      provider: "netrom.ng",
      purpose: "Stores authenticated user session token to maintain login across workspace tabs.",
      expiry: "Session / 14 days",
    },
    {
      name: "netrom_csrf_token",
      category: "Strictly Necessary",
      provider: "netrom.ng",
      purpose: "Protects forms and API requests against Cross-Site Request Forgery attacks.",
      expiry: "Session",
    },
    {
      name: "netrom_tenant_id",
      category: "Strictly Necessary",
      provider: "netrom.ng",
      purpose: "Routes API requests to the appropriate corporate tenant database partition.",
      expiry: "30 days",
    },
    {
      name: "netrom_ui_theme",
      category: "Functional",
      provider: "netrom.ng",
      purpose: "Remembers your preferred workspace appearance (Light or Dark high-contrast mode).",
      expiry: "1 year",
    },
    {
      name: "netrom_nav_state",
      category: "Functional",
      provider: "netrom.ng",
      purpose: "Remembers whether your modular sidebar navigation is expanded or pinned collapsed.",
      expiry: "6 months",
    },
    {
      name: "netrom_perf_sample",
      category: "Analytics",
      provider: "netrom.ng",
      purpose: "Anonymously measures page render latency and frontend error rates to optimize load speed.",
      expiry: "30 days",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[90] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative animate-in fade-in zoom-in duration-200 overflow-hidden text-gray-900 border border-gray-100 my-auto">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-slate-950 text-white shrink-0">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <Cookie className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-xl font-black tracking-tight text-white">
                  Netrom Cookie &amp; Tracking Policy
                </h3>
                <span className="text-[10px] sm:text-xs bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Zero Third-Party Ad Trackers
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5 font-normal">
                Manage your storage preferences and learn how we protect your workspace privacy.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-gray-200 bg-gray-50 px-4 sm:px-6 text-xs font-bold text-gray-600 shrink-0">
          <button
            onClick={() => setActiveTab("preferences")}
            className={`py-3 px-3 sm:px-4 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === "preferences"
                ? "border-emerald-600 text-emerald-700 bg-white"
                : "border-transparent hover:text-gray-900"
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Consent Preferences</span>
          </button>
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3 px-3 sm:px-4 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === "overview"
                ? "border-emerald-600 text-emerald-700 bg-white"
                : "border-transparent hover:text-gray-900"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Policy Overview</span>
          </button>
          <button
            onClick={() => setActiveTab("manifest")}
            className={`py-3 px-3 sm:px-4 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === "manifest"
                ? "border-emerald-600 text-emerald-700 bg-white"
                : "border-transparent hover:text-gray-900"
            }`}
          >
            <TableIcon className="w-3.5 h-3.5" />
            <span>Cookie Manifest Table</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5 text-xs sm:text-sm text-gray-700 leading-relaxed font-normal bg-white">
          {savedSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl text-xs flex items-center gap-2 font-bold animate-in fade-in duration-150">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Your cookie preferences have been successfully updated and saved.</span>
            </div>
          )}

          {/* TAB 1: PREFERENCES */}
          {activeTab === "preferences" && (
            <div className="space-y-4">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-700 space-y-1">
                <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Interactive Privacy Control Center</span>
                </div>
                <p>
                  You are in total control. Under the Nigeria Data Protection Act (NDPA 2023), you may customize which non-essential cookies Netrom can place on your browser. Strictly necessary cookies are mandatory to provide basic platform security and login functionality.
                </p>
              </div>

              {/* Necessary Cookies (Locked) */}
              <div className="p-4 bg-white border border-gray-200 rounded-2xl space-y-2 hover:border-gray-300 transition-all shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-gray-900 text-sm">
                        1. Strictly Necessary &amp; Security Cookies
                      </h4>
                      <p className="text-[11px] text-gray-500 font-mono">
                        Session authentication, CSRF shields, load balancing
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-900 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Always Active
                  </span>
                </div>
                <p className="text-xs text-gray-600 pl-10">
                  These cookies are vital for the proper operation of the Netrom workspace. They enable secure administrator logins, protect financial requisition submissions against Cross-Site Request Forgery (CSRF), and maintain session state across page changes. Because the platform cannot function safely without them, they cannot be disabled.
                </p>
              </div>

              {/* Functional Cookies (Toggleable) */}
              <div className="p-4 bg-white border border-gray-200 rounded-2xl space-y-2 hover:border-gray-300 transition-all shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                      <Sliders className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-gray-900 text-sm">
                        2. Functional &amp; Preference Cookies
                      </h4>
                      <p className="text-[11px] text-gray-500 font-mono">
                        Theme mode, collapsed navigation, language settings
                      </p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) =>
                        setPreferences((prev) => ({
                          ...prev,
                          functional: e.target.checked,
                        }))
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
                <p className="text-xs text-gray-600 pl-10">
                  These cookies enable enhanced personalization and convenience. They remember your dark/light UI preference, whether you prefer the sidebar navigation pinned or collapsed, and your last-active department workspace. If disabled, your settings will revert to default on every page refresh.
                </p>
              </div>

              {/* Analytics & Performance Cookies (Toggleable) */}
              <div className="p-4 bg-white border border-gray-200 rounded-2xl space-y-2 hover:border-gray-300 transition-all shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-800 flex items-center justify-center font-bold">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-gray-900 text-sm">
                        3. First-Party Performance &amp; Diagnostic Telemetry
                      </h4>
                      <p className="text-[11px] text-gray-500 font-mono">
                        System render speed, aggregated error logs (No cross-site tracking)
                      </p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences((prev) => ({
                          ...prev,
                          analytics: e.target.checked,
                        }))
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
                <p className="text-xs text-gray-600 pl-10">
                  Netrom uses first-party performance telemetry strictly to diagnose application slowdowns, API error spikes, and optimize workspace responsiveness. All data is aggregated and anonymized. <strong>We NEVER share this telemetry with external advertisers or ad tech brokers.</strong>
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: POLICY OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-4">
              <h3 className="text-base font-extrabold text-gray-900">
                Understanding Netrom's Cookie Architecture
              </h3>
              <p>
                Cookies are small text data files placed on your computer or mobile device when you browse websites or use cloud software. Along with cookies, we may utilize HTML5 local storage and session storage to provide a fast, uninterrupted user experience.
              </p>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2 text-emerald-950">
                <div className="font-bold text-xs sm:text-sm flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-700" />
                  <span>The Netrom Anti-Surveillance Pledge</span>
                </div>
                <p className="text-xs text-emerald-800">
                  Unlike traditional consumer websites, <strong>Netrom does not participate in behavioural advertising networks</strong>. We do not place third-party tracking pixels (e.g. Meta Pixel, ad retargeting tags, or commercial data broker trackers) inside our software applications. When you use Netrom, your business operations remain private and strictly confidential.
                </p>
              </div>

              <div className="space-y-2 text-xs text-gray-600">
                <h4 className="font-bold text-gray-900 text-sm">
                  Cookie Lifespan: Session vs. Persistent
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Session Cookies:</strong> Temporary cookies that expire as soon as you close your browser or log out. Used exclusively for active authentication and security validation.
                  </li>
                  <li>
                    <strong>Persistent Cookies:</strong> Remain stored on your device until a specified expiration date or until manually deleted. Used to remember that your browser has previously logged in with MFA and to recall your workspace UI preferences.
                  </li>
                </ul>
              </div>

              <div className="space-y-2 text-xs text-gray-600">
                <h4 className="font-bold text-gray-900 text-sm">
                  How to Manage Cookies Directly in Your Browser
                </h4>
                <p>
                  In addition to using our Consent Preferences tab, you can configure your browser to block or alert you about cookies. Note that blocking all cookies will prevent you from signing in to your Netrom account:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-1 font-semibold text-gray-700">
                  <div className="p-2 bg-gray-50 border border-gray-200 rounded-lg">Google Chrome</div>
                  <div className="p-2 bg-gray-50 border border-gray-200 rounded-lg">Microsoft Edge</div>
                  <div className="p-2 bg-gray-50 border border-gray-200 rounded-lg">Apple Safari</div>
                  <div className="p-2 bg-gray-50 border border-gray-200 rounded-lg">Mozilla Firefox</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MANIFEST TABLE */}
          {activeTab === "manifest" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-gray-900">
                    Comprehensive Cookie Audit Manifest
                  </h3>
                  <p className="text-xs text-gray-500">
                    Transparent, exhaustive listing of cookies utilized across Netrom workspace domains.
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto border border-gray-200 rounded-xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-gray-100 text-gray-900 font-bold border-b border-gray-200">
                      <th className="p-2.5">Cookie Name</th>
                      <th className="p-2.5">Category</th>
                      <th className="p-2.5">Domain</th>
                      <th className="p-2.5">Purpose &amp; Storage Details</th>
                      <th className="p-2.5">Lifespan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    {cookieManifest.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                        <td className="p-2.5 font-mono text-blue-600 font-semibold whitespace-nowrap">
                          {item.name}
                        </td>
                        <td className="p-2.5 whitespace-nowrap">
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              item.category === "Strictly Necessary"
                                ? "bg-emerald-100 text-emerald-800"
                                : item.category === "Functional"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-violet-100 text-violet-800"
                            }`}
                          >
                            {item.category}
                          </span>
                        </td>
                        <td className="p-2.5 font-mono text-[11px] text-gray-500 whitespace-nowrap">
                          {item.provider}
                        </td>
                        <td className="p-2.5 text-xs text-gray-600 min-w-[200px]">
                          {item.purpose}
                        </td>
                        <td className="p-2.5 text-gray-500 whitespace-nowrap">
                          {item.expiry}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  This manifest is updated on a quarterly basis in accordance with our ongoing compliance audits under the Nigeria Data Protection Act (NDPA 2023).
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-[11px] text-gray-500 text-center sm:text-left">
            Preferences stored locally. You can update this at any time from our website footer.
          </div>
          <div className="flex flex-wrap items-center justify-end gap-2 w-full sm:w-auto">
            <button
              onClick={handleRejectNonEssential}
              className="px-4 py-2 border border-gray-300 text-gray-700 font-bold text-xs rounded-full hover:bg-gray-100 cursor-pointer transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={handleSavePreferences}
              className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-full cursor-pointer transition-colors shadow-sm"
            >
              Save Preferences
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-full cursor-pointer transition-colors shadow-md"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyModal;
