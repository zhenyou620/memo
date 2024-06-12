import { FC, useEffect, useState } from 'react';
import MemoInput from './components/ui/MemoInput';
import MemoCard from './components/MemoCard';
import getMemo from './utils/getMemo';
import MemoDataType from './types/MemoDataType';

const App: FC = () => {
  const [memos, setMemos] = useState<MemoDataType[]>([]);
  useEffect(() => {
    const fetchMemos = async () => {
      const fetchedMemos = await getMemo();
      setMemos(fetchedMemos);
    };

    fetchMemos();
  }, []);

  return (
    <>
      <MemoInput></MemoInput>
      <MemoCard memos={memos}></MemoCard>
    </>
  );
};

export default App;
