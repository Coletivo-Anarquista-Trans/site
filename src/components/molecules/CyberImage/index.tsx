"use client";

import { ReactNode } from "react";
import classnames from "classnames";
import Image from "next/image";
import CyberContainer from "@/components/atoms/CyberContainer";

export default function CyberImage({
    path,
    text,
    url,
    width,         // Required - actual pixel width
    height,        // Required - actual pixel height
    className,
    ...props
}: {
    path: string;
    text: string;
    url: string;
    width: number;         // Required - actual pixel width
    height: number;        // Required - actual pixel height
    className?: string;
}) {
    return (
        <CyberContainer className={classnames("cyber-image-container flex flex-col items-center", className)} {...props}>
            <div className="cyber-image">
                <Image src={path} alt={text} width={width} height={height} className="cyber-image-element" />
            </div>
            <div className="cyber-image-text text-center mt-2">
                <a href={url} className="cyber-image-link" target="_blank" rel="noopener noreferrer">
                    <span dangerouslySetInnerHTML={{ __html: text }} />
                </a>
            </div>
        </CyberContainer>
    );
}