import { Meta, StoryObj } from '@storybook/react';
import { TaskFilter } from '.';

const meta: Meta<typeof TaskFilter> = {
  component: TaskFilter,
  title: 'Features/TaskBox/TaskFilter',
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TaskFilter>;

export const Default: Story = {
  args: {
    options: ['all', 'archived', 'pending'],
    value: 'all',
    label: 'filter',
  },
};
