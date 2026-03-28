"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: "var(--dark-base)" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(241,20,20,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(241,20,20,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none blur-[150px]"
        style={{ background: "rgba(241,20,20,0.07)" }}
      />

      {/* Logo */}
      <div
        className="absolute top-6 left-1/2 -translate-x-1/2"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <Link href="/">
          <Image
            src="/images/logo/logo_white_transparent.png"
            alt="Trader Bruno Borges"
            width={444}
            height={165}
            className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            priority
          />
        </Link>
      </div>

      {/* Main content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* 404 */}
        <div className="relative mb-2 select-none">
          {/* Ghost outline */}
          <span
            className="font-display font-black uppercase leading-none"
            style={{
              fontSize: "clamp(120px, 22vw, 240px)",
              color: "transparent",
              WebkitTextStroke: "2px rgba(241,20,20,0.18)",
              letterSpacing: "-0.02em",
            }}
          >
            404
          </span>
          {/* Gradient fill */}
          <span
            className="font-display font-black uppercase leading-none absolute inset-0 flex items-center justify-center"
            style={{
              fontSize: "clamp(120px, 22vw, 240px)",
              background:
                "linear-gradient(135deg, #F11414 0%, rgba(241,20,20,0.55) 60%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.02em",
            }}
          >
            404
          </span>
        </div>

        {/* Divider */}
        <div
          className="w-24 h-px mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--red-bear), transparent)",
          }}
        />

        {/* Headline */}
        <h1
          className="font-display font-black uppercase mb-3"
          style={{
            fontSize: "clamp(18px, 3vw, 26px)",
            letterSpacing: "0.08em",
            color: "var(--white)",
          }}
        >
          Página não encontrada
        </h1>

        {/* Joke */}
        <p
          className="font-body mb-10"
          style={{
            fontSize: "clamp(14px, 1.8vw, 17px)",
            color: "rgba(255,255,255,0.45)",
            maxWidth: "480px",
            lineHeight: 1.2,
          }}
        >
          Assim como quem opera sem stop loss —<br />
          essa página sumiu sem deixar rastro.
        </p>

        {/* CTA — mesmo padrão do HeroManifesto */}
        <Link
          href="/"
          className="btn btn-red group relative overflow-hidden px-12 py-6 text-lg shadow-[0_0_40px_rgba(241,20,20,0.20)] hover:shadow-[0_0_60px_rgba(241,20,20,0.40)]"
        >
          <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
          <ArrowLeft className="relative z-10 w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="relative z-10">Voltar para o início</span>
        </Link>

        {/* Footer hint */}
        <p
          className="mt-12 font-body uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.18)",
          }}
        >
          Bruno Borges · Trader &amp; Mentor
        </p>
      </div>
    </div>
  );
}
