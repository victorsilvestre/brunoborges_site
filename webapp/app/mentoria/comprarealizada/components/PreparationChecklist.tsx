const steps = [
  {
    title: "1. Reserve os horários das aulas na sua agenda",
    tag: "Prioridade",
    description:
      "Bloqueie os horários dos encontros ao vivo e, se não puder participar de algum, já defina quando irá assistir à gravação. Evite deixar o conteúdo acumular.",
  },
  {
    title: "2. Prepare seu ambiente de estudo",
    tag: "Antes da Aula",
    description:
      "Deixe computador, plataforma, caderno, caneta e tudo o que você costuma usar já organizados antes da aula. Quanto menos distrações, melhor será o seu aproveitamento.",
  },
  {
    title: "3. Separe um tempo para revisar e praticar",
    tag: "Rotina de Estudo",
    description:
      "Além das aulas, reserve alguns momentos da semana para rever anotações, reassistir trechos importantes e estudar os exemplos apresentados pelo Bruno.",
  },
  {
    title: "4. Anote suas dúvidas ao longo da semana",
    tag: "Participe",
    description:
      "Não deixe uma dúvida passar. Registre situações do gráfico, conceitos ou decisões que queira entender melhor e leve essas perguntas para os encontros e para o grupo da turma.",
  },
];

export function PreparationChecklist() {
  return (
    <section
      className="w-full bg-[var(--m-surface)] border-b border-[var(--m-border)] py-14 lg:py-20"
      id="checklist"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[var(--m-subtle)] border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[11px] font-bold uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
            Preparação Inicial
          </div>
          <h2 className="font-[family-name:var(--m-font-display)] text-3xl sm:text-4xl text-[var(--m-dark)] font-bold tracking-tight">
            Organize sua rotina para aproveitar melhor a Mentoria Trader de Sucesso.
          </h2>
          <p className="mt-3 text-base text-[var(--m-body)] leading-relaxed">
            Antes das aulas começarem, prepare um espaço, uma rotina e alguns
            hábitos simples para estudar com mais atenção e aproveitar melhor
            cada encontro.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-5 bg-white border border-[var(--m-border)] rounded-lg flex items-start gap-4 hover:border-[var(--m-bull)] transition-all shadow-sm"
            >
              <div className="pt-0.5">
                <input
                  type="checkbox"
                  id={`chk${i + 1}`}
                  className="w-5 h-5 text-[var(--m-bull)] rounded border-[var(--m-border)] focus:ring-[var(--m-bull)]"
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between gap-3 mb-1">
                  <label
                    htmlFor={`chk${i + 1}`}
                    className="font-[family-name:var(--m-font-display)] text-base font-bold text-[var(--m-dark)] cursor-pointer"
                  >
                    {step.title}
                  </label>
                  <span className="shrink-0 font-[family-name:var(--m-font-mono)] text-[11px] text-[var(--m-bull)] font-semibold bg-[var(--m-bull-bg)] px-2 py-0.5 rounded border border-[var(--m-bull-border)]">
                    {step.tag}
                  </span>
                </div>
                <p className="text-sm text-[var(--m-body)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
