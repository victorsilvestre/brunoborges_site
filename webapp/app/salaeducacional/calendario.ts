// Dias sem sala: fins de semana e dias sem pregão na B3 (feriados nacionais
// mais 02/11, 24/12 e 31/12). Base: calendário oficial da B3 para 2026.
// Os feriados móveis saem da Páscoa, então os anos seguintes se calculam
// sozinhos. Se a B3 mudar alguma regra, confira o calendário do ano.

const DIA_MS = 86_400_000;

const FERIADOS_FIXOS = [
  "01-01", // Confraternização Universal
  "04-21", // Tiradentes
  "05-01", // Dia do Trabalho
  "09-07", // Independência
  "10-12", // Nossa Senhora Aparecida
  "11-02", // Finados
  "11-20", // Consciência Negra
  "12-24", // Véspera de Natal (sem pregão)
  "12-25", // Natal
  "12-31", // Véspera de Ano Novo (sem pregão)
];

const SEMANA = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado",
];

// Algoritmo de Meeus/Jones/Butcher (Páscoa gregoriana).
function pascoa(ano: number): number {
  const a = ano % 19;
  const b = Math.floor(ano / 100);
  const c = ano % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mes = Math.floor((h + l - 7 * m + 114) / 31);
  const dia = ((h + l - 7 * m + 114) % 31) + 1;
  return Date.UTC(ano, mes - 1, dia);
}

const chave = (t: number) => new Date(t).toISOString().slice(5, 10);

const cache = new Map<number, Set<string>>();

function feriadosDoAno(ano: number): Set<string> {
  const guardado = cache.get(ano);
  if (guardado) return guardado;

  const p = pascoa(ano);
  const moveis = [
    p - 48 * DIA_MS, // Segunda de Carnaval
    p - 47 * DIA_MS, // Terça de Carnaval
    p - 46 * DIA_MS, // Quarta de Cinzas: a B3 só abre às 13h, sem sala de manhã
    p - 2 * DIA_MS, // Sexta-feira Santa
    p + 60 * DIA_MS, // Corpus Christi
  ].map(chave);

  const feriados = new Set([...FERIADOS_FIXOS, ...moveis]);
  cache.set(ano, feriados);
  return feriados;
}

export interface DataCivil {
  ano: number;
  mes: number; // 1-12
  dia: number;
}

export function ehFeriado({ ano, mes, dia }: DataCivil): boolean {
  return feriadosDoAno(ano).has(chave(Date.UTC(ano, mes - 1, dia)));
}

export function temSala(data: DataCivil): boolean {
  const semana = new Date(Date.UTC(data.ano, data.mes - 1, data.dia)).getUTCDay();
  return semana !== 0 && semana !== 6 && !ehFeriado(data);
}

// Próximo dia com sala depois de `data`, descrito para o visitante.
export function descreverProximaSala(data: DataCivil): string {
  const base = Date.UTC(data.ano, data.mes - 1, data.dia);
  for (let delta = 1; delta <= 14; delta++) {
    const alvo = new Date(base + delta * DIA_MS);
    const candidato = {
      ano: alvo.getUTCFullYear(),
      mes: alvo.getUTCMonth() + 1,
      dia: alvo.getUTCDate(),
    };
    if (!temSala(candidato)) continue;
    if (delta === 1) return "amanhã";
    const dd = String(candidato.dia).padStart(2, "0");
    const mm = String(candidato.mes).padStart(2, "0");
    return `${SEMANA[alvo.getUTCDay()]} (${dd}/${mm})`;
  }
  return "em breve";
}
