import React from "react";
import classnames from "classnames";


interface CyberContainerProps {
  children?: React.ReactNode;
  className?: string;
  unevenBorders?: boolean;
  normalBorders?: boolean;
  glowingBorders?: boolean;
  clearBorders?: boolean;
  textBackground?: boolean;
  large?: boolean;
  slim?: boolean;
  theme: string;
  accentIndex?: number;
}

export default function CyberContainer({
  children,
  className,
  unevenBorders,
  normalBorders,
  glowingBorders,
  clearBorders,
  large,
  textBackground,
  slim,
  theme,
  accentIndex,
}: CyberContainerProps) {

  const baseStyles = classnames("p-4", `text-accent-${accentIndex}`);
  const sizeStyles = large ? "w-8 h-8 text-lg" : slim ? "w-4 h-4 text-sm" : "";

const borderStyles = classnames({
    "rounded-tl-[10px] rounded-br-[10px] rounded-bl-[0px] rounded-tr-[0px] border-accent1": unevenBorders,
    "rounded-none": normalBorders,
    "shadow-[0_0_10px_2px] border-2": glowingBorders,
    "border-glow": clearBorders,
  });

  const backgroundStyles = classnames({
    "bg-clip-padding p-4 rounded-r-3xl shadow-xl": textBackground,
    "text-background": textBackground,
  });

  return (
    <div
      className={classnames(
        theme,
        baseStyles,
        borderStyles,
        backgroundStyles,
        sizeStyles,
        className
      )}>
      {children}
    </div>
  );
};

