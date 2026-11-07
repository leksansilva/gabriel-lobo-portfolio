export const siteConfig = {
  name: 'Gabriel Lôbo',
  profession: 'Nutricionista',
  title: 'Gabriel Lôbo | Nutricionista',
  description:
    'Acompanhamento nutricional individualizado, presencial e online, com plano alimentar feito para a sua rotina e suporte de perto para mudar hábitos de verdade.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  locale: 'pt-BR',
  registrationNumber: 'CRN [número do registro]',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5500000000000',
  instagramHandle: '@gabriellobo.nutri',
} as const;
