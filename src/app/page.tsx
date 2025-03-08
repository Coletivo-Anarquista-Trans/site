"use client";

import {useTheme} from "@/context/ThemeContext";
import Header from "@/components/Header";
import {CyberButton} from "@/components/CyberButton"
import {CyberContainer} from "@/components/CyberContainer"
import classnames from "classnames";
import CyberTerminal from "@/components/CyberTerminal";

export default function Home() {
    const {theme, toggleTheme} = useTheme();
    return (
      <>
        <CyberContainer className={classnames(theme)}>
          <Header />
          <CyberTerminal theme={theme} />
          <CyberContainer className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <CyberButton onClick={toggleTheme} unevenBorders>
              Toggle Theme
            </CyberButton>
            <CyberButton onClick={toggleTheme} normalBorders textGlow>
              Toggle Theme
            </CyberButton>
            <CyberButton onClick={toggleTheme} unevenBorders glowingBorders>
              Toggle Theme
            </CyberButton>
            <CyberButton onClick={toggleTheme} normalBorders glowingBorders>
              Toggle Theme
            </CyberButton>
            <CyberButton onClick={toggleTheme} unevenBorders clearBorders>
              Toggle Theme
            </CyberButton>
            <CyberButton onClick={toggleTheme} normalBorders clearBorders>
              Toggle Theme
            </CyberButton>
            <CyberButton
              onClick={toggleTheme}
              unevenBorders
              clearBorders
              secondaryTextGlow
            >
              Toggle Theme
            </CyberButton>
            <CyberButton
              onClick={toggleTheme}
              normalBorders
              clearBorders
              secondaryTextGlow
            >
              Toggle Theme
            </CyberButton>
          </CyberContainer>
        </CyberContainer>
      </>
    );
}
