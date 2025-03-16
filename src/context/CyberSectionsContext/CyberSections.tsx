"use client";

import {createContext, useContext, useState, useEffect, ReactNode} from "react";

interface Section {
    id: string;
    label: string;
}

interface CyberSectionContextType {
    cyberSections: Section[];
    registerCyberSection: (id: string, label: string) => void;
}

const CyberSectionContext = createContext<CyberSectionContextType | undefined>(undefined);

export function CyberSectionProvider({ children }: { children: ReactNode }) {
    const [cyberSections, setCyberSections] = useState<Section[]>(() => {
        if (typeof window !== "undefined") {
            return JSON.parse(sessionStorage.getItem("cyberSections") || "[]");
        }
        return [];
    });

    const registerCyberSection = (id: string, label: string) => {
        setCyberSections((prev) => {
            if (prev.some((section) => section.id === id)) return prev;

            const updatedSections = [...prev, { id, label }];
            sessionStorage.setItem("cyberSections", JSON.stringify(updatedSections)); // Save persistently

            console.log(`✅ [CyberSectionsContext] Registered: ${id} - ${label}`);
            return updatedSections;
        });
    };

    useEffect(() => {
        console.log("🔍 [CyberSectionsContext] Updated:", cyberSections);
    }, [cyberSections]);

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