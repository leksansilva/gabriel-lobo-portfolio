import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HeroSection from '.';

describe('HeroSection', () => {
  it('renders the WhatsApp primary action', () => {
    render(<HeroSection />);
    expect(
      screen.getByRole('link', { name: 'Agendar consulta' })
    ).toHaveAttribute('href', expect.stringContaining('https://wa.me/'));
  });
});
