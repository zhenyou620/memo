import { FC } from 'react';
import { Bulb } from '@/components/Bulb';

export const Message: FC = () => {
  return (
    <div className="flex flex-col gap-5 mt-40 items-center">
      <Bulb className="stroke-slate-300 w-40"></Bulb>
      <p className="text-2xl">追加したメモはここに表示されます。</p>
    </div>
  );
};
