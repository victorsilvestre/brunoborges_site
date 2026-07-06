export function WhatStudentsValued() {
  const items = [
    {
      num: "01",
      title: "Análise pré-abertura",
      desc: "Antes do mercado abrir, o Bruno já leu o gráfico e antecipou os cenários prováveis. Você chega preparado — não com esperança, mas com contexto alinhado.",
      quote: "O pré-mercado te dá clareza do que pode acontecer e ajuda a tomar decisões mais rápidas na hora.",
      author: "Ferreiracnilton",
    },
    {
      num: "02",
      title: "A calma do Bruno contagia",
      desc: "Volatilidade não abala quem entende o que está acontecendo. Ver um profissional reagir com calma ao mercado ao vivo muda o seu padrão emocional.",
      quote: "Com as orientações do Bruno, tudo fica mais calmo e tranquilo.",
      author: "Oguimo",
    },
    {
      num: "03",
      title: "Método TDS aplicado ao vivo",
      desc: "Não é teoria — é o Método TDS que você já conhece sendo executado ao vivo. Cada decisão explicada, cada análise visível.",
      quote: "A sala funciona como um estágio — o curso foi a formação, na sala temos a aplicação supervisionada.",
      author: "Kelcardosojh",
    },
    {
      num: "04",
      title: "Ambiente de alta performance",
      desc: "Todos mutados. Zero distração. Foco absoluto no gráfico. Não é sala de call — é um ambiente construído para quem quer evoluir de verdade.",
      quote: "O fato de ninguém poder falar é o principal — e o Bruno responde as dúvidas em tempo real.",
      author: "Granderei",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0C0D0E] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block text-white/30">
            Por que funciona
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-[0.9] tracking-tighter text-white mb-4">
            Os 4 pilares que
            <br />
            <span style={{ color: "#BFEA24" }}>fazem a diferença.</span>
          </h2>
        </div>

        <div className="divide-y divide-white/[0.07]">
          {items.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 md:gap-10 py-10 first:pt-0 last:pb-0 items-start"
            >
              <div className="flex items-start gap-6">
                <span
                  className="text-[10px] font-bold tracking-widest pt-1 flex-shrink-0"
                  style={{ color: "#BFEA24" }}
                >
                  {item.num}
                </span>
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div
                className="relative rounded-2xl p-5 border"
                style={{
                  background: "#111312",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <span
                  className="absolute top-3 left-4 font-serif text-2xl leading-none select-none"
                  style={{ color: "#BFEA24", opacity: 0.35 }}
                >
                  "
                </span>
                <p className="text-xs text-white/50 italic leading-snug pt-4">
                  {item.quote}
                </p>
                <span
                  className="text-[10px] font-bold tracking-wide mt-2 block"
                  style={{ color: "#BFEA24" }}
                >
                  — {item.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
