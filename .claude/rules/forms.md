# Forms

Each form lives in `forms/<form-name>/` with the zod schema and the react-hook-form hook co-located. Shared forms go to `(common)/forms/`; route-specific ones inside the route folder.

```
forms/contact/
├── schema.ts   # contactSchema + contactFormData
├── form.ts     # useContactForm
└── index.ts
```

## schema.ts

```ts
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Informe seu nome'),
  email: z.email('Informe um e-mail válido'),
  message: z.string().min(10, 'A mensagem precisa ter ao menos 10 caracteres'),
});

export type contactFormData = z.infer<typeof contactSchema>;
```

- Zod **v4** API (`z.email()`, `z.url()` top-level; error message as the second arg).
- Inferred type named `<form>FormData` (lowercase first letter).
- Messages in pt-BR. Constrain only what the form actually requires.

## form.ts

```ts
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type contactFormData } from './schema';

export const useContactForm = () =>
  useForm<contactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  });
```

The hook owns the form instance and, when there is one, the submit handler (`onSubmit`) that calls the mutation and toasts. The component only renders fields and calls `form.handleSubmit(onSubmit)`.

Fields render with shadcn `Input`/`Textarea`/`Label` and show `form.formState.errors.<field>?.message` below the control.
