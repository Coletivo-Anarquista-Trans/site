"use client";

import { useTheme } from "@/context/ThemeContext";
import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import OctagonBox from "@/components/OctagonBox";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div
        className={`${theme} flex flex-col items-center justify-items-center bg-background min-h-screen font-[family-name:var(--font-geist-sans)] text-foreground`}
      >
        <Header />

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 transition-colors  text-button-foreground border-2 border-accent2 !important rounded-tl-[10px] rounded-br-[10px] rounded-bl-[0px] rounded-tr-[0px] focus:focus-custom"
          >
            Toggle Theme
          </button>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 border-2  rounded-none border-accent2 glow focus:focus-custom"
          >
            Toggle Theme
          </button>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 transition-colors focus:focus-custom  text-button-foreground border-2 border-accent2 !important rounded-tl-[10px] rounded-br-[10px] rounded-bl-[0px] rounded-tr-[0px]"
          >
            <span className="text-glow-accent1">Toggle Theme</span>
          </button>
          <button
            onClick={toggleTheme}
            className="px-4 focus:focus-custom py-2 border-2  rounded-none border-accent2 glow"
          >
            <span className="text-glow-accent1">Toggle Theme</span>
          </button>
          {/* <div className="border border-accent1 min-w-32 min-h-32"></div> */}
          <button
            onClick={toggleTheme}
            className="px-4 py-2 transition-colors focus:focus-custom text-button-foreground border-2 border-accent2 rounded-tl-[10px] rounded-br-[10px] rounded-bl-[0px] rounded-tr-[0px] shadow-[0_0_10px_2px_var(--accent-1)]"
          >
            Toggle Theme
          </button>
          <button
            onClick={toggleTheme}
            className="px-4 focus:focus-custom py-2 border-2 rounded-none border-accent2 shadow-[0_0_10px_2px_var(--accent-1)]"
          >
            Toggle Theme
          </button>

          <button
            onClick={toggleTheme}
            className="px-4 py-2 focus:focus-custom transition-colors border-glow-accent2 text-button-foreground border border-accent2 !important rounded-tl-[10px] rounded-br-[10px] rounded-bl-[0px] rounded-tr-[0px]"
          >
            Toggle Theme
          </button>
          <button
            onClick={toggleTheme}
            className="border-glow-accent2 px-4 focus:focus-custom py-2 border  rounded-none border-accent2 glow"
          >
            Toggle Theme
          </button>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 transition-colors focus:focus-custom border-glow-accent2 text-button-foreground border border-accent2 !important rounded-tl-[10px] rounded-br-[10px] rounded-bl-[0px] rounded-tr-[0px]"
          >
            <span className="text-glow-accent1">Toggle Theme</span>
          </button>
          <button
            onClick={toggleTheme}
            className="border-glow-accent1 focus:focus-custom px-4 py-2 border  rounded-none border-accent2 glow"
          >
            <span className="text-glow-accent1">Toggle Theme</span>
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
