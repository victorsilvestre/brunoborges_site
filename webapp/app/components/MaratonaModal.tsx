"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

export function MaratonaModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const cookies = document.cookie.split(";").map((c) => c.trim());
        const hasOrigem = cookies.some((c) => c.startsWith("maratona_origem=true"));
        if (hasOrigem) {
            document.cookie = "maratona_origem=; path=/; max-age=0";
            setIsOpen(true);
        }
    }, []);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <>
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
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
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[var(--red-bear)] to-transparent opacity-60" />

                        {/* Close button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 p-1.5 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Title */}
                        <h2 className="text-white font-display font-bold text-xl leading-snug mb-5 pr-6">
                            A Maratona Trader de Sucesso chegou ao fim… mas a próxima etapa da sua jornada começa agora.
                        </h2>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-[var(--white-10)] mb-5" />

                        {/* Body */}
                        <p className="text-white/60 text-sm leading-relaxed mb-8">
                            A Maratona chegou ao fim — e o que você viu ali foi só uma parte 
                            do que realmente constrói consistência no mercado. 
                            As inscrições para a{" "}<span className="text-white/80 font-medium">Mentoria Trader de Sucesso</span> 
                            estão abertas por tempo limitado ou enquanto durarem as vagas.
                            <br /><br />
                            Um método validado por milhares de alunos, 
                            aplicado todos os dias no mercado real, 
                            com acompanhamento direto de quem vive isso na prática. 
                            Se você quer sair do conteúdo solto e 
                            começar a seguir um{" "} 
                            <span className="text-white/80 font-medium">
                            caminho estruturado e 
                            otimizado para sua evolução</span>
                            , esse é o próximo passo.
                        </p>

                        {/* CTA */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="btn btn-green group relative overflow-hidden py-4 px-8 text-base w-full flex items-center justify-center shadow-[0_0_30px_rgba(0,191,99,0.25)] hover:shadow-[0_0_50px_rgba(0,191,99,0.45)] transition-shadow"
                        >
                            <span className="relative z-10 flex items-center gap-2 font-display font-bold uppercase tracking-wider">
                                Saiba Mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </button>
                    </div>
                </motion.div>
            </>
        </AnimatePresence>
    );
}
