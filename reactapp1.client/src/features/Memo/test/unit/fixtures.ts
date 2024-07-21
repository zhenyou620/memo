import { Memos } from '../../types/memo';
import type { Result } from '../../types/result';

export type HttpError = {
  err: { message: string };
};

export const httpError: HttpError = {
  err: { message: 'internal server error' },
};

export const postMemoMock: Result = {
  result: 'ok',
};

export const MemoData: Memos = [
  {
    id: 1,
    description:
      'これは最初のメモです。詳細な説明が必要な場合は、ここに追加情報を記入してください。',
  },
  {
    id: 2,
    description:
      'これは二番目のメモです。さまざまな情報を含めることができます。たとえば、プロジェクトの進行状況や、次に行うべきタスクについての情報などです。',
  },
  {
    id: 3,
    description:
      'これは三番目のメモです。このメモでは、会議の議事録や、重要な日付などを記録することができます。',
  },
  {
    id: 4,
    description:
      'これは四番目のメモです。このメモでは、コードのスニペットや、デバッグに役立つ情報を保存することができます。',
  },
  {
    id: 5,
    description:
      'これは五番目のメモです。このメモでは、アイデアやインスピレーションを記録することができます。',
  },
];
