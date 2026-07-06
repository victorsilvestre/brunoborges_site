export function NPS() {
  const scores = [
    { value: "9.79", label: "Satisfação geral" },
    { value: "9.90", label: "Recomendaria para um amigo" },
    { value: "9.78", label: "Nível das explicações" },
    { value: "9.78", label: "Análises ao vivo" },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0C0D0E] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Título impactante */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block text-white/30">
            Resultado do projeto piloto
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-[0.9] tracking-tighter text-white mb-4">
            Alunos que testaram
            <br />
            <span style={{ color: "#BFEA24" }}>não querem parar.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-lg mx-auto mt-4">
            Antes de lançar, a Sala passou por um projeto piloto com alunos da
            Mentoria Trader de Sucesso. Os números abaixo são reais — e falam por si.
          </p>
        </div>

        {/* Scores */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {scores.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 text-center border transition-all duration-300 hover:border-[#BFEA24]/30"
              style={{
                background: "#111312",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="font-display font-black text-5xl md:text-6xl leading-none tracking-tighter mb-2"
                style={{ color: "#BFEA24" }}
              >
                {s.value}
              </div>
              <p className="text-xs text-white/40 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Número de impacto */}
        <div
          className="rounded-3xl p-8 md:p-12 text-center border mb-8"
          style={{
            background: "rgba(191,234,36,0.06)",
            borderColor: "rgba(191,234,36,0.15)",
          }}
        >
          <div
            className="font-display font-black leading-none tracking-tighter mb-3"
            style={{ fontSize: "clamp(72px,14vw,140px)", color: "#BFEA24" }}
          >
            96,6%
          </div>
          <p className="text-white font-bold text-xl md:text-2xl mb-2">
            dos participantes do piloto querem assinar mensalmente
          </p>
          <p className="text-white/40 text-sm max-w-md mx-auto">
            "Minha assinatura já seria anual, sem saber nem o valor." — Felipe
          </p>
        </div>

        {/* Quotes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              text: 'A sala ao vivo funciona como um "estágio" — o curso foi a formação e na sala temos a oportunidade de aplicar o conhecimento de forma supervisionada.',
              author: "Kelcardosojh",
            },
            {
              text: "A sala é de grande importância para nós alunos — o que aprendemos na mentoria é extremamente mostrado ao vivo, sem enganação.",
              author: "Fagnner",
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
                style={{ color: "#BFEA24", opacity: 0.4 }}
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
      </div>
    </section>
  );
}
