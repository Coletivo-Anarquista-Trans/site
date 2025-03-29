"use client";

import {createContext, useContext, useState, ReactNode} from "react";

interface Section {
    id: string;
    label: ReactNode;
    parent: string;
}

interface CyberSectionContextType {
    cyberSections: Section[];
    registerCyberSection: (parent: string, id: string, label: ReactNode) => void;
}

const CyberSectionContext = createContext<CyberSectionContextType | undefined>(undefined);

export function CyberSectionProvider({ children }: { children: string }) {
    const [cyberSections, setCyberSections] = useState<Section[]>(() => {
        if (typeof window !== "undefined") {
            return JSON.parse(sessionStorage.getItem("cyberSections") || "[]");
        }
        return [];
    });

    const registerCyberSection = (parent: string, id: string, label: ReactNode) => {
        setCyberSections((prev) => {
            if (prev.some((section) => section.id === id && section.parent === parent)) return prev;

            const updatedSections = [...prev, { parent, id, label }];
            sessionStorage.setItem("cyberSections", JSON.stringify(updatedSections));
            return updatedSections;
        });
    };

    return (
        <CyberSectionContext.Provider value={{ cyberSections, registerCyberSection }}>
            {children}
        </CyberSectionContext.Provider>
    );
}

export function useCyberSection() {
    const context = useContext(CyberSectionContext);
    if (!context) {
        throw new Error("useCyberSection must be used within a CyberSectionProvider");
    }
    return context;
}