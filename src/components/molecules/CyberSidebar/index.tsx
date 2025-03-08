import React from "react";
import classnames from "classnames";
import CyberContainer from "../../atoms/CyberContainer";
import CyberTreeNode from "@/components/molecules/CyberTreeNode";

interface CyberSidebarProps {
    className?: string;
    unevenBorders?: boolean;
    normalBorders?: boolean;
    glowingBorders?: boolean;
    clearBorders?: boolean;
    fixed?: boolean;
    width?: string;
    theme: string;
}

export default function CyberSidebar({
                                         className,
                                         unevenBorders,
                                         normalBorders,
                                         glowingBorders,
                                         clearBorders,
                                         fixed = true,
                                         width = "w-64",
                                         theme,
                                     }: CyberSidebarProps) {
    const baseStyles = "";
    const sizeStyles = classnames(width, fixed ? "fixed left-0 top-0 min-h-screen" : "relative");
    const borderStyles = classnames({
        "rounded-tl-[10px] rounded-br-[10px] rounded-bl-[0px] rounded-tr-[0px] border-accent1": unevenBorders,
        "rounded-none border-accent1": normalBorders,
        "shadow-[0_0_10px_2px] border-1": glowingBorders,
        "border-glow-accent1": clearBorders,
    });

    return (
        <CyberContainer
            theme={theme}
            className={classnames(
                theme,
                baseStyles,
                sizeStyles,
                borderStyles,
                className
            )}>
            <CyberTreeNode theme={theme} label={"Button 1"}>
                <CyberTreeNode theme={theme} label={"Button 1.1"}>
                </CyberTreeNode>
            </CyberTreeNode>
            <CyberTreeNode theme={theme} label={"Button 2"}>
                <CyberTreeNode theme={theme} label={"Button 2.1"}>
                </CyberTreeNode>
            </CyberTreeNode>
            <CyberTreeNode theme={theme} label={"Button 3"}>
                <CyberTreeNode theme={theme} label={"Button 3.1"}>
                </CyberTreeNode>
            </CyberTreeNode>
        </CyberContainer>
    );
};
