"use client";

import React, { useState, forwardRef } from "react";
import {
  AlertCircle,
  BarChart2,
  Bell,
  Briefcase,
  Calendar,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  FileText,
  Globe,
  Info,
  MessageSquare,
  Plus,
  RefreshCw,
  Search,
  Send,
  Settings,
  Sliders,
  Sparkles,
  TrendingUp,
  User,
  Users,
  Box,
  CheckSquare,
  GraduationCap,
  LayoutGrid,
  Target,
  X,
  Zap,
} from "lucide-react";
import { RedHotspot, ScrollReveal } from "@/components/common";
import { HOTSPOT_DETAILS } from "@/data/hotspots";

interface DashboardShowcaseProps {
  onToggleNotifications: () => void;
  onOpenContact?: () => void;
}

export const DashboardShowcase = forwardRef<HTMLDivElement, DashboardShowcaseProps>(
  ({ onToggleNotifications, onOpenContact }, ref) => {
    const [activeDashboardTab, setActiveDashboardTab] = useState("overview");
    const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
    const [dashboardView, setDashboardView] = useState("dashboard");
    const [requisitionModalOpen, setRequisitionModalOpen] = useState(false);

    const handleHotspotClick = (hotspotId: string) => {
      setActiveHotspot(hotspotId);
      if (hotspotId === "notifications") {
        onToggleNotifications();
      } else {
        setDashboardView(hotspotId);
      }
    };

    const resetToOverview = () => {
      setActiveHotspot(null);
      setDashboardView("overview");
    };

    return (
      <section
        id="os-showcase"
        ref={ref}
        className="relative py-12 md:py-20 bg-gradient-to-b from-amber-50/40 via-yellow-100/30 to-amber-100/50 border-t border-gray-200 overflow-hidden"
      >
        <ScrollReveal direction="left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10 space-y-3">
              <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-300 text-amber-900 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                <span>SEE NETROM IN ACTION</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                Everything your teams need. One place to run it.
              </h2>

              <p className="text-sm md:text-base text-gray-700 font-normal">
                Move from scattered spreadsheets, disconnected tools and approval
                bottlenecks to a single workspace where employees, managers, HR
                and Finance can work from the same source of truth.
              </p>

              {/* Hotspot Helper Banner */}
              <div className="pt-2 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-xs border border-red-200 shadow-sm rounded-lg px-4 py-2.5 flex items-center space-x-3 text-xs md:text-sm text-gray-800">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                  </span>
                  <span className="font-bold text-gray-900">
                    Explore Netrom:
                  </span>
                  <span className="font-medium text-gray-700">
                    Click a highlighted area to see how each part of the platform
                    helps your organisation manage everyday work.
                  </span>
                  {dashboardView !== "overview" && (
                    <button
                      onClick={resetToOverview}
                      className="ml-2 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-2.5 py-1 rounded border border-gray-300 transition-colors flex items-center space-x-1 cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Reset Overview</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* DASHBOARD FRAME CONTAINER */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white transition-all duration-300">
              {/* Top Slate App Window Chrome Header Bar */}
              <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800 text-xs sm:text-sm select-none">
                {/* Left: Window Controls & App Title */}
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-xs" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-xs" />
                    <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-xs" />
                  </div>
                  <div className="h-4 w-px bg-slate-700 mx-1 hidden sm:block" />
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded bg-gradient-to-tr from-[#0066cc] via-[#e43338] to-[#ffb400] flex items-center justify-center text-white text-[10px] font-black">
                      P
                    </div>
                    <span className="font-extrabold text-xs sm:text-sm tracking-wide text-white">
                      Netrom <span className="text-blue-400">OS</span>
                    </span>
                    <span className="hidden md:inline-flex items-center gap-1.5 text-[10px] font-semibold bg-slate-800 px-2 py-0.5 rounded-full text-slate-300 border border-slate-700 ml-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Workspace Console
                    </span>
                  </div>
                </div>

                {/* Right Utility Controls */}
                <div className="flex items-center space-x-3 sm:space-x-4 text-slate-300">
                  <button className="hover:text-white p-1 transition-colors cursor-pointer" title="Search Workspace">
                    <Search className="w-4 h-4" />
                  </button>

                  {/* Notification Bell with Hotspot */}
                  <div className="relative flex items-center">
                    <button
                      onClick={() => handleHotspotClick("notifications")}
                      className="hover:text-white p-1 transition-colors relative cursor-pointer"
                    >
                      <Bell className="w-4 h-4" />
                      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <RedHotspot
                      id="notifications"
                      activeHotspot={activeHotspot}
                      onClick={handleHotspotClick}
                      tooltipLabel="System Notifications"
                      className="-top-1 -right-1 absolute"
                    />
                  </div>

                  <button className="hover:text-white p-1 transition-colors cursor-pointer" title="Calendar">
                    <Calendar className="w-4 h-4" />
                  </button>
                  <button className="hover:text-white p-1 transition-colors cursor-pointer" title="Settings">
                    <Settings className="w-4 h-4" />
                  </button>

                  {/* User Profile Avatar */}
                  <div className="flex items-center space-x-2 pl-1 border-l border-slate-700">
                    <div className="w-6 h-6 rounded-full bg-blue-600 border border-blue-400 overflow-hidden flex items-center justify-center text-[10px] font-bold text-white">
                      OB
                    </div>
                    <span className="text-xs font-medium text-slate-200 hidden lg:inline-block">Oluwaseun B.</span>
                  </div>
                </div>
              </div>

              {/* White Secondary Dashboard Header Control Bar */}
              <div className="bg-white border-b border-gray-200 px-4 py-2 flex flex-wrap items-center justify-between text-xs sm:text-sm text-gray-700">
                {/* Left Sub-Nav Tabs */}
                <div className="flex items-center space-x-1 sm:space-x-3 font-semibold py-1">
                  <button
                    onClick={() => {
                      setActiveDashboardTab("overview");
                      setDashboardView("overview");
                      setActiveHotspot(null);
                    }}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${activeDashboardTab === "overview" && dashboardView === "overview"
                        ? "text-blue-700 font-bold bg-blue-50 border border-blue-200"
                        : "hover:bg-gray-100 text-gray-600"
                      }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Workspace Overview</span>
                  </button>

                  <button
                    onClick={() => handleHotspotClick("people")}
                    className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${dashboardView === "people"
                        ? "text-blue-700 font-bold bg-blue-50 border border-blue-200"
                        : "hover:bg-gray-100 text-gray-600"
                      }`}
                  >
                    HR & People
                  </button>

                  <button
                    onClick={() => handleHotspotClick("finance")}
                    className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${dashboardView === "finance"
                        ? "text-blue-700 font-bold bg-blue-50 border border-blue-200"
                        : "hover:bg-gray-100 text-gray-600"
                      }`}
                  >
                    Requisitions & Finance
                  </button>

                  <button
                    onClick={() => handleHotspotClick("tasks")}
                    className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${dashboardView === "tasks"
                        ? "text-blue-700 font-bold bg-blue-50 border border-blue-200"
                        : "hover:bg-gray-100 text-gray-600"
                      }`}
                  >
                    OKRs & Performance
                  </button>
                </div>

                {/* Right View Action Controls */}
                <div className="flex items-center space-x-2 py-1">
                  <button
                    onClick={resetToOverview}
                    className="p-1.5 text-gray-500 hover:text-gray-900 rounded hover:bg-gray-100 transition-colors cursor-pointer"
                    title="Refresh Dashboard"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                  <button className="border border-gray-300 text-gray-700 font-semibold px-3 py-1 rounded-md text-xs hover:bg-gray-50 transition-colors cursor-pointer">
                    Customize
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-1 rounded-md text-xs shadow-xs transition-colors cursor-pointer flex items-center space-x-1">
                    <Plus className="w-3 h-3" />
                    <span>Add Widget</span>
                  </button>
                </div>
              </div>

              {/* Main Dashboard Area (Left Dock + Main Canvas) */}
              <div className="flex h-[620px] max-h-[620px] bg-slate-50 overflow-hidden">
                {/* SIDEBAR NAVIGATION (Matching input_file_0.png) */}
                <div className="w-56 md:w-60 bg-white border-r border-gray-200 flex flex-col shrink-0 select-none py-4 px-3 space-y-3 h-full">
                  {/* Brand Header inside Sidebar */}
                  <div className="flex items-center justify-between px-2 pb-3 border-b border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-md bg-[#0052cc] flex items-center justify-center text-white font-black text-xs">
                        ✦
                      </div>
                      <span className="font-extrabold text-xs tracking-tight text-[#0f2552]">
                        PRIMEGUAGE
                        <span className="block text-[8px] font-semibold text-gray-400 tracking-widest uppercase -mt-0.5">SOLUTIONS</span>
                      </span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100 cursor-pointer">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Module List (13 Modules matching user's exact list) */}
                  <div className="flex-1 space-y-1 overflow-y-auto pr-1">
                    {[
                      { id: "overview", name: "Dashboard", icon: LayoutGrid, hasImage: true },
                      { id: "approval", name: "Approval Console", icon: CheckSquare, badge: "2", hasImage: false },
                      { id: "people", name: "Staff Management", icon: Users, hasImage: true },
                      { id: "profile", name: "My Profile", icon: User, hasImage: false },
                      { id: "attendance", name: "Attendance", icon: Clock, hasImage: false },
                      { id: "tasks", name: "Tasks & OKRs", icon: Target, hasImage: true },
                      { id: "finance", name: "Finance", icon: DollarSign, hasImage: true },
                      { id: "documents", name: "Documents", icon: FileText, hasImage: false },
                      { id: "operations", name: "Operations", icon: Box, hasImage: false },
                      { id: "training", name: "Training", icon: GraduationCap, hasImage: false },
                      { id: "insights", name: "Staff Insights", icon: BarChart2, hasImage: false },
                      { id: "departments", name: "Departments", icon: Briefcase, hasImage: false },
                      { id: "mail", name: "Messages", icon: MessageSquare, badge: "5", hasImage: true },
                    ].map((mod) => {
                      const IconComp = mod.icon;
                      const isActive =
                        dashboardView === mod.id ||
                        (mod.id === "overview" && (dashboardView === "overview" || dashboardView === "dashboard"));

                      return (
                        <button
                          key={mod.id}
                          disabled={!mod.hasImage}
                          onClick={() => {
                            if (mod.hasImage) {
                              setDashboardView(mod.id);
                              setActiveHotspot(null);
                            }
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all ${!mod.hasImage
                              ? "opacity-45 text-slate-400 cursor-not-allowed"
                              : isActive
                                ? "bg-[#1d61e7] text-white shadow-md font-bold cursor-pointer"
                                : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-semibold cursor-pointer"
                            }`}
                          title={mod.hasImage ? `View ${mod.name} Console` : `${mod.name} (Module inactive)`}
                        >
                          <div className="flex items-center space-x-2.5">
                            <IconComp className={`w-4 h-4 ${isActive ? "text-white" : mod.hasImage ? "text-slate-600" : "text-slate-400"}`} />
                            <span>{mod.name}</span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            {mod.badge && (
                              <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${isActive ? "bg-white text-[#1d61e7]" : "bg-red-500 text-white"
                                }`}>
                                {mod.badge}
                              </span>
                            )}
                            {/* Pulsating Red Hotspot Dot for modules with UI images */}
                            {mod.hasImage && (
                              <span className="relative flex h-2.5 w-2.5" title="Clickable interactive module">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isActive ? "bg-white" : "bg-red-500"}`}></span>
                                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isActive ? "bg-white" : "bg-red-600"}`}></span>
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Dynamic Dashboard Main Content Area */}
                <div className="flex-1 p-4 sm:p-6 overflow-x-auto overflow-y-auto h-full relative border-l border-gray-100">
                  {/* Active Hotspot Info Banner */}
                  {activeHotspot && HOTSPOT_DETAILS[activeHotspot] && (
                    <div className="mb-5 bg-white border-l-4 border-[#e43338] shadow-md rounded-r-xl p-4 flex items-start justify-between animate-in fade-in slide-in-from-top-2 duration-300 border border-gray-200/80">
                      <div className="flex items-start space-x-3.5">
                        <div className="p-2.5 bg-red-50 text-[#e43338] rounded-xl flex-none">
                          <Info className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-extrabold text-sm text-gray-900">
                              {HOTSPOT_DETAILS[activeHotspot].title}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
                              {HOTSPOT_DETAILS[activeHotspot].badge}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                            {HOTSPOT_DETAILS[activeHotspot].description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2.5">
                            {HOTSPOT_DETAILS[activeHotspot].features.map((feat) => (
                              <span
                                key={feat}
                                className="text-[10px] bg-slate-100 text-slate-800 border border-slate-200 px-2 py-0.5 rounded-md font-semibold"
                              >
                                ✓ {feat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={resetToOverview}
                        className="text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                        title="Close preview banner"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* VIEW 1: MANAGEMENT DASHBOARD (New Uploaded Image) */}
                  {(dashboardView === "overview" || dashboardView === "dashboard") && (
                    <div className="space-y-5 animate-in fade-in duration-300 select-none">
                      {/* Top Breadcrumb & Filters Bar */}
                      <div className="text-[11px] text-gray-400 font-semibold">PGS Portal &gt; Dashboard</div>

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <h3 className="text-2xl font-black text-gray-900 tracking-tight">Management Dashboard</h3>

                        <div className="flex items-center space-x-2 bg-white p-1 rounded-xl border border-gray-200 shadow-2xs">
                          <span className="text-xs font-semibold text-gray-400 px-2">Global filters</span>
                          <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-gray-700 font-medium">
                            <option>This Month</option>
                          </select>
                          <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-gray-700 font-medium">
                            <option>All Departments / Teams</option>
                          </select>
                          <button className="text-xs px-2.5 py-1 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 font-semibold">
                            Reset
                          </button>
                        </div>
                      </div>

                      {/* Strategic Console Banner */}
                      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between hover:border-gray-300 transition-colors cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
                            🪙
                          </div>
                          <div>
                            <div className="font-extrabold text-sm text-gray-900">Strategic Console</div>
                            <div className="text-xs text-gray-500">Needs attention, organizational health, OKR portfolio and console overview</div>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>

                      {/* Section: Needs Your Attention */}
                      <div className="space-y-3">
                        <h4 className="font-bold text-xs text-gray-800">Needs Your Attention</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {/* Card 1 */}
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-2 relative">
                            <span className="w-2 h-2 rounded-full bg-amber-500 absolute top-4 right-4" />
                            <div className="text-2xl font-black text-gray-900 font-mono">2</div>
                            <div>
                              <div className="font-bold text-xs text-gray-900">Pending Requisitions</div>
                              <div className="text-[11px] text-gray-500">Awaiting your approval</div>
                            </div>
                            <button
                              onClick={() => setDashboardView("finance")}
                              className="text-xs font-bold text-[#1d61e7] hover:underline flex items-center space-x-1 pt-1 cursor-pointer"
                            >
                              <span>Review →</span>
                            </button>
                          </div>

                          {/* Card 2 */}
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-2 relative">
                            <span className="w-2 h-2 rounded-full bg-red-500 absolute top-4 right-4" />
                            <div className="text-2xl font-black text-gray-900 font-mono">34</div>
                            <div>
                              <div className="font-bold text-xs text-gray-900">Tasks Pending Review</div>
                              <div className="text-[11px] text-gray-500">Require management review</div>
                            </div>
                            <button
                              onClick={() => setDashboardView("tasks")}
                              className="text-xs font-bold text-[#1d61e7] hover:underline flex items-center space-x-1 pt-1 cursor-pointer"
                            >
                              <span>Review →</span>
                            </button>
                          </div>

                          {/* Card 3 */}
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-2 relative">
                            <span className="w-2 h-2 rounded-full bg-amber-500 absolute top-4 right-4" />
                            <div className="text-2xl font-black text-gray-900 font-mono">2</div>
                            <div>
                              <div className="font-bold text-xs text-gray-900">Leave Requests</div>
                              <div className="text-[11px] text-gray-500">Awaiting approval</div>
                            </div>
                            <button
                              onClick={() => setDashboardView("people")}
                              className="text-xs font-bold text-[#1d61e7] hover:underline flex items-center space-x-1 pt-1 cursor-pointer"
                            >
                              <span>Approve →</span>
                            </button>
                          </div>

                          {/* Card 4 */}
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-2 relative">
                            <span className="w-2 h-2 rounded-full bg-red-500 absolute top-4 right-4" />
                            <div className="text-2xl font-black text-gray-900 font-mono">11</div>
                            <div>
                              <div className="font-bold text-xs text-gray-900">At-Risk OKRs</div>
                              <div className="text-[11px] text-gray-500">Require immediate attention</div>
                            </div>
                            <button
                              onClick={() => setDashboardView("tasks")}
                              className="text-xs font-bold text-[#1d61e7] hover:underline flex items-center space-x-1 pt-1 cursor-pointer"
                            >
                              <span>View →</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Section: Organizational Health */}
                      <div className="space-y-3">
                        <h4 className="font-bold text-xs text-gray-800">Organizational Health</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {/* Card 1 */}
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-1.5 relative">
                            <span className="w-2 h-2 rounded-full bg-amber-500 absolute top-4 right-4" />
                            <div className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">OKR PROGRESS</div>
                            <div className="text-2xl font-black text-gray-900 font-mono">24.5%</div>
                            <div className="text-[11px] text-gray-500">Target: 75%</div>
                            <div className="text-[11px] text-emerald-600 font-bold">↑ +4% this month</div>
                          </div>

                          {/* Card 2 */}
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-1.5 relative">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 absolute top-4 right-4" />
                            <div className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">PORTFOLIO HEALTH</div>
                            <div className="text-2xl font-black text-gray-900 font-mono">28.1%</div>
                            <div className="text-[11px] text-gray-500">Target: 80%</div>
                            <div className="text-[11px] text-emerald-600 font-bold">↑ On track</div>
                          </div>

                          {/* Card 3 */}
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-1.5 relative">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 absolute top-4 right-4" />
                            <div className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">MONTHLY SPEND VS BUDGET</div>
                            <div className="text-2xl font-black text-gray-900 font-mono">₦4.9M</div>
                            <div className="text-[11px] text-gray-500">Target: ₦5000000</div>
                            <div className="text-[11px] text-emerald-600 font-bold">↑ 98.2% utilized</div>
                          </div>

                          {/* Card 4 */}
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-1.5 relative">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 absolute top-4 right-4" />
                            <div className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">TASK COMPLETION RATE</div>
                            <div className="text-2xl font-black text-gray-900 font-mono">82%</div>
                            <div className="text-[11px] text-gray-500">Target: 90%</div>
                            <div className="text-[11px] text-emerald-600 font-bold">↑ +3% vs last month</div>
                          </div>
                        </div>
                      </div>

                      {/* Section: OKR & Portfolio Health */}
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-4">
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-xs text-gray-900">OKR &amp; Portfolio Health</h4>
                          <button
                            onClick={() => setDashboardView("tasks")}
                            className="px-3 py-1 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer"
                          >
                            View OKRs
                          </button>
                        </div>

                        <div className="space-y-3.5 text-xs">
                          {/* Progress Item 1 */}
                          <div className="space-y-1">
                            <div className="flex justify-between font-semibold text-gray-800">
                              <span>Achieve 95% Portal Adoption Across All Staff</span>
                              <span className="font-bold font-mono text-emerald-600">71%</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-emerald-600 h-full w-[71%]" />
                            </div>
                          </div>

                          {/* Progress Item 2 */}
                          <div className="space-y-1">
                            <div className="flex justify-between font-semibold text-gray-800">
                              <span>Reduce Payroll Processing Time by 30%</span>
                              <span className="font-bold font-mono text-emerald-600">80%</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-emerald-600 h-full w-[80%]" />
                            </div>
                          </div>

                          {/* Progress Item 3 */}
                          <div className="space-y-1">
                            <div className="flex justify-between font-semibold text-gray-800">
                              <span>Complete Engineering Platform Modernisation</span>
                              <span className="font-bold font-mono text-emerald-600">85%</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-emerald-600 h-full w-[85%]" />
                            </div>
                          </div>

                          {/* Progress Item 4 */}
                          <div className="space-y-1">
                            <div className="flex justify-between font-semibold text-gray-800">
                              <span>Increase revenue by 20%</span>
                              <span className="font-bold font-mono text-red-500">0%</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-red-400 h-full w-0" />
                            </div>
                          </div>

                          {/* Progress Item 5 */}
                          <div className="space-y-1">
                            <div className="flex justify-between font-semibold text-gray-800">
                              <span>Test Monthly OKR</span>
                              <span className="font-bold font-mono text-red-500">0%</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-red-400 h-full w-0" />
                            </div>
                          </div>

                          {/* Progress Item 6 */}
                          <div className="space-y-1">
                            <div className="flex justify-between font-semibold text-gray-800">
                              <span>Test objective</span>
                              <span className="font-bold font-mono text-red-500">0%</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-red-400 h-full w-0" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Floating Quick Action Pill Bar */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-lg space-x-4 text-xs font-bold text-gray-700">
                          <button
                            onClick={() => setRequisitionModalOpen(true)}
                            className="bg-[#1d61e7] hover:bg-blue-700 text-white px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer flex items-center space-x-1"
                          >
                            <span>+ Assign Task</span>
                          </button>
                          <button onClick={() => setDashboardView("tasks")} className="hover:text-blue-600 transition-colors cursor-pointer flex items-center space-x-1">
                            <span>🌐 New OKR</span>
                          </button>
                          <button onClick={() => setDashboardView("people")} className="hover:text-blue-600 transition-colors cursor-pointer flex items-center space-x-1">
                            <span>☂ Leave queue</span>
                          </button>
                          <button onClick={() => setDashboardView("people")} className="hover:text-blue-600 transition-colors cursor-pointer flex items-center space-x-1">
                            <span>👥 Staff directory</span>
                          </button>
                          <button onClick={() => setDashboardView("mail")} className="hover:text-blue-600 transition-colors cursor-pointer flex items-center space-x-1">
                            <span>📄 Notes</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* VIEW 2: TASKS & OKRS / TEAM OVERVIEW (input_file_2.png) */}
                  {dashboardView === "tasks" && (
                    <div className="space-y-6 animate-in fade-in duration-300 select-none">
                      {/* Header Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-black text-gray-900 tracking-tight">Team Overview</h3>
                          <p className="text-xs text-gray-500">Create, assign and monitor tasks across your team</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="px-3.5 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
                            + Add To-Do
                          </button>
                          <button
                            onClick={() => setRequisitionModalOpen(true)}
                            className="px-4 py-1.5 bg-[#1d61e7] hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors cursor-pointer flex items-center space-x-1.5"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Assign Task</span>
                          </button>
                        </div>
                      </div>

                      {/* 4 Stat Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Total Tasks</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">134</div>
                            <p className="text-[10px] text-gray-400 mt-0.5">across all teams</p>
                          </div>
                          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                            <Briefcase className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Completed</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">17</div>
                            <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">13% completion rate</p>
                          </div>
                          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Ongoing</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">19</div>
                            <p className="text-[10px] text-gray-400 mt-0.5">across 6 staff</p>
                          </div>
                          <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                            <Clock className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Overdue</p>
                            <div className="text-2xl font-black text-red-600 mt-1">99</div>
                            <p className="text-[10px] text-red-500 font-semibold mt-0.5">needs attention</p>
                          </div>
                          <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                            <AlertCircle className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      {/* Middle Charts Row */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {/* Left: Task Completion Trend Line Chart */}
                        <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-bold text-xs text-gray-800">Task Completion trend</h4>
                            <select className="text-[11px] border border-gray-200 rounded-md px-2 py-1 text-gray-600 bg-gray-50 font-medium">
                              <option>Weekly</option>
                              <option>Monthly</option>
                            </select>
                          </div>
                          <div className="h-44 flex items-end justify-between px-4 pb-2 relative border-b border-l border-gray-200">
                            <svg className="absolute inset-0 w-full h-full p-2" viewBox="0 0 400 120" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#1d61e7" stopOpacity="0.25" />
                                  <stop offset="100%" stopColor="#1d61e7" stopOpacity="0.0" />
                                </linearGradient>
                              </defs>
                              <path d="M 10 110 Q 100 110, 150 20 T 280 20 Q 340 20, 390 110 L 390 110 L 10 110 Z" fill="url(#chartGrad)" />
                              <path d="M 10 110 Q 100 110, 150 20 T 280 20 Q 340 20, 390 110" fill="none" stroke="#1d61e7" strokeWidth="3" />
                              <circle cx="150" cy="20" r="4" fill="#1d61e7" />
                              <circle cx="215" cy="20" r="4" fill="#1d61e7" />
                              <circle cx="280" cy="20" r="4" fill="#1d61e7" />
                            </svg>
                          </div>
                          <div className="flex justify-between text-[10px] text-gray-400 mt-2 px-4">
                            <span>Fri</span><span>Sat</span><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span>
                          </div>
                        </div>

                        {/* Right: OKR Coverage Donut Chart */}
                        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between">
                          <h4 className="font-bold text-xs text-gray-800">OKR Coverage</h4>
                          <div className="my-3 flex items-center justify-center relative">
                            <div className="w-32 h-32 rounded-full flex items-center justify-center" style={{ background: "conic-gradient(#1d61e7 0% 35%, #e2e8f0 35% 100%)" }}>
                              <div className="w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                                <span className="text-xl font-black text-gray-900">35%</span>
                                <span className="text-[9px] text-gray-400 font-semibold">OKR Linked</span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-1.5 pt-2 border-t border-gray-100 text-[11px]">
                            <div className="flex justify-between items-center text-gray-700">
                              <span className="flex items-center space-x-1.5"><span className="w-2 h-2 rounded-full bg-[#1d61e7]" /><span>OKR linked</span></span>
                              <span className="font-bold">47</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-500">
                              <span className="flex items-center space-x-1.5"><span className="w-2 h-2 rounded-full bg-slate-300" /><span>Non OKR Linked</span></span>
                              <span className="font-bold">87</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Lower Section: Search, Filters & 4-Column Kanban Board */}
                      <div className="space-y-4 pt-2">
                        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-2.5 rounded-xl border border-gray-200 shadow-xs">
                          <div className="flex-1 min-w-[200px] relative">
                            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input type="text" placeholder="Search by task, priority, status..." className="w-full text-xs pl-9 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1d61e7]" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                              <Sliders className="w-3.5 h-3.5" />
                              <span>Show Filters</span>
                            </button>
                            <div className="flex bg-gray-100 p-0.5 rounded-lg border border-gray-200">
                              <button className="px-2.5 py-1 text-[11px] font-semibold text-gray-600 rounded">List</button>
                              <button className="px-2.5 py-1 text-[11px] font-bold bg-white text-[#1d61e7] rounded shadow-xs">Kanban</button>
                            </div>
                          </div>
                        </div>

                        {/* 4-Column Kanban Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {/* Column 1: Not started (65) */}
                          <div className="bg-gray-50/70 border border-gray-200 rounded-xl p-3 space-y-3">
                            <div className="flex items-center justify-between px-1">
                              <div className="flex items-center space-x-2"><span className="w-2.5 h-2.5 rounded-full bg-gray-400" /><span className="font-extrabold text-xs text-gray-800">Not started</span></div>
                              <span className="text-[10px] font-extrabold text-gray-600 bg-gray-200 px-2 py-0.5 rounded-full">65</span>
                            </div>
                            <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-2xs space-y-2">
                              <div className="flex items-start justify-between"><h5 className="font-bold text-xs text-gray-900">Draft the BRD for the new product</h5><span className="w-2 h-3.5 bg-amber-400 rounded-xs inline-block" /></div>
                              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden"><div className="w-0 bg-[#1d61e7] h-full" /></div>
                              <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1">
                                <span className="text-gray-500 font-medium">Sep 30, 2026</span>
                                <div className="flex items-center space-x-2"><span className="flex items-center space-x-0.5"><FileText className="w-3 h-3" /><span>0</span></span></div>
                              </div>
                            </div>
                          </div>

                          {/* Column 2: Ongoing (13) */}
                          <div className="bg-blue-50/40 border border-blue-100 rounded-xl p-3 space-y-3">
                            <div className="flex items-center justify-between px-1">
                              <div className="flex items-center space-x-2"><span className="w-2.5 h-2.5 rounded-full bg-[#1d61e7]" /><span className="font-extrabold text-xs text-gray-800">Ongoing</span></div>
                              <span className="text-[10px] font-extrabold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">13</span>
                            </div>
                            <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-2xs space-y-2">
                              <div className="flex items-start justify-between"><h5 className="font-bold text-xs text-gray-900">Send out marketing emails</h5></div>
                              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden"><div className="w-0 bg-[#1d61e7] h-full" /></div>
                              <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1">
                                <span className="text-gray-500 font-medium">Sep 30, 2026</span>
                                <div className="flex items-center space-x-2"><span className="flex items-center space-x-0.5"><MessageSquare className="w-3 h-3" /><span>0</span></span></div>
                              </div>
                            </div>
                          </div>

                          {/* Column 3: Awaiting Approval (11) */}
                          <div className="bg-amber-50/40 border border-amber-100 rounded-xl p-3 space-y-3">
                            <div className="flex items-center justify-between px-1">
                              <div className="flex items-center space-x-2"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="font-extrabold text-xs text-gray-800">Awaiting Approval</span></div>
                              <span className="text-[10px] font-extrabold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">11</span>
                            </div>
                            <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-2xs space-y-2">
                              <div className="flex items-start justify-between"><h5 className="font-bold text-xs text-gray-900">Conduct meeting with sales representative</h5><span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-full">● OKR Linked</span></div>
                              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden"><div className="w-0 bg-[#1d61e7] h-full" /></div>
                              <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1">
                                <span className="text-gray-500 font-medium">Sep 18, 2026</span>
                              </div>
                            </div>
                          </div>

                          {/* Column 4: Approved (19) */}
                          <div className="bg-emerald-50/40 border border-emerald-100 rounded-xl p-3 space-y-3">
                            <div className="flex items-center justify-between px-1">
                              <div className="flex items-center space-x-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /><span className="font-extrabold text-xs text-gray-800">Approved</span></div>
                              <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">19</span>
                            </div>
                            <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-2xs space-y-2">
                              <div className="flex items-start justify-between"><h5 className="font-bold text-xs text-gray-900">Launch Product in West Region</h5><span className="text-[10px] font-bold text-emerald-600">100%</span></div>
                              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden"><div className="w-full bg-emerald-500 h-full" /></div>
                              <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1">
                                <span className="text-gray-500 font-medium">Sep 30, 2026</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Floating Quick Action Pill Bar */}
                        <div className="flex items-center justify-between pt-4">
                          <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-lg space-x-4 text-xs font-bold text-gray-700">
                            <button onClick={() => setRequisitionModalOpen(true)} className="bg-[#1d61e7] text-white px-3 py-1 rounded-full text-xs font-bold">+ Assign Task</button>
                            <button onClick={() => setDashboardView("people")} className="hover:text-blue-600">☂ Leave queue</button>
                            <button onClick={() => setDashboardView("approval")} className="hover:text-blue-600">$ Requisitions</button>
                            <button onClick={() => setDashboardView("people")} className="hover:text-blue-600">👥 Staff directory</button>
                          </div>
                          <button onClick={() => setRequisitionModalOpen(true)} className="bg-[#1d61e7] hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full shadow-lg text-xs flex items-center space-x-1.5 cursor-pointer">
                            <Plus className="w-4 h-4" /><span>Assign Task</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* VIEW 2: NETROM SALES & REVENUE PIPELINE */}
                  {dashboardView === "crm" && (
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-5 animate-in fade-in duration-300">
                      <div className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-4 gap-3">
                        <div>
                          <h3 className="text-lg font-black text-gray-900 flex items-center space-x-2">
                            <BarChart2 className="w-5 h-5 text-red-500" />
                            <span>Netrom Sales - Deals Pipeline Overview</span>
                          </h3>
                          <p className="text-xs text-gray-600 mt-0.5">
                            Live stage tracking, lead scoring, and quarterly revenue forecasting
                          </p>
                        </div>
                        <button
                          onClick={resetToOverview}
                          className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                        >
                          ← Back to Unified Overview
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                          { stage: "Lead Qualification", deals: 14, value: "₦14,200,000", color: "border-t-blue-500 bg-blue-50/30" },
                          { stage: "Needs & Proposal", deals: 9, value: "₦28,500,000", color: "border-t-amber-500 bg-amber-50/30" },
                          { stage: "Contract Review", deals: 6, value: "₦41,000,000", color: "border-t-purple-500 bg-purple-50/30" },
                          { stage: "Closed Won", deals: 22, value: "₦85,400,000", color: "border-t-emerald-500 bg-emerald-50/30" },
                        ].map((col) => (
                          <div key={col.stage} className={`border-t-4 ${col.color} border border-gray-200 rounded-xl p-4 space-y-3`}>
                            <div className="flex justify-between items-center text-xs font-extrabold text-gray-900">
                              <span>{col.stage}</span>
                              <span className="bg-white px-2 py-0.5 rounded text-[10px] border border-gray-200 text-gray-600">{col.deals}</span>
                            </div>
                            <div className="text-base font-black font-mono text-gray-900">{col.value}</div>
                            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-2xs space-y-1 text-xs">
                              <div className="font-bold text-gray-900">Enterprise Workspace Expansion</div>
                              <div className="text-[10px] text-gray-500">Account Owner: Chukwudi O.</div>
                              <div className="text-[11px] font-extrabold text-emerald-600 font-mono mt-1">₦8,500,000</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* VIEW 3: STAFF MANAGEMENT (input_file_1.png) */}
                  {dashboardView === "people" && (
                    <div className="space-y-5 animate-in fade-in duration-300 select-none">
                      {/* Header */}
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-black text-gray-900 tracking-tight">Staff Management</h3>
                          <p className="text-xs text-gray-500">39 staff across all departments</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="px-3.5 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors flex items-center space-x-1 cursor-pointer">
                            <span>↓ Export</span>
                          </button>
                          <button className="px-4 py-1.5 bg-[#1d61e7] hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors flex items-center space-x-1.5 cursor-pointer">
                            <Plus className="w-3.5 h-3.5" />
                            <span>Create Staff</span>
                          </button>
                        </div>
                      </div>

                      {/* Sub Nav Tabs */}
                      <div className="flex space-x-6 border-b border-gray-200 text-xs font-semibold">
                        <button className="pb-2.5 text-[#1d61e7] border-b-2 border-[#1d61e7] font-bold">Staff Directory</button>
                        <button className="pb-2.5 text-gray-500 hover:text-gray-800">Onboarding & Compliance</button>
                      </div>

                      {/* 4 Stat Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Total Active</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">32</div>
                          </div>
                          <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1d61e7] flex items-center justify-center">
                            <Users className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Team Leads</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">7</div>
                          </div>
                          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">New This Month</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">0</div>
                          </div>
                          <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                            <User className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Docs Pending</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">0+</div>
                          </div>
                          <div className="w-9 h-9 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
                            <X className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      {/* Filter Control Bar */}
                      <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-xs space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="flex-1 min-w-[180px] relative">
                            <input
                              type="text"
                              placeholder="Search name, email, ID..."
                              className="w-full text-xs px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1d61e7]"
                            />
                          </div>
                          <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-gray-600 font-medium">
                            <option>All Departments</option>
                          </select>
                          <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-gray-600 font-medium">
                            <option>All Types</option>
                          </select>
                          <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-gray-600 font-medium">
                            <option>All Statuses</option>
                          </select>
                          <div className="text-xs text-gray-400 flex items-center space-x-1">
                            <span>Joined from</span>
                            <input type="text" placeholder="dd/mm/yyyy" className="w-24 text-[11px] px-2 py-1 border border-gray-200 rounded bg-gray-50" />
                            <span>to</span>
                            <input type="text" placeholder="dd/mm/yyyy" className="w-24 text-[11px] px-2 py-1 border border-gray-200 rounded bg-gray-50" />
                          </div>
                        </div>
                        <div className="text-[11px] text-gray-500">
                          <button className="text-gray-600 hover:text-gray-900 font-semibold cursor-pointer">× Clear</button>
                        </div>
                      </div>

                      {/* Staff Directory Table */}
                      <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-gray-50/80 border-b border-gray-200 text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">
                            <tr>
                              <th className="p-3">STAFF MEMBER</th>
                              <th className="p-3">STAFF ID</th>
                              <th className="p-3">DEPARTMENT</th>
                              <th className="p-3">JOB ROLE</th>
                              <th className="p-3">TYPE</th>
                              <th className="p-3">STATUS</th>
                              <th className="p-3">ACTIONS</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                            <tr className="hover:bg-gray-50/50">
                              <td className="p-3 flex items-center space-x-2.5">
                                <div className="w-7 h-7 rounded-full bg-cyan-100 text-cyan-700 font-bold flex items-center justify-center text-[10px]">TS</div>
                                <div>
                                  <div className="font-bold text-gray-900">Test Staff Staff</div>
                                  <div className="text-[10px] text-gray-400">hiropi5576@dnsink.com</div>
                                </div>
                              </td>
                              <td className="p-3 font-mono text-[11px] text-gray-500">PGS-007-0009</td>
                              <td className="p-3 text-gray-600">Demo Departments</td>
                              <td className="p-3 text-gray-600">another test</td>
                              <td className="p-3"><span className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-semibold text-gray-600">Regular</span></td>
                              <td className="p-3"><span className="text-gray-500 font-semibold">• Inactive</span></td>
                              <td className="p-3 flex items-center space-x-1 text-[11px]">
                                <button className="px-2 py-0.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">View</button>
                                <button className="px-2 py-0.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">Edit</button>
                                <button className="px-2 py-0.5 border border-red-200 rounded text-red-600 bg-red-50">Permissions</button>
                              </td>
                            </tr>

                            <tr className="hover:bg-gray-50/50">
                              <td className="p-3 flex items-center space-x-2.5">
                                <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-[10px]">NS</div>
                                <div>
                                  <div className="font-bold text-gray-900">New Staff Staff</div>
                                  <div className="text-[10px] text-gray-400">1g3vj31a4q@gmeenramy.com</div>
                                </div>
                              </td>
                              <td className="p-3 font-mono text-[11px] text-gray-500">PGS-007-0008</td>
                              <td className="p-3 text-gray-600">Demo Departments</td>
                              <td className="p-3 text-gray-600">another test</td>
                              <td className="p-3"><span className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-semibold text-gray-600">Regular</span></td>
                              <td className="p-3"><span className="text-gray-500 font-semibold">• Inactive</span></td>
                              <td className="p-3 flex items-center space-x-1 text-[11px]">
                                <button className="px-2 py-0.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">View</button>
                                <button className="px-2 py-0.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">Edit</button>
                                <button className="px-2 py-0.5 border border-red-200 rounded text-red-600 bg-red-50">Permissions</button>
                              </td>
                            </tr>

                            <tr className="hover:bg-gray-50/50">
                              <td className="p-3 flex items-center space-x-2.5">
                                <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-[10px]">AT</div>
                                <div>
                                  <div className="font-bold text-gray-900">Another Test</div>
                                  <div className="text-[10px] text-gray-400">another@test.com</div>
                                </div>
                              </td>
                              <td className="p-3 font-mono text-[11px] text-gray-500">PGS-007-0007</td>
                              <td className="p-3 text-gray-600">Demo Departments</td>
                              <td className="p-3 text-gray-600">Tester</td>
                              <td className="p-3"><span className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-semibold text-gray-600">Regular</span></td>
                              <td className="p-3"><span className="text-gray-500 font-semibold">• Inactive</span></td>
                              <td className="p-3 flex items-center space-x-1 text-[11px]">
                                <button className="px-2 py-0.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">View</button>
                                <button className="px-2 py-0.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">Edit</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Bottom Floating Quick Action Pill Bar */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-lg space-x-4 text-xs font-bold text-gray-700">
                          <button onClick={() => setRequisitionModalOpen(true)} className="bg-[#1d61e7] text-white px-3 py-1 rounded-full text-xs font-bold">+ Assign Task</button>
                          <button className="hover:text-blue-600">☂ Leave queue</button>
                          <button onClick={() => setDashboardView("approval")} className="hover:text-blue-600">$ Requisitions</button>
                          <button className="hover:text-blue-600">👥 Staff directory</button>
                        </div>

                        <button
                          onClick={() => setRequisitionModalOpen(true)}
                          className="bg-[#1d61e7] hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full shadow-lg text-xs flex items-center space-x-1.5 cursor-pointer transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Assign Task</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* VIEW 4: MESSAGES VIEW (input_file_3.png) */}
                  {(dashboardView === "mail" || dashboardView === "messages") && (
                    <div className="space-y-4 animate-in fade-in duration-300 select-none">
                      <div className="text-[11px] text-gray-400 font-semibold">Management &gt; Messages</div>

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-black text-gray-900 tracking-tight">Messages</h3>
                          <p className="text-xs text-gray-500">Direct messages, broadcasts &amp; announcements</p>
                        </div>
                        <button className="px-4 py-1.5 bg-[#1d61e7] hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors flex items-center space-x-1.5 cursor-pointer">
                          <Send className="w-3.5 h-3.5" />
                          <span>Compose</span>
                        </button>
                      </div>

                      <div className="flex space-x-6 border-b border-gray-200 text-xs font-semibold">
                        <button className="pb-2 text-[#1d61e7] border-b-2 border-[#1d61e7] font-bold">Messages</button>
                        <button className="pb-2 text-gray-500 hover:text-gray-800">Announcements</button>
                      </div>

                      {/* 2 Column Messenger Layout */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                        {/* Left Inbox Column */}
                        <div className="lg:col-span-4 bg-white rounded-xl border border-gray-200 p-3 shadow-xs space-y-3">
                          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg text-xs font-semibold">
                            <button className="flex-1 py-1 bg-white text-gray-900 rounded shadow-2xs font-bold text-center">Inbox</button>
                            <button className="flex-1 py-1 text-gray-500 text-center hover:text-gray-800">Sent</button>
                          </div>

                          <div className="space-y-2">
                            <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-200 space-y-1 cursor-pointer">
                              <div className="flex items-center justify-between text-xs font-bold text-gray-900">
                                <span className="flex items-center space-x-1.5">
                                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 text-[9px] flex items-center justify-center font-bold">CO</span>
                                  <span>Chukwudi Okeke</span>
                                </span>
                                <span className="text-[10px] text-gray-400 font-normal">12 May</span>
                              </div>
                              <div className="text-xs font-bold text-gray-900">Q2 OKR Review — Friday May 15th</div>
                              <p className="text-[11px] text-gray-500 line-clamp-1">Team, Please prepare your Q2 OKR progress updates for the review meeting...</p>
                            </div>

                            <div className="p-3 rounded-lg bg-white border border-gray-100 hover:bg-gray-50 space-y-1 cursor-pointer">
                              <div className="flex items-center justify-between text-xs font-bold text-gray-900">
                                <span className="flex items-center space-x-1.5">
                                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-[9px] flex items-center justify-center font-bold">EN</span>
                                  <span>Emeka Nwosu</span>
                                </span>
                                <span className="text-[10px] text-gray-400 font-normal">30 Apr</span>
                              </div>
                              <div className="text-xs font-bold text-gray-900">May 2026 Payslips — Now Available</div>
                              <p className="text-[11px] text-gray-500 line-clamp-1">Dear Staff, Please note that April 2026 payslips have been uploaded...</p>
                            </div>
                          </div>
                        </div>

                        {/* Right Thread Reader Column */}
                        <div className="lg:col-span-8 bg-white rounded-xl border border-gray-200 p-5 shadow-xs space-y-5">
                          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-800 font-extrabold flex items-center justify-center text-xs">CO</div>
                              <div>
                                <div className="font-bold text-sm text-gray-900">Chukwudi Okeke</div>
                                <div className="text-xs text-gray-500">Q2 OKR Review — Friday May 15th · 12 May</div>
                              </div>
                            </div>
                            <button className="px-3 py-1 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50">Reply</button>
                          </div>

                          <div className="text-xs text-gray-700 leading-relaxed space-y-3">
                            <p>Team,</p>
                            <p>Please prepare your Q2 OKR progress updates for the review meeting on Friday May 15th at 10:00 AM. All team leads should submit their department reports to the portal by Thursday EOD.</p>
                            <div className="pt-2">
                              <div className="font-bold text-gray-900">Chukwudi Okeke</div>
                              <div className="text-[#1d61e7] font-semibold">Management</div>
                            </div>
                          </div>

                          {/* Quick Reply Form */}
                          <div className="pt-4 border-t border-gray-100 space-y-2">
                            <label className="text-xs font-bold text-gray-800">Quick Reply</label>
                            <textarea
                              rows={3}
                              placeholder="Type your reply..."
                              className="w-full text-xs p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1d61e7]"
                            />
                            <button className="px-4 py-2 bg-[#1d61e7] hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors flex items-center space-x-1.5 cursor-pointer">
                              <Send className="w-3.5 h-3.5" />
                              <span>Send Reply</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* VIEW 5: REQUISITIONS & APPROVAL CONSOLE (input_file_4.png) */}
                  {(dashboardView === "approval" || dashboardView === "requisition") && (
                    <div className="space-y-5 animate-in fade-in duration-300 select-none">
                      <div className="text-[11px] text-gray-400 font-semibold">Finance &gt; Requisitions</div>

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-black text-gray-900 tracking-tight">Requisitions</h3>
                          <p className="text-xs text-gray-500">Finance-stage review and payment processing</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="px-3.5 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer">Export</button>
                          <button className="px-3.5 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer">Retire an Expense</button>
                          <button
                            onClick={() => setRequisitionModalOpen(true)}
                            className="px-4 py-1.5 bg-[#1d61e7] hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors flex items-center space-x-1.5 cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>New Requisition</span>
                          </button>
                        </div>
                      </div>

                      {/* 4 Stat Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Awaiting Finance Approval</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">20</div>
                            <p className="text-[10px] text-gray-400 mt-0.5">After TL approval</p>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Approved Requisitions</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">45</div>
                            <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">This month</p>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Pending Payment</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">14</div>
                            <p className="text-[10px] text-amber-600 font-semibold mt-0.5">Batch processing</p>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Rejected Requisitions</p>
                            <div className="text-2xl font-black text-gray-900 mt-1">11</div>
                            <p className="text-[10px] text-red-500 font-semibold mt-0.5">4 this month</p>
                          </div>
                        </div>
                      </div>

                      {/* Notice Banner */}
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-800 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Info className="w-4 h-4 text-blue-600" />
                          <span>Finance has two roles in the 6-stage review flow: 1. Staff submits → 2. Team Lead ✓</span>
                        </div>
                      </div>

                      {/* Tabs */}
                      <div className="flex space-x-6 border-b border-gray-200 text-xs font-semibold">
                        <button className="pb-2 text-[#1d61e7] border-b-2 border-[#1d61e7] font-bold flex items-center space-x-1.5">
                          <span>Pending Review</span>
                          <span className="bg-blue-100 text-[#1d61e7] px-1.5 py-0.2 rounded-full text-[10px]">20</span>
                        </button>
                        <button className="pb-2 text-gray-500 hover:text-gray-800">Awaiting Payment</button>
                      </div>

                      {/* Table */}
                      <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-gray-50/80 border-b border-gray-200 text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">
                            <tr>
                              <th className="p-3">STAFF</th>
                              <th className="p-3">REFERENCE</th>
                              <th className="p-3">DEPARTMENT</th>
                              <th className="p-3">SUBMITTED</th>
                              <th className="p-3">ACTION</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                            <tr className="hover:bg-gray-50/50">
                              <td className="p-3 flex items-center space-x-2.5">
                                <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-[10px]">BB</div>
                                <span className="font-bold text-gray-900">B Blessing</span>
                              </td>
                              <td className="p-3 font-mono text-gray-500">REQ-2026-8431</td>
                              <td className="p-3 text-gray-600">Engineering</td>
                              <td className="p-3 text-gray-500">Sept 2026</td>
                              <td className="p-3 flex items-center space-x-2">
                                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-bold">✓ Approve</button>
                                <button className="px-3 py-1 border border-red-200 text-red-600 rounded text-xs font-bold hover:bg-red-50">× Reject</button>
                              </td>
                            </tr>

                            <tr className="hover:bg-gray-50/50">
                              <td className="p-3 flex items-center space-x-2.5">
                                <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-[10px]">DC</div>
                                <span className="font-bold text-gray-900">DARLINGTON CHARLES</span>
                              </td>
                              <td className="p-3 font-mono text-gray-500">REQ-2026-7443</td>
                              <td className="p-3 text-gray-600">Finance</td>
                              <td className="p-3 text-gray-500">Sept 2026</td>
                              <td className="p-3 flex items-center space-x-2">
                                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-bold">✓ Approve</button>
                                <button className="px-3 py-1 border border-red-200 text-red-600 rounded text-xs font-bold hover:bg-red-50">× Reject</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Floating Action Button */}
                      <div className="flex justify-end pt-2">
                        <button
                          onClick={() => setRequisitionModalOpen(true)}
                          className="bg-[#1d61e7] hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full shadow-lg text-xs flex items-center space-x-1.5 cursor-pointer transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Assign Task</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* VIEW 6: FINANCE MODULE DASHBOARD (Custom Requested UI) */}
                  {dashboardView === "finance" && (
                    <div className="space-y-5 animate-in fade-in duration-300 select-none">
                      <div className="text-[11px] text-gray-400 font-semibold">Management &gt; Finance</div>

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-black text-gray-900 tracking-tight">Finance Console</h3>
                          <p className="text-xs text-gray-500">Financial Overview, Cash Runway &amp; Requisition Budgets</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="px-3.5 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer">Generate Report</button>
                          <button
                            onClick={() => setRequisitionModalOpen(true)}
                            className="px-4 py-1.5 bg-[#1d61e7] hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors flex items-center space-x-1.5 cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>New Requisition</span>
                          </button>
                        </div>
                      </div>

                      {/* 4 Stat Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Total Revenue (YTD)</p>
                            <div className="text-2xl font-black text-gray-900 mt-1 font-mono">₦284.5M</div>
                            <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">↑ 18.4% YoY Growth</p>
                          </div>
                          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <DollarSign className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Monthly Operating Expense</p>
                            <div className="text-2xl font-black text-gray-900 mt-1 font-mono">₦42.1M</div>
                            <p className="text-[10px] text-gray-400 mt-0.5">Budget: ₦45.0M</p>
                          </div>
                          <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                            <BarChart2 className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Pending Requisitions</p>
                            <div className="text-2xl font-black text-gray-900 mt-1 font-mono">₦18.45M</div>
                            <p className="text-[10px] text-amber-600 font-semibold mt-0.5">20 requests queue</p>
                          </div>
                          <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                            <Clock className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold text-gray-500">Cash Runway</p>
                            <div className="text-2xl font-black text-gray-900 mt-1 font-mono">14.2 Mos</div>
                            <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">Low Liquidity Risk</p>
                          </div>
                          <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      {/* Finance Charts Row */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                        <div className="lg:col-span-8 bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-3">
                          <div className="flex justify-between items-center">
                            <h4 className="font-bold text-xs text-gray-900">Cash Flow &amp; Budget Reconciliation</h4>
                            <span className="text-[10px] font-semibold text-gray-500">FY 2026</span>
                          </div>
                          <div className="h-40 flex items-end justify-between px-6 pt-4 border-b border-l border-gray-200 gap-3">
                            {[
                              { m: "Jan", rev: 80, exp: 50 },
                              { m: "Feb", rev: 90, exp: 55 },
                              { m: "Mar", rev: 70, exp: 45 },
                              { m: "Apr", rev: 100, exp: 60 },
                              { m: "May", rev: 110, exp: 65 },
                              { m: "Jun", rev: 125, exp: 70 },
                            ].map((item) => (
                              <div key={item.m} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                                <div className="w-full flex items-end justify-center gap-1 h-full">
                                  <div className="w-3 bg-[#1d61e7] rounded-t-xs" style={{ height: `${item.rev}%` }} title={`Rev: ${item.rev}`} />
                                  <div className="w-3 bg-red-400 rounded-t-xs" style={{ height: `${item.exp}%` }} title={`Exp: ${item.exp}`} />
                                </div>
                                <span className="text-[9px] text-gray-400 mt-1">{item.m}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-center space-x-6 text-[11px] text-gray-600 pt-2">
                            <span className="flex items-center space-x-1.5"><span className="w-2.5 h-2.5 bg-[#1d61e7] rounded-xs" /><span>Revenue</span></span>
                            <span className="flex items-center space-x-1.5"><span className="w-2.5 h-2.5 bg-red-400 rounded-xs" /><span>Operating Expense</span></span>
                          </div>
                        </div>

                        <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between space-y-3">
                          <h4 className="font-bold text-xs text-gray-900">Expense Allocation</h4>
                          <div className="space-y-3 text-xs">
                            <div>
                              <div className="flex justify-between font-medium text-gray-700 text-[11px]">
                                <span>Payroll &amp; Benefits</span>
                                <span className="font-mono font-bold">55%</span>
                              </div>
                              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-1">
                                <div className="bg-blue-600 h-full w-[55%]" />
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between font-medium text-gray-700 text-[11px]">
                                <span>Cloud &amp; Infrastructure</span>
                                <span className="font-mono font-bold">22%</span>
                              </div>
                              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-1">
                                <div className="bg-purple-600 h-full w-[22%]" />
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between font-medium text-gray-700 text-[11px]">
                                <span>Operations &amp; Logistics</span>
                                <span className="font-mono font-bold">15%</span>
                              </div>
                              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-1">
                                <div className="bg-emerald-500 h-full w-[15%]" />
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between font-medium text-gray-700 text-[11px]">
                                <span>Training &amp; Development</span>
                                <span className="font-mono font-bold">8%</span>
                              </div>
                              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-1">
                                <div className="bg-amber-500 h-full w-[8%]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* GENERIC MODULE VIEW FALLBACK */}
                  {!["overview", "dashboard", "people", "mail", "messages", "approval", "requisition", "finance"].includes(dashboardView) && (
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm text-center space-y-4 animate-in fade-in duration-300">
                      <div className="w-14 h-14 bg-blue-50 text-[#1d61e7] border border-blue-200 rounded-full flex items-center justify-center mx-auto shadow-xs">
                        <Sparkles className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-black text-gray-900 capitalize">
                        Netrom {dashboardView} Module
                      </h3>
                      <p className="text-xs text-gray-600 max-w-lg mx-auto leading-relaxed">
                        Unified operating console for {dashboardView}. Managed through Netrom integrated business workflow.
                      </p>
                      <button
                        onClick={resetToOverview}
                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-md transition-colors cursor-pointer"
                      >
                        Return to Dashboard Overview
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* INTERACTIVE NEW REQUISITION MODAL DIALOG (input_file_4.png) */}
          {requisitionModalOpen && (
            <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl max-w-2xl w-full p-6 space-y-5 relative my-8 text-xs text-gray-800">
                {/* Modal Header */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <div className="flex items-center space-x-2 font-black text-base text-gray-900">
                    <FileText className="w-5 h-5 text-[#1d61e7]" />
                    <span>New Requisition</span>
                  </div>
                  <button
                    onClick={() => setRequisitionModalOpen(false)}
                    className="p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Purpose */}
                <div className="space-y-1">
                  <label className="font-bold text-gray-900">Purpose <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    placeholder="e.g. Laptop purchase / Research materials"
                    className="w-full text-xs p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1d61e7]"
                  />
                </div>

                {/* Procurement Items */}
                <div className="space-y-2">
                  <label className="font-bold text-gray-900">Procurement Items</label>
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-gray-50 text-[10px] font-extrabold text-gray-500 uppercase border-b border-gray-200">
                        <tr>
                          <th className="p-2.5">DESCRIPTION *</th>
                          <th className="p-2.5">EXPENSE CATEGORY *</th>
                          <th className="p-2.5">UNIT PRICE *</th>
                          <th className="p-2.5">QTY *</th>
                          <th className="p-2.5">TOTAL(N)</th>
                          <th className="p-2.5">ACTION</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="p-2">
                            <input type="text" placeholder="e.g. Purchase of lap..." className="w-full text-xs p-1.5 bg-gray-50 border border-gray-200 rounded" />
                          </td>
                          <td className="p-2">
                            <select className="w-full text-xs p-1.5 bg-gray-50 border border-gray-200 rounded text-gray-600">
                              <option>Select category</option>
                            </select>
                          </td>
                          <td className="p-2">
                            <input type="number" defaultValue={0} className="w-16 text-xs p-1.5 bg-gray-50 border border-gray-200 rounded" />
                          </td>
                          <td className="p-2">
                            <input type="number" defaultValue={1} className="w-12 text-xs p-1.5 bg-gray-50 border border-gray-200 rounded" />
                          </td>
                          <td className="p-2 font-bold font-mono">0</td>
                          <td className="p-2 text-center">
                            <button className="text-red-500 font-bold hover:text-red-700">×</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="p-2.5 bg-gray-50 flex items-center justify-between border-t border-gray-200 text-xs">
                      <button className="text-[#1d61e7] font-bold hover:underline">+ Add Item</button>
                      <span className="font-bold text-gray-900">Grand Total ₦0</span>
                    </div>
                  </div>
                </div>

                {/* Procurement Details Grid */}
                <div className="space-y-2">
                  <label className="font-bold text-gray-900">Procurement Details</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] text-gray-600 font-medium">Department *</label>
                      <select className="w-full text-xs p-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 mt-0.5">
                        <option>Select department...</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-600 font-medium">Project *</label>
                      <select className="w-full text-xs p-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 mt-0.5">
                        <option>Select project...</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-600 font-medium">Vendor (optional)</label>
                      <select className="w-full text-xs p-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 mt-0.5">
                        <option>- None -</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-600 font-medium">Cost center *</label>
                      <select className="w-full text-xs p-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 mt-0.5">
                        <option>Select cost center..</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Business Justification */}
                <div className="space-y-1">
                  <label className="font-bold text-gray-900">Business Justification *</label>
                  <textarea
                    rows={2}
                    placeholder="Help us understand why this request is needed"
                    className="w-full text-xs p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1d61e7]"
                  />
                  <div className="text-right text-[10px] text-gray-400">0/1000</div>
                </div>

                {/* Payment Details & Supporting Documents */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1">
                    <div className="text-[11px] font-bold text-gray-700">Payment/ Account details</div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-500">Account Name</span>
                      <span className="font-bold text-gray-900">Adaeze Okafor</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-500">Account Number</span>
                      <span className="font-mono font-bold text-gray-900">**** **** 5601</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-500">Bank</span>
                      <span className="font-bold text-emerald-700">Zenith Bank</span>
                    </div>
                  </div>

                  <div className="p-3 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-center bg-gray-50 text-gray-500 space-y-1">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <span className="text-[11px] font-medium">Drag and drop files here</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end space-x-2 pt-3 border-t border-gray-200">
                  <button
                    onClick={() => setRequisitionModalOpen(false)}
                    className="px-4 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setRequisitionModalOpen(false)}
                    className="px-5 py-1.5 bg-[#1d61e7] hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors flex items-center space-x-1 cursor-pointer"
                  >
                    <Check className="w-4 h-4" />
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </ScrollReveal>
      </section>
    );
  }
);

DashboardShowcase.displayName = "DashboardShowcase";

export default DashboardShowcase;
