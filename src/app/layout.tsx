// app/layout.tsx
import LoadingWrapper from "@/components/atoms/Loading/LoadingWrapper";
import AudioConsentModal from "@/components/molecules/AudioConsentModal";
import CyberSidebar from "@/components/organism/CyberSidebar";
import { AudioContextProvider } from "@/context/AudioContext";
import { CyberSectionProvider } from "@/context/CyberSectionsContext/CyberSections";
import { FontProvider } from "@/context/FontContext";
import { ThemeProvider } from "@/context/ThemeContext";
import FontWrapper from "@/utils/FontWrapper";
import { Metadata } from "next";
import ErrorBoundary from "../components/atoms/ErrorBoundary";
import "./globals.css";

export const metadata: Metadata = {
  title: "CATS",
  description: "Coletivo Anarquista Trans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
  const imagePreloadHref = isGitHubPages ? "/site/cats.png" : "/cats.png";

  return (
    <html lang="en">
      <head>
        <link rel="preload" href={imagePreloadHref} as="image" />
      </head>
      <body>
        <ThemeProvider>
          <FontProvider>
            <AudioContextProvider>
              <CyberSectionProvider>
                <ErrorBoundary fallback={<div>Something went wrong!</div>}>
                  <FontWrapper>
                    <div className="min-h-screen flex">
                      <CyberSidebar />
                      <AudioConsentModal />
                      <div className="flex-1 lg:ml-72 relative">
                        <LoadingWrapper>{children}</LoadingWrapper>
                      </div>
                    </div>
                  </FontWrapper>
                </ErrorBoundary>
              </CyberSectionProvider>
            </AudioContextProvider>
          </FontProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
