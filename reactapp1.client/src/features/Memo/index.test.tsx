import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { vi } from 'vitest';
import { Memo } from '.';
import { server } from '@/test/node';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const user = userEvent.setup();

describe('MemoInput表示', () => {
  test('MemoInputが正常に表示される', () => {
    render(<Memo />);
    expect(screen.getByPlaceholderText('メモを入力...')).toBeInTheDocument();
  });
});

describe('メモ表示', () => {
  test('メモが存在する場合、メモ一覧を表示させる', async () => {
    render(<Memo />);

    await waitFor(() => screen.getByText('Memo1'));
    expect(screen.getByText('Memo1')).toBeInTheDocument();
    expect(screen.getByText('Memo2')).toBeInTheDocument();
    expect(screen.getByText('Memo3')).toBeInTheDocument();
    expect(screen.getByText('Memo4')).toBeInTheDocument();
  });

  test('メモが存在しない場合、メモがない場合の画面が表示される', async () => {
    server.use(
      http.get('api/Memos', () => {
        return HttpResponse.json([]);
      }),
    );

    render(<Memo />);

    const message =
      await screen.findByText('追加したメモはここに表示されます。');
    expect(message).toBeInTheDocument();
  });
});

describe('メモ登録', () => {
  test('メモを登録した場合、登録したメモが一覧に表示される', async () => {
    server.use(
      http.post('/api/memos', () => {
        return HttpResponse.json({ status: 201 });
      }),
      http.get('api/Memos', () => {
        return HttpResponse.json([
          { id: 1, description: 'Memo1' },
          { id: 2, description: 'Memo2' },
          { id: 3, description: 'Memo3' },
          { id: 4, description: 'Memo4' },
          { id: 5, description: 'New memo' },
        ]);
      }),
    );

    render(<Memo />);

    const input = screen.getByPlaceholderText('メモを入力...');
    await user.type(input, 'New memo');
    await user.tab();

    const newMemo = await screen.findByText('New memo');

    expect(newMemo).toBeInTheDocument();
  });

  test('空のメモは登録できない', async () => {
    const postSpy = vi.fn();
    server.use(
      http.post('/api/memos', () => {
        postSpy();

        return HttpResponse.json({ status: 201 });
      }),
    );

    render(<Memo />);

    const input = screen.getByPlaceholderText('メモを入力...');
    await user.type(input, '   ');
    await user.tab();

    await waitFor(() => {
      expect(postSpy).not.toHaveBeenCalled();
    });
  });
});
