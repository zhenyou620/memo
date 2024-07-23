import { Meta, StoryObj } from '@storybook/react';
import { Memo } from '.';
import { handlers } from '@/test/handlers';

const meta: Meta<typeof Memo> = {
  component: Memo,
  title: 'Features/Memo/Memo',
  parameters: {
    msw: {
      handlers,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Memo>;

export const Default: Story = {};
