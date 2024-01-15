import create from 'zustand';

interface User {
  name: string;
  email: string;
  image: string;
  token: string;
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
