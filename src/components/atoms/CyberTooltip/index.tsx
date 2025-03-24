import { Tooltip } from "react-tooltip";
import { useTheme } from "@/context/ThemeContext";

interface CyberTooltipProps {
    word: string;
    description: string; 
}

export default function CyberTooltip({ word, description }: CyberTooltipProps) {
    const { theme } = useTheme();

    return (
        <>
            <span data-tooltip-id={word}
              className={`text-accent3  underline cursor-help inline-block transition-transform duration-200 ease-in-out hover:scale-110 ${theme}`}
            >
                {word}
            </span>

            <Tooltip id={word} place="top" > 
                {description}
            </Tooltip>
        </>
    );
}
