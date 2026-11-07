# Conventions

## Code style

- **Prettier**: single quotes, semicolons, trailing commas `es5`, 2-space indent, `prettier-plugin-tailwindcss` orders classes. `npm run format` fixes everything.
- **ESLint** runs with `--max-warnings 0` (`npm run lint` also runs `tsc --noEmit`). Fix all warnings.
- `@typescript-eslint/no-explicit-any` is off and unused vars prefixed with `_` are ignored — still prefer real types.

## Naming

- Never abbreviate identifiers (`navigationLinks`, not `navLinks`; `isMobileMenuOpen`, not `isMenuOpen` when it is specifically mobile).
- Filenames kebab-case; identifiers keep their casing (see `module-structure.md`).
- Booleans read as predicates: `isOpen`, `hasProjects`, `shouldAnimate`.

## Imports

- Use `@/` for cross-area imports (`@/components/ui/button`, `@/lib/utils`, `@/app/(common)`); short relative paths (`../../constants`) inside the same area are fine. Avoid `../../../../` chains.
- Always import through barrels, never deep into a file another folder owns.
- Order: react/next → third-party → `@/` → relative. No banner comments.

## Comments — write none by default

Convey intent through clear names. The only acceptable comment is a short non-obvious **why**. No JSDoc, no section banners, no narration. Remove debug `console.log` before finishing. **Tests carry zero comments.**

## No premature optimization

Simplest code that works. No `useCallback`/`useMemo`/memo/caching without a demonstrated need.

## Language

User-facing strings (labels, toasts, metadata, alt text) are in **pt-BR**. Code, identifiers and commit descriptions in English.

## Accessibility

Every interactive element has an accessible name (`aria-label` on icon-only buttons), keyboard works, `aria-expanded` on toggles. Add `data-testid` to interactive elements that tests may target.
