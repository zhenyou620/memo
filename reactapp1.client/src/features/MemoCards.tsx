import { FC, useEffect, useState } from 'react';
import MemoCard from '@/components/MemoCard';
import getMemo from '@/utils/getMemo';
import MemoDataType from '@/types/MemoDataType';
import { useSelector } from 'react-redux';
import { MemoState } from '@/stores/memo/reducers';

const MemoCards: FC = () => {
  const [memos, setMemos] = useState<MemoDataType[]>([]);

  const count = useSelector<MemoState, number>((state) => state.count);

  useEffect(() => {
    const fetchMemos = async () => {
      const fetchedMemos = await getMemo();
      setMemos(fetchedMemos);
      console.log(fetchedMemos);
    };

    fetchMemos();
  }, [count]);

  return (
    <div className="flex gap-4 flex-wrap ">
      <MemoCard memos={memos}></MemoCard>
    </div>
  );
};

export default MemoCards;
