import MemoDataType from '../types/MemoDataType';

export type HttpError = {
  err: { message: string };
};

export const httpError: HttpError = {
  err: { message: 'internal server error' },
};

export const getMemoData: MemoDataType[] = [
  { id: 1, description: 'test1' },
  { id: 2, description: 'test2' },
  { id: 3, description: 'test3' },
];
