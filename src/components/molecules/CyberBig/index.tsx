import CyberContainer from "@/components/atoms/CyberContainer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAudio } from "@/context/AudioContext";

interface CyberBigProps {
  text: string;
  className?: string;
}

export default function CyberBig({ text, className }: CyberBigProps) {
  const { playButtonSelect } = useAudio();

  return (
    <motion.div
      className={className} // Preserve passed className
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
        min-w-[18rem]  // Smaller on mobile
        sm:min-w-[24rem] // Original size on computers (640px+)
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
          px-4 sm:px-8  // Slightly less padding on mobile
          py-2 
          flex 
          justify-center 
          items-center
        "
        >
          <span
            className="
            text-accent1 
            text-4xl sm:text-5xl  // Slightly smaller text on mobile
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
