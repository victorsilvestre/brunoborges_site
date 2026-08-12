"use client";

import { Calendar } from "lucide-react";
import { FadeIn } from "../../components/FadeIn";
import { LeadCaptureForm } from "../../components/LeadCaptureForm";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden py-14 bg-[var(--light-base)]">
            <style>{`
                @media (max-width: 1023px) {
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                        align-items: start !important;
                    }
                    .hero-col-text   { order: 1; padding-bottom: 0 !important; }
                    .hero-col-bruno  { display: none !important; }
                    .hero-tags       { display: none !important; }
                    .hero-col-form   { order: 2; padding-bottom: 0 !important; }
                }
            `}</style>
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full opacity-[0.07] blur-[120px]" style={{ background: 'var(--red-pure)' }}></div>
                <div className="absolute left-1/4 bottom-0 -z-10 h-[400px] w-[400px] rounded-full opacity-[0.05] blur-[100px]" style={{ background: 'var(--green-pure)' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div
                    className="grid hero-grid"
                    style={{
                        gridTemplateColumns: '1fr 480px 1fr',
                        alignItems: 'end',
                        gap: '24px',
                    }}
                >
                    {/* Coluna 1: Texto + Tags */}
                    <div className="hero-col-text" style={{ paddingBottom: '32px' }}>
                        {/* <FadeIn>
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border mb-5" style={{ borderColor: 'var(--red-border)', background: 'var(--red-border)', color: 'var(--red-pure)' }}>
                                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--red-pure)', boxShadow: '0 0 8px var(--red-dim)' }} />
                                <span className="text-xs font-bold tracking-widest uppercase">Evento Online Exclusivo</span>
                            </div>
                        </FadeIn> */}
                        <FadeIn delay={0.1}>
                            <h1 className="font-display font-black leading-[1.05] tracking-tight mb-4 text-[var(--dark-pure)]" style={{ fontSize: 'clamp(2.5rem, 3.2vw, 3.25rem)' }}>
                                Em apenas 3 aulas você vai aprender a {" "}
                                <span style={{ color: 'var(--green-dark)' }}>ler o gráfico do jeito que</span>
                                
                                <span style={{ color: 'var(--green-dark)' }}>traders profissionais </span>
                                fazem.
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-base text-[var(--dark-medium)] mb-5 leading-relaxed">
                                Na Maratona Trader de Sucesso, vou mostrar na prática o operacional de desenvolvi em 7 anos operando no mercado real. O mesmo método que eu uso todos os dias com mais de 1.400 alunos.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.25}>
                            <div className="flex flex-wrap items-center gap-3 hero-tags">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm border border-slate-200">
                                    <Calendar className="w-4 h-4" style={{ color: 'var(--red-pure)' }} />
                                    <span className="text-sm font-bold tracking-wider text-[var(--dark-pure)]">15, 16 e 17/09</span>
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm border border-slate-200">
                                    <span className="text-sm font-bold tracking-wider text-[var(--dark-pure)]">100% Online e Gratuito</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Coluna 2: Foto do Bruno */}
                    <div className="hero-col-bruno" style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', alignSelf: 'end', minHeight: '620px' }}>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%] w-[90%] h-[90%] -z-10" style={{ background: 'radial-gradient(ellipse at 60% 40%, #e8f5ee 0%, #f0faf4 60%, transparent 100%)', borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%' }} />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-16 rounded-full blur-[50px] -z-10" style={{ background: 'var(--green-dim)' }} />
                        <img
                            src="/images/bruno/img_bruno-corpo_transparente-tratada_v3.png"
                            alt="Bruno Borges"
                            className="relative z-10 w-full h-auto object-contain object-bottom select-none"
                            style={{ filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.12)) drop-shadow(0 4px 12px rgba(0,191,99,0.08))' }}
                        />
                    </div>

                    {/* Coluna 3: Formulário em card */}
                    <FadeIn delay={0.3} className="hero-col-form">
                        <div id="inscricao" style={{ paddingBottom: '32px' }}>
                            <div className="bg-white rounded-2xl border border-slate-100 p-8" style={{ boxShadow: '0 8px 40px -12px rgba(0,0,0,0.15)' }}>
                                <p className="text-xs font-bold tracking-widest uppercase text-[var(--dark-medium)] mb-1">Inscreva-se gratuitamente</p>
                                <p className="font-display font-black text-xl text-[var(--dark-pure)] mb-5 leading-snug">
                                    Aproveite os bônus e conteúdos exclusivos
                                </p>
                                <LeadCaptureForm
                                    source="maratona-set-2026"
                                    redirectTo="/maratona-grupo"
                                    buttonLabel="Quero Participar da 16ª Maratona TDS"
                                    variant="light"
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
