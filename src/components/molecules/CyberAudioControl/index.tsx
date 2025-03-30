"use client";

import React from "react";
import { useAudio } from "@/context/AudioContext";

export default function CyberAudioControl({
  className,
}: {
  className?: string;
}) {
  const { isAudioEnabled, showAudioModal } = useAudio();

  return (
    <div className={`fixed bottom-5 right-20 ${className || ""}`}>
      {" "}
      {/* Positioned to the left of CyberDrone */}
      {/* Hexagonal Border */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M50 2.5 L95 25 L95 75 L50 97.5 L5 75 L5 25 Z"
          fill="none"
          stroke="var(--accent-1)"
          strokeWidth="5"
        />
      </svg>
      {/* Button with Music Icon */}
      <button
        onClick={showAudioModal}
        className={`relative w-12 h-12 flex items-center justify-center rounded-full ${
          isAudioEnabled ? "bg-accent-1" : "bg-accent-3"
        } text-foreground hover:bg-accent-3 focus:outline-none focus:ring-2 focus:ring-accent-4 focus:ring-opacity-50 transition-all duration-300 ease-in-out`}
        aria-label="Audio controls"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      </button>
    </div>
  );
}
