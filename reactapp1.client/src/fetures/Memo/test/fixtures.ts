import { Memos } from '../types/memo';

export type HttpError = {
  err: { message: string };
};

export const httpError: HttpError = {
  err: { message: 'internal server error' },
};

export const getMemoData: Memos = [
  { id: 1, description: 'test1' },
  { id: 2, description: 'test2' },
  { id: 3, description: 'test3' },
];

export const postMemoData: Memos = [
  { id: 1, description: 'test1' },
  { id: 2, description: 'test2' },
  { id: 3, description: 'test3' },
];

export const MemoData: Memos = [
  { id: 1, description: 'test1' },
  { id: 2, description: 'test2' },
  { id: 3, description: 'test3' },
];
