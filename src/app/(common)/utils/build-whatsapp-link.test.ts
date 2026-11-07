import { describe, expect, it } from 'vitest';
import { buildWhatsAppLink } from './build-whatsapp-link';

describe('buildWhatsAppLink', () => {
  it('builds a wa.me link with the encoded message', () => {
    expect(buildWhatsAppLink('5511999999999', 'Olá, Gabriel!')).toBe(
      'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Gabriel!'
    );
  });
});
