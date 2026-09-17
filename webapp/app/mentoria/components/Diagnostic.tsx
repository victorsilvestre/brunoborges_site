const diagnostics = [
  {
    tag: "",
    roman: "I.",
    title: "Você estuda, mas não consegue aplicar",
    body: "Consome conteúdo, conhece estratégias e acompanha o mercado, mas ainda encontra dificuldade para transformar conhecimento em execução.",
    footer: "Acúmulo de Teoria",
  },
  {
    tag: "",
    roman: "II.",
    title: "Você não confia na própria leitura",
    body: "Entra em operações ainda com dúvida e percebe, muitas vezes tarde demais, que fez uma entrada errada.",
    footer: "Insegurança Técnica",
  },
  {
    tag: "",
    roman: "III.",
    title: "Você depende da análise de terceiros",
    body: "Busca confirmação em grupos, redes sociais ou outros traders porque ainda não construiu segurança para tomar suas próprias decisões.",
    footer: "Falsa Autonomia",
  },
  {
    tag: "",
    roman: "IV.",
    title: "Você ganha, mas entrega tudo no final",
    body: "Tem bons dias ou boas operações, mas acaba entregando tudo que ganhou rapidamente e muitas vezes sem perceber.",
    footer: "Falta de Consistência",
  },
];

export function Diagnostic() {
  return (
    <section className="w-full bg-[var(--m-subtle)] border-b border-[var(--m-border)] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-[var(--m-border)] rounded text-[var(--m-bear)] font-[family-name:var(--m-font-mono)] text-[11px] font-bold uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bear)]" />O
            Obstáculo Real
          </div>
          <h2 className="font-[family-name:var(--m-font-display)] text-3xl sm:text-4xl lg:text-5xl text-[var(--m-dark)] font-bold tracking-tight">
            Você não precisa de mais um setup.{" "}
            <span className="text-[var(--m-bear)] border-b-2 border-[var(--m-bear)]/30">
              Precisa aprender a ler o mercado.
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[var(--m-body)] leading-relaxed">
            Muitos traders passam anos acumulando cursos, estratégias e
            indicadores, mas continuam inseguros quando precisam tomar uma
            decisão sozinhos diante do gráfico. O problema nem sempre está na
            falta de conteúdo. Muitas vezes, está na falta de uma base capaz de
            conectar tudo o que você já aprendeu.
          </p>
        </div>

        {/* 4 Problem Diagnostic Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {diagnostics.map((d) => (
            <div
              key={d.tag}
              className="bg-white p-6 rounded-lg border border-[var(--m-border)] flex flex-col justify-between hover:border-[var(--m-bear)] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-[family-name:var(--m-font-mono)] text-sm font-bold text-[var(--m-bear)] bg-[var(--m-bear-bg)] px-2 py-0.5 rounded border border-[var(--m-bear-border)]">
                    {d.tag}
                  </span>
                  <span className="font-[family-name:var(--m-font-mono)] text-xs text-[var(--m-caption)]">
                    {d.roman}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--m-font-display)] text-lg font-bold text-[var(--m-dark)] mb-2 group-hover:text-[var(--m-bear)] transition-colors">
                  {d.title}
                </h3>
                <p className="text-sm text-[var(--m-body)] leading-relaxed">
                  {d.body}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[var(--m-border)] flex items-center gap-2 text-[var(--m-caption)] font-[family-name:var(--m-font-mono)] text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bear)]" />
                <span>{d.footer}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Synthesis Banner */}
        <div className="mt-10 p-6 sm:p-8 bg-[var(--m-dark)] text-white rounded-lg border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 shadow">
          <div className="flex items-center gap-4">
            <span className="text-[var(--m-bull)] text-2xl font-[family-name:var(--m-font-mono)]">
              ⚡
            </span>
            <p className="font-[family-name:var(--m-font-display)] text-lg sm:text-xl text-slate-100 font-medium leading-snug sm:leading-relaxed mb-4 sm:mb-0">
              A Mentoria Trader de Sucesso foi criada para transformar o
              conhecimento do mercado em um processo de leitura, análise,
              execução e evolução pessoal do trader.
            </p>
          </div>
          <a
            className="flex-shrink-0 px-6 py-3.5 bg-[var(--m-bull)] hover:bg-[var(--m-bull-light)] text-white font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-wider font-bold rounded transition-all shadow"
            href="#inscricao"
          >
            Garantir Minha Vaga
          </a>
        </div>
      </div>
    </section>
  );
}
