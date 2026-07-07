import { CTAButton } from "./CTAButton";

export function FinancialResults() {
  return (
    <section className="py-16 md:py-24 border-t border-slate-200 bg-[var(--light-base)]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block text-[var(--dark-medium)]">
            Resultado financeiro
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-[0.9] tracking-tighter text-[var(--dark-pure)] mb-4">
            <span className="text-[var(--green-bull)]">O mercado recompensa</span> quem sabe o que
            está fazendo.
          </h2>
          <p className="text-[var(--dark-medium)] text-lg leading-snug">
            No projeto piloto, alunos que nunca tinham operado com consistência
            começaram a fechar dias no positivo. Não por sorte — por método
            aplicado ao vivo, todos os dias fazendo a mesma coisa, com contexto
            real de mercado.
          </p>
        </div>

        {/* Dados principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Destaque */}
          <div className="md:col-span-2 rounded-3xl p-8 md:p-10 bg-[var(--dark-pure)] flex items-center gap-8 flex-wrap">
            <span
              className="font-display font-black leading-none tracking-tighter text-white"
              style={{ fontSize: "clamp(56px,10vw,80px)" }}
            >
              87,2%
            </span>
            <div>
              <p className="text-white font-bold text-xl mb-1">
                tiveram resultados positivos
              </p>
              <p className="text-white/40 text-sm mt-1">
                durante todo o período do projeto piloto
              </p>
            </div>
          </div>

          {/* 26,4% */}
          <div className="rounded-3xl p-6 bg-white border border-slate-200 flex flex-col justify-center">
            <span className="font-display font-black text-4xl leading-none tracking-tighter text-[var(--dark-pure)] mb-2">
              26,4%
            </span>
            <p className="text-sm text-[var(--dark-medium)] leading-snug">
              extraíram{" "}
              <strong className="text-[var(--dark-pure)]">
                acima de R$ 500
              </strong>{" "}
              no período
            </p>
          </div>
        </div>

        {/* Barras de resultado */}
        <div className="rounded-3xl p-6 md:p-8 bg-white border border-slate-200 mb-4">
          <p className="text-xs font-bold text-[var(--dark-medium)] uppercase tracking-widest mb-6">
            Resultado Financeiro Por Faixa
          </p>
          <div className="space-y-4">
            {[
              { label: "Até R$ 500", pct: 60.8 },
              { label: "R$ 500 – R$ 1.000", pct: 16 },
              { label: "R$ 1.000 – R$ 2.500", pct: 6.4 },
              { label: "Acima de R$ 2.500", pct: 4 },
              { label: "Negativo", pct: 12.8, muted: true },
            ].map((row, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span
                    className={
                      row.muted ? "text-slate-400" : "text-[var(--dark-medium)]"
                    }
                  >
                    {row.label}
                  </span>
                  <span
                    className={`font-bold ${row.muted ? "text-slate-400" : "text-[var(--dark-pure)]"}`}
                  >
                    {row.pct}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${row.pct}%`,
                      background: row.muted ? "#CBD5E1" : "var(--dark-pure)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nota sobre negativos */}
        <div className="rounded-2xl p-5 bg-white border border-slate-200 border-l-4 border-l-[var(--green-bull)] mb-8">
          <p className="text-sm text-[var(--dark-medium)] leading-snug">
            Os 12,8% negativos relatam principalmente ansiedade e entradas fora
            do setup —{" "}
            <strong className="text-[var(--dark-pure)]">
              não falhas do produto, mas falhas comportamentais.
            </strong>{" "}
            É exatamente esse padrão que a Sala Educacional corrige, dia após
            dia, ao vivo.
          </p>
        </div>

        {/* Quote */}
        <div className="rounded-3xl p-7 md:p-8 bg-[var(--dark-pure)]">
          <span className="font-serif text-4xl text-[var(--green-bull)] opacity-50 leading-none block mb-3 select-none">
            "
          </span>
          <p className="text-white/80 text-lg italic leading-snug mb-4">
            A sala do Bruno veio para revolucionar o resultado dos alunos.
            Depois da sala tudo mudou. Consegui reverter o negativo e passar a
            fechar os dias no positivo.
          </p>
          <span className="text-xs font-bold tracking-widest uppercase text-[var(--green-bull)]">
            — Italo
          </span>
        </div>

        <div className="mt-8 text-center">
          <CTAButton label="Quero ter resultados assim" />
        </div>

        {/* Ponte */}
        <div className="mt-14 pt-10 border-t border-slate-200 text-center">
          <p className="text-[var(--dark-medium)] text-sm uppercase tracking-widest font-bold">
            Mas antes de continuar — existe algo importante que você precisa
            saber.
          </p>
        </div>
      </div>
    </section>
  );
}
