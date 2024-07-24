import { FC, useState, ChangeEvent, useEffect, useCallback } from 'react';
import { getMemo } from './api/getMemo';
import { postMemo } from './api/postMemo';
import { MemoCard } from './components/MemoCard';

import { MemoInput } from './components/MemoInput';
import { Message } from './components/Message';
import { MemosType } from './types/memoType';

export const Memo: FC = () => {
  const [memos, setMemos] = useState<MemosType>([]);
  const [description, setDescription] = useState('');

  const fetchMemos = useCallback(async () => {
    const data = await getMemo();
    setMemos(data);
  }, []);

  const handleSubmit = async () => {
    if (!description.trim()) return;

    await postMemo(description);
    setDescription('');
    await fetchMemos();
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    fetchMemos().catch(console.log);
  }, [fetchMemos]);

  return (
    <div className="flex flex-col items-center gap-4">
      <MemoInput {...{ description, handleChange, handleSubmit }} />
      {memos?.length > 0 ? <MemoCard memos={memos}></MemoCard> : <Message />}
    </div>
  );
};
