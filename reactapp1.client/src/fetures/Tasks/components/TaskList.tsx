import { FC } from 'react';
import { Task as TaskType, Tasks } from '../types/Task';
import { LoadingRow } from './RoadingRow';
import { Task } from './Task';

type Props = {
  tasks: Tasks;
  loading: boolean;
};

export const TaskList: FC<Props> = ({ tasks, loading }) => {
  const handleArchived = (id: TaskType['id']) => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index >= 0) {
      tasks[index].isArchived = !tasks[index].isArchived;
    }
  };

  const handlePinned = (id: TaskType['id']) => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index >= 0) {
      tasks[id].isPinned = !tasks[id].isPinned;
    }
  };

  if (loading) {
    return (
      <div>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return <div>empty</div>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <Task {...{ task, handleArchived, handlePinned }} key={task.id}></Task>
      ))}
    </div>
  );
};
