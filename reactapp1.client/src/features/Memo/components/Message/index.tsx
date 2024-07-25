import { FC } from 'react';
import { Bulb } from '@/features/Memo/components/Message/Bulb';

export const Message: FC = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <Bulb className="w-40 stroke-slate-300"></Bulb>
      <p className="text-2xl">追加したメモはここに表示されます。</p>
    </div>
  );
};
