import { FC, useEffect, useCallback, useState } from 'react';
import { getTasks } from './api/getTasks';
import { TaskList } from './components/TaskList';
import { TaskType, TasksType } from './types/TaskType';

export const TaskBox: FC = () => {
  const [tasks, setTasks] = useState<TasksType>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTask = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getTasks();
      setTasks(data);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-void
    void fetchTask();
  }, [fetchTask]);

  const handleArchived = useCallback((id: TaskType['id']) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isArchived: !task.isArchived } : task,
      ),
    );
  }, []);

  const handlePinned = useCallback((id: TaskType['id']) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isPinned: !task.isPinned } : task,
      ),
    );
  }, []);

  return (
    <TaskList
      tasks={tasks}
      handleArchived={handleArchived}
      handlePinned={handlePinned}
      loading={isLoading}
    ></TaskList>
  );
};
