import { FC, useState, ChangeEvent, useEffect } from 'react';
import { MemoCard } from './components/Card/MemoCard';
import { useContext } from 'react';
import { MemoContext } from '@/fetures/Memo/stores/memoContext';
import { MemoInput } from './components/Input/MemoInput';
import { postMemo } from './api/postMemo';
import { getMemo } from './api/getMemo';
import { Message } from './components/Message/Message';

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
      {memo.length > 0 ? (
        <div className="flex gap-4 flex-wrap">
          {memo.map((element) => {
            return <MemoCard memo={element}></MemoCard>;
          })}
        </div>
      ) : (
        <Message />
      )}
    </>
  );
};
