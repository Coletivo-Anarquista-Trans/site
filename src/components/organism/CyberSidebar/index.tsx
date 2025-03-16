"use client";

import React, {useEffect} from "react";
import classnames from "classnames";
import CyberContainer from "../../atoms/CyberContainer";
import CyberTreeNode from "@/components/molecules/CyberTreeNode";
import Link from "next/link";
import {useTheme} from "@/context/ThemeContext";
import {useCyberSection} from "@/context/CyberSectionsContext/CyberSections";
import {useRouter} from "next/navigation";

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
                                         width = "w-48",
                                     }: CyberSidebarProps) {
    const router = useRouter();
    const {theme} = useTheme();
    const {cyberSections} = useCyberSection();

    useEffect(() => {
        console.log("🔍 [CyberSidebar] Sections in Sidebar:", cyberSections);
    }, [cyberSections]);

    const handleSectionClick = (id: string) => {
        const manifestoPath = `/manifesto#${id}`;
        router.push(manifestoPath);
    };

    const baseStyles = "bg-background min-h-screen text-foreground";
    const sizeStyles = classnames(width, fixed ? "fixed left-0 top-0 min-h-screen" : "relative");
    const borderStyles = classnames({
        "rounded-tl-[10px] rounded-br-[10px] rounded-bl-[0px] rounded-tr-[0px] border-accent1": unevenBorders,
        "rounded-none border-accent1": normalBorders,
        "shadow-[0_0_10px_2px] border-1": glowingBorders,
        "border-glow-accent1": clearBorders,
    });

    return (
        <CyberContainer className={classnames(theme, baseStyles, sizeStyles, borderStyles, className)}>
            <Link href="/" passHref>
                <CyberTreeNode label="Home"/>
            </Link>
            <CyberTreeNode label={<Link href="/manifesto">Manifesto</Link>}>
                {cyberSections.length > 0 ? (
                    cyberSections.map((section) => (
                        <CyberTreeNode
                            key={section.id}
                            label={section.label}
                            onClick={() => handleSectionClick(section.id)}
                        />
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No sections available</p>
                )}
            </CyberTreeNode>
            <CyberTreeNode label="Button 3">
                <CyberTreeNode label="3.1"/>
            </CyberTreeNode>
        </CyberContainer>
    );
}