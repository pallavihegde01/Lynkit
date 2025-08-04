import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("lynkit-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("lynkit-theme", theme);
    set({ theme });
  },
}));