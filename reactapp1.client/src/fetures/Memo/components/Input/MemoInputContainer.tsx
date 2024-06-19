import { ChangeEvent, FC, useState } from 'react';
import MemoInput from './MemoInput';
import MemoDataType from '@/fetures/Memo/types/MemoDataType';
import { useDispatch } from 'react-redux';
import { memoSlice } from '../../stores/memo';

export const MemoInputContainer: FC = () => {
  const [description, setDescription] = useState('');

  const { added } = memoSlice.actions;
  const addedDispatch = useDispatch();

  const handleSubmit = async () => {
    if (description == '') {
      return;
    }

    const newId = Math.floor(Math.random() * 10000);

    const memo: MemoDataType = {
      id: newId,
      description: description,
    };

    const response = await fetch('api/Memos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(memo),
    });

    addedDispatch(added());

    console.log(response);
    setDescription('');
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value);

  return (
    <>
      <MemoInput {...{ description, handleChange, handleSubmit }} />;
    </>
  );
};
