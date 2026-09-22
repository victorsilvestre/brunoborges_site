import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

const EMAILS_DIR = path.join(process.cwd(), 'app/_emails');

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function inlineMarkdown(value: string): string {
  let html = escapeHtml(value);
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  html = html.replace(/_([^_]+)_/g, '<em>$1</em>');
  return html;
}

function markdownToHtml(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const output: string[] = [];
  let inCode = false;
  let codeLines: string[] = [];
  let inList = false;
  let listType = '';
  let inTable = false;

  const closeList = () => {
    if (inList) {
      output.push(`</${listType}>`);
      inList = false;
      listType = '';
    }
  };

  const closeTable = () => {
    if (inTable) {
      output.push('</tbody></table>');
      inTable = false;
    }
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      if (inCode) {
        output.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
        codeLines = [];
        inCode = false;
      } else {
        closeList();
        closeTable();
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      continue;
    }

    if (!trimmed) {
      closeList();
      closeTable();
      continue;
    }

    if (/^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(trimmed)) {
      continue;
    }

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const cells = trimmed.slice(1, -1).split('|').map(cell => cell.trim());
      if (!inTable) {
        closeList();
        output.push('<table><thead><tr>');
        cells.forEach(cell => output.push(`<th>${inlineMarkdown(cell)}</th>`));
        output.push('</tr></thead><tbody>');
        inTable = true;
      } else {
        output.push('<tr>');
        cells.forEach(cell => output.push(`<td>${inlineMarkdown(cell)}</td>`));
        output.push('</tr>');
      }
      continue;
    }

    closeTable();

    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      output.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    if (trimmed.startsWith('>')) {
      closeList();
      output.push(`<blockquote>${inlineMarkdown(trimmed.replace(/^>\s?/, ''))}</blockquote>`);
      continue;
    }

    const unordered = trimmed.match(/^[-*+]\s+(.+)$/);
    const ordered = trimmed.match(/^\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      const nextType = unordered ? 'ul' : 'ol';
      if (!inList || listType !== nextType) {
        closeList();
        output.push(`<${nextType}>`);
        inList = true;
        listType = nextType;
      }
      output.push(`<li>${inlineMarkdown((unordered ?? ordered)![1])}</li>`);
      continue;
    }

    closeList();
    output.push(`<p>${inlineMarkdown(trimmed)}</p>`);
  }

  if (inCode) output.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
  closeList();
  closeTable();

  return output.join('\n');
}

function markdownDocument(markdown: string, title: string): string {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <style>
    :root { color-scheme: light; }
    * { box-sizing: border-box; }
    body { margin: 0; background: #f5f6f4; color: #252525; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; line-height: 1.65; }
    main { width: min(960px, calc(100% - 32px)); margin: 40px auto 64px; background: #fff; border: 1px solid #e2e5e1; border-radius: 16px; padding: clamp(24px, 5vw, 56px); box-shadow: 0 12px 40px rgba(20, 35, 24, .07); }
    h1, h2, h3, h4, h5, h6 { color: #17251c; line-height: 1.2; margin: 1.8em 0 .65em; }
    h1 { margin-top: 0; font-size: clamp(30px, 5vw, 44px); border-bottom: 3px solid #bfea24; padding-bottom: 18px; }
    h2 { font-size: 28px; border-bottom: 1px solid #e2e5e1; padding-bottom: 8px; }
    h3 { font-size: 21px; color: #405443; }
    p { margin: .75em 0 1em; }
    a { color: #176a38; font-weight: 600; }
    code { background: #eff3ed; color: #344b39; padding: 2px 6px; border-radius: 5px; font-size: .9em; }
    pre { overflow-x: auto; background: #17251c; color: #eff8e8; border-radius: 10px; padding: 18px; }
    pre code { background: transparent; color: inherit; padding: 0; }
    blockquote { margin: 20px 0; padding: 14px 18px; border-left: 4px solid #bfea24; background: #f7faee; color: #405443; }
    ul, ol { padding-left: 25px; }
    li { margin: 5px 0; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0 28px; display: block; overflow-x: auto; }
    th, td { min-width: 110px; text-align: left; border: 1px solid #dfe5de; padding: 10px 12px; }
    th { background: #edf5e8; color: #243d2a; font-weight: 700; }
    tr:nth-child(even) td { background: #fafcf9; }
    img { max-width: 100%; height: auto; }
  </style>
</head>
<body><main>${markdownToHtml(markdown)}</main></body>
</html>`;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const relativePath = path.join(...slug);
  const basePath = path.join(EMAILS_DIR, relativePath);

  if (!basePath.startsWith(EMAILS_DIR)) {
    return new NextResponse('Não encontrado', { status: 404 });
  }

  const htmlPath = `${basePath}.html`;
  const markdownPath = `${basePath}.md`;

  if (fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, 'utf-8');
    return new NextResponse(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }

  if (fs.existsSync(markdownPath)) {
    const markdown = fs.readFileSync(markdownPath, 'utf-8');
    const title = slug[slug.length - 1].replace(/[-_]/g, ' ');
    return new NextResponse(markdownDocument(markdown, title), {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }

  return new NextResponse('Conteúdo não encontrado', { status: 404 });
}

export async function generateStaticParams() {
  const paths: { slug: string[] }[] = [];

  function walk(dir: string, prefix: string[] = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), [...prefix, entry.name]);
      } else if (entry.name.endsWith('.html') || entry.name.endsWith('.md')) {
        paths.push({ slug: [...prefix, entry.name.replace(/\.(html|md)$/, '')] });
      }
    }
  }

  walk(EMAILS_DIR);
  return paths;
}
