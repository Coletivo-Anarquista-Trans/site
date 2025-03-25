import {useEffect, useRef, useState} from "react";
import {kaomojis} from "@/utils/kaomojis";
import dynamic from "next/dynamic"; // Import dynamic from Next.js
import {useTheme} from "@/context/ThemeContext";
import {useFont} from "@/context/FontContext"; // Import the useFont hook

// Dynamically import IconTint with SSR disabled
const IconTint = dynamic(() => import("react-icon-tint"), {ssr: false});

interface CyberTerminalProps {
}

export default function CyberTerminal({}: CyberTerminalProps) {
    const [history, setHistory] = useState<string[]>(["Miauzers!", ""]);
    const [input, setInput] = useState("");
    const terminalRef = useRef<HTMLDivElement>(null);
    const {theme} = useTheme();
    const {fontClass, fontSize} = useFont(); // Use the useFont hook

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
            response = Array.from({length: numKaomojis}, () =>
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
        terminalRef.current?.scrollIntoView({behavior: "smooth"});
    }, [history]);

    // Define color mappings for each theme
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
            className={`
                w-full max-w-none mx-auto
                h-[50vh] sm:h-[70vh] max-h-[600px]
                overflow-y-auto font-mono border-4
                bg-background text-accent-5 border-accent1
                granular-effect rounded-tl-[20px] rounded-br-[20px] 
                rounded-bl-[0px] rounded-tr-[0px]
                px-2 sm:px-6 py-2 sm:py-4
            `}
            style={{fontFamily: fontClass, fontSize: `${fontSize}px`}}>
            <IconTint
                maxHeight={150}
                maxWidth={150}
                color={themeColors[theme] || "#ffffff"}
                src="cats.png"
            />
            {history.map((line, index) => (
                <div
                    key={index}
                    // Apply text-accent5 for commands (lines starting with "$") and text-accent1 for responses
                    className={`mb-1 ${
                        line.startsWith("$") ? "text-accent5" : "text-accent1"
                    }`}
                    dangerouslySetInnerHTML={{__html: line}}
                />
            ))}
            <div ref={terminalRef}/>

            <form onSubmit={handleSubmit} className="flex items-center flex-wrap gap-2 mt-2">
                <span className="text-accent5">$</span>
                <input
                    type="text"
                    className="bg-transparent border-none outline-none ml-2 w-full text-accent5 text-sm sm:text-base min-w-0"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    autoFocus
                />
            </form>
        </div>
    );
}
