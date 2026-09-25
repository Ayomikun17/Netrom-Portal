"use client";

import React, { useState } from "react";
import { Globe, ChevronDown, X, Menu } from "lucide-react";
import { NetromOneLogo } from "@/components/common";
import { secondaryNavLinks } from "@/data/navigation";

interface HeaderProps {
  onOpenModal: (modalKey: string) => void;
  onSelectDept?: (dept: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal, onSelectDept }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: { href: string; isModal?: boolean; modalKey?: string }
  ) => {
    if (link.isModal) {
      e.preventDefault();
      onOpenModal(link.modalKey || "contact");
    } else if (link.href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Left: Netrom Logo */}
          <div className="flex items-center flex-shrink-0">
            <NetromOneLogo />
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-5 lg:space-x-7 text-xs md:text-[14px] font-medium text-gray-800">
            {secondaryNavLinks.map((link) => (
              <div key={link.name} className="relative group py-4">
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className="flex items-center space-x-1 text-gray-800 hover:text-[#1d61e7] font-semibold transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{link.name}</span>

                  {link.hasChevron && (
                    <ChevronDown className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#1d61e7] transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </a>

                {/* Dropdown Menu */}
                {link.hasChevron && link.items && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-60 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50 py-2">
                    {link.items.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href || "#"}
                        onClick={(e) => {
                          e.preventDefault();
                          if (subItem.dept && onSelectDept) {
                            onSelectDept(subItem.dept);
                          }
                          if (subItem.isModal) {
                            onOpenModal(subItem.modalKey || "privacy");
                          } else if (subItem.href && subItem.href.startsWith("#")) {
                            document
                              .querySelector(subItem.href)
                              ?.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-blue-50 hover:text-[#1d61e7] font-medium transition-colors cursor-pointer"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center space-x-4 md:space-x-5 text-gray-700">
            {/* Language (non-clickable) */}
            <div
              className="hidden sm:flex items-center space-x-1.5 text-xs md:text-[13px] font-medium text-gray-700 select-none cursor-default"
              title="Language: English"
            >
              <Globe className="w-4 h-4 text-gray-600" />
              <span>English</span>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 border-b border-gray-200 px-4 pt-3 pb-6">
          <nav className="space-y-1">
            {secondaryNavLinks.map((link) => (
              <div key={link.name}>
                <div className="flex items-center justify-between text-sm py-2.5 px-2 rounded text-gray-800 hover:bg-gray-50 hover:text-[#1d61e7] transition-colors">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      handleLinkClick(e, link);
                      setMobileMenuOpen(false);
                    }}
                    className="flex-1 font-semibold cursor-pointer"
                  >
                    {link.name}
                  </a>

                  {link.hasChevron && (
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.name ? null : link.name
                        )
                      }
                      className="p-1 text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown Sub-Items */}
                {link.hasChevron && link.items && activeDropdown === link.name && (
                  <div className="ml-3 mt-1 mb-2 border-l-2 border-blue-100 pl-3 space-y-1">
                    {link.items.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href || "#"}
                        onClick={(e) => {
                          e.preventDefault();
                          if (subItem.dept && onSelectDept) {
                            onSelectDept(subItem.dept);
                          }
                          if (subItem.isModal) {
                            onOpenModal(subItem.modalKey || "privacy");
                          } else if (
                            subItem.href &&
                            subItem.href.startsWith("#")
                          ) {
                            document
                              .querySelector(subItem.href)
                              ?.scrollIntoView({ behavior: "smooth" });
                          }
                          setMobileMenuOpen(false);
                        }}
                        className="block text-xs py-2 px-2 text-gray-600 hover:text-[#1d61e7] hover:bg-blue-50 rounded font-medium transition-colors cursor-pointer"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
