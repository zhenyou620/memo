import { FC, useEffect, useState } from 'react';
import MemoCard from '@/components/MemoCard';
import getMemo from '@/utils/getMemo';
import MemoDataType from '@/types/MemoDataType';

const MemoCards: FC = () => {
  const [memos, setMemos] = useState<MemoDataType[]>([]);
  useEffect(() => {
    const fetchMemos = async () => {
      const fetchedMemos = await getMemo();
      setMemos(fetchedMemos);
      console.log(fetchedMemos);
    };

    fetchMemos();
  }, []);

  return (
    <div className="flex gap-4">
      <MemoCard memos={memos}></MemoCard>
    </div>
  );
};

export default MemoCards;
