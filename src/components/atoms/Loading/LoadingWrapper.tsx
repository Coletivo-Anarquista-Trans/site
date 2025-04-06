"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import CyberLoadingIndicator from "./CyberLoadingIndicator";
import { AnimatePresence } from "framer-motion";

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="relative flex-1">
      <AnimatePresence>
        {isLoading && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/90">
            <CyberLoadingIndicator />
          </div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}
