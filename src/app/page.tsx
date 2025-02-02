"use client";

import { useTheme } from "@/context/ThemeContext";
import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div
        className={`${theme} grid grid-rows-[20px_1fr_20px] items-center justify-items-center bg-background min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-foreground`}
      >
        
        {/* Animated Background */}
        {/* <AnimatedBackground /> */}

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg transition-colors bg-button-background text-button-foreground"
          >
            Toggle Theme
          </button>

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
