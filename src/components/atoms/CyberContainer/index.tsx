import {ReactNode, useEffect} from "react";
import classnames from "classnames";
import {useTheme} from "@/context/ThemeContext";
import {useCyberSection} from "@/context/CyberSectionsContext/CyberSections";

interface CyberContainerProps {
  children?: ReactNode;
  className?: string;
  unevenBorders?: boolean;
  normalBorders?: boolean;
  glowingBorders?: boolean;
  clearBorders?: boolean;
  large?: boolean;
  slim?: boolean;
  id?: string,
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
  id,
}: CyberContainerProps) {
  const { theme } = useTheme();
  const { registerCyberSection } = useCyberSection();


  useEffect(() => {
    if (!id) return;
    const label = typeof children === "string" ? children : `Section ${id}`;
    registerCyberSection(id, label);
  }, [id, children, registerCyberSection]);

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
      id={id}
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

