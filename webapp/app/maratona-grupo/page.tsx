'use client';

import { useEffect, useState } from 'react';

const DEEP_LINK = 'tg://join?invite=eyQwbBFDUXBkMGIx';
const TELEGRAM_WEB = 'https://t.me/+eyQwbBFDUXBkMGIx';
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
        <main className="min-h-screen bg-[var(--dark-base)] flex flex-col items-center justify-start px-6 pt-0 pb-12 relative overflow-hidden">
            {/* Grid de fundo */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            {/* Glow verde central */}
            <div
                className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[160px] rounded-full pointer-events-none"
                style={{ background: 'var(--green-dim)' }}
            />

            <div className="relative z-10 flex flex-col items-center text-center w-full max-w-sm">
                {/* Foto do Bruno */}
                <div className="relative w-full flex justify-center">
                    <img
                        src="/images/bruno/img_bruno-corpo_transparente-tratada.png"
                        alt="Bruno Borges"
                        className="h-[280px] w-auto object-contain object-bottom select-none"
                        style={{ filter: 'drop-shadow(0 10px 40px rgba(0,191,99,0.15))' }}
                    />
                    {/* Glow de chão */}
                    <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-8 blur-[30px] rounded-full"
                        style={{ background: 'var(--green-dim)' }}
                    />
                </div>

                {/* Título */}
                <h1 className="font-display font-black text-white text-2xl md:text-3xl leading-tight tracking-tight mt-6 mb-4">
                    Quase lá! Seu acesso está sendo liberado...
                </h1>

                {/* Subtítulo */}
                <p className="text-[var(--white-60)] text-sm md:text-base leading-relaxed mb-5">
                    É por lá que você vai receber:
                </p>

                {/* Lista de benefícios */}
                <ul className="w-full text-left flex flex-col gap-3 mb-8">
                    {[
                        'Aulas gravadas',
                        'Materiais complementares',
                        'Avisos importantes',
                        'Conteúdos Bônus Exclusivos',
                    ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                            <span className="text-base leading-none mt-0.5">✅</span>
                            <span className="text-[var(--white-70)] text-sm md:text-base leading-snug">{item}</span>
                        </li>
                    ))}
                </ul>

                {/* Spinner de carregamento */}
                {!showFallback && (
                    <div className="flex flex-col items-center gap-3 mb-8">
                        <div
                            className="w-10 h-10 rounded-full border-[3px] border-transparent animate-spin"
                            style={{
                                borderTopColor: 'var(--green-pure)',
                                borderRightColor: 'color-mix(in srgb, var(--green-pure) 30%, transparent)',
                            }}
                        />
                        <p className="text-xs text-[var(--white-40)] tracking-widest uppercase">
                            Abrindo o Telegram automaticamente...
                        </p>
                    </div>
                )}

                {/* Seção de fallback */}
                {showFallback && (
                    <div className="w-full flex flex-col items-center gap-4">
                        <p className="text-white font-display font-bold text-xl text-center leading-snug mb-2">
                            O Telegram não abriu automaticamente?
                        </p>

                        {/* Botão principal — entrar pelo navegador */}
                        <a
                            href={TELEGRAM_WEB}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-white font-display font-bold text-sm uppercase tracking-wider transition-all active:scale-[0.98]"
                            style={{
                                background: 'var(--green-pure)',
                                boxShadow: '0 8px 30px var(--green-dim)',
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.background = 'var(--green-dark)';
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.background = 'var(--green-pure)';
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                            }}
                        >
                            Entrar pelo navegador
                            <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white shrink-0">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </a>

                        {/* Botão secundário — baixar o Telegram (oculto em desktop) */}
                        {device && !device.isDesktop && (
                            <a
                                href={getDownloadLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-display font-bold text-sm uppercase tracking-wider transition-all active:scale-[0.98]"
                                style={{
                                    background: 'transparent',
                                    border: '1.5px solid rgba(255,255,255,0.15)',
                                    color: 'var(--white-70)',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--green-pure)';
                                    (e.currentTarget as HTMLElement).style.color = 'white';
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
                                    (e.currentTarget as HTMLElement).style.color = 'var(--white-70)';
                                }}
                            >
                                Baixar o Telegram
                            </a>
                        )}
                    </div>
                )}
            </div>

            {/* Rodapé */}
            <div className="relative z-10 mt-auto pt-12 text-[10px] uppercase tracking-[0.3em] text-[var(--white-20)] font-bold">
                &copy; {new Date().getFullYear()} — Maratona TDS · Trader Bruno Borges
            </div>

        </main>
    );
}
