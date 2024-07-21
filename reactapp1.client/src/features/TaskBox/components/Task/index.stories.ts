import { Meta, StoryObj } from '@storybook/react';
import { Task } from '.';

const meta: Meta<typeof Task> = {
  component: Task,
  title: 'Features/TaskBox/Task',
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Task>;

const defaultTask = {
  id: 1,
  text: 'Test Task',
};

export const Default: Story = {
  args: {
    task: defaultTask,
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...defaultTask,
      isPinned: true,
    },
  },
};

export const Archived: Story = {
  args: { task: { ...defaultTask, isArchived: true } },
};
