import { NextResponse } from "next/server";
import { brandManifest as m } from "../manifest";

function toMarkdown(): string {
    const lines: string[] = [];

    lines.push(`# ${m.name}`, "");
    lines.push(`Versão ${m.version} · sincronizado em ${m.lastSynced} · fonte: ${m.source}`, "");
    lines.push(
        "> Referência de identidade de marca para consulta humana ou por IA. Também disponível como dados estruturados em `/design/manifest.json`.",
        ""
    );

    lines.push("## Marca", "");
    lines.push("**Quem somos**", "", m.brand.quemSomos, "");
    lines.push("**Visão**", "", m.brand.visao, "");
    lines.push("**Missão**", "", m.brand.missao, "");
    lines.push("**Valores**", "");
    for (const v of m.brand.valores) lines.push(`- ${v}`);
    lines.push("");

    lines.push("## Cores", "");
    lines.push("### Primárias", "");
    lines.push("| Nome | Hex | RGB | CMYK | Uso |", "|---|---|---|---|---|");
    for (const c of m.colors.primary) {
        lines.push(`| ${c.name} | \`${c.hex}\` | ${c.rgb} | ${c.cmyk} | ${c.usage} |`);
    }
    lines.push("");
    lines.push("### Secundárias", "");
    lines.push("| Hex | RGB | CMYK |", "|---|---|---|");
    for (const c of m.colors.secondary) {
        lines.push(`| \`${c.hex}\` | ${c.rgb} | ${c.cmyk} |`);
    }
    lines.push("");

    lines.push("## Tipografia", "");
    for (const t of [m.typography.primary, m.typography.secondary]) {
        lines.push(`**${t.role}: ${t.family}**`, "");
        lines.push(`- Fonte: [Google Fonts](${t.url})`);
        lines.push(`- Pesos: ${t.weights.join(", ")}`, "");
    }

    lines.push("## Logo", "");
    lines.push(m.logo.description, "");
    lines.push(`**Margem de segurança:** ${m.logo.safeArea}`, "");
    lines.push("**Uso incorreto — evite:**", "");
    for (const rule of m.logo.misuse) lines.push(`- ${rule}`);
    lines.push("");
    lines.push("**Variantes disponíveis (SVG)**", "");
    for (const group of m.logo.variants) {
        lines.push(`_${group.layout}_ — ${group.description}`, "");
        for (const item of group.items) {
            lines.push(`- [${item.color} / fundo ${item.bg}](${item.path})`);
        }
        lines.push("");
    }
    lines.push("**Ícones**", "");
    for (const f of m.logo.iconFiles) {
        lines.push(`- [${f.label}](${f.path})`);
    }
    lines.push("");

    lines.push("## Elemento gráfico", "");
    lines.push(`**${m.graphicElement.name}**`, "");
    lines.push(m.graphicElement.description, "");
    lines.push("");
    lines.push("**Galeria**", "");
    for (const g of m.graphicElement.gallery) {
        lines.push(`- [${g.label}](/design/figma-exports/${g.file})`);
    }
    lines.push("");

    lines.push("## Fotos", "");
    lines.push(m.photos.description, "");
    for (const p of m.photos.gallery) {
        lines.push(`- [${p.label}](/images/bruno/${p.file})`);
    }

    return lines.join("\n");
}

export function GET() {
    return new NextResponse(toMarkdown(), {
        headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
}
