# Testing (Vitest)

- Runner: Vitest + jsdom + Testing Library (`vitest.config.ts`, setup in `vitest-setup.ts`).
- Specs are **colocated** next to the file they test: `format-date.test.ts`, `hero-section/index.test.tsx`. Shared helpers/factories go in `src/tests/`.
- `npm run test` (single run, CI), `npm run test:watch`, `npm run test:coverage`.

```tsx
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HeroSection from '.';

describe('HeroSection', () => {
  it('renders the primary action', () => {
    render(<HeroSection />);
    expect(
      screen.getByRole('link', { name: 'Ver projetos' })
    ).toBeInTheDocument();
  });
});
```

- Test behavior through roles/labels (`getByRole`, `getByLabelText`), falling back to `data-testid` only when there is no accessible handle.
- Mock `next/navigation`, `next-themes` or axios with `vi.mock` at the top of the spec when the unit depends on them.
- **Zero comments in tests.** Titles and helper names carry the intent.
- Utils and form schemas get unit tests; presentational sections get a render smoke test at most. Don't test shadcn primitives.
