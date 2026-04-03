"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Award, Lock } from "lucide-react";
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
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[var(--red-bear)]/6 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[var(--green-border)] bg-[var(--green-dim)] backdrop-blur-md mb-8">
              <Award className="w-4 h-4 text-[var(--green-bull)]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[var(--green-bull)]">
                Aprendizado
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
              Comece pela mentoria em grupo e evolua seu aprendizado.
            </p>
          </FadeIn>
        </div>

        {/* Mentorias Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Card A: Mentoria TDS */}
          <FadeIn delay={0.3}>
            <motion.div
              whileHover={{ y: -12 }}
              className="group relative bg-gradient-to-br from-[var(--dark-elevated)] to-[var(--dark-surface)] border-2 border-[var(--green-bull)]/40 rounded-3xl p-8 overflow-hidden shadow-2xl hover:shadow-[0_0_60px_rgba(0,191,99,0.3)] transition-all"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-bull)]/10 via-transparent to-transparent opacity-50" />

              {/* Badge */}
              <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--green-bull)]/20 border border-[var(--green-bull)]/40 mb-6">
                <Star
                  className="w-4 h-4 text-[var(--green-bull)]"
                  fill="currentColor"
                />
                <span className="text-xs font-bold tracking-widest uppercase text-[var(--green-bull)]">
                  Produto Principal
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="font-display font-black text-3xl lg:text-4xl uppercase text-white mb-4">
                  Mentoria Trader de Sucesso
                </h3>

                <p className="text-base text-[var(--white-60)] mb-8 leading-relaxed">
                  O programa completo para você dominar Price Action,
                  gerenciamento de risco e os setups autorais do zero ao
                  profissional.
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-10">
                  {[
                    "Aulas ao vivo + gravadas",
                    "Todos os 10+ setups autorais",
                    "Comunidade exclusiva",
                    "Suporte direto comigo",
                    "+100h de conteúdo de valor",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--green-bull)] flex-shrink-0" />
                      <span className="text-[var(--white-80)] text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/mentoria-tds"
                  className="group/btn w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[var(--green-bull)] text-white font-display font-black uppercase tracking-wider hover:bg-[var(--green-dark)] transition-all shadow-[0_0_30px_rgba(0,191,99,0.3)] hover:shadow-[0_0_50px_rgba(0,191,99,0.5)]"
                >
                  Conhecer a Mentoria Trader de Sucesso
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--green-bull)]/20 to-transparent rounded-bl-[100px]" />
            </motion.div>
          </FadeIn>

          {/* Card B: Intensivão */}
          <FadeIn delay={0.4}>
            <motion.div
              whileHover={{ y: -12 }}
              className="group relative bg-gradient-to-br from-[var(--dark-elevated)] to-[var(--dark-surface)] border-2 border-[var(--red-bear)]/30 rounded-3xl p-8 overflow-hidden shadow-2xl hover:shadow-[0_0_60px_rgba(241,20,20,0.2)] transition-all"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--red-bear)]/8 via-transparent to-transparent opacity-50" />

              {/* Badge */}
              <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--red-dim)] border border-[var(--red-border)] mb-6">
                <Lock className="w-4 h-4 text-[var(--red-bear)]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[var(--red-bear)]">
                  Exclusivo Ex-Alunos TDS
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="font-display font-black text-3xl lg:text-4xl uppercase text-white mb-4">
                  Intensivão Trader de Sucesso
                </h3>

                <p className="text-base text-[var(--white-60)] mb-8 leading-relaxed">
                  Imersões de 4 a 6 horas em aspectos específicos do
                  operacional. Divulgados com antecedência na comunidade.
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-10">
                  {[
                    "Duração de 4h a 6h por sessão",
                    "Temas específicos do operacional",
                    "Conteúdo aprofundado e focado",
                    "Gravação disponível após o evento",
                    "Operacional aplicado na prática",
                    "Melhore suas operações",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--red-bear)] flex-shrink-0" />
                      <span className="text-[var(--white-80)] text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/mentoria-tds"
                  className="group/btn w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[var(--red-bear)] text-white font-display font-black uppercase tracking-wider hover:bg-[var(--red-hover)] transition-all shadow-[0_0_30px_rgba(241,20,20,0.2)] hover:shadow-[0_0_50px_rgba(241,20,20,0.35)]"
                >
                  Ver Próximos Intensivões
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>

                {/* Requirement Note */}
                {/* <div className="mt-6 p-4 rounded-xl bg-[var(--slate-tech)]/5 border border-[var(--slate-tech)]/20">
                  <p className="text-sm text-[var(--slate-tech)] text-center">
                    <Lock className="w-4 h-4 inline mr-2" />
                    <strong>Requisito:</strong> Ser aluno ativo da Mentoria TDS
                  </p>
                </div> */}
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--red-bear)]/15 to-transparent rounded-bl-[100px]" />
            </motion.div>
          </FadeIn>

          {/* Card C: Mentoria Individual */}
          <FadeIn delay={0.5}>
            <motion.div
              whileHover={{ y: -12 }}
              className="group relative bg-gradient-to-br from-black via-[var(--dark-elevated)] to-black border-2 border-[var(--green-bull)]/50 rounded-3xl p-8 overflow-hidden shadow-2xl hover:shadow-[0_0_60px_rgba(0,191,99,0.3)] transition-all"
            >
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-bull)]/10 via-transparent to-transparent" />

              {/* Exclusive Badge */}
              <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--green-bull)] mb-6">
                <Lock className="w-4 h-4 text-white" />
                <span className="text-xs font-bold tracking-widest uppercase text-white">
                  Exclusivo Ex-Alunos TDS
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="font-display font-black text-3xl lg:text-4xl uppercase mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-dark)] to-[var(--green-bull)]">
                    Mentoria
                  </span>
                  <br />
                  <span className="text-white">Individual</span>
                </h3>

                <p className="text-base text-[var(--white-60)] mb-8 leading-relaxed">
                  Acompanhamento personalizado 1:1 para quem já passou pela
                  Mentoria TDS e quer levar suas operações ao próximo nível.
                </p>

                {/* Exclusive Features */}
                <ul className="space-y-3 mb-10">
                  {[
                    "Sessões 1:1 com o Bruno",
                    "Análise personalizada de trades",
                    "Estratégias avançadas exclusivas",
                    "Acesso prioritário a novos conteúdos",
                    "Suporte exclusivo via Telegram",
                    "Acompanhamento de performance",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--green-bull)] flex-shrink-0" />
                      <span className="text-[var(--white-80)] text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Premium CTA */}
                <div className="relative">
                  <div className="absolute inset-0 bg-[var(--green-bull)] rounded-xl blur-xl opacity-30" />
                  <a
                    href="https://t.me/+MSL99oO7pmcyMWQx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[var(--green-bull)] text-white font-display font-black uppercase tracking-wider hover:bg-[var(--green-dark)] transition-all shadow-[0_0_30px_rgba(0,191,99,0.3)] hover:shadow-[0_0_50px_rgba(0,191,99,0.5)]"
                  >
                    Solicitar Acesso
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Requirement Note */}
                {/* <div className="mt-6 p-4 rounded-xl bg-[var(--gold-premium)]/5 border border-[var(--gold-premium)]/20">
                  <p className="text-sm text-[var(--gold-premium)] text-center">
                    <Lock className="w-4 h-4 inline mr-2" />
                    <strong>Requisito:</strong> Ter concluído a Mentoria TDS
                  </p>
                </div> */}
              </div>

              {/* Premium Corner Decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[var(--green-bull)]/20 to-transparent rounded-bl-[120px]" />

              {/* Animated Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="absolute -top-20 -right-20 w-64 h-64 border-2 border-dashed border-[var(--green-bull)]/10 rounded-full"
              />
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
