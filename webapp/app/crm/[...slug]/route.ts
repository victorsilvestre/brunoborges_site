import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

const EMAILS_DIR = path.join(process.cwd(), 'app/_emails');

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const filePath = path.join(EMAILS_DIR, ...slug) + '.html';

  if (!filePath.startsWith(EMAILS_DIR)) {
    return new NextResponse('Não encontrado', { status: 404 });
  }

  if (!fs.existsSync(filePath)) {
    return new NextResponse('E-mail não encontrado', { status: 404 });
  }

  const html = fs.readFileSync(filePath, 'utf-8');
  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

export async function generateStaticParams() {
  const paths: { slug: string[] }[] = [];

  function walk(dir: string, prefix: string[] = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), [...prefix, entry.name]);
      } else if (entry.name.endsWith('.html')) {
        paths.push({ slug: [...prefix, entry.name.replace('.html', '')] });
      }
    }
  }

  walk(EMAILS_DIR);
  return paths;
}
