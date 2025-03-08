import React from "react";
import classnames from "classnames";

interface CyberMiniButtonProps {
    children: React.ReactNode,
    className?: string,
    large?: boolean,
    slim?: boolean,
    loading?: boolean,
    disabled?: boolean,
    icon?: React.ReactNode,
    onClick?: () => void,
    theme: string,
}

export default function CyberMiniButton({
                                            children,
                                            className,
                                            large,
                                            slim,
                                            loading,
                                            disabled,
                                            icon,
                                            onClick,
                                            theme,
                                            ...rest
                                        }: CyberMiniButtonProps) {

    const baseStyles = "px-4 py-2 transition-colors border-2 focus:focus-custom flex items-center justify-center";
    const sizeStyles = large ? "py-3 px-6 text-lg" : slim ? "py-1 px-3 text-sm" : "";

    return (
        <button
            className={classnames(
                theme,
                baseStyles,
                sizeStyles,
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
    )
};

