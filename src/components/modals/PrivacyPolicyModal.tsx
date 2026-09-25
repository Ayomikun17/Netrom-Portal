"use client";

import React from "react";
import { X } from "lucide-react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xs z-[90] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl relative animate-in fade-in zoom-in duration-200 overflow-hidden text-gray-900 border border-gray-100">
        {/* Modal Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-slate-900 text-white shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-md">
              🔒
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight text-white">
                Privacy Policy
              </h3>
              <p className="text-xs text-blue-300 font-mono">
                Nigeria Data Protection Act (NDPA 2023) Compliant
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

        {/* Modal Body Scrollable Text */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-gray-700 leading-relaxed font-normal">
          <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 font-medium">
            <strong>Data Controller Notice:</strong> Primeguage Solutions
            Limited operates Netrom in full compliance with the Nigeria Data
            Protection Act (NDPA) 2023, ensuring that all personal,
            operational, and financial data processed through our workspace
            platform is lawful, transparent, secure, and accurate.
          </div>

          <section className="space-y-2">
            <h4 className="text-sm font-extrabold text-gray-900">
              1. Lawful Basis for Data Processing
            </h4>
            <p>
              Under Section 24 of the NDPA 2023, Netrom processes personal data
              only where lawful grounds exist, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>
                <strong>Contractual Necessity:</strong> Enabling employee
                account provisioning, workflow routing, payroll processing, and
                organizational operations.
              </li>
              <li>
                <strong>Consent:</strong> Explicit user opt-in for
                communications and optional analytical cookies.
              </li>
              <li>
                <strong>Legal Obligation:</strong> Compliance with Nigerian tax
                laws, corporate disclosures, and regulatory audits.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-extrabold text-gray-900">
              2. Categories of Data Collected
            </h4>
            <p>
              Netrom collects personal and organizational data strictly necessary
              for workspace functionality:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>
                <strong>Identity & Account Data:</strong> Full name, official
                email address, phone number, staff ID, department, and role
                permissions.
              </li>
              <li>
                <strong>Operational Data:</strong> Task assignments, approval
                histories, requisition slips, leave schedules, and OKR progress
                entries.
              </li>
              <li>
                <strong>Technical & Log Data:</strong> IP addresses, browser
                types, device IDs, login timestamps, and system performance
                metrics.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-extrabold text-gray-900">
              3. Data Subject Rights under NDPA 2023
            </h4>
            <p>
              As a data subject under NDPA 2023, you retain the following
              enforceable rights:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>
                <strong>Right of Access:</strong> Request confirmation and full
                copies of your processed personal data.
              </li>
              <li>
                <strong>Right to Rectification:</strong> Request correction of
                inaccurate or incomplete personal records.
              </li>
              <li>
                <strong>Right to Erasure ("Right to be Forgotten"):</strong>{" "}
                Request deletion of data where legal retention periods have
                expired.
              </li>
              <li>
                <strong>Right to Data Portability:</strong> Receive your data
                in a structured, machine-readable format.
              </li>
              <li>
                <strong>Right to Object:</strong> Object to processing based on
                legitimate interests or direct marketing.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-extrabold text-gray-900">
              4. Data Security & Storage Safeguards
            </h4>
            <p>
              We implement 256-bit TLS encryption in transit and AES-256
              encryption at rest. Multi-tenant database isolation, role-based
              access control (RBAC), and continuous vulnerability monitoring
              safeguard data against unauthorized access or breaches.
            </p>
          </section>

          <section className="space-y-2 border-t border-gray-100 pt-3">
            <h4 className="text-sm font-extrabold text-gray-900">
              5. Data Protection Officer (DPO) Contact
            </h4>
            <p>
              For privacy inquiries, rights enforcement, or NDPA compliance
              requests, contact our Data Protection Officer:
            </p>
            <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl font-mono text-[11px] text-gray-800 space-y-1">
              <div>
                <strong>Email:</strong> dpo@primeguage.com | privacy@netrom.ng
              </div>
              <div>
                <strong>Address:</strong> Primeguage Solutions Limited,
                Victoria Island, Lagos, Nigeria
              </div>
            </div>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-gray-500 font-medium">
            Last updated: September 2026
          </span>
          <button
            onClick={onClose}
            className="bg-[#1d61e7] hover:bg-blue-700 text-white text-xs font-bold px-6 py-2.5 rounded-full transition-colors cursor-pointer shadow-md"
          >
            I Understand &amp; Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
