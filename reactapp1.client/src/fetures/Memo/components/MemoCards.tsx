import { FC } from 'react';
import MemoCard from '@/fetures/Memo/components/MemoCard';
import { useSelector } from 'react-redux';
import useGetMemo from '../hooks/useGetMemo';

import { MemoState } from '../stores/memo';

const MemoCards: FC = () => {
  const count = useSelector<MemoState, number>((state) => state.count);
  const memo = useGetMemo(count);

  return (
    <div className="flex gap-4 flex-wrap ">
      <MemoCard memos={memo}></MemoCard>
    </div>
  );
};

export default MemoCards;
