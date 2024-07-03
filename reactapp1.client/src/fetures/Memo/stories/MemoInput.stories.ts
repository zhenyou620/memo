import { fn } from '@storybook/test';
import { MemoInput } from '../components/Input/MemoInput';

export const ActionsData = {
  onBlurTack: fn(),
};

export default {
  component: MemoInput,
  title: 'MemoInput',
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
    id: '1',
    description: 'test',
  },
};
