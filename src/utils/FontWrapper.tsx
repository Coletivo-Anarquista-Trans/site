"use client"; // Mark this as a Client Component

import React, { useEffect } from "react";
import { useFont } from "@/context/FontContext";

export default function FontWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { font, fontSize } = useFont();

  // Apply font and font size to the body element
  useEffect(() => {
    document.body.style.fontFamily = font;
    document.body.style.fontSize = `${fontSize}px`;
  }, [font, fontSize]);

  return <>{children}</>;
}
