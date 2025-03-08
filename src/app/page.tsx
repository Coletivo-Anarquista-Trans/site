"use client";

import {useTheme} from "@/context/ThemeContext";
import CyberButton from "../components/atoms/CyberButton"
import CyberContainer from "../components/atoms/CyberContainer"
import CyberSidebar from "../components/molecules/CyberSidebar";
import CyberMiniButton from "../components/atoms/CyberMiniButton";
import CyberTree from "../components/atoms/CyberTree";
import CyberTreeNode from "../components/molecules/CyberTreeNode";

export default function Home() {
    const {theme, toggleTheme} = useTheme();

    return (
        <>
            <CyberContainer
                theme={theme}>
                <CyberSidebar theme={theme}>
                    <CyberContainer theme={theme}>
                            <CyberTreeNode theme={theme} label={"Button 1"}>
                                <CyberMiniButton theme={theme} label={"Button 1.1"}></CyberMiniButton>
                            </CyberTreeNode>
                            <CyberTreeNode theme={theme} label={"Button 1.1"}>
                                <CyberMiniButton theme={theme} label={"Button 1.1"}>Button 2</CyberMiniButton>
                            </CyberTreeNode>
                            <CyberTreeNode theme={theme} label={"Button 1.1"}>
                                <CyberTree>
                                    <CyberMiniButton theme={theme} label={"Button 1.1"}>Nested Button</CyberMiniButton>
                                </CyberTree>
                            </CyberTreeNode>
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
