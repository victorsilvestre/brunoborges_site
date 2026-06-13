import { NextRequest, NextResponse } from 'next/server';
import { BREVO_CAMPAIGNS } from '@/lib/brevo/campaigns';
import { resolveBrevoError, BREVO_SUCCESS, INTERNAL_ERROR_MAP } from '@/lib/brevo/errors';

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
    return NextResponse.json({ ok: false, feedback: INTERNAL_ERROR_MAP.missing_fields });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, feedback: INTERNAL_ERROR_MAP.invalid_email });
  }

  const digits = normalizeWhatsapp(whatsapp);
  if (digits.length < 10) {
    return NextResponse.json({ ok: false, feedback: INTERNAL_ERROR_MAP.invalid_whatsapp });
  }

  const campaign = BREVO_CAMPAIGNS[source];
  if (!campaign) {
    return NextResponse.json({ ok: false, feedback: INTERNAL_ERROR_MAP.server_error }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, feedback: INTERNAL_ERROR_MAP.server_error }, { status: 500 });
  }

  const listId = Number(process.env[campaign.listIdEnv]);
  if (!listId || isNaN(listId)) {
    return NextResponse.json({ ok: false, feedback: INTERNAL_ERROR_MAP.server_error }, { status: 500 });
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

  if (brevoRes.status === 204) {
    return NextResponse.json({ ok: true, feedback: BREVO_SUCCESS });
  }

  if (brevoRes.status === 201) {
    return NextResponse.json({ ok: true, feedback: BREVO_SUCCESS });
  }

  const errBody = await brevoRes.json().catch(() => ({})) as { code?: string; message?: string };
  console.error('[Brevo] Erro ao criar contato:', errBody);

  const feedback = resolveBrevoError(errBody.code ?? 'unknown', errBody.message ?? '');

  return NextResponse.json({ ok: false, feedback }, { status: 200 });
}
