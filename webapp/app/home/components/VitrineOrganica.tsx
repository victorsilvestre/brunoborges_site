"use client";

import { motion } from "framer-motion";
import { Youtube, Instagram, Play, ExternalLink } from "lucide-react";
import { FadeIn } from "./FadeIn";

const youtubeVideos = [
    {
        id: "UuApdnP_fbQ",
        title: "Daytrade Entendendo um pouco mais sobre Alvos de Fibo",
        views: "+307k visualizações",
        url: "https://www.youtube.com/watch?v=UuApdnP_fbQ"
    },
    {
        id: "IVp17SnRzoQ",
        title: "Daytrade - O segredo da FIBO que muda Tudo!!!",
        views: "+224k visualizações",
        url: "https://www.youtube.com/watch?v=IVp17SnRzoQ"
    },
    {
        id: "-GaoKSksiZ0",
        title: "Como alcançar uma alta assertividade - Estratégia infalível",
        views: "+47k visualizações",
        url: "https://www.youtube.com/watch?v=-GaoKSksiZ0"
    },
    {
        id: "D9B88kMNAFA",
        title: "Fazendo mais de 35 mil reais no Day Trade no mini indice",
        views: "+16k visualizações",
        url: "https://www.youtube.com/watch?v=D9B88kMNAFA"
    }
];

const instagramPosts = [
    {
        type: "post",
        image: "/images/insta/image_insta-post-1.jpg",
        caption: "Mentoria TDS — Próxima turma: 15/04",
        tag: "Mentoria"
    },
    {
        type: "evento",
        image: "/images/insta/image_insta-post-2.jpg",
        caption: "14ª Maratona TDS — Evento 100% online e gratuito",
        tag: "Evento"
    },
    {
        type: "post",
        image: "/images/insta/image_insta-post-4.jpg",
        caption: "\"Seja constante. Os resultados serão inevitáveis.\"",
        tag: "Mentalidade"
    }
];

export function VitrineOrganica() {
    return (
        <section id="conteudo" className="relative py-32 lg:py-40 bg-black overflow-hidden border-t border-[var(--white-10)]">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--dark-base)] via-black to-[var(--dark-base)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-[var(--green-bull)]/5 to-transparent blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <FadeIn>
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[var(--green-bull)]/30 bg-[var(--green-bull)]/10 backdrop-blur-md mb-8">
                            <Play className="w-4 h-4 text-[var(--green-bull)]" />
                            <span className="text-xs font-bold tracking-widest uppercase text-[var(--green-bull)]">
                                Conteúdo Gratuito
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase leading-[0.9] tracking-tighter text-white mb-8">
                            Aprenda{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-bull)] to-[var(--green-dark)]">
                                Gratuitamente
                            </span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-xl lg:text-2xl text-[var(--white-40)] font-light leading-relaxed">
                            Aulas, lives e bastidores disponíveis no YouTube e Instagram.
                        </p>
                    </FadeIn>
                </div>

                {/* YouTube Section */}
                <div className="mb-20">
                    <FadeIn delay={0.3}>
                        <div className="flex items-center justify-between mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-[#FF0000]/10 flex items-center justify-center">
                                    <Youtube className="w-8 h-8 text-[#FF0000]" />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-2xl uppercase text-white">YouTube</h3>
                                    <p className="text-sm text-[var(--white-60)]">Aulas, Lives e Replays de Mercado</p>
                                </div>
                            </div>
                            <a
                                href="https://www.youtube.com/@traderbrunoborges"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF0000] text-white font-display font-bold uppercase text-sm hover:bg-[#CC0000] transition-all"
                            >
                                Ver Canal <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {youtubeVideos.map((video, idx) => (
                            <FadeIn key={idx} delay={0.4 + idx * 0.1}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="group cursor-pointer"
                                >
                                    <a
                                        href={video.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-[var(--dark-surface)] border border-[var(--white-10)]">
                                            <img
                                                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                                alt={video.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />

                                            {/* Play Button Overlay */}
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-16 h-16 rounded-full bg-[#FF0000] flex items-center justify-center">
                                                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                                                </div>
                                            </div>
                                        </div>

                                        <h4 className="font-display font-bold text-base text-white mb-2 group-hover:text-[var(--green-bull)] transition-colors">
                                            {video.title}
                                        </h4>
                                        <p className="text-sm text-[var(--white-40)]">{video.views}</p>
                                    </a>
                                </motion.div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                {/* Instagram Section */}
                <div>
                    <FadeIn delay={0.6}>
                        <div className="flex items-center justify-between mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center">
                                    <Instagram className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-2xl uppercase text-white">Instagram</h3>
                                    <p className="text-sm text-[var(--white-60)]">Conheça mais o Bruno Borges</p>
                                </div>
                            </div>
                            <a
                                href="https://www.instagram.com/trader_brunoborges/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-display font-bold uppercase text-sm hover:opacity-90 transition-all"
                            >
                                Seguir <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-6">
                        {instagramPosts.map((post, idx) => (
                            <FadeIn key={idx} delay={0.7 + idx * 0.1}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="group cursor-pointer"
                                >
                                    <a
                                        href="https://www.instagram.com/trader_brunoborges/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-[var(--white-10)]">
                                            <img
                                                src={post.image}
                                                alt={post.caption}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 text-white text-xs font-bold uppercase">
                                                {post.tag}
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-white font-medium">{post.caption}</p>
                                        </div>
                                    </a>
                                </motion.div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                {/* Mobile CTAs */}
                {/* <FadeIn delay={0.9}>
                    <div className="flex md:hidden flex-col gap-4 mt-12">
                        <a
                            href="https://www.youtube.com/@traderbrunoborges"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FF0000] text-white font-display font-bold uppercase hover:bg-[#CC0000] transition-all"
                        >
                            <Youtube className="w-5 h-5" />
                            Ver Canal no YouTube
                        </a>
                        <a
                            href="https://www.instagram.com/trader_brunoborges/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-display font-bold uppercase"
                        >
                            <Instagram className="w-5 h-5" />
                            Seguir no Instagram
                        </a>
                    </div>
                </FadeIn> */}
            </div>
        </section>
    );
}
