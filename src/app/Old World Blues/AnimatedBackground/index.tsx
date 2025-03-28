import React, { useEffect, useState } from "react";
import { Animator, Dots } from "@arwes/react";
import { useTheme } from "../../../context/ThemeContext"; // Adjust this import path

interface AnimatedBackgroundProps {
  // Add any props you need here
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = () => {
  const [active, setActive] = useState(true);
  const { theme } = useTheme(); // Access the current theme from context

  const themeColors = {
    "default-theme": {
      accent4: "hsla(180, 100%, 75%, 0.4)", // You can change this to any color
    },
    "new-theme": {
      accent4: "hsla(220, 100%, 60%, 0.6)",
    },
    "cyberpunk-purple-theme": {
      accent4: "hsla(270, 100%, 60%, 0.8)",
    },
    "cyberpunk-red-theme": {
      accent4: "hsla(0, 100%, 60%, 0.8)",
    },
  };

  const [dotColor, setDotColor] = useState<string>("");

  useEffect(() => {
    // Set the dot color based on the current theme
    const currentThemeColors = themeColors[theme];
    setDotColor(
      currentThemeColors
        ? currentThemeColors.accent4
        : "hsla(180, 100%, 75%, 0.4)"
    ); // Fallback color
  }, [theme]); // Update dot color when theme changes

  useEffect(() => {
    const iid = setInterval(() => setActive((active) => !active), 4000); // Keep dots active for longer
    return () => clearInterval(iid);
  }, []);

  return (
    <Animator
      active={active}
      duration={{ enter: 2, exit: 4 }} // Adjust the exit duration to make it last longer
      style={{ opacity: active ? 1 : 0.5 }} // Set minimum opacity during fade
    >
      <div
        style={{
          position: "fixed", // Cover the entire screen
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "var(--background)",
          overflow: "hidden",
          zIndex: -1, // Ensure it stays in the background
        }}
      >
        {/* Apply dynamic color from the theme */}
        <Dots color={dotColor} />
      </div>
    </Animator>
  );
};

export default AnimatedBackground;
