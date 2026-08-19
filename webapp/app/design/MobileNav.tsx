"use client";

import { useState } from "react";

const SECTIONS = [
    { id: "marca", label: "Marca" },
    { id: "logo", label: "Logo" },
    { id: "cores", label: "Cores" },
    { id: "tipografia", label: "Tipografia" },
    { id: "elementos", label: "Elementos" },
    { id: "fotos", label: "Fotos" },
    { id: "aplicacoes", label: "Aplicações" },
] as const;

export function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="lg:hidden sticky top-0 z-40 border-b"
            style={{ backgroundColor: "var(--paper)", borderColor: "var(--rule)" }}
        >
            <div className="flex items-center justify-between px-5 py-3">
                <a href="#capa" className="font-serif text-sm" style={{ color: "var(--ink)" }}>
                    Bruno Borges — Guidelines
                </a>
                <button
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-label="Abrir sumário"
                    className="font-mono text-xs uppercase tracking-[0.15em] px-3 py-1.5 border"
                    style={{ borderColor: "var(--rule)", color: "var(--ink)" }}
                >
                    {open ? "Fechar" : "Sumário"}
                </button>
            </div>
            {open && (
                <ol
                    className="flex flex-col border-t text-sm"
                    style={{ borderColor: "var(--rule)" }}
                >
                    {SECTIONS.map((s, i) => (
                        <li key={s.id} className="border-b" style={{ borderColor: "var(--rule)" }}>
                            <a
                                href={`#${s.id}`}
                                onClick={() => setOpen(false)}
                                className="flex items-baseline gap-3 px-5 py-3"
                            >
                                <span className="font-mono text-[11px]" style={{ color: "var(--accent-deep)" }}>
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                {s.label}
                            </a>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
}
