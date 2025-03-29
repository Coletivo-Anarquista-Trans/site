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
    const router = useRouter();
    const { theme } = useTheme();
    const { cyberSections } = useCyberSection();

    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log("🔍 [CyberSidebar] Sections in Sidebar:", cyberSections);
    }, [cyberSections]);

    const handleSectionClick = (id: string) => {
        const manifestoPath = `/manifesto#${id}`;
        router.push(manifestoPath);
        setOpen(false);
    };

    const manifestoSections = cyberSections.filter(s => s.parent === "manifesto");
    const recursosSections = cyberSections.filter(s => s.parent === "recursos");

    const baseStyles = "bg-background h-screen md:h-auto text-accent1 overflow-y-auto custom-scrollbar transition-transform duration-300 ease-in-out transform";
    const sizeStyles = classnames(width, fixed ? "min-h-screen" : "relative");
    const borderStyles = classnames({
        "rounded-tl-[10px] rounded-br-[10px] rounded-bl-[0px] rounded-tr-[0px] border-accent1": unevenBorders,
        "border-accent1": normalBorders,
        "shadow-[0_0_10px_2px] border-1": glowingBorders,
        "border-glow-accent1": clearBorders,
    });

    return (
        <>
            {/* Mobile Hamburger Button */}
            <div className="md:hidden p-4 absolute">
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="text-accent1 focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2"
                         viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>

            {/* Overlay for mobile when open */}
            {open && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Sidebar  */}
            <CyberContainer
                className={classnames(
                    theme,
                    baseStyles,
                    sizeStyles,
                    borderStyles,
                    className,
                    "border-r-2 z-50",
                    open ? "translate-x-0 fixed top-0 left-0" : "-translate-x-full fixed top-0 left-0",
                    "md:translate-x-0 md:static md:block"
                )}
            >

                {/* Mobile Close Button inside sidebar */}
                {open && (
                    <div className="md:hidden flex justify-end p-4">
                        <button onClick={() => setOpen(false)} className="text-accent1 focus:outline-none">
                            {/* X icon */}
                            <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2"
                                 viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                )}

                <Link href="/" passHref>
                    <CyberTreeNode id="home-root" label="Home" />
                </Link>
                <CyberTreeNode id="manifesto-root" label={<Link href="/manifesto">Manifesto</Link>}>
                    {manifestoSections.length > 0 ? (
                        manifestoSections.map((section) => (
                            <CyberTreeNode
                                key={section.id}
                                id={section.id}
                                label={section.label}
                                onClick={() => handleSectionClick(section.id)}
                            />
                        ))
                    ) : (
                        <p className="text-accent3 text-center">- x -</p>
                    )}
                </CyberTreeNode>

                <CyberTreeNode id="recursos-root" label={<Link href="/recursos">Recursos</Link>}>
                    {recursosSections.length > 0 ? (
                        recursosSections.map((section) => (
                            <CyberTreeNode
                                key={section.id}
                                id={section.id}
                                label={section.label}
                                onClick={() => handleSectionClick(section.id)}
                            />
                        ))
                    ) : (
                        <p className="text-accent3 text-center">- x -</p>
                    )}
                </CyberTreeNode>
            </CyberContainer>
        </>
    );
}
