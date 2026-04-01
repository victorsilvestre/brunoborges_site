"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, AlertTriangle } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="relative w-full max-w-lg bg-[#0d0d0d] border border-[var(--white-10)] rounded-2xl p-8 shadow-[0_0_80px_rgba(0,0,0,0.8)] pointer-events-auto">

                            {/* Decorative top line */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[var(--green-bull)] to-transparent opacity-60" />

                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-1.5 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header */}
                            <div className="mb-8">
                                <p className="text-white/90 text-lg leading-relaxed font-light">
                                    Selecione a opção{" "}
                                    <span className="text-white font-semibold">desejada</span>.
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button
                                    className="btn btn-green group relative overflow-hidden py-4 px-8 text-base w-full flex items-center justify-center shadow-[0_0_30px_rgba(0,191,99,0.25)] hover:shadow-[0_0_50px_rgba(0,191,99,0.45)] transition-shadow"
                                >
                                    <span className="relative z-10 flex items-center gap-2 font-display font-bold uppercase tracking-wider">
                                        Aluno Novo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                </button>

                                <button
                                    className="btn btn-outline-white backdrop-blur-md bg-black/30 hover:bg-white/10 py-4 px-8 text-base w-full flex items-center justify-center font-display font-bold uppercase tracking-wider group"
                                >
                                    <span className="flex items-center gap-2">
                                        Ex Aluno <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-[1px] bg-[var(--white-10)] mb-6" />

                            {/* Warning notes */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-4 h-4 shrink-0 mt-0.5 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--green-bull)]" />
                                    </div>
                                    <p className="text-white/60 text-base leading-relaxed">
                                        Após o pagamento, você deverá encaminhar o comprovante para a{" "}
                                        <span className="text-white/80 font-medium">Fernanda</span> adicionar você no grupo exclusivo de alunos dessa mentoria.
                                    </p>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-4 h-4 text-[var(--red-bear)] shrink-0 mt-0.5" />
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        <span className="text-[var(--red-bear)] font-semibold">Atenção:</span> Caso selecione{" "}
                                        <span className="text-white/80">'Ex Aluno'</span>, seus dados serão analisados após o pagamento para confirmar a condição especial.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
