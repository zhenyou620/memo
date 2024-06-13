import { createReducer } from '@reduxjs/toolkit';
import { added, deleted } from './actions';

export interface MemoState {
  count: number;
}

const initialState: MemoState = { count: 0 };

export const memoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(added, (state) => {
      state.count++;
    })
    .addCase(deleted, (state) => {
      state.count--;
    });
});
