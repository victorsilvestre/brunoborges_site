import { CheckCircle2, ArrowRight } from "lucide-react";

const pillars = [
  {
    tag: "",
    num: "01.",
    title: "MENTORIA AO VIVO",
    body: "Durante 60 dias, você participa de aulas ao vivo três vezes por semana diretamente com Bruno Borges, construindo o Método TDS do básico ao avançado com tempo para tirar dúvidas e aprofundar cada detalhe do movimento.",
    footer: "+100h de conteúdo ao vivo",
    badge: false,
  },
  {
    tag: "Bônus Exclusivo",
    num: "02.",
    title: "SALA EDUCACIONAL",
    body: "Durante 30 dias, acompanhe Bruno das 8h45 às 10h15 analisando o mercado ao vivo e mostrando, em cenários reais de abertura e volatilidade, os conceitos estudados na Mentoria — reforçando a prática da leitura em tempo real.",
    footer: "Segunda a Sexta, 8h45 às 10h15",
    badge: false,
  },
  {
    tag: "",
    num: "03.",
    title: "AULAS APROFUNDADAS",
    body: "Replays de mercado, análises e estudos de contexto ajudam você a revisar operações, testar leituras e entender com mais profundidade como o método se comporta em diferentes situações do mercado.",
    footer: "Teoria & Prática",
    badge: false,
  },
  {
    tag: "",
    num: "04.",
    title: "ACOMPANHAMENTO CONTÍNUO",
    body: "Tire dúvidas diretamente com Bruno, participe do grupo exclusivo da turma e mantenha acesso vitalício às gravações para revisar aulas, análises e situações específicas de mercado sempre que precisar.",
    footer: "suporte, comunidade e acesso vitalício",
    badge: false,
  },
];

export function LearningPillars() {
  return (
    <section
      className="w-full bg-[var(--m-surface)] border-b border-[var(--m-border)] py-16 lg:py-24"
      id="funcionamento"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[var(--m-subtle)] border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[11px] font-bold uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
            Muito além das aulas gravadas
          </div>
          <h2 className="font-[family-name:var(--m-font-display)] text-3xl sm:text-4xl lg:text-5xl text-[var(--m-dark)] font-bold tracking-tight">
            Você aprende o método e entende como o gráfico se comporta.
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[var(--m-body)] leading-relaxed">
            A Mentoria Trader De Sucesso combina conteúdo estruturado e contato
            frequente com situações reais, que acontecem todos os dias no
            mercado, para transformar conhecimento em leitura aplicável no
            gráfico.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div
              key={p.tag}
              className="bg-[var(--m-subtle)] p-8 rounded-lg border border-[var(--m-border)] flex flex-col justify-between relative hover:border-[var(--m-bull)] transition-all"
            >
              {p.badge && (
                <div className="hidden sm:block absolute top-4 right-4 bg-[var(--m-bull)] text-white font-[family-name:var(--m-font-mono)] text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded">
                  Bônus Exclusivo
                </div>
              )}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-[family-name:var(--m-font-mono)] text-xs font-bold text-[var(--m-bull)] bg-[var(--m-bull-bg)] border border-[var(--m-bull-border)] px-2 py-0.5 rounded">
                    {p.tag}
                  </span>
                  <span className="hidden sm:inline font-[family-name:var(--m-font-mono)] text-xs text-[var(--m-caption)]">
                    {p.num}
                  </span>
                  {p.badge && (
                    <span className="sm:hidden bg-[var(--m-bull)] text-white font-[family-name:var(--m-font-mono)] text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded">
                      Bônus Exclusivo
                    </span>
                  )}
                </div>
                <h3 className="font-[family-name:var(--m-font-display)] text-2xl font-bold text-[var(--m-dark)] mb-2 sm:mb-3 uppercase tracking-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--m-body)] leading-relaxed">
                  {p.body}
                </p>
              </div>
              <div className="mt-4 sm:mt-0 pt-4 border-t border-[var(--m-border)] flex items-center gap-2 text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-xs uppercase font-semibold">
                <CheckCircle2 className="text-[var(--m-bull)] w-[18px] h-[18px]" />
                <span>{p.footer}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="font-[family-name:var(--m-font-display)] text-xl sm:text-2xl text-[var(--m-body)] mb-4 sm:mb-8">
            O objetivo não é fazer você depender do mentor.{" "}
            <span className="text-[var(--m-dark)] font-bold underline decoration-[var(--m-bull)]">
              É ensinar você a construir uma leitura própria do mercado seguindo
              um método validado por mais de 1.400 Traders de Sucesso.
            </span>
          </p>
          <a
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--m-bull)] hover:bg-[var(--m-bull-light)] text-white font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-wider font-bold rounded transition-all shadow-md group"
            href="#inscricao"
          >
            <span>Garantir Minha Vaga</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
