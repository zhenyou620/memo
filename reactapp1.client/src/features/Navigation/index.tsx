import { FC } from 'react';
import { NavigationButton } from './NavigationButton.tsx';

export const Navigation: FC = () => {
  const items = ['Memo', 'Task'];
  const handleClick = () => {}

  return (
    <div>
      <NavigationButton {...{ items,  }} />
    </div>
  );
};
