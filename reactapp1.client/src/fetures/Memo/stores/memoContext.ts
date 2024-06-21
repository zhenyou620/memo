import { createContext } from 'react';
import { Memos } from '../types/memo';

export interface MemoContext {
  memo: Memos;
  updateMemo: (memos: Memos) => void;
}

export const MemoContext = createContext<MemoContext>({} as never);
