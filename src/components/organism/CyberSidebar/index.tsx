"use client";

import React, { useEffect, useState } from "react";
import classnames from "classnames";
import CyberContainer from "../../atoms/CyberContainer";
import CyberTreeNode from "@/components/molecules/CyberTreeNode";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useCyberSection } from "@/context/CyberSectionsContext/CyberSections";
import { useRouter } from "next/navigation";

interface CyberSidebarProps {
  className?: string;
  unevenBorders?: boolean;
  normalBorders?: boolean;
  glowingBorders?: boolean;
  clearBorders?: boolean;
  fixed?: boolean;
  width?: string;
}

export default function CyberSidebar({
  className,
  unevenBorders,
  normalBorders,
  glowingBorders,
  clearBorders,
  fixed = true,
  width = "w-64",
}: CyberSidebarProps) {
  const { theme } = useTheme();
  const { cyberSections } = useCyberSection();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("🔍 [CyberSidebar] Sections in Sidebar:", cyberSections);
  }, [cyberSections]);

  const handleSectionClick = (id: string, prefix: string) => {
    const path = `/${prefix}#${id}`;
    router.push(path);
    setOpen(false); // Close sidebar on navigation for mobile/tablet
  };

  const manifestoSections = cyberSections.filter(
    (s) => s.parent === "manifesto"
  );
  const recursosSections = cyberSections.filter((s) => s.parent === "recursos");

  const baseStyles =
    "z-50 bg-background text-accent1 custom-scrollbar transition-transform duration-300 ease-in-out";

  const sizeStyles = classnames(
    // Mobile and Tablet (below lg)
    "fixed top-0 left-0 h-full z-50 overflow-y-auto",
    open ? "translate-x-0" : "-translate-x-full",
    "w-3/4 sm:w-64", // Width on mobile and tablet

    // Desktop (lg and above)
    "lg:translate-x-0 lg:relative lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:z-40",
    width // Use the passed width prop for desktop
  );

  const borderStyles = classnames({
    "rounded-tl-[10px] rounded-br-[10px] rounded-bl-[0px] rounded-tr-[0px] border-accent1":
      unevenBorders,
    "border-accent1": normalBorders,
    "shadow-[0_0_10px_2px] border-1": glowingBorders,
    "border-glow-accent1": clearBorders,
  });

  return (
    <>
      <CyberContainer>
        {/* Mobile/Tablet Hamburger Button - hidden on desktop */}
        <div className="fixed top-4 left-4 z-40 lg:hidden">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="p-3 rounded-full focus:outline-none text-accent1 hover:text-accent1-hover transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Overlay for mobile/tablet when open */}
        {open && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Sidebar */}
        <CyberContainer
          className={classnames(
            theme,
            baseStyles,
            sizeStyles,
            borderStyles,
            className,
            "border-r-2",
            fixed ? "fixed lg:sticky" : "relative"
          )}
        >
          {/* Mobile/Tablet Close Button inside sidebar */}
          <div className="lg:hidden flex justify-end p-4">
            <button
              onClick={() => setOpen(false)}
              className="text-accent1 hover:text-accent1-hover focus:outline-none transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Home Link */}
          <CyberTreeNode
            id="home-root"
            label={
              <Link href="/" passHref>
                Home
              </Link>
            }
            onClick={() => setOpen(false)}
          />

          {/* Manifesto Section */}
          <CyberTreeNode
            id="manifesto-root"
            label={
              <Link href="/manifesto" passHref>
                Manifesto
              </Link>
            }
          >
            {manifestoSections.length > 0 ? (
              manifestoSections.map((section) => (
                <CyberTreeNode
                  key={section.id}
                  id={`${section.id}`}
                  label={section.label}
                  onClick={() => handleSectionClick(section.id, "manifesto")}
                />
              ))
            ) : (
              <p className="text-accent3 text-center">- x -</p>
            )}
          </CyberTreeNode>

          {/* Recursos Section */}
          <CyberTreeNode
            id="recursos-root"
            label={
              <Link href="/recursos" passHref>
                Recursos
              </Link>
            }
          >
            {recursosSections.length > 0 ? (
              recursosSections.map((section) => (
                <CyberTreeNode
                  key={section.id}
                  id={`${section.id}`}
                  label={section.label}
                  onClick={() => handleSectionClick(section.id, "recursos")}
                />
              ))
            ) : (
              <p className="text-accent3 text-center">- x -</p>
            )}
          </CyberTreeNode>

          {/* Arquivos Link */}
          <CyberTreeNode
            id="arquivos-root"
            label={
              <Link href="/arquivos" passHref>
                Arquivos
              </Link>
            }
            onClick={() => setOpen(false)}
          />

          {/* Sobre Link */}
          <CyberTreeNode
            id="sobre-root"
            label={
              <Link href="/sobre" passHref>
                Sobre
              </Link>
            }
            onClick={() => setOpen(false)}
          />
        </CyberContainer>
      </CyberContainer>
    </>
  );
}
