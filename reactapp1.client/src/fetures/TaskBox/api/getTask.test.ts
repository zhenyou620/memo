import { getTasks } from './getTasks';
import { server } from '@/test/node';
server.listen();

test('Taskデータが取得できる', async () => {
  const tasks = await getTasks();
  expect(tasks).toEqual([
    {
      id: 1,
      text: 'Test Task',
    },
    {
      id: 1,
      text: 'Test Task',
      isArchived: true,
    },
    {
      id: 1,
      text: 'Test Task',
      isPinned: true,
    },
    {
      id: 1,
      text: 'Test Task',
      isArchived: true,
      isPinned: true,
    },
  ]);
});
