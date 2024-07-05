import { TaskList } from '../components/TaskList';
import * as TaskStories from '../stories/Task.stories.ts';

export default {
  component: TaskList,
  title: 'Task List',
  excludeStories: /.*Data$/,
};

export const Default = {
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

export const Loading = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    ...Loading.args,
    loading: false,
  },
};
