import { createSlice } from '@reduxjs/toolkit';

export interface MemoState {
  count: number;
}

const initialState: MemoState = { count: 0 };
export const memoSlice = createSlice({
  name: 'memo',
  initialState,
  reducers: {
    added: (state) => {
      state.count++;
    },
    deleted: (state) => {
      state.count--;
    },
  },
});
