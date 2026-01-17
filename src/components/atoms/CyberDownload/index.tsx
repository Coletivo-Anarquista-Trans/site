import { FaDownload } from "react-icons/fa";

interface CyberDownloadProps {
  href: string;
  filename?: string;
}

export default function CyberDownload({ href, filename }: CyberDownloadProps) {
  return (
    <a
      href={href}
      download={filename}
      className="absolute bottom-2 right-2 bg-background/80 backdrop-blur px-3 py-1 rounded-md text-sm flex items-center gap-2 hover:bg-background"
    >
      <FaDownload />
      Download
    </a>
  );
}