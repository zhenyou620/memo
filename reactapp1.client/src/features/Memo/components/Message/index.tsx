import { FC } from 'react';
import { Bulb } from '@/components/Bulb';

export const Message: FC = () => {
  return (
    <div className="mt-40 flex flex-col items-center gap-5">
      <Bulb className="w-40 stroke-slate-300"></Bulb>
      <p className="text-2xl">追加したメモはここに表示されます。</p>
    </div>
  );
};
