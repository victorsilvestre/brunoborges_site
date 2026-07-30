"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

function YoutubeSvg({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
        </svg>
    );
}

function InstagramSvg({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function GlobeSvg({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    );
}

const links = [
    {
        label: "Site Oficial",
        url: "https://traderbrunoborges.com.br",
        icon: GlobeSvg,
        highlight: false,
    },
    {
        label: "Mentoria Trader de Sucesso",
        url: "https://traderbrunoborges.com.br/mentoria-tds",
        icon: GlobeSvg,
        highlight: true,
    },
    {
        label: "Lista de Espera Mentoria TDS",
        url: "https://t.me/+MSL99oO7pmcyMWQx",
        icon: Send,
        highlight: false,
    },
    {
        label: "Conheça a Maratona",
        url: "https://traderbrunoborges.com.br/maratona",
        icon: GlobeSvg,
        highlight: false,
    },
    {
        label: "Grupo Exclusivo Maratona",
        url: "https://t.me/+KneI8WDXEEJmNWY5",
        icon: Send,
        highlight: false,
    },
    {
        label: "YouTube",
        url: "https://www.youtube.com/@traderbrunoborges",
        icon: YoutubeSvg,
        highlight: false,
    },
    {
        label: "Instagram",
        url: "https://www.instagram.com/trader_brunoborges/",
        icon: InstagramSvg,
        highlight: false,
    },
];

export default function LinksPage() {
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/image_bg-links.jpg"
                    alt="Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/75" />
                {/* Green ambient glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--green-bull)]/10 blur-[120px] rounded-full" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-sm mx-auto px-6 py-16 flex flex-col items-center">
                {/* Logo / Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-5"
                >
                    <Image
                        src="/images/logo/logo_icon-white-1.png"
                        alt="Trader Bruno Borges"
                        width={72}
                        height={72}
                        className="w-[72px] h-[72px] object-contain drop-shadow-lg"
                    />
                </motion.div>

                {/* Name */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center mb-8"
                >
                    <p className="font-display font-bold text-xs uppercase tracking-[0.25em] text-[var(--green-bull)] mb-1">
                        Trader
                    </p>
                    <h1 className="font-display font-black text-3xl uppercase tracking-tight text-white leading-none">
                        Bruno Borges
                    </h1>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[var(--green-bull)] to-transparent mb-8"
                />

                {/* Links */}
                <div className="w-full flex flex-col gap-3">
                    {links.map((link, idx) => {
                        const Icon = link.icon;
                        return (
                            <motion.a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 + idx * 0.07 }}
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className={`
                                    relative flex items-center gap-3 w-full px-5 py-[14px] rounded-lg
                                    font-display font-bold text-sm uppercase tracking-wider
                                    transition-all duration-200 overflow-hidden group
                                    ${link.highlight
                                        ? "bg-[var(--green-bull)] text-white shadow-[0_0_24px_rgba(0,191,99,0.35)] hover:bg-[var(--green-dark)] hover:shadow-[0_0_32px_rgba(0,191,99,0.5)]"
                                        : "bg-black/40 backdrop-blur-sm border border-[var(--green-bull)]/20 text-white hover:border-[var(--green-bull)]/60 hover:bg-black/60"
                                    }
                                `}
                            >
                                {/* Subtle shimmer on hover for non-highlight */}
                                {!link.highlight && (
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[var(--green-bull)]/5 to-transparent" />
                                )}
                                <Icon className="w-4 h-4 shrink-0 opacity-70" />
                                <span className="relative">{link.label}</span>
                            </motion.a>
                        );
                    })}
                </div>

                {/* Footer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="mt-12 text-[10px] uppercase tracking-[0.25em] text-[var(--white-20)] font-bold"
                >
                    Excelência em Price Action
                </motion.p>
            </div>
        </main>
    );
}
