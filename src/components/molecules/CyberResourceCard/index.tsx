'use client';

import CyberResourceIcon from '@/components/atoms/CyberResourceIcon';
import CyberContainer from "@/components/atoms/CyberContainer";
import Link from "next/link";
import CyberButton from "@/components/atoms/CyberButton";

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
    return (
        <CyberContainer
            id={resource.title}
            glowingBorders
            unevenBorders
            className="shadow-sm hover:shadow-md transition-shadow text-accent1 p-4 border">
            <CyberContainer
                unevenBorders
                className="flex items-start gap-3">
                    <CyberResourceIcon
                        type={resource.type}
                        className={resource.type === 'file' ? 'text-accent5' : 'text-accent-3'}
                    />

                <CyberContainer className="flex-1">
                    <h3 className="text-lg font-medium text-accent1">{resource.title}</h3>
                    {resource.description && (
                        <p className="mt-1 text-accent-2 text-sm">{resource.description}</p>
                    )}

                    <CyberContainer
                        className="mt-3">
                        {resource.type === 'file' ? (
                            <CyberButton
                                glowingBorders
                                unevenBorders
                                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-accent3 transition-colors"
                            >
                                <Link href={resource.url}>
                                    Download
                                </Link>
                                {resource.fileSize && <span className="ml-1 text-accent3">({resource.fileSize})</span>}
                            </CyberButton>
                        ) : (
                            <CyberButton
                                glowingBorders
                                unevenBorders
                                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-accent-1 transition-colors"
                            >
                                <Link href={resource.url}>
                                    Clique aqui!
                                </Link>
                            </CyberButton>
                        )}
                    </CyberContainer>
                </CyberContainer>
            </CyberContainer>
        </CyberContainer>
    )

}
