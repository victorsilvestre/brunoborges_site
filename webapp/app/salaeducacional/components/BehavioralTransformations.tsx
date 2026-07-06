export function BehavioralTransformations() {
  const transformations = [
    {
      before: "Ansiedade antes de entrar",
      after: "Calma e clareza na decisão",
    },
    {
      before: "Esperando confirmação de terceiros",
      after: "Confiança na própria leitura",
    },
    {
      before: "Entrando fora do setup por impulso",
      after: "Paciência para aguardar o momento certo",
    },
    {
      before: "Saindo cedo por medo de perder o lucro",
      after: "Capacidade de ir até o alvo",
    },
    {
      before: "Torcendo para o gráfico ir a seu favor",
      after: "Antecipando o que o gráfico vai fazer",
    },
    {
      before: "Dias bons seguidos de dias de destruição",
      after: "Consistência crescente semana a semana",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 border-t border-white/[0.06]"
      style={{ background: "#1B2520" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block text-white/40">
            Transformação real
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-[0.9] tracking-tighter text-white mb-4">
            O que muda quando
            <br />
            <span style={{ color: "#BFEA24" }}>você para de estudar</span>
            <br />
            <span className="text-white/40">e começa a executar.</span>
          </h2>
        </div>

        {/* Transformações antes/depois */}
        <div className="space-y-3 mb-12">
          {transformations.map((t, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center rounded-2xl p-4 md:p-5 border"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                <span className="text-sm text-white/30 leading-snug">
                  {t.before}
                </span>
              </div>
              <span className="text-white/20 font-bold text-lg flex-shrink-0">
                →
              </span>
              <div className="flex items-center gap-3">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#BFEA24" }}
                />
                <span className="text-sm font-semibold text-white leading-snug">
                  {t.after}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quotes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              text: "Agora eu não fico mais ansioso caçando uma entrada. Espero o gráfico fazer o que eu quero — se não faz, eu não faço nada.",
              author: "João",
            },
            {
              text: "A sala está me ensinando o momento certo de parar de operar. Estou há 4 anos no mercado não consistente — e finalmente estou evoluindo.",
              author: "Reni",
            },
          ].map((q, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-6 border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
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
      </div>
    </section>
  );
}
