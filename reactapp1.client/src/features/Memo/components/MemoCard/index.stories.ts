import { Meta, StoryObj } from '@storybook/react';
import { MemoCard } from '.';

const meta: Meta<typeof MemoCard> = {
  component: MemoCard,
  title: 'Features/Memo/MemoCard',
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MemoCard>;

export const Default: Story = {
  args: {
    memos: [{ id: 1, description: 'メモ1' }],
  },
};
