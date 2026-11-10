export const MEMBROS_URL = "https://alunos.traderbrunoborges.com.br";
export const SUPORTE_EMAIL = "suporte@traderbrunoborges.com.br";

export const SESSAO = {
  inicio: "8h30",
  fim: "10h15",
  inicioMin: 8 * 60 + 30,
  fimMin: 10 * 60 + 15,
} as const;

export const PLANOS = {
  mensal: {
    nome: "Mensal",
    preco: "229,90",
    periodo: "por mês",
    url: "https://pay.hotmart.com/S106637152G?off=9jmaqkw3",
  },
  trimestral: {
    nome: "Trimestral",
    preco: "497,00",
    periodo: "à vista, por trimestre",
    equivalenteMes: "165,67",
    economia: "192,70",
    parcelas: "3x de R$ 177,36",
    url: "https://pay.hotmart.com/S106637152G?off=219yb2z6",
  },
  // Black Friday 2026 (até 30/11). Cupom BF2026TRIMESTRAL já aplicado no link.
  trimestralBF: {
    nome: "Trimestral Black Friday",
    preco: "344,70",
    precoDe: "497,00",
    periodo: "à vista, por trimestre",
    equivalenteMes: "114,90",
    economiaVsMensal: "345,00",
    parcelas: "3x de R$ 123,01",
    validade: "30/11",
    url: "https://pay.hotmart.com/S106637152G?off=u08j44dp",
  },
} as const;
