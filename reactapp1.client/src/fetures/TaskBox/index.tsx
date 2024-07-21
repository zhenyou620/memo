import {
  FC,
  useEffect,
  useCallback,
  useState,
  ChangeEvent,
  useMemo,
} from 'react';
import { getTasks } from './api/getTasks';
import { TaskFilter } from './components/TaskFilter';
import { TaskList } from './components/TaskList';
import { FilterType } from './types/FilterType';
import { TaskType, TasksType } from './types/TaskType';

export const TaskBox: FC = () => {
  const [tasks, setTasks] = useState<TasksType>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState<FilterType>('all');

  const fetchTasks = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getTasks();
      setTasks(data);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks().catch(console.error);
  }, [fetchTasks]);

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
      setFilter(event.target.value as FilterType);
    },
    [],
  );

  const filteredTask = useMemo(() => {
    if (filter === 'all') {
      return tasks;
    }

    return tasks.filter((task) =>
      filter === 'archived'
        ? task.isArchived === true
        : task.isArchived === false,
    );
  }, [filter, tasks]);

  return (
    <>
      <TaskFilter
        options={['all', 'archived', 'pending']}
        value={filter}
        label="filter"
        onChange={handleFilterChange}
      />
      <TaskList
        tasks={filteredTask}
        handleArchived={handleArchived}
        handlePinned={handlePinned}
        loading={isLoading}
      />
    </>
  );
};
