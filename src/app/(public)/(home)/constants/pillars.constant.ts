import { ClipboardList, MessageCircle, Salad } from 'lucide-react';

export const pillarsContent = {
  eyebrow: 'Acompanhamento',
  title: 'Três pilares para um resultado que se mantém',
  description:
    'Não é uma dieta: é um processo. Cada etapa foi pensada para que o resultado continue depois que o acompanhamento termina.',
  items: [
    {
      icon: ClipboardList,
      title: 'Avaliação completa',
      description:
        'Rotina, histórico de saúde, exames, preferências e sintomas. Nada é definido antes de entender o seu contexto.',
    },
    {
      icon: Salad,
      title: 'Plano alimentar individualizado',
      description:
        'Um plano que cabe no seu dia, com os alimentos que você gosta, receitas e substituições para não travar.',
    },
    {
      icon: MessageCircle,
      title: 'Acompanhamento de perto',
      description:
        'Ajustes a cada retorno e suporte pelo WhatsApp para tirar dúvidas e manter a constância entre as consultas.',
    },
  ],
} as const;
