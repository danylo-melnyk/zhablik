import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState, LoginAction, RegisterAction } from '@/types/auth';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<LoginAction>) => {
      state.currentUser = state.users.find(
        user =>
          user.username === payload.username &&
          user.password === payload.password,
      );
    },
    register: (state, { payload }: PayloadAction<RegisterAction>) => {
      state.users.push(payload);
    },
    logout: state => {
      state.currentUser = undefined;
    },
  },
});

export const { login, register, logout } = authSlice.actions;
export default authSlice.reducer;
