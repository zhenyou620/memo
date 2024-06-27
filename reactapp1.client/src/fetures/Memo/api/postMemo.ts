import { Memo } from '../types/memo';

export const postMemo = async (description: string) => {
  if (description == '') {
    throw new Error('1文字以上入力してください');
  }

  const newId = Math.floor(Math.random() * 10000);

  const memo: Memo = {
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

  const data = await response.json();

  if (!data.ok) {
    throw data;
  }
};
