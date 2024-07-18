import { render, screen } from '@testing-library/react';
import { MemoCard } from '../../components/MemoCard';
import { MemoData } from './fixtures';
import '@testing-library/jest-dom';

test('MemoDataの数だけ表示される', () => {
  render(<MemoCard memos={MemoData}></MemoCard>);
  expect(screen.getAllByRole('paragraph')).toHaveLength(MemoData.length);
});

test('一覧アイテムが空の時、メッセージが表示される', () => {
  render(<MemoCard memos={[]}></MemoCard>);
  const card = screen.queryByRole('paragraph');
  expect(card).not.toBeInTheDocument();
  expect(card).toBeNull();
  expect(
    screen.getByAltText('追加したメモはここに表示されます。'),
  ).toBeInTheDocument();
});
