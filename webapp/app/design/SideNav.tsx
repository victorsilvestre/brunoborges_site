"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
    { id: "capa", label: "Manual", kind: "cover" },
    { id: "marca", label: "Marca" },
    { id: "logo", label: "Logo" },
    { id: "cores", label: "Cores" },
    { id: "tipografia", label: "Tipografia" },
    { id: "elementos", label: "Elementos" },
    { id: "aplicacoes", label: "Aplicações" },
] as const;

export function SideNav() {
    const [active, setActive] = useState<string>("capa");
    const ticking = useRef(false);

    useEffect(() => {
        const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
            (el): el is HTMLElement => el !== null
        );

        const onScroll = () => {
            if (ticking.current) return;
            ticking.current = true;
            requestAnimationFrame(() => {
                const probe = window.innerHeight * 0.3;
                let current = els[0]?.id ?? "capa";
                for (const el of els) {
                    if (el.getBoundingClientRect().top <= probe) {
                        current = el.id;
                    }
                }
                setActive(current);
                ticking.current = false;
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            aria-label="Sumário do manual"
            className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-[220px] shrink-0 px-8 py-10 border-r"
            style={{ borderColor: "var(--rule)" }}
        >
            <a
                href="#capa"
                className="font-serif text-[15px] leading-tight mb-12 block"
                style={{ color: "var(--ink)" }}
            >
                Bruno Borges
                <span className="block text-[11px] mt-0.5" style={{ color: "var(--muted)" }}>
                    Brand Guidelines
                </span>
            </a>

            <ol className="flex flex-col gap-0.5 text-sm">
                {SECTIONS.filter((s) => !("kind" in s && s.kind === "cover")).map((s, i) => {
                    const isActive = active === s.id;
                    return (
                        <li key={s.id}>
                            <a
                                href={`#${s.id}`}
                                className="flex items-baseline gap-3 py-1.5 transition-colors"
                                style={{
                                    color: isActive ? "var(--ink)" : "var(--muted)",
                                    fontWeight: isActive ? 500 : 400,
                                }}
                            >
                                <span
                                    className="font-mono text-[11px] tabular-nums"
                                    style={{ color: isActive ? "var(--accent-deep)" : "var(--muted)" }}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                {s.label}
                            </a>
                        </li>
                    );
                })}
            </ol>

            <div className="mt-auto flex flex-col gap-1.5 pt-8 text-[11px] font-mono" style={{ color: "var(--muted)" }}>
                <a href="/design/manifest.json" className="hover:underline w-fit">
                    manifest.json
                </a>
                <a href="/design/reference.md" className="hover:underline w-fit">
                    reference.md
                </a>
            </div>
        </nav>
    );
}
