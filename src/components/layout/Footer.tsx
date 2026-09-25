"use client";

import React from "react";
import { Globe } from "lucide-react";
import { ScrollReveal } from "@/components/common";

interface FooterProps {
  onOpenModal: (modalKey: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-12 select-none border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner inside Footer */}
        <ScrollReveal direction="fade">
          <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-green-800 rounded-2xl p-8 md:p-12 text-center text-white mb-16 shadow-2xl relative overflow-hidden border border-emerald-600/40">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
              Ready to bring your business together?
            </h2>
            <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8 font-normal opacity-90 leading-relaxed">
              Replace disconnected tools and manual follow-ups with one
              workspace for people, performance, finance and operations. Give
              every team the visibility they need. Give management the
              information they need to make decisions. Give your organisation a
              better way to work.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenModal("trial")}
                className="w-full sm:w-auto bg-[#ffc72c] hover:bg-amber-400 text-gray-900 font-extrabold text-xs sm:text-sm px-8 py-4 rounded-md uppercase tracking-wider shadow-lg transition-transform hover:scale-105 cursor-pointer"
              >
                START YOUR FIRST MONTH FREE
              </button>
              <button
                onClick={() => onOpenModal("contact")}
                className="w-full sm:w-auto bg-black/40 hover:bg-black/60 text-white font-extrabold text-xs sm:text-sm px-8 py-4 rounded-md uppercase tracking-wider border border-white/30 transition-colors cursor-pointer"
              >
                REQUEST A DEMO
              </button>
            </div>

            <p className="text-xs text-emerald-200 mt-4 font-bold tracking-wider uppercase">
              Netrom by{" "}
              <a
                href="https://primeguage.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                Primeguage Solutions
              </a>
            </p>
          </div>
        </ScrollReveal>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-800 pb-12 text-xs text-gray-400">
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  People Management
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  Attendance & Leave
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  Tasks & OKRs
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  Finance & Requisitions
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  Operations
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  Performance Insights
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  Communication
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Platform
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#os-showcase" className="hover:text-white transition-colors">
                  Security & Privacy
                </a>
              </li>
              <li>
                <a href="#os-showcase" className="hover:text-white transition-colors">
                  Roles & Permissions
                </a>
              </li>
              <li>
                <a href="#os-showcase" className="hover:text-white transition-colors">
                  Analytics & Reporting
                </a>
              </li>
              <li>
                <a href="#os-showcase" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#os-showcase" className="hover:text-white transition-colors">
                  Customisation
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">
                  Implementation
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Startups & Small Teams
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Growing SMEs
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Mid-Market
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Multi-Entity Organisations
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#os-showcase" className="hover:text-white transition-colors">
                  Product Overview
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing Guide
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">
                  Feature Comparison
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">
                  Help Centre
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal("cases")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Customer Stories
                </button>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenModal("contact");
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3 col-span-2 md:col-span-1">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Company
            </h4>
            <p className="text-emerald-400 font-extrabold text-sm">
              <a
                href="https://primeguage.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Primeguage Solutions
              </a>
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              Netrom is a unified business workspace designed to help
              organisations digitise everyday operations, connect teams and
              make better decisions from one platform.
            </p>
            <button
              type="button"
              onClick={() => onOpenModal("contact")}
              className="inline-flex items-center text-amber-400 hover:text-amber-300 font-bold text-xs pt-1 transition-colors cursor-pointer text-left"
            >
              <span>Talk to a Netrom specialist →</span>
            </button>
            <div className="pt-2 flex items-center space-x-3 text-gray-400">
              <Globe className="w-4 h-4" />
              <span>English</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 space-y-4 md:space-y-0">
          <div>
            © 2026{" "}
            <a
              href="https://primeguage.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 underline transition-colors"
            >
              Primeguage Solutions Limited
            </a>
            . All rights reserved.
          </div>
          <div className="flex space-x-6">
            <button
              type="button"
              onClick={() => onOpenModal("privacy")}
              className="hover:text-gray-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenModal("privacy")}
              className="hover:text-gray-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={() => onOpenModal("privacy")}
              className="hover:text-gray-400 transition-colors cursor-pointer"
            >
              Security
            </button>
            <button
              type="button"
              onClick={() => onOpenModal("cookie")}
              className="hover:text-gray-400 transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
