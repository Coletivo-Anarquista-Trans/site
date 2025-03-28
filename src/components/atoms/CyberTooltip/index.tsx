import { Tooltip } from "react-tooltip";
import { useTheme } from "@/context/ThemeContext";
import { useId } from "react";

interface CyberTooltipProps {
    word: string;
    description?: string;
    link?: string;
}

export default function CyberTooltip({ word, description, link }: CyberTooltipProps) {
    const { theme } = useTheme();
    const uniqueId = useId();

    return (
        <>
            {link ? (
                <a
                    href={link}
                    data-tooltip-id={uniqueId}
                    className={`text-accent3 underline cursor-pointer inline-block transition-transform duration-200 ease-in-out hover:scale-110 ${theme}`}
                >
                    {word}
                </a>
            ) : (

                <span data-tooltip-id={uniqueId}
                    className={`text-accent3  underline cursor-help inline-block transition-transform duration-200 ease-in-out hover:scale-110 ${theme}`}
                >
                    {word}
                </span>
            )}

            <Tooltip id={uniqueId} place="top" >
                {description}
            </Tooltip>
        </>
    );
}
