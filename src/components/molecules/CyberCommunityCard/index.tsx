'use client';

import { motion } from "framer-motion";
import CyberContainer from "@/components/atoms/CyberContainer";
import Link from "next/link";
import { useCyberSection } from "@/context/CyberSectionsContext/CyberSections";
import { useEffect } from "react";

export interface CyberCommunity {
    id: string;
    title: string;
    type: 'link';
    url: string;
    description: string;
}

interface CyberCommunityCardProps {
    community: CyberCommunity;
    index: number;
}

export default function CyberCommunityCard({ community, index }: CyberCommunityCardProps) {
    const { registerCyberSection } = useCyberSection();

    const sectionId = `coletivo-${community.id}`;

    useEffect(() => {
        registerCyberSection("coletivos", sectionId, community.title);
    }, [registerCyberSection, community.title, sectionId]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="mb-4"
        >
            <CyberContainer
                className="border border-accent1 p-1 w-full crt-screen crt-curvature crt-scanlines crt-reflection granular-effect"
                glowingBorders
            >
                <CyberContainer className="border border-accent1 p-4 bg-background">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-accent5 text-sm font-mono">
                            [{String(index + 1).padStart(2, '0')}]
                        </span>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-xs text-accent3 font-mono">ONLINE</span>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-accent1 mb-2 font-mono">
                        &gt; {community.title}
                    </h3>

                    <p className="text-accent2 text-sm mb-4 leading-relaxed">
                        {community.description}
                    </p>

                    <CyberContainer className="mt-3 flex justify-end">
                        <Link href={community.url} target="_blank" rel="noopener noreferrer">
                            <span className="mt-1 text-accent5 text-sm font-mono hover:underline">CONECTAR &gt;_</span>
                        </Link>
                    </CyberContainer>
                </CyberContainer>
            </CyberContainer>
        </motion.div>
    );
} 