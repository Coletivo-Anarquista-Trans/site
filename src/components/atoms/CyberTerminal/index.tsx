import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { kaomojis } from "@/utils/kaomojis";
import dynamic from "next/dynamic";
import { useTheme } from "@/context/ThemeContext";
import { useFont } from "@/context/FontContext";


const IconTint = dynamic(() => import("react-icon-tint"), { ssr: false });

interface CyberTerminalProps {}

export default function CyberTerminal({}: CyberTerminalProps) {
  const router = useRouter();
  const INITIAL_MESSAGES = [
    "Olá, pessoa usuária. Essa é a barricada dos corpos dissidentes, aqui projetamos o futuro em que seu corpo-virtual é livre para transitar e transicionar sem ser conduzido por uma timeline.",
    "Transicione pelo nosso site, explorando um ciberespaço alternativo.",
    "Desenvolva conosco essa nova proposta de internet livre e descentralizada.",
    "Seja hacker, retome as tecnologias roubadas de nós, não deixe-os ter nossos amores e corpos.",
  ];

  // State management
  const [history, setHistory] = useState<string[]>([]);
  const [displayTexts, setDisplayTexts] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [displayMode, setDisplayMode] = useState<"message" | "command">(
    "message"
  );
  const [currentIntroIndex, setCurrentIntroIndex] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Refs for animation control
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const { theme } = useTheme();
  const { font, fontSize } = useFont();

  // Initialize audio context
  useEffect(() => {
    audioContextRef.current = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    return () => {
      audioContextRef.current?.close();
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, []);

  // gerador de cyber-som
  // gerador de cyber-som
  const playTypingSound = () => {
    if (!audioContextRef.current) return;

    const oscillator = audioContextRef.current.createOscillator();
    const gain = audioContextRef.current.createGain();

    oscillator.type = "square";
    oscillator.frequency.value = 1200 + Math.random() * 600;

    // Start with gain at 0
    gain.gain.setValueAtTime(0, audioContextRef.current.currentTime);
    // Quickly ramp up to 0.1
    gain.gain.linearRampToValueAtTime(
      0.05,
      audioContextRef.current.currentTime + 0.01
    );
    // Then exponential ramp down
    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      audioContextRef.current.currentTime + 0.03
    );

    oscillator.connect(gain);
    gain.connect(audioContextRef.current.destination);

    oscillator.start();
    oscillator.stop(audioContextRef.current.currentTime + 0.03);
  };

  // Generate enter (beep)
  const playEnterSound = () => {
    if (!audioContextRef.current) return;

    const oscillator = audioContextRef.current.createOscillator();
    const gain = audioContextRef.current.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = 800;

    // Start with gain at 0
    gain.gain.setValueAtTime(0, audioContextRef.current.currentTime);
    // Quickly ramp up to 0.2
    gain.gain.linearRampToValueAtTime(
      0.2,
      audioContextRef.current.currentTime + 0.01
    );
    // Then exponential ramp down
    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      audioContextRef.current.currentTime + 0.1
    );

    oscillator.connect(gain);
    gain.connect(audioContextRef.current.destination);

    oscillator.start();
    oscillator.stop(audioContextRef.current.currentTime + 0.1);
  };

  // skippar mensagem
  const completeCurrentMessage = () => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }

    if (history.length > 0) {
      const currentMessage = history[history.length - 1];
      const newDisplayTexts = [...displayTexts];
      newDisplayTexts[history.length - 1] = currentMessage;
      setDisplayTexts(newDisplayTexts);
      setTypingComplete(true);
    }
  };

  // Animaçãozinha
  useEffect(() => {
    if (history.length === 0) return;

    setTypingComplete(false);
    let currentIndex = 0;
    const currentMessage = history[history.length - 1];
    const newDisplayTexts = [...displayTexts];
    newDisplayTexts[history.length - 1] = "";

    typingIntervalRef.current = setInterval(() => {
      if (currentIndex < currentMessage.length) {
        if (currentIndex % 2 === 0) playTypingSound();

        newDisplayTexts[history.length - 1] = currentMessage.substring(
          0,
          currentIndex + 1
        );
        setDisplayTexts([...newDisplayTexts]);
        currentIndex++;
      } else {
        completeCurrentMessage();
      }
    }, 20);

    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, [history]);

  const getRandomKaomoji = () => {
    const randomIndex = Math.floor(Math.random() * kaomojis.length);
    return kaomojis[randomIndex];
  };

  const advanceMessage = () => {
    if (!typingComplete) return;

    playEnterSound();

    if (currentIntroIndex < INITIAL_MESSAGES.length) {
      setHistory((prev) => [...prev, INITIAL_MESSAGES[currentIntroIndex]]);
      setCurrentIntroIndex((prev) => prev + 1);
      setTypingComplete(false);
    } else {
      setDisplayMode("command");
    }
  };

  useEffect(() => {
    if (displayMode === "message" && history.length === 0) {
      setHistory([INITIAL_MESSAGES[0]]);
      setCurrentIntroIndex(1);
    }
  }, [displayMode]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        displayMode === "message" &&
        typingComplete &&
        (e.key === " " || e.key === "Enter")
      ) {
        e.preventDefault();
        advanceMessage();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [displayMode, typingComplete]);

  const handleCommand = (command: string) => {
    let response: string;
    if (command === "help") {
      response = "Available commands: help, about, contact, manifesto";
    } else if (command === "about") {
      response =
        "This is a fake terminal built with React, Next.js, and Tailwind!";
    } else if (command === "contact") {
      response = "Email: example@example.com";
    } else if (command === "manifesto") {
      router.push("/manifesto");
      return;
    } else {
      const numKaomojis = Math.floor(Math.random() * 4) + 1;
      response = Array.from({ length: numKaomojis }, () =>
        getRandomKaomoji()
      ).join(" ");
    }

    setHistory((prev) => [...prev, `$ ${command}`, response]);
    setDisplayTexts((prev) => [...prev, "", ""]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      playEnterSound();
      handleCommand(input.trim());
      setInput("");
    }
  };

  const handleTerminalClick = () => {
    setIsClicking(true);
    setTimeout(() => setIsClicking(false), 200);

    if (displayMode === "message") {
      if (!typingComplete) {
        completeCurrentMessage();
      } else {
        advanceMessage();
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, displayTexts]);

  const themeColors: Record<string, string> = {
    "dark-violet": "#301055FF",
    "neon-aqua": "#00ffff",
    "cyberpunk-violet": "#a020f0",
    "cyberpunk-crimson": "#dc143c",
    "paleta-um": "#d92acd",
    "paleta-dois": "#fe3e8b",
    "paleta-tres": "#d6e122",
  };

  return (
    <div
      className="granular-effect w-full max-w-2xl p-8 rounded-tl-[20px] rounded-br-[20px] 
        rounded-bl-[0px] rounded-tr-[0px] mt-8"
    >
      <div
        className="crt-screen crt-curvature crt-scanlines crt-reflection relative rounded-tl-[20px] rounded-br-[20px] 
        rounded-bl-[0px] rounded-tr-[0px]"
      >
        <div
          className={` granular-effect
        w-full max-w-none mx-auto
        h-[50vh] sm:h-[70vh] max-h-[400px]
        overflow-y-auto font-mono border-4
        bg-background text-accent-5 border-accent1 rounded-tl-[20px] rounded-br-[20px] 
        rounded-bl-[0px] rounded-tr-[0px]
        px-2 sm:px-6 py-2 sm:py-4
        ${displayMode === "message" ? "cursor-pointer" : ""}
        ${isClicking ? "brightness-110" : ""}
      `}
          style={{ fontFamily: font, fontSize: `${fontSize}px` }}
          onClick={handleTerminalClick}
          onTouchStart={handleTerminalClick}
        >
          <IconTint
            maxHeight={150}
            maxWidth={150}
            color={themeColors[theme] || "#ffffff"}
            src="cats.png"
          />

          {history.map((line, index) => (
            <div
              key={index}
              className={`mb-1 ${
                line.startsWith("$") ? "text-accent5" : "text-accent1"
              }`}
            >
              {displayTexts[index] || ""}
              {!typingComplete && index === history.length - 1 && (
                <span className="ml-1 animate-blink">|</span>
              )}
            </div>
          ))}
          <div ref={terminalRef} />

          {displayMode === "message" && typingComplete && (
            <div className="flex items-center justify-center gap-2 mt-2 text-accent5 animate-pulse">
              <span className="animate-bounce">▼</span>
              <span className="text-sm">
                Press space/enter or click to continue
              </span>
              <span className="animate-bounce">▼</span>
            </div>
          )}

          {displayMode === "command" && (
            <form
              onSubmit={handleSubmit}
              className="flex items-baseline gap-2 mt-2"
            >
              <span className="text-accent5">$</span>
              <input
                type="text"
                className="bg-transparent border-none outline-none text-accent5 flex-1 text-sm sm:text-base"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
                disabled={displayMode !== "command"}
              />
              <span className="animate-blink">|</span>
            </form>
          )}

          <div className="flex gap-1 justify-center mt-2">
            {INITIAL_MESSAGES.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i < currentIntroIndex ? "bg-accent5" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
