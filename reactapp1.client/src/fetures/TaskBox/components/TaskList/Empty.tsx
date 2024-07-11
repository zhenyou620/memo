import { FC } from 'react';

export const Empty: FC = () => {
  return (
    <div className="mt-20 flex w-full flex-col items-center justify-center gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-28 text-slate-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>
      <span className="text-slate-500">タスクはありません。</span>
    </div>
  );
};
