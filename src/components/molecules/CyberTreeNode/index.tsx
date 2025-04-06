"use client";

import { Children, ReactNode, useEffect, useState } from "react";
import CyberMiniButton from "../../atoms/CyberMiniButton";

interface CyberTreeNodeProps {
  id: string;
  children?: ReactNode;
  onClick?: () => void;
  defaultOpen?: boolean;
  className?: string;
}

export default function CyberTreeNode({
  children,
  onClick,
  className,
  id,
  defaultOpen = false, // Default to false
}: CyberTreeNodeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedState = sessionStorage.getItem(`treeNodeState-${id}`);
    // Default to closed if no stored state exists
    setIsOpen(storedState ? JSON.parse(storedState) : defaultOpen);
  }, [id, defaultOpen]);

  const hasChildren = Children.count(children) > 0;

  const handleClick = () => {
    if (onClick) {
      onClick();
      sessionStorage.setItem(`treeNodeState-${id}`, "true");
    } else if (hasChildren) {
      const newState = !isOpen;
      sessionStorage.setItem(`treeNodeState-${id}`, JSON.stringify(newState));
      setIsOpen(newState);
    }
  };

  if (!isMounted) {
    return (
      <div>
        <CyberMiniButton isParent={hasChildren}>{children}</CyberMiniButton>
      </div>
    );
  }

  return (
    <div className={className}>
      <CyberMiniButton onClick={handleClick} isParent={hasChildren}>
        {children}
      </CyberMiniButton>
      {isOpen && hasChildren && (
        <div className="pl-8 flex flex-col">{children}</div>
      )}
    </div>
  );
}
