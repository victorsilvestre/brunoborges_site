"use client";

import { FadeIn } from "../../components/FadeIn";
import { ShieldCheck } from "lucide-react";

export function Waitlist() {
  return (
    <section
      id="garantia"
      className="relative py-16 md:py-24 bg-[var(--light-surface)] overflow-hidden border-y border-slate-200"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--green-bull)]/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Texto */}
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--green-bull)]/20 bg-[var(--green-bull)]/5 mb-8">
                <ShieldCheck className="w-4 h-4 text-[var(--green-bull)]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[var(--dark-pure)]">
                  Sem risco para você
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-display font-black text-5xl md:text-6xl uppercase leading-[0.9] tracking-tighter mb-6 text-[var(--dark-pure)]">
                Garantia Exclusiva
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-5 max-w-md">
                <p className="text-lg text-[var(--dark-medium)] leading-snug">
                  Ao entrar para a Mentoria TDS,
                  você terá <strong className="text-[var(--dark-pure)] font-bold">15 dias completos</strong> para
                  conhecer o método por dentro, assistir às primeiras aulas,
                  participar dos encontros ao vivo e entender como funciona a
                  nossa metodologia na prática.
                </p>
                <p className="text-lg text-[var(--dark-medium)] leading-snug">
                  <strong className="text-[var(--dark-pure)] font-bold">Queremos que sua decisão seja baseada em experiência, não em promessa</strong>.
                  Por isso, você pode explorar o conteúdo, tirar suas
                  dúvidas e avaliar com tranquilidade se a Mentoria TDS faz
                  sentido para o seu momento.
                </p>
                <p className="text-lg text-[var(--dark-medium)] leading-snug">
                  Se dentro desse período você concluir que não é para você,{" "}
                  <strong className="text-[var(--dark-pure)] font-bold">basta solicitar o reembolso</strong> e devolveremos 100% do valor investido.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Card de garantia */}
          <FadeIn delay={0.3} direction="left">
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl relative overflow-hidden p-8 sm:p-10 flex flex-col items-center text-center">
              {/* Accent top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--green-dark)] to-[var(--green-bull)]/20" />

              {/* Ícone de escudo */}
              <div className="w-20 h-20 rounded-full bg-[var(--green-bull)]/10 border border-[var(--green-bull)]/20 flex items-center justify-center mb-6">
                <ShieldCheck className="w-10 h-10 text-[var(--green-bull)]" />
              </div>

              <div className="font-display font-black text-6xl md:text-7xl text-[var(--green-bull)] leading-none mb-2">
                15
              </div>
              <div className="font-display font-black text-xl uppercase tracking-widest text-[var(--dark-pure)] mb-6">
                dias de garantia
              </div>

              <p className="text-[var(--dark-medium)] text-sm leading-relaxed mb-6 max-w-xs">
                Compre com total segurança. Se não for para você, devolvemos
                cada centavo investido.
              </p>

              <div className="w-full border-t border-slate-100 pt-6 flex flex-col gap-3">
                {[
                  "Reembolso integral garantido",
                  "Sem perguntas ou burocracia",
                  "O risco é nosso, a decisão é sua",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-left">
                    <span className="w-5 h-5 rounded-full bg-[var(--green-bull)]/10 border border-[var(--green-bull)]/30 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-3 h-3 text-[var(--green-bull)]" />
                    </span>
                    <span className="text-sm font-medium text-[var(--dark-pure)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
