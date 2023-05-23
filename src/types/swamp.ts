export interface Frog {
  level: number;
  price: number;
  src: string | null;
}

export interface AuthStore {
  frogs: Frog[];
}

export const initialState: AuthStore = {
  frogs: [],
};

export type UpgradeFromAction = Frog;
