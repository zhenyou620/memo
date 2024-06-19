import { FC } from 'react';
import MemoDataType from '../../types/MemoDataType';
import { Card, CardContent } from '@/components/ui/card';

type Props = {
  memo: MemoDataType;
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
