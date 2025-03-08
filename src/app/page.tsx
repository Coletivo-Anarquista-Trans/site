"use client";

import {useTheme} from "@/context/ThemeContext";
import CyberButton from "../components/atoms/CyberButton"
import CyberContainer from "../components/atoms/CyberContainer"
import CyberSidebar from "../components/molecules/CyberSidebar";

export default function Home() {
    const {theme, toggleTheme} = useTheme();

    return (
        <>
            <CyberContainer
                theme={theme}>
                <CyberSidebar
                    clearBorders
                    glowingBorders
                    theme={theme}>
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
