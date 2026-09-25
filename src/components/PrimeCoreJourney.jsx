import React, { useEffect, useState } from "react";
import {
  Edit3,
  Users,
  Grid,
  FileText,
} from "lucide-react";

import "./NetromJourney.css";

const journeyItems = [
  {
    id: 0,
    category: "STRUCTURE",
    title: "Departments",
    shortTitle: "Discover & Configure",
    description:
      "Map departments, roles, approval workflows and organisation settings before launch.",
    icon: Edit3,
    iconColor: "#ffc72c",
  },
  {
    id: 1,
    category: "ACCESS",
    title: "Roles & Users",
    shortTitle: "Migrate & Provision",
    description:
      "Bring existing employee, strategic and operational data into Netrom securely.",
    icon: Users,
    iconColor: "#34d399",
  },
  {
    id: 2,
    category: "OPERATIONS",
    title: "Workflows",
    shortTitle: "Train & Prepare",
    description:
      "Prepare HR, Finance and Management to manage workflows, approvals and system settings.",
    icon: Grid,
    iconColor: "#38bdf8",
  },
  {
    id: 3,
    category: "INTELLIGENCE",
    title: "Dashboards",
    shortTitle: "Launch & Scale",
    description:
      "Roll Netrom out across your organisation with guided onboarding and room to scale.",
    icon: FileText,
    iconColor: "#ffc72c",
  },
];

const orbitPositions = [
  {
    position: "top",
  },
  {
    position: "right",
  },
  {
    position: "bottom",
  },
  {
    position: "left",
  },
];

export default function NetromJourney() {
  const [activeWayTab, setActiveWayTab] = useState(0);

  /*
   * Controls the currently selected journey item.
   * Clicking any of the four fixed labels changes this state.
   */
  const activeItem =
    journeyItems.find((item) => item.id === activeWayTab) ||
    journeyItems[0];

  /*
   * Optional subtle automatic progression.
   *
   * Set AUTO_ROTATE to false if you only want users
   * to change the content by clicking.
   */
  const AUTO_ROTATE = false;

  useEffect(() => {
    if (!AUTO_ROTATE) return;

    const interval = setInterval(() => {
      setActiveWayTab((current) => (current + 1) % journeyItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="primecore-journey-section">
      <div className="primecore-journey-container">

        {/* ======================================================== */}
        {/* HEADER                                                    */}
        {/* ======================================================== */}

        <div className="primecore-journey-header">

          <div className="primecore-status">
            <span className="primecore-status-dot" />

            <span>
              NETROM OPERATING SYSTEM
            </span>
          </div>

          <div className="primecore-workspace-status">
            WORKSPACE / ACTIVE
          </div>

        </div>


        {/* ======================================================== */}
        {/* MAIN VISUAL                                               */}
        {/* ======================================================== */}

        <div className="primecore-orbit-stage">

          {/* ====================================================== */}
          {/* BACKGROUND                                             */}
          {/* ====================================================== */}

          <div className="primecore-grid-background" />

          <div className="primecore-ambient-glow" />

          <div className="primecore-secondary-glow" />


          {/* ====================================================== */}
          {/* FIXED LABEL 1                                           */}
          {/* ====================================================== */}

          <button
            type="button"
            onClick={() => setActiveWayTab(0)}
            className={`primecore-label primecore-label-top-left ${
              activeWayTab === 0
                ? "primecore-label-active"
                : ""
            }`}
          >
            <span className="primecore-label-category">
              STRUCTURE
            </span>

            <span className="primecore-label-title">
              Departments
            </span>

            {activeWayTab === 0 && (
              <span className="primecore-label-action">
                Configure
              </span>
            )}
          </button>


          {/* ====================================================== */}
          {/* FIXED LABEL 2                                           */}
          {/* ====================================================== */}

          <button
            type="button"
            onClick={() => setActiveWayTab(1)}
            className={`primecore-label primecore-label-top-right ${
              activeWayTab === 1
                ? "primecore-label-active"
                : ""
            }`}
          >
            <span className="primecore-label-category">
              ACCESS
            </span>

            <span className="primecore-label-title">
              Roles & Users
            </span>

            {activeWayTab === 1 && (
              <span className="primecore-label-action">
                Provision
              </span>
            )}
          </button>


          {/* ====================================================== */}
          {/* FIXED LABEL 3                                           */}
          {/* ====================================================== */}

          <button
            type="button"
            onClick={() => setActiveWayTab(2)}
            className={`primecore-label primecore-label-bottom-left ${
              activeWayTab === 2
                ? "primecore-label-active"
                : ""
            }`}
          >
            <span className="primecore-label-category">
              OPERATIONS
            </span>

            <span className="primecore-label-title">
              Workflows
            </span>

            {activeWayTab === 2 && (
              <span className="primecore-label-action">
                Automate
              </span>
            )}
          </button>


          {/* ====================================================== */}
          {/* FIXED LABEL 4                                           */}
          {/* ====================================================== */}

          <button
            type="button"
            onClick={() => setActiveWayTab(3)}
            className={`primecore-label primecore-label-bottom-right ${
              activeWayTab === 3
                ? "primecore-label-active"
                : ""
            }`}
          >
            <span className="primecore-label-category">
              INTELLIGENCE
            </span>

            <span className="primecore-label-title">
              Dashboards
            </span>

            {activeWayTab === 3 && (
              <span className="primecore-label-action">
                Understand
              </span>
            )}
          </button>


          {/* ====================================================== */}
          {/* ORBIT SYSTEM                                            */}
          {/* ====================================================== */}

          <div className="primecore-orbit">

            {/* Outer orbit */}
            <div className="primecore-orbit-ring primecore-orbit-ring-outer" />

            {/* Middle orbit */}
            <div className="primecore-orbit-ring primecore-orbit-ring-middle" />

            {/* Inner orbit */}
            <div className="primecore-orbit-ring primecore-orbit-ring-inner" />


            {/* ================================================== */}
            {/* ROTATING ICON SYSTEM                                */}
            {/* ================================================== */}

            <div className="primecore-icon-orbit">

              {journeyItems.map((item, index) => {
                const Icon = item.icon;
                const position = orbitPositions[index].position;

                return (
                  <div
                    key={item.id}
                    className={`primecore-orbit-icon-position primecore-orbit-icon-${position}`}
                  >
                    <div
                      className="primecore-orbit-icon"
                      style={{
                        "--icon-color": item.iconColor,
                      }}
                    >
                      <Icon />
                    </div>
                  </div>
                );
              })}

            </div>


            {/* ================================================== */}
            {/* CENTRE                                               */}
            {/* ================================================== */}

            <div className="primecore-centre">

              <div className="primecore-centre-glow" />

              <div className="primecore-centre-ring" />

              <div className="primecore-logo-circle">

                {/* ============================================ */}
                {/* MOCK NETROM LOGO                           */}
                {/* ============================================ */}

                <div className="primecore-logo">

                  <svg
                    viewBox="0 0 100 70"
                    className="primecore-logo-mark"
                    fill="none"
                  >

                    {/* P */}
                    <path
                      d="M12 58V12H31C42 12 48 18 48 28C48 38 42 44 31 44H21"
                      stroke="#111714"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* C */}
                    <path
                      d="M82 20C78 15 72 12 65 12C53 12 47 21 47 35C47 49 53 58 65 58C72 58 78 55 82 50"
                      stroke="#111714"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                  </svg>

                  <span className="primecore-logo-text">
                    NETROM
                  </span>

                </div>

              </div>

            </div>


            {/* ================================================== */}
            {/* ACTIVE INFORMATION                                  */}
            {/* ================================================== */}

            <div className="primecore-active-content">

              <div
                key={activeItem.id}
                className="primecore-content-animation"
              >

                <div className="primecore-active-step">
                  {activeItem.shortTitle}
                </div>

                <p className="primecore-active-description">
                  {activeItem.description}
                </p>

              </div>

            </div>

          </div>


          {/* ====================================================== */}
          {/* CONNECTION STATUS                                       */}
          {/* ====================================================== */}

          <div className="primecore-connected">

            <span className="primecore-connected-dot" />

            <span>
              WORKSPACE CONNECTED
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}