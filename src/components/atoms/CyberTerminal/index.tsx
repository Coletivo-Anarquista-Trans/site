// components/CyberTerminal.tsx
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { kaomojis } from "@/utils/kaomojis";
import dynamic from "next/dynamic";
import { useTheme } from "@/context/ThemeContext";
import { useFont } from "@/context/FontContext";
import { motion } from "framer-motion";
import { useAudio } from "@/context/AudioContext";

const IconTint = dynamic(() => import("react-icon-tint"), { ssr: false });

interface CyberTerminalProps {}

export default function CyberTerminal({}: CyberTerminalProps) {
  const router = useRouter();
  const INITIAL_MESSAGES = [
    "Olá, {visitante}. Essa é a barricada dos corpos dissidentes, aqui projetamos o futuro em que seu corpo-virtual é livre para transitar e transicionar sem ser conduzido por uma timeline.",
    "Transicione pelo nosso site, explorando um ciberespaço alternativo.",
    "Desenvolva conosco essa nova proposta de internet livre e descentralizada.",
    "Seja hacker, retome as tecnologias roubadas de nós, não deixe-os ter nossos amores e corpos. Digite ajuda para saber mais.",
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
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [isSelectingText, setIsSelectingText] = useState(false);
  const [username, setUsername] = useState<string>("user"); // Default username set to "user"
  const termInput = `[${username}@cats] - [$] <>`;

  // Refs for animation control
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { theme } = useTheme();
  const { font, fontSize } = useFont();
  const { playTypingSound, playEnterSound } = useAudio();

  // Replace {user} placeholder with actual username
  const formatMessage = (message: string) => {
    return message.replace(/{user}/g, username);
  };

  // Handle scroll events
  useEffect(() => {
    const container = terminalRef.current;
    if (!container) return;

    const handleScroll = () => {
      const isUserAtBottom =
        container.scrollHeight - container.scrollTop <=
        container.clientHeight + 10;
      setIsAtBottom(isUserAtBottom);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll when new content is added and user is at bottom
  useEffect(() => {
    if (isAtBottom && terminalRef.current) {
      terminalRef.current.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history, displayTexts, isAtBottom]);

  // Focus input when in command mode
  useEffect(() => {
    if (displayMode === "command" && inputRef.current && !isSelectingText) {
      inputRef.current.focus();
    }
  }, [displayMode, isSelectingText]);

  // Handle keyboard input for the terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if user is selecting text
      const selection = window.getSelection();
      if (selection && selection.toString().length > 0) {
        setIsSelectingText(true);
        return;
      } else {
        setIsSelectingText(false);
      }

      // In message mode, handle space/enter for advancing messages
      if (displayMode === "message") {
        if (typingComplete && (e.key === " " || e.key === "Enter")) {
          e.preventDefault();
          advanceMessage();
        }
        return;
      }

      // In command mode, focus input and handle typing
      if (displayMode === "command") {
        // Ignore if a modifier key is pressed (like Ctrl, Alt, etc.)
        if (e.ctrlKey || e.altKey || e.metaKey) return;

        // Focus the input if it's not already focused
        if (document.activeElement !== inputRef.current && inputRef.current) {
          inputRef.current.focus();
          // If the key is a character, add it to the input
          if (e.key.length === 1 && !e.metaKey && !e.ctrlKey) {
            setInput((prev) => prev + e.key);
            e.preventDefault();
          }
        }
      }
    };

    const handleMouseUp = () => {
      // Check if user has selected text
      const selection = window.getSelection();
      if (selection && selection.toString().length > 0) {
        setIsSelectingText(true);
      } else {
        setIsSelectingText(false);
        if (displayMode === "command" && inputRef.current) {
          inputRef.current.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [displayMode, typingComplete]);

  // Skip message
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

  // Typing animation
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
      setHistory((prev) => [
        ...prev,
        formatMessage(INITIAL_MESSAGES[currentIntroIndex]),
      ]);
      setCurrentIntroIndex((prev) => prev + 1);
      setTypingComplete(false);
    } else {
      setDisplayMode("command");
    }
  };

  useEffect(() => {
    if (displayMode === "message" && history.length === 0) {
      setHistory([formatMessage(INITIAL_MESSAGES[0])]);
      setCurrentIntroIndex(1);
    }
  }, [displayMode]);

  const handleCommand = (command: string) => {
    let response: string;
    const parts = command.split(" ");
    // Convert command to lowercase for case-insensitive comparison
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(" ");

    switch (cmd) {
      case "ajuda":
        response =
          "Comandos disponíveis: ajuda, comandos, terminal, contato, cats, manifesto, arquivos, recursos, username [nome], mazrine, lynx, n3o, kia, v, iniari, yu, fefe, em-breve, forum";
        break;
      case "comandos":
        response =
          "Comandos disponíveis: ajuda, comandos, terminal, contato, cats, manifesto, arquivos, recursos, username [nome], mazrine, lynx, n3o, kia, v, iniari, yu, fefe, em-breve, forum";
        break;
      case "terminal":
        response =
          "Esse é um terminal de mentirinha que a mazrine fez pra ser engraçadinha hihi (•⩊•)";
        break;
      case "contato":
        response = "E-mail: cats-trans@riseup.net";
        break;
      case "forum":
        response =
          "Estamos desenvolvendo um forum para uso da comunidade trans. Aguardem notícias!";
        break;
      case "mazrine":
        response =
          "programadora, musicista e glitch artist nas horas vagas com estranha obsessão pela cor roxa e triângulos ( • ⩊ • )";
        break;
      case "em-breve":
        response =
          "temos várias funcionalidades e recursos por vir! Isso aqui é só o começo o(>ω<)o";
        break;
      case "lynx":
        response = "programadora, musicista e furry nas horas vagas. ฅ(^◕ᴥ◕^)ฅ";
        break;
      case "n3o":
        response =
          "programador e artista misterioso... que ama gatos e odeia letras maiúsculas ᓚᘏᗢ";
        break;
      case "iniari":
        response =
          "catgirl jack of all trades que consegue ser boa em tudo que faz ♡(>ᴗ•)<♡";
        break;
      case "v":
        response =
          "ping pong ping pong ping pong ping pong ping pong o( ❛ᴗ❛ )o";
        break;
      case "yu":
        response =
          "artista incrível, responsável por diversas produções no coletivo (๑>◡<๑)";
        break;
      case "kia":
        response =
          "memetic warfare intimacy coordinator. Kia faz de tudo e também é a melhor cozinheira de são paulo ppr";
        break;
      case "fefe":
        response = "artista obsecada pela cor rosa, cardgames e animes";
        break;

      case "cats":
        router.push("/sobre");
        return;
      case "arquivos":
        router.push("/arquivos");
        return;
      case "recursos":
        router.push("/recursos");
        return;
      case "manifesto":
        router.push("/manifesto");
        return;
      case "username":
        if (!args) {
          response = "coloque o seu nome após o comando";
        } else {
          setUsername(args);
          response = `Nome de usuário alterado para ${args}`;
        }
        break;
      default:
        const numKaomojis = Math.floor(Math.random() * 2) + 1;
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

  const handleTerminalClick = (e: React.MouseEvent) => {
    // Don't handle click if user is selecting text
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      setIsSelectingText(true);
      return;
    }

    handleInteraction();
  };

  const handleTerminalTouch = (e: React.TouchEvent) => {
    // Don't handle touch if user is selecting text
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      setIsSelectingText(true);
      return;
    }

    handleInteraction();
  };

  const handleInteraction = () => {
    setIsSelectingText(false);
    setIsClicking(true);
    setTimeout(() => setIsClicking(false), 200);

    if (displayMode === "message") {
      if (!typingComplete) {
        completeCurrentMessage();
      } else {
        advanceMessage();
      }
    } else if (displayMode === "command" && inputRef.current) {
      inputRef.current.focus();
    }
  };

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
    <div className="w-full">
      <div className="crt-screen crt-curvature crt-scanlines crt-reflection relative">
        <div
          ref={terminalRef}
          className={`granular-effect
            w-full max-w-none mx-auto
            h-[50vh] sm:h-[70vh] max-h-[400px]
            overflow-y-auto font-mono border
            bg-background text-accent-5 border-accent1
            px-2 sm:px-6 py-2 sm:py-4
            ${displayMode === "message" ? "cursor-pointer" : ""}
            ${isClicking ? "brightness-110" : ""}
            select-text
          `}
          style={{ fontFamily: font, fontSize: `${fontSize}px` }}
          onClick={handleTerminalClick}
          onTouchStart={handleTerminalTouch}
        >
          <div className="flex flex-col md:flex-row items-center md:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 0 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1, x: 100 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <IconTint
                maxHeight={125}
                maxWidth={125}
                color={themeColors[theme] || "#ffffff"}
                src="cats.png"
              />
            </motion.div>

            {/* System info panel - now will stack below on small screens */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 0 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1, x: 100 }}
              transition={{ duration: 0.5 }}
              className="text-accent5 mt-4 md:mt-0 md:ml-6 lg:ml-8 xl:ml-10"
            >
              <pre className="text-left" style={{ fontFamily: font }}>
                {`
    ╭───────────⏣────────────╮
    ⟁ -> site 1.1.0
    ⏣ -> transgenerificação 132%
    ⏣ -> non-binary.exe READY
    ⏣ -> fim do cistema IN-PROGRESS
    ╰───────────⏣────────────╯
  `}
              </pre>
            </motion.div>
          </div>

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

          {displayMode === "message" && typingComplete && (
            <div className="flex items-center justify-center gap-2 mt-2 text-accent5 animate-pulse">
              <span className="animate-bounce">▼</span>
              <span className="text-sm">
                Pressione enter/espaço ou clique para continuar
              </span>
              <span className="animate-bounce">▼</span>
            </div>
          )}

          {displayMode === "command" && (
            <form
              onSubmit={handleSubmit}
              className="flex items-baseline gap-2 mt-2"
            >
              <span className="text-accent5">{termInput}</span>
              <input
                ref={inputRef}
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
