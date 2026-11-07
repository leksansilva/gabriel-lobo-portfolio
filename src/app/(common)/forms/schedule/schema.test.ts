import { describe, expect, it } from 'vitest';
import { scheduleSchema } from './schema';

describe('scheduleSchema', () => {
  it('accepts a complete request', () => {
    const result = scheduleSchema.safeParse({
      name: 'Maria',
      phone: '(11) 99999-9999',
      goal: 'Quero emagrecer com saúde',
    });
    expect(result.success).toBe(true);
  });

  it('rejects an invalid phone', () => {
    const result = scheduleSchema.safeParse({
      name: 'Maria',
      phone: 'abc',
      goal: 'Quero emagrecer com saúde',
    });
    expect(result.success).toBe(false);
  });
});
