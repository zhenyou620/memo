import { getMemo } from '../api/getMemo';
import { Memos } from '../types/memo';
import { useState, useEffect } from 'react';

// const useGetMemo = (count: number): Memos => {
//   const [memo, setMemo] = useState<Memos>([]);

//   useEffect(() => {
//     const fetchMemos = async () => {
//       const fetchedMemos = await getMemo();
//       setMemo(fetchedMemos);
//     };

//     void fetchMemos();
//   }, [count]);

//   return memo;
// };

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
