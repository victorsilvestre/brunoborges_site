"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  ShieldQuestion,
  Users,
  Zap,
  BarChart2,
  TrendingDown,
  ArrowRight,
} from "lucide-react";

const HOTMART_URL = "";
import { FadeIn } from "../../components/FadeIn";

export function Mentorship() {
  const requirements = [
    {
      title: "Já Estudou de Tudo",
      text: "Você consome conteúdo, faz cursos e acompanha o mercado, mas ainda sente dificuldade para aplicar tudo na prática e obter resultados positivos.",
      icon: BookOpen,
    },
    {
      title: "Não Confia na Própria Leitura",
      text: "Entra em operações com dúvida, insegurança e frequentemente percebe que poderia ter tomado decisões melhores logo após realizar suas entradas.",
      icon: ShieldQuestion,
    },
    {
      title: "Depende de Terceiros",
      text: "Busca confirmações em grupos, redes sociais ou opiniões de outros traders para conseguir executar suas operações. Mas além dos resultados não chegarem, ainda não entende o que está fazendo.",
      icon: Users,
    },
    {
      title: "Quer Evoluir Mais Rápido",
      text: "Entende que aprender sozinho é possível, mas quer encurtar o caminho e evitar anos de tentativa e erro com um mentor qualificado que não realiza falsas promessas.",
      icon: Zap,
    },
    {
      title: "Busca Consistência Real",
      text: "Quer construir uma base operacional sólida e que possa ser repetida todos os dias, sem depender de sorte ou momentos isolados de resultado.",
      icon: BarChart2,
    },
    {
      title: "Ganha e Devolve Tudo",
      text: "Consegue ter dias positivos, mas vê os resultados desaparecerem quando perde o controle emocional. Ganha durante a semana, devolve nos dias de fúria e termina o mês frustrado sem conseguir transformar esforço em consistência.",
      icon: TrendingDown,
    },
  ];

  return (
    <section className="relative py-32 bg-[var(--dark-base)]" id="mentorship">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[400px] bg-[var(--gold-premium)]/5 blur-[150px] rounded-[100%]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header centralizado em 1 coluna */}
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-6 leading-none text-white">
              Mentoria <br />
              <span className="text-[var(--green-bull)]">Trader de </span>
              <span className="text-[var(--green-dark)]">Sucesso</span>
            </h2>

            <div className="max-w-3xl mx-auto space-y-5">
              <p className="text-lg text-[var(--white-60)] leading-relaxed">
                A maioria dos traders passa anos acumulando cursos e estratégias,
                mas continua sem saber exatamente o que fazer quando abre o gráfico.
                A <strong className="text-white font-semibold">Mentoria Trader de Sucesso</strong> foi construída para mudar isso.
              </p>
              <p className="text-lg text-[var(--white-60)] leading-relaxed">
                Você vai aprender um método validado de análise gráfica, com
                acompanhamento próximo e aplicação prática diária para
                desenvolver a habilidade que realmente faz diferença: entender o comportamento do preço.
              </p>
              <p className="text-lg text-[var(--white-60)] leading-relaxed">
                São mais de 100 horas de conteúdo, aulas ao vivo, 30 dias de Sala Operacional gratuitamente,
                apostila completa do método, estratégias exclusivas e ferramentas desenvolvidas para{" "}
                <strong className="text-white font-semibold">acelerar seu aprendizado e tornar mais fácil as suas decisões</strong>.
              </p>
              <p className="text-lg text-[var(--white-60)] leading-relaxed">
                Mais do que ensinar entradas, a Mentoria Trader de Sucesso ensina você a construir uma{" "}
                <strong className="text-white font-semibold">base operacional sólida</strong>,
                capaz de ser repetida{" "}
                <strong className="text-white font-semibold">todos os dias com mais confiança, disciplina e tranquilidade</strong>.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Card "Funciona pra mim?" */}
        <FadeIn delay={0.2}>
          <div className="relative p-10 mt-8 overflow-hidden rounded-[2rem] border border-[var(--white-10)] bg-gradient-to-br from-[var(--dark-surface)] to-[var(--dark-elevated)] shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--green-bull)] opacity-[0.10] blur-3xl rounded-full mix-blend-screen pointer-events-none" />

            <h3 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-4 relative z-10 flex items-center gap-4">
              <span className="w-10 h-1 bg-[var(--gold-premium)]" />
              Funciona pra mim?
            </h3>

            <p className="text-[var(--white-60)] text-lg mb-10 relative z-10 leading-snug">
              A Mentoria Trader de Sucesso foi criada para quem se identifica com pelo menos uma dessas situações:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
              {requirements.map((req, idx) => {
                const Icon = req.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="flex flex-col gap-3 p-5 rounded-xl bg-[var(--dark-surface)]/50 border border-[var(--white-10)] hover:border-[var(--green-bull)]/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 shrink-0 text-[var(--green-bull)]" />
                      <span className="text-white font-display font-bold text-sm uppercase tracking-wider">
                        {req.title}
                      </span>
                    </div>
                    <p className="text-[var(--white-60)] text-sm leading-relaxed">
                      {req.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div className="mt-10 flex justify-center">
            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--green-bull)] text-white font-display font-bold uppercase tracking-wider hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(0,191,99,0.30)] hover:shadow-[0_0_40px_rgba(0,191,99,0.50)]"
            >
              Sim, eu quero ser TDS! <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
