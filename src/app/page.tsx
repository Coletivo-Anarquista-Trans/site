"use client";

import {useTheme} from "@/context/ThemeContext";
import CyberButton from "@/components/CyberButton"
import CyberContainer from "@/components/CyberContainer"
import CyberSidebar from "@/components/CyberSidebar";

export default function Home() {
    const {theme, toggleTheme} = useTheme();

    return (
        <>
            <CyberContainer
                theme={theme}>
                <CyberSidebar
                    className="flex flex-col gap-8 row-start-2 items-center sm:items-start"
                    theme={theme}                >
                    <CyberButton
                        onClick={toggleTheme}
                        unevenBorders
                        theme={theme}
                    >
                        Toggle Theme
                    </CyberButton>
                    <CyberButton
                        onClick={toggleTheme}
                        normalBorders
                        textGlow
                        theme={theme}
                    >
                        Toggle Theme
                    </CyberButton>
                    <CyberButton
                        onClick={toggleTheme}
                        unevenBorders
                        glowingBorders
                        theme={theme}
                    >Toggle Theme
                    </CyberButton>
                </CyberSidebar>
                <CyberContainer
                theme={theme}>
                    <CyberButton
                        onClick={toggleTheme}
                        normalBorders
                        glowingBorders
                        theme={theme}
                    >
                        Toggle Theme
                    </CyberButton>
                    <CyberButton
                        onClick={toggleTheme}
                        unevenBorders
                        clearBorders
                        theme={theme}
                    >
                        Toggle Theme
                    </CyberButton>
                    <CyberButton
                        onClick={toggleTheme}
                        normalBorders
                        clearBorders
                        theme={theme}
                    >
                        Toggle Theme
                    </CyberButton>
                    <CyberButton
                        onClick={toggleTheme}
                        unevenBorders
                        clearBorders
                        secondaryTextGlow
                        theme={theme}
                    >
                        Toggle Theme
                    </CyberButton>
                    <CyberButton
                        onClick={toggleTheme}
                        normalBorders
                        clearBorders
                        secondaryTextGlow
                        theme={theme}
                    >
                        Toggle Theme
                    </CyberButton>
                </CyberContainer>
            </CyberContainer>
        </>
    );
}
