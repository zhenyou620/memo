import { FC, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';

interface FormData {
  Id: number;
  Description: string;
}

const MemoInput: FC = () => {
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    const newId = Math.floor(Math.random() * 10000);

    const memo: FormData = {
      Id: newId,
      Description: description,
    };

    const response = await fetch('api/memos', {
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
