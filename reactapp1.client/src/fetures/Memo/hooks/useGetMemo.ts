import { useState, useEffect } from 'react';
import { getMemo } from '../api/getMemo';
import { Memos } from '../types/memo';

const useGetMemo = (memo: Memos): Memos => {
  const [data, setData] = useState<Memos>([]);

  useEffect(() => {
    const fetchMemos = async () => {
      const fetchedMemos = await getMemo();
      setData(fetchedMemos);
    };

    void fetchMemos();
  }, [memo]);

  return data;
};

export default useGetMemo;
