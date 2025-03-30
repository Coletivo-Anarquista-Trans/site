import { IoMdFolder, IoMdLink } from "react-icons/io";

interface CyberResourceIconProps {
  type: 'file' | 'link';
  className?: string;
}

export default function CyberResourceIcon({ type, className = '' }: CyberResourceIconProps) {
  if (type === 'file') {
    return <IoMdFolder className={`h-5 w-5 ${className}`} />;
  }

  return <IoMdLink className={`h-5 w-5 ${className}`} />;
}