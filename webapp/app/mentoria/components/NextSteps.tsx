import { PlayCircle, Users, MonitorCog } from "lucide-react";

const MEMBERS_AREA_URL = "https://alunos.traderbrunoborges.com.br/";

export function NextSteps() {
    return (
        <section className="w-full bg-[var(--m-subtle)] border-b border-[var(--m-border)] py-14 lg:py-20" id="passos">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl mb-12">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[11px] font-bold uppercase mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
                        Ações Imediatas
                    </div>
                    <h2 className="font-[family-name:var(--m-font-display)] text-3xl sm:text-4xl text-[var(--m-dark)] font-bold tracking-tight">
                        Complete estes 3 passos para iniciar com segurança.
                    </h2>
                    <p className="mt-3 text-base sm:text-lg text-[var(--m-body)] leading-relaxed">
                        Não deixe para depois. A comunicação oficial e a liberação dos materiais preliminares acontecem através destes três canais essenciais.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Passo 1: Área de Membros */}
                    <div className="bg-white p-7 rounded-xl border-2 border-[var(--m-bull)]/30 shadow-sm flex flex-col justify-between hover:border-[var(--m-bull)] transition-all relative">
                        <div className="absolute -top-3 left-6 bg-[var(--m-bull)] text-white font-[family-name:var(--m-font-mono)] text-[10px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded shadow">
                            Passo Mais Importante
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-4 mt-2">
                                <span className="font-[family-name:var(--m-font-mono)] text-xs font-bold text-[var(--m-bull)] bg-[var(--m-bull-bg)] px-2.5 py-1 rounded border border-[var(--m-bull-border)]">PASSO 01</span>
                                <PlayCircle className="text-[var(--m-bull)] w-6 h-6" />
                            </div>
                            <h3 className="font-[family-name:var(--m-font-display)] text-xl font-bold text-[var(--m-dark)] mb-2">
                                Acessar a Área de Membros
                            </h3>
                            <p className="text-sm text-[var(--m-body)] leading-relaxed mb-6">
                                Você recebeu um e-mail com o assunto &quot;Seu acesso à Mentoria Trader de Sucesso&quot;. Defina sua senha para acessar as aulas de nivelamento imediatamente.
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
                            <span className="block text-center font-[family-name:var(--m-font-mono)] text-[10px] text-[var(--m-caption)] mt-2.5">Não achou? Verifique o Spam/Lixeira</span>
                        </div>
                    </div>

                    {/* Passo 2: Grupo Exclusivo */}
                    <div className="bg-white p-7 rounded-xl border border-[var(--m-border)] shadow-sm flex flex-col justify-between hover:border-[var(--m-dark)] transition-all">
                        <div>
                            <div className="flex items-center justify-between mb-4 mt-2">
                                <span className="font-[family-name:var(--m-font-mono)] text-xs font-bold text-[var(--m-dark)] bg-[var(--m-subtle)] px-2.5 py-1 rounded border border-[var(--m-border)]">PASSO 02</span>
                                <Users className="text-[var(--m-dark)] w-6 h-6" />
                            </div>
                            <h3 className="font-[family-name:var(--m-font-display)] text-xl font-bold text-[var(--m-dark)] mb-2">
                                Entrar no Grupo Exclusivo da Turma
                            </h3>
                            <p className="text-sm text-[var(--m-body)] leading-relaxed mb-6">
                                O link de acesso ao grupo está disponível logo nas primeiras aulas da área de membros. É por lá que você receberá avisos diários do pregão e interagirá diretamente com o Bruno Borges e colegas.
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
                                <span>Ver Instruções na Área de Membros</span>
                            </a>
                            <span className="block text-center font-[family-name:var(--m-font-mono)] text-[10px] text-[var(--m-caption)] mt-2.5">Acesso restrito aos matriculados</span>
                        </div>
                    </div>

                    {/* Passo 3: Configurar ProfitPro */}
                    <div className="bg-white p-7 rounded-xl border border-[var(--m-border)] shadow-sm flex flex-col justify-between hover:border-[var(--m-dark)] transition-all">
                        <div>
                            <div className="flex items-center justify-between mb-4 mt-2">
                                <span className="font-[family-name:var(--m-font-mono)] text-xs font-bold text-[var(--m-dark)] bg-[var(--m-subtle)] px-2.5 py-1 rounded border border-[var(--m-border)]">PASSO 03</span>
                                <MonitorCog className="text-[var(--m-dark)] w-6 h-6" />
                            </div>
                            <h3 className="font-[family-name:var(--m-font-display)] text-xl font-bold text-[var(--m-dark)] mb-2">
                                Configurar o ProfitPro
                            </h3>
                            <p className="text-sm text-[var(--m-body)] leading-relaxed mb-6">
                                Utilizamos e recomendamos o ProfitPro para acompanhar as aulas. O arquivo da Tela Operacional do Método TDS — a mesma que o Bruno usa no pregão — já está disponível no primeiro módulo do curso.
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
                            <span className="block text-center font-[family-name:var(--m-font-mono)] text-[10px] text-[var(--m-caption)] mt-2.5">Disponível no Módulo 1</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
