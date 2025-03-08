"use client";

import {useTheme} from "@/context/ThemeContext";
import CyberButton from "@/components/CyberButton"
import CyberContainer from "@/components/CyberContainer"
import CyberSidebar from "@/components/CyberSidebar";
import CyberMiniButton from "@/components/CyberMiniButton";

export default function Home() {
    const {theme, toggleTheme} = useTheme();

    return (
        <>
            <CyberContainer
                theme={theme}>
                <CyberSidebar theme={theme}>
                    <CyberContainer theme={theme}>
                        <CyberMiniButton
                            theme={theme}
                            onClick={toggleTheme}
                        >
                            Click Me
                        </CyberMiniButton>
                    </CyberContainer>
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
