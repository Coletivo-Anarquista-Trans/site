"use client";

import { ReactNode } from "react";
import classnames from "classnames";
import Image, { ImageProps } from "next/image";
import CyberContainer from "@/components/atoms/CyberContainer";

interface CyberImageProps extends Omit<ImageProps, "alt"> {
  text: string;
  url: string;
  className?: string;
  containerClassName?: string;
  textClassName?: string;
  linkClassName?: string;
  path: string;
}

export default function CyberImage({
  path,
  text,
  url,
  width,
  height,
  className = "",
  containerClassName = "",
  textClassName = "",
  linkClassName = "",
  ...props
}: CyberImageProps) {
  return (
    <CyberContainer
      className={classnames(
        "cyber-image-container flex flex-col items-center",
        containerClassName
      )}
      {...props}
    >
      <div className={classnames("cyber-image", className)}>
        <Image
          src={path}
          alt={text.replace(/<[^>]*>?/gm, "")} // Strip HTML tags for alt text
          width={width}
          height={height}
          className="cyber-image-element object-contain max-w-full h-auto"
          loading="lazy"
        />
      </div>
      <div
        className={classnames(
          "cyber-image-text text-center mt-2",
          textClassName
        )}
      >
        <a
          href={url}
          className={classnames(
            "cyber-image-link hover:underline focus-visible:underline",
            linkClassName
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </a>
      </div>
    </CyberContainer>
  );
}
