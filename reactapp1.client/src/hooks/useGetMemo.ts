import getMemo from '@/utils/getMemo';
import MemoDataType from '@/types/MemoDataType';
import { useEffect, useState } from 'react';

const useGetMemo = (count: number): MemoDataType[] => {
  const [memo, setMemo] = useState<MemoDataType[]>([]);

  useEffect(() => {
    const fetchMemos = async () => {
      const fetchedMemos = await getMemo();
      setMemo(fetchedMemos);
    };

    void fetchMemos();
  }, [count]);

  return memo;
};

export default useGetMemo;
