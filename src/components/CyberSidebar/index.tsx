import React from "react";
import CyberContainer from "../CyberContainer";
import classnames from "classnames";

interface CyberSidebarProps {
    children: React.ReactNode;
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
                                                              children,
                                                              className,
                                                              unevenBorders,
                                                              normalBorders,
                                                              glowingBorders,
                                                              clearBorders,
                                                              fixed = true,
                                                              width = "w-64",
                                                              theme,
                                                          }: CyberSidebarProps) {
    const baseStyles = "flex flex-col items-start p-4 h-full";
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
            )} theme={theme}>
            {children}
        </CyberContainer>
    );
};
