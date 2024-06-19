import { FC } from 'react';
import { MemoInputContainer } from './components/Input/MemoInputContainer';
import { MemoCardContainer } from './components/Card/MemoCardContainer';

export const Memo: FC = () => {
  return (
    <>
      <MemoInputContainer></MemoInputContainer>
      <MemoCardContainer></MemoCardContainer>
    </>
  );
};
