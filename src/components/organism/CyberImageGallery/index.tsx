import CyberImageCard from "@/components/molecules/CyberImageCard";
import { imageTopics } from "@/data/images";

export default function CyberImageGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
      {imageTopics.map((topic) => (
        <CyberImageCard key={topic.id} topic={topic} />
      ))}
    </div>
  );
}