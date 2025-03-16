import React from "react";
import classnames from "classnames";
import CyberContainer from "../../atoms/CyberContainer";
import CyberTreeNode from "@/components/molecules/CyberTreeNode";
import Link from "next/link";
import {useTheme} from "@/context/ThemeContext";

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
    const { theme } = useTheme();

    const baseStyles = "bg-background min-h-screen text-foreground";
    const sizeStyles = classnames(width, fixed ? "fixed left-0 top-0 min-h-screen" : "relative");
    const borderStyles = classnames({
        "rounded-tl-[10px] rounded-br-[10px] rounded-bl-[0px] rounded-tr-[0px] border-accent1": unevenBorders,
        "rounded-none border-accent1": normalBorders,
        "shadow-[0_0_10px_2px] border-1": glowingBorders,
        "border-glow-accent1": clearBorders,
    });

    return (
        <CyberContainer
            className={classnames(
                theme,
                baseStyles,
                sizeStyles,
                borderStyles,
                className
            )}>
            <CyberTreeNode label={"Home"}>
                <Link href="/" passHref>
                <CyberTreeNode label={"Clique aqui!"}/>
                </Link>
            </CyberTreeNode>
            <CyberTreeNode label={"Manifesto"}>
                <Link href="/manifesto" passHref>
                <CyberTreeNode label={"Clique aqui!"}/>
                </Link>
            </CyberTreeNode>
            <CyberTreeNode label={"Button 3"}>
                <CyberTreeNode label={"3.1"}/>
            </CyberTreeNode>
        </CyberContainer>
    );
};
