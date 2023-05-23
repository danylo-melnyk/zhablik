import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  AddTaskAction,
  DeleteTaskAction,
  EditTaskAction,
  initialState,
} from '@/types/task';

const taskReducer = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<AddTaskAction>) => {
      state.tasks.push({ ...payload, id: state.nextId });
      state.nextId++;
    },
    deleteTask: (state, { payload }: PayloadAction<DeleteTaskAction>) => {
      state.tasks = state.tasks.filter(task => task.id !== payload.id);
    },
    editTask: (state, { payload }: PayloadAction<EditTaskAction>) => {
      state.tasks = state.tasks.map(task =>
        task.id === payload.id ? { ...task, ...payload } : task,
      );
    },
  },
});

export const { addTask, deleteTask, editTask } = taskReducer.actions;
export default taskReducer.reducer;
