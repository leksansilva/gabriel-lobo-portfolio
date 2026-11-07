# Stores (Zustand)

UI/client state only (menu open, active section, filters). Server data belongs to TanStack Query or server containers.

```ts
import { create } from 'zustand';

interface LayoutState {
  isMobileMenuOpen: boolean;
}

interface LayoutActions {
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;
  reset: () => void;
}

const initialLayoutState: LayoutState = { isMobileMenuOpen: false };

export const useLayoutStore = create<LayoutState & LayoutActions>((set) => ({
  ...initialLayoutState,
  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  reset: () => set(initialLayoutState),
}));
```

- Split `State` (data) from `Actions`, then `create<State & Actions>`.
- Keep an `initial<Entity>State` so `reset()` can restore it.
- Hook `use<Entity>Store`, file `<entity>.store.ts`, folder `stores/`, re-exported through `stores/index.ts`.
- `set((state) => …)` when the next value depends on the previous one.
- No middleware (`persist`, `devtools`) unless a concrete need exists.
