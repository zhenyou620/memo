import { Task } from '../components/Task';

export default {
  component: Task,
  title: 'Task',
  excludeStories: /.*Data$/,
};

export const Default = {
  args: {
    task: {
      id: 1,
      text: 'Test Task',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      isPinned: true,
    },
  },
};

export const Archived = {
  args: { task: { ...Default.args.task, isArchived: true } },
};
