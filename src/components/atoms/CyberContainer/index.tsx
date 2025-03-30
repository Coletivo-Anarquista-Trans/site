"use client";

import {ReactNode, useEffect} from "react";
import classnames from "classnames";
import {useTheme} from "@/context/ThemeContext";
import {useCyberSection} from "@/context/CyberSectionsContext/CyberSections";
import {usePathname} from "next/navigation";

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
  const pathname = usePathname();

  //todo refactor this logic inside cybercontainer where we do scrolling to the container in question.
  // we need to encapsulate this


  useEffect(() => {
    const getParentFromPathOrId = (): string | null => {
      if (!id) return null;

      const match = id.match(/^(recursos|manifesto)-/);
      if (match) return match[1];

      return pathname.includes("/recursos") ? "recursos" : "manifesto";
    };

    const parent = getParentFromPathOrId();

    if (id && typeof children === "string" && typeof parent === "string") {
      registerCyberSection(parent, id, children);
    }

    const scrollToSelfIfHashMatches = () => {
      const currentHash = window.location.hash.replace("#", "");
      if (currentHash === id) {
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    };

    const delay = setTimeout(scrollToSelfIfHashMatches, 200);
    window.addEventListener("hashchange", scrollToSelfIfHashMatches);
    return () => {
      clearTimeout(delay);
      window.removeEventListener("hashchange", scrollToSelfIfHashMatches);
    };
  }, [id, children, pathname, registerCyberSection]);


  // above, a terrible approach to doing this. we need to refactor it


  const baseStyles = classnames("text-accent-1");
  const sizeStyles = large ? "w-8 h-8 text-lg" : slim ? "w-4 h-4 text-sm" : "";

const borderStyles = classnames({
    "rounded-tl-[10px] rounded-br-[10px] rounded-bl-[0px] rounded-tr-[0px] border-accent1": unevenBorders,
    "rounded-none": normalBorders,
    "shadow-[0_0_10px_2px] border": glowingBorders,
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

