export function MarketReading() {
  return (
    <section className="py-16 md:py-24" style={{ background: "#1B2520" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block text-white/40">
              Leitura de mercado
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-[0.9] tracking-tighter text-white mb-4">
              A diferença entre operar com medo
              <br />
              <span style={{ color: "#BFEA24" }}>e operar com convicção.</span>
            </h2>
            <p className="text-white/60 text-lg leading-snug mb-6">
              A maioria dos traders sabe o operacional — mas trava ou erra na
              hora de tomar decisões ao vivo. O mercado está aberto, o gráfico
              está se movendo, e a mente bloqueia. Essa paralisia não é falta de
              conhecimento técnico. É falta de prática de leitura em tempo real.
            </p>
            <p className="text-white/40 text-base leading-snug">
              A Sala quebra esse ciclo. Você começa a enxergar o mercado como o Bruno
              enxerga — com contexto, com padrões, com antecipação. Mas,
              principalmente, com tranquilidade e paciência. Algo que falta em
              muitos traders para se tornarem lucrativos.
            </p>
          </div>

          {/* Dados */}
          <div className="space-y-4">
            <div
              className="rounded-2xl p-6 md:p-8 border flex items-center gap-6 flex-wrap"
              style={{
                background: "rgba(191,234,36,0.07)",
                borderColor: "rgba(191,234,36,0.2)",
              }}
            >
              <span
                className="font-display font-black leading-none tracking-tighter"
                style={{ fontSize: "clamp(56px,10vw,80px)", color: "#BFEA24" }}
              >
                99,4%
              </span>
              <div>
                <p className="text-white font-bold text-lg">
                  melhoraram a leitura de mercado
                </p>
                <p className="text-white/40 text-sm mt-1">
                  sendo que{" "}
                  <strong className="text-white/70">
                    91,4% disseram que melhorou muito
                  </strong>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  text: "Hoje consigo chegar na frente do gráfico e já enxergar o que pode ser feito. Era o que eu buscava — saber as possibilidades antes mesmo de acontecer.",
                  author: "Traderlinsvan",
                },
                {
                  text: "O pré-mercado te dá clareza do que pode acontecer e ajuda a tomar decisões mais rápidas.",
                  author: "Ferreiracnilton",
                },
              ].map((q, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl p-5 border"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    className="absolute top-3 left-4 font-serif text-2xl leading-none select-none"
                    style={{ color: "#BFEA24", opacity: 0.4 }}
                  >
                    "
                  </span>
                  <p className="text-xs text-white/50 italic leading-snug pt-4">
                    {q.text}
                  </p>
                  <span
                    className="text-[10px] font-bold tracking-wide mt-2 block"
                    style={{ color: "#BFEA24" }}
                  >
                    — {q.author}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
