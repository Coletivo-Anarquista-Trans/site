import React, { useState, useEffect } from "react";
import CyberContainer from "@/components/atoms/CyberContainer";

interface CyberTextWrapperProps {
    children?: React.ReactNode;
    theme: string;
}

export default function CyberText({
                                           children,
                                           theme,
                                       }: CyberTextWrapperProps) {

    const [accentIndex, setAccentIndex] = useState(1);

    useEffect(() => {
        setAccentIndex(1 + Math.floor(Math.random() * 4));
    }, []);

    return (
        <CyberContainer textBackground theme={theme} accentIndex={accentIndex} className="text-center text-4xl p-4 m-14 w-auto h-auto">
            {children}
        </CyberContainer>
    );
};

