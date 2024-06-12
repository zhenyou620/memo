import { FC } from 'react';
import MemoDataType from '@/types/MemoDataType';
import { Card, CardContent } from '@/components/ui/card';

type Props = {
  memos: MemoDataType[];
};

const MemoCard: FC<Props> = ({ memos }) => {
  return (
    <>
      {memos.map((memo) => (
        <Card key={memo.id}>
          <CardContent>
            <p>{memo.description}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default MemoCard;
