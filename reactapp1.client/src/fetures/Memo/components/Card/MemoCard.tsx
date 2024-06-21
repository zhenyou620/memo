import { FC } from 'react';
import { Memo } from '../../../types/memo';
import { Card, CardContent } from '@/components/ui/card';

type Props = {
  memo: Memo;
};

export const MemoCard: FC<Props> = ({ memo }) => {
  return (
    <Card key={memo.id} className="w-56 pt-6">
      <CardContent>
        <p className="break-all text-ellipsis line-clamp-3">
          {memo.description}
        </p>
      </CardContent>
    </Card>
  );
};
