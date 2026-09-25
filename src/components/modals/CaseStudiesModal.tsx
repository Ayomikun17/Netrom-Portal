"use client";

import React from "react";
import { X } from "lucide-react";

interface CaseStudiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTalkToSales: () => void;
}

export const CaseStudiesModal: React.FC<CaseStudiesModalProps> = ({
  isOpen,
  onClose,
  onTalkToSales,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-black text-gray-900">
          See Netrom in action
        </h3>
        <p className="text-xs text-gray-600">
          Discover how organisations use Netrom to connect people, streamline
          workflows and gain better visibility across everyday operations.
        </p>

        <div className="space-y-3 pt-2 max-h-[60vh] overflow-y-auto">
          <div className="p-5 bg-emerald-50/70 rounded-xl border border-emerald-200">
            <span className="font-extrabold text-sm text-emerald-900">
              Be among the first Netrom organisations
            </span>
            <p className="text-xs text-gray-700 mt-1 leading-relaxed">
              Join businesses moving from fragmented workflows to one connected
              workspace for people, performance and operations.
            </p>
            <button
              onClick={() => {
                onClose();
                onTalkToSales();
              }}
              className="mt-3 text-xs font-bold text-[#0066cc] hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <span>TALK TO SALES →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesModal;
