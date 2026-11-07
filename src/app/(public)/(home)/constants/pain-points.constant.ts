import {
  BatteryLow,
  Brain,
  Clock,
  Repeat,
  Scale,
  Sparkles,
} from 'lucide-react';

export const painPointsContent = {
  eyebrow: 'Você se identifica?',
  title: 'Cansado de tentar se alimentar melhor e não conseguir manter?',
  description:
    'A maioria das pessoas não falha por falta de força de vontade. Falha porque segue um plano que não foi feito para a vida real dela.',
  items: [
    {
      icon: Brain,
      title: 'Fome emocional',
      description: 'Ansiedade ou estresse que terminam em comida.',
    },
    {
      icon: BatteryLow,
      title: 'Cansaço constante',
      description: 'Falta de energia para treinar, trabalhar e viver.',
    },
    {
      icon: Clock,
      title: 'Falta de tempo',
      description: 'Rotina corrida que empurra para o que é mais rápido.',
    },
    {
      icon: Repeat,
      title: 'Efeito sanfona',
      description: 'Perde peso, recupera tudo e começa do zero.',
    },
    {
      icon: Scale,
      title: 'Restrição e culpa',
      description: 'Dietas rígidas que viram compulsão no fim de semana.',
    },
    {
      icon: Sparkles,
      title: 'À espera de milagres',
      description: 'Promessas rápidas que não entregam o que prometem.',
    },
  ],
} as const;
