# Pages & Components

## Routes (`src/app/(public)/<route>/`)

Each route folder has two files at its root:

- `page.tsx` — the **server container**. Default export named `<Route>Container`. It fetches/caches data and renders the screen. No `'use client'`.
- `<route>-page.tsx` — the **screen** (`HomePage`, `ProjectDetailsPage`). Receives data via props, composes section components. Add `'use client'` only if it needs hooks/state.

```tsx
// (home)/page.tsx
import HomePage from './home-page';

export default function HomeContainer() {
  return <HomePage />;
}
```

Route-specific `components/`, `constants/`, `types/`, `services/` are colocated inside the route folder, each with a barrel. Shared ones go to `(common)/`.

Dynamic routes use the typed props Next generates: `export default async function ProjectContainer({ params }: PageProps<'/projetos/[slug]'>)` and `await params`.

## Next 16 caching (Cache Components is ON)

`cacheComponents: true` + `partialPrefetching: true` are set in `next.config.ts`. Rules of thumb:

- Static content (constants, MDX, local JSON) needs nothing special — it prerenders.
- Data that may change but tolerates staleness → `'use cache'` at the top of the async function/component + `cacheLife('hours' | 'days' | ...)` from `next/cache`.
- Data that must be fresh per request → **no** `'use cache'`; wrap the async component in `<Suspense fallback={...}>` so the shell still prerenders.
- Do NOT reach for `export const dynamic = 'force-dynamic'` — that is the previous model.
- Middleware is `src/proxy.ts` (not `middleware.ts`).
- Check `node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md` when unsure.

## Components

- One folder per component, kebab-case, `index.tsx`, PascalCase component, `export default`. Re-export through the folder's `index.ts` (`export { default as HeroSection } from './hero-section'`).
- Section components of a page (`hero-section`, `projects-section`, `contact-section`) live in the route's `components/`; give each section an `id` used by the navigation anchors (`/#projetos`).
- Prefer shadcn primitives from `@/components/ui` and shared pieces from `(common)/components` over raw native elements. Button links use `<Button asChild><Link …/></Button>`.
- Styling: Tailwind classes + `cn` from `@/lib/utils`; `class-variance-authority` for variants. Icons: `lucide-react`. Animations: `framer-motion` (`motion.*` with `initial/animate/transition`; keep durations ≤ 0.6s).
- Images: `next/image` with explicit `width`/`height` or `fill` + `sizes`; assets in `public/images`.
- Theme: `next-themes` with `attribute="class"`; dark styles via the `dark:` variant; `suppressHydrationWarning` stays on `<html>`.

## Adding a shadcn primitive

`npm run ui:add <component>` → lands in `src/components/ui/<component>.tsx` using `cn` from `@/lib/utils`. Keep the generated file as-is unless a project-wide visual change is needed; brand overrides go through the CSS tokens in `globals.css` (`--primary`, `--radius`, …), not by editing every primitive.
