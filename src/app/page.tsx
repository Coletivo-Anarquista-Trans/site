"use client";

import {useTheme} from "@/context/ThemeContext";
import CyberButton from "@/components/atoms/CyberButton"
import CyberContainer from "@/components/atoms/CyberContainer"
import CyberSidebar from "@/components/organism/CyberSidebar";
import CyberTerminal from "@/components/atoms/CyberTerminal";

export default function Home() {
    const {theme, toggleTheme} = useTheme();

    return (
        <>
            <CyberContainer
                className={"bg-background min-h-screen text-foreground flex flex-col items-center justify-items-center"}
                theme={theme}>
                <CyberTerminal theme={theme}/>
                <CyberSidebar
                    glowingBorders
                    normalBorders
                    theme={theme}>
                </CyberSidebar>
                <CyberContainer theme={theme} className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <CyberButton
                        onClick={toggleTheme}
                        unevenBorders
                        theme={theme}
                    >
                        Toggle Theme
                    </CyberButton>
                </CyberContainer>
            </CyberContainer>
        </>
    );
}
