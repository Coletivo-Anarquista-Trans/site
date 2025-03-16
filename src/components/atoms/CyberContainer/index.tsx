import React from "react";
import classnames from "classnames";
import {useTheme} from "@/context/ThemeContext";

interface CyberContainerProps {
  children?: React.ReactNode;
  className?: string;
  unevenBorders?: boolean;
  normalBorders?: boolean;
  glowingBorders?: boolean;
  clearBorders?: boolean;
  large?: boolean;
  slim?: boolean;
}

export default function CyberContainer({
  children,
  className,
  unevenBorders,
  normalBorders,
  glowingBorders,
  clearBorders,
  large,
  slim,
}: CyberContainerProps) {

  const { theme } = useTheme();

  const baseStyles = classnames("text-accent-1");
  const sizeStyles = large ? "w-8 h-8 text-lg" : slim ? "w-4 h-4 text-sm" : "";

const borderStyles = classnames({
    "rounded-tl-[10px] rounded-br-[10px] rounded-bl-[0px] rounded-tr-[0px] border-accent1": unevenBorders,
    "rounded-none": normalBorders,
    "shadow-[0_0_10px_2px] border-2": glowingBorders,
    "border-glow": clearBorders,
  });


  return (
    <div
      className={classnames(
        theme,
        baseStyles,
        borderStyles,
        sizeStyles,
        className
      )}>
      {children}
    </div>
  );
};

