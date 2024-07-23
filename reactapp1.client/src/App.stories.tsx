import { Meta, StoryObj } from '@storybook/react';
import App from './App';
import { handlers } from '@/test/handlers';

const meta: Meta<typeof App> = {
  component: App,
  title: 'Pages/App',
  parameters: {
    msw: {
      handlers,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof App>;

export const Default: Story = {};
