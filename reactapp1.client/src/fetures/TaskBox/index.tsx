import { FC, useEffect, useCallback, useState } from 'react';
import { getTasks } from './api/getTasks';
import { TaskList } from './components/TaskList';
import { Loading } from './components/TaskList/Loading';
import { Task, Tasks } from './types/Task';

export const TaskBox: FC = () => {
  const [fetchedTask, setFechedTask] = useState<Tasks>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTask = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getTasks();
      setFechedTask(data);
    } finally {
      setIsLoading(false);
    }
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
    <>
      {isLoading === true ? (
        <Loading />
      ) : (
        <TaskList
          tasks={fetchedTask}
          handleArchived={handleArchived}
          handlePinned={handlePinned}
        ></TaskList>
      )}
    </>
  );
};
