import { FC, useState, PropsWithChildren } from 'react';
import { memoContext } from '../features/Memo/stores/memoContext';
import { MemosType } from '../features/Memo/types/memoType';

export const MemoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [memo, setMemo] = useState<MemosType>([]);

  const updateMemo = (memo: MemosType) => {
    if (memo) {
      setMemo(memo);
    }
  };

  return (
    <memoContext.Provider value={{ memo, updateMemo }}>
      {children}
    </memoContext.Provider>
  );
};
