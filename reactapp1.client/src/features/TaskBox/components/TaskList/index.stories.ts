import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Meta, StoryObj } from '@storybook/react';
import * as TaskStories from '../Task/index.stories.ts';
import { TaskList } from './index.tsx';

const meta: Meta<typeof TaskList> = {
  component: TaskList,
  title: 'Task List',
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

export const Default: Story = {
  args: {
    tasks: [
      {
        ...TaskStories.Default.args.task,
      },
      {
        ...TaskStories.Default.args.task,
        isArchived: true,
      },
      {
        ...TaskStories.Default.args.task,
        isPinned: true,
      },
      {
        ...TaskStories.Default.args.task,
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
