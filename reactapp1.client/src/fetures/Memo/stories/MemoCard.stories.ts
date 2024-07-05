import { MemoCard } from '../components/Card/MemoCard';

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
