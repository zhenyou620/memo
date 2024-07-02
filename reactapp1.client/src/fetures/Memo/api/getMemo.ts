import { Memos } from '../types/memo';
import { httpError } from '../utils/error';

const isMemos = (data: unknown): data is Memos => {
  const memos = data as Memos;

  return memos.every((memos) => {
    return (
      typeof memos?.id === 'number' && typeof memos?.description === 'string'
    );
  });
};

export const getMemo = async (): Promise<Memos> => {
  const response = await fetch('api/Memos', {
    method: 'GET',
  });

  if (!response.ok) {
    throw httpError;
  }

  const data: unknown = await response.json();

  if (isMemos(data)) {
    return data;
  } else {
    throw new Error('Response data does not match the Memos type');
  }
};
