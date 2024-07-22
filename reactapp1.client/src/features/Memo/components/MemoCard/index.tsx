import { FC } from 'react';
import { MemosType } from '../../types/memoType';

type Props = {
  memos: MemosType;
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
