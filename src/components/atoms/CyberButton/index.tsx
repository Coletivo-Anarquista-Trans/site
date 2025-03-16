import React from "react";
import classnames from "classnames";
import {useTheme} from "@/context/ThemeContext";


interface CyberButtonProps {
    children: React.ReactNode,
    className?: string,
    unevenBorders?: boolean,
    normalBorders?: boolean,
    glowingBorders?: boolean,
    clearBorders?: boolean,
    textGlow?: boolean,
    secondaryTextGlow?: boolean,
    large?: boolean,
    slim?: boolean,
    loading?: boolean,
    disabled?: boolean,
    icon?: React.ReactNode,
    onClick?: () => void
}

export default function CyberButton({
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
                                        onClick,
                                        ...rest
                                    }: CyberButtonProps) {
    const { theme } = useTheme();


    const baseStyles = "px-4 py-2 transition-colors border-2 focus:focus-custom flex items-center justify-center";
    const sizeStyles = large ? "py-3 px-6 text-lg" : slim ? "py-1 px-3 text-sm" : "";

    const borderStyles = classnames({
        "rounded-tl-[10px] rounded-br-[10px] rounded-bl-[0px] rounded-tr-[0px] border-accent1": unevenBorders,
        "rounded-none border-accent1": normalBorders,
        "shadow-[0_0_10px_2px] border-1": glowingBorders,
        "border-glow-accent1": clearBorders,
    });

    const textStyles = classnames({
        "text-glow-accent1 glow focus:focus-custom": textGlow,
        "transition-colors text-button-foreground text-glow-accent1 glow focus:focus-custom": secondaryTextGlow
    });

    return (
        <button
            className={classnames(
                theme,
                baseStyles,
                borderStyles,
                sizeStyles,
                textStyles,
                className
            )}
            disabled={loading || disabled}
            {...rest}
            onClick={onClick}
        >
            {icon ? (
                <span className="flex items-center gap-2">
          {children}
                    <span>{icon}</span>
        </span>
            ) : loading ? (
                <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"/>
            ) : (
                children
            )}
        </button>
    );
};

