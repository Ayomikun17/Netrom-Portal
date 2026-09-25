"use client";

import React from "react";
import { Bell, Moon, Umbrella, X } from "lucide-react";

interface NotificationsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationsDropdown: React.FC<NotificationsDropdownProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-20 right-4 sm:right-8 w-80 sm:w-96 bg-white rounded-2xl border border-gray-200 shadow-2xl z-[85] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 text-gray-900 select-none">
      {/* Header Profile Bar */}
      <div className="bg-gray-50/90 border-b border-gray-100 p-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1.5 bg-white border border-gray-200 rounded-full px-2.5 py-1 shadow-2xs">
            <Bell className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[10px] font-black text-red-500 bg-red-50 px-1 rounded-full">
              10
            </span>
            <span className="text-gray-300 text-xs">|</span>
            <Moon className="w-3.5 h-3.5 text-gray-500" />
          </div>
          <div className="text-left pl-1">
            <div className="text-xs font-bold text-gray-900 leading-none">
              Adaeze Okafor
            </div>
            <div className="text-[10px] text-gray-500 font-mono mt-0.5">
              hr_admin
            </div>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-extrabold flex items-center justify-center text-xs border border-purple-200">
          AO
        </div>
      </div>

      {/* Title & Actions Bar */}
      <div className="p-3.5 border-b border-gray-100 flex items-center justify-between bg-white">
        <div className="flex items-center space-x-2">
          <h4 className="text-sm font-extrabold text-gray-900">
            Notifications
          </h4>
          <span className="text-[10px] font-extrabold bg-red-50 text-red-600 px-2 py-0.5 rounded-full border border-red-100">
            10 New
          </span>
        </div>
        <div className="flex items-center space-x-3 text-xs">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 font-medium cursor-pointer"
          >
            Mark all read
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 p-0.5 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scrollable Notification Items List */}
      <div className="p-3 space-y-2 max-h-[380px] overflow-y-auto bg-gray-50/30">
        {/* Item 1 */}
        <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100/80 hover:border-blue-200 transition-colors flex items-start space-x-3 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
            <Umbrella className="w-4 h-4" />
          </div>
          <div className="flex-1 text-left space-y-0.5">
            <p className="text-xs font-bold text-gray-900 leading-tight">
              Leave request from DARLINGTON CHARLES — HR review
            </p>
            <p className="text-[10px] text-gray-500">
              42m ago ·{" "}
              <span className="text-[#1d61e7] font-semibold hover:underline">
                Open &gt;
              </span>
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100/80 hover:border-blue-200 transition-colors flex items-start space-x-3 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
            <Umbrella className="w-4 h-4" />
          </div>
          <div className="flex-1 text-left space-y-0.5">
            <p className="text-xs font-bold text-gray-900 leading-tight">
              Leave request from DARLINGTON CHARLES — HR review
            </p>
            <p className="text-[10px] text-gray-500">
              1h ago ·{" "}
              <span className="text-[#1d61e7] font-semibold hover:underline">
                Open &gt;
              </span>
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100/80 hover:border-blue-200 transition-colors flex items-start space-x-3 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
            <Bell className="w-4 h-4" />
          </div>
          <div className="flex-1 text-left space-y-0.5">
            <p className="text-xs font-bold text-gray-900 leading-tight">
              Birthday Requisition — Sade Olawale
            </p>
            <p className="text-[10px] text-gray-500">
              1h ago ·{" "}
              <span className="text-[#1d61e7] font-semibold hover:underline">
                Open &gt;
              </span>
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100/80 hover:border-blue-200 transition-colors flex items-start space-x-3 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
            <Bell className="w-4 h-4" />
          </div>
          <div className="flex-1 text-left space-y-0.5">
            <p className="text-xs font-bold text-gray-900 leading-tight">
              🔔 Sade Olawale — Birthday tomorrow
            </p>
            <p className="text-[10px] text-gray-500">
              1h ago ·{" "}
              <span className="text-[#1d61e7] font-semibold hover:underline">
                Open &gt;
              </span>
            </p>
          </div>
        </div>

        {/* Item 5 */}
        <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100/80 hover:border-blue-200 transition-colors flex items-start space-x-3 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
            <Bell className="w-4 h-4" />
          </div>
          <div className="flex-1 text-left space-y-0.5">
            <p className="text-xs font-bold text-gray-900 leading-tight">
              New comment on REQ-2026-5631
            </p>
            <p className="text-[10px] text-gray-500">
              1d ago ·{" "}
              <span className="text-[#1d61e7] font-semibold hover:underline">
                Open &gt;
              </span>
            </p>
          </div>
        </div>

        {/* Item 6 */}
        <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100/80 hover:border-blue-200 transition-colors flex items-start space-x-3 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
            <Bell className="w-4 h-4" />
          </div>
          <div className="flex-1 text-left space-y-0.5">
            <p className="text-xs font-bold text-gray-900 leading-tight">
              Requisition Awaiting HR Review
            </p>
            <p className="text-[10px] text-gray-500">
              1d ago ·{" "}
              <span className="text-[#1d61e7] font-semibold hover:underline">
                Open &gt;
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsDropdown;
