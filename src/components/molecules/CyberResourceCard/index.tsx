'use client';

import CyberResourceIcon from '@/components/atoms/CyberResourceIcon';
import CyberContainer from "@/components/atoms/CyberContainer";
import Link from "next/link";
import CyberButton from "@/components/atoms/CyberButton";
import {useCyberSection} from "@/context/CyberSectionsContext/CyberSections";
import {useEffect} from "react";

export interface CyberResource {
    id: string;
    title: string;
    type: 'file' | 'link';
    url: string;
    description: string;
    category?: string;
    fileSize?: string;
    dateAdded: string;
}

interface CyberResourceCardProps {
    resource: CyberResource;
}

export default function CyberResourceCard({resource}: CyberResourceCardProps) {

    const {registerCyberSection} = useCyberSection();

    const sectionId = `recursos-${resource.id}`;

    useEffect(() => {
        registerCyberSection("recursos", sectionId, resource.title);
    }, [registerCyberSection, resource.title, sectionId]);

    return (
        <CyberContainer
            glowingBorders
            id={sectionId}
            className="border border-accent1 p-1 min-w-[24rem] crt-screen crt-curvature crt-scanlines crt-reflection granular-effect"
        >
            <CyberContainer
                glowingBorders
                id={sectionId}
                className="shadow-sm hover:shadow-md transition-shadow text-accent1 p-4 border-accent1"
            >
                <CyberContainer unevenBorders className="flex items-start gap-3">
                    <CyberResourceIcon
                        type={resource.type}
                        className={resource.type === 'file' ? 'text-accent5' : 'text-accent-3'}
                    />

                    <CyberContainer className="flex-1">
                        <h3 className="text-lg font-medium text-accent1">{resource.title}</h3>
                        {resource.description && (
                            <p className="mt-1 text-accent-2 text-sm">{resource.description}</p>
                        )}

                        <CyberContainer className="mt-3">
                            {/* Outer CRT visual layer */}
                            <CyberContainer
                                className="inline-block border border-accent1 crt-screen crt-curvature crt-reflection granular-effect p-1"
                            >
                                {/* Inner CRT layer for double-border effect */}
                                <CyberContainer
                                    className="inline-block align-top border border-accent1 crt-screen crt-curvature crt-reflection granular-effect"
                                >
                                    <Link href={resource.url}>
                                        <CyberButton
                                            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-accent-1 transition-colors"
                                        >
                                            {resource.type === 'file' ? "Download" : "Clique aqui!"}
                                            {resource.fileSize && resource.type === 'file' && (
                                                <span className="ml-1 text-accent3">({resource.fileSize})</span>
                                            )}
                                        </CyberButton>
                                    </Link>
                                </CyberContainer>
                            </CyberContainer>
                        </CyberContainer>
                    </CyberContainer>
                </CyberContainer>
            </CyberContainer>
        </CyberContainer>
    );
}
