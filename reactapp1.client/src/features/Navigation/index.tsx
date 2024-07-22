import { FC, useContext } from 'react';
import {
  navigationItemsType,
  navigationItemType,
} from '../../types/navigationItemsType';
import { NavigationButton } from './components/NavigationButton';
import { navigationContext } from '@/stores/navigationContext';

export const Navigation: FC = () => {
  const { current, updateCurrent } = useContext(navigationContext);

  const items: navigationItemsType = ['Memo', 'Task'];
  const handleClick = (item: navigationItemType) => {
    updateCurrent(item);
  };

  return (
    <nav>
      <NavigationButton {...{ items, current, handleClick }} />
    </nav>
  );
};
