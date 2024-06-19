import { FC } from 'react';
import { MemoCard } from './MemoCard';
import { useSelector } from 'react-redux';
import useGetMemo from '../../hooks/useGetMemo';
import { MemoState } from '../../stores/memo';

export const MemoCardContainer: FC = () => {
  const count = useSelector<MemoState, number>((state) => state.count);
  const memos = useGetMemo(count);

  return (
    <div className="flex gap-4 flex-wrap ">
      {memos.map((memo) => {
        return <MemoCard memo={memo}></MemoCard>;
      })}
    </div>
  );
};
