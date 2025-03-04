import React from "react";
import { useTheme } from "@/context/ThemeContext";
import classnames from "classnames";


interface CyberContainerProps {
  children: React.ReactNode;
  className?: string;
  unevenBorders?: boolean;
  normalBorders?: boolean;
  glowingBorders?: boolean;
  clearBorders?: boolean;
  large?: boolean;
  slim?: boolean;
}

export const CyberContainer: React.FC<CyberContainerProps> = ({
  children,
  className,
  unevenBorders,
  normalBorders,
  glowingBorders,
  clearBorders,
  large,
  slim,
  ...rest
}) => {

const { theme } = useTheme();
const baseStyles = "flex flex-col items-center justify-items-center bg-background min-h-screen font-[family-name:var(--font-geist-sans)] text-foreground";
const sizeStyles = large ? "w-8 h-8 text-lg" : slim ? "w-4 h-4 text-sm" : "";

const borderStyles = classnames({
    "rounded-tl-[10px] rounded-br-[10px] rounded-bl-[0px] rounded-tr-[0px]": unevenBorders,
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

