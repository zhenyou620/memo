import {
  FC,
  useState,
  ChangeEvent,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import { MemoProvider } from '@/providers/MemoProvider';
import { getMemo } from './api/getMemo';
import { postMemo } from './api/postMemo';
import { MemoCard } from './components/MemoCard';

import { MemoInput } from './components/MemoInput';
import { Message } from './components/Message';
import { memoContext } from '@/features/Memo/stores/memoContext';

export const Memo: FC = () => {
  const { memo, updateMemo } = useContext(memoContext);
  const [description, setDescription] = useState('');

  const fetchMemo = useCallback(async () => {
    const data = await getMemo();
    updateMemo(data);
  }, [updateMemo]);

  const handleSubmit = async () => {
    await postMemo(description);
    setDescription('');
    const data = await getMemo();
    updateMemo(data);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value);

  useEffect(() => {
    fetchMemo().catch(console.log);
  }, [fetchMemo]);

  return (
    <MemoProvider>
      <div className="flex flex-col items-center">
        <MemoInput {...{ description, handleChange, handleSubmit }} />
        {memo?.length > 0 ? <MemoCard memos={memo}></MemoCard> : <Message />}
      </div>
    </MemoProvider>
  );
};
