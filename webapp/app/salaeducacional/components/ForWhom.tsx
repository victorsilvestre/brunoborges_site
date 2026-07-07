import { Check, X } from "lucide-react";
import { CTAButton } from "./CTAButton";

export function ForWhom() {
  const forYou = [
    "Entende o Método TDS e quer parar de adivinhar e começar a executar",
    "Quer aprender a ler o mercado ao vivo, tomando as próprias decisões — sem depender de terceiros",
    "Consegue seguir o próprio Plano de Trade mesmo vendo outro aluno bater meta antes de você",
    "Entende que consistência se constrói dia após dia, e está disposto a enfrentar essa jornada",
  ];

  const notForYou = [
    "Quer call ou sinal de entrada — na Sala Educacional o Bruno mostra o raciocínio, não a entrada",
    "Deseja ver as ordens do Bruno na tela e copiar na sua conta real",
    "Percebe que a ansiedade faz você sair do plano de trade quando vê outro aluno no positivo",
    "Espera resultados sem colocar o que já aprendeu em prática nos estudos e backtests operacionais",
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0C0D0E] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block text-white/30">
            Seja honesto consigo mesmo
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-[0.9] tracking-tighter text-white mb-4">
            A Sala não é<br />
            <span style={{ color: "#BFEA24" }}>para todo mundo.</span>
          </h2>
          <p className="text-white/40 text-lg mt-5 leading-snug">
            Filtramos o aluno "errado" para garantir que o aluno
            certo tenha a experiência que merece. 
            Talvez, você ainda não esteja pronto para a Sala Educacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Para você */}
          <div
            className="rounded-3xl p-8 border"
            style={{
              background: "rgba(191,234,36,0.06)",
              borderColor: "rgba(191,234,36,0.18)",
            }}
          >
            <div className="flex items-center gap-3 mb-7">
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#BFEA24" }}
              >
                <Check className="w-4 h-4" style={{ color: "#0C0D0E" }} />
              </span>
              <span className="font-display font-black text-base uppercase tracking-tight text-white">
                A Sala é pra você que:
              </span>
            </div>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ background: "#BFEA24" }}
                  />
                  <span className="text-sm text-white/70 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Não para você */}
          <div
            className="rounded-3xl p-8 border"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex items-center gap-3 mb-7">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <X className="w-4 h-4 text-white/40" />
              </span>
              <span className="font-display font-black text-base uppercase tracking-tight text-white/40">
                Não é pra você que:
              </span>
            </div>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 flex-shrink-0" />
                  <span className="text-sm text-white/30 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Frase de fechamento */}
        <div
          className="mt-8 rounded-2xl p-6 border-l-4"
          style={{
            background: "rgba(255,255,255,0.03)",
            borderLeftColor: "#BFEA24",
          }}
        >
          <p className="text-sm text-white/50 italic leading-snug">
            A Sala funciona para praticamente todo aluno que já passou pela
            Mentoria — mas ela exige uma coisa que nenhum curso ensina sozinho:{" "}
            <strong className="text-white/80 not-italic">
              disciplina para seguir o seu próprio plano, não o dos outros.
            </strong>
          </p>
        </div>

        <div className="mt-8 text-center">
          <CTAButton label="Eu sou esse aluno" />
        </div>
      </div>
    </section>
  );
}
