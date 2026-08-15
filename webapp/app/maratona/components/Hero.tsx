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
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <style>{`
                .hero-section { background-image: url(/images/hero/img_hero_v2.png); }
                .hero-mobile-image { display: none; }
                @media (max-width: 767px) {
                    .hero-section {
                        min-height: auto !important;
                        background-image: none !important;
                        background-color: var(--dark-pure) !important;
                        padding-top: 0 !important;
                        display: block !important;
                    }
                    .hero-mobile-image {
                        display: block !important;
                        width: 100% !important;
                        height: 380px !important;
                        background-image: url(/images/hero/img_hero_v2.png) !important;
                        background-position: top right !important;
                        background-size: 220% auto !important;
                    }
                    .hero-overlay { display: none !important; }
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                        align-items: start !important;
                    }
                    .hero-col-text   { padding-bottom: 0 !important; }
                    .hero-col-form   { padding-bottom: 0 !important; }
                    .hero-content    { padding-top: 32px !important; padding-bottom: 40px !important; }
                }
            `}</style>

            {/* Imagem do Bruno no topo (somente mobile) */}
            <div className="hero-mobile-image" />

            {/* Overlay de contraste (rede de segurança para o texto) */}
            <div
                className="absolute inset-0 z-0 hero-overlay"
                style={{
                    background: 'linear-gradient(90deg, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.25) 45%, rgba(15,23,42,0) 65%)',
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
