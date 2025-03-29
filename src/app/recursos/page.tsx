import { resourcesByCategory } from '@/data/resources';
import CyberCategorySection from '@/components/organism/CyberCategorySection';
import CyberContainer from "@/components/atoms/CyberContainer";

export default function Resources() {
    const sortedCategories = Object.keys(resourcesByCategory).sort();

    return (
        <CyberContainer className="container mx-auto px-4 py-8 max-w-4xl textaccent1">
            <CyberContainer className="mb-8">
                <h1 className="text-3xl font-bold text-accent1 mb-2">Transgenerificação</h1>
                <p className="text-accent1">
                    Recursos para tornar e manutenir um corpo ciborgue.
                </p>
            </CyberContainer>

            {sortedCategories.map(category => (
                <CyberCategorySection
                    key={category}
                    title={category}
                    resources={resourcesByCategory[category]}
                />
            ))}
        </CyberContainer>
    );
}
