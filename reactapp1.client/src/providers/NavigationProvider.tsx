import { FC, useState, PropsWithChildren } from 'react';
import { navigationContext } from '@/stores/navigationContext';
import { navigationItemType } from '@/types/navigationItemsType';

export const NavigationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [current, setCurrent] = useState<navigationItemType>('Memo');

  const updateCurrent = (item: navigationItemType) => {
    setCurrent(item);
  };

  return (
    <navigationContext.Provider value={{ current, updateCurrent }}>
      {children}
    </navigationContext.Provider>
  );
};
