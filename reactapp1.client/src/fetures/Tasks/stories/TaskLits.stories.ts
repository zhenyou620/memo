import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Meta, StoryObj } from '@storybook/react';
import { TaskList } from '../components/TaskList';
import * as TaskStories from '../stories/Task.stories.ts';

const meta: Meta<typeof TaskList> = {
  component: TaskList,
  title: 'Task List',
  excludeStories: /.*Data$/,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
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
    ...Loading.args,
    loading: false,
  },
};

export const Mobile: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
};
