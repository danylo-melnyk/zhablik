export interface User {
  email: string;
  username: string;
  password: string;
}

export interface AuthStore {
  users: User[];
  currentUser: User | undefined;
}

export const initialState: AuthStore = {
  users: [],
  currentUser: undefined,
};

export interface LoginAction {
  username: string;
  password: string;
}

export type RegisterAction = User;
