import { CalendarCheck, MessageCircle, Video } from 'lucide-react';

export const heroContent = {
  eyebrow: 'Nutricionista · Atendimento presencial e online',
  title: 'Nutrição com estratégia, sem achismo.',
  description:
    'Plano alimentar feito para a sua rotina e acompanhamento de perto para você mudar hábitos de verdade. Sem dietas prontas, sem terrorismo nutricional.',
  primaryAction: { label: 'Agendar consulta' },
  secondaryAction: { label: 'Como funciona', href: '/#como-funciona' },
  highlights: [
    { icon: CalendarCheck, label: 'Plano entregue na primeira consulta' },
    { icon: MessageCircle, label: 'Suporte pelo WhatsApp entre consultas' },
    { icon: Video, label: 'Presencial ou online, você escolhe' },
  ],
  image: {
    src: '/images/jaleco.jpg',
    alt: 'Gabriel Lôbo, nutricionista, de jaleco e braços cruzados, sorrindo no consultório',
    width: 1200,
    height: 1600,
  },
} as const;
