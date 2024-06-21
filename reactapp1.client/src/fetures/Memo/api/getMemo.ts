import { Memos } from '../types/memo';

export const getMemo = async (): Promise<Memos> => {
  const response = await fetch('api/Memos', {
    method: 'GET',
  });
  const data = await response.json();
  if (!response.ok) {
    throw data;
  }

  return data;
};
