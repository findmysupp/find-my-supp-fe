import { create } from 'zustand';

const useStore = create((set) => ({
  // API host address
  apiHost: 'http://localhost:3000', // Default to local
  setApiHost: (host) => set({ apiHost: host }),

  // JWT token
  jwtToken: null,
  setJwtToken: (token) => set({ jwtToken: token }),

  // User state
  user: null,
  setUser: (user) => set({ user }),
  updateUserField: (field, value) => set((state) => ({
    user: { ...state.user, [field]: value },
  })),
}));

export default useStore;