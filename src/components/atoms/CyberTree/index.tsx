interface CyberTreeProps {
    children: React.ReactNode;
    className?: string;
}

export default function CyberTree({ children, className }: CyberTreeProps) {
    return <div className={`ml-4 ${className || ""}`}>{children}</div>;
}
