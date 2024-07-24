import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { delay, http, HttpResponse } from 'msw';
import { TaskBox } from '.';
import { server } from '@/test/node';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const user = userEvent.setup();

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
      http.get('api/Tasks', () => {
        return HttpResponse.json([]);
      }),
    );

    render(<TaskBox />);

    const empty = await screen.findByText('タスクはありません。');
    expect(empty).toBeInTheDocument();
  });

  test('データ取得中にローディング画面が表示される', () => {
    server.use(
      http.get('api/Tasks', async () => {
        await delay('infinite');
      }),
    );

    render(<TaskBox />);

    const loading = screen.getByRole('status');
    expect(loading).toBeInTheDocument();
  });

  test('ローディング画面が表示されたのち、タスク一覧が表示される', async () => {
    server.use(
      http.get('api/Tasks', async () => {
        await delay(1000);

        return HttpResponse.json([
          { id: 1, text: 'Task1' },
          { id: 2, text: 'Task2', isArchived: true },
          { id: 3, text: 'Task3', isPinned: true },
          { id: 4, text: 'Task4', isArchived: true, isPinned: true },
        ]);
      }),
    );

    render(<TaskBox />);

    const loading = screen.getByRole('status');
    expect(loading).toBeInTheDocument();

    await waitFor(() => screen.getByDisplayValue('Task1'), { timeout: 5000 });
    expect(screen.getByDisplayValue('Task1')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Task2')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Task3')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Task4')).toBeInTheDocument();
  });
});

describe('星マークまたはチェックボックス押下時の動き', () => {
  test('星マーク押下時、色が変わる', async () => {
    render(<TaskBox />);

    const starButton = await screen.findByLabelText('pinTask-1');

    expect(starButton).toContainHTML('stroke="currentColor"');
    expect(starButton).not.toContainHTML('fill="currentColor"');

    await user.click(starButton);

    expect(starButton).toContainHTML('fill="currentColor"');
    expect(starButton).not.toContainHTML('stroke="currentColor"');
  });

  test('チェックボックス押下時、チェックが入りテキストに取り消し線がひかれる', async () => {
    render(<TaskBox />);

    const checkBox = await screen.findByLabelText('archiveTask-1');
    const inputField = await screen.findByDisplayValue('Task1');

    expect(checkBox).not.toBeChecked();
    expect(inputField).not.toHaveClass('line-through');

    await user.click(checkBox);

    expect(checkBox).toBeChecked();
    expect(inputField).toHaveClass('line-through');
  });
});

describe('filter機能', () => {
  test('filterセレクトボックス選択時、タスク一覧が絞り込まれる', async () => {
    render(<TaskBox />);

    const filter = await screen.findByRole('combobox');
    const taskList = await screen.findAllByRole('textbox');

    expect(filter).toHaveValue('all');
    expect(taskList).toHaveLength(4);

    await user.selectOptions(filter, ['archived']);

    expect(filter).toHaveValue('archived');

    const updatedTaskList = await screen.findAllByRole('textbox');
    expect(updatedTaskList).toHaveLength(2);
  });
});
