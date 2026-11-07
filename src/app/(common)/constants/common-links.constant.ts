import type { NavigationLink } from '../types';
import { buildWhatsAppLink } from '../utils';
import { siteConfig } from './site.constant';

export const navigationLinks = [
  { label: 'Como funciona', href: '/#como-funciona' },
  { label: 'Planos', href: '/#planos' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Depoimentos', href: '/#depoimentos' },
  { label: 'Dúvidas', href: '/#duvidas' },
] as const satisfies readonly NavigationLink[];

export const whatsappLink = buildWhatsAppLink(
  siteConfig.whatsappNumber,
  'Olá, Gabriel! Quero agendar uma consulta.'
);

export const socialLinks = {
  whatsapp: { label: 'WhatsApp', href: whatsappLink, target: '_blank' },
  instagram: {
    label: 'Instagram',
    href: `https://www.instagram.com/${siteConfig.instagramHandle.replace('@', '')}`,
    target: '_blank',
  },
} as const satisfies Record<string, NavigationLink>;
