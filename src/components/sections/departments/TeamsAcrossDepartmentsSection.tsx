"use client";

import React, { useState } from "react";
import { AlertCircle, Grid, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/common";
import { NETROM_DEPARTMENT_DATA } from "@/data/departments";

export function TeamsAcrossDepartmentsSection() {
  const [selectedDept, setSelectedDept] = useState("management");
  const [selectedDeptApp, setSelectedDeptApp] = useState("dashboard");

  // Messages & Broadcasts state (the only fully interactive replica besides
  // Management & OKRs)
  const [pcMessages, setPcMessages] = useState([
    {
      id: 1,
      sender: "Chukwudi Okeke",
      initials: "CO",
      date: "12 May",
      fullDate: "Friday May 15th · 12 May",
      subject: "Q2 OKR Review — Friday May 15th",
      body:
        "Team,\n\nPlease prepare your Q2 OKR progress updates for the review meeting on Friday May 15th at 10:00 AM. All team leads should submit their department reports to the portal by Thursday EOD.\n\nChukwudi Okeke\nManagement",
      replies: [] as { author: string; time: string; text: string }[],
    },
    {
      id: 2,
      sender: "Emeka Nwosu",
      initials: "EN",
      date: "30 Apr",
      fullDate: "Thursday · 30 Apr",
      subject: "May 2026 Payslips — Now Available",
      body:
        "Dear Staff,\n\nPlease note that the April 2026 payslips have been generated and published to your individual portals. Kindly review your allowances and tax withholdings.\n\nEmeka Nwosu\nHR Department",
      replies: [] as { author: string; time: string; text: string }[],
    },
  ]);
  const [pcActiveMessageId, setPcActiveMessageId] = useState(1);
  const [pcReplyDraft, setPcReplyDraft] = useState("");

  const sendPcReply = () => {
    const text = pcReplyDraft.trim();
    if (!text) return;
    setPcMessages((prev) =>
      prev.map((m) =>
        m.id === pcActiveMessageId
          ? {
            ...m,
            replies: [
              ...m.replies,
              { author: "Adaeze Okafor (You)", time: "Just now", text },
            ],
          }
          : m,
      ),
    );
    setPcReplyDraft("");
  };

  return (
    <section id="departments" className="bg-[#fbf7ee] py-16 sm:py-24 border-t border-amber-200/50 relative overflow-hidden select-none">
      <ScrollReveal direction="fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Headline */}
          <div className="max-w-4xl mb-10 sm:mb-12 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-gray-900 tracking-tight leading-[1.14]">
              Every team has a role to play.
              <br className="hidden sm:inline" />
              Netrom connects them all.
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mt-3 font-normal max-w-3xl leading-relaxed">
              From onboarding a new employee to approving a requisition,
              tracking strategic goals or reviewing financial performance,
              Netrom connects the people, processes and information behind
              everyday business operations.
            </p>
          </div>

          {/* Department Tab Switcher Bar */}
          <div className="mb-12 overflow-x-auto pb-2 scrollbar-none">
            <div className="bg-white rounded-2xl p-1.5 shadow-xs border border-gray-200/80 inline-flex items-center gap-1.5 sm:gap-2">
              {Object.keys(NETROM_DEPARTMENT_DATA).map((deptKey) => {
                const dept = NETROM_DEPARTMENT_DATA[deptKey];
                const IconComp = dept.icon;
                const isSelected = selectedDept === deptKey;

                return (
                  <button
                    key={deptKey}
                    onClick={() => {
                      setSelectedDept(deptKey);
                      setSelectedDeptApp(dept.apps[0].id);
                    }}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap focus:outline-none cursor-pointer ${isSelected
                        ? "bg-[#ffc72c] text-gray-900 shadow-sm scale-100"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/70 font-semibold"
                      }`}
                  >
                    <IconComp
                      className={`w-4 h-4 ${isSelected ? "text-gray-900" : "text-gray-500"}`}
                    />
                    <span>{dept.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Department Detailed Showcase Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6 pt-2 text-left">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-snug">
                {NETROM_DEPARTMENT_DATA[selectedDept].headline}
              </h3>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                {NETROM_DEPARTMENT_DATA[selectedDept].paragraph}
              </p>
            </div>

            {/* Right Interactive UI App Replica Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden text-xs text-gray-800 transition-all duration-300">
                {/* Window chrome — no URL shown */}
                <div className="bg-slate-900 px-4 py-2.5 text-white flex items-center justify-between text-xs border-b border-slate-800">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Live Interactive Frame
                  </span>
                </div>

                {/* ------------------------------- */}
                {/* MANAGEMENT & OKRs REPLICA (interactive; sidebar frozen) */}
                {/* ------------------------------- */}
                {selectedDept === "management" && (
                  <div className="flex flex-col md:flex-row min-h-[560px]">
                    <div className="w-full md:w-56 bg-white border-r border-gray-200 p-3 flex-none text-[11.5px] font-medium text-gray-600 space-y-1 hidden md:block pointer-events-none select-none">
                      <div className="p-2 mb-2 font-bold text-blue-700 bg-blue-50/80 rounded-lg flex items-center space-x-2">
                        <Grid className="w-4 h-4" />
                        <span>Dashboard</span>
                      </div>
                      <div className="p-2 rounded-lg flex items-center justify-between">
                        <span>Approval Console</span>
                        <span className="bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">2</span>
                      </div>
                      <div className="p-2 rounded-lg">Goals & OKRs</div>
                      <div className="p-2 rounded-lg">Tasks & OKRs</div>
                      <div className="p-2 rounded-lg">Attendance</div>
                      <div className="p-2 rounded-lg">Requisitions</div>
                      <div className="p-2 rounded-lg">Finance</div>
                      <div className="p-2 rounded-lg">Documents</div>
                      <div className="p-2 rounded-lg">Staff Management</div>
                      <div className="p-2 rounded-lg">Reports & Analytics</div>
                      <div className="p-2 rounded-lg flex items-center justify-between">
                        <span>Messages</span>
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                      </div>
                    </div>

                    <div className="flex-1 p-4 sm:p-6 bg-slate-50 space-y-5 overflow-y-auto max-h-[620px]">
                      <div>
                        <p className="text-[10px] text-gray-500 font-medium">PGS Portal &gt; Dashboard</p>
                        <h2 className="text-xl font-extrabold text-gray-900 tracking-tight mt-0.5">Management Dashboard</h2>
                      </div>

                      <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 flex items-center space-x-3 shadow-sm">
                        <div className="w-9 h-9 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center flex-none">
                          <Zap className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-xs">Strategic Console</h4>
                          <p className="text-[11px] text-gray-500">Needs attention, organizational health, OKR portfolio and console overview</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-2.5">Needs Your Attention</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm relative">
                            <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-red-500" />
                            <div className="text-2xl font-black text-gray-900">2</div>
                            <p className="text-xs font-bold text-gray-800 mt-1">Pending Requisitions</p>
                            <p className="text-[10px] text-gray-500">Awaiting your approval</p>
                            <button
                              onClick={() => setSelectedDept("requisitions")}
                              className="text-blue-600 hover:text-blue-800 text-[11px] font-bold mt-3 inline-block cursor-pointer"
                            >
                              Review →
                            </button>
                          </div>
                          <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm relative">
                            <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-red-500" />
                            <div className="text-2xl font-black text-gray-900">34</div>
                            <p className="text-xs font-bold text-gray-800 mt-1">Tasks Pending Review</p>
                            <p className="text-[10px] text-gray-500">Require management review</p>
                            <span className="text-gray-400 text-[11px] font-bold mt-3 inline-block">Review →</span>
                          </div>
                          <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm relative">
                            <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-orange-500" />
                            <div className="text-2xl font-black text-gray-900">2</div>
                            <p className="text-xs font-bold text-gray-800 mt-1">Leave Requests</p>
                            <p className="text-[10px] text-gray-500">Awaiting approval</p>
                            <button
                              onClick={() => setSelectedDept("hr")}
                              className="text-blue-600 hover:text-blue-800 text-[11px] font-bold mt-3 inline-block cursor-pointer"
                            >
                              Approve →
                            </button>
                          </div>
                          <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm relative">
                            <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-red-500" />
                            <div className="text-2xl font-black text-gray-900">11</div>
                            <p className="text-xs font-bold text-gray-800 mt-1">At-Risk OKRs</p>
                            <p className="text-[10px] text-gray-500">Require immediate attention</p>
                            <span className="text-gray-400 text-[11px] font-bold mt-3 inline-block">View →</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-2.5">Organizational Health</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          {[
                            { label: "OKR Progress", value: "24.5%", target: "Target: 75%", note: "↑ +4% this month" },
                            { label: "Portfolio Health", value: "28.1%", target: "Target: 80%", note: "↑ On track" },
                            { label: "Monthly Spend vs Budget", value: "₦4.9M", target: "Target: ₦5,000,000", note: "↑ 98.2% utilized" },
                            { label: "Task Completion Rate", value: "82%", target: "Target: 90%", note: "↑ +3% vs last month" },
                          ].map((k) => (
                            <div key={k.label} className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm">
                              <p className="text-[10px] font-bold text-gray-400 uppercase">{k.label}</p>
                              <div className="text-xl font-extrabold text-gray-900 mt-0.5">{k.value}</div>
                              <p className="text-[10px] text-gray-500">{k.target}</p>
                              <p className="text-[10px] text-emerald-600 font-semibold mt-1">{k.note}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                        <h4 className="font-bold text-gray-900 text-xs mb-3">OKR & Portfolio Health Summary</h4>
                        <div className="space-y-3">
                          {[
                            { title: "Achieve 95% Portal Adoption Across All Staff", progress: 71 },
                            { title: "Reduce Payroll Processing Time by 30%", progress: 80 },
                            { title: "Complete Engineering Platform Modernisation", progress: 85 },
                            { title: "Increase Share of Base Revenue Streams by 25%", progress: 40 },
                            { title: "Optimize Logistics Requisition Cycle Time", progress: 62 },
                          ].map((okr) => (
                            <div key={okr.title}>
                              <div className="flex justify-between text-[11px] font-medium text-gray-700 mb-1">
                                <span className="truncate max-w-[70%]">{okr.title}</span>
                                <span className="font-bold text-emerald-700">{okr.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                <div className="bg-emerald-600 h-full rounded-full" style={{ width: `${okr.progress}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-2.5 flex flex-wrap items-center justify-between gap-2 shadow-sm">
                        <div className="flex items-center space-x-1.5 flex-wrap">
                          <button className="bg-blue-600 text-white font-bold text-xs px-3 py-1.5 rounded-lg cursor-default">+ Assign Task</button>
                          <button className="bg-gray-100 text-gray-700 font-semibold text-xs px-2.5 py-1.5 rounded-lg cursor-default">New OKR</button>
                          <button
                            onClick={() => setSelectedDept("hr")}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs px-2.5 py-1.5 rounded-lg cursor-pointer"
                          >
                            Leave queue
                          </button>
                          <button
                            onClick={() => setSelectedDept("hr")}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs px-2.5 py-1.5 rounded-lg cursor-pointer"
                          >
                            Staff directory
                          </button>
                        </div>
                        <div className="text-[10px] font-bold text-gray-400">CONSOLE OVERVIEW</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ------------------------------- */}
                {/* MESSAGES & BROADCASTS REPLICA (fully interactive, no toasts) */}
                {/* ------------------------------- */}
                {selectedDept === "messages" &&
                  (() => {
                    const activeMsg =
                      pcMessages.find((m) => m.id === pcActiveMessageId) || pcMessages[0];
                    return (
                      <div className="flex flex-col md:flex-row min-h-[560px]">
                        <div className="w-full md:w-80 bg-white border-r border-gray-200 flex flex-col flex-none">
                          <div className="p-3 border-b border-gray-200 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-xs text-gray-800">Messages</span>
                              <button className="bg-blue-600 text-white font-bold text-[11px] px-2.5 py-1 rounded-md cursor-default">
                                + Compose
                              </button>
                            </div>
                            <div className="flex border-b border-gray-100 text-xs font-semibold text-gray-500">
                              <button className="py-1.5 text-blue-600 border-b-2 border-blue-600 font-bold mr-4">
                                Inbox ({pcMessages.length})
                              </button>
                              <button className="py-1.5 text-gray-400 cursor-default">Sent</button>
                            </div>
                          </div>
                          <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
                            {pcMessages.map((msg) => (
                              <div
                                key={msg.id}
                                onClick={() => setPcActiveMessageId(msg.id)}
                                className={`p-3 hover:bg-gray-50 cursor-pointer transition-colors ${msg.id === activeMsg.id ? "bg-blue-50/60 border-l-4 border-blue-600" : ""
                                  }`}
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <div className="flex items-center space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold flex items-center justify-center">
                                      {msg.initials}
                                    </div>
                                    <span className="font-bold text-xs text-gray-900">{msg.sender}</span>
                                  </div>
                                  <span className="text-[10px] text-gray-400">{msg.date}</span>
                                </div>
                                <p className="font-semibold text-xs text-gray-800 truncate">{msg.subject}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex-1 flex flex-col bg-white">
                          <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
                            <div>
                              <p className="text-[10px] text-gray-500">Management &gt; Messages</p>
                              <h3 className="font-black text-gray-900 text-base mt-0.5">Messages</h3>
                            </div>
                            <button className="border border-gray-300 text-gray-700 text-xs font-semibold px-3 py-1 rounded-md cursor-default">
                              ↩ Reply
                            </button>
                          </div>

                          <div className="p-6 flex-1 overflow-y-auto space-y-5">
                            <div className="flex items-start space-x-3">
                              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-800 font-bold flex items-center justify-center text-sm">
                                {activeMsg.initials}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-baseline justify-between">
                                  <h4 className="font-bold text-gray-900 text-sm">{activeMsg.sender}</h4>
                                  <span className="text-xs text-gray-400">{activeMsg.fullDate}</span>
                                </div>
                                <p className="text-xs font-semibold text-blue-700 mt-0.5">{activeMsg.subject}</p>
                                <div className="mt-4 text-xs text-gray-700 whitespace-pre-line leading-relaxed border-t border-b border-gray-100 py-4">
                                  {activeMsg.body}
                                </div>

                                {activeMsg.replies.length > 0 && (
                                  <div className="mt-4 space-y-3">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">Replies</p>
                                    {activeMsg.replies.map((r, i) => (
                                      <div key={i} className="bg-blue-50/50 border border-blue-100 rounded-xl p-3 text-xs">
                                        <div className="flex justify-between font-bold text-gray-800 mb-1">
                                          <span>{r.author}</span>
                                          <span className="text-[10px] text-gray-400 font-normal">{r.time}</span>
                                        </div>
                                        <p className="text-gray-700">{r.text}</p>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                <div className="mt-6 pt-4 border-t border-gray-100">
                                  <label className="block text-xs font-bold text-gray-700 mb-2">Quick Reply</label>
                                  <textarea
                                    rows={3}
                                    value={pcReplyDraft}
                                    onChange={(e) => setPcReplyDraft(e.target.value)}
                                    placeholder="Type your reply..."
                                    className="w-full border border-gray-300 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50/50"
                                  />
                                  <div className="mt-2 text-right">
                                    <button
                                      onClick={sendPcReply}
                                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl cursor-pointer"
                                    >
                                      Send Reply
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                {/* ------------------------------- */}
                {/* OPERATIONS & STOCK REPLICA (static mockup — not clickable) */}
                {/* ------------------------------- */}
                {selectedDept === "operations" && (
                  <div className="min-h-[560px] p-4 sm:p-6 bg-slate-50 space-y-4 pointer-events-none select-none">
                    <div>
                      <p className="text-[10px] text-gray-500 font-medium">HR Admin &gt; Operations</p>
                      <h2 className="text-xl font-extrabold text-gray-900 tracking-tight mt-0.5">Operations</h2>
                      <p className="text-gray-500 text-[11px] mt-0.5">
                        Inventory & asset tracking, vendor management, purchase orders and RFQs
                      </p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-xl px-3.5 py-2.5 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-none" />
                      <p className="text-[11.5px]">
                        <strong>2 item(s) need restocking.</strong> Printing Paper (1≤1), Office Envelopes
                        (5 pcs≤5) — raise a purchase order to restock.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-200/80 p-1.5 inline-flex items-center gap-1 shadow-sm">
                      {["Asset & Inventory", "Vendors", "Purchase Orders", "RFQs / Quotes"].map((t, i) => (
                        <span
                          key={t}
                          className={`px-3 py-1.5 rounded-lg text-[11.5px] font-bold ${i === 0 ? "text-blue-700 bg-blue-50" : "text-gray-400"
                            }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      {[
                        { label: "Total Items", value: 18, color: "text-blue-700 bg-blue-50" },
                        { label: "Assigned", value: 10, color: "text-emerald-700 bg-emerald-50" },
                        { label: "Available", value: 5, color: "text-amber-700 bg-amber-50" },
                        { label: "Low Stock", value: 2, color: "text-purple-700 bg-purple-50" },
                      ].map((k) => (
                        <div key={k.label} className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm">
                          <span className={`inline-block text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded ${k.color}`}>
                            {k.label}
                          </span>
                          <div className="text-2xl font-black text-gray-900 mt-1.5">{k.value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                      <div className="p-3.5 border-b border-gray-100">
                        <h4 className="font-bold text-gray-900 text-xs">Inventory & Assets</h4>
                      </div>
                      <table className="w-full text-left text-xs">
                        <thead className="bg-gray-50 text-[10px] uppercase text-gray-500 font-bold border-b border-gray-100">
                          <tr>
                            <th className="p-2.5">Item</th>
                            <th className="p-2.5">Category</th>
                            <th className="p-2.5">Stock</th>
                            <th className="p-2.5">Condition</th>
                            <th className="p-2.5">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {[
                            { name: "Alienware Laptop", cat: "IT Equipment", stock: "5 pcs", cond: "New", status: "Available" },
                            { name: "Apple MacBook Air M2", cat: "Laptop", stock: "1", cond: "Good", status: "Assigned" },
                            { name: "Canon PIXMA Printer G3411", cat: "Printer", stock: "1", cond: "Fair", status: "Available" },
                            { name: "Printing Paper (A4 Ream)", cat: "Consumable", stock: "1", cond: "—", status: "Low Stock" },
                          ].map((a) => (
                            <tr key={a.name}>
                              <td className="p-2.5 font-bold text-gray-900">{a.name}</td>
                              <td className="p-2.5 text-gray-600">{a.cat}</td>
                              <td className="p-2.5 font-semibold text-gray-800">{a.stock}</td>
                              <td className="p-2.5 text-gray-500">{a.cond}</td>
                              <td className="p-2.5">
                                <span
                                  className={`text-[11px] font-bold ${a.status === "Available"
                                      ? "text-emerald-600"
                                      : a.status === "Assigned"
                                        ? "text-blue-600"
                                        : "text-red-600"
                                    }`}
                                >
                                  {a.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* ------------------------------- */}
                {/* FINANCE & LEDGER REPLICA (static mockup — not clickable) */}
                {/* ------------------------------- */}
                {selectedDept === "finance" && (
                  <div className="min-h-[560px] p-5 bg-slate-900 text-slate-100 space-y-5 pointer-events-none select-none">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                      <div>
                        <h3 className="text-lg font-bold text-amber-400">Finance & General Ledger</h3>
                        <p className="text-xs text-slate-400">All figures in Nigerian Naira (₦) · Q3 2026</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { label: "Total Revenue", value: "₦48.2M", note: "↑ +12.4% vs last Q", color: "text-emerald-400" },
                        { label: "Operating Expenses", value: "₦32.6M", note: "within budget", color: "text-amber-400" },
                        { label: "Net Profit Margin", value: "32.3%", note: "Healthy margin", color: "text-blue-400" },
                        { label: "Cash Reserves", value: "₦15.6M", note: "Abuja Treasury Account", color: "text-indigo-400" },
                        { label: "Accounts Receivable", value: "₦6.4M", note: "18 open invoices", color: "text-teal-400" },
                        { label: "Accounts Payable", value: "₦3.1M", note: "9 vendor bills due", color: "text-rose-400" },
                        { label: "Monthly Burn Rate", value: "₦10.8M", note: "~4.4 months runway", color: "text-orange-400" },
                        { label: "Budget Utilization", value: "98.2%", note: "Target: ₦5,000,000/mo", color: "text-emerald-400" },
                      ].map((k) => (
                        <div key={k.label} className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                          <span className="text-[10px] uppercase font-bold text-slate-400">{k.label}</span>
                          <div className={`text-xl font-extrabold font-mono mt-1 ${k.color}`}>{k.value}</div>
                          <span className="text-[10px] text-slate-400">{k.note}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="lg:col-span-2 bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                        <h4 className="text-xs font-bold text-slate-300 mb-3">Monthly Revenue vs Expenditure (₦M)</h4>
                        <div className="flex items-end gap-3 h-40">
                          {[
                            { m: "May", rev: 38, exp: 28 },
                            { m: "Jun", rev: 42, exp: 30 },
                            { m: "Jul", rev: 45, exp: 31 },
                            { m: "Aug", rev: 41, exp: 29 },
                            { m: "Sep", rev: 48, exp: 32 },
                            { m: "Oct", rev: 52, exp: 34 },
                          ].map((d) => (
                            <div key={d.m} className="flex-1 flex flex-col items-center gap-1">
                              <div className="w-full flex items-end gap-0.5 h-32">
                                <div className="flex-1 bg-emerald-500 rounded-t" style={{ height: `${(d.rev / 55) * 100}%` }} />
                                <div className="flex-1 bg-amber-500 rounded-t" style={{ height: `${(d.exp / 55) * 100}%` }} />
                              </div>
                              <span className="text-[9px] text-slate-400">{d.m}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-[10px] text-slate-400">
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" /> Revenue
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-amber-500" /> Expenses
                          </span>
                        </div>
                      </div>

                      <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                        <h4 className="text-xs font-bold text-slate-300 mb-3">Expense by Category</h4>
                        <div
                          className="w-28 h-28 rounded-full mx-auto"
                          style={{
                            background:
                              "conic-gradient(#60a5fa 0% 42%, #34d399 42% 66%, #fbbf24 66% 81%, #f472b6 81% 92%, #a78bfa 92% 100%)",
                          }}
                        />
                        <div className="mt-3 space-y-1 text-[10px] text-slate-300">
                          {[
                            { c: "bg-blue-400", label: "Payroll", pct: "42%" },
                            { c: "bg-emerald-400", label: "Vendors & Logistics", pct: "24%" },
                            { c: "bg-amber-400", label: "Cloud & IT", pct: "15%" },
                            { c: "bg-pink-400", label: "Facilities", pct: "11%" },
                            { c: "bg-purple-400", label: "Marketing", pct: "8%" },
                          ].map((l) => (
                            <div key={l.label} className="flex justify-between">
                              <span className="flex items-center gap-1">
                                <span className={`w-2 h-2 rounded-full ${l.c}`} />
                                {l.label}
                              </span>
                              <span>{l.pct}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-800/60 rounded-xl border border-slate-700 overflow-hidden">
                      <div className="p-3.5 border-b border-slate-700">
                        <h4 className="text-xs font-bold text-slate-300">Budget vs Actual by Department</h4>
                      </div>
                      <table className="w-full text-left text-xs">
                        <thead className="text-[10px] uppercase text-slate-400 border-b border-slate-700 font-bold">
                          <tr>
                            <th className="p-2.5">Department</th>
                            <th className="p-2.5">Budget</th>
                            <th className="p-2.5">Actual</th>
                            <th className="p-2.5 w-32">Utilization</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700/70">
                          {[
                            { dept: "Engineering", budget: 14.5, actual: 13.8 },
                            { dept: "Operations", budget: 8.2, actual: 8.9 },
                            { dept: "Sales & Marketing", budget: 6.0, actual: 5.1 },
                            { dept: "HR & People Ops", budget: 3.9, actual: 3.6 },
                          ].map((r) => {
                            const pct = Math.round((r.actual / r.budget) * 100);
                            const over = r.actual > r.budget;
                            return (
                              <tr key={r.dept}>
                                <td className="p-2.5 font-semibold text-slate-200">{r.dept}</td>
                                <td className="p-2.5 font-mono text-slate-300">₦{r.budget.toFixed(1)}M</td>
                                <td className="p-2.5 font-mono text-slate-300">₦{r.actual.toFixed(1)}M</td>
                                <td className="p-2.5">
                                  <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                    <div
                                      className={`h-full rounded-full ${over ? "bg-rose-500" : "bg-emerald-500"}`}
                                      style={{ width: `${Math.min(pct, 100)}%` }}
                                    />
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* ------------------------------- */}
                {/* HR & PEOPLE OPS REPLICA (static mockup — not clickable) */}
                {/* ------------------------------- */}
                {selectedDept === "hr" && (
                  <div className="min-h-[560px] bg-white pointer-events-none select-none">
                    <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-gray-400">PGS Portal &gt; HR</p>
                        <h3 className="text-base font-bold text-gray-900">Staff Directory</h3>
                      </div>
                    </div>
                    <div className="px-4 sm:px-5 pt-3 flex gap-5 border-b border-gray-100 text-[11.5px] font-bold">
                      {["Staff Directory", "Attendance", "Performance", "Leave"].map((t, i) => (
                        <span key={t} className={`pb-2.5 ${i === 0 ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-400"}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="p-4 sm:p-5 bg-slate-50">
                      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-gray-50 text-[10px] uppercase text-gray-500 border-b border-gray-200 font-bold">
                            <tr>
                              <th className="p-2.5">Name</th>
                              <th className="p-2.5">Department</th>
                              <th className="p-2.5">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {[
                              { name: "Adaeze Okafor", dept: "HR Operations", status: "Active" },
                              { name: "Chukwudi Okeke", dept: "Management", status: "Active" },
                              { name: "Emeka Nwosu", dept: "HR Operations", status: "On Leave" },
                              { name: "Amara Nwosu", dept: "Engineering", status: "Active" },
                            ].map((s) => (
                              <tr key={s.name}>
                                <td className="p-2.5 font-semibold">{s.name}</td>
                                <td className="p-2.5">{s.dept}</td>
                                <td className="p-2.5">
                                  <span className={`font-bold ${s.status === "Active" ? "text-emerald-700" : "text-amber-700"}`}>
                                    {s.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* ------------------------------- */}
                {/* REQUISITIONS REPLICA (static mockup — not clickable) */}
                {/* ------------------------------- */}
                {selectedDept === "requisitions" && (
                  <div className="min-h-[560px] p-5 bg-white space-y-4 text-xs pointer-events-none select-none">
                    <div>
                      <p className="text-[10px] text-gray-400">PGS Portal &gt; Requisitions</p>
                      <h3 className="text-base font-bold text-gray-900">Procurement & Expense Approvals</h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        {
                          id: "REQ-1092",
                          title: "Dell XPS 15 Workstations (3 Units)",
                          dept: "Engineering",
                          amount: "₦2,450,000",
                          requester: "Oluwaseun Bakare",
                          date: "2026-09-21",
                          status: "Pending",
                        },
                        {
                          id: "REQ-1093",
                          title: "Q4 AWS Cloud Infrastructure Renewal",
                          dept: "DevOps",
                          amount: "₦1,820,000",
                          requester: "Chukwudi Okeke",
                          date: "2026-09-22",
                          status: "Pending",
                        },
                        {
                          id: "REQ-1088",
                          title: "Headquarters Office Supplies & Stationery",
                          dept: "Admin",
                          amount: "₦340,000",
                          requester: "Blessing Adebayo",
                          date: "2026-09-19",
                          status: "Approved",
                        },
                      ].map((r) => (
                        <div key={r.id} className="border border-gray-200 rounded-xl p-3.5 bg-white shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="font-mono font-bold text-blue-700">{r.id}</span>
                              <span className="bg-gray-100 text-gray-700 text-[10px] px-2 py-0.5 rounded font-semibold">{r.dept}</span>
                            </div>
                            <span className="font-bold text-sm text-gray-900 font-mono">{r.amount}</span>
                          </div>
                          <p className="font-bold text-gray-800 text-xs">{r.title}</p>
                          <p className="text-[11px] text-gray-500 mt-0.5">
                            Requested by {r.requester} on {r.date}
                          </p>
                          <div className="mt-3 pt-2.5 border-t border-gray-100">
                            <span className={`text-[11px] font-bold ${r.status === "Approved" ? "text-emerald-600" : "text-amber-600"}`}>
                              Status: {r.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}