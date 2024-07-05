import { Skeleton } from '@/components/ui/skeleton';

export const LoadingRow = (
  <div className="flex w-full items-center p-4">
    <Skeleton className="peer mr-4 h-4 w-4 shrink-0 rounded-sm py-2"></Skeleton>
    <Skeleton className="mr-3 h-6 w-32"></Skeleton>
    <Skeleton className="mr-3 h-6 w-32"></Skeleton>
    <Skeleton className="h-6 w-32"></Skeleton>
    <div className=""></div>
  </div>
);
