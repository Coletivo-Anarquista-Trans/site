import React from "react";

interface CyberRadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
  className?: string;
}

export default function CyberRadioButton({
  name,
  value,
  checked,
  onChange,
  label,
  className,
}: CyberRadioButtonProps) {
  return (
    <label className={`flex items-center ${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="mr-2 accent-accent1"
      />
      {label}
    </label>
  );
}