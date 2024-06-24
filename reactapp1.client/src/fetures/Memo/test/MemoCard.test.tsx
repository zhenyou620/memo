import { render, screen } from '@testing-library/react';
import { MemoCard } from '../components/Card/MemoCard';
import { MemoData } from './fixtures';

test('MemoDataの数だけ表示される', () => {
  const MemoCardElement = MemoData.map((memo) => (
    <MemoCard memo={memo}></MemoCard>
  ));
  render(<>{MemoCardElement}</>);
  expect(screen.getAllByRole('paragraph')).toHaveLength(MemoData.length);
});
