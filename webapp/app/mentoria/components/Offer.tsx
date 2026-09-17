import {
  CalendarCheck,
  Flag,
  CheckCircle2,
  Lock,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";
import { HOTMART_URL } from "../config";

const included = [
  { bold: "60 dias de Mentoria TDS", rest: " com encontros práticos" },
  { bold: "3 aulas ao vivo por semana", rest: " diretamente com Bruno Borges" },
  {
    bold: "+100 horas de conteúdo",
    rest: " estruturado do básico ao avançado",
  },
  {
    bold: "30 dias de Sala Educacional",
    rest: " ao vivo de manhã (Bônus Exclusivo)",
  },
  {
    bold: "",
    rest: "Aulas práticas com alunos operando aos sábados",
  },
  { bold: "Grupo exclusivo", rest: " da turma para troca de estudos diários" },
  { bold: "Suporte de dúvidas diretamente com Bruno Borges", rest: "" },
  { bold: "Acesso vitalício às gravações", rest: " de todas as aulas" },
  {
    bold: "",
    rest: "Todos os materiais complementares e planilhas do Método TDS",
  },
];

export function Offer() {
  return (
    <section
      className="w-full bg-[var(--m-surface)] border-b border-[var(--m-border)] py-16 lg:py-24"
      id="inscricao"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[var(--m-subtle)] border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[11px] font-bold uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
            Vagas Limitadas
          </div>
          <h2 className="font-[family-name:var(--m-font-display)] text-3xl sm:text-4xl lg:text-5xl text-[var(--m-dark)] font-bold tracking-tight">
            Sua evolução no mercado pode começar aqui.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--m-body)] leading-relaxed">
            Garanta sua vaga na Mentoria Trader de Sucesso e tenha acesso a 60
            dias de imersão direta com o Bruno Borges aprendendo o Método TDS.
          </p>
        </div>

        {/* Pricing Terminal Card */}
        <div className="bg-white border-2 border-[var(--m-border)] rounded-xl shadow-xl overflow-hidden mb-10">
          {/* Dates Header Banner */}
          <div className="bg-[var(--m-dark)] text-white px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-wide">
            <div className="flex items-center gap-2">
              <CalendarCheck className="text-[var(--m-bull)] w-[18px] h-[18px]" />
              <span>Inscrições abertas: 17/09/2026</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--m-bull-light)]">
              <Flag className="w-[18px] h-[18px]" />
              <span>Início das aulas: 29/09/2026</span>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Checklist Column */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <h3 className="font-[family-name:var(--m-font-display)] text-xl sm:text-2xl font-bold text-[var(--m-dark)] mb-5 uppercase tracking-wide">
                    Tudo que está incluído:
                  </h3>
                  <ul className="space-y-3 text-sm text-[var(--m-body)]">
                    {included.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="text-[var(--m-bull)] w-[18px] h-[18px] mt-0.5 flex-shrink-0" />
                        <span>
                          {item.bold && (
                            <strong className="text-[var(--m-dark)] font-semibold">
                              {item.bold}
                            </strong>
                          )}
                          {item.rest}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-[var(--m-border)] flex items-center gap-2 text-[var(--m-caption)] font-[family-name:var(--m-font-mono)] text-[11px] uppercase">
                  <Lock className="text-[var(--m-bull)] w-4 h-4" />
                  <span>
                    Pagamento seguro • Acesso instantâneo à plataforma
                  </span>
                </div>
              </div>

              {/* Pricing Terminal Column */}
              <div className="lg:col-span-5 bg-[var(--m-subtle)] p-6 sm:p-8 rounded-lg border border-[var(--m-border)] flex flex-col justify-between">
                <div>
                  <span className="font-[family-name:var(--m-font-mono)] text-[10px] text-[var(--m-dark)] bg-white px-2.5 py-1 border border-[var(--m-border)] rounded uppercase font-bold tracking-wider inline-block mb-3">
                    Valor Promocional da Turma
                  </span>
                  <div className="text-[var(--m-caption)] text-xs font-[family-name:var(--m-font-mono)] line-through mb-1">
                    De R$ 4.199,00 por apenas:
                  </div>
                  <div className="mb-4">
                    <span className="text-xs font-[family-name:var(--m-font-mono)] uppercase text-[var(--m-caption)]">
                      12x de
                    </span>
                    <div className="font-[family-name:var(--m-font-display)] text-4xl sm:text-5xl text-[var(--m-dark)] font-bold tracking-tight my-1 tabular-nums">
                      R$ 124,11
                    </div>
                    <span className="text-xs font-[family-name:var(--m-font-mono)] text-[var(--m-caption)]">
                      no cartão de crédito
                    </span>
                  </div>
                  <div className="p-3 bg-white border border-[var(--m-border)] rounded mb-5">
                    <span className="text-xs text-[var(--m-caption)] block">
                      Ou à vista com desconto:
                    </span>
                    <div className="font-[family-name:var(--m-font-mono)] text-xl text-[var(--m-bull)] font-bold tabular-nums">
                      R$ 1.200,00
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <a
                    className="w-full h-13 bg-[var(--m-bull)] hover:bg-[var(--m-bull-light)] text-white font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-wider font-bold rounded flex items-center justify-center gap-2 transition-all shadow-md group"
                    href={HOTMART_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Garantir minha vaga</span>
                    <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-center font-[family-name:var(--m-font-mono)] text-[10px] text-[var(--m-caption)] uppercase">
                    Vagas limitadas para garantir o suporte direto
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Guarantee Box */}
        <div className="bg-[var(--m-subtle)] p-6 sm:p-8 rounded-lg border border-[var(--m-border)] flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 bg-white border border-[var(--m-border)] rounded-lg flex items-center justify-center flex-shrink-0 text-[var(--m-bull)]">
            <BadgeCheck className="w-9 h-9" />
          </div>
          <div className="space-y-2 flex-grow">
            <h3 className="font-[family-name:var(--m-font-display)] text-xl sm:text-2xl text-[var(--m-dark)] font-bold">
              15 dias para conhecer a Mentoria por dentro.
            </h3>
            <p className="text-sm sm:text-base text-[var(--m-body)] leading-relaxed">
              Se durante os primeiros 15 dias de mentoria você achar que o
              conteúdo não é para você, que o método não faz sentido ou
              simplesmente não quiser continuar, basta solicitar o reembolso.
              Devolveremos 100% do seu investimento sem questionamentos e sem
              burocracia. O risco é todo nosso.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="font-[family-name:var(--m-font-mono)] text-[10px] uppercase bg-white text-[var(--m-dark)] px-2.5 py-1 border border-[var(--m-border)] rounded">
                Reembolso integral dentro do período
              </span>
              <span className="font-[family-name:var(--m-font-mono)] text-[10px] uppercase bg-white text-[var(--m-dark)] px-2.5 py-1 border border-[var(--m-border)] rounded">
                Sem burocracia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
