import { CTAButton } from "./CTAButton";

export function FinalCTA() {
  return (
    <section className="relative py-16 md:py-24 bg-[#0C0D0E] border-t border-white/[0.06] overflow-hidden">
      {/* Grid sutil */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(191,234,36,1) 1px, transparent 1px), linear-gradient(90deg, rgba(191,234,36,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Glow central */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full opacity-[0.08] blur-[150px] pointer-events-none"
        style={{ background: "#BFEA24" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Tag */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-10" style={{ borderColor: "rgba(191,234,36,0.25)", background: "rgba(191,234,36,0.07)" }}>
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#BFEA24" }} />
                    <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "#BFEA24" }}>
                        Exclusivo · Família TDS
                    </span>
                </div> */}

        <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-[0.9] tracking-tighter text-white mb-4">
          Pare de assistir o mercado.
          <br />
          <span style={{ color: "#BFEA24" }}>Comece a dominar ele.</span>
        </h2>

        <p className="text-lg text-white/50 max-w-xl mx-auto mb-10 leading-snug">
          Você já conhece o Método Trader de Sucesso, que formou mais de 1.200
          alunos ao longo de 7 anos. Faltava apenas o ambiente certo para você evoluir ainda mais o seu operacional. 
          A Sala Educacional inicia no dia 21 de julho — e as vagas são limitadas.
        </p>

        <CTAButton
          label="Garantir Minha Vaga"
          className="mb-5"
          paddingClassName="py-3 px-3"
          textSizeClassName="text-sl"
          iconClassName="w-6 h-6 group-hover:translate-x-1 transition-transform"
        />

        <p className="text-[10px] text-white/20 uppercase tracking-[0.25em]">
          7 dias de garantia · R$ 229,90/mês · Cancele quando quiser
        </p>
      </div>
    </section>
  );
}
