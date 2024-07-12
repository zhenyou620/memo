import { FC, useEffect, useCallback, useState, Suspense } from 'react';
import { getTasks } from './api/getTasks';
import { TaskList } from './components/TaskList';
import { Loading } from './components/TaskList/Loading';
import { Task, Tasks } from './types/Task';

export const sum = (a: number, b: number): number => {
  return a + b;
};

export const TaskBox: FC = () => {
  const [fetchedTask, setFechedTask] = useState<Tasks>([]);

  const fetchTask = useCallback(async () => {
    const data = await getTasks();
    setFechedTask(data);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-void
    void fetchTask();
  }, [fetchTask]);

  const handleArchived = (id: Task['id']) => {
    const index = fetchedTask.findIndex((task) => task.id === id);
    if (index >= 0) {
      fetchedTask[index].isArchived = !fetchedTask[index].isArchived;
      // eslint-disable-next-line no-void
      void fetchTask();
    }
  };

  const handlePinned = (id: Task['id']) => {
    const index = fetchedTask.findIndex((task) => task.id === id);
    if (index >= 0) {
      fetchedTask[id].isPinned = !fetchedTask[id].isPinned;
      // eslint-disable-next-line no-void
      void fetchTask();
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <TaskList
        tasks={fetchedTask}
        handleArchived={handleArchived}
        handlePinned={handlePinned}
      ></TaskList>
    </Suspense>
  );
};
