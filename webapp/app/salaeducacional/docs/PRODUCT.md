# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Existente: Next.js 16 (App Router, React 19, Tailwind 4 disponível), app em `webapp/`. Páginas de venda próprias (ex.: `/scalp40p`) usam `layout.tsx` com fontes via `next/font`, CSS escopado por página, `config.ts` para preço/links e `page.tsx` com marcação direta, sem componentes de seção.

## Users

Alunos atuais e ex-alunos da Mentoria Trader de Sucesso (TDS), traders brasileiros de day trade (mini índice/dólar) que já conhecem o Método TDS. Situação: sabem o operacional, mas travam, hesitam ou saem do plano quando operam ao vivo. Trabalho a fazer: ganhar prática de leitura e execução em tempo real ao lado de um trader profissional. A página é divulgada apenas a esse público; não há fluxo para quem não é aluno.

## Product Purpose

Sala Educacional: sala ao vivo em dias úteis, 8h45 às 10h15, em que Bruno Borges analisa o mercado (pré-abertura e pregão) aplicando o Método TDS e explicando o raciocínio. Sem compartilhamento de ordens ou calls; alunos ficam mutados e Bruno responde dúvidas em tempo real. Produto contínuo, sem datas de início: quem assina entra imediatamente. Sucesso = aluno assina, entra na sala e permanece pela rotina diária.

## Positioning

"Estágio supervisionado" do Método TDS: o curso foi a formação, a sala é a aplicação ao vivo, todos os dias, com o mercado aberto. Mostra o raciocínio, não a entrada. Nenhuma sala de calls/sinais pode afirmar o mesmo.

## Operating Context

- Acesso: após a compra, na área de membros (alunos.traderbrunoborges.com.br), a aula "Encontro Ao Vivo" traz o link que redireciona para o Zoom.
- Checkout Hotmart, produto "Sala Educacional" (Bruno Borges). Meios: cartão, Apple Pay, Pix Automático, PayPal.
- Assinatura recorrente, renova sozinha; cancela quando quiser. Garantia de 7 dias nos dois planos.

## Capabilities and Constraints

- Planos: Mensal R$ 229,90/mês (sem parcelamento) — link `https://pay.hotmart.com/S106637152G?off=9jmaqkw3`. Trimestral R$ 497,00/trimestre (equivale a R$ 165,67/mês; economia de R$ 192,70 frente a 3 meses do mensal; no cartão 2x R$ 261,58 ou 3x R$ 177,36, com acréscimo) — link `https://pay.hotmart.com/S106637152G?off=219yb2z6`.
- O preço antigo (R$ 499,90) e o cupom EUSOUTDS50 não existem mais; não reaparecem.
- Acesso exclusivo a alunos da Mentoria TDS (regra de comunicação; o checkout é público).
- Não mencionar "projeto piloto" na página; os números, dores e benefícios são apresentados como do público da sala.
- Não existe página de obrigado para a Sala até esta entrega; o redirecionamento pós-compra na Hotmart será configurado pelo usuário depois.
- Conteúdo educacional: resultados financeiros exigem aviso de que não garantem resultados futuros.

## Brand Commitments

Marca Trader Bruno Borges / Método TDS. Verde-lima `#A2CB10`, tinta `#0C0D0E`. Base visual indicada pelo usuário: DESIGN.md do TraderLab Aprendizagem (marfim, Roboto Serif em títulos, Roboto em texto) como ponto de partida e direção, trazendo cor, vibração e energia. Voz: direta, honesta ("a sala não é para todo mundo"), sem promessa de resultado.

## Evidence on Hand

- Satisfação 9,79; recomendaria 9,90; explicações 9,78; análises ao vivo 9,78. 96,6% querem assinar mensalmente. 99,4% melhoraram a leitura de mercado (91,4% "melhorou muito"). 96,6% aplicaram o método ao vivo (78,7% com tranquilidade; 17,8% com dificuldade, mas aplicando). 87,2% com resultado positivo no período; 26,4% acima de R$ 500; faixas: até R$ 500 60,8%, R$ 500–1.000 16%, R$ 1.000–2.500 6,4%, acima de R$ 2.500 4%, negativo 12,8% (relatam ansiedade e entradas fora do setup).
- Cerca de 20 depoimentos nominais em texto (sem fotos). Sem prints de tela.
- Bruno Borges: 7+ anos de mercado, 10+ setups, 1,4 mil+ alunos formados.
- Fotos tratadas do Bruno com fundo transparente em `webapp/public/images/bruno/`. Logos em `webapp/public/images/logo/`.
- Não há capturas reais da sala nem vídeo de demonstração; não fabricar.

## Product Principles

1. Mostrar o raciocínio, nunca a entrada: a sala é prática supervisionada, não sinal.
2. Honestidade acima de promessa: declarar quem não deve entrar e o que os números não garantem.
3. Entrada imediata: sem data, sem fila; assinou, entra.
4. Preço claro, uma decisão simples entre dois planos.

## Accessibility & Inclusion

Público brasileiro, PT-BR, majoritariamente mobile e desktop. Contraste mínimo WCAG AA, foco de teclado visível, respeito a `prefers-reduced-motion`.
