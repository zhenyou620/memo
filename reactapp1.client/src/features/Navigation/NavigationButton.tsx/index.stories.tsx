import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { NavigationButton } from '.';

export const ActionsData = {
  handleClick: fn(),
};

const meta: Meta<typeof NavigationButton> = {
  component: NavigationButton,
  title: 'Features/Navigation/NavigationButton',
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavigationButton>;

export const Default: Story = {
  args: {
    ...ActionsData,
    items: ['Memo', 'Task'],
  },
};
