import { useState, useEffect } from 'react';
import { getMemo } from '../api/getMemo';
import { MemosType } from '../types/memoType';

const useGetMemo = (memo: MemosType): MemosType => {
  const [data, setData] = useState<MemosType>([]);

  useEffect(() => {
    const fetchMemos = async () => {
      const fetchedMemos = await getMemo();
      setData(fetchedMemos);
    };

    fetchMemos().catch(console.log);
  }, [memo]);

  return data;
};

export default useGetMemo;
