import Image from "next/image";
import { brandManifest as m } from "./manifest";
import { ColorSwatch } from "./ColorSwatch";
import { SideNav } from "./SideNav";
import { MobileNav } from "./MobileNav";

function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="font-mono text-[11px] uppercase tracking-[0.15em] mb-3"
            style={{ color: "var(--muted)" }}
        >
            {children}
        </div>
    );
}

function SectionHeading({ n, title }: { n: string; title: string }) {
    return (
        <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-sm tabular-nums" style={{ color: "var(--accent-deep)" }}>
                {n}
            </span>
            <h2
                className="font-[family-name:var(--font-design-serif)] text-[clamp(2rem,4.5vw,3.25rem)] leading-none"
                style={{ color: "var(--ink)" }}
            >
                {title}
            </h2>
        </div>
    );
}

export default function DesignPage() {
    return (
        <main
            className="font-[family-name:var(--font-design-sans)]"
            style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}
        >
            <SideNav />
            <MobileNav />

            <div className="lg:ml-[220px]">
                {/* ---------- Capa ---------- */}
                <section
                    id="capa"
                    className="scroll-mt-0 relative flex flex-col justify-between px-6 md:px-14 py-14 md:py-20 min-h-[88vh] lg:min-h-screen"
                    style={{ backgroundColor: "var(--accent)", color: "var(--ink)" }}
                >
                    <div className="flex items-start justify-between">
                        <span className="font-mono text-xs uppercase tracking-[0.15em] opacity-70">
                            Manual de identidade visual
                        </span>
                        <span className="font-serif text-sm">{m.version}</span>
                    </div>

                    <h1 className="font-[family-name:var(--font-design-serif)] font-normal leading-[0.92] text-[13vw] md:text-[7.5vw]">
                        Brand<br />
                        <span className="italic">Guidelines</span>
                    </h1>

                    <div className="flex items-end justify-between gap-6">
                        <p className="max-w-sm text-sm md:text-base opacity-80 leading-relaxed">
                            Referência oficial de marca do Bruno Borges — cores, tipografia, logo e
                            elementos gráficos para uso interno e por parceiros.
                        </p>
                        <span className="font-[family-name:var(--font-design-serif)] text-2xl md:text-3xl leading-tight text-right shrink-0">
                            Bruno<br />Borges
                        </span>
                    </div>
                </section>

                {/* ---------- Marca ---------- */}
                <section id="marca" className="scroll-mt-8 px-6 md:px-14 py-20 md:py-28 border-t" style={{ borderColor: "var(--rule)" }}>
                    <SectionHeading n="01" title="Marca" />

                    <p className="font-[family-name:var(--font-design-serif)] text-[clamp(1.375rem,2.4vw,1.875rem)] leading-snug max-w-3xl mb-16">
                        {m.brand.quemSomos}
                    </p>

                    <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--rule)" }}>
                        <div className="p-6 md:p-8" style={{ backgroundColor: "var(--paper)" }}>
                            <Eyebrow>Visão</Eyebrow>
                            <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                                {m.brand.visao}
                            </p>
                        </div>
                        <div className="p-6 md:p-8" style={{ backgroundColor: "var(--paper)" }}>
                            <Eyebrow>Missão</Eyebrow>
                            <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                                {m.brand.missao}
                            </p>
                        </div>
                        <div className="p-6 md:p-8" style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}>
                            <div className="font-mono text-[11px] uppercase tracking-[0.15em] mb-3 opacity-60">
                                Valores
                            </div>
                            <ul className="flex flex-col gap-1.5">
                                {m.brand.valores.map((v) => (
                                    <li key={v} className="text-[15px] leading-snug">
                                        {v}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ---------- Logo ---------- */}
                <section id="logo" className="scroll-mt-8 px-6 md:px-14 py-20 md:py-28 border-t" style={{ borderColor: "var(--rule)" }}>
                    <SectionHeading n="02" title="Logo" />
                    <p className="max-w-xl text-[15px] leading-relaxed mb-12" style={{ color: "var(--muted)" }}>
                        {m.logo.description}
                    </p>

                    <div
                        className="flex items-center justify-center px-8 py-16 mb-14"
                        style={{ backgroundColor: "var(--ink)" }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/logo/logo-verde-fundo-escuro.svg"
                            alt="Logo Bruno Borges — TRADER Bruno Borges, versão verde sobre fundo escuro"
                            className="w-full max-w-md h-auto"
                        />
                    </div>

                    {m.logo.variants.map((group) => (
                        <div key={group.layout} className="mb-14">
                            <div className="flex items-baseline justify-between mb-3">
                                <Eyebrow>{group.layout}</Eyebrow>
                            </div>
                            <p className="text-sm mb-4 max-w-lg" style={{ color: "var(--muted)" }}>
                                {group.description}
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--rule)" }}>
                                {group.items.map((item) => {
                                    const pngPath = item.path.replace(/\.svg$/, ".png");
                                    const fg = item.bg === "claro" ? "var(--ink)" : "var(--paper)";
                                    return (
                                        <div
                                            key={item.path}
                                            className="group relative flex flex-col items-center justify-center gap-3 p-6 min-h-[110px]"
                                            style={{ backgroundColor: item.bg === "claro" ? "var(--paper)" : "var(--ink)" }}
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={item.path}
                                                alt={`Logo ${group.layout} — ${item.color}, fundo ${item.bg}`}
                                                className="max-w-[85%] max-h-16 w-auto h-auto"
                                            />
                                            <div
                                                className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <a
                                                    href={item.path}
                                                    download
                                                    className="font-mono text-[10px] uppercase tracking-[0.08em] underline underline-offset-2"
                                                    style={{ color: fg }}
                                                >
                                                    SVG ↓
                                                </a>
                                                <span className="text-[10px] opacity-50" style={{ color: fg }}>
                                                    ·
                                                </span>
                                                <a
                                                    href={pngPath}
                                                    download
                                                    className="font-mono text-[10px] uppercase tracking-[0.08em] underline underline-offset-2"
                                                    style={{ color: fg }}
                                                >
                                                    PNG ↓
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    <div className="grid md:grid-cols-[1fr_1fr] gap-10 mb-16">
                        <div>
                            <Eyebrow>Margem de segurança</Eyebrow>
                            <Image
                                src="/design/figma-exports/margem-seguranca.png"
                                alt="Margem de segurança do logo"
                                width={1024}
                                height={576}
                                className="w-full h-auto border mb-3"
                                style={{ borderColor: "var(--rule)" }}
                            />
                            <p className="text-sm" style={{ color: "var(--muted)" }}>{m.logo.safeArea}</p>
                        </div>
                        <div>
                            <Eyebrow>Uso incorreto</Eyebrow>
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm" style={{ color: "var(--muted)" }}>
                                {m.logo.misuse.map((rule) => (
                                    <li key={rule} className="flex gap-2">
                                        <span style={{ color: "#A71619" }}>✕</span>
                                        {rule}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <Eyebrow>Ícones</Eyebrow>
                        <div className="flex flex-wrap gap-2">
                            {m.logo.iconFiles.map((f) => (
                                <a
                                    key={f.path}
                                    href={f.path}
                                    download
                                    className="download-chip text-[13px] font-mono px-3.5 py-2 border transition-colors"
                                    style={{ borderColor: "var(--rule)" }}
                                >
                                    {f.label} ↓
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---------- Cores ---------- */}
                <section id="cores" className="scroll-mt-8 px-6 md:px-14 py-20 md:py-28 border-t" style={{ borderColor: "var(--rule)" }}>
                    <SectionHeading n="03" title="Cores" />
                    <p className="max-w-xl text-[15px] leading-relaxed mb-12" style={{ color: "var(--muted)" }}>
                        O verde elétrico traz o dinamismo do mercado; o vermelho evoca a seriedade premium
                        da mentoria. Preto, chumbo e off-white sustentam a base sóbria sobre a qual o
                        contraste das duas cores de assinatura se destaca.
                    </p>

                    <Eyebrow>Primárias</Eyebrow>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 mb-14">
                        {m.colors.primary.map((c) => (
                            <ColorSwatch key={c.hex} hex={c.hex} label={c.name} sublabel={c.rgb} size="lg" />
                        ))}
                    </div>

                    <Eyebrow>Secundárias</Eyebrow>
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-1.5">
                        {m.colors.secondary.map((c, i) => (
                            <ColorSwatch key={`${c.hex}-${i}`} hex={c.hex} />
                        ))}
                    </div>
                </section>

                {/* ---------- Tipografia ---------- */}
                <section id="tipografia" className="scroll-mt-8 px-6 md:px-14 py-20 md:py-28 border-t" style={{ borderColor: "var(--rule)" }}>
                    <SectionHeading n="04" title="Tipografia" />

                    <div className="grid md:grid-cols-2 gap-px mb-16" style={{ backgroundColor: "var(--rule)" }}>
                        {[m.typography.primary, m.typography.secondary].map((t) => (
                            <div key={t.family} className="p-6 md:p-8 flex flex-col justify-between min-h-[220px]" style={{ backgroundColor: "var(--paper)" }}>
                                <div>
                                    <Eyebrow>{t.role}</Eyebrow>
                                    <a
                                        href={t.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm hover:underline"
                                        style={{ color: "var(--accent-deep)" }}
                                    >
                                        {t.family} — Google Fonts ↗
                                    </a>
                                </div>
                                <p
                                    className={
                                        t === m.typography.primary
                                            ? "font-[family-name:var(--font-design-serif)] text-[clamp(3rem,7vw,5rem)] leading-none mt-6"
                                            : "font-[family-name:var(--font-design-sans)] font-black text-[clamp(3rem,7vw,5rem)] leading-none mt-6"
                                    }
                                >
                                    Aa Bb
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-2xl flex flex-col gap-8">
                        <div className="pb-6 border-b" style={{ borderColor: "var(--rule)" }}>
                            <Eyebrow>Heading — Roboto Serif</Eyebrow>
                            <p className="font-[family-name:var(--font-design-serif)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight">
                                Lorem ipsum dolor sit.
                            </p>
                        </div>
                        <div className="pb-6 border-b" style={{ borderColor: "var(--rule)" }}>
                            <Eyebrow>Subheading — Roboto Serif</Eyebrow>
                            <p className="font-[family-name:var(--font-design-serif)] text-xl md:text-2xl">
                                Lorem ipsum dolor sit amet, consectetur.
                            </p>
                        </div>
                        <div>
                            <Eyebrow>Body — Roboto</Eyebrow>
                            <p className="text-[15px] md:text-base leading-relaxed max-w-[65ch]" style={{ color: "var(--muted)" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nulla porta,
                                lacinia eros et, ullamcorper elit. Suspendisse tincidunt convallis leo ut
                                ullamcorper elit.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ---------- Elementos ---------- */}
                <section id="elementos" className="scroll-mt-8 px-6 md:px-14 py-20 md:py-28 border-t" style={{ borderColor: "var(--rule)" }}>
                    <SectionHeading n="05" title="Elementos" />
                    <p className="max-w-xl text-[15px] leading-relaxed mb-10" style={{ color: "var(--muted)" }}>
                        {m.graphicElement.description}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5">
                        {m.graphicElement.gallery.map((g) => {
                            const isDark = "dark" in g && g.dark;
                            return (
                            <div
                                key={g.file}
                                className="group relative overflow-hidden"
                                style={{ backgroundColor: isDark ? "var(--ink)" : "var(--paper)" }}
                            >
                                <Image
                                    src={`/design/figma-exports/${g.file}`}
                                    alt={g.label}
                                    width={800}
                                    height={520}
                                    className="w-full h-auto"
                                />
                                <div
                                    className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-2.5 py-1.5 text-[11px] font-mono"
                                    style={{
                                        color: isDark ? "var(--paper)" : "var(--ink)",
                                        background: isDark
                                            ? "linear-gradient(transparent, rgba(12,13,14,0.75))"
                                            : "linear-gradient(transparent, rgba(255,251,247,0.85))",
                                    }}
                                >
                                    <span>{g.label}</span>
                                    <a
                                        href={`/design/figma-exports/${g.file}`}
                                        download
                                        className="uppercase tracking-[0.08em] underline underline-offset-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        PNG ↓
                                    </a>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </section>

                {/* ---------- Fotos ---------- */}
                <section id="fotos" className="scroll-mt-8 px-6 md:px-14 py-20 md:py-28 border-t" style={{ borderColor: "var(--rule)" }}>
                    <SectionHeading n="06" title="Fotos" />
                    <p className="max-w-xl text-[15px] leading-relaxed mb-10" style={{ color: "var(--muted)" }}>
                        {m.photos.description}
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1.5">
                        {m.photos.gallery.map((p) => (
                            <div
                                key={p.file}
                                className="group relative overflow-hidden"
                                style={{ backgroundColor: "var(--ink)" }}
                            >
                                <Image
                                    src={`/images/bruno/${p.file}`}
                                    alt={p.label}
                                    width={400}
                                    height={520}
                                    className="w-full h-auto"
                                />
                                <div
                                    className="absolute inset-x-0 bottom-0 flex flex-col gap-1 px-2 py-1.5"
                                    style={{
                                        background: "linear-gradient(transparent, rgba(12,13,14,0.85))",
                                    }}
                                >
                                    <span className="text-[10px] leading-tight" style={{ color: "var(--paper)" }}>
                                        {p.label}
                                    </span>
                                    <a
                                        href={`/images/bruno/${p.file}`}
                                        download
                                        className="text-[10px] font-mono uppercase tracking-[0.08em] underline underline-offset-2 opacity-0 group-hover:opacity-100 transition-opacity w-fit"
                                        style={{ color: "var(--paper)" }}
                                    >
                                        PNG ↓
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ---------- Aplicações ---------- */}
                <section id="aplicacoes" className="scroll-mt-8 px-6 md:px-14 py-20 md:py-28 border-t" style={{ borderColor: "var(--rule)" }}>
                    <SectionHeading n="07" title="Aplicações" />
                    <div className="grid md:grid-cols-2 gap-1.5">
                        <Image
                            src="/design/figma-exports/aplicacao-hero.png"
                            alt="Aplicação da marca — retrato editorial"
                            width={1024}
                            height={576}
                            className="w-full h-auto"
                        />
                        <Image
                            src="/design/figma-exports/aplicacao-posts.png"
                            alt="Aplicação da marca — posts sociais"
                            width={1024}
                            height={576}
                            className="w-full h-auto"
                        />
                    </div>
                </section>

                {/* ---------- Footer ---------- */}
                <footer
                    className="px-6 md:px-14 py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs border-t"
                    style={{ borderColor: "var(--rule)", color: "var(--muted)" }}
                >
                    <span>
                        Manual de identidade — {m.version} · sincronizado em {m.lastSynced}
                    </span>
                    <div className="flex gap-5 font-mono">
                        <a href="/design/manifest.json" className="hover:underline">
                            manifest.json
                        </a>
                        <a href="/design/reference.md" className="hover:underline">
                            reference.md
                        </a>
                    </div>
                </footer>
            </div>
        </main>
    );
}
