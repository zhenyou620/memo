import { FC, useEffect, useCallback, useState, ChangeEvent } from 'react';
import { getTasks } from './api/getTasks';
import { TaskFilter } from './components/TaskFilter';
import { TaskList } from './components/TaskList';
import { FilterType } from './types/FilterType';
import { TaskType, TasksType } from './types/TaskType';

export const TaskBox: FC = () => {
  const [tasks, setTasks] = useState<TasksType>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('all');

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

  const handleFilterChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setFilter(event.target.value);
    },
    [],
  );

  useEffect(() => {
    void fetchTask();
    const filterCondition = filter === 'archived';
    setTasks(tasks.filter((task) => task.isArchived === filterCondition));
  }, [filter]);

  return (
    <>
      <TaskFilter
        options={['all', 'archived', 'pending']}
        value={filter}
        label="filter"
        onChange={handleFilterChange}
      />
      <TaskList
        tasks={tasks}
        handleArchived={handleArchived}
        handlePinned={handlePinned}
        loading={isLoading}
      />
    </>
  );
};
