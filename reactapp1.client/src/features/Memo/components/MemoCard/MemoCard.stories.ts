import { MemoCard } from '.';

export default {
  component: MemoCard,
  title: 'Features/Memo/MemoCard',
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    memos: [{ id: '1', description: 'メモ1' }],
  },
};
