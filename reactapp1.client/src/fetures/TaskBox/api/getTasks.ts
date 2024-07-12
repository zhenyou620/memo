import { Tasks } from '../types/Task';
import { httpError } from '@/utils/error';

const isTasks = (data: unknown): data is Tasks => {
  const tasks = data as Tasks;

  return tasks.every((task) => {
    return (
      typeof task?.id === 'number' &&
      typeof task?.text === 'string' &&
      (typeof task?.isArchived === 'boolean' ||
        task?.isArchived === undefined) &&
      (typeof task?.isPinned === 'boolean' || task?.isPinned === undefined)
    );
  });
};

export const getTasks = async (): Promise<Tasks> => {
  const response = await fetch('api/GetTask', {
    method: 'GET',
  });

  if (!response.ok) {
    throw httpError;
  }

  const data: unknown = await response.json();

  if (isTasks(data)) {
    return data;
  } else {
    throw new Error();
  }
};
