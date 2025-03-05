import { create } from 'zustand';

interface AppState {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
  activeLink: string;
  setActiveLink: (activeLink: string) => void;
  scrollScreen: boolean;
  setScrollScreen: (scrollScreen: boolean) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const useAppStore = create<AppState>((set) => ({
  menuOpen: false,
  setMenuOpen: (menuOpen) => set({ menuOpen }),

  activeLink: '',
  setActiveLink: (activeLink) => set({ activeLink }),

  scrollScreen: false,
  setScrollScreen: (scrollScreen) => set({ scrollScreen }),

  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export default useAppStore;