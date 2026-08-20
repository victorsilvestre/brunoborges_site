'use client';

import { useEffect, useState } from 'react';
import "../maratona/stitch.css";

const DEEP_LINK = 'tg://join?invite=KneI8WDXEEJmNWY5';
const TELEGRAM_WEB = 'https://t.me/+KneI8WDXEEJmNWY5';
const APP_STORE = 'https://apps.apple.com/app/telegram-messenger/id686449807';
const PLAY_STORE = 'https://play.google.com/store/apps/details?id=org.telegram.messenger';
const DEEP_LINK_DELAY_MS = 2000;
const FALLBACK_DELAY_MS = 4500;

function detectDevice(ua: string) {
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isAndroid = /Android/i.test(ua);
    return { isIOS, isAndroid, isDesktop: !isIOS && !isAndroid };
}

export default function MaratonaGrupoPage() {
    const [showFallback, setShowFallback] = useState(false);
    const [device, setDevice] = useState<{ isIOS: boolean; isAndroid: boolean; isDesktop: boolean } | null>(null);

    useEffect(() => {
        const detected = detectDevice(navigator.userAgent);
        setDevice(detected);

        const deepLinkTimer = setTimeout(() => {
            window.location.href = DEEP_LINK;
        }, DEEP_LINK_DELAY_MS);

        const fallbackTimer = setTimeout(() => {
            setShowFallback(true);
        }, FALLBACK_DELAY_MS);

        return () => {
            clearTimeout(deepLinkTimer);
            clearTimeout(fallbackTimer);
        };
    }, []);

    function getDownloadLink() {
        if (!device) return TELEGRAM_WEB;
        if (device.isIOS) return APP_STORE;
        if (device.isAndroid) return PLAY_STORE;
        return TELEGRAM_WEB;
    }


    return (
        <main className="maratona-stitch min-h-screen flex flex-col items-center justify-start px-6 pt-12 pb-12 relative overflow-hidden hero-bg">
            <div className="relative z-10 flex flex-col items-center text-center w-full max-w-sm">
                {/* Foto do Bruno, ancorada num painel com fundo sólido */}
                <div className="relative w-full rounded-xl overflow-hidden border border-[var(--surface-bright)] shadow-md">
                    <div className="relative w-full h-[240px] bg-gradient-to-b from-[var(--surface-container)] to-[var(--primary)]/15">
                        <img
                            src="/images/bruno/img_bruno-corpo_transparente-tratada.png"
                            alt="Bruno Borges"
                            className="absolute inset-0 w-full h-full object-contain object-bottom select-none"
                        />
                    </div>
                </div>

                {/* Card com título, subtítulo e benefícios */}
                <div className="form-card w-full bg-[var(--surface)] p-6 rounded-xl border border-[var(--surface-bright)] shadow-md relative overflow-visible mt-6">
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-[var(--primary)] rounded-br-full z-0" />

                    <h1 className="relative z-10 font-display-stitch font-black text-[var(--text-main)] text-2xl leading-tight tracking-tight mb-3">
                        Quase lá! Seu acesso está sendo liberado...
                    </h1>

                    <p className="relative z-10 text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                        É por lá que você vai receber:
                    </p>

                    <ul className="relative z-10 w-full text-left flex flex-col gap-2.5">
                        {[
                            'Aulas gravadas',
                            'Materiais complementares',
                            'Avisos importantes',
                            'Conteúdos Bônus Exclusivos',
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span className="text-[var(--primary-dark)] font-bold text-base leading-none mt-0.5">✓</span>
                                <span className="text-[var(--text-main)] text-sm leading-snug">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Spinner de carregamento */}
                {!showFallback && (
                    <div className="flex flex-col items-center gap-3 mt-8">
                        <div
                            className="w-10 h-10 rounded-full border-[3px] border-transparent animate-spin"
                            style={{
                                borderTopColor: 'var(--primary)',
                                borderRightColor: 'color-mix(in srgb, var(--primary) 30%, transparent)',
                            }}
                        />
                        <p className="text-xs text-[var(--text-muted)] font-display-stitch font-bold tracking-widest uppercase">
                            Abrindo o Telegram automaticamente...
                        </p>
                    </div>
                )}

                {/* Seção de fallback */}
                {showFallback && (
                    <div className="w-full flex flex-col items-center gap-4 mt-8">
                        <p className="text-[var(--text-main)] font-display-stitch font-bold text-lg text-center leading-snug">
                            O Telegram não abriu automaticamente?
                        </p>

                        {/* Botão primário — baixar o Telegram (oculto em desktop) */}
                        {device && !device.isDesktop && (
                            <a
                                href={getDownloadLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-white font-display-stitch font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.1)] hover:translate-y-[2px] hover:translate-x-[2px]"
                                style={{ background: '#2AABEE' }}
                            >
                                Baixar o Telegram
                            </a>
                        )}

                        {/* Botão secundário — entrar pelo navegador */}
                        <a
                            href={TELEGRAM_WEB}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-[var(--text-main)] bg-[var(--primary)] hover:bg-[var(--primary-dark)] font-display-stitch font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.1)] hover:translate-y-[2px] hover:translate-x-[2px]"
                        >
                            Entrar pelo navegador
                            <svg viewBox="0 0 20 20" className="w-4 h-4 fill-[var(--text-main)] shrink-0">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                )}
            </div>

            {/* Rodapé */}
            <div className="relative z-10 mt-auto pt-12 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)] font-bold">
                &copy; {new Date().getFullYear()} — Maratona TDS · Trader Bruno Borges
            </div>

        </main>
    );
}
