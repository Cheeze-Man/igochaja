import create from 'zustand';

interface User {
  token: string;
  email: string;
  social: string;
  name: string;
  image: string | undefined | null;
  socialId: string | null;
}

interface State {
  user: User | null;
  setUser: (user: User) => void;
}

const useUserStore = create<State>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useUserStore;
