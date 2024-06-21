import { FC, useState, PropsWithChildren } from 'react';
import { Memos } from '../types/memo';
import { MemoContext } from '../stores/memoContext';

export const MemoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [memo, setMemo] = useState<Memos>([]);

  const updateMemo = (memo: Memos) => {
    if (memo) {
      setMemo(memo);
    }
  };

  return (
    <MemoContext.Provider value={{ memo, updateMemo }}>
      {children}
    </MemoContext.Provider>
  );
};
