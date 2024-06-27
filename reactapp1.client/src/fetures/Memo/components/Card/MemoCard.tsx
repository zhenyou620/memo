import { FC } from 'react';
import { Memos } from '../../types/memo';
import { Card, CardContent } from '@/components/ui/card';

type Props = {
  memos: Memos;
};

export const MemoCard: FC<Props> = ({ memos }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {memos.map((memo) => (
        <Card key={memo.id} className="w-56 pt-6">
          <CardContent>
            <p className="break-all text-ellipsis line-clamp-3">
              {memo.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
