import { describe, expect, it } from 'vitest';
import { formatDate } from './format-date';

describe('formatDate', () => {
  it('formats an ISO date in pt-BR long style', () => {
    expect(formatDate('2026-11-07T12:00:00Z')).toBe('7 de novembro de 2026');
  });
});
