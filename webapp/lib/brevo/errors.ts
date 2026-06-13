export type BrevoErrorType = 'error' | 'duplicate' | 'success';

export interface BrevoFeedback {
  type: BrevoErrorType;
  message: string;
}

// Mapeamento de erros de validação interna da route (antes de chamar a Brevo).
// Para alterar mensagens, edite este arquivo.
export const INTERNAL_ERROR_MAP = {
  missing_fields: {
    type: 'error' as BrevoErrorType,
    message: 'Todos os campos são obrigatórios.',
  },
  invalid_email: {
    type: 'error' as BrevoErrorType,
    message: 'O e-mail informado é inválido. Verifique e tente novamente.',
  },
  invalid_whatsapp: {
    type: 'error' as BrevoErrorType,
    message: 'O número de WhatsApp informado é inválido. Verifique e tente novamente.',
  },
  server_error: {
    type: 'error' as BrevoErrorType,
    message: 'Ocorreu um erro inesperado. Tente novamente em alguns instantes.',
  },
} satisfies Record<string, BrevoFeedback>;

// Mapeamento dos códigos de erro retornados pela API da Brevo (POST /v3/contacts).
// Para adicionar ou alterar mensagens, edite este arquivo.
// Referência de códigos observados: duplicate_parameter, invalid_parameter,
// missing_parameter, unauthorized.
export const BREVO_ERROR_MAP: Record<string, BrevoFeedback> = {
  duplicate_parameter: {
    type: 'duplicate',
    message: 'Seu cadastro já foi realizado. Obrigado!',
  },
  invalid_parameter_email: {
    type: 'error',
    message: 'O e-mail informado é inválido. Verifique e tente novamente.',
  },
  invalid_parameter_phone: {
    type: 'error',
    message: 'O número de WhatsApp informado é inválido. Verifique e tente novamente.',
  },
  missing_parameter: {
    type: 'error',
    message: 'Preencha todos os campos antes de continuar.',
  },
  unauthorized: {
    type: 'error',
    message: 'Ocorreu um erro inesperado. Tente novamente em alguns instantes.',
  },
  unknown: {
    type: 'error',
    message: 'Ocorreu um erro inesperado. Tente novamente em alguns instantes.',
  },
};

export const BREVO_SUCCESS: BrevoFeedback = {
  type: 'success',
  message: 'Cadastro realizado com sucesso! Bem-vindo(a).',
};

export function resolveBrevoError(code: string, message: string): BrevoFeedback {
  if (code === 'invalid_parameter') {
    const lower = message.toLowerCase();
    if (lower.includes('email')) return BREVO_ERROR_MAP.invalid_parameter_email;
    if (lower.includes('phone')) return BREVO_ERROR_MAP.invalid_parameter_phone;
    console.warn(`[Brevo] Código de erro não mapeado: "${code}" — message: "${message}"`);
    return BREVO_ERROR_MAP.unknown;
  }

  if (!BREVO_ERROR_MAP[code]) {
    console.warn(`[Brevo] Código de erro não mapeado: "${code}" — message: "${message}"`);
    return BREVO_ERROR_MAP.unknown;
  }

  return BREVO_ERROR_MAP[code];
}
