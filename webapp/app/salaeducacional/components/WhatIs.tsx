import { Radio, Clock, LockKeyhole, VolumeX } from "lucide-react";

const cards = [
  {
    Icon: Radio,
    label: "Formato",
    value: "Sala Ao Vivo sem compartilhamento de ordens — apenas análise e acompanhamento do pregão com o Método Trader de Sucesso",
  },
  {
    Icon: Clock,
    label: "Horário",
    value: "8h45 às 10h15. Você pode acompanhar o pregão durante 1h30 todos os dias junto com um trader profissional e consistente.",
    big: false,
  },
  {
    Icon: LockKeyhole,
    label: "Acesso",
    value: "Exclusivo para alunos da Mentoria Trader de Sucesso. Se você não é aluno ainda, garanta sua vaga na próxima Mentoria.",
  },
  {
    Icon: VolumeX,
    label: "Ambiente",
    value: "Silencioso. Todos os alunos são mutados durante o pregão. O objetivo é entender e analisar o mercado, evoluindo a sua leitura.",
  },
];

export function WhatIs() {
  return (
    <section className="py-16 md:py-24 bg-[#1B2520]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Lado esquerdo — copy */}
          <div>
            <span
              className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block"
              style={{ color: "#BFEA24" }}
            >
              O que é a Sala
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-[0.9] tracking-tighter text-white mb-4">
              O estágio que
              <br />
              <span style={{ color: "#BFEA24" }}>nenhum curso</span>
              <br />
              te oferece.
            </h2>
            <p className="text-white/60 text-lg leading-snug mb-8">
              Na Mentoria TDS você aprendeu a teoria. Agora, a Sala faz algo
              diferente: coloca você dentro do pregão ao lado de quem já domina
              o Método, todos os dias, com o mercado aberto.
            </p>
            <p className="text-white/40 text-base leading-snug">
              Das 8h45 às 10h15, o Bruno analisa o mercado ao vivo — leitura
              pré-abertura, acompanhamento do pregão, decisões em tempo real.
              Você assiste, absorve, acompanha e aprende a pensar como um trader
              profissional.
            </p>
          </div>

          {/* Lado direito — cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map(({ Icon, label, value, big }, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 border flex flex-col gap-2"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(191,234,36,0.12)" }}
                >
                  <Icon
                    size={16}
                    style={{ color: "#BFEA24" }}
                    strokeWidth={2}
                  />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
                  {label}
                </span>
                <p
                  className={`font-bold leading-snug ${big ? "text-3xl tracking-tight" : "text-sm text-white/70"}`}
                  style={big ? { color: "#BFEA24" } : {}}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
