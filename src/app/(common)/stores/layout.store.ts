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

const initialLayoutState: LayoutState = {
  isMobileMenuOpen: false,
};

export const useLayoutStore = create<LayoutState & LayoutActions>((set) => ({
  ...initialLayoutState,
  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  reset: () => set(initialLayoutState),
}));
