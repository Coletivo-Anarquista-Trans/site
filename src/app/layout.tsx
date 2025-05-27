// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ErrorBoundary from "../components/atoms/ErrorBoundary";
import { ThemeProvider } from "@/context/ThemeContext";
import { CyberSectionProvider } from "@/context/CyberSectionsContext/CyberSections";
import CyberSidebar from "@/components/organism/CyberSidebar";
import { FontProvider } from "@/context/FontContext";
import FontWrapper from "@/utils/FontWrapper";
import { AudioContextProvider } from "@/context/AudioContext";
import AudioConsentModal from "@/components/molecules/AudioConsentModal";
import LoadingWrapper from "@/components/atoms/Loading/LoadingWrapper";

export const metadata: Metadata = {
  title: "CATS",
  description: "Coletivo Anarquista Trans",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/cat-icon.svg", type: "image/svg+xml" },
      { url: "/cats.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [
      { url: "/cats.png", sizes: "180x180" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/cat-icon.svg",
        color: "#000000"
      }
    ]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
  const imagePreloadHref = isGitHubPages ? "/site/cats.png" : "/cats.png";
  const faviconHref = isGitHubPages ? "/site/favicon.ico" : "/favicon.ico";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={faviconHref} />
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
