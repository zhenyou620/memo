import { ReactElement } from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import App from './App';
import { NavigationProvider } from './providers/NavigationProvider';
import { navigationContext } from './stores/navigationContext';
import { handlers } from '@/test/handlers';

const meta: Meta<typeof App> = {
  component: App,
  title: 'Pages/App',
  decorators: [
    (Story: StoryFn<typeof App>): ReactElement => (
      <NavigationProvider>
        <Story />
      </NavigationProvider>
    ),
  ],
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

export const MemoSelected: Story = {
  decorators: [
    (Story: StoryFn<typeof App>): ReactElement => (
      <navigationContext.Provider
        value={{ current: 'Memo', updateCurrent: () => {} }}
      >
        <Story />
      </navigationContext.Provider>
    ),
  ],
};

export const TaskBoxSelected: Story = {
  decorators: [
    (Story: StoryFn<typeof App>): ReactElement => (
      <navigationContext.Provider
        value={{ current: 'Task', updateCurrent: () => {} }}
      >
        <Story />
      </navigationContext.Provider>
    ),
  ],
};
