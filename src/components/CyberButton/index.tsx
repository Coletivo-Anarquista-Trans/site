import React from "react";
import classnames from "classnames";
import theme from "tailwindcss/defaultTheme";

type CyberButtonProps = {
  children: React.ReactNode;
  className?: string;
  unevenBorders?: boolean;
  normalBorders?: boolean;
  glowingBorders?: boolean;
  clearBorders?: boolean;
  textGlow?: boolean;
  secondaryTextGlow?: boolean,
  large?: boolean;
  slim?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CyberButton: React.FC<CyberButtonProps> = ({
  children,
  className,
  unevenBorders,
  normalBorders,
  glowingBorders,
  clearBorders,
  large,
  slim,
  textGlow,
  secondaryTextGlow,
  loading,
  disabled,
  icon,
  ...rest
}) => {

const baseStyles = "px-4 py-2 transition-colors border-2 focus:focus-custom flex items-center justify-center";
const themeStyles = "bg-accent1";
const sizeStyles = large ? "py-3 px-6 text-lg" : slim ? "py-1 px-3 text-sm" : "";

const borderStyles = classnames({
    "rounded-tl-[10px] rounded-br-[10px] rounded-bl-[0px] rounded-tr-[0px]": unevenBorders,
    "rounded-none border-accent2": normalBorders,
    "shadow-[0_0_10px_2px_var(--accent-1)] border-2 border-accent2": glowingBorders,
    "border-glow-accent2 border-accent2": clearBorders,
  });

  const textStyles = classnames({
    "text-glow-accent1 glow focus:focus-custom": textGlow,
    "transition-colors text-button-foreground text-glow-accent1 glow focus:focus-custom": secondaryTextGlow
  });

  return (
    <button
      className={classnames(
        baseStyles,
        themeStyles,
        borderStyles,
        sizeStyles,
        textStyles,
        className
      )}
      disabled={loading || disabled}
      {...rest}
    >
      {icon ? (
        <span className="flex items-center gap-2">
          {children}
          <span>{icon}</span>
        </span>
      ) : loading ? (
        <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};

export default CyberButton;
