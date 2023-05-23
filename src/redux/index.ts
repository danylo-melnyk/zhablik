import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from '@/redux/reducers/auth.reducer';
import SwampReducer from '@/redux/reducers/swamp.reducer';
import TaskReducer from '@/redux/reducers/task.reducer';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    task: TaskReducer,
    swamp: SwampReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
