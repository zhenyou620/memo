import { Memo } from '../types/memo';

export const postMemo = async (description: string): Promise<void> => {
  if (description === '') {
    throw new Error('1文字以上入力してください');
  }

  const newId = Math.floor(Math.random() * 10000);

  const memo: Memo = {
    id: newId,
    description,
  };

  const response = await fetch('api/Memos', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(memo),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }
};
