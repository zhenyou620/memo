import { Meta, StoryObj } from '@storybook/react';
import { TaskBox } from '.';
import { handlers } from '@/test/handlers';

const meta: Meta<typeof TaskBox> = {
  component: TaskBox,
  title: 'TaskBox',
  parameters: {
    msw: {
      handlers,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TaskBox>;

export const Default: Story = {};
