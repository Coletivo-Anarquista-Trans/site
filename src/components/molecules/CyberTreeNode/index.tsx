import React, {useState, useEffect } from "react";
import CyberMiniButton from "../../atoms/CyberMiniButton";
import {useTheme} from "@/context/ThemeContext";
import classnames from "classnames";

interface CyberTreeNodeProps {
    children?: React.ReactNode;
    label: string,
}

export default function CyberTreeNode({ children, label }: CyberTreeNodeProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState("");
    const {theme} = useTheme();

    useEffect(() => {
        setId(crypto.randomUUID());
    }, []);
    const hasChildren = React.Children.count(children) > 0;

    return (
        <div
            className={classnames(theme)}>
            {hasChildren && (
                <span onClick={() => setIsOpen(prev => !prev)} className="cursor-pointer">
                        {isOpen}
                    </span>
            )}
            <CyberMiniButton
                label={label}
                className={""}
                onClick={() => setIsOpen((prev) => !prev)}
                isParent={hasChildren} // \(★ω★)/ Parent buttons have icons, children have different icons
            >
                {label}
            </CyberMiniButton>
            {isOpen && hasChildren && (
                <div className="pl-12 flex flex-col">
                    {children}
                </div>
            )}
        </div>
    )
};

