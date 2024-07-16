import { TaskBox } from '.';
import { render, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  http.get('api/GetTask', () => {
    return HttpResponse.json([
      { id: 1, text: 'Task1' },
      { id: 2, text: 'Task2', isArchived: true },
      { id: 3, text: 'Task3', isPinned: true },
      { id: 4, text: 'Task4', isArchived: true, isPinned: true },
    ]);
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('タスク表示', () => {
  test('タスクが存在する場合、タスク一覧を表示させる', async () => {
    render(<TaskBox />);

    await waitFor(() => screen.getByDisplayValue('Task1'));
    expect(screen.getByDisplayValue('Task1')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Task2')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Task3')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Task4')).toBeInTheDocument();
  });

  test('タスクが存在しない場合、タスクがない旨の画面が表示される', async () => {
    server.use(
      http.get('api/GetTask', () => {
        return HttpResponse.json([]);
      }),
    );

    render(<TaskBox />);
    const empty = await screen.findByText('タスクはありません。');
    expect(empty).toBeInTheDocument();
  });
});
