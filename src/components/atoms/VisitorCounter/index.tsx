// components/VisitorCounter.tsx
"use client";

import { useEffect, useState } from "react";
import CyberContainer from "../CyberContainer";

export default function CyberVisitorCounter({
  
}: {

}) {


  return (
    <CyberContainer>
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Hexagonal Border */}

        {/* Counter Display */}
        <div className="text-accent1 font-mono text-4xl sm:text-5xl">
          {count !== null ? count : "..."}
        </div>
      </div>
    </CyberContainer>
  );
}
