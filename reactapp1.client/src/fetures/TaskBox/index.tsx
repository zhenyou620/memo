import { FC, useEffect, useCallback, useState } from 'react';
import { getTasks } from './api/getTasks';
import { TaskList } from './components/TaskList';
import { TaskType, TasksType } from './types/TaskType';

export const TaskBox: FC = () => {
  const [fetchedTask, setFechedTask] = useState<TasksType>([]);
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

  const handleArchived = (id: TaskType['id']) => {
    const index = fetchedTask.findIndex((task) => task.id === id);
    if (index >= 0) {
      fetchedTask[index].isArchived = !fetchedTask[index].isArchived;
      // eslint-disable-next-line no-void
      void fetchTask();
    }
  };

  const handlePinned = (id: TaskType['id']) => {
    const index = fetchedTask.findIndex((task) => task.id === id);
    if (index >= 0) {
      fetchedTask[id].isPinned = !fetchedTask[id].isPinned;
      // eslint-disable-next-line no-void
      void fetchTask();
    }
  };

  return (
    <TaskList
      tasks={fetchedTask}
      handleArchived={handleArchived}
      handlePinned={handlePinned}
      loading={isLoading}
    ></TaskList>
  );
};
