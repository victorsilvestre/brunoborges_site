import { NextRequest, NextResponse } from 'next/server';
import { BREVO_CAMPAIGNS } from '@/lib/brevo/campaigns';

function normalizeWhatsapp(raw: string): string {
  return raw.replace(/\D/g, '');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: 'Requisição inválida.' }, { status: 400 });
  }

  const { nome, email, whatsapp, source } = body as {
    nome?: string;
    email?: string;
    whatsapp?: string;
    source?: string;
  };

  if (!nome?.trim() || !email?.trim() || !whatsapp?.trim() || !source?.trim()) {
    return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'E-mail inválido.' }, { status: 400 });
  }

  const digits = normalizeWhatsapp(whatsapp);
  if (digits.length < 10) {
    return NextResponse.json({ error: 'WhatsApp inválido.' }, { status: 400 });
  }

  const campaign = BREVO_CAMPAIGNS[source];
  if (!campaign) {
    return NextResponse.json({ error: 'Campanha não encontrada.' }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Configuração de servidor ausente.' }, { status: 500 });
  }

  const listId = Number(process.env[campaign.listIdEnv]);
  if (!listId || isNaN(listId)) {
    return NextResponse.json({ error: 'Configuração de servidor ausente.' }, { status: 500 });
  }

  const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.trim().toLowerCase(),
      attributes: {
        NOME: nome.trim(),
        WHATSAPP: `+55${digits}`,
        SMS: `+55${digits}`,
      },
      listIds: [listId],
      updateEnabled: true,
    }),
  });

  if (!brevoRes.ok && brevoRes.status !== 204) {
    const errBody = await brevoRes.json().catch(() => ({}));
    console.error('[Brevo] Erro ao criar contato:', errBody);
return NextResponse.json({ error: 'Erro ao salvar seus dados. Tente novamente.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
