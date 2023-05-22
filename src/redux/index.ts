import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from '@/redux/reducers/auth.reducer';
import TaskReducer from '@/redux/reducers/task.reducer';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    task: TaskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
