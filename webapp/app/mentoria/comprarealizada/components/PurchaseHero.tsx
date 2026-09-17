import Image from "next/image";
import {
  Mail,
  Users,
  CalendarCheck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const MEMBERS_AREA_URL = "https://alunos.traderbrunoborges.com.br/";

export function PurchaseHero() {
  return (
    <section className="relative w-full border-b border-[var(--m-border)] pt-8 pb-14 lg:pt-12 lg:pb-20 grid-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Status Badge Row */}
        <div className="flex items-center pb-4 mb-6 border-b border-[var(--m-border)] gap-3 text-xs font-[family-name:var(--m-font-mono)]">
          <div className="inline-flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--m-bull)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--m-bull)]" />
            </span>
            <span className="px-2 py-0.5 bg-[var(--m-bull-bg)] border border-[var(--m-bull-border)] text-[var(--m-bull)] font-bold rounded uppercase">
              Pagamento Aprovado
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Confirmation Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="font-[family-name:var(--m-font-display)] text-3xl sm:text-4xl lg:text-[46px] leading-[1.12] text-[var(--m-dark)] font-bold tracking-tight mb-5">
              Boas-Vindas à{" "}
              <span className="text-[var(--m-bull)] bg-[var(--m-bull-bg)] px-2 py-0.5 rounded border border-[var(--m-bull-border)] inline-block">
                Mentoria Trader de Sucesso
              </span>
              Sua vaga está confirmada
            </h1>
            <p className="text-base sm:text-lg text-[var(--m-body)] leading-relaxed mb-6 pl-4 border-l-2 border-[var(--m-bull)]">
              Que bom ter você com a gente. A partir de agora você faz parte da
              família TDS. Logo abaixo está o passo a passo para acessar tudo, se
              organizar e chegar preparado.
            </p>

            {/* Quick Highlights */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 border border-[var(--m-border)] bg-[var(--m-subtle)] rounded-lg mb-6">
              <div className="flex items-center gap-2.5">
                <Mail className="text-[var(--m-bull)] w-5 h-5" />
                <div>
                  <div className="text-[10px] font-[family-name:var(--m-font-mono)] text-[var(--m-caption)] uppercase">
                    Acesso à Plataforma
                  </div>
                  <div className="text-xs font-bold text-[var(--m-dark)]">
                    Disponibilizado
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 border-t sm:border-t-0 sm:border-l border-[var(--m-border)] pt-2 sm:pt-0 sm:pl-3">
                <Users className="text-[var(--m-bull)] w-5 h-5" />
                <div>
                  <div className="text-[10px] font-[family-name:var(--m-font-mono)] text-[var(--m-caption)] uppercase">
                    Comunidade
                  </div>
                  <div className="text-xs font-bold text-[var(--m-dark)]">
                    Grupo da turma liberado
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 border-t sm:border-t-0 sm:border-l border-[var(--m-border)] pt-2 sm:pt-0 sm:pl-3">
                <CalendarCheck className="text-[var(--m-bull)] w-5 h-5" />
                <div>
                  <div className="text-[10px] font-[family-name:var(--m-font-mono)] text-[var(--m-caption)] uppercase">
                    Primeira aula
                  </div>
                  <div className="text-xs font-bold text-[var(--m-dark)]">
                    29/09 às 19h00
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Institutional Ticket + QR Code */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white border-2 border-[var(--m-border)] rounded-xl shadow-lg overflow-hidden relative">
              <div className="bg-[var(--m-dark)] text-white p-4 flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="font-[family-name:var(--m-font-mono)] text-xs tracking-wider">
                    RESUMO DA MATRÍCULA
                  </span>
                </div>
                <span className="font-[family-name:var(--m-font-mono)] text-xs text-[var(--m-bull-light)]">
                  MENTORIA TDS
                </span>
              </div>

              <div className="p-5 bg-white space-y-4 font-[family-name:var(--m-font-mono)] text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-dashed border-[var(--m-border)]">
                  <span className="text-[var(--m-caption)]">TURMA</span>
                  <span className="text-[var(--m-dark)] font-bold text-right">
                    Setembro/26
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-dashed border-[var(--m-border)]">
                  <span className="text-[var(--m-caption)]">
                    INÍCIO DAS AULAS
                  </span>
                  <span className="text-[var(--m-bull)] font-bold">
                    29/09/2026 às 19:00
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-dashed border-[var(--m-border)]">
                  <span className="text-[var(--m-caption)]">PAGAMENTO</span>
                  <span className="text-[var(--m-dark)] font-medium">
                    Hotmart Pay (Aprovado)
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-dashed border-[var(--m-border)]">
                  <span className="text-[var(--m-caption)]">GARANTIA</span>
                  <span className="text-[var(--m-dark)] font-bold">
                    15 Dias
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--m-caption)]">
                    ACESSO ÀS GRAVAÇÕES
                  </span>
                  <span className="text-[var(--m-bull)] font-bold bg-[var(--m-bull-bg)] border border-[var(--m-bull-border)] px-2 py-0.5 rounded">
                    VITALÍCIO
                  </span>
                </div>
              </div>

              {/* Members Area Access */}
              <div className="p-4 bg-[var(--m-subtle)] border-t border-[var(--m-border)] flex items-center gap-4">
                <div className="relative w-24 h-24 bg-white border border-[var(--m-border)] rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src="/images/qrcode/qrcode_AreaMembros.png"
                    alt="QR Code de acesso à Área de Membros"
                    fill
                    className="object-contain p-1.5"
                  />
                </div>
                <div className="space-y-1.5 flex-grow">
                  <span className="font-[family-name:var(--m-font-mono)] text-[10px] text-[var(--m-caption)] uppercase font-bold">
                    Área de Membros
                  </span>
                  <p className="text-xs text-[var(--m-body)] leading-tight">
                    Aponte a câmera do celular ou clique no botão abaixo para acessar
                    a plataforma de aulas e materiais complementares.
                  </p>
                  <a
                    href={MEMBERS_AREA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-[var(--m-bull)] hover:bg-[var(--m-bull-light)] text-white font-[family-name:var(--m-font-mono)] text-[10px] uppercase tracking-wider font-bold rounded transition-all"
                  >
                    Acessar Área de Membros
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
