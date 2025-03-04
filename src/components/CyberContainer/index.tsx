import React from "react";
import classnames from "classnames";

type CyberContainerProps = {
  children: React.ReactNode;
  className?: string;
  unevenBorders?: boolean;
  normalBorders?: boolean;
  glowingBorders?: boolean;
  clearBorders?: boolean;
  large?: boolean;
  slim?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CyberContainer: React.FC<CyberContainerProps> = ({
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

const baseStyles = "px-4 py-2 transition-colors border-2 focus:focus-custom flex items-center justify-center";
const themeStyles = "bg-accent1";
const sizeStyles = large ? "w-8 h-8 text-lg" : slim ? "w-4 h-4 text-sm" : "";

const borderStyles = classnames({
    "rounded-tl-[10px] rounded-br-[10px] rounded-bl-[0px] rounded-tr-[0px]": unevenBorders,
    "rounded-none border-accent2": normalBorders,
    "shadow-[0_0_10px_2px_var(--accent-1)] border-2 border-accent2": glowingBorders,
    "border-glow-accent2 border-accent2": clearBorders,
  });

  return (
    <div
      className={classnames(
        baseStyles,
        themeStyles,
        borderStyles,
        sizeStyles,
        className
      )}>
    </div>
  );
};

export default CyberContainer;
