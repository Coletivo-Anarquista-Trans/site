"use client";

import { useState, ReactNode } from "react";
import CyberContainer from "@/components/atoms/CyberContainer";
import { CyberDropdownProps } from "@/types/dropdown";

interface EnhancedCyberDropdownProps extends Omit<CyberDropdownProps, 'items'> {
    items?: CyberDropdownProps['items'];
    content?: ReactNode;
}

export default function CyberDropdown({
    title,
    items,
    content,
    className = "",
    defaultOpen = false,
    maxHeight = "max-h-96",
    onToggle
}: EnhancedCyberDropdownProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleDropdown = () => {
        const newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
        onToggle?.(newIsOpen);
    };

    return (
        <CyberContainer className={`w-full max-w-2xl mx-auto ${className}`}>
            <div className="border border-accent1 rounded-none">
                <button
                    onClick={toggleDropdown}
                    className="w-full p-4 bg-transparent border-none text-left flex items-center justify-between text-accent1 hover:text-accent5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent1"
                >
                    <span className="text-lg font-semibold">{title}</span>
                    <svg
                        className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'
                            }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                {isOpen && (
                    <div className="border-t border-accent1 bg-background">
                        <div className={`p-4 space-y-3 overflow-y-auto ${maxHeight}`}>
                            {content && (
                                <div className="text-accent1">
                                    {content}
                                </div>
                            )}
                            
                            {items && items.map((item) => (
                                <div
                                    key={item.id}
                                    className={`p-2 border-l-2 border-transparent transition-all duration-200 flex items-center gap-2 ${item.disabled
                                            ? 'text-accent3 cursor-not-allowed opacity-50'
                                            : 'text-accent1 hover:text-accent5 cursor-pointer hover:border-accent5'
                                        }`}
                                    onClick={item.disabled ? undefined : item.onClick}
                                >
                                    {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </CyberContainer>
    );
} 