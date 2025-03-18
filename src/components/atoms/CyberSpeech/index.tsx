import { useTheme } from "@/context/ThemeContext";
import {ReactNode, useRef} from "react";
import { AiFillSound } from "react-icons/ai";
import CyberButton from "@/components/atoms/CyberButton";


interface CyberSpeechProps {
    children: ReactNode,
}

export default function CyberSpeech({ children }: CyberSpeechProps) {
    const { theme } = useTheme();

    const textRef = useRef<HTMLDivElement>(null);

    const speak = () => {
        if (!("speechSynthesis" in window)) {
            console.error("Text-to-Speech not supported in this browser.");
            return;
        }

        const text = textRef.current?.innerText || "";
        if (!text) return;

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "pt-BR"; // Change language if needed
        utterance.rate = 1.0; // Adjust speed (1.0 = normal)
        utterance.pitch = 1.0; // Adjust pitch

        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="relative">
            {/* The text block */}
            <div ref={textRef} className={`p-4 rounded-lg ${theme}`}>
                {children}
            </div>

            {/* The speech button */}
            <CyberButton
                unevenBorders
                glowingBorders
                onClick={speak}
                className={`absolute right-2 p-2 hover:scale-110 transition ${theme}`}
            >
                <AiFillSound />
            </CyberButton>
        </div>
    );
}