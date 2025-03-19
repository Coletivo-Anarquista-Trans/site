"use client";

import { useTheme } from "@/context/ThemeContext";
import CyberButton from "@/components/atoms/CyberButton";
import CyberContainer from "@/components/atoms/CyberContainer";
import CyberTerminal from "@/components/atoms/CyberTerminal";
import CyberDrone from "@/components/molecules/CyberDrone";

export default function Home() {
  const { theme } = useTheme(); 

  return (
    <CyberContainer
      className="bg-background min-h-screen text-foreground flex flex-col items-center justify-items-center"
    >
      <div className="granular-effect mt-8 w-1/2">
        <CyberTerminal theme={theme}  />
      </div>
      <CyberContainer
        className="flex flex-col gap-8 row-start-2 items-center sm:items-start"
      >
      </CyberContainer>
      <CyberDrone />
    </CyberContainer>
  );
}
