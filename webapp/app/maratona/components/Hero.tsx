"use client";

import { Calendar } from "lucide-react";
import { FadeIn } from "../../components/FadeIn";
import { LeadCaptureForm } from "../../components/LeadCaptureForm";

export function Hero() {
    return (
        <section
            className="relative flex items-center overflow-hidden hero-section"
            style={{
                minHeight: '760px',
                backgroundColor: 'var(--dark-pure)',
                backgroundImage: 'url(/images/hero/img_hero_v2.png)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <style>{`
                .hero-mobile-bg { display: none; }
                @media (max-width: 767px) {
                    .hero-section {
                        min-height: 0 !important;
                        align-items: flex-end !important;
                        background-image: none !important;
                    }
                    .hero-mobile-bg {
                        display: block !important;
                        position: absolute !important;
                        top: 0 !important;
                        left: 0 !important;
                        right: 0 !important;
                        height: 780px !important;
                        background-image: url(/images/hero/img_hero_mobile_v2.png) !important;
                        background-position: top center !important;
                        background-size: cover !important;
                        z-index: 0 !important;
                    }
                    .hero-overlay-desktop { display: none !important; }
                    .hero-overlay-mobile {
                        display: block !important;
                        height: 780px !important;
                        bottom: auto !important;
                    }
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                        align-items: start !important;
                    }
                    .hero-col-text   { padding-bottom: 0 !important; }
                    .hero-col-form   { padding-bottom: 0 !important; }
                    .hero-content    { padding-top:420px !important; padding-bottom: 25px !important; }
                }
            `}</style>

            {/* Imagem de fundo mobile (altura fixa, independente do conteúdo) */}
            <div className="hero-mobile-bg" />

            {/* Overlay de contraste desktop (esquerda mais escura) */}
            <div
                className="absolute inset-0 z-0 hero-overlay-desktop"
                style={{
                    background: 'linear-gradient(90deg, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.25) 45%, rgba(15,23,42,0) 65%)',
                }}
            />

            {/* Overlay de contraste mobile (base mais escura, para o texto e formulário) */}
            <div
                className="absolute inset-x-0 top-0 z-0 hero-overlay-mobile"
                style={{
                    display: 'none',
                    background: 'linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,0.35) 45%, rgba(15,23,42,0.92) 68%, rgba(15,23,42,0.98) 100%)',
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-14 hero-content">
                <div
                    className="grid hero-grid"
                    style={{
                        gridTemplateColumns: 'minmax(0, 560px) 1fr',
                        alignItems: 'center',
                        gap: '24px',
                    }}
                >
                    {/* Coluna 1: Texto + Tags */}
                    <div className="hero-col-text">
                        <FadeIn delay={0.1}>
                            <h1 className="font-display font-black leading-[1.05] tracking-tight mb-4 text-white" style={{ fontSize: 'clamp(2.5rem, 3.2vw, 3.25rem)' }}>
                                Em apenas 3 aulas você vai aprender a {" "}
                                <span style={{ color: 'var(--red-pure)' }}>ler o gráfico do jeito que </span>
                                <span style={{ color: 'var(--red-pure)' }}>traders profissionais </span>
                                fazem.
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-base text-white/70 mb-5 leading-relaxed">
                                Na Maratona Trader de Sucesso, vou mostrar na prática o operacional de desenvolvi em 7 anos operando no mercado real. O mesmo método que eu uso todos os dias com mais de 1.400 alunos.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.25}>
                            <div className="flex flex-wrap items-center gap-3 hero-tags mb-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm">
                                    <Calendar className="w-4 h-4" style={{ color: 'var(--red-pure)' }} />
                                    <span className="text-sm font-bold tracking-wider text-white">15, 16 e 17/09</span>
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm">
                                    <span className="text-sm font-bold tracking-wider text-white">100% Online e Gratuito</span>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Formulário */}
                        <FadeIn delay={0.3}>
                            <div id="inscricao">
                                <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-1">Inscreva-se gratuitamente</p>
                                <p className="font-display font-black text-xl text-white mb-5 leading-snug">
                                    Aproveite os bônus e conteúdos exclusivos
                                </p>
                                <LeadCaptureForm
                                    source="maratona-set-2026"
                                    redirectTo="/maratona-grupo"
                                    buttonLabel="Quero Participar da 16ª Maratona TDS"
                                    variant="dark"
                                />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Coluna 2: vazia — o Bruno já faz parte da imagem de fundo */}
                    <div aria-hidden="true" />
                </div>
            </div>
        </section>
    );
}
