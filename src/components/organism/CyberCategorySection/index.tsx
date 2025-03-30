import CyberResourceCard, {CyberResource} from '@/components/molecules/CyberResourceCard';
import CyberContainer from "@/components/atoms/CyberContainer";

interface CyberCategorySectionProps {
    title: string;
    id: string;
    resources: CyberResource[];
}

export default function CyberCategorySection({ title, id, resources}: CyberCategorySectionProps) {
    if (resources.length === 0) {
        return null;
    }

    return (
        <CyberContainer className="w-full flex justify-center">
            <CyberContainer
                id={id}
                className="p-4 sm:p-8 break-words w-full max-w-4xl"
            >
                <h2 className="text-lg sm:text-xl font-semibold text-accent1 mb-4 pb-2 border-b border-accent1">
                    {title}
                </h2>

                <div className="space-y-4">
                    {resources.map(resource => (
                        <CyberResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>
            </CyberContainer>
        </CyberContainer>
    );
}
