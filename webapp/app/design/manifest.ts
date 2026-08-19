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
    safeArea: "Distância mínima absoluta = 1/2 da medida do símbolo 'BB' do logotipo, em todos os lados.",
    misuse: [
      "Não esticar ou distorcer",
      "Não usar cores fora da paleta aprovada",
      "Não aplicar contorno (outline)",
      "Não alterar o posicionamento dos elementos do logo",
      "Não usar combinações de baixo contraste",
      "Não girar ou mudar a posição do logotipo",
    ],
    // Matriz completa: 4 layouts x 4 cores, cada arquivo já vem pareado com o
    // fundo correto para essa cor (ex: branca só existe sobre fundo escuro).
    variants: [
      {
        layout: "Completo",
        description: "TRADER Bruno Borges — símbolo à esquerda, assinatura horizontal.",
        items: [
          { color: "Verde", bg: "claro", path: "/images/logo/logo-verde-fundo-claro.svg" },
          { color: "Vermelha", bg: "claro", path: "/images/logo/logo-vermelha-fundo-claro.svg" },
          { color: "Preta", bg: "claro", path: "/images/logo/logo-preta-fundo-claro.svg" },
          { color: "Verde", bg: "escuro", path: "/images/logo/logo-verde-fundo-escuro.svg" },
          { color: "Vermelha", bg: "escuro", path: "/images/logo/logo-vermelha-fundo-escuro.svg" },
          { color: "Branca", bg: "escuro", path: "/images/logo/logo-branca-fundo-escuro.svg" },
        ],
      },
      {
        layout: "Nome",
        description: "Bruno [símbolo] Borges — o monograma substitui o miolo do nome.",
        items: [
          { color: "Verde", bg: "claro", path: "/images/logo/logo-nome-verde-fundo-claro.svg" },
          { color: "Vermelha", bg: "claro", path: "/images/logo/logo-nome-vermelha-fundo-claro.svg" },
          { color: "Preta", bg: "claro", path: "/images/logo/logo-nome-preta-fundo-claro.svg" },
          { color: "Verde", bg: "escuro", path: "/images/logo/logo-nome-verde-fundo-escuro.svg" },
          { color: "Vermelha", bg: "escuro", path: "/images/logo/logo-nome-vermelha-fundo-escuro.svg" },
          { color: "Branca", bg: "escuro", path: "/images/logo/logo-nome-branca-fundo-escuro.svg" },
        ],
      },
      {
        layout: "Reduzida horizontal",
        description: "Versão compacta da assinatura completa, para espaços estreitos.",
        items: [
          { color: "Verde", bg: "claro", path: "/images/logo/logo-reduzida-horizontal-verde-fundo-claro.svg" },
          { color: "Vermelha", bg: "claro", path: "/images/logo/logo-reduzida-horizontal-vermelha-fundo-claro.svg" },
          { color: "Preta", bg: "claro", path: "/images/logo/logo-reduzida-horizontal-preta-fundo-claro.svg" },
          { color: "Verde", bg: "escuro", path: "/images/logo/logo-reduzida-horizontal-verde-fundo-escuro.svg" },
          { color: "Vermelha", bg: "escuro", path: "/images/logo/logo-reduzida-horizontal-vermelha-fundo-escuro.svg" },
          { color: "Branca", bg: "escuro", path: "/images/logo/logo-reduzida-horizontal-branca-fundo-escuro.svg" },
        ],
      },
      {
        layout: "Reduzida vertical",
        description: "TRADER Bruno Borges empilhado sob o símbolo, para formatos quadrados.",
        items: [
          { color: "Verde", bg: "claro", path: "/images/logo/logo-reduzida-vertical-verde-fundo-claro.svg" },
          { color: "Vermelha", bg: "claro", path: "/images/logo/logo-reduzida-vertical-vermelha-fundo-claro.svg" },
          { color: "Preta", bg: "claro", path: "/images/logo/logo-reduzida-vertical-preta-fundo-claro.svg" },
          { color: "Verde", bg: "escuro", path: "/images/logo/logo-reduzida-vertical-verde-fundo-escuro.svg" },
          { color: "Vermelha", bg: "escuro", path: "/images/logo/logo-reduzida-vertical-vermelha-fundo-escuro.svg" },
          { color: "Branca", bg: "escuro", path: "/images/logo/logo-reduzida-vertical-branca-fundo-escuro.svg" },
        ],
      },
    ],
    iconFiles: [
      { label: "Ícone — fundo escuro", path: "/images/logo/logo_icon-white_new.png" },
      { label: "Ícone — fundo claro", path: "/images/logo/logo_icon-black_new.png" },
    ],
  },

  graphicElement: {
    name: "Grafismo de candlesticks",
    description:
      "O ritmo dos candlesticks, a narrativa do gráfico. Grafismo de apoio que desconstrói a anatomia dos candlesticks de forma abstrata e geométrica, simulando o ritmo e a oscilação do mercado financeiro sem cair em clichês literais. Através da alternância de blocos, cria um padrão visual dinâmico e sofisticado — ideal para fundos de apresentações, postagens e transmissões ao vivo.",
    gallery: [
      { file: "grafismo-sequencia.png", label: "Sequência de candles", dark: true },
      { file: "grafismo-sequencia-aplicado.png", label: "Sequência aplicada com grid", dark: true },
      { file: "grafismo-candle-sequencia-vazado.png", label: "Sequência vazada (outline)", dark: true },
      { file: "grafismo-onda-linhas-verde.png", label: "Onda de linhas — verde" },
      { file: "grafismo-onda-linhas-vermelho.png", label: "Onda de linhas — vermelho" },
      { file: "grafismo-blocos.png", label: "Blocos diagonais", dark: true },
      { file: "grafismo-completo-lateral.png", label: "Composição lateral completa", dark: true },
      { file: "grafismo-cortina-com-linhas.png", label: "Cortina com linhas de grade", dark: true },
      { file: "grafismo-cortina-parcial-verde.png", label: "Cortina parcial — verde" },
      { file: "grafismo-cortina-parcial-verde-fundo-escuro.png", label: "Cortina parcial — verde sobre escuro", dark: true },
      { file: "grafismo-cortina-parcial-vermelho.png", label: "Cortina parcial — vermelho" },
      { file: "grafismo-cortina-parcial-vermelho-fundo-escuro.png", label: "Cortina parcial — vermelho sobre escuro", dark: true },
    ],
  },

  photos: {
    description:
      "Banco de fotos do Bruno Borges com fundo transparente, tratadas para uso livre em páginas, materiais e posts. Enquadramentos em meio-corpo e corpo inteiro, variando traje, postura e expressão.",
    gallery: [
      { file: "bruno_meio-corpo_camiseta-preta_neutro.png", label: "Camiseta preta, calça bege, postura neutra" },
      { file: "bruno_meio-corpo_camiseta-preta_indicador-cima.png", label: "Dedo indicador apontando para cima" },
      { file: "bruno_meio-corpo_camiseta-preta_gesto-duas-maos.png", label: "Gesticulando com as duas mãos" },
      { file: "bruno_meio-corpo_camiseta-preta_apresentando-perfil.png", label: "De perfil, mão apresentando algo ao lado" },
      { file: "bruno_meio-corpo_camiseta-preta_apontando-camera.png", label: "Apontando o dedo para a câmera" },
      { file: "bruno_meio-corpo_camiseta-preta_bracos-cruzados-3.png", label: "Braços cruzados, calça bege" },
      { file: "bruno_meio-corpo_camiseta-preta_convidando.png", label: "Mão estendida, gesto de convite" },
      { file: "bruno_meio-corpo_camiseta-preta_pensativo.png", label: "Mão no queixo, pensativo, olhando de lado" },
      { file: "bruno_corpo-inteiro_camiseta-preta_sentado-notebook.png", label: "Sentado, notebook no colo, sério" },
      { file: "bruno_corpo-inteiro_camiseta-preta_serio-curvado.png", label: "Em pé curvado, olhar sério/bravo" },
      { file: "bruno_corpo-inteiro_camiseta-preta_confuso.png", label: "Mãos abertas, expressão de dúvida" },
      { file: "bruno_corpo-inteiro_camiseta-preta_surpreso-apontando.png", label: "Surpreso, apontando para o lado" },
      { file: "bruno_corpo-inteiro_camiseta-preta_frustrado.png", label: "Mão na testa, frustrado" },
      { file: "bruno_corpo-inteiro_camiseta-preta_decepcionado.png", label: "Olhando para baixo, expressão de desapontamento" },
      { file: "bruno_corpo-inteiro_camiseta-preta_serio-frente.png", label: "De frente, expressão séria neutra" },
      { file: "bruno_corpo-inteiro_camiseta-preta_comemorando-leve.png", label: "Punho fechado, sorrindo, comemorando" },
      { file: "bruno_corpo-inteiro_camiseta-preta_sorrindo-lado.png", label: "Sorrindo, olhando para o lado" },
      { file: "bruno_corpo-inteiro_camiseta-preta_comemorando-forte.png", label: "Dois braços erguidos, comemorando" },
      { file: "bruno_corpo-inteiro_camiseta-preta_sorriso-discreto.png", label: "Sorriso discreto, postura relaxada" },
      { file: "bruno_corpo-inteiro_camiseta-preta_cafe-celular-1.png", label: "Segurando xícara e celular" },
      { file: "bruno_corpo-inteiro_camiseta-preta_cafe-caminhando.png", label: "Xícara na mão, caminhando" },
      { file: "bruno_corpo-inteiro_camiseta-preta_celular-sorrindo.png", label: "Olhando e sorrindo para o celular" },
      { file: "bruno_corpo-inteiro_camiseta-preta_celular-lado.png", label: "Celular na mão, olhando para o lado" },
      { file: "bruno_corpo-inteiro_camiseta-preta_explicando-gesto.png", label: "Gesticulando com as duas mãos, explicando" },
      { file: "bruno_corpo-inteiro_camiseta-preta_apontando-lado.png", label: "Apontando para o lado, sorrindo" },
      { file: "bruno_meio-corpo_camiseta-preta_bracos-cruzados-1.png", label: "Camiseta preta, braços cruzados, jeans" },
      { file: "bruno_meio-corpo_camiseta-preta_bracos-cruzados-2.png", label: "Camiseta preta, braços cruzados (variação)" },
      { file: "bruno_meio-corpo_terno-azul_sorrindo-perfil.png", label: "Terno azul-marinho, perfil, sorrindo" },
      { file: "bruno_meio-corpo_terno-cinza_sorrindo.png", label: "Terno cinza, camisa branca, sorrindo" },
      { file: "bruno_meio-corpo_terno-preto_bracos-cruzados.png", label: "Terno + camiseta preta por baixo, braços cruzados" },
      { file: "bruno_meio-corpo_camisa-preta_gesto-mao.png", label: "Camisa social preta, mão gesticulando" },
      { file: "bruno_corpo-inteiro_blazer-azul_sorrindo.png", label: "Blazer azul + camiseta preta, mãos no bolso, corpo inteiro" },
      { file: "bruno_transparent.png", label: "Blazer azul-marinho, braços cruzados, sorrindo" },
      { file: "img_bruno-corpo_transparente-tratada.png", label: "Terno azul, mãos no bolso, sorrindo, corpo inteiro" },
    ],
  },
} as const;

export type BrandManifest = typeof brandManifest;
