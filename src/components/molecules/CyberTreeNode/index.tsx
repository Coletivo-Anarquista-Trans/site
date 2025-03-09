import React, {useState, useEffect } from "react";
import CyberMiniButton from "../../atoms/CyberMiniButton";

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
    const hasChildren = React.Children.count(children) > 0;

    return (
        <div className=" flex flex-col self-start ">
            <div className="flex items-center space-x-2">
                {hasChildren && (
                    <span onClick={() => setIsOpen(prev => !prev)} className="cursor-pointer">
                        {isOpen}
                    </span>
                )}
                <CyberMiniButton
                    label={label}
                    className={""}
                    theme={theme}
                    onClick={() => setIsOpen((prev) => !prev)}
                    isParent={hasChildren} // \(★ω★)/ Parent buttons have icons, children have different icons
                >
                    {label}
                </CyberMiniButton>
            </div>
            {isOpen && hasChildren && (
                <div className="pl-12 flex flex-col">
                    {children}
                </div>
            )}
        </div>
    );
}

