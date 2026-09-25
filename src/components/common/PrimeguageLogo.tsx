import React from "react";
import Image from "next/image";

interface PrimeguageLogoProps {
  className?: string;
  showText?: boolean;
}

export const PrimeguageLogo: React.FC<PrimeguageLogoProps> = ({
  className = "h-6 w-auto",
}) => {
  return (
    <span className="inline-flex items-center align-middle">
      <img
        src="/primeguage-logo.png"
        alt="Primeguage Solutions Limited"
        className={`object-contain ${className}`}
        loading="lazy"
      />
    </span>
  );
};

export default PrimeguageLogo;
