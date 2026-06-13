'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Loader2 } from 'lucide-react';
import type { BrevoFeedback } from '@/lib/brevo/errors';

interface LeadCaptureFormProps {
  source: string;
  redirectTo: string;
  buttonLabel?: string;
  variant?: 'dark' | 'light';
}

function applyWhatsappMask(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const feedbackStyles: Record<BrevoFeedback['type'], string> = {
  error:
    'text-red-400 bg-red-500/10 border border-red-500/20',
  duplicate:
    'text-blue-400 bg-blue-500/10 border border-blue-500/20',
  success:
    'text-[var(--green-pure)] bg-[var(--green-dim)] border border-[var(--green-border)]',
};

export function LeadCaptureForm({
  source,
  redirectTo,
  buttonLabel = 'Quero Participar da Maratona',
  variant = 'dark',
}: LeadCaptureFormProps) {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<BrevoFeedback | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const isDark = variant === 'dark';

  const inputBase = [
    'w-full rounded-xl px-4 py-3 text-sm outline-none transition-all',
    'border focus:ring-2',
    isDark
      ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[var(--green-border)] focus:ring-[var(--green-dim)]'
      : 'bg-white border-slate-200 text-[var(--dark-pure)] placeholder:text-slate-400 focus:border-[var(--green-border)] focus:ring-[var(--green-dim)]',
  ].join(' ');

  const labelBase = [
    'block text-xs font-bold tracking-widest uppercase mb-1.5',
    isDark ? 'text-white/50' : 'text-[var(--dark-medium)]',
  ].join(' ');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFeedback(null);
    setLoading(true);

    try {
      const res = await fetch('/api/brevo/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, whatsapp, source }),
      });

      const data = await res.json();

      if (!res.ok) {
        setFeedback({ type: 'error', message: data.error ?? 'Algo deu errado. Tente novamente.' });
        return;
      }

      if (!data.ok) {
        setFeedback(data.feedback);
        return;
      }

      if (data.feedback?.type === 'success' && !redirectTo) {
        setFeedback(data.feedback);
        return;
      }

      router.push(redirectTo);
    } catch {
      setFeedback({ type: 'error', message: 'Erro de conexão. Verifique sua internet e tente novamente.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-4"
      noValidate
    >
      <div>
        <label htmlFor={`nome-${source}`} className={labelBase}>Nome completo</label>
        <input
          id={`nome-${source}`}
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
          autoComplete="name"
          className={inputBase}
        />
      </div>

      <div>
        <label htmlFor={`email-${source}`} className={labelBase}>E-mail</label>
        <input
          id={`email-${source}`}
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoComplete="email"
          className={inputBase}
        />
      </div>

      <div>
        <label htmlFor={`whatsapp-${source}`} className={labelBase}>WhatsApp</label>
        <input
          id={`whatsapp-${source}`}
          type="tel"
          placeholder="(11) 99999-9999"
          value={whatsapp}
          onChange={e => setWhatsapp(applyWhatsappMask(e.target.value))}
          required
          autoComplete="tel"
          className={inputBase}
        />
      </div>

      {feedback && (
        <p className={`text-sm font-medium rounded-xl px-4 py-3 ${feedbackStyles[feedback.type]}`}>
          {feedback.message}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-display font-bold text-sm uppercase tracking-wider text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 active:scale-[0.98]"
        style={{
          background: 'var(--green-pure)',
          boxShadow: '0 8px 30px var(--green-dim)',
        }}
        onMouseEnter={e => {
          if (!loading) {
            (e.currentTarget as HTMLElement).style.background = 'var(--green-dark)';
            (e.currentTarget as HTMLElement).style.boxShadow = 'var(--glow-green)';
          }
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.background = 'var(--green-pure)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px var(--green-dim)';
        }}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            {buttonLabel}
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
