"use client";

import { Crosshair, Crown, Zap, MessageSquare } from "lucide-react";
import { FadeIn } from "../../components/FadeIn";

export function Features() {
  const features = [
    {
      icon: <Crosshair className="w-8 h-8 text-[var(--green-bull)]" />,
      num: "01",
      title: "Base da evolução",
      text: "Desenvolva a disciplina e a confiança necessárias para parar de agir por impulso e construir resultados cada vez mais consistentes ao longo do tempo.",
    },
    {
      icon: <Crown className="w-8 h-8 text-[var(--gold-premium)]" />,
      num: "02",
      title: "Método validado",
      text: "Independentemente do seu nível atual, você terá acesso a uma metodologia clara e validada para evoluir sem perder tempo com conteúdos genéricos e totalmente adaptável ao seu estilo operacional.",
    },
    {
      icon: <Zap className="w-8 h-8 text-[var(--white)]" />,
      num: "03",
      title: "Price Action simplificado",
      text: "Aprenda a interpretar o comportamento do preço com objetividade e desenvolva um operacional baseado no que realmente importa sem depender de indicadores 'milagrosos'.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[var(--red-bear)]" />,
      num: "04",
      title: "Evolução guiada",
      text: "Receba direcionamentos próximos do mentor para corrigir seus erros, fortalecer sua leitura e encurtar o caminho até a consistência. Acompanhe as análises do dia real de operação, replays de mercado e tire suas dúvidas ao vivo.",
    },
  ];

  return (
    <section
      id="about"
      className="py-32 relative bg-[var(--light-base)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24 text-center mx-auto">
          <FadeIn delay={0.1}>
            <h3 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-[var(--dark-pure)] uppercase leading-[0.9] tracking-tighter mb-6">
              Uma mentoria <br />
              Diferente de tudo que você já viu.
            </h3>
          </FadeIn>
          <FadeIn delay={0.2}>
            <span className="font-script text-3xl md:text-4xl text-[var(--green-bull)] block -mt-4 mb-6 md:mb-8 origin-left -rotate-1">
              O conteúdo mais completo do mercado financeiro.
            </span>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg text-[var(--dark-medium)] max-w-3xl mx-auto leading-snug mb-4">
              Se você sente que está sempre estudando, mas continua sem entender
              por que ganha em alguns dias e perde em outros, o problema pode
              ser mais profundo do que a sua estratégia. 
            </p>
            <p className="text-lg text-[var(--dark-medium)] max-w-3xl mx-auto leading-snug mb-4">
              A maioria dos traders passa anos
              procurando o setup perfeito, quando na verdade o que falta é
              aprender a interpretar o mercado da forma correta. 
            </p>
            <p className="text-lg text-[var(--dark-medium)] max-w-3xl mx-auto leading-snug mb-4">
              Na <strong className="text-[var(--green-highlight)] font-semibold">Mentoria Trader de Sucesso</strong>
              , você aprende a desenvolver uma leitura
              profissional do Price Action, entendendo contexto, comportamento e
              intenção do preço para operar com mais clareza e menos achismo.
            </p>  
            <p className="text-lg text-[var(--dark-medium)] max-w-3xl mx-auto leading-snug mb-2">
              Esse é o método que já ajudou <strong className="text-[var(--green-highlight)] font-semibold">mais de 1.200 alunos</strong> a saírem da
              tentativa e erro e construírem um processo operacional mais
              consistente.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {features.map((feature, i) => (
            <FadeIn
              key={i}
              delay={i * 0.1}
              direction="up"
              className="relative group"
            >
              {/* Massive background number */}
              <div className="absolute -top-16 -left-8 font-display font-black text-[180px] leading-none text-[var(--dark-pure)] opacity-[0.03] select-none pointer-events-none transition-transform duration-500 group-hover:-translate-y-4">
                {feature.num}
              </div>

              <div className="relative z-10">
                <div className="mb-8 p-4 inline-flex bg-[var(--dark-pure)] rounded-2xl shadow-xl transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  {feature.icon}
                </div>

                <h4 className="font-display font-black text-2xl md:text-3xl text-[var(--dark-pure)] uppercase mb-4 tracking-tight">
                  {feature.title}
                </h4>

                <p className="text-[var(--dark-medium)] text-lg leading-snug max-w-sm">
                  {feature.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
