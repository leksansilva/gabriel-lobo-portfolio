export const plansContent = {
  eyebrow: 'Planos',
  title: 'Escolha o ritmo do seu acompanhamento',
  description:
    'Todos os planos incluem avaliação, plano alimentar com receitas, orientação de suplementação e suporte pelo WhatsApp.',
  disclaimer:
    'Os valores são informados pelo WhatsApp, conforme orientação do Código de Ética do Conselho Federal de Nutricionistas.',
  action: { label: 'Consultar valores' },
  items: [
    {
      name: 'Mensal',
      duration: '30 dias',
      consultations: '1 consulta',
      description:
        'Para quem quer começar e sentir a diferença no primeiro mês.',
      isHighlighted: false,
      features: [
        'Avaliação completa',
        'Plano alimentar individualizado',
        'Orientação de suplementação',
        'Suporte pelo WhatsApp',
      ],
    },
    {
      name: 'Trimestral',
      duration: '90 dias',
      consultations: '3 consultas',
      description:
        'O mais escolhido: tempo suficiente para consolidar hábitos.',
      isHighlighted: true,
      features: [
        'Tudo do plano mensal',
        'Ajustes semanais pelo WhatsApp',
        'Guia de organização da rotina',
        'Reavaliação a cada retorno',
      ],
    },
    {
      name: 'Semestral',
      duration: '180 dias',
      consultations: '6 consultas',
      description:
        'Para objetivos maiores e mudança de hábitos de longo prazo.',
      isHighlighted: false,
      features: [
        'Tudo do plano trimestral',
        'Lista de compras e receitas',
        'Acompanhamento comportamental',
        'Fase final focada em autonomia',
      ],
    },
  ],
} as const;
