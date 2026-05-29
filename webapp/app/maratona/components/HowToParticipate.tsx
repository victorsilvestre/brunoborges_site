"use client";

import { FadeIn } from "../../components/FadeIn";
import { ArrowRight, MousePointerClick, Users, Play, Gift } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: MousePointerClick,
        title: "Clique no botão abaixo",
        description: "Um clique — sem formulário ou qualquer cadastro complicado que levaria horas.",
    },
    {
        number: "02",
        icon: Users,
        title: "Entre no grupo exclusivo",
        description: "Você é direcionado direto para o grupo exclusivo da Maratona no Telegram.",
    },
    {
        number: "03",
        icon: Play,
        title: "Participe da Maratona",
        description: "Interaja, participe, pergunte e aproveite! Esse grupo também é seu e será um prazer ter você com a gente.",
    },
    {
        number: "04",
        icon: Gift,
        title: "Tenha acesso aos bônus",
        description: "Link das gravações, resumões exclusivos, sorteio de vaga pra mentoria e conteúdos extras liberados antes, durante e após o evento.",
    },
];

export function HowToParticipate() {
    return (
        <section className="py-24 bg-[var(--dark-base)] relative overflow-hidden border-b border-[var(--white-10)]">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[var(--white-30)] block mb-4">
                            É simples assim
                        </span>
                        <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.9] tracking-tighter">
                            Como <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, var(--green-pure), var(--green-dark))' }}>Participar?</span>
                        </h2>
                    </div>
                </FadeIn>

                {/* Passos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        const isLast = i === steps.length - 1;
                        return (
                            <FadeIn key={i} delay={0.1 + i * 0.1}>
                                <div className="relative flex flex-col items-start p-6 rounded-2xl border border-white/10 bg-white/5 h-full">
                                    {/* Número de fundo decorativo */}
                                    <span className="absolute top-4 right-5 font-display font-black text-5xl text-white/5 select-none leading-none">
                                        {step.number}
                                    </span>

                                    {/* Ícone */}
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0"
                                        style={{ background: 'var(--green-dim)', border: '1px solid var(--green-border)' }}
                                    >
                                        <Icon className="w-6 h-6" style={{ color: 'var(--green-pure)' }} />
                                    </div>

                                    <h3 className="font-display font-bold text-base text-white uppercase tracking-wide leading-tight mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-[var(--white-60)] text-sm font-light leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Seta conectora — esconder no último */}
                                    {!isLast && (
                                        <ArrowRight
                                            className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 z-10"
                                            style={{ color: 'var(--green-pure)' }}
                                        />
                                    )}
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>

                <FadeIn delay={0.5}>
                    <div className="flex justify-center">
                        <a
                            href="/maratona-grupo"
                            className="btn text-white group relative overflow-hidden py-5 px-10 text-lg sm:w-auto flex items-center justify-center rounded-sm transition-all"
                            style={{ background: 'var(--green-pure)', boxShadow: '0 0 30px var(--green-dim)' }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--green-dark)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--glow-green)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--green-pure)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px var(--green-dim)'; }}
                        >
                            <span className="relative z-10 flex items-center gap-3 font-display font-bold uppercase tracking-wider">
                                Quero Participar e receber os bônus! <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
