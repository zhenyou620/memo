import { FC } from 'react';

export const LoadingRow = (
  <div className="flex w-full items-center p-4">
    <div className="peer mr-4 h-4 w-4 shrink-0 animate-pulse rounded-sm bg-gray-200 py-2"></div>
    <div className="mr-3 h-6 w-32 animate-pulse bg-gray-200"></div>
    <div className="mr-3 h-6 w-32 animate-pulse bg-gray-200"></div>
    <div className="h-6 w-32 animate-pulse bg-gray-200"></div>
    <div className=""></div>
  </div>
);

export const Loading: FC = () => {
  return (
    <div role="status" aria-live="polite" aria-busy="true">
      {LoadingRow}
      {LoadingRow}
      {LoadingRow}
    </div>
  );
};
