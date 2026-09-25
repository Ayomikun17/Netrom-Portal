"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  DashboardShowcase,
  MetricsTrustSection,
  TeamsAcrossDepartmentsSection,
  ImplementationJourneySection,
  PricingSection,
} from "@/components/sections";
import {
  BookDemoModal,
  NotificationsDropdown,
  PrivacyPolicyModal,
  CookiePolicyModal,
  CaseStudiesModal,
} from "@/components/modals";

import { CookieConsentBanner } from "@/components/common";

export default function Home() {
  const router = useRouter();
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [customerModalOpen, setCustomerModalOpen] = useState(false);
  const dashboardSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeModal === "privacy" || activeModal === "Privacy Policy") {
      router.push("/privacy");
      setActiveModal(null);
    }
  }, [activeModal, router]);

  const scrollToDashboard = () => {
    dashboardSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const isDemoModalOpen = Boolean(
    activeModal &&
      activeModal !== "privacy" &&
      activeModal !== "Privacy Policy" &&
      activeModal !== "cookie" &&
      activeModal !== "Cookie Policy" &&
      activeModal !== "cases"
  );

  const isPrivacyModalOpen =
    activeModal === "privacy" || activeModal === "Privacy Policy";

  const isCookieModalOpen =
    activeModal === "cookie" || activeModal === "Cookie Policy";

  const isCasesModalOpen = customerModalOpen || activeModal === "cases";

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased overflow-x-clip">
      {/* 1. Global Navigation Bar */}
      <Header onOpenModal={(modalKey) => setActiveModal(modalKey)} />

      {/* 2. Hero Section */}
      <HeroSection
        onScrollToDashboard={scrollToDashboard}
        onOpenContact={() => setActiveModal("contact")}
      />

      {/* 3. Interactive Operating System Dashboard Showcase */}
      <DashboardShowcase
        ref={dashboardSectionRef}
        onToggleNotifications={() => setNotificationsOpen((prev) => !prev)}
        onOpenContact={() => setActiveModal("contact")}
      />

      {/* 4. Metrics & Trust Section */}
      <MetricsTrustSection onSeeHowItWorks={() => setCustomerModalOpen(true)} />

      {/* 5. All Your Teams Across Departments */}
      <TeamsAcrossDepartmentsSection />

      {/* 6. Implementation Journey */}
      <ImplementationJourneySection />

      {/* 7. Simple, Scalable Pricing */}
      <PricingSection onOpenModal={(modalKey) => setActiveModal(modalKey)} />

      {/* 8. Final CTA & Global Footer */}
      <Footer
        onOpenModal={(modalKey) => {
          if (modalKey === "cases") {
            setCustomerModalOpen(true);
          } else {
            setActiveModal(modalKey);
          }
        }}
      />

      {/* Modals & Overlays */}
      <NotificationsDropdown
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />

      <BookDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setActiveModal(null)}
        onOpenPrivacy={() => setActiveModal("privacy")}
      />

      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setActiveModal(null)}
      />

      <CookiePolicyModal
        isOpen={isCookieModalOpen}
        onClose={() => setActiveModal(null)}
      />

      <CaseStudiesModal
        isOpen={isCasesModalOpen}
        onClose={() => {
          setCustomerModalOpen(false);
          if (activeModal === "cases") setActiveModal(null);
        }}
        onTalkToSales={() => {
          setCustomerModalOpen(false);
          setActiveModal("contact");
        }}
      />

      {/* Proactive Cookie Consent Banner */}
      <CookieConsentBanner onOpenPreferences={() => setActiveModal("cookie")} />
    </div>
  );
}
