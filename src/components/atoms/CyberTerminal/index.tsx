import { useState, useRef, useEffect } from "react";
import { kaomojis } from "@/utils/kaomojis";

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
      // Generate a random number of kaomojis (1 to 4)
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

  return (
    <div
      className={`p-4 rounded-lg w-full max-w-2xl mx-auto h-96 overflow-y-auto font-mono border bg-background text-foreground border-accent3`}
    >
      {history.map((line, index) => (
        <div
          key={index}
          className="mb-1"
          dangerouslySetInnerHTML={{ __html: line }}
        />
      ))}
      <div ref={terminalRef} />
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
