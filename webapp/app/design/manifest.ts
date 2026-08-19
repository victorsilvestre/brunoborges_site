// Fonte única de verdade dos tokens de marca do Bruno Borges.
// Extraído do Brand Guidelines 2026 (Figma: IDV - Bruno Borges).
// Consumido pela página visual (/design), pelo endpoint /design/manifest.json
// e pelo /design/reference.md.

export const brandManifest = {
  name: "Bruno Borges — Brand Guidelines",
  version: "2026",
  source: "Figma: IDV - Bruno Borges",
  lastSynced: "2026-08-19",

  brand: {
    quemSomos:
      "Somos uma escola de traders reais, conectamos controle emocional à consistência do mercado. O Trader Bruno Borges habita a intersecção entre a técnica operacional e a disciplina mental, desenvolvendo mentorias financeiras que combinam análise de precisão, leitura de mercado e controle emocional refinado. Afastando-se das ilusões de lucro rápido, sua metodologia é validada por 7 anos de experiência e construída para transformar pessoas comuns em profissionais consistentes.",
    visao:
      "Ser referência nacional em educação de day trade, reconhecida pela transformação real de alunos e pela excelência no ensino operacional e emocional. Valorizando sempre o processo acima da ilusão do lucro rápido.",
    missao:
      "Transformar pessoas comuns em traders disciplinados e preparados, através de educação prática, metodologia validada e desenvolvimento emocional, promovendo conhecimento real sobre o mercado financeiro.",
    valores: [
      "Disciplina",
      "Transparência",
      "Responsabilidade e ética",
      "Excelência e evolução contínua",
      "Foco em consistência",
    ],
  },

  colors: {
    primary: [
      { name: "Verde", token: "verde", hex: "#A2CB10", rgb: "162, 234, 36", cmyk: "30, 0, 100, 0", usage: "Cor de assinatura da marca. Destaques, CTAs, símbolo do logo." },
      { name: "Vermelho", token: "vermelho", hex: "#A71619", rgb: "167, 22, 25", cmyk: "10, 100, 100, 20", usage: "Contraponto sério/premium ao verde. Urgência, contraste no grafismo." },
      { name: "Preto", token: "preto", hex: "#0C0D0E", rgb: "12, 13, 14", cmyk: "64, 52, 50, 90", usage: "Base escura imersiva, textos sobre claro." },
      { name: "Off-white", token: "off-white", hex: "#FFFBF7", rgb: "255, 251, 247", cmyk: "0, 1, 2, 0", usage: "Base clara, textos sobre escuro." },
    ],
    secondary: [
      { hex: "#E80007", rgb: "232, 0, 7", cmyk: "0, 100, 100, 0" },
      { hex: "#8E0008", rgb: "142, 0, 8", cmyk: "10, 95, 100, 35" },
      { hex: "#620007", rgb: "98, 0, 7", cmyk: "16, 87, 63, 61" },
      { hex: "#3A1415", rgb: "58, 20, 21", cmyk: "35, 70, 50, 85" },
      { hex: "#BFEA24", rgb: "191, 234, 36", cmyk: "65, 55, 50, 90" },
      { hex: "#799F00", rgb: "121, 159, 0", cmyk: "60, 115, 100, 5" },
      { hex: "#3E5204", rgb: "62, 82, 4", cmyk: "50, 30, 100, 50" },
      { hex: "#1B2520", rgb: "27, 37, 32", cmyk: "65, 55, 50, 90" },
      { hex: "#FFFBF7", rgb: "255, 251, 247", cmyk: "0, 1, 2, 0" },
      { hex: "#6E6D6B", rgb: "110, 109, 107", cmyk: "50, 40, 45, 20" },
      { hex: "#383736", rgb: "56, 55, 54", cmyk: "60, 50, 50, 60" },
      { hex: "#0C0D0E", rgb: "12, 13, 14", cmyk: "65, 50, 50, 90" },
    ],
  },

  typography: {
    primary: {
      role: "Títulos (Headings)",
      family: "Roboto Serif",
      source: "Google Fonts",
      url: "https://fonts.google.com/specimen/Roboto+Serif",
      weights: ["Thin", "ExtraLight", "Light", "Regular", "Medium", "SemiBold", "Bold", "ExtraBold", "Black"],
    },
    secondary: {
      role: "Texto (Corpo)",
      family: "Roboto",
      source: "Google Fonts",
      url: "https://fonts.google.com/specimen/Roboto",
      weights: ["Thin", "ExtraLight", "Light", "Regular", "Medium", "SemiBold", "Bold", "ExtraBold", "Black"],
    },
  },

  logo: {
    description:
      "Monograma 'BB' formado pela sobreposição de duas letras B espelhadas, remetendo a candlesticks de um gráfico. Assinatura completa: 'TRADER Bruno Borges'.",
    variations: [
      "Símbolo isolado",
      "Símbolo + TRADER Bruno Borges (empilhado)",
      "Bruno [símbolo] Borges (símbolo substitui o BB central)",
      "TRADER Bruno Borges (empilhado, compacto)",
    ],
    safeArea: "Distância mínima absoluta = 1/2 da medida do símbolo 'BB' do logotipo, em todos os lados.",
    misuse: [
      "Não esticar ou distorcer",
      "Não usar cores fora da paleta aprovada",
      "Não aplicar contorno (outline)",
      "Não alterar o posicionamento dos elementos do logo",
      "Não usar combinações de baixo contraste",
      "Não girar ou mudar a posição do logotipo",
    ],
    files: [
      { label: "Ícone — fundo escuro", path: "/images/logo/logo_icon-white_new.png" },
      { label: "Ícone — fundo claro", path: "/images/logo/logo_icon-black_new.png" },
      { label: "Logotipo completo — fundo claro", path: "/images/logo/logo_traderbrunoborges_fundo-claro.png" },
      { label: "Logotipo completo — fundo escuro", path: "/images/logo/logo_traderbrunoborges_fundo-escuro.png" },
    ],
  },

  graphicElement: {
    name: "Grafismo de candlesticks",
    description:
      "O ritmo dos candlesticks, a narrativa do gráfico. Grafismo de apoio que desconstrói a anatomia dos candlesticks de forma abstrata e geométrica, simulando o ritmo e a oscilação do mercado financeiro sem cair em clichês literais. Através da alternância de blocos, cria um padrão visual dinâmico e sofisticado — ideal para fundos de apresentações, postagens e transmissões ao vivo.",
  },
} as const;

export type BrandManifest = typeof brandManifest;
