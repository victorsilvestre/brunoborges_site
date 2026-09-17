import Image from "next/image";
import { Mail, Users, CalendarCheck, ShieldCheck, Smartphone } from "lucide-react";

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
                            Parabéns, sua vaga na{" "}
                            <span className="text-[var(--m-bull)] bg-[var(--m-bull-bg)] px-2 py-0.5 rounded border border-[var(--m-bull-border)] inline-block">
                                Mentoria Trader de Sucesso
                            </span>{" "}
                            está confirmada.
                        </h1>
                        <p className="text-base sm:text-lg text-[var(--m-body)] leading-relaxed mb-6 pl-4 border-l-2 border-[var(--m-bull)]">
                            Seu acesso foi liberado. A partir de agora, você faz parte de um grupo seleto de operadores comprometidos com a leitura contextual e a autonomia de mercado. Siga o passo a passo abaixo para acessar a área de membros, entrar no grupo exclusivo e preparar sua estação para os 60 dias de imersão.
                        </p>

                        {/* Quick Highlights */}
                        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 border border-[var(--m-border)] bg-[var(--m-subtle)] rounded-lg mb-6">
                            <div className="flex items-center gap-2.5">
                                <Mail className="text-[var(--m-bull)] w-5 h-5" />
                                <div>
                                    <div className="text-[10px] font-[family-name:var(--m-font-mono)] text-[var(--m-caption)] uppercase">Link de Acesso</div>
                                    <div className="text-xs font-bold text-[var(--m-dark)]">Enviado ao seu e-mail</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5 border-t sm:border-t-0 sm:border-l border-[var(--m-border)] pt-2 sm:pt-0 sm:pl-3">
                                <Users className="text-[var(--m-bull)] w-5 h-5" />
                                <div>
                                    <div className="text-[10px] font-[family-name:var(--m-font-mono)] text-[var(--m-caption)] uppercase">Comunidade</div>
                                    <div className="text-xs font-bold text-[var(--m-dark)]">Grupo VIP liberado</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5 border-t sm:border-t-0 sm:border-l border-[var(--m-border)] pt-2 sm:pt-0 sm:pl-3">
                                <CalendarCheck className="text-[var(--m-bull)] w-5 h-5" />
                                <div>
                                    <div className="text-[10px] font-[family-name:var(--m-font-mono)] text-[var(--m-caption)] uppercase">Primeiro Encontro</div>
                                    <div className="text-xs font-bold text-[var(--m-dark)]">29/09 às 19h00</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 font-[family-name:var(--m-font-mono)] text-xs text-[var(--m-dark)]">
                            <ShieldCheck className="text-[var(--m-bull)] w-5 h-5" />
                            <span>Ambiente 100% verificado. Suas credenciais estão protegidas pelo protocolo TDS.</span>
                        </div>
                    </div>

                    {/* Right: Institutional Ticket + QR Code */}
                    <div className="lg:col-span-5 w-full">
                        <div className="bg-white border-2 border-[var(--m-border)] rounded-xl shadow-lg overflow-hidden relative">
                            <div className="bg-[var(--m-dark)] text-white p-4 flex items-center justify-between border-b border-slate-700">
                                <div className="flex items-center gap-2">
                                    <span className="px-1.5 py-0.5 bg-[var(--m-bull)] text-white font-[family-name:var(--m-font-mono)] text-[10px] font-bold rounded">CONFIRMADO</span>
                                    <span className="font-[family-name:var(--m-font-mono)] text-xs tracking-wider">CREDENCIAL DO ALUNO</span>
                                </div>
                                <span className="font-[family-name:var(--m-font-mono)] text-xs text-[var(--m-bull-light)]">TDS PROTOCOL</span>
                            </div>

                            <div className="p-5 bg-white space-y-4 font-[family-name:var(--m-font-mono)] text-xs">
                                <div className="flex items-center justify-between pb-3 border-b border-dashed border-[var(--m-border)]">
                                    <span className="text-[var(--m-caption)]">PROGRAMA</span>
                                    <span className="text-[var(--m-dark)] font-bold text-right">Mentoria TDS 60 Dias + Sala</span>
                                </div>
                                <div className="flex items-center justify-between pb-3 border-b border-dashed border-[var(--m-border)]">
                                    <span className="text-[var(--m-caption)]">INÍCIO OFICIAL</span>
                                    <span className="text-[var(--m-bull)] font-bold">29/09/2026 às 19:00</span>
                                </div>
                                <div className="flex items-center justify-between pb-3 border-b border-dashed border-[var(--m-border)]">
                                    <span className="text-[var(--m-caption)]">CANAL DE PAGAMENTO</span>
                                    <span className="text-[var(--m-dark)] font-medium">Hotmart Pay (Aprovado)</span>
                                </div>
                                <div className="flex items-center justify-between pb-3 border-b border-dashed border-[var(--m-border)]">
                                    <span className="text-[var(--m-caption)]">GARANTIA INCONDICIONAL</span>
                                    <span className="text-[var(--m-dark)] font-bold">15 Dias Ativos</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[var(--m-caption)]">ACESSO ÀS GRAVAÇÕES</span>
                                    <span className="text-[var(--m-bull)] font-bold bg-[var(--m-bull-bg)] border border-[var(--m-bull-border)] px-2 py-0.5 rounded">VITALÍCIO</span>
                                </div>
                            </div>

                            {/* QR Code + Mobile Access */}
                            <div className="p-4 bg-[var(--m-subtle)] border-t border-[var(--m-border)] flex items-center gap-4">
                                <div className="relative w-24 h-24 bg-white border border-[var(--m-border)] rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
                                    <Image
                                        src="/images/qrcode/qrcode_AreaMembros.png"
                                        alt="QR Code de acesso à Área de Membros"
                                        fill
                                        className="object-contain p-1.5"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <span className="font-[family-name:var(--m-font-mono)] text-[10px] text-[var(--m-caption)] uppercase font-bold">Acesso Rápido Mobile</span>
                                    <p className="text-xs text-[var(--m-body)] leading-tight">
                                        Aponte a câmera do celular para acessar a área de membros direto do seu smartphone.
                                    </p>
                                    <span className="inline-flex items-center gap-1 font-[family-name:var(--m-font-mono)] text-[10px] text-[var(--m-bull)] font-semibold">
                                        <Smartphone className="w-3.5 h-3.5" />
                                        Disponível iOS &amp; Android
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
