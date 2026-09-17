import { Mail, MonitorSmartphone, Headset, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5562982612893?text=" + encodeURIComponent("Olá! Realizei a compra da Mentoria Trader de Sucesso, mas tenho algumas dúvidas.");

export function SupportCenter() {
    return (
        <section className="w-full bg-[var(--m-surface)] py-14 lg:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[var(--m-subtle)] border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[11px] font-bold uppercase mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
                        Central de Suporte
                    </div>
                    <h2 className="font-[family-name:var(--m-font-display)] text-2xl sm:text-3xl lg:text-4xl text-[var(--m-dark)] font-bold tracking-tight">
                        Teve alguma dificuldade para acessar?
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-[var(--m-body)] leading-relaxed">
                        Nossa equipe de suporte técnico e pedagógico está de prontidão para garantir que você esteja 100% ambientado antes do primeiro pregão.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="p-5 bg-[var(--m-subtle)] border border-[var(--m-border)] rounded-lg">
                        <div className="flex items-center gap-2 text-[var(--m-dark)] font-[family-name:var(--m-font-display)] font-bold text-base mb-2">
                            <Mail className="text-[var(--m-bull)] w-5 h-5" />
                            <span>Não recebeu o e-mail da Hotmart?</span>
                        </div>
                        <p className="text-xs text-[var(--m-body)] leading-relaxed">
                            Verifique as pastas &quot;Promoções&quot;, &quot;Spam&quot; ou &quot;Lixeira&quot;. Caso tenha utilizado um e-mail diferente na compra, busque pelo remetente Hotmart Club.
                        </p>
                    </div>
                    <div className="p-5 bg-[var(--m-subtle)] border border-[var(--m-border)] rounded-lg">
                        <div className="flex items-center gap-2 text-[var(--m-dark)] font-[family-name:var(--m-font-display)] font-bold text-base mb-2">
                            <MonitorSmartphone className="text-[var(--m-bull)] w-5 h-5" />
                            <span>Plataforma gráfica recomendada</span>
                        </div>
                        <p className="text-xs text-[var(--m-body)] leading-relaxed">
                            Você pode utilizar o Profit (qualquer versão) ou TradingView. No primeiro módulo, Bruno ensina a configurar a coloração e regras limpas em ambas.
                        </p>
                    </div>
                </div>

                <div className="p-6 bg-white border-2 border-[var(--m-border)] rounded-xl text-center flex flex-col items-center">
                    <span className="w-10 h-10 rounded-full bg-[var(--m-bull-bg)] text-[var(--m-bull)] flex items-center justify-center mb-3">
                        <Headset className="w-6 h-6" />
                    </span>
                    <h3 className="font-[family-name:var(--m-font-display)] text-lg font-bold text-[var(--m-dark)] mb-1">
                        Falar com o Suporte Exclusivo de Alunos
                    </h3>
                    <p className="text-xs text-[var(--m-caption)] mb-4 max-w-md">
                        Atendimento prioritário de Segunda a Sexta das 8h00 às 20h00 e aos Sábados das 9h00 às 14h00.
                    </p>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-[var(--m-dark)] hover:bg-slate-800 text-white font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-wider font-bold rounded flex items-center gap-2 transition-all shadow"
                    >
                        <MessageCircle className="text-[var(--m-bull-light)] w-[18px] h-[18px]" />
                        <span>Chamar no WhatsApp de Suporte</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
