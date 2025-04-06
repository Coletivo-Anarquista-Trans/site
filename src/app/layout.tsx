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
  description: "-x-",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="cats.png" as="image" />
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
