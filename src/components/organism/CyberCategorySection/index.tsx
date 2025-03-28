import { Resource } from '@/types/resources';
import CyberResourceCard from '@/components/molecules/CyberResourceCard';

interface CyberCategorySectionProps {
    title: string;
    resources: Resource[];
}

export default function CyberCategorySection({ title, resources }: CyberCategorySectionProps) {
    if (resources.length === 0) {
        return null;
    }

    return (
        <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                {title}
            </h2>

            <div className="space-y-4">
                {resources.map(resource => (
                    <CyberResourceCard key={resource.id} resource={resource} />
                ))}
            </div>
        </div>
    );
}
