import { create } from 'zustand';

interface AppState {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
  activeSection: string;
  setActiveSection: (activeSection: string) => void;
  scrollScreen: boolean;
  setScrollScreen: (scrollScreen: boolean) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const useAppStore = create<AppState>((set) => ({
  menuOpen: false,
  setMenuOpen: (menuOpen) => set({ menuOpen }),

  activeSection: 'home',
  setActiveSection: (activeSection) => set({ activeSection }),

  scrollScreen: false,
  setScrollScreen: (scrollScreen) => set({ scrollScreen }),

  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export default useAppStore;