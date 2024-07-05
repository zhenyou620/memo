import { FC } from 'react';
import { Memos } from '../../types/memo';
import { Card, CardContent } from '@/components/ui/card';

type Props = {
  memos: Memos;
};

export const MemoCard: FC<Props> = ({ memos }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {memos.map((memo) => (
        <Card key={memo.id} className="w-56 pt-6">
          <CardContent>
            <p className="line-clamp-3 text-ellipsis break-all">
              {memo.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
