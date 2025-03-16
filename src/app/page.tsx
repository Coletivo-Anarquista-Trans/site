"use client";

import {useTheme} from "@/context/ThemeContext";
import CyberButton from "@/components/atoms/CyberButton"
import CyberContainer from "@/components/atoms/CyberContainer"
import CyberTerminal from "@/components/atoms/CyberTerminal";

export default function Home() {
    const { toggleTheme} = useTheme();

    return (
        <>
            <CyberContainer
                className={"bg-background min-h-screen text-foreground flex flex-col items-center justify-items-center"}>
        <div className="granular-effect">
          <CyberTerminal/>
        </div>
                <CyberContainer className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <CyberButton
                        onClick={toggleTheme}
                        unevenBorders>
                        Toggle Theme
                    </CyberButton>
                </CyberContainer>
            </CyberContainer>
        </>
    );
}
