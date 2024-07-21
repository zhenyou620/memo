import { Task } from '.';

export default {
  component: Task,
  title: 'Features/TaskBox/Task',
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
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
