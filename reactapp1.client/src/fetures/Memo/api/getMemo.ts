import MemoDataType from '../types/MemoDataType';

export const getMemo = async (): Promise<MemoDataType[]> => {
  const response = await fetch('api/Memos', {
    method: 'GET',
  });
  const data = await response.json();
  if (!response.ok) {
    throw data;
  }

  return data;
};
