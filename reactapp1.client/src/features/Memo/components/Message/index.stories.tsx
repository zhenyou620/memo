import { Meta, StoryObj } from '@storybook/react';
import { Message } from '.';

const meta: Meta<typeof Message> = {
  component: Message,
  title: 'Features/Memo/Message',
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Message>;

export const Default: Story = {};
