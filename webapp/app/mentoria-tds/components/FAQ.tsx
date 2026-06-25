"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { FadeIn } from "../../components/FadeIn";

export function FAQ() {
    const faqs = [
        { q: "Preciso ter experiência em day trade para entrar?", a: "Não. A mentoria foi estruturada do zero ao avançado, então não é necessário nenhum conhecimento prévio. Iniciantes aprendem com base sólida desde o início, e quem já opera encontra o refinamento necessário para evoluir de vez." },
        { q: "Qual o tempo de duração da Mentoria TDS?", a: "São 60 dias de acompanhamento com aulas ao vivo 3 vezes por semana, das 19h às 22h. Enquanto houver dúvidas da turma, o Bruno fica disponível na sala para ensinar e reforçar o conteúdo — sem pressa e sem deixar ninguém para trás." },
        { q: "As aulas são gravadas?", a: "Todas as aulas são AO VIVO e, após cada encontro, a gravação é disponibilizada na área de membros da Mentoria TDS. O acesso é vitalício — as aulas são suas para sempre e você pode rever o conteúdo quantas vezes precisar, no seu ritmo." },
        { q: "O que é a Sala Educacional?", a: "É um bônus exclusivo de 30 dias: acompanhe o mercado ao vivo com o Bruno das 8h45 às 10h15, vendo na prática como o método é aplicado em cenários reais do pregão. É o complemento ideal para consolidar o que é ensinado nas aulas da mentoria." },
        { q: "E quanto à aula de sábado? Do que se trata?", a: "É uma aula BÔNUS aos sábados e pode acontecer de duas formas: um aluno opera ao vivo sob o acompanhamento do Bruno, recebendo feedback prático em tempo real — ou é feito um aprofundamento de algum conceito do operacional com análise de cenários e estudos de caso. O acesso às gravações é vitalício." },
        { q: "Onde ficam as gravações das aulas?", a: "Todas as gravações ficam disponíveis na área de membros da Mentoria TDS, acessível pelo navegador sem precisar instalar nada. O acesso é vitalício — o conteúdo fica disponível para sempre, e você pode rever quantas vezes precisar." },
        { q: "As turmas são cheias/lotadas?", a: "Prezo muito pela QUALIDADE e não pela QUANTIDADE. Por este motivo, a quantidade máxima por turma é limitada." },
        { q: "O suporte de dúvidas é terceirizado ou direto com o Mentor?", a: "Somente o Bruno dá suporte aos alunos com relação às dúvidas do operacional no Telegram. Nenhum suporte é terceirizado." },
        { q: "Você demora a responder as mensagens de dúvidas?", a: "Como o suporte não é terceirizado e o atendimento é pessoal, as mensagens são respondidas com a maior brevidade possível — com prazo de até 72h para retorno. Mas fique tranquilo(a): o Bruno está sempre presente nas aulas e no grupo de estudos, então você nunca ficará sem resposta." },
        { q: "O acesso ao Mentor é somente durante os 60 dias?", a: "Não! O acesso ao Bruno é vitalício via Telegram. Mesmo após o encerramento da mentoria, o suporte continua sempre que for necessário." },
        { q: "Você tem sala de pregão ao vivo?", a: "Não trabalhamos com modelo de sala de sinais ou call ao vivo permanente. O foco é formar traders independentes. No entanto, a mentoria inclui como bônus 30 dias de Sala Educacional ao vivo — veja a pergunta acima para entender como ela funciona." },
        { q: "O seu operacional funciona no Sistema Mini Dólar?", a: "Funciona em qualquer mercado, ativo ou intervalo de tempo, inclusive perfeitamente no Mini Dólar." },
        { q: "Existe Mentoria Individual?", a: "Sim, porém é um serviço adicional e separado — não obrigatório. Está disponível SOMENTE para alunos que já finalizaram a mentoria em grupo e dominam a base do operacional." },
        { q: "Quais são as formas de pagamento?", a: "O pagamento é realizado pela plataforma Hotmart, de forma segura. As opções disponíveis são: cartão de crédito à vista ou em até 12x com juros, Pix, pagamento dividido em dois cartões ou pagamento híbrido combinando Pix e cartão de crédito." },
        { q: "E se eu entrar e não gostar?", a: "Você tem 15 dias completos para conhecer o método por dentro, assistir às primeiras aulas e participar das aulas ao vivo. Se dentro desse período sentir que a Mentoria TDS não é para você, basta solicitar o reembolso e 100% do valor investido é devolvido. Sem perguntas, sem burocracia." },
        { q: "Como faço para entrar na Mentoria TDS?", a: "Com as inscrições abertas, basta clicar no botão da página e realizar a matrícula diretamente pela Hotmart. Quando as vagas esgotam, disponibilizamos uma Lista de Espera para que você seja avisado com prioridade na próxima turma." },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 md:py-24 bg-[var(--light-base)] overflow-hidden border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-24">
                    <FadeIn delay={0.1}>
                        <h3 className="font-display font-black text-5xl md:text-7xl text-[var(--dark-pure)] uppercase leading-[0.9] tracking-tighter">
                            Perguntas <br /> Frequentes
                        </h3>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            if (index % 2 !== 0) return null;
                            const isOpen = openIndex === index;
                            return (
                                <FadeIn key={index} delay={0.05 * Math.min(index, 10)}>
                                    <div
                                        className={`border rounded-2xl overflow-hidden transition-colors duration-500 ${isOpen ? 'bg-white border-[var(--green-bull)]/20 shadow-sm' : 'bg-transparent border-slate-200 hover:border-[var(--green-bull)]/30 hover:bg-white/50'}`}
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                                        >
                                            <span className={`font-display font-bold text-[1.1rem] md:text-base uppercase tracking-tighter transition-colors max-w-[90%] ${isOpen ? 'text-[var(--green-bull)]' : 'text-[var(--dark-pure)]'}`}>
                                                {faq.q}
                                            </span>
                                            <motion.div
                                                animate={{ rotate: isOpen ? 90 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className={`shrink-0 ml-4 p-2 rounded-full border ${isOpen ? 'border-[var(--green-bull)] text-[var(--green-bull)]' : 'border-slate-300 text-[var(--dark-medium)]'}`}
                                            >
                                                {isOpen ? <X size={20} /> : <Plus size={20} />}
                                            </motion.div>
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                                                >
                                                    <div className="px-6 md:px-8 pb-8 text-base text-[var(--dark-medium)] font-medium leading-relaxed border-t border-slate-100 pt-6 mt-2">
                                                        {faq.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                    
                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            if (index % 2 === 0) return null;
                            const isOpen = openIndex === index;
                            return (
                                <FadeIn key={index} delay={0.05 * Math.min(index, 10)}>
                                    <div
                                        className={`border rounded-2xl overflow-hidden transition-colors duration-500 ${isOpen ? 'bg-white border-[var(--green-bull)]/20 shadow-sm' : 'bg-transparent border-slate-200 hover:border-[var(--green-bull)]/30 hover:bg-white/50'}`}
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                                        >
                                            <span className={`font-display font-bold text-[1.1rem] md:text-base uppercase tracking-tighter transition-colors max-w-[90%] ${isOpen ? 'text-[var(--green-bull)]' : 'text-[var(--dark-pure)]'}`}>
                                                {faq.q}
                                            </span>
                                            <motion.div
                                                animate={{ rotate: isOpen ? 90 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className={`shrink-0 ml-4 p-2 rounded-full border ${isOpen ? 'border-[var(--green-bull)] text-[var(--green-bull)]' : 'border-slate-300 text-[var(--dark-medium)]'}`}
                                            >
                                                {isOpen ? <X size={20} /> : <Plus size={20} />}
                                            </motion.div>
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                                                >
                                                    <div className="px-6 md:px-8 pb-8 text-base text-[var(--dark-medium)] font-medium leading-relaxed border-t border-slate-100 pt-6 mt-2">
                                                        {faq.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
