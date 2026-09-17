import { PlayCircle, Users, MonitorCog } from "lucide-react";

const MEMBERS_AREA_URL = "https://alunos.traderbrunoborges.com.br/";

export function NextSteps() {
  return (
    <section
      className="w-full bg-[var(--m-subtle)] border-b border-[var(--m-border)] py-14 lg:py-20"
      id="passos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[11px] font-bold uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
            Comece por Aqui
          </div>
          <h2 className="font-[family-name:var(--m-font-display)] text-3xl sm:text-4xl text-[var(--m-dark)] font-bold tracking-tight">
            3 passos simples para deixar tudo pronto antes da primeira aula.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--m-body)] leading-relaxed">
            Reserve alguns minutos para concluir essas etapas antes do início da
            Mentoria. Assim, você já chega preparado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Passo 1: Área de Membros */}
          <div className="bg-white p-7 rounded-xl border-2 border-[var(--m-bull)]/30 shadow-sm flex flex-col justify-between hover:border-[var(--m-bull)] transition-all relative">
            <div className="absolute -top-3 left-6 bg-[var(--m-bull)] text-white font-[family-name:var(--m-font-mono)] text-[10px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded shadow">
              Tudo Acontece Aqui
            </div>
            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="font-[family-name:var(--m-font-mono)] text-xs font-bold text-[var(--m-bull)] bg-[var(--m-bull-bg)] px-2.5 py-1 rounded border border-[var(--m-bull-border)]">
                  PASSO 01
                </span>
                <PlayCircle className="text-[var(--m-bull)] w-6 h-6" />
              </div>
              <h3 className="font-[family-name:var(--m-font-display)] text-xl font-bold text-[var(--m-dark)] mb-2">
                Acesse a Área de Membros
              </h3>
              <p className="text-sm text-[var(--m-body)] leading-relaxed mb-6">
                Seu acesso à Mentoria já está liberado. Clique no botão abaixo
                para entrar diretamente na Área de Membros e acessar as aulas,
                materiais e conteúdos de preparação.
              </p>
            </div>
            <div>
              <a
                href={MEMBERS_AREA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[var(--m-bull)] hover:bg-[var(--m-bull-light)] text-white font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-wider font-bold rounded flex items-center justify-center gap-2 transition-all shadow"
              >
                <PlayCircle className="w-[18px] h-[18px]" />
                <span>Acessar Área de Membros</span>
              </a>
              <span className="block text-center font-[family-name:var(--m-font-mono)] text-[10px] text-[var(--m-caption)] mt-2.5">
                Link de acesso também liberado no seu e-mail
              </span>
            </div>
          </div>

          {/* Passo 2: Grupo Exclusivo */}
          <div className="bg-white p-7 rounded-xl border border-[var(--m-border)] shadow-sm flex flex-col justify-between hover:border-[var(--m-dark)] transition-all">
            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="font-[family-name:var(--m-font-mono)] text-xs font-bold text-[var(--m-dark)] bg-[var(--m-subtle)] px-2.5 py-1 rounded border border-[var(--m-border)]">
                  PASSO 02
                </span>
                <Users className="text-[var(--m-dark)] w-6 h-6" />
              </div>
              <h3 className="font-[family-name:var(--m-font-display)] text-xl font-bold text-[var(--m-dark)] mb-2">
                Entre no Grupo da Turma
              </h3>
              <p className="text-sm text-[var(--m-body)] leading-relaxed mb-6">
                O acesso ao grupo está disponível nas primeiras aulas da área de
                membros. É por lá que você acompanha os principais avisos,
                interage com Bruno e troca experiências com os outros alunos da
                turma.
              </p>
            </div>
            <div>
              <a
                href={MEMBERS_AREA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[var(--m-dark)] hover:bg-slate-800 text-white font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-wider font-bold rounded flex items-center justify-center gap-2 transition-all shadow"
              >
                <Users className="w-[18px] h-[18px]" />
                <span>VER COMO ENTRAR NO GRUPO</span>
              </a>
              <span className="block text-center font-[family-name:var(--m-font-mono)] text-[10px] text-[var(--m-caption)] mt-2.5">
                Acesso exclusivo para alunos da Mentoria
              </span>
            </div>
          </div>

          {/* Passo 3: Configurar ProfitPro */}
          <div className="bg-white p-7 rounded-xl border border-[var(--m-border)] shadow-sm flex flex-col justify-between hover:border-[var(--m-dark)] transition-all">
            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="font-[family-name:var(--m-font-mono)] text-xs font-bold text-[var(--m-dark)] bg-[var(--m-subtle)] px-2.5 py-1 rounded border border-[var(--m-border)]">
                  PASSO 03
                </span>
                <MonitorCog className="text-[var(--m-dark)] w-6 h-6" />
              </div>
              <h3 className="font-[family-name:var(--m-font-display)] text-xl font-bold text-[var(--m-dark)] mb-2">
                Prepare o Profit
              </h3>
              <p className="text-sm text-[var(--m-body)] leading-relaxed mb-6">
                O Profit da Nelogica será utilizado durante as aulas para
                acompanhar as análises e estudos de mercado. No primeiro módulo,
                você encontra a Tela Operacional utilizada pelo Bruno para
                configurar sua plataforma.
              </p>
            </div>
            <div>
              <a
                href={MEMBERS_AREA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[var(--m-subtle)] hover:bg-slate-200 border border-[var(--m-border)] text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-wider font-bold rounded flex items-center justify-center gap-2 transition-colors"
              >
                <MonitorCog className="w-[18px] h-[18px]" />
                <span>Baixar Tela Operacional</span>
              </a>
              <span className="block text-center font-[family-name:var(--m-font-mono)] text-[10px] text-[var(--m-caption)] mt-2.5">
                Disponível no Módulo 1
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
