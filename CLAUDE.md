# Gabriel Lobo Portfolio

Next.js 16 (App Router, Cache Components) + React 19 + TypeScript + Tailwind v4 + shadcn/ui (Radix). Portfólio público, sem backend próprio por padrão.

## Working Guidelines

**IMPORTANT**

- **No premature optimization** — default to the simplest code that works. Do NOT add `useCallback`/`useMemo`/caching/refs without a clear, demonstrated need.
- **No comments by default** — convey intent through clear variable and function names. The only acceptable comment is a short non-obvious "why". Never leave debug `console.log`s behind.
- **Never abbreviate names** — keep names fully spelled out (`navigationLinks`, not `navLinks`).
- **Filenames are kebab-case**, identifiers keep their casing (components/classes PascalCase, hooks `useXxx`). Layer folders are plural, file suffix singular (`.service.ts`, `.store.ts`, `.constant.ts`); only `pages`/`components` carry no suffix. See `.claude/rules/module-structure.md`.
- **`index.ts` barrel in every layer folder** — imports go through the barrel. Update it whenever adding a file.
- **Prefer the managed base components** (`@/components/ui` + `(common)/components`) over native `<button>`/`<input>`; add `data-testid` to interactive elements.
- **Commit messages** — emoji-prefixed, iuricode convention: `:sparkles: descrição curta`. See `.claude/rules/commits.md`.
- **Next 16 is different from your training data** — read `node_modules/next/dist/docs/` before using a Next API you are unsure about (`cacheComponents`, `use cache`, `proxy.ts` instead of `middleware.ts`, `LayoutProps`/`PageProps` route types).

## Tech Stack

- **Next.js 16 + React 19 + TypeScript**, path alias `@/` → `src/`
- **Tailwind v4** (config in CSS via `@theme` in `src/app/globals.css`; no `tailwind.config`) + **shadcn/ui** (`radix-nova` style, `src/components/ui`)
- **TanStack Query** — server state (only when consuming an API); **Zustand** — UI state (`*.store.ts`)
- **Zod v4 + react-hook-form** — forms (`forms/<form-name>/{schema.ts,form.ts}`)
- **Axios** — HTTP via the shared `api` instance and `BaseApiService` (`(common)/services`)
- **next-themes** — dark mode (`class` strategy); **framer-motion** — animations; **react-toastify** — toasts; **lucide-react** — icons
- **Vitest + Testing Library** — unit tests (`*.test.ts(x)` colocated next to the file)
- **Prettier** (single quotes, semicolons, tailwind plugin) + **ESLint** (`--max-warnings 0`)

## Architecture Summary

- `src/app/(common)/` — shared, non-routable: `components/`, `hooks/`, `libs/`, `services/`, `stores/`, `types/`, `enums/`, `constants/`, `utils/`, `forms/`. Root barrel `(common)/index.ts`.
- `src/app/(public)/` — public routes. Each route folder holds `page.tsx` (server container) + `<route>-page.tsx` (the screen) + colocated `components/`, `constants/`, `types/`, `services/` as needed. `(home)` is the `/` route.
- `src/components/ui/` — shadcn primitives (generated via `npm run ui:add <name>`; adapt only when needed).
- `src/lib/utils.ts` — `cn` (clsx + tailwind-merge).
- Data flow (when an API exists): component → query hook (`services/queries/*.query.ts`) → API class (`services/apis/*.api.ts`, extends `BaseApiService`) → `api` (axios).
- User-facing strings in **pt-BR**.

## Quick Reference

```bash
npm run dev            # next dev
npm run lint           # tsc --noEmit + eslint --max-warnings 0
npm run lint:fix       # eslint --fix
npm run format         # prettier --write
npm run test           # vitest run
npm run test:watch     # vitest
npm run build          # next build
npm run ui:add <name>  # shadcn add <name>
```

## Detailed Documentation

`.claude/rules/` holds the detailed patterns — load a rule file when the task touches that area:

- `module-structure.md` — canonical layout, naming layers, barrels
- `conventions.md` — naming, imports, comments, optimization, language
- `pages-components.md` — routes, page containers, components, Next 16 caching notes
- `services.md` — `BaseApiService` + `*.api.ts` pattern
- `queries.md` — TanStack Query hooks
- `forms.md` — zod schema + `use<Name>Form` co-located in `forms/<form-name>/`
- `stores.md` — zustand store pattern
- `testing.md` — Vitest conventions
- `commits.md` — emoji commit convention
