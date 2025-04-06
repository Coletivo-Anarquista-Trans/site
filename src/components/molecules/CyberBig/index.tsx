import CyberContainer from "@/components/atoms/CyberContainer";
import { motion } from "framer-motion";
import { useAudio } from "@/context/AudioContext";

interface CyberBigProps {
  text: string;
  className?: string;
  children?: React.ReactNode;
}

export default function CyberBig({ text, className }: CyberBigProps) {
  const { playButtonSelect } = useAudio();

  return (
    <motion.div
      className={className}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      onHoverStart={playButtonSelect}
    >
      <CyberContainer
        className="
        border border-accent1 
        p-1 
        min-w-[18rem]      // Default for mobile (<768px)
        md:min-w-[20rem]   // Tablet (768px-1023px)
        lg:min-w-[18rem]   // Laptop (1024px-1279px) - NEW intermediate size
        
        2xl:min-w-[24rem]  // Large desktop (1536px+) - Keep same as xl
        crt-screen 
        crt-curvature 
        crt-reflection 
        granular-effect 
        justify-center 
        items-center
      "
      >
        <CyberContainer
          className="
          border border-accent1 
          px-4       // Mobile
          md:px-4    // Tablet
          lg:px-4    // Laptop - Slightly less than original
          2xl:px-8    // Desktop - Original padding
          py-2 
          flex 
          justify-center 
          items-center
        "
        >
          <span
            className="
            text-accent1 
            text-4xl        // Mobile
            md:text-[2.75rem]  // Tablet
            lg:text-[2.5rem]     // Laptop - Intermediate size (between md and xl)
            2xl:text-5xl      // Desktop - Original size (48px)
            text-center 
            self-center 
            items-center 
            justify-center
          "
          >
            {text}
          </span>
        </CyberContainer>
      </CyberContainer>
    </motion.div>
  );
}
