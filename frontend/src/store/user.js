import { create } from 'zustand'

export const useUserStore = create((set) => ({
  user: null, // initially null
  setUser: (userData) => set({ user: userData }),
  updateUserField: (key, value) =>
    set((state) => ({
      user: { ...state.user, [key]: value }
    })),
  clearUser: () => set({ user: null }),
}));