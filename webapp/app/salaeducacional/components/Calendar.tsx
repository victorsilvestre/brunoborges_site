import { CTAButton } from "./CTAButton";

export function Calendar() {
  return (
    <section
      className="py-16 md:py-24 border-t border-white/[0.06]"
      style={{ background: "#1B2520" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block text-white/40">
              Data de início
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-[0.9] tracking-tighter text-white mb-4">
              A Sala começa no dia
              <span style={{ color: "#BFEA24" }}> 21 de julho.</span>
            </h2>
            <p className="text-white/50 text-lg leading-snug">
              Quem quer começar desde o primeiro dia precisa garantir a
              inscrição antes do início. A Sala Educacional será um produto
              contínuo e poderá ser assinada depois, sem problemas. Mas entrar
              agora significa participar desde o primeiro dia, acompanhar as
              primeiras aulas ao vivo e começar a evoluir junto com o grupo
              desde a largada.
            </p>
          </div>

          {/* Timeline + CTA */}
          <div className="space-y-4">
            <div
              className="rounded-2xl p-6 border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-5 block">
                Calendário
              </span>
              <div className="space-y-0">
                <div className="flex items-start gap-4 pb-6">
                  <div className="flex flex-col items-center pt-1">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: "#BFEA24" }}
                    />
                    <span className="w-px h-8 bg-white/10 mt-1 block" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-lg text-white">
                      Inscrições abertas
                    </p>
                    <p className="text-sm text-white/40 mt-0.5">
                      Garanta sua vaga agora
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1"
                    style={{ background: "rgba(191,234,36,0.4)" }}
                  />
                  <div>
                    <p className="font-display font-bold text-lg text-white">
                      21 de Julho
                    </p>
                    <p className="text-sm text-white/40 mt-0.5">
                      Primeiro dia ao vivo — Início às 8h45
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <CTAButton
              label="Garantir Minha Vaga"
              className="justify-center w-full"
              textSizeClassName="text-base"
              hoverScaleClassName="hover:scale-[1.02]"
              roundedClassName="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
