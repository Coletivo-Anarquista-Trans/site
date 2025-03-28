import { resources } from '@/data/resources';
import CyberCategorySection from '@/components/organism/CyberCategorySection';

export default function Recursos() {
    const categories = resources.reduce((acc, resource) => {
        const category = resource.category || 'Outros';

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push(resource);
        return acc;
    }, {} as Record<string, typeof resources>);

    const sortedCategories = Object.keys(categories).sort();

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Trengenerificação</h1>
                <p className="text-gray-600">
                    Recursos para tornar e manutenir um corpo ciborgue.
                </p>
            </div>

            {sortedCategories.map(category => (
                <CyberCategorySection
                    key={category}
                    title={category}
                    resources={categories[category]}
                />
            ))}
        </div>
    );
}
