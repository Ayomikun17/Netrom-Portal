import React from "react";
import Image from "next/image";

interface PrimeguageLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export const PrimeguageLogo: React.FC<PrimeguageLogoProps> = ({
  className = "",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "h-5 w-auto",
    md: "h-6 w-auto",
    lg: "h-8 w-auto",
  };

  return (
    <span className="inline-flex items-center align-middle">
      <img
        src="/primeguage-logo.png"
        alt="Primeguage Solutions Limited"
        className={`object-contain ${sizeClasses[size] || sizeClasses.md} ${className}`}
        loading="lazy"
      />
    </span>
  );
};

export default PrimeguageLogo;
