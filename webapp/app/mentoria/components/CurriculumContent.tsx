import {
  TrendingUp,
  Ruler,
  PauseCircle,
  Shapes,
  RotateCcw,
  Shield,
  ArrowRight,
} from "lucide-react";

const modules = [
  {
    icon: TrendingUp,
    tag: "",
    title: "LEITURA CANDLE A CANDLE",
    body: "Aprenda a interpretar o gráfico candle por candle e entender o que o preço está mostrando antes de pensar em uma operação.",
  },
  {
    icon: Ruler,
    tag: "",
    title: "FIBONACCI",
    body: "Entenda como utilizar a Fibonacci dentro do Método Trader de Sucesso para identificar regiões importantes de entrada, stop e alvo do preço.",
  },
  {
    icon: PauseCircle,
    tag: "",
    title: "PONTOS DE PARADA",
    body: "Aprenda a identificar regiões em que o preço pode reagir ou deve buscar, entendendo como utilizar isso a seu favor nas operações.",
  },
  {
    icon: Shapes,
    tag: "",
    title: "PADRÕES GRÁFICOS",
    body: "Identifique formações recorrentes no preço e aprenda a interpretá-las dentro do contexto do mercado, evitando leituras isoladas e sinais fora de contexto.",
  },
  {
    icon: RotateCcw,
    tag: "",
    title: "BACKTEST DO OPERACIONAL",
    body: "Aprenda como estudar de forma estruturada, revisar operações, identificar padrões de acerto e erro e usar o histórico do mercado para evoluir o seu operacional.",
  },
  {
    icon: Shield,
    tag: "",
    title: "GERENCIAMENTO DE RISCO",
    body: "Aprenda a definir risco, exposição e relação entre perda e ganho para proteger seu capital e manter consistência no operacional.",
  },
];

const setups: { name: string }[] = [
  { name: "Scalps TDS" },
  { name: "Scalps Certeiros" },
  { name: "Operando Região de 50%" },
  { name: "Operando Apenas M5" },
  { name: "Operando Setups" },
  { name: "Setup Cruzamento de Fibo" },
  { name: "Setup Leônidas" },
  { name: "Setup Responsivo" },
  { name: "2 Toques no Ponto de Parada" },
  { name: "Operando Negações" },
  { name: "Estratégia 40 Pontos" },
  { name: "Entrando e Saindo nos Alvos" },
  { name: "Parcial nos Alvos" },
  { name: "Alongando os Alvos" },
  { name: "Operando Nasdaq" },
  { name: "Operando Modo High End" },
];

export function CurriculumContent() {
  return (
    <section
      className="w-full bg-[var(--m-subtle)] border-b border-[var(--m-border)] py-16 lg:py-24"
      id="conteudo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[11px] font-bold uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
            Conteúdo Programado
          </div>
          <h2 className="font-[family-name:var(--m-font-display)] text-3xl sm:text-4xl lg:text-5xl text-[var(--m-dark)] font-bold tracking-tight">
            Da leitura do gráfico à construção do seu operacional.
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[var(--m-body)] leading-relaxed">
            Ao longo da Mentoria, você passa por mais de 24 aulas extensas que
            mostram como estudar, interpretar e aplicar o Método Trader De
            Sucesso na prática. Primeiro, você aprende e domina os fundamentos.
            Depois, aprende a conectar leitura, contexto, estratégias e gestão
            de risco para desenvolver um operacional cada vez melhor.
          </p>
        </div>

        {/* SUB-BLOCO A: A base do Método TDS */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="hidden sm:block w-3 h-3 bg-[var(--m-bull)] rounded-sm" />
            <h3 className="font-[family-name:var(--m-font-display)] text-2xl sm:text-3xl text-[var(--m-dark)] font-bold">
              Primeiro, você aprende a ler o mercado.
            </h3>
          </div>
          <p className="font-[family-name:var(--m-font-mono)] text-xs text-[var(--m-caption)] uppercase mb-4 sm:mb-6 tracking-wide">
            Aqui você constrói os fundamentos que dão sentido ao gráfico e
            sustentam todo o Método Trader De Sucesso.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.tag}
                  className="bg-white p-6 rounded-lg border border-[var(--m-border)] hover:border-[var(--m-bull)] transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-[family-name:var(--m-font-mono)] text-[11px] font-bold text-[var(--m-bull)] bg-[var(--m-bull-bg)] border border-[var(--m-bull-border)] px-2 py-0.5 rounded">
                      {m.tag}
                    </span>
                    <Icon className="text-[var(--m-caption)] group-hover:text-[var(--m-bull)] w-5 h-5 transition-colors" />
                  </div>
                  <h4 className="font-[family-name:var(--m-font-display)] text-lg font-bold text-[var(--m-dark)] mb-2">
                    {m.title}
                  </h4>
                  <p className="text-sm text-[var(--m-body)] leading-relaxed">
                    {m.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* SUB-BLOCO B: Aplicação do Método / 16 setups */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="hidden sm:block w-3 h-3 bg-[var(--m-dark)] rounded-sm" />
            <h3 className="font-[family-name:var(--m-font-display)] text-2xl sm:text-3xl text-[var(--m-dark)] font-bold">
              Depois, aprende a transformar leitura em decisão.
            </h3>
          </div>
          <p className="font-[family-name:var(--m-font-mono)] text-xs text-[var(--m-caption)] uppercase mb-4 sm:mb-6 tracking-wide">
            Com essa base construída, você conecta as peças do operacional e
            entende como aplicá-las em diferentes contextos e movimentos do
            mercado.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {setups.map((s) => (
              <div
                key={s.name}
                className="p-3.5 bg-white border border-[var(--m-border)] rounded-lg hover:border-[var(--m-bull)] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
                  <span className="font-[family-name:var(--m-font-display)] text-sm font-bold text-[var(--m-dark)]">
                    {s.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card de Princípio Fundamental */}
        <div className="p-8 bg-white border border-[var(--m-border)] rounded-lg shadow-sm">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[var(--m-subtle)] border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[10px] font-bold uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
              Princípio Fundamental
            </div>
            <h3 className="font-[family-name:var(--m-font-display)] text-2xl sm:text-3xl text-[var(--m-dark)] font-bold mb-3 leading-tight">
              Não é sobre decorar estratégias. É sobre entender o que o mercado
              está mostrando.
            </h3>
            <p className="text-base sm:text-lg text-[var(--m-body)] leading-relaxed mb-4 sm:mb-6">
              Ao dominar a base operacional, você deixa de depender de padrões
              soltos e passa a entender quando, onde e por que cada abordagem
              faz sentido. A partir daí, você utiliza as peças do método para escolher
              as entradas que melhor se encaixam no seu estilo operacional, tomando
              decisões mais assertivas.
            </p>
            <a
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-7 py-3.5 bg-[var(--m-bull)] hover:bg-[var(--m-bull-light)] text-white font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-normal sm:tracking-wider font-bold rounded transition-all shadow-md group whitespace-nowrap"
              href="#inscricao"
            >
              <span>Quero fazer parte da Mentoria</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
