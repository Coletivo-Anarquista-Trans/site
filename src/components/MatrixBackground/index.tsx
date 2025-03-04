"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+";
const columns = 40; // Number of columns in the matrix
const speed = 50; // Speed of the animation (lower is faster)

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Calculate column width
    const fontSize = 14;
    const columnWidth = canvas.width / columns;

    // Array to track the position of each column
    const drops: number[] = Array(columns).fill(0);

    // Function to draw the matrix effect
    const draw = () => {
      // Use a semi-transparent overlay to create the trailing effect
      ctx.fillStyle = `rgba(0, 0, 0, 0.05)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Get theme-specific accent colors
      const accentColors = getThemeAccentColors();

      // Draw characters for each column
      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * columnWidth;
        const y = drops[i] * fontSize;

        // Cycle through accent colors
        ctx.fillStyle = accentColors[i % accentColors.length];
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(text, x, y);

        // Reset drop if it reaches the bottom
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
      }
    };

    // Get theme-specific accent colors
    const getThemeAccentColors = () => {
      switch (theme) {
        case "default-theme":
          return ["#a064ee", "#7c4dff", "#6a1b9a", "#4a148c"];
        case "new-theme":
          return [
            "#292a50",
            "#285b77",
            "#0b959f",
            "#06cfce",
            "#d3167c",
            "#8d155e",
          ];
        case "cyberpunk-purple-theme":
          return ["#6a1b9a", "#9c27b0", "#ce93d8", "#ffffff"];
        case "cyberpunk-red-theme":
          return ["#d32f2f", "#b71c1c", "#ff5252", "#ffffff"];
        default:
          return ["#00ff00"]; // Fallback color
      }
    };

    // Start animation
    const interval = setInterval(draw, speed);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
