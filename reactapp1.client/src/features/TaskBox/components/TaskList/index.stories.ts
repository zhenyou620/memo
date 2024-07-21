import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Meta, StoryObj } from '@storybook/react';
import { TaskList } from './index.tsx';

const meta: Meta<typeof TaskList> = {
  component: TaskList,
  title: 'Features/TaskBox/Task List',
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TaskList>;

const defaultTask = {
  id: 1,
  text: 'Test Task',
};

export const Default: Story = {
  args: {
    tasks: [
      {
        ...defaultTask,
      },
      {
        ...defaultTask,
        isArchived: true,
      },
      {
        ...defaultTask,
        isPinned: true,
      },
      {
        ...defaultTask,
        isArchived: true,
        isPinned: true,
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    tasks: [],
    loading: false,
  },
};
