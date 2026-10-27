"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Award, Target, Gift } from "lucide-react";
import { FadeIn } from "../../components/FadeIn";
import Link from "next/link";

export function PortfolioMentorias() {
  return (
    <section
      id="mentorias"
      className="relative py-32 lg:py-40 bg-[var(--dark-base)] overflow-hidden border-t border-[var(--white-10)]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[var(--green-bull)]/8 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[var(--green-dark)]/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[var(--green-border)] bg-[var(--green-dim)] backdrop-blur-md mb-8">
              <Award className="w-4 h-4 text-[var(--green-bull)]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[var(--green-bull)]">
                Produtos
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase leading-[0.9] tracking-tighter text-white mb-8">
              Comece a aprender{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-dark)] to-[var(--green-bull)]">
                Hoje
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl lg:text-2xl text-[var(--white-40)] font-light leading-relaxed">
              Da Maratona gratuita à Mentoria completa: escolha por onde começar.
            </p>
          </FadeIn>
        </div>

        {/* Produtos Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {/* Card A: Maratona (gratuita) — superfície clara, porta de entrada */}
          <FadeIn delay={0.3} className="h-full">
            <motion.div
              whileHover={{ y: -12 }}
              className="group relative h-full flex flex-col bg-white border-2 border-[#BFEBD3] rounded-3xl p-8 overflow-hidden shadow-[0_24px_70px_rgba(0,191,99,0.28)] hover:shadow-[0_0_80px_rgba(0,191,99,0.5)] transition-all"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--green-bull)]/20 to-transparent rounded-bl-[100px]" />

              <div className="relative z-10 self-start inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E3F7EC] border border-[#9FDDBB] mb-6">
                <Gift className="w-4 h-4 text-[#007A40]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#007A40]">
                  100% Gratuito
                </span>
              </div>

              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="font-display font-black text-3xl lg:text-4xl uppercase leading-[1.05] lg:min-h-[3.15em] mb-4 text-[#06301B]">
                  <span className="text-[#009E52]">Maratona</span>{" "}
                  Trader de Sucesso
                </h3>

                <p className="text-base text-[#3F5A4B] mb-8 leading-relaxed lg:min-h-[4.9rem]">
                  Em 3 aulas online e gratuitas, aprenda a ler o gráfico como
                  traders profissionais e conheça o método na prática.
                </p>

                <ul className="space-y-3 mb-10">
                  {[
                    "3 aulas ao vivo, 100% online",
                    "Operacional direto no gráfico",
                    "Do zero ao operacional",
                    "Leitura de Price Action sem indicadores",
                    "Bônus e conteúdos exclusivos",
                    "Grupo exclusivo dos participantes",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#009E52] flex-shrink-0" />
                      <span className="text-[#0B3220] text-sm font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/maratona"
                  className="group/btn mt-auto w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#007A40] text-white font-display font-black uppercase tracking-wider hover:bg-[#006333] transition-all shadow-[0_10px_30px_rgba(0,122,64,0.3)]"
                >
                  Quero Participar
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </FadeIn>

          {/* Card B: Mentoria TDS — produto principal, verde da marca */}
          <FadeIn delay={0.4} className="h-full">
            <motion.div
              whileHover={{ y: -12 }}
              className="group relative h-full flex flex-col bg-gradient-to-b from-[#007F44] to-[#00552C] border-2 border-[#4FE39A]/50 rounded-3xl p-8 overflow-hidden shadow-[0_0_50px_rgba(0,191,99,0.25)] hover:shadow-[0_0_70px_rgba(0,191,99,0.45)] transition-all"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/15 to-transparent rounded-bl-[100px]" />

              <div className="relative z-10 self-start inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/40 mb-6">
                <Star
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                />
                <span className="text-xs font-bold tracking-widest uppercase text-white">
                  Produto Principal
                </span>
              </div>

              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="font-display font-black text-3xl lg:text-4xl uppercase leading-[1.05] lg:min-h-[3.15em] mb-4 text-white">
                  Mentoria Trader de Sucesso
                </h3>

                <p className="text-base text-white/90 mb-8 leading-relaxed lg:min-h-[4.9rem]">
                  O programa completo para você dominar Price Action,
                  gerenciamento de risco e os setups autorais do zero ao
                  profissional.
                </p>

                <ul className="space-y-3 mb-10">
                  {[
                    "Aulas ao vivo + gravadas",
                    "Todos os 10+ setups autorais",
                    "Comunidade exclusiva",
                    "Suporte direto comigo",
                    "+100h de conteúdo de valor",
                    "30 dias de Sala Educacional Ao Vivo",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                      <span className="text-white text-sm font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/mentoria"
                  className="group/btn mt-auto w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white text-[#00552C] font-display font-black uppercase tracking-wider hover:bg-[#E3F7EC] transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.35)]"
                >
                  Conheça a Mentoria
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </FadeIn>

          {/* Card C: Kit Scalp 40P — verde-lima/oliva da própria página do produto */}
          <FadeIn delay={0.5} className="h-full">
            <motion.div
              whileHover={{ y: -12 }}
              className="group relative h-full flex flex-col bg-gradient-to-br from-[#0B2417] to-[#050F09] border-2 border-[var(--green-bull)]/45 rounded-3xl p-8 overflow-hidden shadow-2xl hover:shadow-[0_0_60px_rgba(0,191,99,0.3)] transition-all"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--green-bull)]/20 to-transparent rounded-bl-[100px]" />

              <div className="relative z-10 self-start inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--green-dim)] border border-[var(--green-border)] mb-6">
                <Target className="w-4 h-4 text-[var(--green-bull)]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[var(--green-bull)]">
                  Estratégia Pronta
                </span>
              </div>

              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="font-display font-black text-3xl lg:text-4xl uppercase leading-[1.05] lg:min-h-[3.15em] mb-4 text-white">
                  Kit de Execução Scalp 40P
                </h3>

                <p className="text-base text-[#9DB8A8] mb-8 leading-relaxed lg:min-h-[4.9rem]">
                  Um processo passo a passo para aplicar a Estratégia Scalp 40P
                  no gráfico, com todas as ferramentas necessárias.
                </p>

                <ul className="space-y-3 mb-10">
                  {[
                    "Tela operacional pronta para o Profit",
                    "Guia de Execução 40P",
                    "Mapa de Decisão 40P",
                    "Checklist e Diário de Execução 40P",
                    "Vídeos bônus de explicação e uso",
                    "Ambiente organizado exclusivo",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--green-bull)] flex-shrink-0" />
                      <span className="text-[#DCEBE2] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/scalp40p"
                  className="group/btn mt-auto w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[var(--green-bull)] text-[#04210F] font-display font-black uppercase tracking-wider hover:bg-[#12D97A] transition-all shadow-[0_0_30px_rgba(0,191,99,0.25)] hover:shadow-[0_0_50px_rgba(0,191,99,0.45)]"
                >
                  Conheça o Kit
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </FadeIn>
        </div>

        {/* Bottom Note */}
        {/* <FadeIn delay={0.5}>
                    <div className="text-center mt-16">
                        <p className="text-lg text-[var(--white-40)] max-w-2xl mx-auto">
                            Comece pela <strong className="text-white font-semibold">Mentoria TDS</strong> e construa sua base sólida.
                            A mentoria individual é o próximo passo para traders que já dominam os fundamentos.
                        </p>
                    </div>
                </FadeIn> */}
      </div>
    </section>
  );
}
