"use client";

import { resourcesByCategory } from '@/data/resources';
import CyberCategorySection from '@/components/organism/CyberCategorySection';
import CyberContainer from "@/components/atoms/CyberContainer";


export default function Resources() {
    const sortedCategories = Object.keys(resourcesByCategory).sort();

    return (
        <CyberContainer className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 py-8">
            <CyberContainer className="w-full max-w-4xl">
                <CyberContainer className="text-2xl sm:text-3xl font-bold text-accent1 mb-6 text-center">
                    Transgenerificação
                </CyberContainer>

                {sortedCategories.map(category => (
                    <CyberCategorySection
                        key={category}
                        id={`item-${category}`}
                        title={category}
                        resources={resourcesByCategory[category]}
                    />
                ))}
            </CyberContainer>
        </CyberContainer>

    );
}
