import {Children, ReactNode, useEffect, useState} from "react";
import CyberMiniButton from "../../atoms/CyberMiniButton";
import {useTheme} from "@/context/ThemeContext";
import classnames from "classnames";

interface CyberTreeNodeProps {
    id: string;
    children?: ReactNode;
    label: string | ReactNode;
    onClick?: () => void;
}

export default function CyberTreeNode({children, label, onClick, id}: CyberTreeNodeProps) {
    const { theme } = useTheme();
    const [isInitialized, setIsInitialized] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const storageKey = `treeNodeState-${id}`;

    useEffect(() => {
        const storedState = sessionStorage.getItem(storageKey);
        if (storedState !== null) {
            setIsOpen(JSON.parse(storedState));
        }
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            sessionStorage.setItem(storageKey, JSON.stringify(isOpen));
        }
    }, [isOpen, isInitialized]);

    const hasChildren = Children.count(children) > 0;

    const handleClick = () => {
        if (onClick) {
            sessionStorage.setItem(storageKey, JSON.stringify(true));
            onClick();
        } else if (hasChildren) {
            setIsOpen((prev) => {
                const newState = !prev;
                sessionStorage.setItem(storageKey, JSON.stringify(newState));
                return newState;
            });
        }
    };

    if (!isInitialized) return null;

    return (
        <div className={classnames(theme)}>
            <CyberMiniButton
                label={label}
                className=""
                onClick={handleClick}
                isParent={hasChildren}
            >
                {label}
            </CyberMiniButton>
            {isOpen && hasChildren && (
                <div className="pl-8 flex flex-col">
                    {children}
                </div>
            )}
        </div>
    );
}
