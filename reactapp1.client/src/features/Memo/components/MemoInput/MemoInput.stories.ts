import { fn } from '@storybook/test';
import { MemoInput } from '.';

export const ActionsData = {
  handleChange: fn(),
  handleSubmit: fn(),
};

export default {
  component: MemoInput,
  title: 'Features/Memo/MemoInput',
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    id: 1,
    description: 'test',
  },
};
