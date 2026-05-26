"use client";

import { FadeIn } from "../../components/FadeIn";
import { LineChart, BookOpen, TrendingUp } from "lucide-react";

export function AboutEvent() {
    return (
        <section id="about" className="py-24 bg-[var(--dark-pure)] relative overflow-hidden border-b border-[var(--white-10)]">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            {/* Glowing Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none" style={{ background: 'var(--green-dim)' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <FadeIn>
                        <h2 className="text-[var(--white-20)] font-bold text-sm tracking-[0.2em] uppercase mb-4">
                            Sobre o evento
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h3 className="font-display font-black text-5xl md:text-6xl text-white uppercase leading-[0.95] tracking-tighter mb-6">
                            O gráfico conversa com a gente.<br/>
                            <span className="text-[var(--green-bull)]">Mas você precisa entender.</span>
                        </h3>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-base text-[var(--white-60)] font-light leading-relaxed max-w-2xl mx-auto">
                            Durante 3 dias, eu vou ensinar para você um método operacional extremamente simples e mostrar na prática o que observo antes de entrar nas operações ao vivo.
                            <br />
                            <br />
                            Você vai aprender comigo a ler o movimento do preço, entender o que o mercado está fazendo e, principalmente, identificar as melhores oportunidades para operar consistentemente tirar dinheiro do mercado.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <FadeIn delay={0.3}>
                        <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                            <LineChart className="w-10 h-10 text-[var(--green-bull)] mb-6" />
                            <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">Do zero ao operacional</h3>
                            <p className="text-[var(--white-60)] leading-relaxed text-lg">
                                Não importa se você está começando agora ou já opera há anos. O conteúdo da Maratona foi pensado para quem quer parar de apanhar do mercado e começar a entender ele de verdade.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                            <BookOpen className="w-10 h-10 mb-6" style={{ color: 'var(--green-bull)' }} />
                            <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">Direto no gráfico</h3>
                            <p className="text-[var(--white-60)] leading-relaxed text-lg">
                                Eu vou ensinar você a ler o mercado e iremos realizar diversas operações juntos. Você poderá acompanhar tudo da sua tela. As oportunidades, o preço de entrada, o lugar do stop, onde é o alvo, e o pensamento de um trader consistente para cada situação que o mercado fizer. 
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
