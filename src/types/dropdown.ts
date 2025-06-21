export interface CyberDropdownItem {
  id: string;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface CyberDropdownProps {
  title: string;
  items: CyberDropdownItem[];
  className?: string;
  defaultOpen?: boolean;
  maxHeight?: string;
  onToggle?: (isOpen: boolean) => void;
} 