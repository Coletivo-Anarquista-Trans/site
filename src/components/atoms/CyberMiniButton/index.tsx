import React, {useState} from "react";
import classnames from "classnames";
import {FaFolder, FaFolderOpen} from "react-icons/fa";
import {HiOutlineArrowTurnDownRight} from "react-icons/hi2";
import {useTheme} from "@/context/ThemeContext";

interface CyberMiniButtonProps {
    children?: React.ReactNode;
    className?: string;
    large?: boolean;
    slim?: boolean;
    loading?: boolean;
    disabled?: boolean;
    isOpen?: boolean;
    onClick?: () => void;
    toggleIcon?: () => void;
    label: string;
    isParent?: boolean,
}

export default function CyberMiniButton({
                                            children,
                                            className,
                                            large,
                                            slim,
                                            loading,
                                            disabled,
                                            isOpen = false,
                                            onClick,
                                            toggleIcon,
                                            label,
                                            isParent,
                                            ...rest
                                        }: CyberMiniButtonProps) {
    const { theme } = useTheme();
    const [isFolderOpen, setIsFolderOpen] = useState(false);

    const baseStyles = "px-4 py-2 transition-colors";
    const sizeStyles = large ? "py-3 px-6 text-lg" : slim ? "py-1 px-3 text-sm" : "";

    const handleClick = () => {
        if (onClick) onClick();
        setIsFolderOpen(prev => !prev);
    };

    return (
        <button
            className={classnames(
                theme,
                baseStyles,
                sizeStyles,
                className
            )}
            disabled={loading || disabled}
            onClick={handleClick}
            {...rest}
        >
            {loading ? (
                <div className="w-4 h-4 animate-spin"/>
            ) : (
                <span className="flex gap-1">
                    {/* \(★ω★)/ Parent buttons use folder icons */}
                    {/* \(★ω★)/ Children buttons use arrows icons */}
                    {isParent ? (
                        isFolderOpen ? <FaFolderOpen className="w-4 h-4"/> : <FaFolder className="w-4 h-4"/>
                    ) : (
                        <HiOutlineArrowTurnDownRight className="w-4 h-4"/>
                    )}
                    {children}
                </span>
            )}
        </button>
    );
}
