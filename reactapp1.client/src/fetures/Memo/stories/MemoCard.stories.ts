import { MemoCard } from '../components/MemoCard';

export default {
  component: MemoCard,
  title: 'MemoCard',
  excludeStories: /.*Data$/,
};

export const Default = {
  args: {
    memos: [{ id: '1', description: 'メモ1' }],
  },
};
