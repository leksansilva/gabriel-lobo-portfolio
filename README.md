# Gabriel Lobo — Portfólio

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · shadcn/ui (Radix)

## Rodando

```bash
cp .env.example .env
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                                          | O que faz                                              |
| ----------------------------------------------- | ------------------------------------------------------ |
| `npm run dev`                                   | servidor de desenvolvimento                            |
| `npm run build` / `npm start`                   | build e servidor de produção                           |
| `npm run lint`                                  | `tsc --noEmit` + eslint (`--max-warnings 0`)           |
| `npm run lint:fix`                              | eslint com `--fix`                                     |
| `npm run format`                                | prettier                                               |
| `npm run test` / `test:watch` / `test:coverage` | vitest                                                 |
| `npm run ui:add <nome>`                         | adiciona um primitivo do shadcn em `src/components/ui` |

## Estrutura

```
src/
├── app/
│   ├── (common)/     # compartilhado: components, hooks, libs, services, stores, types, enums, constants, utils, forms
│   ├── (public)/     # rotas públicas — (home) é a "/"
│   ├── layout.tsx    # fontes, metadata, Providers
│   └── globals.css   # tokens Tailwind v4 + shadcn
├── components/ui/    # primitivos shadcn
├── lib/utils.ts      # cn()
└── tests/            # helpers de teste compartilhados
```

Convenções detalhadas em `CLAUDE.md` e `.claude/rules/`.
