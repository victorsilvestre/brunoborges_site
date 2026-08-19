import Image from "next/image";
import { brandManifest as m } from "./manifest";
import { ColorSwatch } from "./ColorSwatch";

const GREEN = "#A2CB10";
const BLACK = "#0C0D0E";
const OFFWHITE = "#FFFBF7";

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div className="font-serif text-sm text-black/40 mb-3">{children}</div>
    );
}

function Divider() {
    return <div className="h-px w-full bg-black/10" />;
}

export default function DesignPage() {
    return (
        <main
            className="font-[family-name:var(--font-design-sans)]"
            style={{ backgroundColor: OFFWHITE, color: BLACK }}
        >
            {/* ---------- Utility bar ---------- */}
            <div className="flex items-center justify-between px-6 md:px-12 py-3 text-xs font-mono border-b border-black/10">
                <span className="uppercase tracking-[0.15em] opacity-60">
                    Referência interna — não indexado
                </span>
                <div className="flex gap-4">
                    <a href="/design/manifest.json" className="underline decoration-black/20 hover:decoration-black">
                        manifest.json
                    </a>
                    <a href="/design/reference.md" className="underline decoration-black/20 hover:decoration-black">
                        reference.md
                    </a>
                </div>
            </div>

            {/* ---------- Cover ---------- */}
            <section
                className="relative flex flex-col justify-between px-6 md:px-16 py-16 md:py-24 min-h-[70vh]"
                style={{ backgroundColor: GREEN, color: BLACK }}
            >
                <div className="flex justify-end">
                    <span className="font-serif text-sm">{m.version}</span>
                </div>
                <div>
                    <h1 className="font-[family-name:var(--font-design-serif)] font-normal leading-[0.95] text-[13vw] md:text-[9vw] tracking-tight">
                        Brand<br />
                        <span className="italic">Guidelines</span>
                    </h1>
                </div>
                <div className="flex justify-end">
                    <span className="font-[family-name:var(--font-design-serif)] text-3xl md:text-4xl leading-tight text-right">
                        Bruno<br />Borges
                    </span>
                </div>
            </section>

            {/* ---------- Quem somos / Visão / Missão / Valores ---------- */}
            <section className="px-6 md:px-16 py-20 md:py-28 grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
                <SectionLabel>Quem somos</SectionLabel>
                <p className="font-[family-name:var(--font-design-serif)] text-2xl md:text-4xl leading-snug max-w-3xl">
                    {m.brand.quemSomos}
                </p>
            </section>
            <Divider />
            <section className="px-6 md:px-16 py-16 md:py-20 grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
                <SectionLabel>Visão</SectionLabel>
                <p className="text-lg md:text-2xl leading-relaxed max-w-3xl opacity-90">{m.brand.visao}</p>
            </section>
            <Divider />
            <section className="px-6 md:px-16 py-16 md:py-20 grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
                <SectionLabel>Missão</SectionLabel>
                <p className="text-lg md:text-2xl leading-relaxed max-w-3xl opacity-90">{m.brand.missao}</p>
            </section>
            <Divider />
            <section
                className="px-6 md:px-16 py-16 md:py-20 grid md:grid-cols-[200px_1fr] gap-8 md:gap-16"
                style={{ backgroundColor: BLACK, color: OFFWHITE }}
            >
                <div className="font-serif text-sm text-white/40 mb-3">Valores</div>
                <ul className="flex flex-col gap-2">
                    {m.brand.valores.map((v) => (
                        <li key={v} className="font-[family-name:var(--font-design-serif)] text-2xl md:text-3xl">
                            {v}
                        </li>
                    ))}
                </ul>
            </section>

            {/* ---------- Logo ---------- */}
            <section className="border-t border-black/10">
                <div className="px-6 md:px-16 pt-20 pb-8">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-50">01</span>
                    <h2 className="font-[family-name:var(--font-design-serif)] text-6xl md:text-8xl mt-2">Logo</h2>
                </div>

                <div className="px-6 md:px-16 pb-16">
                    <p className="max-w-2xl text-base md:text-lg opacity-80 mb-10">{m.logo.description}</p>

                    <div className="mb-16 overflow-hidden">
                        <Image
                            src="/design/figma-exports/logo-showcase.png"
                            alt="Logo Bruno Borges — símbolo e variações sobre fundo escuro"
                            width={1024}
                            height={576}
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 mb-16">
                        <div className="flex flex-col gap-4">
                            <span className="font-serif text-sm opacity-50">Fundo claro</span>
                            <Image
                                src="/images/logo/logo_traderbrunoborges_fundo-claro.png"
                                alt="Logo Bruno Borges — versão fundo claro"
                                width={444}
                                height={165}
                                className="w-full h-auto border border-black/10"
                            />
                        </div>
                        <div className="flex flex-col gap-4 bg-black p-6" style={{ backgroundColor: BLACK }}>
                            <span className="font-serif text-sm text-white/50">Fundo escuro</span>
                            <Image
                                src="/images/logo/logo_traderbrunoborges_fundo-escuro.png"
                                alt="Logo Bruno Borges — versão fundo escuro"
                                width={444}
                                height={165}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 mb-16">
                        <div>
                            <span className="font-serif text-sm opacity-50 block mb-3">Variações — fundo claro</span>
                            <Image
                                src="/design/figma-exports/logo-variacoes-fundo-claro.png"
                                alt="Variações do logo em fundo claro"
                                width={1024}
                                height={576}
                                className="w-full h-auto border border-black/10"
                            />
                        </div>
                        <div>
                            <span className="font-serif text-sm opacity-50 block mb-3">Variações — fundo escuro</span>
                            <Image
                                src="/design/figma-exports/logo-variacoes-fundo-escuro.png"
                                alt="Variações do logo em fundo escuro"
                                width={1024}
                                height={576}
                                className="w-full h-auto border border-black/10"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 mb-16">
                        <div>
                            <span className="font-serif text-sm opacity-50 block mb-3">Margem de segurança</span>
                            <Image
                                src="/design/figma-exports/margem-seguranca.png"
                                alt="Margem de segurança do logo"
                                width={1024}
                                height={576}
                                className="w-full h-auto border border-black/10 mb-3"
                            />
                            <p className="text-sm opacity-70">{m.logo.safeArea}</p>
                        </div>
                        <div>
                            <span className="font-serif text-sm opacity-50 block mb-3">Uso incorreto</span>
                            <Image
                                src="/design/figma-exports/uso-incorreto.png"
                                alt="Exemplos de uso incorreto do logo"
                                width={1024}
                                height={576}
                                className="w-full h-auto border border-black/10 mb-3"
                            />
                            <ul className="text-sm opacity-70 space-y-1">
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
                        <span className="font-serif text-sm opacity-50 block mb-3">Arquivos para download</span>
                        <div className="flex flex-wrap gap-3">
                            {m.logo.files.map((f) => (
                                <a
                                    key={f.path}
                                    href={f.path}
                                    download
                                    className="text-sm font-mono px-4 py-2 border border-black/20 hover:border-black hover:bg-black hover:text-[--offwhite] transition-colors"
                                    style={{ ["--offwhite" as string]: OFFWHITE }}
                                >
                                    {f.label} ↓
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Cores ---------- */}
            <section className="border-t border-black/10">
                <div className="px-6 md:px-16 pt-20 pb-8">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-50">02</span>
                    <h2 className="font-[family-name:var(--font-design-serif)] text-6xl md:text-8xl mt-2">Cores</h2>
                </div>

                <div className="px-6 md:px-16 pb-10">
                    <p className="max-w-2xl text-base md:text-lg opacity-80">
                        A paleta equilibra a energia do mercado com a maturidade da mentoria através de um
                        contraste estratégico: o verde elétrico traz o dinamismo, o vermelho evoca seriedade
                        premium. Preto, chumbo e off-white sustentam uma base imersiva e sóbria.
                    </p>
                </div>

                <div className="px-6 md:px-16 pb-16">
                    <span className="font-serif text-sm opacity-50 block mb-4">Primárias</span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-16">
                        {m.colors.primary.map((c) => (
                            <ColorSwatch key={c.hex} hex={c.hex} label={c.name} sublabel={c.rgb} large />
                        ))}
                    </div>

                    <span className="font-serif text-sm opacity-50 block mb-4">Secundárias</span>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
                        {m.colors.secondary.map((c, i) => (
                            <ColorSwatch key={`${c.hex}-${i}`} hex={c.hex} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------- Tipografia ---------- */}
            <section className="border-t border-black/10">
                <div className="px-6 md:px-16 pt-20 pb-8">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-50">03</span>
                    <h2 className="font-[family-name:var(--font-design-serif)] text-6xl md:text-8xl mt-2">Tipografia</h2>
                </div>

                <div className="px-6 md:px-16 pb-20 flex flex-col gap-16">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-end border-b border-black/10 pb-10">
                        <div>
                            <span className="font-serif text-sm opacity-50 block mb-2">{m.typography.primary.role}</span>
                            <a
                                href={m.typography.primary.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm underline decoration-black/20 hover:decoration-black"
                            >
                                {m.typography.primary.family} — Google Fonts ↗
                            </a>
                        </div>
                        <p className="font-[family-name:var(--font-design-serif)] text-6xl md:text-8xl leading-none">
                            Aa Bb Cc
                        </p>
                    </div>

                    <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-end border-b border-black/10 pb-10">
                        <div>
                            <span className="font-serif text-sm opacity-50 block mb-2">{m.typography.secondary.role}</span>
                            <a
                                href={m.typography.secondary.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm underline decoration-black/20 hover:decoration-black"
                            >
                                {m.typography.secondary.family} — Google Fonts ↗
                            </a>
                        </div>
                        <p className="font-[family-name:var(--font-design-sans)] font-black text-6xl md:text-8xl leading-none">
                            Aa Bb Cc
                        </p>
                    </div>

                    <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                        <div />
                        <div className="flex flex-col gap-6">
                            <div>
                                <span className="font-serif text-xs opacity-40 block mb-1">Heading — Roboto Serif</span>
                                <p className="font-[family-name:var(--font-design-serif)] text-4xl md:text-5xl font-black leading-tight">
                                    Lorem ipsum dolor sit.
                                </p>
                            </div>
                            <div>
                                <span className="font-serif text-xs opacity-40 block mb-1">Subheading — Roboto Serif</span>
                                <p className="font-[family-name:var(--font-design-serif)] text-2xl md:text-3xl">
                                    Lorem ipsum dolor sit amet, consectetur.
                                </p>
                            </div>
                            <div>
                                <span className="font-serif text-xs opacity-40 block mb-1">Body — Roboto</span>
                                <p className="text-base md:text-lg opacity-80 max-w-xl">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nulla porta,
                                    lacinia eros et, ullamcorper elit. Suspendisse tincidunt convallis leo ut
                                    ullamcorper elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Elementos ---------- */}
            <section className="border-t border-black/10">
                <div className="px-6 md:px-16 pt-20 pb-8">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-50">04</span>
                    <h2 className="font-[family-name:var(--font-design-serif)] text-6xl md:text-8xl mt-2">Elementos</h2>
                </div>
                <div className="px-6 md:px-16 pb-10">
                    <p className="max-w-2xl text-base md:text-lg opacity-80">{m.graphicElement.description}</p>
                </div>
                <div className="grid md:grid-cols-2">
                    <Image
                        src="/design/figma-exports/grafismo-diagonal.png"
                        alt="Grafismo de candlesticks — aplicação diagonal"
                        width={1024}
                        height={576}
                        className="w-full h-auto"
                    />
                    <Image
                        src="/design/figma-exports/cores-aplicadas-simbolo.png"
                        alt="Cores aplicadas no símbolo"
                        width={1024}
                        height={576}
                        className="w-full h-auto"
                    />
                </div>
            </section>

            {/* ---------- Aplicações ---------- */}
            <section className="border-t border-black/10">
                <div className="px-6 md:px-16 pt-20 pb-8">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-50">05</span>
                    <h2 className="font-[family-name:var(--font-design-serif)] text-6xl md:text-8xl mt-2">Aplicações</h2>
                </div>
                <div className="grid md:grid-cols-2">
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
                className="px-6 md:px-16 py-16 flex flex-col md:flex-row justify-between gap-6 text-sm"
                style={{ backgroundColor: BLACK, color: OFFWHITE }}
            >
                <span className="opacity-50">
                    Manual de identidade — {m.version} · sincronizado em {m.lastSynced}
                </span>
                <div className="flex gap-6 font-mono">
                    <a href="/design/manifest.json" className="underline decoration-white/20 hover:decoration-white">
                        manifest.json
                    </a>
                    <a href="/design/reference.md" className="underline decoration-white/20 hover:decoration-white">
                        reference.md
                    </a>
                </div>
            </footer>
        </main>
    );
}
