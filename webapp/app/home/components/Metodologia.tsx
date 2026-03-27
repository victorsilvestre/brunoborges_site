"use client";

import { motion } from "framer-motion";
import {
    BookOpen,
    ChevronRight,
    Circle,
    LineChart,
    Layers,
    Shield,
    Target,
    TrendingUp,
    Zap,
} from "lucide-react";
import { FadeIn } from "./FadeIn";

const setups = [
    { name: "Leônidas", description: "O único rompimento que vale a pena para entrar na operação" },
    { name: "Responsivo", description: "O padrão mais fácil de visualizar no gráfico todos os dias" },
    { name: "Irresponsável", description: "E se você fizesse diferente de todos os outros traders conhece" },
    { name: "Tetra (4 Candles)", description: "O padrão mais formatado do operacional. Contou até 4, é sucesso garantido" },
    { name: "Cruzamento de Fibo", description: "Se a Fibonacci cruzar na região certa, você precisa aproveitar" },
    { name: "Insano", description: "Comprar todo e vender fundo pode não ser coisa de maluco" },
    { name: "Teimoso", description: "Ele disse que ia, mas não foi. Agora ele vai ter que te pagar" },
    { name: "Preguiçoso", description: "O padrão de Price Action de todo iniciante no mercado financeiro" },
];

const pillars = [
    "Teoria de Dow",
    "Leitura candle a candle",
    "Identificação de rompimentos",
    "Obrigações dos candles",
    "Regra da Paridade",
];

export function Metodologia() {
    return (
        <section
            id="metodologia"
            className="relative py-32 lg:py-40 bg-[var(--dark-base)] overflow-hidden border-t border-[var(--white-10)]"
        >
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[var(--green-bull)]/6 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--green-bull)]/6 blur-[140px] rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--green-bull)]/4 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* ─── HEADER ─── */}
                <div className="text-center max-w-4xl mx-auto mb-28">
                    <FadeIn>
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[var(--green-border)] bg-[var(--green-dim)] backdrop-blur-md mb-8">
                            <BookOpen className="w-4 h-4 text-[var(--green-bull)]" />
                            <span className="text-xs font-bold tracking-widest uppercase text-[var(--green-bull)]">
                                A Metodologia
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase leading-[0.9] tracking-tighter text-white mb-8">
                            Trader de{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-dark)] to-[var(--green-bull)]">
                                Sucesso
                            </span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-xl lg:text-2xl text-[var(--white-40)] font-light leading-relaxed">
                            Um método completo e validado por milhares de alunos.
                            <br/> Do operacional simplificado à gestão de risco consciente.
                        </p>
                    </FadeIn>
                </div>

                {/* ─── 01 OPERACIONAL LIMPO ─── two-column asymmetric */}
                <FadeIn delay={0.1}>
                    <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-stretch mb-24">
                        {/* Left — label + quote */}
                        <div className="flex flex-col justify-between bg-[var(--dark-surface)] border border-[var(--white-10)] rounded-3xl p-10 overflow-hidden relative group hover:border-[var(--green-border)] transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-bull)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-xs font-black tracking-[0.2em] uppercase text-[var(--green-bull)]">
                                        01
                                    </span>
                                    <div className="h-px flex-1 bg-[var(--green-bull)]/20" />
                                    <LineChart className="w-5 h-5 text-[var(--green-bull)]" />
                                </div>
                                <h3 className="font-display font-black text-4xl lg:text-5xl uppercase leading-tight text-white mb-6">
                                    Operacional
                                    <br />
                                    <span className="text-[var(--green-bull)]">Limpo</span>
                                </h3>
                                <p className="text-[var(--white-60)] leading-relaxed mb-8">
                                    Você aprende a ler o mercado como ele realmente é.{" "}
                                    <strong className="text-white">Sem indicadores. Sem médias. Sem poluição.</strong>
                                </p>
                                <div className="space-y-3">
                                    {pillars.map((p, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <ChevronRight className="w-4 h-4 text-[var(--green-bull)] flex-shrink-0" />
                                            <span className="text-sm text-[var(--white-80)]">{p}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right — highlight quote card */}
                        <div className="flex flex-col justify-center bg-gradient-to-br from-[var(--green-bull)]/8 to-transparent border border-[var(--green-border)] rounded-3xl p-10">
                            <div className="mb-8">
                                <span className="font-display font-black text-8xl text-[var(--green-bull)]/20 leading-none block">
                                    "
                                </span>
                            </div>
                            <blockquote className="font-display font-bold text-2xl lg:text-3xl text-white leading-snug mb-8">
                                O mesmo candle pode significar coisas completamente diferentes, dependendo do contexto.
                            </blockquote>
                            <p className="text-[var(--white-40)] text-sm uppercase tracking-widest font-bold">
                                Regra base do operacional
                            </p>
                            <div className="mt-8 pt-8 border-t border-[var(--white-10)]">
                                <p className="text-[var(--white-60)] leading-relaxed">
                                    Você não depende de indicadores ou setups milagrosos — você aprende a interpretar o comportamento do preço diretamente no gráfico.
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* ─── 02 FIBONACCI ─── three columns horizontal */}
                <FadeIn delay={0.1}>
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-10">
                            <span className="text-xs font-black tracking-[0.2em] uppercase text-[var(--green-bull)]">02</span>
                            <div className="h-px flex-1 max-w-[60px] bg-[var(--green-bull)]/20" />
                            <h3 className="font-display font-black text-3xl lg:text-4xl uppercase text-white">
                                Fibonacci <span className="text-[var(--green-bull)]">Descomplicada</span>
                            </h3>
                            <div className="h-px flex-1 bg-[var(--white-10)]" />
                            <Layers className="w-5 h-5 text-[var(--green-bull)]" />
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Card principal */}
                            <div className="md:col-span-1 bg-[var(--dark-surface)] border border-[var(--white-10)] rounded-2xl p-8 flex flex-col justify-between">
                                <div>
                                    <p className="text-[var(--white-60)] leading-relaxed mb-6">
                                        A Fibonacci aqui não é enfeite.{" "}
                                        <strong className="text-white">É estrutura.</strong> Aprenda a utilizar a Fibo corretamente para maximizar seus lucros.
                                    </p>
                                    <div className="space-y-4">
                                        {[
                                            "As regiões da Fibonacci. Saiba o que é topo, fundo e região de 50%",
                                            "O papel da região de 50% como zona de decisão do preço",
                                            "Como o preço se movimenta entre as regiões da Fibonacci e o que fazer",
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <Circle className="w-2 h-2 mt-1.5 text-[var(--green-bull)] fill-[var(--green-bull)] flex-shrink-0" />
                                                <span className="text-sm text-[var(--white-60)]">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Quote destaque */}
                            <div className="bg-[var(--green-bull)] rounded-2xl p-8 flex flex-col justify-center">
                                <p className="font-display font-black text-xl lg:text-2xl text-white leading-snug mb-4">
                                    "O preço se movimenta entre mínimas, máximas e 50%. Sempre."
                                </p>
                                <span className="text-white/60 text-xs uppercase font-bold tracking-widest">Regra da Fibonacci</span>
                            </div>

                            {/* Card complementar */}
                            <div className="bg-[var(--dark-elevated)] border border-[var(--white-10)] rounded-2xl p-8 flex flex-col justify-between">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-[var(--green-bull)] mb-4">Além disso</p>
                                    <ul className="space-y-3 mb-6">
                                        {[
                                            "Padrões de Fibonacci (M e W)",
                                            "Operações na região de 50% com contexto",
                                            "Falhas e reversões na prática",
                                            "Suspensão da Regra da Paridade"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <ChevronRight className="w-4 h-4 text-[var(--green-bull)] flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-[var(--white-60)]">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="border-t border-[var(--white-10)] pt-5">
                                    <p className="text-[var(--white-40)] text-sm leading-relaxed italic">
                                        Existe um lugar da Fibonacci onde a leitura muda completamente — e saber disso é importante.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* ─── 03 PONTOS DE PARADA ─── split horizontal com stat grande */}
                <FadeIn delay={0.1}>
                    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-stretch mb-24">
                        {/* Left — content */}
                        <div className="bg-[var(--dark-surface)] border border-[var(--white-10)] rounded-3xl p-10 relative overflow-hidden group hover:border-[var(--green-border)] transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-bull)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-xs font-black tracking-[0.2em] uppercase text-[var(--green-bull)]">03</span>
                                    <div className="h-px flex-1 max-w-[40px] bg-[var(--green-bull)]/20" />
                                    <Target className="w-5 h-5 text-[var(--green-bull)]" />
                                </div>
                                <h3 className="font-display font-black text-4xl lg:text-5xl uppercase leading-tight text-white mb-6">
                                    Pontos de Parada{" "}
                                    <span className="text-[var(--green-bull)]">Que Funcionam</span>
                                </h3>
                                <p className="text-[var(--white-60)] leading-relaxed mb-8">
                                    O mercado não se move aleatoriamente. Existem regiões onde o preço tende a{" "}
                                    <strong className="text-white">parar, reagir ou mudar de comportamento</strong>
                                    .{" "}Entenda essas regiões e saiba o que fazer em cada uma delas.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { label: "Suportes e resistências", sub: "pontos de parada" },
                                        { label: "Regiões fortes", sub: "do gráfico" },
                                        { label: "Gatilhos", sub: "que iniciam movimentos" },
                                        { label: "Testes e reações", sub: "em níveis específicos" },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="bg-[var(--dark-elevated)] border border-[var(--white-10)] rounded-xl p-4"
                                        >
                                            <p className="font-semibold text-white text-sm mb-1">{item.label}</p>
                                            <p className="text-xs text-[var(--white-40)] uppercase tracking-wider">{item.sub}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right — quote */}
                        <div className="flex flex-col justify-center border border-[var(--green-bull)]/25 bg-[var(--green-bull)]/8 rounded-3xl p-10">
                            <blockquote className="font-display font-bold text-2xl lg:text-3xl text-white leading-snug mb-6">
                                "Suportes e resistências são regiões onde é mais provável o preço parar e corrigir o movimento."
                            </blockquote>
                            <div className="h-px w-16 bg-[var(--green-bull)]/40 mb-6" />
                            <p className="text-[var(--white-40)] leading-relaxed text-sm">
                                Isso é o básico que todos ensinam, mas poucos professores conseguem te mostrar exatamente o motivo do gráfico parar naquelas regiões,
                                e como você pode aproveitar isso para ganhar dinheiro.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                {/* ─── 04 SETUPS AUTORAIS ─── grid de cards */}
                <FadeIn delay={0.1}>
                    <div className="mb-24">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-xs font-black tracking-[0.2em] uppercase text-[var(--green-bull)]">04</span>
                                    <div className="h-px w-10 bg-[var(--green-bull)]/20" />
                                    <Zap className="w-5 h-5 text-[var(--green-bull)]" />
                                </div>
                                <h3 className="font-display font-black text-4xl lg:text-5xl uppercase leading-tight text-white">
                                    Setups <span className="text-[var(--green-bull)]">Autorais</span>
                                </h3>
                            </div>
                            <p className="text-[var(--white-40)] max-w-sm leading-relaxed md:text-right">
                                Estruturas operacionais desenvolvidas para acelerar o aprendizado dos alunos.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-[var(--green-bull)]/8 to-transparent border border-[var(--green-border)] rounded-2xl p-6 mb-8">
                            <p className="font-display font-bold text-lg lg:text-xl text-white">
                                "O mercado é repetitivo…{" "}
                                <span className="text-[var(--green-bull)]">
                                    todo dia ele faz a mesma coisa!
                                </span>
                                "
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {setups.map((setup, idx) => (
                                <FadeIn key={idx} delay={0.05 * idx}>
                                    <motion.div
                                        whileHover={{ y: -6, scale: 1.02 }}
                                        className="group relative bg-[var(--dark-surface)] border border-[var(--white-10)] rounded-2xl p-6 overflow-hidden transition-all hover:border-[var(--green-border)] hover:shadow-[0_0_30px_rgba(0,191,99,0.10)]"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-bull)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute top-4 right-4">
                                            <span className="text-xs font-black text-[var(--green-bull)]/30">
                                                {String(idx + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <div className="relative z-10">
                                            <h4 className="font-display font-bold text-base uppercase text-white mb-2 group-hover:text-[var(--green-bull)] transition-colors pr-6">
                                                {setup.name}
                                            </h4>
                                            <p className="text-xs text-[var(--white-40)] leading-relaxed">
                                                {setup.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* ─── 05 + 06 SCALPS + GESTÃO ─── lado a lado */}
                <FadeIn delay={0.1}>
                    <div className="grid lg:grid-cols-2 gap-8 mb-20">

                        {/* 05 Scalps Certeiros */}
                        <div className="bg-[var(--dark-surface)] border border-[var(--white-10)] rounded-3xl p-10 relative overflow-hidden group hover:border-[var(--green-border)] transition-all">
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--green-bull)]/5 blur-[80px] rounded-full" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-xs font-black tracking-[0.2em] uppercase text-[var(--green-bull)]">05</span>
                                    <div className="h-px flex-1 max-w-[40px] bg-[var(--green-bull)]/20" />
                                    <TrendingUp className="w-5 h-5 text-[var(--green-bull)]" />
                                </div>
                                <h3 className="font-display font-black text-3xl lg:text-4xl uppercase leading-tight text-white mb-4">
                                    Scalps <span className="text-[var(--green-bull)]">Certeiros</span>
                                </h3>
                                <p className="text-[var(--white-60)] leading-relaxed mb-8">
                                    Nem todo movimento precisa ser longo.{" "}
                                    <strong className="text-white">Com leitura correta, até pequenos movimentos se tornam grandes oportunidades.</strong>
                                </p>
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { value: "Curtos", label: "Operações" },
                                        { value: "Rápidos", label: "Movimentos" },
                                        { value: "Alta", label: "Assertividade" },
                                    ].map((stat, i) => (
                                        <div key={i} className="text-center border border-[var(--white-10)] rounded-xl p-3">
                                            <p className="font-display font-black text-lg text-[var(--green-bull)]">{stat.value}</p>
                                            <p className="text-xs text-[var(--white-40)] uppercase tracking-wider mt-1">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 06 Gestão de Risco */}
                        <div className="bg-gradient-to-br from-[var(--dark-elevated)] to-[var(--dark-surface)] border border-[var(--white-10)] rounded-3xl p-10 relative overflow-hidden group hover:border-[var(--green-border)] transition-all">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--green-bull)]/5 blur-[80px] rounded-full" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-xs font-black tracking-[0.2em] uppercase text-[var(--green-bull)]">06</span>
                                    <div className="h-px flex-1 max-w-[40px] bg-[var(--green-bull)]/20" />
                                    <Shield className="w-5 h-5 text-[var(--green-bull)]" />
                                </div>
                                <h3 className="font-display font-black text-3xl lg:text-4xl uppercase leading-tight text-white mb-4">
                                    Gestão de Risco{" "}
                                    <span className="text-[var(--green-bull)]">Verdadeira</span>
                                </h3>
                                <p className="text-[var(--white-60)] leading-relaxed mb-6">
                                    Sem gestão, não existe consistência.
                                </p>
                                <div className="space-y-3 mb-8">
                                    {[
                                        "Onde faz sentido assumir risco",
                                        "Como definir alvos e stops",
                                        "A importância do payoff",
                                        "O equilíbrio entre risco e retorno",
                                        "Planilha exclusiva de gestão de risco",
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <ChevronRight className="w-4 h-4 text-[var(--green-bull)] flex-shrink-0" />
                                            <span className="text-sm text-[var(--white-80)]">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-[var(--green-bull)]/10 border border-[var(--green-bull)]/20 rounded-xl px-5 py-4">
                                    <p className="text-sm text-[var(--white-60)] leading-relaxed">
                                        Porque não é só sobre acertar… É sobre{" "}
                                        <strong className="text-white">como você ganha quando acerta</strong> e quanto você perde quando erra.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* ─── CTA ─── */}
                <FadeIn delay={0.3}>
                    <div className="text-center">
                        <a
                            href="#mentorias"
                            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[var(--green-bull)] text-white font-display font-black uppercase tracking-wider hover:bg-[var(--green-dark)] transition-all hover:shadow-[var(--glow-green)] hover:scale-105 text-lg"
                        >
                            Quero Aprender a Metodologia
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
