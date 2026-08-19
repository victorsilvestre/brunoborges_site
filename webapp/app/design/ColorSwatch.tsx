"use client";

import { useState } from "react";

export function ColorSwatch({
    hex,
    label,
    sublabel,
    large,
}: {
    hex: string;
    label?: string;
    sublabel?: string;
    large?: boolean;
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

    return (
        <button
            onClick={handleCopy}
            className="group relative flex flex-col justify-end overflow-hidden text-left transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
            style={{
                backgroundColor: hex,
                height: large ? "clamp(220px, 28vw, 340px)" : "clamp(120px, 14vw, 160px)",
                color: isLight ? "#0C0D0E" : "#FFFBF7",
            }}
        >
            <span
                className="absolute inset-0 flex items-center justify-center text-xs font-medium uppercase tracking-[0.2em] opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                style={{ backgroundColor: isLight ? "rgba(12,13,14,0.08)" : "rgba(255,251,247,0.12)" }}
            >
                {copied ? "Copiado!" : "Copiar hex"}
            </span>
            <div className="p-4">
                {label && <div className="font-serif text-sm font-medium">{label}</div>}
                <div className="font-mono text-xs opacity-80">{hex}</div>
                {sublabel && <div className="font-mono text-[11px] opacity-60">{sublabel}</div>}
            </div>
        </button>
    );
}
