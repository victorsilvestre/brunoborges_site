"use client";

import { useState } from "react";

export function DemoVideo({ videoId }: { videoId: string }) {
    const [playing, setPlaying] = useState(false);

    return (
        <div className={`video-player${playing ? " is-playing" : ""}`}>
            {playing ? (
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="Vídeo de apresentação do Scalp 40P Kit de Execução"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            ) : (
                <button
                    className="video-poster"
                    type="button"
                    aria-label="Reproduzir vídeo de apresentação do Scalp 40P"
                    onClick={() => setPlaying(true)}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/scalp40p/scalp40p-youtube-thumb.webp"
                        alt="Scalp 40P Kit de Execução com exemplos dos materiais do kit"
                        width="1280"
                        height="720"
                        loading="lazy"
                        decoding="async"
                    />
                    <span className="video-play" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="m8 4 12 8-12 8z" />
                        </svg>
                    </span>
                </button>
            )}
        </div>
    );
}
