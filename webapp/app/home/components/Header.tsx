"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const updateScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", updateScroll);
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-black/80 backdrop-blur-xl border-b border-[var(--white-10)] shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group">
                        <Image
                            src="/images/logo/logo_complete-white_vert-2.png"
                            alt="Trader Bruno Borges"
                            width={444}
                            height={165}
                            className="h-10 w-auto object-contain group-hover:opacity-80 transition-opacity"
                            priority
                        />
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a
                            href="#biografia"
                            className="text-sm font-semibold tracking-wider uppercase text-[var(--white-80)] hover:text-white transition-colors"
                        >
                            Sobre
                        </a>
                        <a
                            href="#metodologia"
                            className="text-sm font-semibold tracking-wider uppercase text-[var(--white-80)] hover:text-white transition-colors"
                        >
                            Metodologia
                        </a>
                        <a
                            href="#conteudo"
                            className="text-sm font-semibold tracking-wider uppercase text-[var(--white-80)] hover:text-white transition-colors"
                        >
                            Conteúdo
                        </a>
                        <a
                            href="#mentorias"
                            className="text-sm font-semibold tracking-wider uppercase text-[var(--white-80)] hover:text-white transition-colors"
                        >
                            Mentorias
                        </a>
                    </nav>

                    {/* CTA */}
                    <a
                        href="https://t.me/+MSL99oO7pmcyMWQx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--green-bull)] text-white font-display font-bold text-sm uppercase tracking-wider hover:bg-[var(--green-hover)] transition-all hover:shadow-[var(--glow-green)]"
                    >
                        Começar Agora
                    </a>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.header>
    );
}
