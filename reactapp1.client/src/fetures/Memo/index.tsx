import { FC, useState, ChangeEvent, useEffect , useContext } from 'react';
import { getMemo } from './api/getMemo';
import { postMemo } from './api/postMemo';
import { MemoCard } from './components/Card/MemoCard';

import { MemoInput } from './components/Input/MemoInput';
import { Message } from './components/Message/Message';
import { MemoContext } from '@/fetures/Memo/stores/memoContext';

export const Memo: FC = () => {
  const { memo, updateMemo } = useContext(MemoContext);
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    postMemo(description);
    setDescription('');
    const data = await getMemo();
    updateMemo(data);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value);

  useEffect(() => {
    const fetchMemo = async () => {
      const data = await getMemo();
      updateMemo(data);
    };

    fetchMemo();
  }, [updateMemo]);

  return (
    <>
      <MemoInput {...{ description, handleChange, handleSubmit }} />
      {memo.length > 0 ? <MemoCard memos={memo}></MemoCard> : <Message />}
    </>
  );
};
