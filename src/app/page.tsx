"use client";

import { useTheme } from "@/context/ThemeContext";
import CyberButton from "@/components/atoms/CyberButton";
import CyberContainer from "@/components/atoms/CyberContainer";
import CyberTerminal from "@/components/atoms/CyberTerminal";
import CyberDrone from "@/components/molecules/CyberDrone";

export default function Home() {
  const { theme } = useTheme();

  return (
    <CyberContainer className="bg-background min-h-screen text-foreground flex flex-col items-center justify-items-center">
      <div className="granular-effect mt-8 w-1/2">
        <CyberTerminal theme={theme} />
      </div>
      <div className="flex flex-col gap-2 mt-8n">
        <div className="flex items-center flex-row gap-2">
          <div className="w-4 h-4 bg-[var(--background)]" />
          <span className="text-background">backbround do tema {theme}</span>
        </div>
        <div className="flex items-center flex-row gap-2">
          <div className="w-4 h-4 bg-[var(--foreground)]" />
          <span className="text-foreground">foreground do tema {theme}</span>
        </div>
        <div className="flex items-center flex-row gap-2">
          <div className="w-4 h-4 bg-[var(--accent-1)]" />
          <span className="text-accent1">accent-1 do tema {theme}</span>
        </div>{" "}
        <div className="flex items-center flex-row gap-2">
          <div className="w-4 h-4 bg-[var(--accent-2)]" />
          <span className="text-accent2">accent-2 do tema {theme}</span>
        </div>{" "}
        <div className="flex items-center flex-row gap-2">
          <div className="w-4 h-4 bg-[var(--accent-3)]" />
          <span className="text-accent3">accent-3 do tema {theme}</span>
        </div>{" "}
        <div className="flex items-center flex-row gap-2">
          <div className="w-4 h-4 bg-[var(--accent-4)]" />
          <span className="text-accent4">accent-4 do tema {theme}</span>
        </div>{" "}
        <div className="flex items-center flex-row gap-2">
          <div className="w-4 h-4 bg-[var(--accent-5)]" />
          <span className="text-accent5">accent-5 do tema {theme}</span>
        </div>{" "}
        <div className="flex items-center flex-row gap-2">
          <div className="w-4 h-4 bg-[var(--accent-6)]" />
          <span className="text-accent6">accent-6 do tema {theme}</span>
        </div>{" "}
      </div>
      <CyberContainer className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></CyberContainer>
      <CyberDrone />
    </CyberContainer>
  );
}
