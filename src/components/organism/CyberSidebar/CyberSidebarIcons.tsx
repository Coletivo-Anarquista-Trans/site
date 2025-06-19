import React from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

export const FolderIcon = ({
  isOpen = false,
  className = "",
}: {
  isOpen?: boolean;
  className?: string;
}) => (
  <span className={`mr-1 ${className}`}>
    {isOpen ? <FaFolderOpen size={14} /> : <FaFolder size={14} />}
  </span>
);

export const FileIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={`mr-1 ${className}`}
  >
    <path d="M13 3H3V13H13V3Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 1V3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11 1V3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 5H13" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const HomeIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={`mr-1 ${className}`}
  >
    <path d="M14 8V14H2V8" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 1L1 8H15L8 1Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const BlogIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={`mr-1 ${className}`}
  >
    <path d="M2 3H14V13H2V3Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 6H11" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 9H11" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 12H8" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const ResourcesIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={`mr-1 ${className}`}
  >
    <path d="M2 3H14V5H2V3Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 5H13V13H3V5Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 8H10" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const AboutIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={`mr-1 ${className}`}
  >
    <path
      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M8 10V13" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const ChevronRight = ({ className = "" }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={`mr-1 ${className}`}
  >
    <path
      d="M6 12L10 8L6 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ChevronDown = ({ className = "" }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={`mr-1 ${className}`}
  >
    <path
      d="M4 6L8 10L12 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const HamburgerIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
  >
    <path
      d="M2 4H14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M2 8H14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M2 12H14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const CloseIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path
      d="M12 4L4 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M4 4L12 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const HormonesIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={`mr-1 ${className}`}
  >
    <path
      d="M8 2V14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M11 5L8 2L5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M5 11L8 14L11 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const SurgeryIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={`mr-1 ${className}`}
  >
    <path
      d="M5 11L11 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 8L13 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M3 13L8 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const VoiceIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={`mr-1 ${className}`}
  >
    <path
      d="M3 8H5L7 10V6L5 8H3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M9 5V11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M11 4V12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M13 6V10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ExerciseIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={`mr-1 ${className}`}
  >
    <path
      d="M6 10L4 12L2 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 12V4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10 6L12 4L14 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 4V12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const HealthIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={`mr-1 ${className}`}
  >
    <path
      d="M8 4V12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 8H4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const CustomizationIcon = ({
  className = "",
}: {
  className?: string;
}) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={`mr-1 ${className}`}
  >
    <path
      d="M8 2L10 6L14 7L11 10L11 14L8 12L5 14L5 10L2 7L6 6L8 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArchiveIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={`mr-1 ${className}`}
  >

    <path
      d="M3 2V14H13V5L10 2H3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />

    <path
      d="M10 2V5H13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);