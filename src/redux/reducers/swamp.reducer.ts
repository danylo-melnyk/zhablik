import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState, UpgradeFromAction } from '@/types/swamp';

const swampSlice = createSlice({
  name: 'swamp',
  initialState,
  reducers: {
    upgradeFrog: (state, { payload }: PayloadAction<UpgradeFromAction>) => {
      state.frogs.push(payload);
    },
  },
});

export const { upgradeFrog } = swampSlice.actions;
export default swampSlice.reducer;
