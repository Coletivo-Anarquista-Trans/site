import { useState, useRef, useEffect } from "react";
import { kaomojis } from "@/utils/kaomojis";
import dynamic from "next/dynamic"; // Import dynamic from Next.js

// Dynamically import IconTint with SSR disabled
const IconTint = dynamic(() => import("react-icon-tint"), { ssr: false });

interface CyberTerminalProps {
}

export default function CyberTerminal({}: CyberTerminalProps) {
  const [history, setHistory] = useState<string[]>([
    "Welcome to Fake Terminal!",
    "",
    "<pre> _._     _,-'\"\"`-._\n(,-.`._,'(       |\\`-/|\n    `-.-' \\ )-`( , o o)\n          `-    \\`_`\"'-</pre>",
  ]);
  const [input, setInput] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);

  const getRandomKaomoji = () => {
    const randomIndex = Math.floor(Math.random() * kaomojis.length);
    return kaomojis[randomIndex];
  };

  const handleCommand = (command: string) => {
    let response: string;
    if (command === "help") {
      response = "Available commands: help, about, contact";
    } else if (command === "about") {
      response =
        "This is a fake terminal built with React, Next.js, and Tailwind!";
    } else if (command === "contact") {
      response = "Email: example@example.com";
    } else {
      const numKaomojis = Math.floor(Math.random() * 4) + 1;
      response = Array.from({ length: numKaomojis }, () =>
        getRandomKaomoji()
      ).join(" ");
    }

    setHistory((prev) => [...prev, `$ ${command}`, response]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      handleCommand(input.trim());
      setInput("");
    }
  };

  useEffect(() => {
    terminalRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Define color mappings for each theme
  const themeColors: Record<string, string> = {
    "dark-violet": "#6a0dad",
    "neon-aqua": "#00ffff",
    "cyberpunk-violet": "#a020f0",
    "cyberpunk-crimson": "#dc143c",
  };

  return (
    <div
      className={`p-4 rounded-lg w-full max-w-2xl mx-auto h-96 overflow-y-auto font-mono border bg-background text-foreground border-accent3 granular-effect`}
    >
      {history.map((line, index) => (
        <div
          key={index}
          className="mb-1"
          dangerouslySetInnerHTML={{ __html: line }}
        />
      ))}
      <div ref={terminalRef} />

      {/* Render IconTint with dynamic color based on theme */}
      <IconTint
        maxHeight={150}
        maxWidth={150}
        color={themeColors[theme] || "#ffffff"}
        src="cats.png"
      />

      <form onSubmit={handleSubmit} className="flex">
        <span className="text-foreground">$</span>
        <input
          type="text"
          className="bg-transparent border-none outline-none ml-2 w-full text-foreground"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
}
