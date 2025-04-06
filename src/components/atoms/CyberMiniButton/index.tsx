"use client";

import { ReactNode } from "react";

import classnames from "classnames";

interface CyberMiniButtonProps {
  children: ReactNode;
  onClick?: () => void;
  isParent?: boolean;
  className?: string;
}

export default function CyberMiniButton({
  children,
  onClick,
  isParent = false,
  className = "",
}: CyberMiniButtonProps) {
  

  return (
    <button
      onClick={onClick}
      className={classnames(
        "w-full text-left px-2 py-1 hover:bg-accent1/10 transition-colors",
        isParent ? "font-medium" : "font-normal",
        className
      )}
    >
      {children}
    </button>
  );
}
