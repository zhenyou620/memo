import { FC, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import MemoDataType from '@/fetures/Memo/types/MemoDataType';
import { useDispatch } from 'react-redux';
import { memoSlice } from '@/stores/memo';

const MemoInput: FC = () => {
  const [description, setDescription] = useState('');

  const { added } = memoSlice.actions;
  const addedDispatch = useDispatch();

  const handleSubmit = async () => {
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

  return (
    <Textarea
      placeholder="Type your memo here..."
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      onBlur={() => {
        description !== '' && handleSubmit();
      }}
      className="w-96 my-4 mx-auto"
    />
  );
};

export default MemoInput;
