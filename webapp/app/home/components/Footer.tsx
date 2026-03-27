"use client";

import { Youtube, Instagram, Send } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    const socialLinks = [
        {
            name: "YouTube",
            url: "https://www.youtube.com/@traderbrunoborges",
            icon: Youtube,
            color: "#FF0000"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/trader_brunoborges/",
            icon: Instagram,
            color: "#E4405F"
        },
        {
            name: "Telegram",
            url: "https://t.me/+MSL99oO7pmcyMWQx",
            icon: Send,
            color: "#0088CC"
        }
    ];

    const quickLinks = [
        { label: "Sobre", href: "#biografia" },
        { label: "Metodologia", href: "#metodologia" },
        { label: "Conteúdo", href: "#conteudo" },
        { label: "Mentorias", href: "#mentorias" }
    ];

    const mentoriaLinks = [
        { label: "Mentoria TDS", href: "/mentoria-tds" },
        { label: "Maratona TDS", href: "/maratona" }
    ];

    return (
        <footer className="relative py-20 bg-black border-t border-[var(--white-10)] overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-[var(--gold-premium)] to-transparent opacity-20" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--gold-premium)]/5 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Top Section */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/images/logo/logo_complete-white_vert-2.png"
                                alt="Trader Bruno Borges"
                                width={444}
                                height={165}
                                className="h-12 w-auto object-contain hover:opacity-80 transition-opacity"
                            />
                        </Link>
                        <p className="text-[var(--white-60)] leading-relaxed max-w-md mb-6">
                            Trader profissional especializado em Price Action. Criador de setups autorais e mentor de milhares de
                            traders.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    className="w-12 h-12 rounded-xl bg-[var(--dark-surface)] border border-[var(--white-10)] flex items-center justify-center hover:border-[var(--white-40)] transition-all group"
                                    style={{
                                        boxShadow: `0 0 0 0 ${social.color}40`
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon className="w-5 h-5 text-[var(--white-60)] group-hover:text-white transition-colors" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-6">Navegação</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="text-[var(--white-60)] hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mentoria Links */}
                    <div>
                        <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-6">Programas</h4>
                        <ul className="space-y-3">
                            {mentoriaLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="text-[var(--white-60)] hover:text-white transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--white-10)] to-transparent mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright */}
                    <div className="text-center md:text-left">
                        <p className="text-sm text-[var(--white-40)]">
                            &copy; {new Date().getFullYear()} Trader Bruno Borges. Todos os direitos reservados.
                        </p>
                    </div>

                    {/* Tagline */}
                    <div className="text-center md:text-right">
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--white-20)] font-bold">
                            Excelência em Price Action
                        </p>
                    </div>
                </div>

                {/* Premium Seal */}
                {/* <div className="mt-12 flex justify-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--gold-premium)]/20 bg-[var(--gold-premium)]/5 backdrop-blur-md">
                        <div className="w-2 h-2 rounded-full bg-[var(--gold-premium)] animate-pulse" />
                        <span className="text-xs font-bold tracking-widest uppercase text-[var(--gold-premium)]">
                            Premium Trading Education
                        </span>
                    </div>
                </div> */}
            </div>
        </footer>
    );
}
