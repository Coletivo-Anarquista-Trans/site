import CyberResourceCard, {CyberResource} from '@/components/molecules/CyberResourceCard';
import CyberContainer from "@/components/atoms/CyberContainer";

interface CyberCategorySectionProps {
    title: string;
    resources: CyberResource[];
}

export default function CyberCategorySection({ title, resources }: CyberCategorySectionProps) {
    if (resources.length === 0) {
        return null;
    }

    return (
        <CyberContainer className="mb-10">
            <h2 className="text-xl font-semibold text-accent1 mb-4 pb-2 border-b border-accent1">
                {title}
            </h2>

            <div className="space-y-4">
                {resources.map(resource => (
                    <CyberResourceCard key={resource.id} resource={resource} />
                ))}
            </div>
        </CyberContainer>
    );
}
