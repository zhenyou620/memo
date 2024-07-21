import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MemoInput } from '.';

export const ActionsData = {
  handleChange: fn(),
  handleSubmit: fn(),
};

const meta: Meta<typeof MemoInput> = {
  component: MemoInput,
  title: 'Features/Memo/MemoInput',
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MemoInput>;

export const Default: Story = {
  args: {
    description: 'test',
  },
};
