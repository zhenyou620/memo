import { FC, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import MemoDataType from '@/types/MemoDataType';

const MemoInput: FC = () => {
  const [description, setDescription] = useState('');

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
    />
  );
};

export default MemoInput;
