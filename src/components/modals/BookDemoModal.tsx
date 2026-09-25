"use client";

import React, { useState } from "react";
import { X, Check } from "lucide-react";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPrivacy?: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({
  isOpen,
  onClose,
  onOpenPrivacy,
}) => {
  const [demoFormSubmitted, setDemoFormSubmitted] = useState(false);
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    interest: "",
    dateTime: "",
    message: "",
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-[95] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-[#eef2f6] rounded-3xl max-w-4xl w-full flex flex-col md:flex-row shadow-2xl relative animate-in fade-in zoom-in duration-200 overflow-hidden text-gray-900 border border-slate-200/50 my-6">
        {/* LEFT BLUE COLUMN */}
        <div className="w-full md:w-[38%] bg-gradient-to-b from-[#0b3ec2] via-[#05329c] to-[#022272] text-white p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden shrink-0">
          {/* Decorative soft glow */}
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 40 40" fill="none">
                  <polygon
                    points="12,6 30,14 26,34 8,24"
                    stroke="white"
                    strokeWidth="2.5"
                    fill="rgba(255,255,255,0.15)"
                  />
                  <line
                    x1="12"
                    y1="6"
                    x2="26"
                    y2="34"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <span className="font-extrabold text-xs tracking-wider text-white block leading-none">
                  PRIMEGUAGE
                </span>
                <span className="text-[7.5px] font-semibold text-blue-200 tracking-widest uppercase">
                  SOLUTIONS
                </span>
              </div>
            </div>

            {/* Heading */}
            <div>
              <h3 className="text-2xl sm:text-[26px] font-black tracking-tight text-white leading-tight">
                See Primeguage in action
              </h3>
              <p className="text-xs text-blue-100/85 mt-2.5 leading-relaxed font-normal">
                Tell us what you are working on and we will show you how our
                technology, advisory and media teams can help.
              </p>
            </div>

            {/* 3 Checkmark bullet points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-xs text-white/95">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 shadow-2xs">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>A walkthrough tailored to your organisation</span>
              </div>

              <div className="flex items-center space-x-3 text-xs text-white/95">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 shadow-2xs">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>A reply from our team within one working day</span>
              </div>

              <div className="flex items-center space-x-3 text-xs text-white/95">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 shadow-2xs">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>No cost and no obligation</span>
              </div>
            </div>
          </div>

          {/* Bottom direct contact */}
          <div className="pt-8 relative z-10 border-t border-white/10 mt-6">
            <p className="text-[11px] text-blue-200/80 mb-1">
              Prefer to talk now?
            </p>
            <div className="space-y-0.5">
              <a
                href="mailto:info@primeguage.co"
                className="text-white font-semibold text-xs underline block hover:text-blue-200 transition-colors"
              >
                info@primeguage.co
              </a>
              <a
                href="tel:07007746348243"
                className="text-white font-semibold text-xs underline block hover:text-blue-200 transition-colors"
              >
                0700-774-634-8243
              </a>
              <span className="text-[10px] text-blue-300 block pt-1">
                No.31 Adamu Ciroma Crescent, Jabi, Abuja.
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT LIGHT COLUMN (FORM) */}
        <div className="w-full md:w-[62%] p-6 sm:p-8 flex flex-col justify-between relative bg-[#eef2f6]">
          {/* Close Button */}
          <button
            onClick={() => {
              onClose();
              setDemoFormSubmitted(false);
            }}
            className="w-7 h-7 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors absolute top-4 right-4 cursor-pointer"
            title="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>

          {demoFormSubmitted ? (
            <div className="my-auto py-10 text-center space-y-3">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-black shadow-lg">
                ✓
              </div>
              <h4 className="text-2xl font-black text-[#052d82]">
                Request Received
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you <strong>{demoFormData.name || "there"}</strong>. We
                have received your booking enquiry for{" "}
                <strong>{demoFormData.dateTime || "your preferred slot"}</strong>.
                We will email a confirmation to{" "}
                <strong>{demoFormData.email || "your address"}</strong>.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    onClose();
                    setDemoFormSubmitted(false);
                  }}
                  className="bg-[#1d61e7] hover:bg-[#1550c7] text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDemoFormSubmitted(true);
              }}
              className="space-y-4"
            >
              {/* Form Header */}
              <div>
                <h3 className="text-2xl sm:text-[26px] font-black text-[#052d82] tracking-tight">
                  Book a Demo
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Share a few details and pick a time that suits you. We will
                  confirm by email.
                </p>
              </div>

              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Your name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={demoFormData.name}
                    onChange={(e) =>
                      setDemoFormData({ ...demoFormData, name: e.target.value })
                    }
                    placeholder="e.g. Amina Bello"
                    className="w-full bg-[#f8fafc] border border-slate-300/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d61e7]/20 focus:border-[#1d61e7] transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={demoFormData.email}
                    onChange={(e) =>
                      setDemoFormData({ ...demoFormData, email: e.target.value })
                    }
                    placeholder="you@company.com"
                    className="w-full bg-[#f8fafc] border border-slate-300/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d61e7]/20 focus:border-[#1d61e7] transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Phone number and Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    value={demoFormData.phone}
                    onChange={(e) =>
                      setDemoFormData({ ...demoFormData, phone: e.target.value })
                    }
                    placeholder="0803 000 0000"
                    className="w-full bg-[#f8fafc] border border-slate-300/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d61e7]/20 focus:border-[#1d61e7] transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Company / organisation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={demoFormData.company}
                    onChange={(e) =>
                      setDemoFormData({
                        ...demoFormData,
                        company: e.target.value,
                      })
                    }
                    placeholder="Company name"
                    className="w-full bg-[#f8fafc] border border-slate-300/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d61e7]/20 focus:border-[#1d61e7] transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Role and Interest */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Your role
                  </label>
                  <select
                    value={demoFormData.role}
                    onChange={(e) =>
                      setDemoFormData({ ...demoFormData, role: e.target.value })
                    }
                    className="w-full bg-[#f8fafc] border border-slate-300/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1d61e7]/20 focus:border-[#1d61e7] transition-all"
                  >
                    <option value="">Select your role (optional)</option>
                    <option value="Executive / C-Suite">
                      Executive / C-Suite
                    </option>
                    <option value="HR / People Operations">
                      HR / People Operations
                    </option>
                    <option value="Finance & Accounts">
                      Finance &amp; Accounts
                    </option>
                    <option value="Operations & Admin">
                      Operations &amp; Admin
                    </option>
                    <option value="Team Lead / Manager">
                      Team Lead / Manager
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    What are you interested in?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={demoFormData.interest}
                    onChange={(e) =>
                      setDemoFormData({
                        ...demoFormData,
                        interest: e.target.value,
                      })
                    }
                    className="w-full bg-[#f8fafc] border border-slate-300/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1d61e7]/20 focus:border-[#1d61e7] transition-all"
                  >
                    <option value="">Select what you are interested in</option>
                    <option value="All-in-One Netrom Platform">
                      All-in-One Netrom Platform
                    </option>
                    <option value="HR & Staff Operations">
                      HR &amp; Staff Operations
                    </option>
                    <option value="Finance & Requisitions">
                      Finance &amp; Requisitions
                    </option>
                    <option value="Tasks & OKR Tracking">
                      Tasks &amp; OKR Tracking
                    </option>
                    <option value="Custom Implementation">
                      Custom Implementation
                    </option>
                  </select>
                </div>
              </div>

              {/* Row 4: Preferred date and time */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Preferred date and time <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="datetime-local"
                    required
                    value={demoFormData.dateTime}
                    onChange={(e) =>
                      setDemoFormData({
                        ...demoFormData,
                        dateTime: e.target.value,
                      })
                    }
                    className="w-full bg-[#f8fafc] border border-slate-300/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1d61e7]/20 focus:border-[#1d61e7] transition-all"
                  />
                </div>
              </div>

              {/* Row 5: Message */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Message (optional)
                </label>
                <textarea
                  rows={2.5}
                  value={demoFormData.message}
                  onChange={(e) =>
                    setDemoFormData({
                      ...demoFormData,
                      message: e.target.value,
                    })
                  }
                  placeholder="Anything we should know before the demo?"
                  className="w-full bg-[#f8fafc] border border-slate-300/80 rounded-xl px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d61e7]/20 focus:border-[#1d61e7] transition-all"
                />
              </div>

              {/* Bottom Action and Disclaimer */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                <button
                  type="submit"
                  className="bg-[#1d61e7] hover:bg-[#1550c7] text-white font-bold text-xs px-7 py-3 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
                >
                  Submit request
                </button>
                <p className="text-[11px] text-slate-500 leading-snug">
                  We will email you a confirmation as soon as your request
                  arrives. See how we use your details in our{" "}
                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenPrivacy) {
                        onOpenPrivacy();
                      }
                    }}
                    className="text-[#1d61e7] font-semibold underline hover:text-blue-800 cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                  .
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDemoModal;
