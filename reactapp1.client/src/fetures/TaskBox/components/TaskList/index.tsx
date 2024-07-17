import { FC } from 'react';
import { TaskType, TasksType } from '../../types/TaskType';
import { Task } from '../Task';
import { Empty } from './Empty';
import { Loading } from './Loading';

type Props = {
  tasks: TasksType;
  handleArchived: (id: TaskType['id']) => void;
  handlePinned: (id: TaskType['id']) => void;
  loading?: boolean;
};

export const TaskList: FC<Props> = ({
  tasks,
  handleArchived,
  handlePinned,
  loading,
}) => {
  if (loading) {
    return <Loading />;
  }

  if (tasks.length === 0) {
    return <Empty />;
  }

  return (
    <div>
      {tasks.map((task) => (
        <Task {...{ task, handleArchived, handlePinned }} key={task.id} />
      ))}
    </div>
  );
};
