import { CTAButton } from "./CTAButton";

export function ApplicationConfidence() {
  return (
    <section className="py-16 md:py-24 bg-[#0C0D0E] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Título */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block text-white/30">
            Aplicação prática
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-[0.9] tracking-tighter text-white mb-4">
            Você não trava por falta de técnica.
            <br />
            <span style={{ color: "#BFEA24" }}>Trava por falta de prática</span>
            <span className="text-white/30"> ao vivo.</span>
          </h2>
          <p className="text-white/50 text-lg leading-snug mt-6">
            Todo trader que já fez a Mentoria Trader de Sucesso conhece o
            Método. Mas tem uma coisa que nenhuma aula gravada substitui: o
            mercado aberto na sua frente, o relógio correndo, e a decisão
            precisando ser tomada agora. É exatamente aí que a Sala Educacional
            vai ajudar você.
          </p>
        </div>

        {/* Grid de dados + copy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Número destaque */}
          <div
            className="md:col-span-2 rounded-3xl p-8 md:p-10 border flex items-center gap-8 flex-wrap"
            style={{
              background: "rgba(191,234,36,0.06)",
              borderColor: "rgba(191,234,36,0.15)",
            }}
          >
            <span
              className="font-display font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(64px,12vw,100px)", color: "#BFEA24" }}
            >
              96,6%
            </span>
            <div>
              <p className="text-white font-bold text-xl mb-1">
                conseguiram aplicar ao vivo
              </p>
              <p className="text-white/40 text-sm">
                dos participantes aplicaram os ensinamentos do Método TDS em
                tempo real na Sala Educacional
              </p>
            </div>
          </div>

          {/* Sub */}
          <div
            className="rounded-3xl p-6 border flex flex-col justify-center gap-4"
            style={{
              background: "#111312",
              borderColor: "rgba(255,255,255,0.07)",
            }}
          >
            <div>
              <span
                className="font-display font-black text-4xl leading-none"
                style={{ color: "#BFEA24" }}
              >
                78,7%
              </span>
              <p className="text-sm text-white/50 mt-1">
                com <strong className="text-white">tranquilidade</strong>
              </p>
            </div>
            <div className="h-px w-full bg-white/10" />
            <div>
              <span className="font-display font-black text-3xl leading-none text-white/30">
                17,8%
              </span>
              <p className="text-sm text-white/40 mt-1">
                com dificuldade —{" "}
                <span className="text-white/50">mas aplicando</span>
              </p>
            </div>
          </div>
        </div>

        {/* Quotes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              text: "Mesmo tendo feito a mentoria, ainda tinha dificuldade por falta de confiança. Com a Sala Educacional, venho conseguindo realizar as operações na hora certa.",
              author: "Elizandro",
            },
            {
              text: "Me deu plena confiança de ir com uma operação até o alvo. A minha maior dificuldade era no comportamento — acreditar que vai até o alvo.",
              author: "Mariluna",
            },
          ].map((q, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-6 border"
              style={{
                background: "#111312",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <span
                className="absolute top-4 left-5 font-serif text-3xl leading-none select-none"
                style={{ color: "#BFEA24", opacity: 0.35 }}
              >
                "
              </span>
              <p className="text-sm text-white/60 italic leading-snug pt-5">
                {q.text}
              </p>
              <span
                className="text-xs font-bold tracking-wide mt-3 block"
                style={{ color: "#BFEA24" }}
              >
                — {q.author}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton label="Quero praticar ao vivo" />
        </div>
      </div>
    </section>
  );
}
