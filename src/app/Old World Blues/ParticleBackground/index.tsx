"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useTheme } from "@/context/ThemeContext";
import { useCallback } from "react";
import type { Engine } from "@tsparticles/engine";

export default function ParticleBackground() {
  const { theme } = useTheme();

  // Initialize particles
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  // Get theme-specific particle colors
  const getParticleColors = () => {
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

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: getParticleColors(),
          },
          shape: {
            type: "char",
            options: {
              char: {
                value: [
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                  "G",
                  "H",
                  "I",
                  "J",
                  "K",
                  "L",
                  "M",
                  "N",
                  "O",
                  "P",
                  "Q",
                  "R",
                  "S",
                  "T",
                  "U",
                  "V",
                  "W",
                  "X",
                  "Y",
                  "Z",
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "@",
                  "#",
                  "$",
                  "%",
                  "^",
                  "&",
                  "*",
                  "(",
                  ")",
                  "_",
                  "+",
                ],
                font: "Chakra Petch",
                style: "",
                weight: "400",
              },
            },
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 16,
            random: true,
          },
          lineLinked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
            resize: true,
          },
        },
        retina_detect: true,
      }}
    />
  );
}
