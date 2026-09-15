"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";

const videos = [
    {
        id: "hvmZDCqkotY",
        name: "Aluna Matilde — Turma Janeiro/2026",
        duration: "2:46",
        quote: "A mentoria dele é excelente. Ele pega desde o início, dá o passo a passo e deixa você tirar suas dúvidas. Eu recomendo para quem é iniciante, para quem já tem anos de mercado e para quem quer se aperfeiçoar.",
    },
    {
        id: "kPckW_74nY0",
        name: "Aluno Henrique — Turma Janeiro/2026",
        duration: "0:54",
        quote: "É uma mentoria que entrega mais do que fala. Ele dá todo o suporte (...) e funciona! É um operacional que funciona, que vai depender mais de você do que do próprio Bruno, porque ele promete e entrega.",
    },
    {
        id: "1bgF_5Qy6Sk",
        name: "Aluno Rafael Brito — Turma Agosto/2025",
        duration: "3:04",
        quote: "Se vocês buscam uma mentoria completa de price action para entender o porquê de o preço subir ou descer, é essa. O Bruno é fora da curva, ele destrinchou o gráfico para nós.",
    },
    {
        id: "9Vz0XCJg58E",
        name: "Aluna Lúcia — Turma Junho/2025",
        duration: "0:24",
        quote: "O Bruno é um professor focado em ensinar, paciente. O método dele de ensino facilitou muito a minha visão de mercado.",
    },
    {
        id: "KhQLCHWiX6w",
        name: "Aluno Kleber — Turma Abril/2025",
        duration: "1:36",
        quote: "O Bruno traz um olhar simples, dinâmico e eficiente sobre como o mercado funciona. (...) O simples feito com maestria se torna fácil, o fácil se torna replicável e essa repetibilidade traz resultados positivos. Esse é o segredo da mentoria.",
    },
    {
        id: "3ScLSdZBO6Q",
        name: "Aluno Carlos Lobo — Turma Janeiro/2025",
        duration: "5:45",
        quote: "Eu posso dizer que a minha chave virou. (...) Eu indico de olhos fechados, foi a melhor mentoria que eu já fiz justamente por causa da didática do Bruno, que insiste em explicar o que todo mundo tem dificuldade.",
    },
];

const results = [
    { src: "/images/mentoria/result-2.jpg", alt: "Print de resultado de aluno TDS", position: "60% 80%" },
    { src: "/images/mentoria/result-5.jpg", alt: "Print de resultado de aluno TDS", position: "55% 80%" },
    { src: "/images/mentoria/result-6.jpg", alt: "Print de resultado de aluno TDS", position: "50% 95%" },
];

const written = [
    {
        author: "Debora Malta",
        role: "Aluna TDS",
        text: "Aula fantástica, com explicação focada nos detalhes e nas nossas dúvidas. Uma sensação libertadora de que é tudo muito simples se tiver disciplina e focar no SIMPLES sem inventar moda.",
    },
    {
        author: "Bino",
        role: "Aluno TDS",
        text: "Meus mais sinceros agradecimentos, por toda a dedicação e paciência para nos repassar toda a riqueza de conhecimentos e aprendizado. Bruno e Fernanda são diferenciados, realmente desejam o progresso de todos os alunos.",
    },
    {
        author: "Paulo Pires",
        role: "Aluno TDS",
        text: "Parabéns, como sempre aula top demais, dinheiro mais bem investido em mentoria que já fiz nos meus quase 6 anos de mercado. Parabéns a toda equipe e principalmente ao nosso mentor Bruno.",
    },
];

// Página 1: vídeos 0-2, print 0, depoimentos 0-1
// Página 2: vídeos 3-5, print 1-2, depoimento 2
const pages = [
    { videos: videos.slice(0, 3), results: [results[0]], written: written.slice(0, 2) },
    { videos: videos.slice(3, 6), results: results.slice(1, 3), written: written.slice(2, 3) },
];

function VideoCard({ id, name, duration, quote }: { id: string; name: string; duration: string; quote: string }) {
    const [active, setActive] = useState(false);

    return (
        <div className="bg-white border border-[var(--m-border)] rounded-lg p-2.5 flex flex-col justify-between shadow-sm hover:border-[var(--m-bull)] transition-all group">
            <div className="relative h-44 bg-slate-100 rounded overflow-hidden">
                {active ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                        title="Depoimento em vídeo — Mentoria TDS"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    />
                ) : (
                    <button
                        type="button"
                        onClick={() => setActive(true)}
                        aria-label="Reproduzir depoimento em vídeo"
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                            alt={name}
                            fill
                            className="object-cover group-hover:scale-105 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <div className="w-11 h-11 rounded-full bg-white text-[var(--m-dark)] flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                                <Play className="w-[22px] h-[22px] text-[var(--m-bull)]" />
                            </div>
                        </div>
                        <span className="absolute bottom-2 right-2 bg-[var(--m-dark)] text-white text-[10px] px-1.5 py-0.5 rounded font-[family-name:var(--m-font-mono)]">{duration}</span>
                    </button>
                )}
            </div>
            <div className="p-3 flex flex-col justify-between flex-grow">
                <div>
                    <h4 className="font-[family-name:var(--m-font-display)] text-base font-bold text-[var(--m-dark)] mb-1">{name}</h4>
                    <p className="text-xs text-[var(--m-body)] italic">&quot;{quote}&quot;</p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[var(--m-border)] flex items-center justify-between text-[var(--m-caption)] font-[family-name:var(--m-font-mono)] text-[10px]">
                    <span>{duration}</span>
                    <span className="text-[var(--m-bull)] font-bold uppercase">Depoimento Verificado</span>
                </div>
            </div>
        </div>
    );
}

function ResultCard({ src, alt, position }: { src: string; alt: string; position: string }) {
    return (
        <div className="bg-white border border-[var(--m-border)] rounded-lg p-2.5 shadow-sm hover:border-[var(--m-bull)] transition-all flex flex-col">
            <div className="relative h-44 bg-slate-100 rounded overflow-hidden">
                <Image src={src} alt={alt} fill className="object-cover" style={{ objectPosition: position }} />
            </div>
            <div className="p-3 mt-1 flex items-center justify-between text-[var(--m-caption)] font-[family-name:var(--m-font-mono)] text-[10px]">
                <span>Print de Resultado</span>
                <span className="text-[var(--m-bull)] font-bold uppercase">Aluno TDS</span>
            </div>
        </div>
    );
}

function WrittenCard({ author, role, text }: { author: string; role: string; text: string }) {
    return (
        <div className="bg-white p-5 rounded-lg border border-[var(--m-border)] flex flex-col justify-between shadow-sm">
            <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                </div>
                <p className="text-sm text-[var(--m-body)] italic mb-4 leading-relaxed">&quot;{text}&quot;</p>
            </div>
            <div className="pt-3 border-t border-[var(--m-border)] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--m-subtle)] border border-[var(--m-border)] text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-xs font-bold flex items-center justify-center">
                    {author.charAt(0)}
                </div>
                <div>
                    <div className="font-[family-name:var(--m-font-display)] text-sm font-bold text-[var(--m-dark)]">{author}</div>
                    <div className="font-[family-name:var(--m-font-mono)] text-[10px] text-[var(--m-caption)] uppercase">{role}</div>
                </div>
            </div>
        </div>
    );
}

export function SocialProofCarousel() {
    const [page, setPage] = useState(0);
    const current = pages[page];

    function goTo(index: number) {
        setPage((index + pages.length) % pages.length);
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <span className="font-[family-name:var(--m-font-mono)] text-xs text-[var(--m-dark)] uppercase tracking-wide font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[var(--m-bull)]" />
                    Alunos TDS
                </span>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                        {pages.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => goTo(i)}
                                aria-label={`Ir para página ${i + 1}`}
                                className={`rounded-full transition-all ${i === page ? "w-5 h-1.5 bg-[var(--m-bull)]" : "w-1.5 h-1.5 bg-[var(--m-border)]"}`}
                            />
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={() => goTo(page - 1)}
                            aria-label="Página anterior"
                            className="w-8 h-8 rounded border border-[var(--m-border)] bg-white hover:bg-[var(--m-subtle)] flex items-center justify-center text-[var(--m-dark)] transition-colors"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => goTo(page + 1)}
                            aria-label="Próxima página"
                            className="w-8 h-8 rounded border border-[var(--m-border)] bg-white hover:bg-[var(--m-subtle)] flex items-center justify-center text-[var(--m-dark)] transition-colors"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                {current.videos.map((v) => (
                    <VideoCard key={v.id} id={v.id} name={v.name} duration={v.duration} quote={v.quote} />
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {current.results.map((r) => (
                    <ResultCard key={r.src} src={r.src} alt={r.alt} position={r.position} />
                ))}
                {current.written.map((w) => (
                    <WrittenCard key={w.author} author={w.author} role={w.role} text={w.text} />
                ))}
            </div>
        </div>
    );
}
