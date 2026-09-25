"use client";

import React, { useState, useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "fade";
  className?: string;
  delay?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "fade",
  className = "",
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0)";
    if (direction === "left") return "translate3d(-80px, 0, 0)";
    if (direction === "right") return "translate3d(80px, 0, 0)";
    return "translate3d(0, 40px, 0)";
  };

  return (
    <div
      ref={ref}
      className={`w-full ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 1.4s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 1.4s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
