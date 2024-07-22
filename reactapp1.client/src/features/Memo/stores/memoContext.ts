import { createContext } from 'react';
import { MemosType } from '../types/memoType';

export interface MemoContext {
  memo: MemosType;
  updateMemo: (memos: MemosType) => void;
}

export const memoContext = createContext<MemoContext>({} as never);
