"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Lock, ArrowRight, MessageCircle } from "lucide-react";
import { FadeIn } from "../../components/FadeIn";

const TELEGRAM_URL = "https://t.me/fernanda_bs";
const PRODUCT_NAME = "Mentoria TDS — Bruno Borges";
const NEXT_CLASS = "15 de Abril de 2026";

const NEXT_STEPS = [
    {
        step: "01",
        title: "Fale com a Fernanda",
        description: "Envie uma mensagem no Telegram com o comprovante de pagamento para receber o acesso ao grupo exclusivo da turma e demais instruções da mentoria.",
    },
    {
        step: "02",
        title: "Acesse o grupo exclusivo",
        description: "Você será adicionado no grupo exclusivo da turma. O grupo é dividido em várias abas, aproveite para conhecer elas e entender qual o objetivo de cada uma.",
    },
    {
        step: "03",
        title: "Apresente-se e conheça a galera",
        description: `Já que chegou, puxa a cadeira, se apresenta e conheça seus companheiros de mentoria. Todos possuem o mesmo objetivo que você, aprender e evoluir. Fazer isso em grupo torna tudo mais fácil.`,
    },
    {
        step: "04",
        title: "Prepare-se para o início das aulas",
        description: `A mentoria começa em ${NEXT_CLASS}. Isso quer dizer que você tem um tempinho para devorar os vídeos no canal do Bruno, rever as aulas da Maratona e chegar ainda meis preparado pro início das aulas. Aproveite!`,
    },
];

export default function ObrigadoPage() {
    return (
        <main className="min-h-screen bg-[var(--light-elevated)] flex flex-col selection:bg-[var(--green-bull)] selection:text-white">

            {/* Top bar */}
            <header className="bg-white border-b border-slate-100 py-4 px-6 flex items-center justify-between">
                <img
                    src="/images/logo/logo_icon-black-1.png"
                    alt="Bruno Borges"
                    className="h-8 w-8 object-contain"
                />
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                    <Lock className="w-3.5 h-3.5" />
                    Ambiente Seguro
                </div>
            </header>

            <div className="flex-1 flex items-start justify-center px-4 py-10 md:py-16">
                <div className="w-full max-w-lg">

                    {/* Success icon */}
                    <FadeIn>
                        <div className="flex justify-center mb-6">
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                                className="w-20 h-20 rounded-full bg-[var(--green-bull)]/10 flex items-center justify-center"
                            >
                                <CheckCircle2 className="w-10 h-10 text-[var(--green-bull)]" strokeWidth={1.5} />
                            </motion.div>
                        </div>
                    </FadeIn>

                    {/* Page title */}
                    <FadeIn delay={0.08}>
                        <div className="mb-8 text-center">
                            <p className="text-xs font-black uppercase tracking-[0.25em] text-[var(--green-bull)] mb-2">
                                Pagamento Confirmado
                            </p>
                            <h1 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tight text-[var(--dark-pure)] leading-tight">
                                Bem-vindo à Mentoria Trader de Sucesso
                            </h1>
                            <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
                                Sua inscrição foi recebida com sucesso. 
                                Siga os passos para entrar no grupo exclusivo da turma.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Product summary */}
                    <FadeIn delay={0.14}>
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6 flex items-center justify-between gap-4">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
                                    Produto
                                </p>
                                <p className="font-display font-black text-base uppercase tracking-tight text-[var(--dark-pure)]">
                                    {PRODUCT_NAME}
                                </p>
                                <p className="text-xs text-slate-400 mt-0.5 font-medium">Turma: {NEXT_CLASS}</p>
                            </div>
                            <div className="shrink-0 flex items-center gap-2 bg-[var(--green-bull)]/10 text-[var(--green-bull)] px-4 py-2 rounded-xl">
                                <CheckCircle2 className="w-4 h-4" />
                                <span className="text-xs font-black uppercase tracking-widest">Aprovado</span>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Main CTA */}
                    <FadeIn delay={0.2}>
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8 mb-6">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
                                Próximo passo obrigatório
                            </p>
                            <h2 className="font-display font-black text-xl uppercase tracking-tight text-[var(--dark-pure)] mb-2">
                                Fale com a Fernanda
                            </h2>
                            <p className="text-sm text-slate-500 leading-relaxed mb-6">
                                Entre em contato pelo Telegram para enviar o comprovante de pagamento e receber as instruções de acesso.
                            </p>

                            <a
                                href={TELEGRAM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden w-full flex items-center justify-center gap-3 py-5 px-8 rounded-xl text-base font-display font-black uppercase tracking-wider text-white transition-shadow duration-200 shadow-[0_4px_24px_rgba(0,136,204,0.25)] hover:shadow-[0_6px_36px_rgba(0,136,204,0.40)]"
                                style={{ backgroundColor: "#0088cc" }}
                            >
                                <TelegramIcon />
                                Enviar comprovante
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            </a>
                        </div>
                    </FadeIn>

                    {/* Next steps */}
                    <FadeIn delay={0.26}>
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8 mb-6">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-5">
                                O que acontece agora
                            </p>
                            <div className="flex flex-col gap-6">
                                {NEXT_STEPS.map((item, i) => (
                                    <div key={item.step} className="flex gap-4">
                                        <div className="shrink-0 w-9 h-9 rounded-xl bg-[var(--green-bull)]/10 flex items-center justify-center">
                                            <span className="font-display font-black text-xs text-[var(--green-bull)] tracking-wider">
                                                {item.step}
                                            </span>
                                        </div>
                                        <div className="flex-1 pt-0.5">
                                            <p className="font-black text-sm uppercase tracking-wide text-[var(--dark-pure)] mb-1">
                                                {item.title}
                                            </p>
                                            <p className="text-xs text-slate-400 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                        {i < NEXT_STEPS.length - 1 && (
                                            <div className="absolute ml-4 mt-9 w-px h-6 bg-slate-100 hidden" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Support note */}
                    <FadeIn delay={0.32}>
                        <div className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl px-5 py-4">
                            <MessageCircle className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Dúvidas? A Fernanda está disponível para te atender no Telegram e garantir que tudo corra bem até o início da turma.
                            </p>
                        </div>
                    </FadeIn>

                </div>
            </div>

            {/* Footer minimal */}
            <footer className="py-6 text-center">
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-300 font-bold">
                    &copy; {new Date().getFullYear()} — Trader de Sucesso
                </p>
            </footer>

        </main>
    );
}

function TelegramIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor">
            <path d="M19.07 4.93a10 10 0 1 0 0 14.14 10 10 0 0 0 0-14.14zM16.64 8.8c-.15 1.58-.82 5.52-1.16 7.34-.14.77-.42 1.03-.69 1.05-.58.06-1.02-.38-1.59-.75-.9-.59-1.41-.95-2.28-1.52-1.02-.67-.36-1.04.2-1.63.15-.15 2.72-2.48 2.77-2.7.01-.03.01-.14-.05-.19-.06-.05-.16-.03-.23-.02-.1.02-1.78 1.13-5.04 3.33-.48.33-.91.49-1.3.48-.43-.01-1.26-.24-1.88-.45-.76-.24-1.37-.37-1.31-.8.03-.22.33-.45.82-.69 3.17-1.38 5.28-2.29 6.34-2.72 3.01-1.25 3.64-1.47 4.05-1.48.09 0 .29.02.42.12.1.08.13.19.14.27-.02.09.79.36.79.36z"/>
        </svg>
    );
}
