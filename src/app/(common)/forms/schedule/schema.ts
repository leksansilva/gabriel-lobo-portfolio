import { z } from 'zod';

export const scheduleSchema = z.object({
  name: z.string().trim().min(2, 'Informe seu nome'),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s()+-]{10,20}$/, 'Informe um WhatsApp válido com DDD'),
  goal: z.string().trim().min(10, 'Conte um pouco sobre o seu objetivo'),
});

export type scheduleFormData = z.infer<typeof scheduleSchema>;
