"use client";

import { useState } from "react";

export function ColorSwatch({
    hex,
    label,
    sublabel,
    size = "sm",
}: {
    hex: string;
    label?: string;
    sublabel?: string;
    size?: "sm" | "lg";
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(hex);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch {
            // clipboard indisponível — ignora silenciosamente
        }
    };

    const isLight = (() => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return (r * 299 + g * 587 + b * 114) / 1000 > 150;
    })();

    const fg = isLight ? "#0C0D0E" : "#FFFBF7";

    return (
        <button
            onClick={handleCopy}
            className="group relative flex flex-col justify-end overflow-hidden text-left w-full transition-[transform,box-shadow] duration-150 hover:z-10 hover:shadow-[0_8px_24px_rgba(12,13,14,0.18)] cursor-pointer"
            style={{
                backgroundColor: hex,
                aspectRatio: size === "lg" ? "4 / 3" : "1 / 1",
                color: fg,
            }}
        >
            <span
                className="absolute top-2 right-2 font-mono text-[10px] uppercase tracking-[0.1em] opacity-0 transition-opacity duration-150 group-hover:opacity-70"
            >
                {copied ? "copiado" : "copiar"}
            </span>
            <div className={size === "lg" ? "p-4" : "p-2.5"}>
                {label && (
                    <div className={size === "lg" ? "font-serif text-base mb-0.5" : "text-[11px] font-medium mb-0.5"}>
                        {label}
                    </div>
                )}
                <div className={size === "lg" ? "font-mono text-xs opacity-80" : "font-mono text-[10px] opacity-75"}>
                    {hex}
                </div>
                {sublabel && size === "lg" && (
                    <div className="font-mono text-[11px] opacity-60 mt-0.5">{sublabel}</div>
                )}
            </div>
        </button>
    );
}
