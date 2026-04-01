"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, CreditCard, ArrowRight, ShieldCheck, Lock } from "lucide-react";
import { FadeIn } from "../../components/FadeIn";

const PIX_KEY = "62 98590-6104";
const MERCADO_PAGO_URL = "https://mpago.la/1aGw4Ya";
const PRODUCT_NAME = "Mentoria TDS — Bruno Borges";
const PRODUCT_PRICE = "R$ 420,00";

export default function CheckoutExAlunoPage() {
    const [activeTab, setActiveTab] = useState<"pix" | "card">("pix");
    const [copied, setCopied] = useState(false);

    function handleCopy() {
        navigator.clipboard.writeText("62985906104");
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    }

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

                    {/* Page title */}
                    <FadeIn>
                        <div className="mb-8 text-center">
                            <p className="text-xs font-black uppercase tracking-[0.25em] text-[var(--green-bull)] mb-2">
                                Finalizar Inscrição
                            </p>
                            <h1 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tight text-[var(--dark-pure)] leading-tight">
                                Escolha a forma<br />de pagamento
                            </h1>
                        </div>
                    </FadeIn>

                    {/* Product summary */}
                    <FadeIn delay={0.08}>
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6 flex items-center justify-between gap-4">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
                                    Produto
                                </p>
                                <p className="font-display font-black text-base uppercase tracking-tight text-[var(--dark-pure)]">
                                    {PRODUCT_NAME}
                                </p>
                                <p className="text-xs text-slate-400 mt-0.5 font-medium">Próxima turma: 15/04/26</p>
                            </div>
                            <div className="text-right shrink-0">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
                                    Total
                                </p>
                                <p className="font-display font-black text-2xl text-[var(--green-bull)] tracking-tight">
                                    {PRODUCT_PRICE}
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Tab switcher */}
                    <FadeIn delay={0.14}>
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">

                            <div className="grid grid-cols-2 border-b border-slate-100">
                                <TabButton
                                    active={activeTab === "pix"}
                                    onClick={() => setActiveTab("pix")}
                                    icon={
                                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                                            <path d="M19.07 4.93a10 10 0 1 0 0 14.14 10 10 0 0 0 0-14.14zM16.64 8.8c-.15 1.58-.82 5.52-1.16 7.34-.14.77-.42 1.03-.69 1.05-.58.06-1.02-.38-1.59-.75-.9-.59-1.41-.95-2.28-1.52-1.02-.67-.36-1.04.2-1.63.15-.15 2.72-2.48 2.77-2.7.01-.03.01-.14-.05-.19-.06-.05-.16-.03-.23-.02-.1.02-1.78 1.13-5.04 3.33-.48.33-.91.49-1.3.48-.43-.01-1.26-.24-1.88-.45-.76-.24-1.37-.37-1.31-.8.03-.22.33-.45.82-.69 3.17-1.38 5.28-2.29 6.34-2.72 3.01-1.25 3.64-1.47 4.05-1.48.09 0 .29.02.42.12.1.08.13.19.14.27-.02.09.79.36.79.36z"/>
                                        </svg>
                                    }
                                    label="PIX"
                                />
                                <TabButton
                                    active={activeTab === "card"}
                                    onClick={() => setActiveTab("card")}
                                    icon={<CreditCard className="w-4 h-4" />}
                                    label="Cartão de Crédito"
                                />
                            </div>

                            {/* Tab content */}
                            <div className="relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    {activeTab === "pix" ? (
                                        <motion.div
                                            key="pix"
                                            initial={{ opacity: 0, x: -16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -16 }}
                                            transition={{ duration: 0.22, ease: "easeOut" }}
                                            className="p-6 md:p-8"
                                        >
                                            <PixPanel copied={copied} onCopy={handleCopy} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="card"
                                            initial={{ opacity: 0, x: 16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 16 }}
                                            transition={{ duration: 0.22, ease: "easeOut" }}
                                            className="p-6 md:p-8"
                                        >
                                            <CardPanel />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                        </div>
                    </FadeIn>

                    {/* Trust badge */}
                    <FadeIn delay={0.22}>
                        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                            <ShieldCheck className="w-4 h-4 text-[var(--green-bull)]" />
                            Pagamento 100% seguro e protegido
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

/* ─── Sub-components ─────────────────────────────── */

function TabButton({
    active,
    onClick,
    icon,
    label,
}: {
    active: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <button
            onClick={onClick}
            className={`relative flex items-center justify-center gap-2.5 py-4 text-sm font-black uppercase tracking-wider transition-colors duration-200 ${
                active
                    ? "text-[var(--green-bull)]"
                    : "text-slate-400 hover:text-slate-600"
            }`}
        >
            {icon}
            {label}
            {active && (
                <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--green-bull)]"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
            )}
        </button>
    );
}

function PixPanel({ copied, onCopy }: { copied: boolean; onCopy: () => void }) {
    return (
        <div className="flex flex-col items-center gap-6">

            {/* QR Code */}
            <div className="relative">
                <div className="w-44 h-44 rounded-xl overflow-hidden">
                    <img
                        src="/images/qrcode/image_qrcode-ex-aluno-420.jpg"
                        alt="QR Code PIX"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Corner decorations */}
                <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-[var(--green-bull)] rounded-tl-md" />
                <div className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-[var(--green-bull)] rounded-tr-md" />
                <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-[var(--green-bull)] rounded-bl-md" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-[var(--green-bull)] rounded-br-md" />
            </div>

            <p className="text-xs text-slate-400 text-center max-w-[280px] leading-relaxed">
                Escaneie o QR Code com o app do seu banco, ou copie a chave PIX abaixo.
            </p>

            {/* Separator */}
            <div className="w-full flex items-center gap-3">
                <div className="flex-1 h-px bg-slate-100" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Chave PIX</span>
                <div className="flex-1 h-px bg-slate-100" />
            </div>

            {/* PIX key copy box */}
            <div className="w-full">
                <div className="flex items-center gap-0 rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
                    <div className="flex-1 px-4 py-3.5">
                        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-0.5">
                            Celular
                        </p>
                        <p className="font-display font-black text-base tracking-wider text-[var(--dark-pure)]">
                            {PIX_KEY}
                        </p>
                    </div>
                    <button
                        onClick={onCopy}
                        className={`px-5 py-5 flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all duration-200 shrink-0 ${
                            copied
                                ? "bg-[var(--green-bull)] text-white"
                                : "bg-white text-[var(--green-bull)] hover:bg-[var(--green-bull)] hover:text-white border-l border-slate-200"
                        }`}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {copied ? (
                                <motion.span
                                    key="check"
                                    initial={{ scale: 0.6, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.6, opacity: 0 }}
                                    transition={{ duration: 0.18 }}
                                    className="flex items-center gap-2"
                                >
                                    <Check className="w-4 h-4" />
                                    Copiado
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="copy"
                                    initial={{ scale: 0.6, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.6, opacity: 0 }}
                                    transition={{ duration: 0.18 }}
                                    className="flex items-center gap-2"
                                >
                                    <Copy className="w-4 h-4" />
                                    Copiar
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Value reminder */}
            <div className="w-full bg-[var(--green-bull)]/5 border border-[var(--green-bull)]/20 rounded-xl px-5 py-4 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-[var(--dark-pure)]/60">
                    Valor a pagar
                </span>
                <span className="font-display font-black text-xl text-[var(--green-bull)] tracking-tight">
                    {PRODUCT_PRICE}
                </span>
            </div>

            <SendReceiptButton />

            <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                Após o pagamento, envie o comprovante para confirmar sua vaga.
            </p>

        </div>
    );
}

const TELEGRAM_URL = "https://t.me/fernanda_bs";

function SendReceiptButton() {
    return (
        <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden w-full flex items-center justify-center gap-3 py-5 px-8 rounded-xl text-base font-display font-black uppercase tracking-wider text-white transition-shadow duration-200 shadow-[0_4px_24px_rgba(0,136,204,0.25)] hover:shadow-[0_6px_36px_rgba(0,136,204,0.40)]"
            style={{ backgroundColor: "#0088cc" }}
        >
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor">
                <path d="M19.07 4.93a10 10 0 1 0 0 14.14 10 10 0 0 0 0-14.14zM16.64 8.8c-.15 1.58-.82 5.52-1.16 7.34-.14.77-.42 1.03-.69 1.05-.58.06-1.02-.38-1.59-.75-.9-.59-1.41-.95-2.28-1.52-1.02-.67-.36-1.04.2-1.63.15-.15 2.72-2.48 2.77-2.7.01-.03.01-.14-.05-.19-.06-.05-.16-.03-.23-.02-.1.02-1.78 1.13-5.04 3.33-.48.33-.91.49-1.3.48-.43-.01-1.26-.24-1.88-.45-.76-.24-1.37-.37-1.31-.8.03-.22.33-.45.82-.69 3.17-1.38 5.28-2.29 6.34-2.72 3.01-1.25 3.64-1.47 4.05-1.48.09 0 .29.02.42.12.1.08.13.19.14.27-.02.09.79.36.79.36z"/>
            </svg>
            Enviar comprovante
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </a>
    );
}

function CardPanel() {
    return (
        <div className="flex flex-col gap-6">

            {/* Product info recap */}
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Produto</span>
                    <span className="text-sm font-bold text-[var(--dark-pure)] text-right max-w-[200px]">{PRODUCT_NAME}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Turma</span>
                    <span className="text-sm font-bold text-[var(--dark-pure)]">15 de Abril de 2026</span>
                </div>
                <div className="flex items-center justify-between py-3">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Total</span>
                    <span className="font-display font-black text-2xl text-[var(--green-bull)] tracking-tight">{PRODUCT_PRICE}</span>
                </div>
            </div>

            {/* Mercado Pago badge */}
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                <div className="w-8 h-8 bg-[#009EE3] rounded-lg flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                    </svg>
                </div>
                <div>
                    <p className="text-xs font-black uppercase tracking-wider text-[var(--dark-pure)]">Mercado Pago</p>
                    <p className="text-[11px] text-slate-400 font-medium">Parcelamento disponível</p>
                </div>
            </div>

            {/* CTA button */}
            <a
                href={MERCADO_PAGO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green group relative overflow-hidden py-5 px-8 text-base w-full flex items-center justify-center shadow-[0_4px_24px_rgba(0,191,99,0.25)] hover:shadow-[0_6px_36px_rgba(0,191,99,0.40)] transition-shadow rounded-xl"
            >
                <span className="relative z-10 flex items-center gap-3 font-display font-black uppercase tracking-wider">
                    Realizar Pagamento <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>

            <SendReceiptButton />

            <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                Você será redirecionado para o ambiente seguro do Mercado Pago para concluir o pagamento.
            </p>

        </div>
    );
}
