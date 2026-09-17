import { Mail, MonitorSmartphone, Headset, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5562982612893?text=" +
  encodeURIComponent(
    "Olá! Realizei a compra da Mentoria Trader de Sucesso, mas tenho algumas dúvidas.",
  );

export function SupportCenter() {
  return (
    <section className="w-full bg-[var(--m-surface)] py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[var(--m-subtle)] border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[11px] font-bold uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
            Precisa de Ajuda?
          </div>
          <h2 className="font-[family-name:var(--m-font-display)] text-2xl sm:text-3xl lg:text-4xl text-[var(--m-dark)] font-bold tracking-tight">
            Se alguma coisa não funcionar,
            <br /> fale com a gente.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--m-body)] leading-relaxed">
            A ideia é que você chegue para a primeira aula da Mentoria com tudo funcionando
            e sem dúvidas sobre acesso ou próximos passos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-5 bg-[var(--m-subtle)] border border-[var(--m-border)] rounded-lg">
            <div className="flex items-center gap-2 text-[var(--m-dark)] font-[family-name:var(--m-font-display)] font-bold text-base mb-2">
              <Mail className="text-[var(--m-bull)] w-5 h-5" />
              <span>Não conseguiu acessar a Área de Membros?</span>
            </div>
            <p className="text-xs text-[var(--m-body)] leading-relaxed">
              Confira se você está tentando entrar com o mesmo e-mail utilizado
              na compra da Mentoria. O acesso é vinculado a esse endereço. Se o
              erro persistir, fale com o suporte pelo WhatsApp abaixo.
            </p>
          </div>
          <div className="p-5 bg-[var(--m-subtle)] border border-[var(--m-border)] rounded-lg">
            <div className="flex items-center gap-2 text-[var(--m-dark)] font-[family-name:var(--m-font-display)] font-bold text-base mb-2">
              <MonitorSmartphone className="text-[var(--m-bull)] w-5 h-5" />
              <span>Ficou com alguma dúvida sobre o início da Mentoria?</span>
            </div>
            <p className="text-xs text-[var(--m-body)] leading-relaxed">
              Se você não souber onde encontrar um conteúdo, como entrar no
              grupo da turma ou qual é o próximo passo, fale com o suporte. A
              equipe te orienta para que você comece com tudo organizado.
            </p>
          </div>
        </div>

        <div className="p-6 bg-white border-2 border-[var(--m-border)] rounded-xl text-center flex flex-col items-center">
          <span className="w-10 h-10 rounded-full bg-[var(--m-bull-bg)] text-[var(--m-bull)] flex items-center justify-center mb-3">
            <Headset className="w-6 h-6" />
          </span>
          <h3 className="font-[family-name:var(--m-font-display)] text-lg font-bold text-[var(--m-dark)] mb-1">
            Fale com o Suporte de Alunos
          </h3>
          <p className="text-xs text-[var(--m-caption)] mb-4 max-w-md">
            Se tiver qualquer dificuldade com acesso, grupo, conteúdo ou
            materiais, fale com nosso suporte pelo WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[var(--m-dark)] hover:bg-slate-800 text-white font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-wider font-bold rounded flex items-center gap-2 transition-all shadow"
          >
            <MessageCircle className="text-[var(--m-bull-light)] w-[18px] h-[18px]" />
            <span>Chamar o Suporte no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
