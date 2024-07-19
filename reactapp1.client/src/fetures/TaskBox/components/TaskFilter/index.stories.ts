import { TaskFilter } from '.';

export default {
  component: TaskFilter,
  title: 'TaskFilter',
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    options: ['all', 'archived', 'pending'],
    value: 'all',
    label: 'filter',
  },
};
