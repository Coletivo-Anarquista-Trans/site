import CyberContainer from "@/components/atoms/CyberContainer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAudio } from "@/context/AudioContext";

interface CyberBigProps {
  text: string;
}

export default function CyberBig({ text }: CyberBigProps) {
  const { playButtonSelect } = useAudio();

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      onHoverStart={playButtonSelect} // Add this line
    >
      <CyberContainer className="border border-accent1 p-1 min-w-[24rem] crt-screen crt-curvature crt-reflection granular-effect justify-center items-center">
        <CyberContainer className="border border-accent1 px-8 py-2 flex justify-center items-center">
          <span className="text-accent1 text-5xl text-center self-center items-center justify-center">
            {text}
          </span>
        </CyberContainer>
      </CyberContainer>
    </motion.div>
  );
}
