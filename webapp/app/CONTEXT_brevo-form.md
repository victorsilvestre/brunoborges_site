# CONTEXT.md — Captura de Leads na Maratona TDS

## Visão Geral da Mudança

Estamos adicionando captura de leads (nome, e-mail, WhatsApp) na página `/maratona` antes de redirecionar o usuário para o grupo do Telegram. Os dados capturados serão enviados para o **Brevo** (ferramenta de CRM/e-mail marketing) via API.

### Fluxo Atual
```
/maratona → botão CTA → link direto t.me/+eyQwbBFDUXBkMGIx (Telegram)
```

### Fluxo Novo
```
/maratona → formulário (nome + e-mail + WhatsApp) → API Route Next.js → Brevo API → redirect para /maratona-grupo
```

A página `/maratona-grupo` já existe no projeto — é a página de transição com a foto do Bruno, copy humanizado e o link inteligente para o Telegram (com detecção de dispositivo).

---

## Stack do Projeto

- **Next.js App Router** (não usar Pages Router)
- **TypeScript**
- Deploy provavelmente via Vercel
- Estilo: Tailwind CSS (conferir o padrão visual existente no projeto)

---

## O Que Precisa Ser Feito

### 1. Variável de Ambiente
Adicionar no `.env.local`:
```
BREVO_API_KEY=sua_chave_aqui
BREVO_LIST_ID=id_da_lista_aqui  # ID da lista "Maratona TDS" criada no Brevo
```

> ⚠️ Nunca expor a `BREVO_API_KEY` no frontend. Ela só pode ser usada em Server-Side (API Route).

---

### 2. API Route — `app/api/lead/route.ts`

Criar uma API Route no Next.js App Router que:
1. Recebe `POST` com body `{ nome, email, whatsapp }`
2. Valida os campos (todos obrigatórios; e-mail com formato válido; WhatsApp só números, mín. 10 dígitos)
3. Faz `POST` para `https://api.brevo.com/v3/contacts` com:
   - `email` como identificador principal
   - `attributes.FIRSTNAME` = nome
   - `attributes.WHATSAPP` = whatsapp (só dígitos, sem formatação)
   - `attributes.SMS` = whatsapp com DDI brasileiro: `+55` + número
   - `listIds` = `[BREVO_LIST_ID]`
   - `updateEnabled: true` (para não criar duplicatas se o mesmo e-mail se inscrever de novo)
4. Retorna `200` em sucesso ou mensagem de erro adequada

Referência da API do Brevo:
```
POST https://api.brevo.com/v3/contacts
Headers:
  api-key: BREVO_API_KEY
  Content-Type: application/json

Body:
{
  "email": "joao@email.com",
  "attributes": {
    "FIRSTNAME": "João",
    "WHATSAPP": "61999999999",
    "SMS": "+5561999999999"
  },
  "listIds": [42],
  "updateEnabled": true
}
```

---

### 3. Formulário na Página `/maratona`

Localizar na página `app/maratona/page.tsx` (ou equivalente) **todos os CTAs que hoje apontam para o link do Telegram** e substituir por um formulário inline.

Os CTAs atuais no HTML são:
- `"Entrar no Grupo Exclusivo da Maratona"` → `https://t.me/+eyQwbBFDUXBkMGIx`
- `"Quero Participar e receber os bônus!"` → `https://t.me/+eyQwbBFDUXBkMGIx`
- `"Entrar no Grupo Exclusivo"` → `https://t.me/+eyQwbBFDUXBkMGIx`

**Comportamento do formulário:**
- Campos: Nome completo, E-mail, WhatsApp (com máscara `(99) 99999-9999`)
- Botão de submit: `"Quero Participar da Maratona"` (ou variação aprovada)
- Ao submeter:
  1. Mostrar estado de loading no botão
  2. Fazer `fetch` para `/api/lead` com os dados
  3. Em sucesso → `router.push('/maratona-grupo')`
  4. Em erro → mostrar mensagem inline (ex: "Algo deu errado. Tente novamente.")
- Não usar `<form>` com action HTML tradicional — usar `onSubmit` com `preventDefault` e fetch client-side

**UX importante:**
- Se houver múltiplos CTAs na página, todos devem abrir/scrollar para o mesmo formulário (âncora `#inscricao`) — não duplicar o formulário
- O formulário deve ser o elemento principal de conversão, visualmente destacado

---

### 4. Verificar a Página `/maratona-grupo`

Confirmar que a página `/maratona-grupo` já está funcional com:
- Foto do Bruno
- Copy humanizado de boas-vindas
- Link inteligente para o Telegram com detecção de dispositivo (iOS → App Store, Android → Google Play, desktop → web.telegram.org)
- Spinner/loading enquanto redireciona

Se estiver desatualizada ou faltando algo, ajustar nessa etapa.

---

## Estrutura de Arquivos Esperada Após a Mudança

```
app/
  api/
    lead/
      route.ts          ← NOVO: recebe o form e chama o Brevo
  maratona/
    page.tsx            ← MODIFICADO: CTAs viram formulário
  maratona-grupo/
    page.tsx            ← JÁ EXISTE: verificar se está ok
.env.local              ← MODIFICADO: adicionar BREVO_API_KEY e BREVO_LIST_ID
```

---

## Configuração no Brevo (feita fora do código)

Antes de implementar, garantir que no painel do Brevo:

1. **Criar lista** chamada "Maratona TDS" (ou por edição, ex: "Maratona TDS - Jun 2026")
2. **Anotar o ID numérico da lista** — aparece na URL quando você abre a lista no painel
3. **Criar atributos customizados** em Contacts > Settings > Contact Attributes:
   - `FIRSTNAME` (tipo: Texto) — provavelmente já existe por padrão
   - `WHATSAPP` (tipo: Texto)
4. **Gerar API Key** em My Account > SMTP & API > API Keys → copiar para o `.env.local`

---

## Decisões Já Tomadas

- ✅ Usar Brevo como destino dos leads (plano gratuito, contatos ilimitados)
- ✅ Não criar banco de dados próprio — o Brevo é o banco
- ✅ Dados exportáveis como CSV a qualquer momento pelo painel do Brevo
- ✅ Após o formulário, o usuário vai para `/maratona-grupo` (não direto para o Telegram)
- ✅ WhatsApp salvo também no campo `SMS` com `+55` para futura integração com campanhas de WhatsApp no Brevo
- ❌ QR Code descartado — desnecessário

---

## Observações Finais

- Manter o link direto do Telegram como **fallback** no footer da página ou no próprio `/maratona-grupo`, caso o usuário queira entrar sem preencher (decisão de negócio — discutir com Victor/Bruno)
- O campo WhatsApp deve aceitar entrada com ou sem formatação e normalizar antes de salvar (ex: `(61) 99999-9999` → `61999999999`)
- `updateEnabled: true` na API do Brevo evita erro se o mesmo e-mail se inscrever em duas edições — o contato é atualizado, não duplicado
