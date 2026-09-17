"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5562982612893?text=" +
  encodeURIComponent(
    "Olá! Queria mais informações sobre a Mentoria Trader de Sucesso.",
  );

const faqs = [
  {
    q: "1. Sou iniciante e nunca operei ao vivo. Consigo acompanhar?",
    a: "Sim. A mentoria foi estruturada em uma lógica progressiva que começa pelos fundamentos absolutos da leitura candle a candle e movimentação do preço, muito antes de falar em estratégia. Você não precisa saber nada de Day Trade para começar — só precisar querer aprender do jeito certo. E se já opera há um tempo mas ainda não tem consistência, a mentoria também serve para organizar o que você já sabe dentro de um método só.",
  },
  {
    q: "2. Não tenho muito tempo livre. Vou conseguir acompanhar os 60 dias?",
    a: "A carga é real (+100h de conteúdo), mas o formato foi pensado para caber na rotina de quem trabalha: são 3 aulas ao vivo por semana, todas gravadas e liberadas na área de membros com acesso vitalício. Se você perder um encontro ao vivo, assiste a gravação no seu tempo. O importante é manter constância ao longo dos 60 dias, não estar presente em 100% dos encontros.",
  },
  {
    q: "3. Já fiz outros cursos de trade e não deu resultado. Por que essa mentoria seria diferente?",
    a: "Porque o problema raramente é falta de conteúdo — é falta de uma base que conecte tudo o que você já viu. A Mentoria TDS não entrega mais um pacote de setups soltos: ensina Price Action puro, sem indicadores, para você entender o motivo por trás de cada movimento do preço. Você sai sabendo o porquê de uma entrada, não só o padrão a decorar. E ao longo dos 60 dias você tem acompanhamento ao vivo com o Bruno para corrigir erros na prática, não sozinho.",
  },
  {
    q: "4. O que é a Sala Educacional e como ela me ajuda a operar de verdade?",
    a: "É um bônus exclusivo de 30 dias em que você acompanha Bruno Borges ao vivo, das 8h45 às 10h15, com o mercado aberto. O foco não é receber calls ou sinais prontos — é ver o raciocínio de Price Action sendo aplicado em tempo real, no candle se formando, para você treinar a própria leitura em vez de depender da leitura de outra pessoa.",
  },
  {
    q: "5. O suporte para tirar dúvidas é direto com o Bruno ou com uma equipe?",
    a: "É direto com o Bruno Borges. Você não vai falar com monitores terceirizados nem receber respostas prontas. As dúvidas de gráfico, contexto de mercado e gerenciamento de risco são analisadas por quem construiu o método — por isso as vagas da turma são limitadas.",
  },
  {
    q: "6. O método funciona só no Mini Índice ou dá pra usar em outros ativos?",
    a: "Funciona em qualquer ativo líquido. Como o Método TDS é fundamentado em Price Action puro — leitura de oferta, demanda e comportamento do preço —, os mesmos conceitos e setups valem para Mini Índice, Mini Dólar, Nasdaq, Ouro e outros gráficos líquidos. Você aprende a ler o mercado, não a decorar um ativo específico.",
  },
  {
    q: "7. Quanto custa e quais são as formas de pagamento?",
    a: "O valor cheio é R$ 4.199,00, mas a turma atual tem condição promocional: R$ 1.200,00 à vista no PIX ou Boleto, ou 12x de R$ 124,11 no cartão de crédito (com possibilidade de usar dois cartões para facilitar a aprovação). É o mesmo acesso completo, incluindo os bônus, independente da forma de pagamento escolhida.",
  },
  {
    q: "8. Preciso ter uma quantia grande de capital para começar a aplicar o método?",
    a: "Não. A mentoria ensina leitura de mercado e gerenciamento de risco desde a base — inclusive como dimensionar operações e proteger capital, seja ele pequeno ou grande. Você também pode aplicar o método numa conta simulador, gratuita e disponibilizada pelas próprias corretoras, para treinar a leitura e ganhar confiança sem colocar dinheiro real em risco. O foco é desenvolver o processo correto de decisão antes de pensar em aumentar o tamanho das operações.",
  },
  {
    q: "9. E se eu entrar e perceber que a mentoria não é para mim?",
    a: "Você tem uma garantia incondicional de 15 dias corridos. Assista às primeiras aulas, participe dos encontros ao vivo e conheça o ecossistema TDS por dentro. Se achar que não faz sentido para você, basta enviar um e-mail ou mensagem e devolvemos 100% do valor, sem burocracia e sem perguntas. O risco fica todo do nosso lado.",
  },
  {
    q: "10. As vagas para essa turma são mesmo limitadas?",
    a: "São limitadas de verdade, porque o suporte é dado pessoalmente pelo Bruno — não é um curso gravado escalado para milhares de pessoas ao mesmo tempo. As inscrições ficam abertas até 29/09/2026 ou até a turma fechar, o que acontecer primeiro. Depois disso, o acesso só reabre na próxima turma.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="w-full bg-[var(--m-subtle)] border-b border-[var(--m-border)] py-16 lg:py-24"
      id="faq"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[11px] font-bold uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
            Perguntas Frequentes
          </div>
          <h2 className="font-[family-name:var(--m-font-display)] text-3xl sm:text-4xl lg:text-5xl text-[var(--m-dark)] font-bold tracking-tight">
            Tire todas as suas dúvidas sobre a Mentoria TDS
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--m-body)] leading-relaxed">
            Respostas objetivas e transparentes para as principais perguntas de
            quem quer ingressar na mentoria, mas ainda possui alguma dúvida.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-white border rounded-lg transition-all ${isOpen ? "border-[var(--m-bull)]" : "border-[var(--m-border)]"}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-[family-name:var(--m-font-display)] text-base sm:text-lg font-bold text-[var(--m-dark)]">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`text-[var(--m-caption)] w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-content ${isOpen ? "is-open" : ""}`}>
                  <div className="px-5 pb-5 text-[var(--m-body)] text-sm leading-relaxed border-t border-[var(--m-border)] pt-4">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="mt-10 text-center p-6 bg-white border border-[var(--m-border)] rounded-lg">
          <p className="text-base text-[var(--m-body)]">
            Ainda ficou com alguma dúvida sobre a mentoria? Fale com nosso time de
            atendimento.
          </p>
          <a
            className="inline-flex items-center gap-2 mt-2 font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-wider font-bold text-[var(--m-bull)] hover:underline"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-[18px] h-[18px]" />
            <span>Conversar via WhatsApp com a Equipe de Atendimento</span>
          </a>
        </div>
      </div>
    </section>
  );
}
