import React, { useState, useEffect } from "react";
import CyberMiniButton from "../../atoms/CyberMiniButton";
import CyberTree from "../../atoms/CyberTree";

interface CyberTreeNodeProps {
    children?: React.ReactNode;
    theme: string;
    label: string,
}

export default function CyberTreeNode({ children, theme, label }: CyberTreeNodeProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState("");

    useEffect(() => {
        setId(crypto.randomUUID());
    }, []);

    return (
        <div className="ml-4">
            <CyberTree className="ml-4">
                <CyberMiniButton label={label} theme={theme} onClick={() => setIsOpen((prev) => !prev)}>
                    {label} {isOpen}
                </CyberMiniButton>
                {isOpen && <div className="ml-6">{children}</div>}
            </CyberTree>
        </div>
    );
}
