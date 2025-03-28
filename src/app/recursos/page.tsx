import { resourcesByCategory } from '@/data/resources';
import CyberCategorySection from '@/components/organism/CyberCategorySection';

export default function Resources() {
    const sortedCategories = Object.keys(resourcesByCategory).sort();

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl textaccent1">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Transgenerificação</h1>
                <p className="text-gray-600">
                    Recursos para tornar e manutenir um corpo ciborgue.
                </p>
            </div>

            {sortedCategories.map(category => (
                <CyberCategorySection
                    key={category}
                    title={category}
                    resources={resourcesByCategory[category]}
                />
            ))}
        </div>
    );
}
