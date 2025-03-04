"use client";

import { useTheme } from "@/context/ThemeContext";
import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import OctagonBox from "@/components/OctagonBox";
import MatrixBackground from "@/components/MatrixBackground";
import Button from "@/components/Button"

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <MatrixBackground />
      <div
        className={`${theme} flex flex-col items-center justify-items-center bg-background min-h-screen font-[family-name:var(--font-geist-sans)] text-foreground`}
      >
        <Header />

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Button
            onClick={toggleTheme}
            unevenBorders
          >
            Toggle Theme
          </Button>
          <Button
            onClick={toggleTheme}
            normalBorders
            textGlow
          >
            Toggle Theme
          </Button>
          <Button
            onClick={toggleTheme}
            unevenBorders
            glowingBorders
          >
            Toggle Theme
          </Button>
          <Button
            onClick={toggleTheme}
            normalBorders
            glowingBorders
          >
            Toggle Theme
          </Button>
          <Button
            onClick={toggleTheme}
            unevenBorders
            clearBorders
          >
            Toggle Theme
          </Button>
          <Button
            onClick={toggleTheme}
            normalBorders
            clearBorders
          >
            Toggle Theme
          </Button>
          <Button
            onClick={toggleTheme}
            unevenBorders
            clearBorders
            secondaryTextGlow
          >
            Toggle Theme
          </Button>
          <Button
            onClick={toggleTheme}
            normalBorders
            clearBorders
            secondaryTextGlow
          >
            Toggle Theme
          </Button>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-sm border bg-background"></div>
              <div className="w-4 h-4 rounded-sm bg-foreground"></div>
              <div className="w-4 h-4 rounded-sm bg-accent1"></div>
              <div className="w-4 h-4 rounded-sm bg-accent2"></div>
              <div className="w-4 h-4 rounded-sm bg-accent3"></div>
              <div className="w-4 h-4 rounded-sm bg-accent4"></div>
              <div className="w-4 h-4 rounded-sm bg-accent5"></div>
              <div className="w-4 h-4 rounded-sm bg-accent6"></div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
