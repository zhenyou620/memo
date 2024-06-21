import { FC, useState, ChangeEvent } from 'react';
import { MemoProvider } from './providers/MemoProvider';
import { MemoCard } from './components/Card/MemoCard';
import { useContext } from 'react';
import { MemoContext } from '@/fetures/Memo/stores/memoContext';
import MemoInput from './components/Input/MemoInput';
import { postMemo } from './api/postMemo';
import { getMemo } from './api/getMemo';

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

  return (
    <MemoProvider>
      <MemoInput {...{ description, handleChange, handleSubmit }} />;
      <div className="flex gap-4 flex-wrap ">
        {memo.map((element) => {
          return <MemoCard memo={element}></MemoCard>;
        })}
      </div>
    </MemoProvider>
  );
};
