"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { FadeIn } from "../../components/FadeIn";

export function Hero() {
    return (
        <section className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden py-14 lg:py-0 bg-[var(--light-base)]">
            {/* Light Background Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full opacity-[0.07] blur-[120px]" style={{ background: 'var(--red-pure)' }}></div>
                <div className="absolute left-1/4 bottom-0 -z-10 h-[400px] w-[400px] rounded-full opacity-[0.05] blur-[100px]" style={{ background: 'var(--green-pure)' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-10">
                <div className="grid lg:grid-cols-2 gap-12 items-end">
                    {/* Left Column: Text */}
                    <div className="max-w-xl pb-0">
                        <FadeIn>
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border mb-5" style={{ borderColor: 'var(--red-border)', background: 'var(--red-border)', color: 'var(--red-pure)' }}>
                                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--red-pure)', boxShadow: '0 0 8px var(--red-dim)' }} />
                                <span className="text-xs font-bold tracking-widest uppercase">Evento Online Exclusivo</span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-tight mb-4 text-[var(--dark-pure)]">
                                Pare de operar<br />
                                <span className="text-[var(--dark-pure)]">no escuro.</span>{" "}
                                <span style={{ color: 'var(--green-dark)' }}>Entenda o gráfico e melhore seus resultados.</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="text-base md:text-lg text-[var(--dark-medium)] mb-5 leading-relaxed max-w-[440px]">
                                Entre no grupo exclusivo da Maratona Trader de Sucesso e conheça o método que eu utilizo todos os dias para operar com os meus alunos e sair positivo no mercado.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.25}>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm border border-slate-200">
                                    <Calendar className="w-4 h-4" style={{ color: 'var(--red-pure)' }} />
                                    <span className="text-sm font-bold tracking-wider text-[var(--dark-pure)]">22, 23 e 25/06</span>
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm border border-slate-200">
                                    <span className="text-sm font-bold tracking-wider text-[var(--dark-pure)]">100% Online e Gratuito</span>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-6 items-center">
                                <a href="/maratona-grupo" className="text-white py-3 px-7 text-base w-full sm:w-auto flex items-center justify-center rounded-xl transition-all hover:-translate-y-1" style={{ background: 'var(--green-pure)', boxShadow: '0 8px 20px var(--green-dim)' }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--green-dark)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--glow-green)'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--green-pure)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 20px var(--green-dim)'; }}>
                                    <span className="font-bold">Entrar no Grupo Exclusivo da Maratona</span>
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </a>

                                {/* Social Proof block similar to reference 
                                <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                                    <div className="flex -space-x-2">
                                        <img src="https://i.pravatar.cc/100?img=1" alt="Alunos" className="w-9 h-9 rounded-full border-2 border-white shadow-sm" />
                                        <img src="https://i.pravatar.cc/100?img=12" alt="Alunos" className="w-9 h-9 rounded-full border-2 border-white shadow-sm" />
                                        <img src="https://i.pravatar.cc/100?img=33" alt="Alunos" className="w-9 h-9 rounded-full border-2 border-white shadow-sm" />
                                    </div>
                                    <div className="flex flex-col items-start leading-tight">
                                        <div className="flex items-center text-yellow-400 text-sm">
                                            {"★".repeat(5)} <span className="text-[var(--dark-pure)] font-bold ml-1 text-base">5.0</span>
                                        </div>
                                        <span className="text-xs font-medium text-[var(--dark-medium)]">(+1,2k alunos)</span>
                                    </div>
                                </div>*/}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column: Bruno */}
                    <div className="relative mt-16 lg:mt-0 flex items-end justify-center">
                        {/* Blob orgânico de fundo — só desktop */}
                        <div
                            className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%] w-[90%] h-[90%] -z-10"
                            style={{
                                background: 'radial-gradient(ellipse at 60% 40%, #e8f5ee 0%, #f0faf4 60%, transparent 100%)',
                                borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
                            }}
                        />

                        {/* Glow verde suave de chão — só desktop */}
                        <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-20 rounded-full blur-[60px] -z-10" style={{ background: 'var(--green-dim)' }} />

                        {/* Foto do Bruno */}
                        <div className="relative w-full max-w-[520px]">
                            <img
                                src="/images/bruno/img_bruno-corpo_transparente-tratada.png"
                                alt="Bruno Borges"
                                className="relative z-10 w-full h-auto object-contain object-bottom select-none"
                                style={{ filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.12)) drop-shadow(0 4px 12px rgba(0,191,99,0.08))' }}
                            />
                        </div>

                        {/* Badge flutuante — autoridade, lado esquerdo (só desktop) */}
                        <div className="hidden lg:block absolute left-0 lg:-left-4 top-[15%] z-20 bg-white rounded-2xl shadow-[0_12px_30px_-8px_rgba(0,0,0,0.12)] border border-slate-100 p-4 w-44">
                            <p className="text-[10px] font-bold tracking-widest uppercase text-[var(--dark-medium)] mb-1">Trader profissional</p>
                            <p className="font-display font-black text-2xl text-[var(--dark-pure)] leading-none">+7 anos</p>
                            <p className="text-[10px] text-[var(--dark-medium)] mt-1">operando no mercado real</p>
                        </div>

                        {/* Badge flutuante — social proof, lado direito (só desktop) */}
                        <div className="hidden lg:block absolute right-0 lg:-right-4 bottom-[18%] z-20 bg-white rounded-2xl shadow-[0_12px_30px_-8px_rgba(0,0,0,0.12)] border border-slate-100 p-4 w-44">
                            <div className="flex items-center gap-1 text-yellow-400 text-sm mb-1">{"★★★★★"}</div>
                            <p className="font-display font-black text-2xl text-[var(--dark-pure)] leading-none">+1,2k</p>
                            <p className="text-[10px] text-[var(--dark-medium)] mt-1">traders formados</p>
                        </div>
                    </div>

                </div>

                {/* Stats inline — só mobile, fora do grid */}
                <div className="hidden max-lg:flex justify-center gap-6 py-4 border-t border-slate-200 bg-[#f0faf4] rounded-b-2xl">
                    <div className="text-center">
                        <p className="text-[10px] font-bold tracking-widest uppercase text-[var(--dark-medium)]">Trader profissional</p>
                        <p className="font-display font-black text-xl text-[var(--dark-pure)] leading-none">+7 anos</p>
                        <p className="text-[10px] text-[var(--dark-medium)] mt-0.5">no mercado real</p>
                    </div>
                    <div className="w-px bg-slate-200" />
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-0.5 text-yellow-400 text-xs mb-0.5">{"★★★★★"}</div>
                        <p className="font-display font-black text-xl text-[var(--dark-pure)] leading-none">+1,2k</p>
                        <p className="text-[10px] text-[var(--dark-medium)] mt-0.5">traders formados</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

