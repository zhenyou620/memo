import { FC, useState, PropsWithChildren, useCallback } from 'react';
import { memoContext } from '../features/Memo/stores/memoContext';
import { Memos } from '../features/Memo/types/memo';

export const MemoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [memo, setMemo] = useState<Memos>([]);

  const updateMemo = useCallback((memo: Memos) => {
    if (memo) {
      setMemo(memo);
    }
  }, []);

  return (
    <memoContext.Provider value={{ memo, updateMemo }}>
      {children}
    </memoContext.Provider>
  );
};
