import { FC } from 'react';
import { Memos } from '../../types/memo';

type Props = {
  memos: Memos;
};

export const MemoCard: FC<Props> = ({ memos }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {memos.map((memo) => (
        <div
          key={memo.id}
          className="w-56 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
        >
          <div className="p-4">
            <p className="line-clamp-3 text-ellipsis break-all">
              {memo.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
