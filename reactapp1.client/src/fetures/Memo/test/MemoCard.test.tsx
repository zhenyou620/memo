import { render, screen } from '@testing-library/react';
import { MemoCard } from '../components/Card/MemoCard';
import { MemoData } from './fixtures';
import '@testing-library/jest-dom';

test('MemoDataの数だけ表示される', () => {
  const MemoCardElement = MemoData.map((memo) => (
    <MemoCard memo={memo}></MemoCard>
  ));
  render(MemoCardElement);
  expect(screen.getAllByRole('paragraph')).toHaveLength(MemoData.length);
});

test('一覧アイテムが空の時、メッセージが表示される', () => {
  const MemoCardElement = [].map((memo) => <MemoCard memo={memo}></MemoCard>);
  render(MemoCardElement);
  const card = screen.queryByRole('paragraph');
  expect(card).not.toBeInTheDocument();
  expect(card).toBeNull();
  expect(
    screen.getByAltText('追加したメモはここに表示されます。'),
  ).toBeInTheDocument();
});
