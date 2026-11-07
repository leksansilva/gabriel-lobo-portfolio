# Module Structure

## Layout

```
src/
├── app/
│   ├── layout.tsx                 # root layout: fonts, metadata, <Providers>
│   ├── globals.css                # Tailwind v4 @theme + shadcn tokens
│   ├── not-found.tsx
│   ├── (common)/                  # shared, non-routable (route group without page.tsx)
│   │   ├── components/<name>/index.tsx   + index.ts barrel
│   │   ├── hooks/use-<name>.ts           + index.ts
│   │   ├── libs/<name>.ts                + index.ts   (react-query client, third-party setup)
│   │   ├── services/<name>.service.ts    + index.ts   (api instance, BaseApiService)
│   │   ├── stores/<name>.store.ts        + index.ts
│   │   ├── types/<name>.ts               + index.ts
│   │   ├── enums/<name>.ts               + index.ts
│   │   ├── constants/<name>.constant.ts  + index.ts
│   │   ├── utils/<name>.ts               + index.ts
│   │   ├── forms/<form-name>/{schema.ts,form.ts,index.ts}
│   │   └── index.ts               # root barrel (hooks, stores, constants, utils, libs, types)
│   └── (public)/                  # public routes
│       ├── layout.tsx             # Header + <main> + Footer
│       └── (home)/                # the "/" route
│           ├── page.tsx           # server container → renders HomePage
│           ├── home-page.tsx      # the screen component
│           ├── components/<name>/index.tsx + index.ts
│           └── constants/*.constant.ts + index.ts
├── components/ui/                 # shadcn primitives (lowercase flat files, as generated)
├── lib/utils.ts                   # cn()
└── tests/                         # shared test helpers/factories only; specs are colocated
```

## Naming layers

1. **Route group / access folder** — `(common)`, `(public)`; add `(private)`/`(auth)` only when the app grows that way.
2. **Route / feature folder** — kebab-case, matching the URL segment (`projetos`, `projetos/[slug]`). The `/` route lives in `(home)`.
3. **Internal layer folders** — plural, single-word (`components`, `hooks`, `services` → `apis`/`queries`, `stores`, `types`, `enums`, `constants`, `utils`, `forms`). File suffix singular (`.service.ts`, `.api.ts`, `.query.ts`, `.store.ts`, `.constant.ts`, `.schema.ts`). Only `pages`/`components` carry no suffix.

## Files and identifiers

- Every file and folder name is **kebab-case** (`hero-section/index.tsx`, `use-window-size.ts`, `common-links.constant.ts`).
- Identifiers keep their casing: components `HeroSection`, hooks `useWindowSize`, stores `useLayoutStore`, singletons `projectsApi`, schemas `contactSchema`, inferred form types `contactFormData`.
- A component is a **folder with `index.tsx`** (`components/hero-section/index.tsx`). When it grows its own hook/utils/sub-components, move them to the feature's `hooks/`/`utils/`/`components/` — don't leave `use-*.ts` loose beside `index.tsx`.

## Barrels

Every layer folder has an `index.ts` re-exporting its files; imports go through the barrel (`from '../../constants'`, not `.../constants/site.constant`). Default-exported components are re-exported as `export { default as Header } from './header'`. Update the barrel whenever you add or remove a file.

## Where things go

- Shared across routes → `(common)/<layer>/`.
- Used by one route only → colocated inside that route folder (`(home)/components`, `(home)/constants`).
- shadcn primitives → `src/components/ui/` via `npm run ui:add <name>`.
- Static assets → `public/images`, `public/fonts`.
